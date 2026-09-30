/* Logique de la fiche d'un iPhone. */

import { getIphoneById } from "../data/iphones.js";
import { formatUSD } from "../utils/money.js";
import { icon } from "../components/icons.js";

function getProductIdFromUrl() {
  return new URLSearchParams(window.location.search).get("id");
}

export function initProduitPage() {
  const root = document.querySelector("#product-page");
  if (!root) return;

  const iphone = getIphoneById(getProductIdFromUrl());

  if (!iphone) {
    root.innerHTML = `
      <section class="page-wrap py-20 text-center">
        <p class="section-kicker">Produit introuvable</p>
        <h1 class="page-title">Cet iPhone n'est pas disponible dans le lien reçu.</h1>
        <a href="catalogue.html" class="btn-primary mt-7">Voir le catalogue</a>
      </section>
    `;
    return;
  }

  document.title = `${iphone.model} ${iphone.storage} | KING OFF 6J BUSINESS`;

  root.innerHTML = `
    <section class="page-wrap py-10 sm:py-14">
      <a href="catalogue.html" class="text-link">${icon("arrowLeft", "h-4 w-4")} Retour au catalogue</a>
      <div class="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div class="card-surface grid min-h-96 place-items-center overflow-hidden bg-slate-50 p-8">
          <img src="${iphone.image}" alt="Illustration indicative d'un ${iphone.model} neuf" width="520" height="620" class="max-h-96 w-full object-contain" loading="eager">
        </div>
        <div>
          <p class="section-kicker">iPhone neuf</p>
          <h1 class="page-title">${iphone.model}</h1>
          <div class="mt-5 flex flex-wrap gap-2">
            <span class="tag">${iphone.storage}</span>
            <span class="tag">Retrait ou livraison à confirmer</span>
          </div>
          <p class="mt-6 text-4xl font-black tracking-tight text-ink">${formatUSD(iphone.price)}</p>
          <p class="mt-2 max-w-xl leading-7 text-slate-600">Prix affiché pour cette capacité. Avant toute vente, KING OFF 6J BUSINESS confirme la disponibilité, les options du produit et les conditions de réception sur WhatsApp.</p>
          <button type="button" class="btn-primary mt-8 w-full py-4 sm:w-auto" data-add-to-cart="${iphone.id}">Ajouter à ma sélection</button>
          <div class="mt-8 grid gap-3 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-600 sm:grid-cols-2">
            <p><strong class="text-ink">État :</strong> produit neuf</p>
            <p><strong class="text-ink">Capacité :</strong> ${iphone.storage}</p>
            <p><strong class="text-ink">Retrait :</strong> à confirmer</p>
            <p><strong class="text-ink">Livraison :</strong> à confirmer</p>
          </div>
          <p class="mt-5 text-xs leading-5 text-slate-500">Visuel indicatif : il ne remplace pas la vérification du produit disponible avant la commande.</p>
        </div>
      </div>
    </section>
  `;
}
