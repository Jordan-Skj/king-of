/* Logique de la page panier : affichage, quantité, suppression et total. */

import { cartItem } from "../components/cart-item.js";
import { getCartItems, getCartTotal, removeFromCart, updateCartQuantity } from "../services/cart.js";
import { formatUSD } from "../utils/money.js";

// Affiche le panier actuel ; il est rappelé après chaque clic sur +, − ou Retirer.
export function initPanierPage(syncCartBadge) {
  const root = document.querySelector("#cart-page");
  if (!root) return;

  function renderCart() {
    const items = getCartItems();
    const total = getCartTotal();

    if (items.length === 0) {
      root.innerHTML = `
        <section class="page-wrap py-20 text-center">
          <p class="section-kicker">Votre sélection</p>
          <h1 class="page-title">Votre panier est vide.</h1>
          <p class="mt-4 text-slate-600">Parcourez le catalogue pour choisir un iPhone.</p>
          <a href="catalogue.html" class="btn-primary mt-7">Voir le catalogue</a>
        </section>
      `;
      return;
    }

    root.innerHTML = `
      <section class="page-wrap py-10 sm:py-14">
        <p class="section-kicker">Votre sélection</p>
        <h1 class="page-title">Panier</h1>
        <div class="mt-8 grid gap-7 lg:grid-cols-[1fr_360px] lg:items-start">
          <div class="card-surface divide-y divide-slate-100 p-5 sm:p-7">${items.map(cartItem).join("")}</div>
          <aside class="card-surface p-6 lg:sticky lg:top-24">
            <p class="text-lg font-black text-ink">Résumé</p>
            <div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
              <span class="text-sm font-bold text-slate-500">Total estimé</span>
              <strong class="text-2xl font-black text-ink">${formatUSD(total)}</strong>
            </div>
            <p class="mt-4 text-xs leading-5 text-slate-500">Le prix et la disponibilité sont confirmés avec vous dans WhatsApp avant toute livraison.</p>
            <a href="commande.html" class="btn-primary mt-6 w-full py-4">Passer à la commande</a>
          </aside>
        </div>
      </section>
    `;
  }

  // Centralise les trois actions possibles sur une carte du panier.
  root.addEventListener("click", (event) => {
    const button = event.target.closest("[data-cart-action]");
    if (!button) return;

    const item = getCartItems().find((iphone) => iphone.id === button.dataset.id);
    if (!item) return;

    if (button.dataset.cartAction === "increase") updateCartQuantity(item.id, item.quantity + 1);
    if (button.dataset.cartAction === "decrease") updateCartQuantity(item.id, item.quantity - 1);
    if (button.dataset.cartAction === "remove") removeFromCart(item.id);

    syncCartBadge();
    renderCart();
  });

  renderCart();
}
