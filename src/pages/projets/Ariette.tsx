import ProjectTemplate from "@/components/ProjectTemplate";

// 1. Importation des 15 images (Dossier : assets/ariette)
import ariette1 from "@/assets/ariette/ariette-1.jpg";
import ariette2 from "@/assets/ariette/ariette-2.jpg";
import ariette3 from "@/assets/ariette/ariette-3.jpg";
import ariette4 from "@/assets/ariette/ariette-4.jpg";
import ariette5 from "@/assets/ariette/ariette-5.jpg";
import ariette6 from "@/assets/ariette/ariette-6.jpg";
import ariette7 from "@/assets/ariette/ariette-7.jpg";
import ariette8 from "@/assets/ariette/ariette-8.jpg";
import ariette9 from "@/assets/ariette/ariette-9.jpg";
import ariette10 from "@/assets/ariette/ariette-10.jpg";
import ariette11 from "@/assets/ariette/ariette-11.jpg";
import ariette12 from "@/assets/ariette/ariette-12.jpg";
import ariette13 from "@/assets/ariette/ariette-13.jpg";
import ariette14 from "@/assets/ariette/ariette-14.jpg";
import ariette15 from "@/assets/ariette/ariette-15.jpg";

// 2. Organisation du tableau des images
const images = [
  { src: ariette1, alt: "Projet Ariette – Photo 4" },
  { src: ariette2, alt: "Projet Ariette – Photo 2" },
  { src: ariette3, alt: "Projet Ariette – Photo 3" },
  { src: ariette4, alt: "Projet Ariette – Photo 1" },
  { src: ariette5, alt: "Projet Ariette – Photo 5" },
  { src: ariette6, alt: "Projet Ariette – Photo 6" },
  { src: ariette7, alt: "Projet Ariette – Photo 7" },
  { src: ariette8, alt: "Projet Ariette – Photo 8" },
  { src: ariette9, alt: "Projet Ariette – Photo 9" },
  { src: ariette10, alt: "Projet Ariette – Photo 10" },
  { src: ariette11, alt: "Projet Ariette – Photo 15" },
  { src: ariette12, alt: "Projet Ariette – Photo 12" },
  { src: ariette13, alt: "Projet Ariette – Photo 13" },
  { src: ariette14, alt: "Projet Ariette – Photo 14" },
  { src: ariette15, alt: "Projet Ariette – Photo 11" },
];

// 3. Texte avec tes mots-clés en gras
const description = [
  <strong key="1">ariette</strong>,
  "",
  <><strong key="2">situation</strong> extension</>,
  <><strong key="3">localisation</strong> dax</>,
  <><strong key="4">surface créée</strong> 20.00 m²</>,
  <><strong key="5">coût</strong> 135 500 € ttc</>,
  <><strong key="6">statut</strong> livraison 2023</>,
  "",
  "La création de cette extension a été pensée de façon à offrir un nouveau volume aux lignes plus actuelles tout en s'intégrant avec l'écriture locale de cette habitation existante classée élément remarquable.",
  "",
  "Une réflexion sur les techniques et matériaux locaux a été apportée tout au long de ce projet, lui accordant toute sa singularité et légitimité.",
];

const Ariette = () => (
  <ProjectTemplate name="ariette" description={description} images={images} />
);

export default Ariette;
