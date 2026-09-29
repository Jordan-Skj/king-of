/*
  Ce fichier prépare seulement un message WhatsApp.
  Il n'envoie aucun paiement et ne crée aucune commande dans une base de données.
*/

import { shop } from "../data/iphones.js";
import { formatUSD } from "../utils/money.js";

// Crée le texte que le vendeur recevra dans WhatsApp.
export function buildOrderMessage(customer, items, total) {
  const lines = items.map((item) => {
    const lineTotal = item.price * item.quantity;
    return `• ${item.model} — ${item.storage} × ${item.quantity} : ${formatUSD(lineTotal)}`;
  });

  return [
    "Bonjour KING OFF 6J BUSINESS,",
    "Je souhaite commander les iPhone suivants :",
    "",
    ...lines,
    "",
    `Total estimé : ${formatUSD(total)}`,
    "",
    "Mes informations :",
    `Nom : ${customer.name}`,
    `WhatsApp : ${customer.phone}`,
    `Commune / adresse : ${customer.address}`,
    `Réception souhaitée : ${customer.delivery}`,
    "",
    "Merci de me confirmer la disponibilité, les couleurs possibles, les accessoires inclus et les modalités de livraison ou de retrait."
  ].join("\n");
}

// Transforme le message en lien WhatsApp valide et encodé.
export function getWhatsAppUrl(message) {
  return `https://wa.me/${shop.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
