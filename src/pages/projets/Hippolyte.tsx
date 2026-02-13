import ProjectTemplate from "@/components/ProjectTemplate";

// 1. Importation des 8 images depuis ton dossier assets/hippolyte
import hippolyte1 from "@/assets/hippolyte/hippolyte-1.jpg";
import hippolyte2 from "@/assets/hippolyte/hippolyte-2.jpg";
import hippolyte3 from "@/assets/hippolyte/hippolyte-3.jpg";
import hippolyte4 from "@/assets/hippolyte/hippolyte-4.jpg";
import hippolyte5 from "@/assets/hippolyte/hippolyte-5.jpg";
import hippolyte6 from "@/assets/hippolyte/hippolyte-6.jpg";
import hippolyte7 from "@/assets/hippolyte/hippolyte-7.jpg";
import hippolyte8 from "@/assets/hippolyte/hippolyte-8.jpg";

// 2. Organisation du tableau pour l'affichage
const images = [
  { src: hippolyte1, alt: "Projet Hippolyte – Photo 1" },
  { src: hippolyte2, alt: "Projet Hippolyte – Photo 2" },
  { src: hippolyte3, alt: "Projet Hippolyte – Photo 3" },
  { src: hippolyte4, alt: "Projet Hippolyte – Photo 4" },
  { src: hippolyte5, alt: "Projet Hippolyte – Photo 5" },
  { src: hippolyte6, alt: "Projet Hippolyte – Photo 6" },
  { src: hippolyte7, alt: "Projet Hippolyte – Photo 7" },
  { src: hippolyte8, alt: "Projet Hippolyte – Photo 8" },
];

// 3. Texte avec uniquement tes mots-clés en gras
const description = [
  <strong key="1">hippolyte</strong>,
  "",
  <><strong key="2">situation</strong> texte</>,
  <><strong key="3">localisation</strong> texte</>,
  <><strong key="4">surface créée</strong> texte</>,
  <><strong key="5">coût</strong> texte</>,
  <><strong key="6">statut</strong> texte</>,
  "",
  "texte texte texte",
];

const Hippolyte = () => (
  <ProjectTemplate name="hippolyte" description={description} images={images} />
);

export default Hippolyte;
