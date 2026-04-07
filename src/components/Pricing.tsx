import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import AppStoreBadge from "./AppStoreBadge";


const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground text-center mb-16">
          Simple pricing
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free Beta */}
          <div className="p-8 rounded-2xl border-2 border-primary bg-background">
            <div className="text-sm font-semibold text-primary mb-2">Available Now</div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-1">Free</h3>
            <p className="text-3xl font-bold text-foreground mb-6">$0</p>
            <ul className="space-y-3 mb-8">
              {["Log unlimited conversations", "Set follow-up reminders", "Tag and organize contacts", "Networking insights"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <AppStoreBadge imgClassName="h-12" />
            </div>
          </div>

          {/* Premium */}
          <div className="p-8 rounded-2xl border border-border bg-background opacity-80">
            <div className="text-sm font-semibold text-muted-foreground mb-2">Coming Soon</div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-1">Premium</h3>
            <p className="text-3xl font-bold text-foreground mb-6">TBA</p>
            <ul className="space-y-3 mb-8">
              {["Everything in Free", "AI-powered monthly narrative synthesis", "Smart follow-up suggestions", "Advanced analytics"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <Sparkles className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="heroSecondary" className="w-full py-5" disabled>Coming Soon</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
