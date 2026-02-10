import ProjectTemplate from "@/components/ProjectTemplate";

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/projets/ariette/ariette${i + 1}.jpg`,
  alt: `Projet Ariette – Photo ${i + 1}`,
}));

const description = [
  "Rénovation d'une longère en pierre, nichée dans la campagne girondine, transformée en résidence de vacances.",
  "Le projet conserve l'enveloppe rurale tout en y insérant des espaces intérieurs résolument modernes, baignés de lumière grâce à de nouvelles ouvertures cadrant le paysage.",
  "Les annexes — grange et appentis — sont reconverties en ateliers et espaces d'accueil, prolongeant l'esprit du lieu.",
  "Surface : 200 m² — Livraison : 2023",
];

const Ariette = () => (
  <ProjectTemplate name="ariette" description={description} images={images} />
);

export default Ariette;
