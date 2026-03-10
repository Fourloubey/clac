import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-home.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Balise H1 cachée visuellement mais lisible par Google */}
      <h1 className="sr-only">CLAC Archi | Agence d'architecture Bordeaux & Pessac - Rénovation et Extension</h1>

      {/* Hero Image */}
      <section className="w-full px-0 md:px-16 lg:px-20">
        <img
          src={heroImage}
          alt="Projet architectural CLAC – façade maison contemporaine à Bordeaux"
          className="w-full h-[50vh] md:h-[70vh] object-cover"
        />
      </section>

      {/* Quote */}
      <section className="w-full px-6 md:px-16 lg:px-20 py-16 md:py-24">
        <blockquote className="max-w-2xl ml-auto text-right">
          {/* On transforme le <p> en <h2> pour structurer la page */}
          <h2 className="text-lg md:text-xl italic leading-relaxed font-normal">
            «&nbsp;Nous croyons en une architecture qui répond aux usages réels
            sans superflu. Chaque projet incarne une réponse sur mesure aux défis
            sociaux, environnementaux et esthétiques d'aujourd'hui.&nbsp;»
          </h2>
        </blockquote>
      </section>
    </Layout>
  );
};

export default Index;
