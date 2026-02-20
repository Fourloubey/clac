import ProjectTemplate from "@/components/ProjectTemplate";

// 1. Importation des images
import rafael1 from "@/assets/rafael/rafael-1.jpg";
import rafael2 from "@/assets/rafael/rafael-2.jpg";
import rafael3 from "@/assets/rafael/rafael-3.jpg";
import rafael4 from "@/assets/rafael/rafael-4.jpg";
import rafael5 from "@/assets/rafael/rafael-5.jpg";
import rafael6 from "@/assets/rafael/rafael-6.jpg";

// 2. Organisation du tableau pour l'affichage
const images = [
  { src: rafael1, alt: "Projet Rafaël – Vue 1" },
  { src: rafael2, alt: "Projet Rafaël – Vue 2" },
  { src: rafael3, alt: "Projet Rafaël – Vue 3" },
  { src: rafael4, alt: "Projet Rafaël – Vue 4" },
  { src: rafael5, alt: "Projet Rafaël – Vue 5" },
  { src: rafael6, alt: "Projet Rafaël – Vue 6" },
];

// 3. Texte avec uniquement tes mots-clés en gras
const description = [
  <strong key="1">rafael</strong>,
  "",
  <><strong key="2">situation</strong> extension</>,
  <><strong key="3">localisation</strong> bordeaux</>,
  <><strong key="4">surface créée</strong> 30.00 m²</>,
  <><strong key="5">coût</strong> 105 000 € ttc</>,
  <><strong key="6">statut</strong> livraison 2023</>,
  "",
  "En plein centre ville, ce nouvel espace de vie en double hauteur permet d'offrir une perspective dégagée vers le jardin. L'enjeu principal était de conserver une lumière naturelle suffisante dans les espaces existants qui, en plus d'être orientés Nord, se trouvent désormais en second jour.",
  "",
  "La mezzanine ajourée a été pensée de façon à offrir un éclairage naturel et animé au sein de la pièce de vie.",
];

const Rafael = () => (
  <div className="rafael-page-container">
    <ProjectTemplate name="rafaël" description={description} images={images} />
    <style dangerouslySetInnerHTML={{ __html: `
      /* 1. On cible UNIQUEMENT les images qui sont dans la partie "Projet" */
      /* On exclut tout ce qui pourrait ressembler à un logo ou un header */
      
      .rafael-page-container main img, 
      .rafael-page-container .grid img {
        width: 100% !important;
        height: auto !important;
        aspect-ratio: 480 / 853 !important;
        object-fit: cover !important;
        border-radius: 4px !important;
        display: block !important;
      }

      /* 2. SECURITE : On force le logo à garder ses propriétés d'origine */
      /* Remplace 'logo' par la classe réelle de ton logo si tu la connais */
      .rafael-page-container header img, 
      .rafael-page-container nav img,
      img[src*="logo"] { 
        aspect-ratio: auto !important;
        width: auto !important;
        height: auto !important;
        object-fit: contain !important;
      }
    `}} />
  </div>
);

export default Rafael;
