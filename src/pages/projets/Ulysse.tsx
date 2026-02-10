import ProjectTemplate from "@/components/ProjectTemplate";

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/projets/ulysse/ulysse${i + 1}.jpg`,
  alt: `Projet Ulysse – Photo ${i + 1}`,
}));

const description = [
  "Construction neuve d'une maison individuelle en lisière de forêt, pensée comme un trait d'union entre l'habitat et le paysage.",
  "L'ossature bois et les larges baies vitrées dissolvent la frontière entre intérieur et extérieur, offrant un cadre de vie immergé dans la nature.",
  "Les matériaux biosourcés et la conception bioclimatique traduisent un engagement fort en faveur d'une architecture responsable.",
  "Surface : 160 m² — Livraison : 2024",
];

const Ulysse = () => (
  <ProjectTemplate name="ulysse" description={description} images={images} />
);

export default Ulysse;
