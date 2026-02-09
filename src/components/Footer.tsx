import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-16 lg:px-20 py-8 mt-auto">
      <div className="mb-4">
        <p className="text-sm font-semibold tracking-[0.1em]">CLAC.ARCHI</p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
          <span>44, Rue Chevalier – 33000 Bordeaux</span>
          <div className="flex items-center gap-4">
            <a href="tel:0772090255" className="hover:underline underline-offset-4">
              07 72 09 02 55
            </a>
            <span>|</span>
            <a href="mailto:contact@clac.archi" className="hover:underline underline-offset-4">
              contact@clac.archi
            </a>
          </div>
        </div>
        <a
          href="https://www.instagram.com/clac.archi/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4"
        >
          Instagram
        </a>
      </div>
      <div className="flex gap-6 mt-4 text-xs text-muted-foreground">
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
