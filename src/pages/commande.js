/* Formulaire minimal : les données ne sont pas stockées sur le site, elles partent vers WhatsApp après validation. */

import { clearCart, getCartItems, getCartTotal } from "../services/cart.js";
import { buildOrderMessage, getWhatsAppUrl } from "../services/whatsapp-order.js";
import { initTurnstile } from "../services/turnstile.js";
import { formatUSD } from "../utils/money.js";

function checkoutItem(item) {
  return `
    <article class="flex gap-3 border-b border-slate-200 py-4 first:pt-0">
      <img src="${item.image}" alt="Illustration indicative d'un ${item.model} neuf" width="520" height="620" class="h-16 w-16 rounded-lg border border-slate-200 bg-slate-50 object-contain p-2" loading="lazy">
      <div class="min-w-0 flex-1">
        <p class="text-xs font-extrabold uppercase tracking-[0.12em] text-electric">${item.storage} · Neuf</p>
        <p class="truncate font-black text-ink">${item.model}</p>
        <p class="mt-1 text-sm text-slate-600">Quantité : ${item.quantity}</p>
      </div>
      <strong class="shrink-0 text-sm text-ink">${formatUSD(item.price * item.quantity)}</strong>
    </article>
  `;
}

export function initCommandePage(syncCartBadge) {
  const root = document.querySelector("#checkout-page");
  if (!root) return;

  const items = getCartItems();
  const total = getCartTotal();

  if (items.length === 0) {
    root.innerHTML = `
      <section class="page-wrap py-20 text-center">
        <p class="section-kicker">Commande</p>
        <h1 class="page-title">Votre panier est vide.</h1>
        <a href="catalogue.html" class="btn-primary mt-7">Voir le catalogue</a>
      </section>
    `;
    return;
  }

  root.innerHTML = `
    <section class="page-wrap py-10 sm:py-14">
      <p class="section-kicker">Commande</p>
      <h1 class="page-title">Préparez votre demande WhatsApp</h1>
      <p class="mt-3 max-w-2xl leading-7 text-slate-600">Vérifiez votre sélection, puis ouvrez WhatsApp. La disponibilité, les conditions de retrait ou de livraison et le montant final sont confirmés avec vous avant toute vente.</p>

      <div class="mt-8 grid gap-7 lg:grid-cols-[1fr_360px] lg:items-start">
        <form id="checkout-form" class="card-surface p-6 sm:p-8" novalidate>
          <div class="grid gap-5 sm:grid-cols-2">
            <label class="sm:col-span-2">
              <span class="form-label">Nom (facultatif)</span>
              <input name="name" autocomplete="name" maxlength="80" class="input-field" placeholder="Comment souhaitez-vous être appelé ?">
            </label>
            <label>
              <span class="form-label">Réception souhaitée</span>
              <select name="delivery" required class="input-field" aria-describedby="delivery-help">
                <option value="">Sélectionnez une option</option>
                <option value="Livraison à confirmer">Livraison à confirmer</option>
                <option value="Retrait à confirmer">Retrait à confirmer</option>
              </select>
              <span id="delivery-help" class="mt-2 block text-xs leading-5 text-slate-600">Le coût éventuel et l'horaire sont confirmés sur WhatsApp.</span>
            </label>
            <label>
              <span class="form-label">Commune ou quartier (facultatif)</span>
              <input name="location" autocomplete="address-level3" maxlength="100" class="input-field" placeholder="Ex. Mont-Ngafula">
            </label>
          </div>

          <!-- Champ invisible : les robots le remplissent souvent, les humains non. -->
          <div class="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
            <label>Ne pas remplir <input name="website" tabindex="-1" autocomplete="off"></label>
          </div>

          <label class="mt-6 flex items-start gap-3 text-sm leading-6 text-slate-700">
            <input name="privacy" required type="checkbox" class="mt-1 h-4 w-4 rounded border-slate-400 text-electric focus:ring-electric">
            <span>J'ai lu la <a href="politique-confidentialite.html" class="font-bold text-electric underline underline-offset-2">politique de confidentialité</a> et j'accepte que les informations saisies soient ajoutées au message WhatsApp.</span>
          </label>

          <div id="turnstile-container" class="mt-6" aria-live="polite"></div>
          <p id="checkout-status" class="mt-4 text-sm leading-6 text-slate-600" role="status" aria-live="polite"></p>

          <button type="submit" class="btn-primary mt-5 w-full py-4">Continuer sur WhatsApp</button>
          <p class="mt-4 text-center text-xs leading-5 text-slate-600">Aucun paiement n'est réalisé ni enregistré sur ce site. Votre demande ne devient une vente qu'après confirmation avec KING OFF 6J BUSINESS.</p>
        </form>

        <aside class="card-surface p-6 lg:sticky lg:top-24">
          <p class="text-lg font-black text-ink">Votre sélection</p>
          <div class="mt-5 max-h-80 overflow-y-auto">${items.map(checkoutItem).join("")}</div>
          <div class="mt-5 flex items-center justify-between border-t border-slate-200 pt-5">
            <span class="text-sm font-bold text-slate-600">Total estimé</span>
            <strong class="text-xl font-black text-ink">${formatUSD(total)}</strong>
          </div>
          <p class="mt-4 text-xs leading-5 text-slate-600">Prix affichés en dollars. Les éventuels frais de livraison sont communiqués avant validation.</p>
        </aside>
      </div>
    </section>
  `;

  const form = document.querySelector("#checkout-form");
  const status = document.querySelector("#checkout-status");
  const startedAt = Date.now();
  let turnstileControl = null;

  initTurnstile(document.querySelector("#turnstile-container")).then((control) => {
    turnstileControl = control;
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const values = Object.fromEntries(new FormData(form).entries());
    if (values.website || Date.now() - startedAt < 1200) {
      status.textContent = "La demande n'a pas pu être validée. Réessayez dans un instant.";
      return;
    }

    if (turnstileControl) {
      status.textContent = "Vérification de sécurité en cours…";
      const check = await turnstileControl.validate();
      if (!check.valid) {
        status.textContent = check.message;
        return;
      }
    }

    const customer = {
      name: values.name.trim() || "Non renseigné",
      delivery: values.delivery,
      location: values.location.trim() || "À confirmer"
    };
    const message = buildOrderMessage(customer, items, total);

    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    clearCart();
    syncCartBadge();
    window.location.href = "confirmation.html";
  });
}
