import ProjectTemplate from "@/components/ProjectTemplate";

// 1. Importation des 9 images
import ulysse1 from "@/assets/ulysse/ulysse-1.jpg";
import ulysse2 from "@/assets/ulysse/ulysse-2.jpg";
import ulysse3 from "@/assets/ulysse/ulysse-3.jpg";
import ulysse4 from "@/assets/ulysse/ulysse-4.jpg";
import ulysse5 from "@/assets/ulysse/ulysse-5.jpg";
import ulysse6 from "@/assets/ulysse/ulysse-6.jpg";
import ulysse7 from "@/assets/ulysse/ulysse-7.jpg";
import ulysse8 from "@/assets/ulysse/ulysse-8.jpg";
import ulysse9 from "@/assets/ulysse/ulysse-9.jpg";

// 2. Organisation du tableau (5 et 9 sont ici échangées)
const images = [
  { src: ulysse1, alt: "Projet Ulysse – Photo 1" },
  { src: ulysse2, alt: "Projet Ulysse – Photo 2" },
  { src: ulysse3, alt: "Projet Ulysse – Photo 3" },
  { src: ulysse4, alt: "Projet Ulysse – Photo 4" },
  { src: ulysse9, alt: "Projet Ulysse – Photo 9 (ex-5)" }, 
  { src: ulysse6, alt: "Projet Ulysse – Photo 6" },
  { src: ulysse7, alt: "Projet Ulysse – Photo 7" },
  { src: ulysse8, alt: "Projet Ulysse – Photo 8" },
  { src: ulysse5, alt: "Projet Ulysse – Photo 5 (ex-9)" },
];

// 3. Texte original
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
  <div className="ulysse-safe-container">
    <ProjectTemplate name="ulysse" description={description} images={images} />
    
    <style dangerouslySetInnerHTML={{ __html: `
      /* On ne cible que les images qui sont DEEP dans la grille de description */
      /* Cela évite de toucher au logo ou aux éléments de navigation */
      .ulysse-safe-container .grid img {
        width: 100% !important;
        aspect-ratio: 211 / 375 !important;
        object-fit: cover !important;
        border-radius: 4px !important;
      }

      /* Sécurité supplémentaire pour le logo au cas où */
      .ulysse-safe-container header img, 
      .ulysse-safe-container nav img {
        aspect-ratio: auto !important;
        width: auto !important;
      }
    `}} />
  </div>
);

export default Ulysse;
