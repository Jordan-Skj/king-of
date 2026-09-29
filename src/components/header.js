/*
  Le header est réutilisé sur toutes les pages.
  Une seule modification ici change automatiquement le menu partout.
*/

import { shop } from "../data/iphones.js";

// Retourne un lien avec une couleur différente quand il correspond à la page active.
function navLink(label, href, pageName, currentPage) {
  const activeClass = currentPage === pageName ? "text-electric" : "text-slate-600 hover:text-electric";
  return `<a href="${href}" class="text-sm font-bold transition ${activeClass}">${label}</a>`;
}

// Injecte le menu dans l'élément qui possède l'id "site-header".
export function renderHeader() {
  const header = document.querySelector("#site-header");
  if (!header) return;

  const currentPage = document.body.dataset.page;

  header.innerHTML = `
    <header class="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div class="page-wrap flex h-18 items-center justify-between gap-4 py-3">
        <a href="index.html" class="flex items-center gap-3" aria-label="Retour à l'accueil">
          <span class="grid h-10 w-10 place-items-center rounded-xl bg-ink text-sm font-black text-white">K6</span>
          <span class="hidden text-sm font-black tracking-tight text-ink sm:block">${shop.name}</span>
        </a>

        <nav class="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          ${navLink("Accueil", "index.html", "home", currentPage)}
          ${navLink("Catalogue", "catalogue.html", "catalogue", currentPage)}
          ${navLink("Contact", "contact.html", "contact", currentPage)}
        </nav>

        <div class="flex items-center gap-2">
          <a href="panier.html" class="relative inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 px-3 text-sm font-extrabold text-ink transition hover:border-electric-light" aria-label="Voir le panier">
            <svg aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" stroke-width="2"><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.4L20 8H6"/><circle cx="10" cy="20" r="1"/><circle cx="17" cy="20" r="1"/></svg>
            <span class="hidden sm:inline">Panier</span>
            <span id="cart-count" class="grid h-5 min-w-5 place-items-center rounded-full bg-electric px-1 text-[11px] text-white">0</span>
          </a>

          <button id="menu-button" type="button" class="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-ink lg:hidden" aria-label="Ouvrir le menu" aria-expanded="false">
            <svg aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" class="hidden border-t border-slate-100 bg-white lg:hidden">
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

  button?.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    button.setAttribute("aria-expanded", String(!isOpen));
  });
}
