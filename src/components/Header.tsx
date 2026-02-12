import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo-carre.jpg";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: "AGENCE", path: "/agence" },
    { label: "PROJETS", path: "/projets" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="w-full px-4 md:px-16 lg:px-20 pt-4 pb-2 md:pt-8 md:pb-4">
      <div className="flex items-center justify-between">
        {/* Logo – aligned left with hero image */}
        <Link to="/">
          <img
            src={logoImg}
            alt="CLAC – cougoul larroque | architecture conjuguée"
            className="h-20 md:h-32 w-auto"
          />
        </Link>

        {/* Navigation – grouped right, bold */}
        <nav className="flex items-center gap-3 md:gap-8 mt-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-[11px] md:text-base tracking-[0.1em] md:tracking-[0.15em] font-bold text-foreground hover:underline underline-offset-4 decoration-foreground transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
