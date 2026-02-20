import ProjectTemplate from "@/components/ProjectTemplate";

// 1. Importation des 8 images depuis ton dossier assets/hippolyte
import hippolyte1 from "@/assets/hippolyte/hippolyte-1.jpeg";
import hippolyte2 from "@/assets/hippolyte/hippolyte-2.jpg";
import hippolyte3 from "@/assets/hippolyte/hippolyte-3.jpeg";
import hippolyte4 from "@/assets/hippolyte/hippolyte-4.jpg";
import hippolyte5 from "@/assets/hippolyte/hippolyte-5.jpg";
import hippolyte6 from "@/assets/hippolyte/hippolyte-6.jpeg";
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
  <><strong key="2">situation</strong> rénovation et extension</>,
  <><strong key="3">localisation</strong> pessac</>,
  <><strong key="4">surface créée</strong> 40.00 m2</>,
  <><strong key="5">surface rénovée</strong> 60.00 m2</>,
  <><strong key="6">coût</strong> 220 000 € ttc</>,
  <><strong key="7">statut</strong>  livraison 2024</>,
  "",
  "La rénovation de la partie existante a été envisagée dans une approche sobre et épurée privilégiant des tonalités claires afin de valoriser l'en semble du mobilier bois sur mesure.",
  "",
  "Le volume nouvellement créé, accueillant la pièce de vie, a été conçu comme une entité distincte du bâti principal, tout en maintenant un dialogue cohérent avec celui-ci. Le choix d'un enduit à la chaux de teinte naturelle terre battue avec une finition peignée horizontale et verticale anime la surface et renforce le caractère de l'intervention.",
];

const Hippolyte = () => (
  <div className="custom-project-grid">
    <ProjectTemplate name="hippolyte" description={description} images={images} />
    <style dangerouslySetInnerHTML={{ __html: `
      .custom-project-grid img {
        width: 100%;
        aspect-ratio: 3 / 4; /* Définit le ratio intrinsèque 3:4 */
        object-fit: cover;   /* Remplit le cadre sans déformation */
        border-radius: 4px;
      }
    `}} />
  </div>
);

export default Hippolyte;
