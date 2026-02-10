import ProjectTemplate from "@/components/ProjectTemplate";

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/projets/hippolyte/hippolyte${i + 1}.jpg`,
  alt: `Projet Hippolyte – Photo ${i + 1}`,
}));

const description = [
  "Aménagement intérieur complet d'un appartement haussmannien, en préservant les moulures, parquets et cheminées d'époque.",
  "Le projet introduit une palette de matériaux contemporains — béton ciré, acier brossé, chêne massif — qui viennent sublimer le cadre patrimonial.",
  "La cuisine et les espaces de vie sont décloisonnés pour créer un grand volume ouvert sur la lumière du sud.",
  "Surface : 95 m² — Livraison : 2024",
];

const Hippolyte = () => (
  <ProjectTemplate name="hippolyte" description={description} images={images} />
);

export default Hippolyte;
