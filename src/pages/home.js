/* Logique réservée à la page d'accueil. */

import { iphones } from "../data/iphones.js";
import { productCard } from "../components/product-card.js";

// Affiche six iPhone mis en avant dans la section "Sélection".
export function initHomePage() {
  const featuredGrid = document.querySelector("#featured-products");
  if (!featuredGrid) return;

  const featuredPhones = iphones.filter((iphone) => iphone.featured).slice(0, 6);
  featuredGrid.innerHTML = featuredPhones.map(productCard).join("");

  const searchForm = document.querySelector("#hero-search-form");
  const searchInput = document.querySelector("#hero-search-input");

  // Au clic sur rechercher, redirige vers le catalogue avec le mot recherché dans l'URL.
  searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    window.location.href = `catalogue.html?search=${encodeURIComponent(query)}`;
  });
}
