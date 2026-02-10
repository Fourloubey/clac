import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-16 lg:px-20 py-4 md:py-8 mt-auto">
      {/* Main row: CSS Grid 3 equal columns */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 text-xs md:text-sm items-start leading-tight md:leading-normal"
        style={{ gridTemplateColumns: undefined }}
      >
        {/* Left */}
        <div className="text-center md:text-left">
          <span className="font-bold">CLAC</span>
          <br />
          <span>44 Rue Chevalier - 33000 Bordeaux</span>
        </div>

        {/* Center */}
        <div className="flex flex-col items-center gap-1">
          <a href="tel:0772090255" className="hover:underline underline-offset-4">
            07 72 09 02 55
          </a>
          <a href="mailto:contact@clac.archi" className="hover:underline underline-offset-4">
            contact@clac.archi
          </a>
        </div>

        {/* Right */}
        <div className="text-center md:text-right">
          <a
            href="https://www.instagram.com/clac.archi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Bottom row: centered legal links */}
      <div className="flex justify-center gap-4 md:gap-6 mt-3 md:mt-6 text-[10px] md:text-xs text-muted-foreground">
        <Link to="/mentions-legales" className="hover:underline underline-offset-4">
          Mentions légales
        </Link>
        <Link to="/politique-de-confidentialite" className="hover:underline underline-offset-4">
          Politique de confidentialité
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
