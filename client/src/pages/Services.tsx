import { Button } from "@/components/ui/button";
import { ArrowRight, Box, BrainCircuit, Code, Globe, MessageSquare, PenTool, PieChart, Users } from "lucide-react";

const services = [
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: "Creative Design",
    desc: "High-converting assets that command attention.",
    why: "Because bad creative ruins good targeting.",
    ai: "Generative imagery, rapid iteration, a/b testing variants.",
    human: "Art direction, emotional resonance, brand consistency.",
    outcome: "Higher CTRs and stronger brand perception."
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Media Buying",
    desc: "Meta, Google, LinkedIn, and Reddit management.",
    why: "To acquire customers profitably at scale.",
    ai: "Algorithmic bidding, predictive audience targeting.",
    human: "Offer creation, funnel strategy, ad fatigue management.",
    outcome: "Lower CAC and scalable revenue."
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    title: "Social Media Management",
    desc: "Strategic organic presence and community building.",
    why: "Your organic social is your modern storefront.",
    ai: "Trend analysis, optimal posting schedules, content drafting.",
    human: "Community engagement, tone of voice, influencer relations.",
    outcome: "Brand loyalty and organic audience growth."
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "Human + AI Strategy",
    desc: "The overarching game plan governing all channels.",
    why: "Tactics without strategy lead to wasted budget.",
    ai: "Market analysis, competitor intelligence gathering.",
    human: "Business model alignment, positioning, messaging.",
    outcome: "A cohesive system moving in one direction."
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Development",
    desc: "Landing pages, technical infrastructure, and integrations.",
    why: "Frictionless UX is required for high conversion rates.",
    ai: "Code generation, rapid prototyping, bug fixing.",
    human: "UX/UI design, architecture, security, final polish.",
    outcome: "Fast, reliable, high-converting digital properties."
  },
  {
    icon: <Box className="w-8 h-8 text-primary" />,
    title: "AI SEO Funnel",
    desc: "SearchAtlas-powered organic search dominance.",
    why: "Organic traffic provides the highest long-term ROI.",
    ai: "Topic mapping, draft generation, technical audits.",
    human: "QA, brand alignment, entity optimization.",
    outcome: "Dominating search results and LLM answers."
  },
  {
    icon: <PieChart className="w-8 h-8 text-primary" />,
    title: "Analytics & MEC",
    desc: "Powered by WhiskeyNeat.ai for real-time visibility.",
    why: "You cannot improve what you do not measure.",
    ai: "Data aggregation, anomaly detection, predictive trends.",
    human: "Contextual interpretation, strategic pivots.",
    outcome: "Clarity on what is working and what is not."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Consulting",
    desc: "Direct access to senior marketing operators.",
    why: "Sometimes you just need an expert to solve a complex problem.",
    ai: "Data synthesis for faster prep.",
    human: "Decades of hard-won experience and situational judgment.",
    outcome: "Confidence in executive decision making."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      {/* Hero */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            The Managed <span className="text-primary">System</span>
          </h1>
          <p className="text-lg text-white/70 mb-10 leading-relaxed">
            We don't sell piecemeal services. We deliver a cohesive, AI-powered marketing system designed to optimize for MEC. Here is how we execute across every channel.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-white/80 font-medium mb-2">{service.desc}</p>
                <p className="text-white/50 text-sm mb-6 pb-6 border-b border-white/10">{service.why}</p>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-primary font-semibold block mb-1">AI Amplifies:</span>
                    <span className="text-white/70">{service.ai}</span>
                  </div>
                  <div>
                    <span className="text-white font-semibold block mb-1">Humans Control:</span>
                    <span className="text-white/70">{service.human}</span>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/5">
                    <span className="text-emerald-400 font-semibold block mb-1">Outcome:</span>
                    <span className="text-white/90">{service.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 bg-primary/5 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">Stop managing vendors.</h2>
          <Button size="lg" className="rounded-full px-10 h-16 text-lg font-semibold">
            Build Your System <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}