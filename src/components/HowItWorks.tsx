import { MessageSquare, Bell, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Log the conversation",
    description: "Capture who you spoke with, what was discussed, and any commitments made — in seconds.",
  },
  {
    icon: Bell,
    title: "Set a follow-up reminder",
    description: "Never let a warm connection go cold. Set reminders so you follow up at the perfect time.",
  },
  {
    icon: TrendingUp,
    title: "Build your network over time",
    description: "Watch your professional network grow with every meaningful conversation you track.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground text-center mb-16">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
