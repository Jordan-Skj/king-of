/*
  Ce module gère uniquement le panier.
  Les pages n'ont pas besoin de savoir comment localStorage fonctionne :
  elles appellent simplement les fonctions ci-dessous.
*/

import { getIphoneById } from "../data/iphones.js";
import { getFromStorage, setToStorage } from "../utils/storage.js";

// Nom unique de la donnée enregistrée dans le navigateur.
const CART_KEY = "king-off-6j-iphone-cart";

// Lit le panier brut : [{ id: "iphone-15-128", quantity: 1 }].
function readCart() {
  return getFromStorage(CART_KEY, []);
}

// Réécrit le panier après chaque modification.
function saveCart(cart) {
  setToStorage(CART_KEY, cart);
}

// Renvoie le panier enrichi avec les vraies informations des iPhone.
export function getCartItems() {
  return readCart()
    .map((cartLine) => {
      const iphone = getIphoneById(cartLine.id);
      return iphone ? { ...iphone, quantity: cartLine.quantity } : null;
    })
    .filter(Boolean);
}

// Ajoute un iPhone ou augmente sa quantité s'il existe déjà dans le panier.
export function addToCart(iphoneId) {
  const cart = readCart();
  const existingLine = cart.find((line) => line.id === iphoneId);

  if (existingLine) {
    existingLine.quantity += 1;
  } else {
    cart.push({ id: iphoneId, quantity: 1 });
  }

  saveCart(cart);
}

// Met à jour une quantité ; supprimer est plus clair quand la quantité devient zéro.
export function updateCartQuantity(iphoneId, quantity) {
  if (quantity <= 0) {
    removeFromCart(iphoneId);
    return;
  }

  const cart = readCart().map((line) =>
    line.id === iphoneId ? { ...line, quantity } : line
  );

  saveCart(cart);
}

// Retire complètement une ligne du panier.
export function removeFromCart(iphoneId) {
  saveCart(readCart().filter((line) => line.id !== iphoneId));
}

// Vide le panier après l'ouverture de WhatsApp.
export function clearCart() {
  saveCart([]);
}

// Additionne les quantités pour le petit badge du panier dans le menu.
export function getCartCount() {
  return readCart().reduce((total, line) => total + line.quantity, 0);
}

// Calcule le total estimé en dollars.
export function getCartTotal() {
  return getCartItems().reduce((total, item) => total + item.price * item.quantity, 0);
}
