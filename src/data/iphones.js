/*
  Ce fichier contient les données du catalogue.
  Quand un prix change, modifie seulement l'objet concerné ici :
  les pages du site se mettront à jour automatiquement.
*/

// Informations générales de la boutique utilisées dans plusieurs fichiers.
export const shop = {
  name: "KING OFF 6J BUSINESS",
  shortName: "King Off 6J",
  whatsappNumber: "243982993661",
  whatsappDisplay: "0982 993 661",
  city: "Kinshasa, RDC"
};

// Photos officielles Apple regroupées par génération.
// Elles sont affichées à distance pour garder ce projet léger.
const officialAppleImages = {
  "12": "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large.jpg",
  "13": "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large.jpg",
  "14": "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-2up-blue-220907-geo_inline.jpg.large.jpg",
  "15": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-design-230912_big.jpg.large.jpg",
  "16": "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-240909_inline.jpg.large.jpg",
  "17": "https://www.apple.com/newsroom/images/2025/09/apple-debuts-iphone-17/article/Apple-iPhone-17-hero-250909_inline.jpg.large.jpg"
};

// Chaque objet est une variante vendable : modèle + capacité + prix.
// Ne mets pas la couleur ni l'état de batterie ici : ils seront confirmés dans WhatsApp.
export const iphones = [
  { id: "iphone-12-64", model: "iPhone 12", family: "12", storage: "64 Go", price: 250, image: officialAppleImages["12"], featured: false },
  { id: "iphone-12-128", model: "iPhone 12", family: "12", storage: "128 Go", price: 280, image: officialAppleImages["12"], featured: true },
  { id: "iphone-12-pro-128", model: "iPhone 12 Pro", family: "12", storage: "128 Go", price: 350, image: officialAppleImages["12"], featured: false },
  { id: "iphone-12-pro-256", model: "iPhone 12 Pro", family: "12", storage: "256 Go", price: 380, image: officialAppleImages["12"], featured: false },
  { id: "iphone-12-pro-max-128", model: "iPhone 12 Pro Max", family: "12", storage: "128 Go", price: 420, image: officialAppleImages["12"], featured: false },
  { id: "iphone-12-pro-max-256", model: "iPhone 12 Pro Max", family: "12", storage: "256 Go", price: 450, image: officialAppleImages["12"], featured: false },

  { id: "iphone-13-128", model: "iPhone 13", family: "13", storage: "128 Go", price: 370, image: officialAppleImages["13"], featured: true },
  { id: "iphone-13-pro-128", model: "iPhone 13 Pro", family: "13", storage: "128 Go", price: 450, image: officialAppleImages["13"], featured: false },
  { id: "iphone-13-pro-256", model: "iPhone 13 Pro", family: "13", storage: "256 Go", price: 480, image: officialAppleImages["13"], featured: false },
  { id: "iphone-13-pro-max-128", model: "iPhone 13 Pro Max", family: "13", storage: "128 Go", price: 530, image: officialAppleImages["13"], featured: false },
  { id: "iphone-13-pro-max-256", model: "iPhone 13 Pro Max", family: "13", storage: "256 Go", price: 560, image: officialAppleImages["13"], featured: false },

  { id: "iphone-14-128", model: "iPhone 14", family: "14", storage: "128 Go", price: 450, image: officialAppleImages["14"], featured: true },
  { id: "iphone-14-plus-128", model: "iPhone 14 Plus", family: "14", storage: "128 Go", price: 480, image: officialAppleImages["14"], featured: false },
  { id: "iphone-14-pro-128", model: "iPhone 14 Pro", family: "14", storage: "128 Go", price: 580, image: officialAppleImages["14"], featured: false },
  { id: "iphone-14-pro-256", model: "iPhone 14 Pro", family: "14", storage: "256 Go", price: 630, image: officialAppleImages["14"], featured: false },
  { id: "iphone-14-pro-max-128", model: "iPhone 14 Pro Max", family: "14", storage: "128 Go", price: 650, image: officialAppleImages["14"], featured: false },
  { id: "iphone-14-pro-max-256", model: "iPhone 14 Pro Max", family: "14", storage: "256 Go", price: 680, image: officialAppleImages["14"], featured: false },

  { id: "iphone-15-128", model: "iPhone 15", family: "15", storage: "128 Go", price: 620, image: officialAppleImages["15"], featured: true },
  { id: "iphone-15-256", model: "iPhone 15", family: "15", storage: "256 Go", price: 650, image: officialAppleImages["15"], featured: false },
  { id: "iphone-15-plus-128", model: "iPhone 15 Plus", family: "15", storage: "128 Go", price: 680, image: officialAppleImages["15"], featured: false },
  { id: "iphone-15-plus-256", model: "iPhone 15 Plus", family: "15", storage: "256 Go", price: 680, image: officialAppleImages["15"], featured: false },
  { id: "iphone-15-pro-128", model: "iPhone 15 Pro", family: "15", storage: "128 Go", price: 750, image: officialAppleImages["15"], featured: true },
  { id: "iphone-15-pro-256", model: "iPhone 15 Pro", family: "15", storage: "256 Go", price: 780, image: officialAppleImages["15"], featured: false },
  { id: "iphone-15-pro-max-256", model: "iPhone 15 Pro Max", family: "15", storage: "256 Go", price: 850, image: officialAppleImages["15"], featured: true },

  { id: "iphone-16-128", model: "iPhone 16", family: "16", storage: "128 Go", price: 770, image: officialAppleImages["16"], featured: true },
  { id: "iphone-16-256", model: "iPhone 16", family: "16", storage: "256 Go", price: 800, image: officialAppleImages["16"], featured: false },
  { id: "iphone-16-plus-128", model: "iPhone 16 Plus", family: "16", storage: "128 Go", price: 870, image: officialAppleImages["16"], featured: false },
  { id: "iphone-16-plus-256", model: "iPhone 16 Plus", family: "16", storage: "256 Go", price: 900, image: officialAppleImages["16"], featured: false },
  { id: "iphone-16-pro-256", model: "iPhone 16 Pro", family: "16", storage: "256 Go", price: 1050, image: officialAppleImages["16"], featured: true },
  { id: "iphone-16-pro-max-256", model: "iPhone 16 Pro Max", family: "16", storage: "256 Go", price: 1150, image: officialAppleImages["16"], featured: true },

  { id: "iphone-17-air-256", model: "iPhone Air", family: "17", storage: "256 Go", price: 1150, image: officialAppleImages["17"], featured: true },
  { id: "iphone-17-pro-256", model: "iPhone 17 Pro", family: "17", storage: "256 Go", price: 1500, image: officialAppleImages["17"], featured: false },
  { id: "iphone-17-pro-max-256", model: "iPhone 17 Pro Max", family: "17", storage: "256 Go", price: 1650, image: officialAppleImages["17"], featured: true }
];

// Renvoie un iPhone grâce à son id présent dans l'URL ou le panier.
export function getIphoneById(id) {
  return iphones.find((iphone) => iphone.id === id);
}
