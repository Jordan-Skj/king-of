/* Cette fonction dessine une ligne du panier. */

import { formatUSD } from "../utils/money.js";

// Reçoit un produit enrichi avec sa quantité et retourne son HTML.
export function cartItem(item) {
  return `
    <article class="flex gap-4 py-5 first:pt-0">
      <img src="${item.image}" alt="Aperçu officiel Apple de ${item.model}" class="h-20 w-20 rounded-2xl bg-blue-50 object-contain p-2 sm:h-24 sm:w-24" loading="lazy">
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-start justify-between gap-2">
          <div>
            <p class="text-xs font-extrabold uppercase tracking-[0.14em] text-electric">iPhone neuf · ${item.storage}</p>
            <h2 class="mt-1 font-black text-ink">${item.model}</h2>
          </div>
          <p class="font-black text-ink">${formatUSD(item.price * item.quantity)}</p>
        </div>
        <div class="mt-4 flex items-center justify-between gap-3">
          <div class="inline-flex items-center rounded-xl border border-slate-200 bg-white">
            <button type="button" class="h-9 w-9 text-lg font-black text-ink" data-cart-action="decrease" data-id="${item.id}" aria-label="Retirer une unité">−</button>
            <span class="grid h-9 min-w-9 place-items-center text-sm font-black text-ink">${item.quantity}</span>
            <button type="button" class="h-9 w-9 text-lg font-black text-ink" data-cart-action="increase" data-id="${item.id}" aria-label="Ajouter une unité">+</button>
          </div>
          <button type="button" class="text-sm font-bold text-slate-500 underline-offset-4 hover:text-red-600 hover:underline" data-cart-action="remove" data-id="${item.id}">Retirer</button>
        </div>
      </div>
    </article>
  `;
}
