import DownloadCTA from "./DownloadCTA";

const RepeatCTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-8">
          Ready to network with intention?
        </h2>
        <DownloadCTA />
      </div>
    </section>
  );
};

export default RepeatCTA;
