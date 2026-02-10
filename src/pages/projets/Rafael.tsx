import ProjectTemplate from "@/components/ProjectTemplate";

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/projets/rafael/rafael${i + 1}.jpg`,
  alt: `Projet Rafaël – Photo ${i + 1}`,
}));

const description = [
  "Réhabilitation complète d'une échoppe bordelaise en pierre de taille, située dans le quartier des Chartrons.",
  "Le projet conjugue la préservation du patrimoine existant avec une extension contemporaine en bois et métal, créant un dialogue entre les époques.",
  "Les volumes intérieurs ont été entièrement repensés pour offrir des espaces de vie généreux et lumineux, tout en respectant la trame structurelle d'origine.",
  "Surface : 145 m² — Livraison : 2023",
];

const Rafael = () => (
  <ProjectTemplate name="rafaël" description={description} images={images} />
);

export default Rafael;
