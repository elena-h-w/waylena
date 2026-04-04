import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import EmailSignup from "@/components/EmailSignup";
import RepeatCTA from "@/components/RepeatCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Pricing />
      <EmailSignup />
      <RepeatCTA />
      <Footer />
    </div>
  );
};

export default Index;
