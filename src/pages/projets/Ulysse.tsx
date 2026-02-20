import ProjectTemplate from "@/components/ProjectTemplate";

// Importation des 9 images
import ulysse1 from "@/assets/ulysse/ulysse-1.jpg";
import ulysse2 from "@/assets/ulysse/ulysse-2.jpg";
import ulysse3 from "@/assets/ulysse/ulysse-3.jpg";
import ulysse4 from "@/assets/ulysse/ulysse-4.jpg";
import ulysse5 from "@/assets/ulysse/ulysse-5.jpg";
import ulysse6 from "@/assets/ulysse/ulysse-6.jpg";
import ulysse7 from "@/assets/ulysse/ulysse-7.jpg";
import ulysse8 from "@/assets/ulysse/ulysse-8.jpg";
import ulysse9 from "@/assets/ulysse/ulysse-9.jpg";

// On remet l'ordre logique, le CSS s'occupera du placement
const images = [
  { src: ulysse1, alt: "1" },
  { src: ulysse2, alt: "2" },
  { src: ulysse3, alt: "3" },
  { src: ulysse4, alt: "4" },
  { src: ulysse6, alt: "6" },
  { src: ulysse7, alt: "7" },
  { src: ulysse8, alt: "8" },
  { src: ulysse9, alt: "9 (ex-5)" }, // Inversion demandée
  { src: ulysse5, alt: "5 (ex-9)" }, // Inversion demandée
];

const description = [
  <strong key="1">ulysse</strong>,
  "",
  <><strong key="2">situation</strong> rénovation, surélévation</>,
  <><strong key="3">localisation</strong> bordeaux</>,
  <><strong key="4">surface créée</strong> 90.00 m²</>,
  <><strong key="5">surface rénovée</strong> 75.00 m²</>,
  <><strong key="6">coût</strong> 310 250 € ttc</>,
  <><strong key="7">statut</strong> livraison 2023</>,
  "",
  "Cette surélévation totale a été pensée de façon à accueillir à l'étage 3 chambres et leurs pièces d'eau permettant ainsi de dédier le rez-de-chaussée aux pièces de vie.",
  "",
  "C'est dans le respect des proportions existantes, l'harmonie avec les maisons avoisinantes et la mise en œuvre de matériaux tels que la pierre et le bois que ce nouveau volume a été conçu.",
];

const Ulysse = () => (
  <div className="ulysse-special-grid">
    <ProjectTemplate name="ulysse" description={description} images={images} />
    <style dangerouslySetInnerHTML={{ __html: `
      /* 1. On définit la structure de la grille globale */
      .ulysse-special-grid .grid {
        display: grid !important;
        grid-template-columns: repeat(3, 1fr) !important;
        grid-auto-flow: dense !important;
        gap: 1rem !important;
      }

      /* 2. On définit le ratio de base pour les grandes images */
      .ulysse-special-grid img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        border-radius: 4px !important;
        aspect-ratio: 2 / 3 !important;
      }

      /* 3. CHIRURGIE : On fait prendre 2 lignes de hauteur aux grandes images (1 et 4)
         pour que les petites (2 et 3) puissent s'empiler à côté */
      .ulysse-special-grid .grid > div:nth-child(1),
      .ulysse-special-grid .grid > div:nth-child(4) {
        grid-row: span 2 !important;
      }

      /* 4. On ajuste les "petites" images (2 et 3) pour qu'elles n'aient pas de ratio forcé
         mais qu'elles remplissent l'espace restant */
      .ulysse-special-grid .grid > div:nth-child(2) img,
      .ulysse-special-grid .grid > div:nth-child(3) img {
        aspect-ratio: 3 / 1.9 !important; /* Ratio réduit pour tenir à deux dans la colonne */
      }
    `}} />
  </div>
);

export default Ulysse;
