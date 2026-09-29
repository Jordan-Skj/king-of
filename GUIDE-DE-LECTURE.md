# Ordre conseillé pour comprendre le projet

Ce projet est volontairement séparé en petits fichiers. Ne commence pas par tout lire à la fois.

## 1. Les pages HTML

Ouvre d'abord `index.html`, puis `catalogue.html`.

- Les commentaires HTML expliquent les balises.
- `data-page="home"` ou `data-page="catalogue"` indique à JavaScript quelle page est ouverte.
- Les balises comme `<div id="site-header"></div>` sont des emplacements remplis par JavaScript afin d'éviter de recopier le même menu sur sept pages.

## 2. Le point de départ JavaScript

Lis ensuite `src/main.js`.

Il fait quatre choses :

1. affiche le header et le footer ;
2. met à jour le nombre d'articles dans le panier ;
3. écoute les boutons « Ajouter » ;
4. lance le fichier correspondant à la page ouverte.

## 3. Les données

Lis `src/data/iphones.js`.

Chaque objet ressemble à ceci :

```js
{
  id: "iphone-15-128",
  model: "iPhone 15",
  storage: "128 Go",
  price: 620
}
```

Pour changer un prix, tu modifies seulement `price`. Pour ajouter une nouvelle variante, tu copies un objet et modifies ses valeurs.

## 4. Le catalogue

Lis dans cet ordre :

1. `src/components/product-card.js`
2. `src/components/filters.js`
3. `src/pages/catalogue.js`

Tu verras comment les données deviennent des cartes HTML puis comment les filtres modifient la liste affichée.

## 5. Le panier

Lis dans cet ordre :

1. `src/utils/storage.js`
2. `src/services/cart.js`
3. `src/components/cart-item.js`
4. `src/pages/panier.js`

Le panier est stocké dans le navigateur avec `localStorage`. Il n'y a pas encore de base de données : c'est normal pour cette version frontend.

## 6. La commande WhatsApp

Lis dans cet ordre :

1. `src/services/whatsapp-order.js`
2. `src/pages/commande.js`

Le formulaire récupère les coordonnées, crée un long message et ouvre WhatsApp. Il ne fait aucun paiement automatique.

## Première modification à faire toi-même

Dans `src/data/iphones.js`, change le prix de l'iPhone 12 64 Go. Lance ensuite `npm run dev`, actualise la page et vérifie que le nouveau prix apparaît dans le catalogue.
