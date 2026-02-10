import ProjectTemplate from "@/components/ProjectTemplate";

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/projets/leon/leon${i + 1}.jpg`,
  alt: `Projet Léon – Photo ${i + 1}`,
}));

const description = [
  "Surélévation et restructuration d'une maison de ville mitoyenne, dans le quartier Saint-Michel.",
  "L'intervention crée un étage supplémentaire en ossature bois, recouvert d'un bardage zinc, qui dialogue avec la façade en pierre existante.",
  "L'escalier, traité comme un élément sculptural, distribue la lumière naturelle depuis un lanterneau zénithal jusqu'au rez-de-chaussée.",
  "Surface : 120 m² — Livraison : 2023",
];

const Leon = () => (
  <ProjectTemplate name="léon" description={description} images={images} />
);

export default Leon;
