/* Remplit la page de confirmation avec les informations de la dernière demande. */

import { getFromStorage } from "../utils/storage.js";
import { formatUSD } from "../utils/money.js";

// Lit la dernière commande gardée localement juste avant l'ouverture de WhatsApp.
export function initConfirmationPage() {
  const order = getFromStorage("king-off-6j-last-order", null);
  const nameTarget = document.querySelector("#confirmation-name");
  const totalTarget = document.querySelector("#confirmation-total");

  if (!order || !nameTarget || !totalTarget) return;

  nameTarget.textContent = order.customer.name;
  totalTarget.textContent = formatUSD(order.total);
}
