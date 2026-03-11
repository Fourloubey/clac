import ProjectTemplate from "@/components/ProjectTemplate";

// 1. Importation des images
import lucien1 from "@/assets/lucien/lucien-1.jpg";
import lucien2 from "@/assets/lucien/lucien-2.jpg";
import lucien3 from "@/assets/lucien/lucien-3.jpg";
import lucien4 from "@/assets/lucien/lucien-4.jpg";
import lucien5 from "@/assets/lucien/lucien-5.jpg";
import lucien6 from "@/assets/lucien/lucien-6.jpg";

// 2. Organisation du tableau
const images = [
  { src: lucien1, alt: "Projet Lucien – Rénovation échoppe Bordeaux Photo 1" },
  { src: lucien2, alt: "Projet Lucien – Rénovation échoppe Bordeaux Photo 2" },
  { src: lucien3, alt: "Projet Lucien – Rénovation échoppe Bordeaux Photo 3" },
  { src: lucien4, alt: "Projet Lucien – Rénovation échoppe Bordeaux Photo 4" },
  { src: lucien5, alt: "Projet Lucien – Rénovation échoppe Bordeaux Photo 5" },
  { src: lucien6, alt: "Projet Lucien – Rénovation échoppe Bordeaux Photo 6" },
];

// 3. Texte de description
const description = [
  <strong key="1">lucien</strong>,
  "",
  <><strong key="2">situation</strong> rénovation</>,
  <><strong key="3">localisation</strong> talence</>,
  <><strong key="4">surface rénovée</strong> 55.00 m²</>,
  <><strong key="5">coût</strong> 100 000 € ttc</>,
  <><strong key="6">statut</strong> livraison 2020</>,
  "",
  "Cette échoppe a été entièrement repensée de façon à proposer un intérieur plus actuel grâce à l'organisation de ses espaces, aux teintes et aux matériaux choisis.",
  "",
  "La double hauteur dans le salon ainsi que la mise en place de fenêtres de toit ont permis d'apporter plus de volume et de luminosité au sein de cette échoppe initialement sombre.",
];

const Lucien = () => (
  <div className="lucien-master-container">
    <ProjectTemplate name="lucien" description={description} images={images} />

    <style dangerouslySetInnerHTML={{ __html: `
      /* 1. Insertion du Crédit Photo sous la 6ème image (la dernière) */
      .lucien-master-container .grid > div:nth-child(6)::after {
        content: "crédits photos © Loumely Photographie";
        display: block;
        text-align: right;
        font-size: 10px;
        color: #333;
        margin-top: 8px;
        font-family: sans-serif;
        font-style: italic;
      }

      /* 2. Protection du Logo (évite les déformations si présent) */
      .lucien-master-container header img, 
      .lucien-master-container nav img,
      img[src*="logo"] { 
        aspect-ratio: auto !important;
        width: auto !important;
      }

      /* 3. Base de la grille pour Lucien */
      .lucien-master-container .grid img {
        width: 100% !important;
        object-fit: cover !important;
        border-radius: 4px !important;
      }
    `}} />
  </div>
);

export default Lucien;
