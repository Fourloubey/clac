import ProjectTemplate from "@/components/ProjectTemplate";

import ulysse1 from "@/assets/ulysse/ulysse-1.jpg";
import ulysse2 from "@/assets/ulysse/ulysse-2.jpg";
import ulysse3 from "@/assets/ulysse/ulysse-3.jpg";
import ulysse4 from "@/assets/ulysse/ulysse-4.jpg";
import ulysse5 from "@/assets/ulysse/ulysse-5.jpg";
import ulysse6 from "@/assets/ulysse/ulysse-6.jpg";
import ulysse7 from "@/assets/ulysse/ulysse-7.jpg";
import ulysse8 from "@/assets/ulysse/ulysse-8.jpg";
import ulysse9 from "@/assets/ulysse/ulysse-9.jpg";

// On garde l'ordre logique pour le flux
const images = [
  { src: ulysse1, alt: "1" },
  { src: ulysse2, alt: "2" },
  { src: ulysse3, alt: "3" },
  { src: ulysse4, alt: "4" },
  { src: ulysse9, alt: "9" },
  { src: ulysse6, alt: "6" },
  { src: ulysse7, alt: "7" },
  { src: ulysse8, alt: "8" }, 
  { src: ulysse5, alt: "5" },
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
  <div className="ulysse-master-container">
    <ProjectTemplate name="ulysse" description={description} images={images} />
    
    <style dangerouslySetInnerHTML={{ __html: `
      /* 1. PROTECTION DU LOGO : On cible uniquement les images dans le header ou portant une classe logo */
      .ulysse-master-container header img, 
      .ulysse-master-container nav img,
      .ulysse-master-container [class*="logo"] img {
        width: auto !important;
        height: auto !important;
        aspect-ratio: auto !important;
        max-height: 80px; /* Ajuste selon la taille de ton logo */
      }

      /* 2. LA GRILLE : On cible la div qui contient les images dans ProjectTemplate */
      .ulysse-master-container .grid {
        display: grid !important;
        grid-template-columns: repeat(3, 1fr) !important;
        grid-auto-flow: dense !important;
        gap: 20px !important;
      }

      /* 3. STYLE DES IMAGES */
      .ulysse-master-container .grid img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        aspect-ratio: 3 / 4 !important;
        border-radius: 4px;
      }

      /* 4. CHIRURGIE DES CASES */
      /* La photo 1 et la 4 (situées dans des div enfants de la grille) s'étendent */
      .ulysse-master-container .grid > div:nth-child(1),
      .ulysse-master-container .grid > div:nth-child(4) {
        grid-row: span 2 !important;
      }

      /* Ajustement du ratio pour les photos 2 et 3 qui s'empilent */
      .ulysse-master-container .grid > div:nth-child(2) img,
      .ulysse-master-container .grid > div:nth-child(3) img {
        aspect-ratio: 3 / 1.9 !important;
      }
    `}} />
  </div>
);

export default Ulysse;
