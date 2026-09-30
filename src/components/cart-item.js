/* Ligne d'un article sélectionné dans le panier. */

import { formatUSD } from "../utils/money.js";
import { icon } from "./icons.js";

export function cartItem(item) {
  return `
    <article class="flex gap-4 py-5 first:pt-0">
      <img src="${item.image}" alt="Illustration indicative d'un ${item.model} neuf" width="520" height="620" class="h-20 w-20 rounded-lg border border-slate-200 bg-slate-50 object-contain p-2 sm:h-24 sm:w-24" loading="lazy">
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-start justify-between gap-2">
          <div>
            <p class="text-xs font-extrabold uppercase tracking-[0.14em] text-electric">iPhone neuf · ${item.storage}</p>
            <h2 class="mt-1 font-black text-ink">${item.model}</h2>
          </div>
          <p class="font-black text-ink">${formatUSD(item.price * item.quantity)}</p>
        </div>
        <div class="mt-4 flex items-center justify-between gap-3">
          <div class="inline-flex items-center rounded-lg border border-slate-300 bg-white">
            <button type="button" class="grid h-9 w-9 place-items-center text-ink hover:text-electric" data-cart-action="decrease" data-id="${item.id}" aria-label="Retirer une unité">${icon("minus", "h-4 w-4")}</button>
            <span class="grid h-9 min-w-9 place-items-center text-sm font-black text-ink">${item.quantity}</span>
            <button type="button" class="grid h-9 w-9 place-items-center text-ink hover:text-electric" data-cart-action="increase" data-id="${item.id}" aria-label="Ajouter une unité">${icon("plus", "h-4 w-4")}</button>
          </div>
          <button type="button" class="text-sm font-bold text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-red-700" data-cart-action="remove" data-id="${item.id}">Retirer</button>
        </div>
      </div>
    </article>
  `;
}
