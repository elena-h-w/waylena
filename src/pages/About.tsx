import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    const prevContent = meta?.getAttribute("content") ?? "";
    const prevTitle = document.title;
    meta?.setAttribute("content", "Waylena was built by Elena Wang, a marketing professional who wanted a simple way to track career conversations and follow up strategically.");
    document.title = "About | Waylena";
    return () => {
      meta?.setAttribute("content", prevContent);
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">About Waylena</h1>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm Elena Wang, the founder of Waylena.
            </p>
            <p>
              I'm a marketing professional who knows firsthand how much happens in a single career conversation — the advice that reframes how you think, the introduction that opens an unexpected door, the commitment you made to follow up but never did.
            </p>
            <p>
              The problem isn't that professionals don't network. It's that there's no simple, dedicated place to capture what happens in those conversations and follow up before the moment passes.
            </p>
            <p>
              I believe the problem is real, so I decided to build the solution myself. Waylena is a mobile-first app designed for professionals who want to be more intentional about networking. Whether you're job searching, exploring what's next, or building long-term professional relationships — Waylena helps you stay on top of your network.
            </p>
            <p className="text-foreground font-bold">
              I'd love to hear from you. Reach out anytime at{" "}
              <a href="mailto:hello@waylena.com" className="text-primary hover:text-primary/80">
                hello@waylena.com
              </a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
