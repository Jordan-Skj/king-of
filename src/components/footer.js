/* Le footer contient les informations simples affichées au bas de chaque page. */

import { shop } from "../data/iphones.js";

// Place le footer commun dans l'élément qui possède l'id "site-footer".
export function renderFooter() {
  const footer = document.querySelector("#site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="bg-ink text-white">
      <div class="page-wrap grid gap-10 py-12 sm:grid-cols-[1.3fr_1fr]">
        <div>
          <p class="text-lg font-black">${shop.name}</p>
          <p class="mt-3 max-w-md text-sm leading-6 text-slate-300">iPhone neufs · Prix en dollars · Retrait ou livraison à convenir sur WhatsApp.</p>
        </div>
        <div class="sm:text-right">
          <p class="text-sm font-black">Commandes WhatsApp</p>
          <a href="https://wa.me/${shop.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="mt-3 inline-block text-lg font-black text-electric-light hover:text-white">${shop.whatsappDisplay}</a>
          <p class="mt-3 text-sm text-slate-300">${shop.city}</p>
        </div>
      </div>
      <div class="border-t border-white/10">
        <div class="page-wrap py-5 text-xs text-slate-400">© ${new Date().getFullYear()} ${shop.name}. Site de démonstration — disponibilité confirmée par WhatsApp.</div>
      </div>
    </footer>
  `;
}
