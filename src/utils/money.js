// Transforme un nombre, par exemple 250, en texte lisible : "250 $".
export function formatUSD(amount) {
  return new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 0
  }).format(amount) + " $";
}
