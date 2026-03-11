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

// 2. Ton ordre spécifique : 4, 2, 3, 1, 5, 6, 7, 8, 9, 10, 15, 12, 13, 14, 11
const images = [
  { src: ariette4, alt: "4 Extension Béton Ciré à Dax, photo Agnès Clotis" }, { src: ariette2, alt: "2 Extension Béton Ciré à Dax, photo Agnès Clotis" }, { src: ariette3, alt: "3 Extension Béton Ciré à Dax, photo Agnès Clotis" }, // Ligne 1
  { src: ariette1, alt: "1 Extension Béton Ciré à Dax, photo Agnès Clotis" }, { src: ariette5, alt: "5 Extension Béton Ciré à Dax, photo Agnès Clotis" }, { src: ariette6, alt: "6 Extension Béton Ciré à Dax, photo Agnès Clotis" }, // Ligne 2
  { src: ariette7, alt: "7 Extension Béton Ciré à Dax, photo Agnès Clotis" }, { src: ariette8, alt: "8 Extension Béton Ciré à Dax, photo Agnès Clotis" }, { src: ariette9, alt: "9 Extension Béton Ciré à Dax, photo Agnès Clotis" }, // Ligne 3
  { src: ariette10, alt: "10 Extension Béton Ciré à Dax, photo Agnès Clotis" }, { src: ariette15, alt: "15 Extension Béton Ciré à Dax, photo Agnès Clotis" }, { src: ariette12, alt: "12 Extension Béton Ciré à Dax, photo Agnès Clotis" }, // Ligne 4
  { src: ariette13, alt: "13 Extension Béton Ciré à Dax, photo Agnès Clotis" }, { src: ariette14, alt: "14 Extension Béton Ciré à Dax, photo Agnès Clotis" }, { src: ariette11, alt: "11 Extension Béton Ciré à Dax, photo Agnès Clotis,
    caption: <div className="photo-credit-label">crédits photos © Agnès Clotis</div> }, // Ligne 5 modifiée
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
  <div className="ariette-master-container">
    <ProjectTemplate name="ariette" description={description} images={images} />
    
    {/* Crédit Photo ajouté ici */}
    <div className="photo-credits">
      crédits photos © Agnès Clotis
    </div>
    
    <style dangerouslySetInnerHTML={{ __html: `
      /* Style pour le crédit photo */
      .photo-credits {
        text-align: right;
        font-size: 0.8rem;
        color: #666;
        margin-top: 10px;
        padding-right: 10px;
        font-style: italic;
      }
      
      /* On s'assure que le conteneur de la dernière image reste dans la grille */
      .ariette-master-container .grid > div:last-child {
        display: flex;
        flex-direction: column;
      }

      .photo-credit-label {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #333;
        margin-top: 5px;
        text-align: right;
        width: 100%;
      }
      
      /* Protection du Logo */
      .ariette-master-container header img, 
      .ariette-master-container nav img,
      img[src*="logo"] { 
        aspect-ratio: auto !important;
        width: auto !important;
      }

      /* Base de la grille */
      .ariette-master-container .grid img {
        width: 100% !important;
        object-fit: cover !important;
        border-radius: 4px !important;
      }

      /* LIGNE 1 (Images 1, 2, 3 du tableau) : Ratio Paysage 1772:1181 */
      .ariette-master-container .grid > div:nth-child(1) img,
      .ariette-master-container .grid > div:nth-child(2) img,
      .ariette-master-container .grid > div:nth-child(3) img {
        aspect-ratio: 1772 / 1181 !important;
      }

      /* LIGNES 2, 3, 4 (Images 4 à 12 du tableau) : Ratio Portrait 1181:1772 */
      .ariette-master-container .grid > div:nth-child(n+4):nth-child(-n+12) img {
        aspect-ratio: 1181 / 1772 !important;
      }

      /* LIGNE 5 (Images 13, 14, 15 du tableau) : Ratio Paysage 1772:1181 */
      .ariette-master-container .grid > div:nth-child(13) img,
      .ariette-master-container .grid > div:nth-child(14) img,
      .ariette-master-container .grid > div:nth-child(15) img {
        aspect-ratio: 1772 / 1181 !important;
      }
    `}} />
  </div>
);

export default Ariette;
