import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-home.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Image */}
      <section className="w-full px-6 md:px-16 lg:px-20">
        <img
          src={heroImage}
          alt="Projet architectural CLAC – façade maison contemporaine"
          className="w-full h-[50vh] md:h-[70vh] object-cover"
        />
      </section>

      {/* Quote */}
      <section className="w-full px-6 md:px-16 lg:px-20 py-16 md:py-24">
        <blockquote className="max-w-2xl ml-auto text-right">
          <p className="text-lg md:text-xl italic leading-relaxed">
            «&nbsp;Nous croyons en une architecture qui répond aux usages réels
            sans superflu. Chaque projet incarne une réponse sur mesure aux défis
            sociaux, environnementaux et esthétiques d'aujourd'hui.&nbsp;»
          </p>
        </blockquote>
      </section>
    </Layout>
  );
};

export default Index;
