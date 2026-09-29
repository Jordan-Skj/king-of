/*
  main.js est le point de départ : il charge les éléments communs,
  met à jour le compteur du panier et lance le script de la page ouverte.
*/

import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";
import { addToCart, getCartCount } from "./services/cart.js";
import { initHomePage } from "./pages/home.js";
import { initCataloguePage } from "./pages/catalogue.js";
import { initProduitPage } from "./pages/produit.js";
import { initPanierPage } from "./pages/panier.js";
import { initCommandePage } from "./pages/commande.js";
import { initConfirmationPage } from "./pages/confirmation.js";

// Met à jour le petit chiffre bleu dans le bouton Panier.
function syncCartBadge() {
  const badge = document.querySelector("#cart-count");
  if (badge) badge.textContent = getCartCount();
}

// Affiche un petit message temporaire après l'ajout d'un produit.
function showToast(message) {
  const oldToast = document.querySelector("#site-toast");
  oldToast?.remove();

  const toast = document.createElement("div");
  toast.id = "site-toast";
  toast.className = "fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-ink px-5 py-3 text-sm font-bold text-white shadow-2xl";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 2600);
}

// Écoute tous les boutons "Ajouter" même s'ils sont créés plus tard par une page.
function bindGlobalCartButtons() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-to-cart]");
    if (!button) return;

    addToCart(button.dataset.addToCart);
    syncCartBadge();
    showToast("L’iPhone a été ajouté au panier.");
  });
}

// Lance uniquement le JavaScript correspondant à la page HTML actuellement ouverte.
function initCurrentPage() {
  const page = document.body.dataset.page;

  if (page === "home") initHomePage();
  if (page === "catalogue") initCataloguePage();
  if (page === "product") initProduitPage();
  if (page === "cart") initPanierPage(syncCartBadge);
  if (page === "checkout") initCommandePage(syncCartBadge);
  if (page === "confirmation") initConfirmationPage();
}

// Démarre le site dans le bon ordre : composants communs, badge, événements, page.
renderHeader();
renderFooter();
syncCartBadge();
bindGlobalCartButtons();
initCurrentPage();
