import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="text-xl font-heading font-bold text-foreground">
            Waylena
          </Link>
          <nav className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <a href="mailto:hello@waylena.com" className="hover:text-foreground transition-colors">hello@waylena.com</a>
          </nav>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">© {new Date().getFullYear()} Waylena. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
