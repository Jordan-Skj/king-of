# Ordre de lecture conseillé

Le projet est séparé en petits fichiers. Lis-les dans cet ordre plutôt que de lire tout le dossier d’un coup.

## 1. Les données et les pages

1. `src/data/iphones.js` : identité de la boutique, WhatsApp et liste des iPhone.
2. `index.html` : structure de l’accueil et ses métadonnées SEO.
3. `catalogue.html` : emplacement des filtres et de la grille de produits.
4. `src/main.js` : le point de départ qui charge header, footer et le script de la page ouverte.

Chaque page possède un attribut comme `data-page="catalogue"`. `main.js` s’en sert pour lancer seulement le code utile.

## 2. Afficher les produits

1. `src/components/product-card.js`
2. `src/components/filters.js`
3. `src/pages/catalogue.js`

Les iPhone sont des objets JavaScript. `map(productCard)` transforme ces objets en cartes HTML. Les filtres ne modifient pas les données originales : ils créent une liste filtrée à afficher.

## 3. Comprendre le panier

1. `src/utils/storage.js`
2. `src/services/cart.js`
3. `src/components/cart-item.js`
4. `src/pages/panier.js`

Le panier conserve seulement les identifiants et quantités des produits dans `localStorage`. Ce n’est pas une base de données ni un compte client.

## 4. Comprendre la demande WhatsApp

1. `src/services/whatsapp-order.js`
2. `src/pages/commande.js`

Le formulaire vérifie les champs dans le navigateur, construit un message puis ouvre WhatsApp. Les informations du formulaire ne sont pas enregistrées par le site.

## 5. Confidentialité et protection anti-robot

1. `src/services/consent.js`
2. `src/services/turnstile.js`
3. `functions/api/verify-turnstile.js`

`consent.js` demande l’accord avant de charger l’audience. `turnstile.js` utilise seulement une clé publique. Le fichier dans `functions/` reçoit le jeton et consulte Cloudflare avec la clé secrète stockée dans les variables du serveur.

## Première modification à faire toi-même

Dans `src/data/iphones.js`, change temporairement le prix de l’iPhone 12 64 Go. Lance `npm run dev`, ouvre le catalogue, vérifie le résultat, puis remets le bon prix. Cela t’entraîne à comprendre le chemin : donnée → JavaScript → carte affichée.
