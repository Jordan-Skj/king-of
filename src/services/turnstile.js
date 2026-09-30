/*
  Turnstile protège le formulaire sans jamais exposer sa clé secrète.
  La clé publique vit dans iphones.js ; la clé secrète reste dans Cloudflare.
*/

import { shop } from "../data/iphones.js";

function loadTurnstileScript() {
  if (window.turnstile) return Promise.resolve(window.turnstile);

  return new Promise((resolve, reject) => {
    const existing = document.querySelector("script[data-turnstile-script]");
    if (existing) {
      existing.addEventListener("load", () => resolve(window.turnstile), { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.dataset.turnstileScript = "true";
    script.addEventListener("load", () => resolve(window.turnstile), { once: true });
    script.addEventListener("error", reject, { once: true });
    document.head.appendChild(script);
  });
}

export async function initTurnstile(container) {
  if (!shop.turnstileSiteKey) {
    container.innerHTML = '<p class="text-xs leading-5 text-slate-600">La protection Cloudflare Turnstile renforcée n’est pas encore configurée. Le formulaire utilise aussi un champ anti-robot, mais activez Turnstile avant la publication.</p>';
    return null;
  }

  try {
    const turnstile = await loadTurnstileScript();
    const id = turnstile.render(container, {
      sitekey: shop.turnstileSiteKey,
      theme: "light",
      action: "whatsapp_order"
    });

    return {
      async validate() {
        const token = turnstile.getResponse(id);
        if (!token) return { valid: false, message: "Veuillez terminer la vérification anti-robot." };

        const response = await fetch("/api/verify-turnstile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token })
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || !result.success) {
          turnstile.reset(id);
          return { valid: false, message: "La vérification a échoué. Réessayez ou contactez-nous sur WhatsApp." };
        }
        return { valid: true };
      }
    };
  } catch {
    container.innerHTML = '<p class="text-xs leading-5 text-red-700">La vérification anti-robot ne se charge pas. Vérifiez votre connexion ou contactez-nous sur WhatsApp.</p>';
    return null;
  }
}
