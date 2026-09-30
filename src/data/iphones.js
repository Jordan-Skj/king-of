/*
  Catalogue et configuration centrale de KING OFF 6J BUSINESS.
  Les visuels sont des illustrations locales légères. Remplace-les par des photos
  de tes propres produits ou des images dont tu as l'autorisation commerciale.
*/

export const shop = {
  name: "KING OFF 6J BUSINESS",
  shortName: "King Off 6J",
  whatsappNumber: "243982993661",
  whatsappDisplay: "0982 993 661",
  city: "Kinshasa, RDC",
  siteUrl: "https://king-off-6j-business.pages.dev",
  /* À remplir après création du widget Turnstile dans Cloudflare. La clé publique peut être ici. */
  turnstileSiteKey: "",
  /* À remplir avec le jeton public de Cloudflare Web Analytics si tu souhaites l'activer. */
  analyticsToken: ""
};

function phoneImage(family) {
  return `./images/phones/iphone-${family}.svg`;
}

// Chaque objet est une variante vendable : modèle + capacité + prix.
// Les produits annoncés sont neufs ; détails et disponibilité sont confirmés sur WhatsApp.
export const iphones = [
  { id: "iphone-12-64", model: "iPhone 12", family: "12", storage: "64 Go", price: 250, image: phoneImage("12"), featured: false },
  { id: "iphone-12-128", model: "iPhone 12", family: "12", storage: "128 Go", price: 280, image: phoneImage("12"), featured: true },
  { id: "iphone-12-pro-128", model: "iPhone 12 Pro", family: "12", storage: "128 Go", price: 350, image: phoneImage("12"), featured: false },
  { id: "iphone-12-pro-256", model: "iPhone 12 Pro", family: "12", storage: "256 Go", price: 380, image: phoneImage("12"), featured: false },
  { id: "iphone-12-pro-max-128", model: "iPhone 12 Pro Max", family: "12", storage: "128 Go", price: 420, image: phoneImage("12"), featured: false },
  { id: "iphone-12-pro-max-256", model: "iPhone 12 Pro Max", family: "12", storage: "256 Go", price: 450, image: phoneImage("12"), featured: false },

  { id: "iphone-13-128", model: "iPhone 13", family: "13", storage: "128 Go", price: 370, image: phoneImage("13"), featured: true },
  { id: "iphone-13-pro-128", model: "iPhone 13 Pro", family: "13", storage: "128 Go", price: 450, image: phoneImage("13"), featured: false },
  { id: "iphone-13-pro-256", model: "iPhone 13 Pro", family: "13", storage: "256 Go", price: 480, image: phoneImage("13"), featured: false },
  { id: "iphone-13-pro-max-128", model: "iPhone 13 Pro Max", family: "13", storage: "128 Go", price: 530, image: phoneImage("13"), featured: false },
  { id: "iphone-13-pro-max-256", model: "iPhone 13 Pro Max", family: "13", storage: "256 Go", price: 560, image: phoneImage("13"), featured: false },

  { id: "iphone-14-128", model: "iPhone 14", family: "14", storage: "128 Go", price: 450, image: phoneImage("14"), featured: true },
  { id: "iphone-14-plus-128", model: "iPhone 14 Plus", family: "14", storage: "128 Go", price: 480, image: phoneImage("14"), featured: false },
  { id: "iphone-14-pro-128", model: "iPhone 14 Pro", family: "14", storage: "128 Go", price: 580, image: phoneImage("14"), featured: false },
  { id: "iphone-14-pro-256", model: "iPhone 14 Pro", family: "14", storage: "256 Go", price: 630, image: phoneImage("14"), featured: false },
  { id: "iphone-14-pro-max-128", model: "iPhone 14 Pro Max", family: "14", storage: "128 Go", price: 650, image: phoneImage("14"), featured: false },
  { id: "iphone-14-pro-max-256", model: "iPhone 14 Pro Max", family: "14", storage: "256 Go", price: 680, image: phoneImage("14"), featured: false },

  { id: "iphone-15-128", model: "iPhone 15", family: "15", storage: "128 Go", price: 620, image: phoneImage("15"), featured: true },
  { id: "iphone-15-256", model: "iPhone 15", family: "15", storage: "256 Go", price: 650, image: phoneImage("15"), featured: false },
  { id: "iphone-15-plus-128", model: "iPhone 15 Plus", family: "15", storage: "128 Go", price: 680, image: phoneImage("15"), featured: false },
  { id: "iphone-15-plus-256", model: "iPhone 15 Plus", family: "15", storage: "256 Go", price: 680, image: phoneImage("15"), featured: false },
  { id: "iphone-15-pro-128", model: "iPhone 15 Pro", family: "15", storage: "128 Go", price: 750, image: phoneImage("15"), featured: true },
  { id: "iphone-15-pro-256", model: "iPhone 15 Pro", family: "15", storage: "256 Go", price: 780, image: phoneImage("15"), featured: false },
  { id: "iphone-15-pro-max-256", model: "iPhone 15 Pro Max", family: "15", storage: "256 Go", price: 850, image: phoneImage("15"), featured: true },

  { id: "iphone-16-128", model: "iPhone 16", family: "16", storage: "128 Go", price: 770, image: phoneImage("16"), featured: true },
  { id: "iphone-16-256", model: "iPhone 16", family: "16", storage: "256 Go", price: 800, image: phoneImage("16"), featured: false },
  { id: "iphone-16-plus-128", model: "iPhone 16 Plus", family: "16", storage: "128 Go", price: 870, image: phoneImage("16"), featured: false },
  { id: "iphone-16-plus-256", model: "iPhone 16 Plus", family: "16", storage: "256 Go", price: 900, image: phoneImage("16"), featured: false },
  { id: "iphone-16-pro-256", model: "iPhone 16 Pro", family: "16", storage: "256 Go", price: 1050, image: phoneImage("16"), featured: true },
  { id: "iphone-16-pro-max-256", model: "iPhone 16 Pro Max", family: "16", storage: "256 Go", price: 1150, image: phoneImage("16"), featured: true },

  { id: "iphone-17-air-256", model: "iPhone Air", family: "17", storage: "256 Go", price: 1150, image: phoneImage("17"), featured: true },
  { id: "iphone-17-pro-256", model: "iPhone 17 Pro", family: "17", storage: "256 Go", price: 1500, image: phoneImage("17"), featured: false },
  { id: "iphone-17-pro-max-256", model: "iPhone 17 Pro Max", family: "17", storage: "256 Go", price: 1650, image: phoneImage("17"), featured: true }
];

export function getIphoneById(id) {
  return iphones.find((iphone) => iphone.id === id);
}
