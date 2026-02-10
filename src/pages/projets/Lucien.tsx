import ProjectTemplate from "@/components/ProjectTemplate";

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/projets/lucien/lucien${i + 1}.jpg`,
  alt: `Projet Lucien – Photo ${i + 1}`,
}));

const description = [
  "Transformation d'un ancien atelier artisanal en habitation familiale, au cœur du centre historique de Bordeaux.",
  "Le parti pris architectural repose sur la conservation de la charpente apparente et l'insertion de volumes habités en bois, suspendus dans la double hauteur.",
  "Chaque espace a été pensé comme une pièce à vivre à part entière, connectée visuellement aux autres par des percées et des jeux de niveaux.",
  "Surface : 180 m² — Livraison : 2022",
];

const Lucien = () => (
  <ProjectTemplate name="lucien" description={description} images={images} />
);

export default Lucien;
