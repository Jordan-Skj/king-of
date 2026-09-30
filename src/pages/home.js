/* Logique réservée à la page d'accueil. */

import { iphones } from "../data/iphones.js";
import { productCard } from "../components/product-card.js";

// Affiche six iPhone mis en avant dans la section "Sélection".
export function initHomePage() {
  const featuredGrid = document.querySelector("#featured-products");
  if (!featuredGrid) return;

  const featuredPhones = iphones.filter((iphone) => iphone.featured).slice(0, 6);
  featuredGrid.innerHTML = featuredPhones.map(productCard).join("");
}
