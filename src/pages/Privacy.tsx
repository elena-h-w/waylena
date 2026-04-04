import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    const prevContent = meta?.getAttribute("content") ?? "";
    const prevTitle = document.title;
    meta?.setAttribute("content", "Waylena Privacy Policy — learn how we collect, use, and protect your personal information.");
    document.title = "Privacy Policy | Waylena";
    return () => {
      meta?.setAttribute("content", prevContent);
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-2xl prose-headings:font-heading">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: March 8, 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>Waylena ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our iOS mobile application ("App").</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Account Information:</strong> Email address when you create an account. We use one-time codes for authentication and do not store passwords.</li>
                <li><strong className="text-foreground">Career Conversation Data:</strong> Information you voluntarily enter about your professional conversations, contacts, follow-up reminders, tags, and notes.</li>
                <li><strong className="text-foreground">Usage Analytics:</strong> We use Mixpanel to collect anonymized usage data to improve the App experience, including feature usage patterns and session data.</li>
                <li><strong className="text-foreground">Device Information:</strong> Device type, operating system version, and app version for troubleshooting purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain the App's functionality</li>
                <li>To send follow-up reminders you've configured</li>
                <li>To improve and optimize the App experience</li>
                <li>To communicate with you about updates and new features</li>
                <li>To provide customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">4. Data Storage & Security</h2>
              <p>Your data is securely stored using Supabase, a trusted cloud infrastructure provider. We implement industry-standard security measures including encryption in transit and at rest to protect your personal information.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">5. Third-Party Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Supabase:</strong> Database and authentication services.</li>
                <li><strong className="text-foreground">Mixpanel:</strong> Analytics to understand how users interact with the App.</li>
              </ul>
              <p className="mt-3">These services have their own privacy policies governing the use of your information.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">6. Data Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information only as required by law or to protect our rights.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">7. Your Rights</h2>
              <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at <a href="mailto:hello@waylena.com" className="text-primary underline underline-offset-4">hello@waylena.com</a>. You may also delete your account through the App settings or by emailing <a href="mailto:hello@waylena.com" className="text-primary underline underline-offset-4">hello@waylena.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">8. Children's Privacy</h2>
              <p>The App is not intended for users under 13 years of age. We do not knowingly collect information from children under 13.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy within the App and/or by email.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:hello@waylena.com" className="text-primary underline underline-offset-4">hello@waylena.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
