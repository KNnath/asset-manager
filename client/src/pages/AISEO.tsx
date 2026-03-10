import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, CheckCircle2, FileText, LineChart, Search, Settings, Share2, ShieldCheck, Zap } from "lucide-react";
import aiSeoAbstract from "@/assets/images/ai-seo-abstract.png";

export default function AISEO() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary mb-6">
                <Search className="w-4 h-4" />
                <span className="text-xs font-semibold tracking-wider">SEARCHATLAS POWERED</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                AI-Powered SEO. <br/>
                <span className="text-white/50">Human Quality Control.</span>
              </h1>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                This is not generic content spam. This is a highly strategic, AI-executed organic growth engine. We use SearchAtlas to scale production and our human experts to ensure brand voice, accuracy, and alignment.
              </p>
              <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold">
                See the System in Action
              </Button>
            </div>
            <div>
              <img src={aiSeoAbstract} alt="AI SEO Network" className="rounded-3xl border border-white/10 shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* The Funnel Workflow */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">The Execution Funnel</h2>
            <p className="text-white/60 text-lg">A 9-step proprietary process that combines algorithmic speed with senior-level oversight.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Search className="w-6 h-6 text-primary"/>, title: "1. Research", desc: "Deep dive into market gaps, search intent, and competitor weaknesses.", ai: true },
              { icon: <Network className="w-6 h-6 text-primary"/>, title: "2. Topic Mapping", desc: "Clustering entities to build topical authority and semantic relevance.", ai: true },
              { icon: <Bot className="w-6 h-6 text-primary"/>, title: "3. Content Production", desc: "SearchAtlas automated drafting of high-fidelity baseline content.", ai: true },
              { icon: <Settings className="w-6 h-6 text-primary"/>, title: "4. On-Page Optimization", desc: "Entity injection, semantic structuring, and NLP optimization.", ai: true },
              { icon: <Zap className="w-6 h-6 text-primary"/>, title: "5. Technical Improvements", desc: "Site speed, schema markup, and crawlability enhancements.", ai: false },
              { icon: <Share2 className="w-6 h-6 text-primary"/>, title: "6. Publishing & Deployment", desc: "Strategic rollout across your CMS and content properties.", ai: false },
              { icon: <ShieldCheck className="w-6 h-6 text-primary"/>, title: "7. AI Visibility Monitoring", desc: "Tracking presence in LLM answers (ChatGPT, Perplexity, Gemini).", ai: true },
              { icon: <LineChart className="w-6 h-6 text-primary"/>, title: "8. MEC Reporting", desc: "Tying organic traffic back to the single metric that matters most.", ai: false },
              { icon: <FileText className="w-6 h-6 text-primary"/>, title: "9. Iteration", desc: "Continuous refinement based on real-world data and rank fluctuations.", ai: false },
            ].map((step, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl relative border-white/5 hover:border-primary/50 transition-colors group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    {step.icon}
                  </div>
                  {step.ai ? (
                     <span className="text-[10px] font-semibold tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">AI ACCELERATED</span>
                  ) : (
                     <span className="text-[10px] font-semibold tracking-wider text-white/50 bg-white/5 px-2 py-1 rounded-full">HUMAN LED</span>
                  )}
                </div>
                <h4 className="text-xl font-heading font-bold text-white mb-3">{step.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
            Scale your organic presence. <br />
            <span className="text-white/50">Keep your quality intact.</span>
          </h2>
          <Button size="lg" className="rounded-full px-10 h-16 text-lg font-semibold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(234,131,49,0.3)]">
            Deploy the AI SEO Funnel
          </Button>
        </div>
      </section>
    </div>
  );
}