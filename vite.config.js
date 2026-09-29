// Importe l'outil qui aide Vite à vérifier sa configuration.
import { defineConfig } from "vite";

// Importe "resolve" pour créer des chemins fiables vers les pages HTML.
import { resolve } from "node:path";

// Exporte la configuration utilisée lorsque Vite prépare le dossier "dist".
export default defineConfig({
  // "./" permet aux liens de fonctionner aussi après un hébergement dans un sous-dossier.
  base: "./",

  // Les options de construction de la version prête à publier.
  build: {
    // Demande à Vite de générer toutes les pages du site, et pas seulement index.html.
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        catalogue: resolve(import.meta.dirname, "catalogue.html"),
        produit: resolve(import.meta.dirname, "produit.html"),
        panier: resolve(import.meta.dirname, "panier.html"),
        commande: resolve(import.meta.dirname, "commande.html"),
        confirmation: resolve(import.meta.dirname, "confirmation.html"),
        contact: resolve(import.meta.dirname, "contact.html")
      }
    }
  }
});
