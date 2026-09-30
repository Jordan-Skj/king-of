function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Cache-Control": "no-store"
    }
  });
}

export async function onRequest({ request, env }) {
  if (request.method !== "POST") {
    return json({ success: false, message: "Méthode non autorisée." }, 405);
  }

  const origin = request.headers.get("Origin");
  const siteOrigin = new URL(request.url).origin;

  if (origin && origin !== siteOrigin) {
    return json({ success: false, message: "Origine non autorisée." }, 403);
  }

  if (!env.TURNSTILE_SECRET_KEY) {
    return json({ success: false, message: "Protection anti-robot non configurée." }, 503);
  }

  let token;
  try {
    ({ token } = await request.json());
  } catch {
    return json({ success: false, message: "Requête invalide." }, 400);
  }

  if (typeof token !== "string" || token.length < 20 || token.length > 4096) {
    return json({ success: false, message: "Jeton invalide." }, 400);
  }

  const formData = new FormData();
  formData.append("secret", env.TURNSTILE_SECRET_KEY);
  formData.append("response", token);

  const remoteIp = request.headers.get("CF-Connecting-IP");
  if (remoteIp) formData.append("remoteip", remoteIp);

  const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData
  });
  const result = await verification.json().catch(() => ({}));

  if (!verification.ok || !result.success) {
    return json({ success: false, message: "Vérification refusée." }, 400);
  }

  return json({ success: true });
}
