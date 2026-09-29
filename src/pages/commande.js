/* Logique de la page commande : formulaire, message WhatsApp puis confirmation. */

import { clearCart, getCartItems, getCartTotal } from "../services/cart.js";
import { buildOrderMessage, getWhatsAppUrl } from "../services/whatsapp-order.js";
import { formatUSD } from "../utils/money.js";
import { setToStorage } from "../utils/storage.js";

// Version simple d'une ligne de panier utilisée uniquement dans le résumé de commande.
function checkoutItem(item) {
  return `
    <article class="flex gap-3 border-b border-slate-100 py-4 first:pt-0">
      <img src="${item.image}" alt="Aperçu officiel Apple de ${item.model}" class="h-16 w-16 rounded-xl bg-blue-50 object-contain p-2" loading="lazy">
      <div class="min-w-0 flex-1">
        <p class="text-xs font-extrabold uppercase tracking-[0.14em] text-electric">${item.storage} · Neuf</p>
        <p class="truncate font-black text-ink">${item.model}</p>
        <p class="mt-1 text-sm text-slate-500">Quantité : ${item.quantity}</p>
      </div>
      <strong class="shrink-0 text-sm text-ink">${formatUSD(item.price * item.quantity)}</strong>
    </article>
  `;
}

// Prépare le formulaire et le résumé avant de créer le message WhatsApp.
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
      <h1 class="page-title">Préparez votre message WhatsApp</h1>
      <p class="mt-3 max-w-2xl leading-7 text-slate-600">Après validation, WhatsApp s'ouvrira avec votre sélection et vos coordonnées. Le vendeur confirmera les détails du produit, la livraison ou le retrait.</p>
      <div class="mt-8 grid gap-7 lg:grid-cols-[1fr_360px] lg:items-start">
        <form id="checkout-form" class="card-surface p-6 sm:p-8">
          <div class="grid gap-5 sm:grid-cols-2">
            <label class="sm:col-span-2">
              <span class="form-label">Nom complet</span>
              <input name="name" required class="input-field" placeholder="Votre nom complet">
            </label>
            <label>
              <span class="form-label">Votre numéro WhatsApp</span>
              <input name="phone" required type="tel" class="input-field" placeholder="Ex. 08...">
            </label>
            <label>
              <span class="form-label">Réception souhaitée</span>
              <select name="delivery" required class="input-field">
                <option value="Livraison à convenir">Livraison à convenir</option>
                <option value="Retrait à convenir">Retrait à convenir</option>
              </select>
            </label>
            <label class="sm:col-span-2">
              <span class="form-label">Commune ou adresse</span>
              <input name="address" required class="input-field" placeholder="Ex. Mont-Ngafula, Kinshasa">
            </label>
          </div>
          <button type="submit" class="btn-primary mt-8 w-full py-4">Continuer sur WhatsApp</button>
          <p class="mt-4 text-center text-xs leading-5 text-slate-500">Aucun paiement n'est réalisé automatiquement sur ce site.</p>
        </form>
        <aside class="card-surface p-6 lg:sticky lg:top-24">
          <p class="text-lg font-black text-ink">Votre sélection</p>
          <div class="mt-5 max-h-80 overflow-y-auto">${items.map(checkoutItem).join("")}</div>
          <div class="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
            <span class="text-sm font-bold text-slate-500">Total estimé</span>
            <strong class="text-xl font-black text-ink">${formatUSD(total)}</strong>
          </div>
        </aside>
      </div>
    </section>
  `;

  // Au submit, sauvegarde une trace locale, ouvre WhatsApp puis va vers la confirmation.
  document.querySelector("#checkout-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const customer = Object.fromEntries(new FormData(event.currentTarget).entries());
    const message = buildOrderMessage(customer, items, total);

    setToStorage("king-off-6j-last-order", {
      customer,
      items,
      total,
      createdAt: new Date().toISOString()
    });

    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    clearCart();
    syncCartBadge();
    window.location.href = "confirmation.html";
  });
}
