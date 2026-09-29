/*
  localStorage garde de petites données dans le navigateur.
  Le panier reste donc présent si le client ferme puis rouvre la page.
*/

// Lit une valeur JSON du navigateur sans faire planter le site si elle est absente.
export function getFromStorage(key, fallbackValue) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallbackValue;
  } catch {
    return fallbackValue;
  }
}

// Transforme une donnée JavaScript en JSON avant de la mémoriser.
export function setToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
