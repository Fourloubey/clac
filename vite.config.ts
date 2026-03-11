import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "vite-plugin-prerender";

export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // On active le pré-rendu uniquement lors du build (production)
    mode === "production" && prerender({
      // Le répertoire où Vite génère le site (par défaut 'dist')
      staticDir: path.join(__dirname, "dist"),
      // Liste des routes que tu veux transformer en fichiers HTML physiques
      routes: ["/", "/agence", "/projets", "/contact"],
      // Optionnel : permet de rendre le HTML plus propre
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true,
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
