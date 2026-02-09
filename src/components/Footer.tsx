import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-16 lg:px-20 py-8 mt-auto">
      {/* Main row: CSS Grid 3 equal columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm items-center">
        {/* Left */}
        <span className="whitespace-nowrap text-left">CLAC.ARCHI | 44 Rue Chevalier | 33000 Bordeaux</span>

        {/* Center */}
        <div className="flex items-center justify-center gap-2">
          <a href="tel:0772090255" className="hover:underline underline-offset-4">
            07 72 09 02 55
          </a>
          <span>|</span>
          <a href="mailto:contact@clac.archi" className="hover:underline underline-offset-4">
            contact@clac.archi
          </a>
        </div>

        {/* Right */}
        <a
          href="https://www.instagram.com/clac.archi/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4 text-right"
        >
          Instagram
        </a>
      </div>

      {/* Bottom row: centered legal links */}
      <div className="flex justify-center gap-6 mt-6 text-xs text-muted-foreground">
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
