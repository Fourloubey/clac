import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectTemplateProps {
  name: string;
  description: string[];
  images: ProjectImage[];
}

const ProjectTemplate = ({ name, description, images }: ProjectTemplateProps) => {
  return (
    <Layout>
      {/* Photo grid */}
      <section className="w-full px-0 md:px-16 lg:px-20 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6">
          {images.map((image, index) => (
            <div key={index} className="aspect-[4/5] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Project text – right-aligned */}
      <section className="w-full px-6 md:px-16 lg:px-20 py-12 md:py-20">
        <div className="max-w-2xl ml-auto text-right">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-8">{name}</h2>
          {description.map((paragraph, index) => (
            <p key={index} className="text-sm md:text-base leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Back to projects link */}
      <div className="w-full flex justify-center pb-16">
        <Link
          to="/projets"
          className="text-sm font-bold tracking-[0.15em] uppercase hover:underline underline-offset-4 decoration-black transition-all"
        >
          Retour aux projets
        </Link>
      </div>
    </Layout>
  );
};

export default ProjectTemplate;
