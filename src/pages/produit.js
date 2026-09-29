/* Logique de la page qui affiche un seul iPhone. */

import { getIphoneById } from "../data/iphones.js";
import { formatUSD } from "../utils/money.js";

// Lit l'id après le point d'interrogation dans une URL comme produit.html?id=iphone-15-128.
function getProductIdFromUrl() {
  return new URLSearchParams(window.location.search).get("id");
}

// Dessine les détails du modèle choisi.
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
      <a href="catalogue.html" class="text-sm font-bold text-electric hover:underline">← Retour au catalogue</a>
      <div class="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div class="card-surface grid min-h-96 place-items-center overflow-hidden bg-gradient-to-b from-blue-50 to-white p-8">
          <img src="${iphone.image}" alt="Aperçu officiel Apple de ${iphone.model}" class="max-h-96 w-full object-contain" loading="eager">
        </div>
        <div>
          <p class="section-kicker">iPhone neuf</p>
          <h1 class="page-title">${iphone.model}</h1>
          <div class="mt-5 flex flex-wrap gap-2">
            <span class="tag">${iphone.storage}</span>
            <span class="tag">Retrait ou livraison</span>
          </div>
          <p class="mt-6 text-4xl font-black tracking-tight text-ink">${formatUSD(iphone.price)}</p>
          <p class="mt-2 max-w-xl leading-7 text-slate-600">Sélectionnez ce modèle pour préparer votre demande. Nous confirmons avec vous sur WhatsApp la disponibilité, les couleurs possibles, les accessoires et la livraison.</p>
          <button type="button" class="btn-primary mt-8 w-full py-4 sm:w-auto" data-add-to-cart="${iphone.id}">Ajouter au panier</button>
          <div class="mt-8 grid gap-3 border-t border-slate-200 pt-6 text-sm text-slate-600 sm:grid-cols-2">
            <p><strong class="text-ink">État :</strong> produit neuf</p>
            <p><strong class="text-ink">Capacité :</strong> ${iphone.storage}</p>
            <p><strong class="text-ink">Retrait :</strong> à convenir</p>
            <p><strong class="text-ink">Livraison :</strong> à confirmer sur WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
