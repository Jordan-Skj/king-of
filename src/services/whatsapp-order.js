/* Prépare un message WhatsApp. Le site ne crée aucune commande dans une base de données. */

import { shop } from "../data/iphones.js";
import { formatUSD } from "../utils/money.js";

export function buildOrderMessage(customer, items, total) {
  const lines = items.map((item) => {
    const lineTotal = item.price * item.quantity;
    return `• ${item.model} — ${item.storage} × ${item.quantity} : ${formatUSD(lineTotal)}`;
  });

  return [
    "Bonjour KING OFF 6J BUSINESS,",
    "Je souhaite demander la disponibilité des iPhone suivants :",
    "",
    ...lines,
    "",
    `Total estimé affiché : ${formatUSD(total)}`,
    "",
    "Informations utiles :",
    `Nom : ${customer.name}`,
    `Réception souhaitée : ${customer.delivery}`,
    `Commune / quartier : ${customer.location}`,
    "",
    "Merci de me confirmer la disponibilité, les accessoires éventuels, les modalités de retrait ou livraison et le montant final avant toute vente."
  ].join("\n");
}

export function getWhatsAppUrl(message) {
  return `https://wa.me/${shop.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
