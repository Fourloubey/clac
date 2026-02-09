import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: "AGENCE", path: "/agence" },
    { label: "PROJETS", path: "/projets" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="w-full px-6 md:px-16 lg:px-20 pt-8 pb-6 md:pt-10 md:pb-8">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
        {/* Logo */}
        <Link to="/" className="mb-6 md:mb-0">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl tracking-[0.15em] font-normal leading-none">
              CLAC
            </h1>
            <p className="text-[10px] md:text-xs tracking-[0.05em] text-muted-foreground mt-1">
              cougoul larroque | architecture conjuguée
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 md:gap-8 md:mt-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm md:text-base tracking-[0.15em] text-foreground hover:underline underline-offset-4 decoration-foreground transition-all"
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
