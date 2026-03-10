import { Button } from "@/components/ui/button";
import { BarChart3, ChevronRight, Activity, Target, ArrowRight } from "lucide-react";
import dashboardMockup from "@/assets/images/dashboard-mockup.png";

export default function WhiskeyNeat() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary mb-6">
            <Activity className="w-4 h-4" />
            <span className="text-xs font-semibold tracking-wider">THE INTELLIGENCE LAYER</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Stop guessing. <br/>
            <span className="text-white/50">Start knowing with WhiskeyNeat.ai</span>
          </h1>
          <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            Data should guide human strategy and command AI execution. WhiskeyNeat.ai is the reporting, insights, and intelligence platform that connects your marketing efforts to MEC.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold">
              Request Platform Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-3xl blur-2xl opacity-50"></div>
            <img src={dashboardMockup} alt="WhiskeyNeat.ai Interface" className="relative rounded-2xl border border-white/10 shadow-2xl w-full" />
            
            {/* KPI Overlay Elements */}
            <div className="absolute -right-6 top-12 glass-card p-6 rounded-2xl border border-white/10 shadow-xl hidden md:block w-64 animate-in slide-in-from-right-8 duration-1000 delay-300">
              <p className="text-xs text-white/50 font-medium tracking-wider mb-2 flex items-center gap-2"><Target className="w-3 h-3 text-primary"/> NORTH-STAR KPI</p>
              <h4 className="text-white font-medium mb-1">MEC Performance</h4>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-heading font-bold text-white">4.2x</span>
                <span className="text-sm font-medium text-emerald-400 mb-1">+12% vs last month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEC Explanation */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Why MEC?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Vanity metrics kill businesses. Impressions don't pay payroll. Empty clicks don't close deals. We built our entire philosophy around MEC because it's the only number that ensures your marketing budget is turning into tangible business value.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
                   <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">M</div>
                   <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">E</div>
                   <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">C</div>
                </div>
                <p className="font-mono text-sm text-white/50 mb-2">// THE FORMULA</p>
                <p className="text-white font-medium italic">[MEC Definition Placeholder - To be inserted by admins]</p>
              </div>

              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3"><ChevronRight className="text-primary w-5 h-5"/> Connects top-of-funnel action to bottom-line results.</li>
                <li className="flex items-center gap-3"><ChevronRight className="text-primary w-5 h-5"/> Dictates where AI budgets should be allocated.</li>
                <li className="flex items-center gap-3"><ChevronRight className="text-primary w-5 h-5"/> Provides irrefutable proof of ROI.</li>
              </ul>
            </div>
            <div className="grid gap-6">
               {[
                 { title: "Consolidated Data", desc: "Pulling from Meta, Google, LinkedIn, and organic channels into one unified source of truth." },
                 { title: "Actionable Insights", desc: "Not just charts. We provide plain-English recommendations based on the data." },
                 { title: "Executive Visibility", desc: "Clear, high-level dashboards designed for founders and operators." }
               ].map((feature, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl border-white/5">
                    <h4 className="text-lg font-heading font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-sm text-white/60">{feature.desc}</p>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">Ready to see the data?</h2>
          <Button size="lg" className="rounded-full px-10 h-16 text-lg font-semibold">
            Get an MEC Audit <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}