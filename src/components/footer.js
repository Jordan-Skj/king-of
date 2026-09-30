/* Footer commun : contact réel et accès permanent aux pages légales. */

import { shop } from "../data/iphones.js";
import { icon } from "./icons.js";

export function renderFooter() {
  const footer = document.querySelector("#site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="bg-ink text-white">
      <div class="page-wrap grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div class="flex items-center gap-3">
            <img src="./images/ui/brand-mark.svg" width="40" height="40" alt="" class="h-10 w-10 rounded-lg">
            <p class="text-lg font-black">${shop.name}</p>
          </div>
          <p class="mt-4 max-w-md text-sm leading-6 text-slate-300">iPhone neufs, prix affichés en dollars. La disponibilité, le retrait et la livraison sont confirmés avant toute vente.</p>
        </div>

        <div>
          <p class="text-sm font-black">Commande</p>
          <a href="https://wa.me/${shop.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-electric-light hover:text-white">
            ${icon("chat")}
            Commander sur WhatsApp
          </a>
          <p class="mt-3 text-sm text-slate-300">${shop.whatsappDisplay}<br>${shop.city}</p>
        </div>

        <div>
          <p class="text-sm font-black">Informations</p>
          <nav class="mt-4 grid gap-2 text-sm text-slate-300" aria-label="Informations légales">
            <a href="mentions-legales.html" class="hover:text-white">Mentions légales</a>
            <a href="politique-confidentialite.html" class="hover:text-white">Confidentialité</a>
            <a href="conditions-generales.html" class="hover:text-white">Conditions générales</a>
            <a href="cookies.html" class="hover:text-white">Cookies et mesures d'audience</a>
            <button type="button" class="w-fit text-left hover:text-white" data-manage-consent>Gérer mes préférences</button>
          </nav>
        </div>
      </div>
      <div class="border-t border-white/15">
        <div class="page-wrap py-5 text-xs leading-5 text-slate-400">© ${new Date().getFullYear()} ${shop.name}. Apple et iPhone sont des marques de leurs titulaires respectifs. KING OFF 6J BUSINESS est un revendeur indépendant.</div>
      </div>
    </footer>
  `;
}
