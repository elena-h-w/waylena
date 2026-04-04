import { Button } from "@/components/ui/button";

const BETA_URL = "https://forms.gle/JFfq4jDLSX9sEcpX8";

const RepeatCTA = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-8">
          Ready to network with intention?
        </h2>
        <a href={BETA_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="hero" size="lg" className="px-10 py-6 text-lg">
            Join the Beta — It's Free
          </Button>
        </a>
      </div>
    </section>
  );
};

export default RepeatCTA;
