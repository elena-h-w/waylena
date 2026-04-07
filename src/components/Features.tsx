import { Coffee, FileText, Tag, Bell, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Log conversations",
    description: "Coffee chats, mentor meetings, networking events — all in one place.",
  },
  {
    icon: FileText,
    title: "Capture advice & commitments",
    description: "Record key takeaways and promises so nothing gets lost.",
  },
  {
    icon: Tag,
    title: "Tag topics",
    description: "Organize by Career Pivot, Job Lead, Role Advice, and more.",
  },
  {
    icon: Bell,
    title: "Follow-up reminders",
    description: "Timely nudges to reconnect before the window closes.",
  },
  {
    icon: BarChart3,
    title: "Networking insights",
    description: "See patterns in your networking activity and spot gaps.",
  },
  {
    icon: Users,
    title: "Track top connections",
    description: "Know who your most valuable professional relationships are.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground text-center mb-16">
          Everything you need to network with intention
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
              <f.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
