import { Button } from "@/components/ui/button";

const BETA_URL = "https://forms.gle/JFfq4jDLSX9sEcpX8";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight mb-6 animate-fade-up">
          Networking made simple
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-body mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Log conversations. Follow up. Land opportunities.
        </p>
        <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="lg" className="px-10 py-6 text-lg" asChild>
            <a href={BETA_URL} target="_blank" rel="noopener noreferrer" aria-label="Join the Waylena beta program — it's free">
              Join the Beta — It's Free
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
