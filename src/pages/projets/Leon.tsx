import ProjectTemplate from "@/components/ProjectTemplate";

// 1. Importation des images depuis ton dossier assets/leon
import leon1 from "@/assets/leon/leon-1.jpg";
import leon2 from "@/assets/leon/leon-2.jpg";
import leon3 from "@/assets/leon/leon-3.jpg";
import leon4 from "@/assets/leon/leon-4.jpg";
import leon5 from "@/assets/leon/leon-5.jpg";
import leon6 from "@/assets/leon/leon-6.jpg";

// 2. Organisation du tableau pour l'affichage
const images = [
  { src: leon1, alt: "Projet Léon – Photo 1" },
  { src: leon2, alt: "Projet Léon – Photo 2" },
  { src: leon3, alt: "Projet Léon – Photo 3" },
  { src: leon4, alt: "Projet Léon – Photo 4" },
  { src: leon5, alt: "Projet Léon – Photo 5" },
  { src: leon6, alt: "Projet Léon – Photo 6" },
];

// 3. Texte avec uniquement tes mots-clés en gras
const description = [
  <strong key="1">léon</strong>,
  "",
  <><strong key="2">situation</strong> extension</>,
  <><strong key="3">localisation</strong> bordeaux</>,
  <><strong key="4">surface créée</strong> 33.00 m²</>,
  <><strong key="5">coût</strong> 105 000 € ttc</>,
  <><strong key="6">statut</strong> livraison 2023</>,
  "",
  "En plein centre ville, ce nouvel espace de vie en double hauteur permet d'offrir une perspective dégagée vers le jardin. L'enjeu principal était de conserver une lumière naturelle suffisante dans les espaces existants qui, en plus d'être orientés Nord, se trouvent désormais en second jour.",
  "",
  "La mezzanine ajourée a été pensée de façon à offrir un éclairage naturel et animé au sein de la pièce de vie.",
];

const Leon = () => (
  <ProjectTemplate name="léon" description={description} images={images} />
);

export default Leon;
