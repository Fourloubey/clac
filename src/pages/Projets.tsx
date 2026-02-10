import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

import projetRafael from "@/assets/projet-rafael.jpg";
import projetLucien from "@/assets/projet-lucien.jpg";
import projetLeon from "@/assets/projet-leon.jpg";
import projetHippolyte from "@/assets/projet-hippolyte.jpg";
import projetUlysse from "@/assets/projet-ulysse.jpg";
import projetAriette from "@/assets/projet-ariette.jpg";

const projects = [
  { slug: "rafael", name: "rafaël", image: projetRafael },
  { slug: "lucien", name: "lucien", image: projetLucien },
  { slug: "leon", name: "léon", image: projetLeon },
  { slug: "hippolyte", name: "hippolyte", image: projetHippolyte },
  { slug: "ulysse", name: "ulysse", image: projetUlysse },
  { slug: "ariette", name: "ariette", image: projetAriette },
];

const Projets = () => {
  return (
    <Layout>
      {/* Project grid */}
      {/* Project grid */}
      <section className="w-full px-0 md:px-16 lg:px-20 py-12 md:py-20">
        <div className="grid grid-cols-3 gap-0 md:gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projets/${project.slug}`}
              className="group relative overflow-hidden aspect-[4/5]"
            >
              <img
                src={project.image}
                alt={`Projet ${project.name}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Glassmorphism label */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <span className="bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs tracking-[0.1em] px-3 py-1.5 rounded-full shadow-sm">
                  {project.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote – right-aligned */}
      <section className="w-full px-6 md:px-16 lg:px-20 py-16 md:py-24">
        <blockquote className="max-w-2xl ml-auto text-right">
          <p className="text-lg md:text-xl italic leading-relaxed">
            «&nbsp;Pour nous, chaque projet est l'occasion de conjuguer les échelles&nbsp;: celle de l'intime, de l'usager, et celle du territoire, de son histoire et de ses ressources.&nbsp;»
          </p>
        </blockquote>
      </section>
    </Layout>
  );
};

export default Projets;
