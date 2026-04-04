import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-2xl prose-headings:font-heading">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-10">Last updated: March 8, 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By downloading, installing, or using the Waylena iOS application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the App.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">2. Description of Service</h2>
              <p>Waylena is a mobile application that helps professionals log career conversations, set follow-up reminders, and build their professional network over time.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">3. User Accounts</h2>
              <p>You must create an account to use the App. You are responsible for maintaining the security of your account and for all activities under your account. You agree to provide accurate and complete information.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">4. User Content</h2>
              <p>You retain ownership of all content you enter into the App, including conversation logs, notes, and contact information. By using the App, you grant us a limited license to store and process your content solely for the purpose of providing the service.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">5. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Use the App for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the service</li>
                <li>Interfere with or disrupt the App's functionality</li>
                <li>Reverse engineer, decompile, or disassemble any part of the App</li>
                <li>Use the App to store or transmit malicious content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">6. Intellectual Property</h2>
              <p>The App, including its design, features, and content (excluding user content), is owned by Waylena and protected by intellectual property laws. You may not copy, modify, or distribute any part of the App without our written consent.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">7. Disclaimer of Warranties</h2>
              <p>The App is provided "as is" and "as available" without warranties of any kind, express or implied. We do not guarantee that the App will be uninterrupted, error-free, or secure.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">8. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Waylena shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the App.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">9. Termination</h2>
              <p>We may suspend or terminate your access to the App at any time, with or without cause. You may delete your account at any time through the App settings or by emailing <a href="mailto:hello@waylena.com" className="text-primary underline underline-offset-4">hello@waylena.com</a>. Upon termination, your right to use the App ceases immediately.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">10. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the revised Terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">11. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to conflict of law principles.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">12. Contact Us</h2>
              <p>
                If you have questions about these Terms, please contact us at{" "}
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

export default Terms;
