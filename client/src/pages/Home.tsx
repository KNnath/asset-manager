import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, BrainCircuit, CheckCircle2, ChevronRight, Compass, LineChart, Network, Search, Zap } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/images/hero-bg.png";
import dashboardMockup from "@/assets/images/dashboard-mockup.png";
import aiSeoAbstract from "@/assets/images/ai-seo-abstract.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Abstract technology background" 
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background"></div>
          <div className="absolute inset-0 bg-grid-white opacity-20"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider uppercase">Managed Marketing System</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Your Marketing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-300 to-primary">AI Concierge</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              We combine decades of marketing experience with the best AI tools so you do not have to. 
              From AI SEO and paid media to creative, development, strategy, and reporting, we manage the system with human oversight and real-life data.
            </motion.p>
            
            <motion.p variants={fadeInUp} className="font-heading font-medium tracking-wide text-white/90 mb-12 flex items-center justify-center gap-4 text-sm md:text-base">
              <span>HUMAN STRATEGY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
              <span>AI EXECUTION</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
              <span>REAL-LIFE DATA</span>
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold w-full sm:w-auto hover:scale-105 transition-transform">
                Book a Strategy Call
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-semibold w-full sm:w-auto bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-sm">
                Request an MEC Audit
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Why this matters */}
      <section className="py-24 relative border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                You don't need more tools.<br />
                <span className="text-white/50">You need a system.</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                The market is flooded with disconnected AI tools, fragmented agencies, and siloed freelancers. 
                Automation without oversight creates noise, not growth. 
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                We believe the right AI tools are only valuable when the right team is using them. We are operators who connect strategy to execution under one roof.
              </p>
              <ul className="space-y-4">
                {[
                  "Eliminate chaotic tech stacks",
                  "Stop managing disconnected vendors",
                  "Ensure quality with mandatory human oversight"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="glass-card rounded-3xl p-8 relative z-10 border border-white/10">
                <img src={aiSeoAbstract} alt="System Architecture" className="w-full h-auto rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Human + AI + Data framework */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">The Concierge Framework</h2>
            <p className="text-white/60 text-lg">A seamless integration of elite marketing expertise, cutting-edge AI execution, and irrefutable performance data.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BrainCircuit className="w-8 h-8 text-primary" />,
                title: "Human Strategy",
                desc: "Decades of operator-level marketing experience guiding the ship. We set the direction, define the voice, and maintain strict quality control."
              },
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "AI Execution",
                desc: "We deploy the best-in-class AI tools to research, generate, and scale execution faster than traditional agencies ever could."
              },
              {
                icon: <LineChart className="w-8 h-8 text-primary" />,
                title: "Real-Life Data",
                desc: "Decisions driven by actual performance, not vanity metrics. We measure what matters to continuously refine the system."
              }
            ].map((card, i) => (
              <div key={i} className="glass-card p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{card.title}</h3>
                <p className="text-white/60 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEC Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="glass-card rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute -right-40 -top-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
            <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                  <BarChart3 className="w-4 h-4" />
                  <span className="text-xs font-semibold tracking-wider">NORTH-STAR KPI</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                  Optimize for MEC. <br/>
                  <span className="text-white/50">Ignore the vanity.</span>
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  MEC is the number that keeps strategy, spend, and performance aligned. We optimize for MEC, not vanity metrics like impressions or empty clicks.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 backdrop-blur-sm">
                  <p className="font-mono text-sm text-white/50 mb-2">// METRIC DEFINITION</p>
                  <p className="text-white font-medium">[MEC Definition Placeholder - Public formula to be inserted]</p>
                </div>
                <p className="text-white/70 mb-8">
                  Powered by <strong className="text-white">WhiskeyNeat.ai</strong>, our intelligence layer surfaces the data behind better MEC decisions.
                </p>
                <Button className="rounded-full flex items-center gap-2">
                  Explore WhiskeyNeat.ai <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="relative">
                <img src={dashboardMockup} alt="WhiskeyNeat.ai Dashboard" className="rounded-2xl border border-white/10 shadow-2xl shadow-black/50" />
                
                {/* Floating Metric Card */}
                <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl border border-white/10 shadow-xl animate-in slide-in-from-bottom-8 duration-1000">
                  <p className="text-xs text-white/50 font-medium tracking-wider mb-1">CURRENT MEC</p>
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-heading font-bold text-white">4.2x</span>
                    <span className="text-sm font-medium text-emerald-400 mb-1 flex items-center"><ChevronRight className="w-4 h-4 -rotate-90"/> 12%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AI SEO funnel section */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Flagship AI SEO Funnel</h2>
            <p className="text-white/60 text-lg">Powered by SearchAtlas. Executed by AI. Reviewed by Humans.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Research & Mapping", desc: "Data-driven topic clusters" },
              { step: "02", title: "AI Content Engine", desc: "SearchAtlas automated drafting" },
              { step: "03", title: "Human QA & Polish", desc: "Brand voice & accuracy check" },
              { step: "04", title: "Deploy & Monitor", desc: "Technical SEO & LLM visibility" }
            ].map((phase, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 text-6xl font-heading font-bold text-white/[0.03] group-hover:text-primary/[0.05] transition-colors">
                  {phase.step}
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-heading font-bold text-white mb-3 mt-8">{phase.title}</h4>
                  <p className="text-sm text-white/60">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Button variant="link" className="text-white hover:text-primary">
                See the full AI SEO Framework <ArrowRight className="w-4 h-4 ml-2" />
             </Button>
          </div>
        </div>
      </section>

      {/* 6. Services Overview */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
           <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-16">The Full System</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
             {[
               { title: "Media Buying", desc: "Meta, Google, LinkedIn, and Reddit management optimized for MEC." },
               { title: "Creative Design", desc: "High-converting assets fueled by data and crafted by human designers." },
               { title: "Social Management", desc: "Strategic presence and community engagement." },
               { title: "Human + AI Strategy", desc: "Overarching game plan combining intuition with algorithmic scale." },
               { title: "Development", desc: "Technical implementation, landing pages, and web infrastructure." },
               { title: "AI SEO Funnel", desc: "SearchAtlas powered organic growth engine." },
               { title: "Analytics & MEC", desc: "Intelligence layer powered by WhiskeyNeat.ai." },
               { title: "Consulting", desc: "Direct access to senior marketing operators." }
             ].map((service, i) => (
                <div key={i} className="border-l border-white/10 pl-6 hover:border-primary transition-colors">
                  <h4 className="text-lg font-heading font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{service.desc}</p>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* 7. Tiers Comparison */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Engagement Models</h2>
            <p className="text-white/60 text-lg">Clear, structured tiers for businesses ready to scale with a managed system.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tier 1 */}
            <div className="glass-card rounded-3xl p-10 flex flex-col">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">AI SEO Concierge</h3>
              <p className="text-sm text-white/50 mb-8 h-10">Foundational AI-powered organic growth system.</p>
              <ul className="space-y-4 mb-10 flex-grow text-sm text-white/70">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white/30 shrink-0" /> SearchAtlas-powered workflow</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white/30 shrink-0" /> Topic research & content planning</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white/30 shrink-0" /> Human review & approvals</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white/30 shrink-0" /> Monthly MEC reporting</li>
              </ul>
              <Button variant="outline" className="w-full rounded-full border-white/10 hover:bg-white/5">Select Tier</Button>
            </div>

            {/* Tier 2 */}
            <div className="glass-card rounded-3xl p-10 flex flex-col relative border-primary/50 shadow-[0_0_30px_rgba(234,131,49,0.1)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">Growth Concierge</h3>
              <p className="text-sm text-white/50 mb-8 h-10">Comprehensive multi-channel execution and strategy.</p>
              <ul className="space-y-4 mb-10 flex-grow text-sm text-white/70">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Everything in AI SEO Concierge</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Paid media management</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Creative & social support</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Ongoing Human + AI strategy</li>
              </ul>
              <Button className="w-full rounded-full">Select Tier</Button>
            </div>

            {/* Tier 3 */}
            <div className="glass-card rounded-3xl p-10 flex flex-col">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">Full Marketing AI</h3>
              <p className="text-sm text-white/50 mb-8 h-10">The ultimate outsourced marketing system.</p>
              <ul className="space-y-4 mb-10 flex-grow text-sm text-white/70">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white/30 shrink-0" /> Everything in Growth Concierge</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white/30 shrink-0" /> Development support</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white/30 shrink-0" /> WhiskeyNeat.ai integration</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white/30 shrink-0" /> Highest-touch consulting</li>
              </ul>
              <Button variant="outline" className="w-full rounded-full border-white/10 hover:bg-white/5">Select Tier</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Proof Placeholder */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-sm font-semibold tracking-wider text-white/40 uppercase mb-8">System Results</p>
          <div className="glass-card max-w-4xl mx-auto rounded-3xl p-12 border-dashed border-white/20">
             <h3 className="text-2xl font-heading text-white/50 mb-4">[Case Study Placeholder]</h3>
             <p className="text-white/40 mb-6">Industry | Challenge | System Deployed | MEC Result</p>
             <blockquote className="text-xl text-white/80 italic">"[Testimonial placeholder detailing the impact of human oversight and AI execution.]"</blockquote>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
            Ready for a smarter system?
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Stop buying random AI tools. Start working with a team that knows how to use them to drive real MEC growth.
          </p>
          <Button size="lg" className="rounded-full px-10 h-16 text-lg font-semibold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(234,131,49,0.3)]">
            Book Your Strategy Call
          </Button>
        </div>
      </section>

    </div>
  );
}
