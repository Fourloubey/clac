import Layout from "@/components/Layout";
import fondatricesImage from "@/assets/agence-fondatrices.jpg";

const Agence = () => {
  return (
    <Layout>
      <section className="w-full px-6 md:px-16 lg:px-20 py-12 md:py-20">
        {/* Mobile: image on top */}
        <div className="block md:hidden mb-10">
          <img
            src={fondatricesImage}
            alt="Cécile et Hélène, fondatrices de CLAC"
            className="w-full object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Text column */}
          <div className="md:w-1/2 text-justify">
            <h2 className="text-lg md:text-xl font-bold mb-8 leading-relaxed">
              Composer sans dénaturer, concevoir avec respect, développer avec humilité
            </h2>

            <p className="mb-6 leading-relaxed">
              Fondée en 2022 à Bordeaux par Cécile, architecte, et Hélène, ingénieur-architecte, aux parcours complémentaires, l'agence propose une approche à la fois technique et sensible, résolument tournée vers des projets intemporels et porteurs de sens.
            </p>

            <p className="mb-10 leading-relaxed">
              Avec 20 années d'expérience cumulée, CLAC s'illustre par une capacité à répondre aux enjeux architecturaux avec précision et maîtrise. Leur démarche repose sur une recherche d'équilibre entre attentes actuelles et respect des lieux, en ancrant chaque projet dans son territoire.
            </p>

            <h3 className="text-base md:text-lg font-bold mb-4">
              L'architecture conjuguée : un manifeste collectif
            </h3>

            <p className="mb-6 leading-relaxed">
              CLAC ne se limite pas à la conception architecturale ; l'architecture conjuguée que l'agence défend se distingue par son <strong>approche collaborative</strong>. Du client à l'artisan, chaque intervenant est pleinement impliqué tout au long du projet. Cette dynamique d'échange garantit des projets singuliers, équilibrant justesse budgétaire, temporelle et programmatique.
            </p>

            <p className="mb-10 leading-relaxed">
              Cette pratique, profondément ancrée dans les valeurs d'écoute, de partage et de collaboration, place l'humain au centre du processus créatif.
            </p>

            <h3 className="text-base md:text-lg font-bold mb-4">
              Une architecture locale et engagée
            </h3>

            <p className="mb-6 leading-relaxed">
              Installée au cœur du Grand Sud-Ouest, l'agence revendique un fort ancrage territorial. Chaque projet devient une opportunité de mettre en valeur les savoir-faire locaux, en collaborant avec des artisans et en intégrant au maximum des matériaux issus de la région.
            </p>

            <p className="mb-10 leading-relaxed">
              CLAC privilégie ainsi une <strong>architecture sobre et durable</strong>, conçue pour évoluer avec le temps. Refusant les tendances éphémères, Cécile et Hélène imaginent des espaces à la fois fonctionnels et intemporels, pensés pour répondre aux besoins des habitants.
            </p>

            <h3 className="text-base md:text-lg font-bold mb-4">
              Vers une architecture durable et raisonnée
            </h3>

            <p className="leading-relaxed">
              Dans un contexte où les défis environnementaux redéfinissent les pratiques, CLAC s'inscrit dans une démarche responsable et pérenne. En s'appuyant sur des matériaux locaux et en pensant des espaces évolutifs, l'agence conçoit des projets qui traversent le temps avec justesse en veillant à ce que chaque détail s'inscrive dans une réflexion durable.
            </p>
          </div>

          {/* Image column – desktop only */}
          <div className="hidden md:block md:w-1/2">
            <img
              src={fondatricesImage}
              alt="Cécile et Hélène, fondatrices de CLAC"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Agence;
