import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "About | Waylena";

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    metaDesc?.setAttribute("content", "Waylena was built by Elena Wang, a marketing professional who wanted a simple way to track career conversations and follow up strategically.");

    const setOG = (property: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      const created = !el;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute("content") ?? "";
      el.setAttribute("content", content);
      return { el, prev, created };
    };

    const ogTitle = setOG("og:title", "About | Waylena");
    const ogUrl = setOG("og:url", "https://waylena.com/about");
    const ogDesc = setOG("og:description", "Waylena was built by Elena Wang, a marketing professional who wanted a simple way to track career conversations and follow up strategically.");
    const ogSiteName = setOG("og:site_name", "Waylena");

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "about-page-schema";
    schema.textContent = JSON.stringify([{
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": "https://waylena.com/about/#aboutpage",
          "url": "https://waylena.com/about",
          "isPartOf": { "@id": "https://waylena.com/#website" },
          "about": { "@id": "https://waylena.com/#organization" },
          "mentions": [{ "@id": "https://waylena.com/#app" }]
        },
        {
          "@type": "WebSite",
          "@id": "https://waylena.com/#website",
          "url": "https://waylena.com/",
          "name": "Waylena"
        },
        {
          "@type": "Organization",
          "@id": "https://waylena.com/#organization",
          "name": "Waylena",
          "url": "https://waylena.com",
          "logo": "https://waylena.com/logo.svg",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "hello@waylena.com",
            "contactType": "customer support"
          },
          "founder": { "@type": "Person", "name": "Elena Wang" }
        },
        {
          "@type": "SoftwareApplication",
          "@id": "https://waylena.com/#app",
          "name": "Waylena",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": ["iOS", "Android"],
          "description": "Log career conversations and follow up with the right person at the right time.",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        }
      ]
    }]);
    document.head.appendChild(schema);

    return () => {
      document.title = prevTitle;
      metaDesc?.setAttribute("content", prevDesc);

      const restore = ({ el, prev, created }: { el: HTMLMetaElement; prev: string; created: boolean }) => {
        if (created) el.remove();
        else el.setAttribute("content", prev);
      };
      restore(ogTitle);
      restore(ogUrl);
      restore(ogDesc);
      restore(ogSiteName);

      document.getElementById("about-page-schema")?.remove();
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
              I believe the problem is real, so I decided to build the solution myself. Waylena is a mobile networking tracker app designed for professionals who want to be more intentional about networking. Whether you're job searching, exploring what's next, or building long-term professional relationships — Waylena helps you stay on top of your network.
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
