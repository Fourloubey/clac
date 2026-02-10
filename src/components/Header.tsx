import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: "AGENCE", path: "/agence" },
    { label: "PROJETS", path: "/projets" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="w-full px-4 md:px-16 lg:px-20 pt-4 pb-3 md:pt-10 md:pb-8">
      <div className="flex items-start justify-between">
        {/* Logo – aligned left with hero image */}
        <Link to="/">
          <div>
            <h1 className="text-2xl md:text-5xl tracking-[0.15em] font-normal leading-none">
              CLAC
            </h1>
            <p className="text-[8px] md:text-xs tracking-[0.05em] text-muted-foreground mt-0.5 md:mt-1">
              cougoul larroque | architecture conjuguée
            </p>
          </div>
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
