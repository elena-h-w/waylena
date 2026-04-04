import { Link } from "react-router-dom";

const BETA_URL = "https://forms.gle/JFfq4jDLSX9sEcpX8";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="text-2xl font-heading font-bold text-foreground tracking-tight">
          Waylena
        </Link>
        <a href={BETA_URL} target="_blank" rel="noopener noreferrer">
          <button className="bg-primary text-primary-foreground hover:bg-primary/85 font-semibold rounded-full px-5 py-2 text-sm transition-all">
            Join the Beta
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
