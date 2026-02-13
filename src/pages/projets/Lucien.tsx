import ProjectTemplate from "@/components/ProjectTemplate";

// 1. Importation des images depuis ton dossier assets/lucien
import lucien1 from "@/assets/lucien/lucien-1.jpg";
import lucien2 from "@/assets/lucien/lucien-2.jpg";
import lucien3 from "@/assets/lucien/lucien-3.jpg";
import lucien4 from "@/assets/lucien/lucien-4.jpg";
import lucien5 from "@/assets/lucien/lucien-5.jpg";
import lucien6 from "@/assets/lucien/lucien-6.jpg";

// 2. Organisation du tableau pour l'affichage
const images = [
  { src: lucien1, alt: "Projet Lucien – Photo 1" },
  { src: lucien2, alt: "Projet Lucien – Photo 2" },
  { src: lucien3, alt: "Projet Lucien – Photo 3" },
  { src: lucien4, alt: "Projet Lucien – Photo 4" },
  { src: lucien5, alt: "Projet Lucien – Photo 5" },
  { src: lucien6, alt: "Projet Lucien – Photo 6" },
];

// 3. Texte avec uniquement tes mots-clés en gras
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
  <ProjectTemplate name="lucien" description={description} images={images} />
);

export default Lucien;
