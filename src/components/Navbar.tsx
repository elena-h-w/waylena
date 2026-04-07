import { Link } from "react-router-dom";
import AppStoreBadge from "./AppStoreBadge";

const navLinks = [
  { label: "Features", to: "/#features" },
  { label: "Process", to: "/#how-it-works" },
  { label: "Pricing", to: "/#pricing" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="text-2xl font-heading font-bold text-foreground tracking-tight">
          Waylena
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <AppStoreBadge imgClassName="h-9" />
      </div>
    </nav>
  );
};

export default Navbar;
