# KING OFF 6J BUSINESS — Boutique iPhone

Petit projet pédagogique de boutique iPhone créé avec **HTML**, **Tailwind CSS** et **JavaScript vanilla**.

## Ce que fait cette version

- affiche les iPhone neufs et leurs prix en dollars ;
- permet de rechercher, filtrer et trier le catalogue ;
- garde le panier dans `localStorage` ;
- construit un message de commande détaillé pour WhatsApp ;
- ne réalise aucun paiement automatique.

## Lancer le projet

```bash
npm install
npm run dev
```

Ensuite, ouvre l'adresse affichée par Vite, généralement `http://localhost:5173/`.

## Construire la version à publier

```bash
npm run build
```

Le dossier `dist/` sera créé. C'est ce dossier qu'il faut envoyer sur GitHub Pages, Netlify ou un autre hébergeur statique.

## Où modifier les produits ?

Ouvre `src/data/iphones.js` : chaque objet représente un iPhone ou une capacité. Tu peux y changer le prix, ajouter un modèle ou remplacer une image.

## Où modifier le numéro WhatsApp ?

Toujours dans `src/data/iphones.js`, change la valeur `whatsappNumber` si nécessaire.

> Les photos dans les données utilisent des visuels Apple à distance. Pour une boutique réelle, ajoute progressivement tes propres photos des produits réellement disponibles dans `public/images/phones/`.
# king-of
# king-of
