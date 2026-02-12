import Layout from "@/components/Layout";
import fondatricesImage from "@/assets/agence-fondatrices.jpg";

const Agence = () => {
  return (
    <Layout>
      <section className="w-full px-0 md:px-16 lg:px-20">
        {/* Image – always on top, fixed aspect ratio */}
        <div className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl md:float-right md:ml-12 md:mb-8">
          <img
            src={fondatricesImage}
            alt="Cécile et Hélène, fondatrices de CLAC"
            className="w-full aspect-[3/4] object-cover"
          />
        </div>

        {/* Text – wraps around image on desktop, below on mobile */}
        <div className="px-6 md:px-0 text-justify mt-8 md:mt-0">
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

          {/* Clear float */}
          <div className="clear-both" />
        </div>
      </section>
    </Layout>
  );
};

export default Agence;
