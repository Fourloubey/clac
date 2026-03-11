import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "vite-plugin-prerender";

export default defineConfig(({ mode }) => {
  // Correction pour la compatibilité du plugin de pré-rendu
  const renderer = (prerender as any).default || prerender;

  return {
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
      mode === "production" && renderer({
        // Le répertoire où Vite génère le site
        staticDir: path.join(__dirname, "dist"),
        // Les routes physiques à générer pour le SEO
        routes: ["/", "/agence", "/projets", "/contact"],
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
  };
});
