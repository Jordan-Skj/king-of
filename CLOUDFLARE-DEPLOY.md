# Déployer gratuitement sur Cloudflare Pages

Cette boutique peut être publiée gratuitement sur une adresse du type :

`https://king-off-6j-business.pages.dev`

Tu n’as pas besoin d’acheter un nom de domaine pour démarrer.

## 1. Préparer le dépôt GitHub

1. Crée un dépôt GitHub, par exemple `king-off-6j-business`.
2. Ajoute ce dossier de projet, sans `node_modules/`.
3. Envoie les fichiers sur GitHub.

## 2. Créer le projet Pages

1. Connecte-toi à Cloudflare.
2. Ouvre **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Sélectionne le dépôt GitHub.
4. Choisis exactement le nom de projet `king-off-6j-business` si tu veux garder les URL déjà inscrites dans le code.
5. Dans les réglages de build, indique :

```text
Build command: npm run build
Build output directory: dist
```

6. Lance le déploiement. À chaque envoi GitHub, Cloudflare reconstruira le site.

Cloudflare Pages fournit l’URL HTTPS en `pages.dev`. Utilise toujours cette URL HTTPS dans tes publications et dans Google Search Console.

## 3. Activer Turnstile correctement

Le formulaire a un anti-spam simple, mais la protection complète demande Turnstile :

1. Dans Cloudflare, crée un widget Turnstile pour ton URL `pages.dev`.
2. Copie la **clé de site** publique dans `src/data/iphones.js`, propriété `turnstileSiteKey`.
3. Dans le projet Pages : **Settings** → **Variables and Secrets**.
4. Ajoute la variable secrète suivante, sans la publier dans Git :

```text
TURNSTILE_SECRET_KEY=ta_clé_secrète_Turnstile
```

5. Redéploie le site.

La validation se fait dans `functions/api/verify-turnstile.js`, jamais dans le frontend.

## 4. Activer les statistiques uniquement avec consentement

1. Active Cloudflare Web Analytics dans ton tableau de bord Cloudflare.
2. Copie son **jeton public** dans `src/data/iphones.js`, propriété `analyticsToken`.
3. Redéploie.

Le script d’audience ne se charge qu’après l’accord du visiteur dans la bannière de confidentialité.

## 5. Après le premier déploiement

1. Vérifie l’accueil, le catalogue, le panier et la commande sur téléphone.
2. Ouvre `https://ton-projet.pages.dev/404-inexistante` pour vérifier la page 404.
3. Ouvre `https://ton-projet.pages.dev/robots.txt` et `https://ton-projet.pages.dev/sitemap.xml`.
4. Inscris l’URL dans Google Search Console et envoie le sitemap.
5. Si tu modifies le nom Pages, remplace `https://king-off-6j-business.pages.dev` dans `src/data/iphones.js`, les balises `canonical`, les balises Open Graph et `public/sitemap.xml`.
