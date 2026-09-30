/* Carte produit utilisée à l'accueil et dans le catalogue. */

import { formatUSD } from "../utils/money.js";
import { icon } from "./icons.js";

export function productCard(iphone) {
  return `
    <article class="card-surface overflow-hidden">
      <a href="produit.html?id=${iphone.id}" class="block border-b border-slate-200 bg-slate-50">
        <img src="${iphone.image}" alt="Illustration indicative d'un ${iphone.model} neuf" width="520" height="620" class="product-image" loading="lazy">
      </a>
      <div class="p-5">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="text-xs font-extrabold uppercase tracking-[0.14em] text-electric">iPhone neuf</p>
            <h2 class="mt-1 text-lg font-black text-ink">${iphone.model}</h2>
          </div>
          <span class="tag">${iphone.storage}</span>
        </div>
        <p class="mt-4 text-2xl font-black tracking-tight text-ink">${formatUSD(iphone.price)}</p>
        <p class="mt-1 text-sm leading-6 text-slate-600">Prix du modèle sélectionné. Disponibilité confirmée avant vente.</p>
        <div class="mt-5 flex items-center justify-between gap-4">
          <a href="produit.html?id=${iphone.id}" class="text-link">Voir la fiche ${icon("arrowRight", "h-4 w-4")}</a>
          <button type="button" class="btn-primary px-4" data-add-to-cart="${iphone.id}">Ajouter</button>
        </div>
      </div>
    </article>
  `;
}
