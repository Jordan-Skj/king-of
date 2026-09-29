/* Logique de recherche, filtre et tri sur la page catalogue. */

import { filtersMarkup } from "../components/filters.js";
import { productCard } from "../components/product-card.js";
import { iphones } from "../data/iphones.js";

// Applique les choix du visiteur sur la liste originale des iPhone.
function filterAndSortPhones(query, family, storage, sort) {
  const normalizedQuery = query.toLowerCase().trim();

  const filteredPhones = iphones.filter((iphone) => {
    const searchableText = `${iphone.model} ${iphone.storage}`.toLowerCase();
    const matchesQuery = searchableText.includes(normalizedQuery);
    const matchesFamily = family === "all" || iphone.family === family;
    const matchesStorage = storage === "all" || iphone.storage === storage;

    return matchesQuery && matchesFamily && matchesStorage;
  });

  if (sort === "low") return [...filteredPhones].sort((a, b) => a.price - b.price);
  if (sort === "high") return [...filteredPhones].sort((a, b) => b.price - a.price);

  return filteredPhones;
}

// Prépare la page et branche les événements des filtres.
export function initCataloguePage() {
  const filtersRoot = document.querySelector("#catalogue-filters");
  const productsRoot = document.querySelector("#catalogue-products");
  const resultCount = document.querySelector("#catalogue-count");
  if (!filtersRoot || !productsRoot || !resultCount) return;

  filtersRoot.innerHTML = filtersMarkup();

  const searchInput = document.querySelector("#search-input");
  const familyFilter = document.querySelector("#family-filter");
  const storageFilter = document.querySelector("#storage-filter");
  const sortFilter = document.querySelector("#sort-filter");
  const initialSearch = new URLSearchParams(window.location.search).get("search") || "";

  searchInput.value = initialSearch;

  // Cette fonction redessine le catalogue à chaque changement de filtre.
  function renderCatalogue() {
    const visiblePhones = filterAndSortPhones(
      searchInput.value,
      familyFilter.value,
      storageFilter.value,
      sortFilter.value
    );

    resultCount.textContent = `${visiblePhones.length} modèle${visiblePhones.length > 1 ? "s" : ""} trouvé${visiblePhones.length > 1 ? "s" : ""}`;

    productsRoot.innerHTML = visiblePhones.length
      ? visiblePhones.map(productCard).join("")
      : `<div class="card-surface col-span-full p-10 text-center"><p class="text-lg font-black text-ink">Aucun iPhone ne correspond à votre recherche.</p><p class="mt-2 text-sm text-slate-500">Modifiez un filtre ou contactez-nous sur WhatsApp.</p></div>`;
  }

  // Écoute tous les champs qui peuvent modifier les résultats.
  [searchInput, familyFilter, storageFilter, sortFilter].forEach((element) => {
    element.addEventListener("input", renderCatalogue);
    element.addEventListener("change", renderCatalogue);
  });

  renderCatalogue();
}
