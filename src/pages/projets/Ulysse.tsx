import ProjectTemplate from "@/components/ProjectTemplate";

// Importation des 9 images
import ulysse1 from "@/assets/ulysse/ulysse-1.jpg";
import ulysse2 from "@/assets/ulysse/ulysse-2.jpg";
import ulysse3 from "@/assets/ulysse/ulysse-3.jpg";
import ulysse4 from "@/assets/ulysse/ulysse-4.jpg";
import ulysse5 from "@/assets/ulysse/ulysse-5.jpg";
import ulysse6 from "@/assets/ulysse/ulysse-6.jpg";
import ulysse7 from "@/assets/ulysse/ulysse-7.jpg";
import ulysse8 from "@/assets/ulysse/ulysse-8.jpg";
import ulysse9 from "@/assets/ulysse/ulysse-9.jpg";

// On crée une mise en page manuelle pour la galerie
const CustomGallery = () => (
  <div className="ulysse-gallery">
    {/* LIGNE 1 */}
    <div className="ulysse-row">
      <div className="col-large">
        <img src={ulysse1} alt="1" />
      </div>
      <div className="col-stack">
        <img src={ulysse2} alt="2" />
        <img src={ulysse3} alt="3" />
      </div>
      <div className="col-large">
        <img src={ulysse4} alt="4" />
      </div>
    </div>

    {/* LIGNE 2 */}
    <div className="ulysse-row">
      <div className="col-large"><img src={ulysse6} alt="9" /></div>
      <div className="col-large"><img src={ulysse7} alt="6" /></div>
      <div className="col-large"><img src={ulysse8} alt="7" /></div>
    </div>

    {/* LIGNE 3 */}
    <div className="ulysse-row">
      <div className="col-large"><img src={ulysse9} alt="8" /></div>
      <div className="col-large"><img src={ulysse5} alt="5" /></div>
      <div className="col-empty"></div> {/* Pour garder l'alignement */}
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .ulysse-gallery {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 40px;
      }
      .ulysse-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
      .col-large img {
        width: 100%;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        border-radius: 4px;
      }
      .col-stack {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .col-stack img {
        width: 100%;
        aspect-ratio: 3 / 1.88; /* Ratio pour que les deux petites = une grande */
        object-fit: cover;
        border-radius: 4px;
      }
      /* PROTECTION LOGO ABSOLUE */
      header img, nav img, .logo img {
        aspect-ratio: auto !important;
        width: auto !important;
        height: auto !important;
      }
    `}} />
  </div>
);

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
  <div className="ulysse-page">
    <ProjectTemplate name="ulysse" description={description} images={[]} />
    <CustomGallery />
  </div>
);

export default Ulysse;
