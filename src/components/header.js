/* Navigation commune, lisible et identique sur toutes les pages. */

import { shop } from "../data/iphones.js";
import { icon } from "./icons.js";

function navLink(label, href, pageName, currentPage) {
  const activeClass = currentPage === pageName ? "text-electric" : "text-slate-700 hover:text-electric";
  return `<a href="${href}" class="text-sm font-bold transition-colors ${activeClass}">${label}</a>`;
}

export function renderHeader() {
  const header = document.querySelector("#site-header");
  if (!header) return;

  const currentPage = document.body.dataset.page;

  header.innerHTML = `
    <header class="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div class="page-wrap flex min-h-16 items-center justify-between gap-4 py-3">
        <a href="index.html" class="flex min-w-0 items-center gap-3" aria-label="Accueil KING OFF 6J BUSINESS">
          <img src="./images/ui/brand-mark.svg" width="40" height="40" alt="" class="h-10 w-10 rounded-lg">
          <span class="truncate text-sm font-black tracking-tight text-ink">${shop.name}</span>
        </a>

        <nav class="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          ${navLink("Accueil", "index.html", "home", currentPage)}
          ${navLink("Catalogue", "catalogue.html", "catalogue", currentPage)}
          ${navLink("Contact", "contact.html", "contact", currentPage)}
        </nav>

        <div class="flex items-center gap-2">
          <a href="panier.html" class="relative inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 text-sm font-extrabold text-ink transition-colors hover:border-electric hover:text-electric" aria-label="Voir le panier">
            ${icon("bag")}
            <span class="hidden sm:inline">Panier</span>
            <span id="cart-count" class="grid h-5 min-w-5 place-items-center rounded-md bg-electric px-1 text-[11px] text-white">0</span>
          </a>
          <button id="menu-button" type="button" class="icon-button lg:hidden" aria-label="Ouvrir le menu" aria-expanded="false">
            <span id="menu-icon">${icon("menu")}</span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" class="hidden border-t border-slate-200 bg-white lg:hidden">
        <nav class="page-wrap flex flex-col gap-4 py-5" aria-label="Navigation mobile">
          ${navLink("Accueil", "index.html", "home", currentPage)}
          ${navLink("Catalogue", "catalogue.html", "catalogue", currentPage)}
          ${navLink("Contact", "contact.html", "contact", currentPage)}
        </nav>
      </div>
    </header>
  `;

  const button = document.querySelector("#menu-button");
  const menu = document.querySelector("#mobile-menu");
  const menuIcon = document.querySelector("#menu-icon");

  button?.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    button.setAttribute("aria-expanded", String(!isOpen));
    button.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu");
    menuIcon.innerHTML = isOpen ? icon("menu") : icon("close");
  });
}
