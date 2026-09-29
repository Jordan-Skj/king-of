/*
  Une carte de produit est utilisée dans l'accueil et dans le catalogue.
  La fonction reçoit un objet iPhone et retourne le HTML de la carte.
*/

import { formatUSD } from "../utils/money.js";

// Crée une carte d'iPhone uniforme dans toutes les pages.
export function productCard(iphone) {
  return `
    <article class="group card-surface overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(7,22,47,0.12)]">
      <a href="produit.html?id=${iphone.id}" class="block bg-gradient-to-b from-blue-50 to-white">
        <img src="${iphone.image}" alt="Aperçu officiel Apple de ${iphone.model}" class="product-image" loading="lazy">
      </a>
      <div class="p-5">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="text-xs font-extrabold uppercase tracking-[0.16em] text-electric">iPhone neuf</p>
            <h2 class="mt-1 text-lg font-black text-ink">${iphone.model}</h2>
          </div>
          <span class="tag">${iphone.storage}</span>
        </div>
        <p class="mt-4 text-2xl font-black tracking-tight text-ink">${formatUSD(iphone.price)}</p>
        <p class="mt-1 text-sm text-slate-500">Disponibilité et détails confirmés sur WhatsApp.</p>
        <div class="mt-5 grid grid-cols-2 gap-3">
          <a href="produit.html?id=${iphone.id}" class="btn-secondary px-3">Voir</a>
          <button type="button" class="btn-primary px-3" data-add-to-cart="${iphone.id}">Ajouter</button>
        </div>
      </div>
    </article>
  `;
}
