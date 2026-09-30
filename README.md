# KING OFF 6J BUSINESS — Boutique iPhone

Boutique frontend d’iPhone neufs construite avec HTML, Tailwind CSS v4 et JavaScript vanilla. Les demandes sont préparées dans le navigateur puis ouvertes dans WhatsApp ; aucun paiement ni aucune base de données client ne sont intégrés dans cette version.

## Ce qui est inclus

- catalogue filtrable, panier local et demande WhatsApp ;
- interface responsive, sans dégradés, sans faux avis et sans statistiques inventées ;
- illustrations originales locales légères, à remplacer par les photos autorisées des produits réellement disponibles ;
- pages de confidentialité, cookies, mentions légales et conditions générales ;
- bannière de consentement et chargement facultatif de Cloudflare Web Analytics ;
- route Cloudflare Pages Functions pour vérifier Cloudflare Turnstile sans exposer sa clé secrète ;
- `robots.txt`, `sitemap.xml`, favicon, image de partage et page `404.html` ;
- en-têtes de sécurité Cloudflare dans `public/_headers`.

## Démarrer en local

```bash
npm install
npm run dev
```

Vite affichera l’adresse locale à ouvrir dans ton navigateur.

## Préparer la version à publier

```bash
npm run build
```

Le dossier `dist/` est celui à déployer dans Cloudflare Pages. La configuration Vite génère toutes les pages HTML, pas uniquement l’accueil.

## Modifier la boutique

Le fichier central est `src/data/iphones.js` :

- prix, modèles et capacités ;
- numéro WhatsApp ;
- URL publique du site ;
- clé publique Turnstile ;
- jeton public Cloudflare Web Analytics.

Ne place jamais une clé secrète dans ce fichier, dans un HTML ou dans Git. La clé secrète Turnstile va uniquement dans la variable Cloudflare `TURNSTILE_SECRET_KEY`.

## Avant la publication

Lis et termine les fichiers suivants :

- `CLOUDFLARE-DEPLOY.md` pour déployer sans nom de domaine personnalisé ;
- `LEGAL-CHECKLIST.md` pour les informations légales qui ne doivent pas être inventées ;
- `GUIDE-DE-LECTURE.md` pour comprendre le code petit à petit.

> Les pages légales fournies sont une base de travail technique. Elles ne remplacent pas une validation par le responsable de l’activité ou un conseil juridique compétent en RDC.
