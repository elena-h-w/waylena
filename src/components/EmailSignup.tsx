import KitForm from "./KitForm";

const EmailSignup = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
          Stay in the loop
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Be the first to hear about Waylena updates and new features.
        </p>
        <KitForm />
      </div>
    </section>
  );
};

export default EmailSignup;
