/*
  Le panier et le choix de confidentialité sont conservés localement car ils sont nécessaires.
  Les mesures d'audience restent désactivées tant que le visiteur ne les accepte pas.
*/

import { shop } from "../data/iphones.js";

const CONSENT_KEY = "king-off-6j-consent-v1";

function readConsent() {
  try {
    return JSON.parse(localStorage.getItem(CONSENT_KEY));
  } catch {
    return null;
  }
}

function writeConsent(analytics) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics, updatedAt: new Date().toISOString() }));
}

function loadAnalytics() {
  if (!shop.analyticsToken || document.querySelector("script[data-kingoff-analytics]")) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.dataset.kingoffAnalytics = "true";
  script.dataset.cfBeacon = JSON.stringify({ token: shop.analyticsToken });
  document.head.appendChild(script);
}

function removeBanner() {
  document.querySelector("#cookie-banner")?.remove();
}

function renderBanner() {
  removeBanner();

  const banner = document.createElement("section");
  banner.id = "cookie-banner";
  banner.className = "fixed inset-x-0 bottom-0 z-50 border-t border-slate-300 bg-white p-4 shadow-lg";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-modal", "false");
  banner.setAttribute("aria-labelledby", "cookie-banner-title");
  banner.innerHTML = `
    <div class="page-wrap flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div class="max-w-3xl">
        <h2 id="cookie-banner-title" class="text-sm font-black text-ink">Vos préférences de confidentialité</h2>
        <p class="mt-1 text-sm leading-6 text-slate-600">Le panier et votre choix sont conservés localement. Les mesures d'audience, si elles sont activées, ne le seront qu'après votre accord. <a class="font-bold text-electric underline underline-offset-2" href="cookies.html">En savoir plus</a>.</p>
      </div>
      <div class="flex flex-col gap-2 sm:flex-row">
        <button type="button" class="btn-secondary" data-consent-choice="false">Refuser l'audience</button>
        <button type="button" class="btn-primary" data-consent-choice="true">Accepter l'audience</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);

  banner.addEventListener("click", (event) => {
    const button = event.target.closest("[data-consent-choice]");
    if (!button) return;

    const analytics = button.dataset.consentChoice === "true";
    writeConsent(analytics);
    if (analytics) loadAnalytics();
    removeBanner();
  });
}

export function initCookieConsent() {
  const savedConsent = readConsent();
  if (savedConsent?.analytics) loadAnalytics();
  if (!savedConsent) renderBanner();

  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-manage-consent]")) return;
    localStorage.removeItem(CONSENT_KEY);
    renderBanner();
  });
}
