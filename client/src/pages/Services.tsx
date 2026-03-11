import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen pt-24 bg-noise pb-32">
      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">Four Doors. One Direction.</h1>
          <p className="font-sans text-xl text-[#8A8478]">
            Choose your entry point. Everything scales from here.
          </p>
        </div>
      </section>

      {/* Door 1: AI SEO */}
      <section className="py-20 px-6 border-t border-[#252420] relative">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="font-heading text-4xl font-bold mb-2">AI SEO Concierge</h2>
            <p className="font-sans text-amber uppercase tracking-widest text-sm font-bold">Powered by SearchAtlas + Human QA</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { name: "AI SEO Starter", setup: "$2,500 audit (credited) → $6,500 setup", monthly: "from $2,000/mo" },
              { name: "AI SEO Growth", setup: "$12,000 setup", monthly: "from $3,500/mo" },
              { name: "AI SEO Concierge", setup: "$18,000–$25,000 setup", monthly: "from $5,500/mo" }
            ].map((tier, i) => (
              <div key={i} className="bg-[#111110] border border-[#252420] p-8 flex flex-col hover:border-amber/50 transition-colors">
                <h3 className="font-heading text-2xl font-bold mb-8">{tier.name}</h3>
                <div className="mb-6">
                  <p className="font-sans text-xs text-[#8A8478] uppercase tracking-wider mb-1">Setup</p>
                  <p className="font-sans text-[#F5F0E8] font-medium">{tier.setup}</p>
                </div>
                <div className="mt-auto pt-6 border-t border-[#252420]">
                  <p className="font-sans text-xs text-[#8A8478] uppercase tracking-wider mb-1">Monthly</p>
                  <p className="font-sans text-amber text-xl font-bold">{tier.monthly}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#161614] border-l-2 border-amber p-6">
            <p className="font-sans text-[#F5F0E8] italic">
              "Every AI SEO engagement starts with a $2,500 MEC Audit + AI Opportunity Map. This fee is credited toward setup if you sign within 14 days."
            </p>
          </div>
        </div>
      </section>

      {/* Door 2: Media Buying */}
      <section className="py-20 px-6 border-t border-[#252420]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="font-heading text-4xl font-bold mb-2">Media Buying</h2>
          </div>

          <div className="bg-[#111110] border border-[#252420] p-8 md:p-12">
            <p className="font-sans text-lg text-[#8A8478] mb-8 max-w-2xl">
              Paid media management across Meta, Google, YouTube, TikTok, Pinterest, and Bing.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div>
                <p className="font-sans text-3xl font-bold text-amber mb-2">15%</p>
                <p className="font-sans text-sm text-[#8A8478]">$5K–$15K Monthly Spend</p>
              </div>
              <div>
                <p className="font-sans text-3xl font-bold text-amber mb-2">12%</p>
                <p className="font-sans text-sm text-[#8A8478]">$15K–$50K Monthly Spend</p>
              </div>
              <div>
                <p className="font-sans text-3xl font-bold text-amber mb-2">10%</p>
                <p className="font-sans text-sm text-[#8A8478]">$50K+ Monthly Spend</p>
              </div>
            </div>

            <ul className="space-y-3 mb-10 font-sans text-sm text-[#F5F0E8]/70">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-amber" /> +$1,000/month per additional ad platform beyond first two</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-amber" /> Media management fees are always separate from retainer fees.</li>
            </ul>

            <Link href="/apply" className="inline-flex items-center gap-2 font-sans font-bold text-[#0a0a08] bg-amber hover:bg-amber-light px-8 py-4 rounded-sm transition-colors">
              Apply for Media Buying <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Doors 3 & 4 */}
      <section className="py-20 px-6 border-t border-[#252420]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Door 3 */}
            <div className="bg-[#111110] border border-[#252420] p-10 flex flex-col">
              <h2 className="font-heading text-3xl font-bold mb-4">Branding & Messaging</h2>
              <p className="font-sans text-[#8A8478] mb-8 leading-relaxed">
                Your brand is your most transferable asset. We build it to last — and to sell.
              </p>
              <ul className="space-y-2 mb-10 font-sans text-sm text-[#F5F0E8]/80">
                <li>• Brand Identity</li>
                <li>• Voice & Tone</li>
                <li>• Content Strategy</li>
                <li>• Creative Direction</li>
              </ul>
              <div className="mt-auto">
                <p className="font-sans text-sm tracking-widest text-[#8A8478] uppercase mb-4">Custom — starts with a discovery call.</p>
                <Link href="/apply" className="inline-flex items-center gap-2 font-sans font-bold text-amber border border-amber px-6 py-3 rounded-sm hover:bg-amber/10 transition-colors">
                  Start a Branding Conversation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Door 4 */}
            <div className="bg-[#111110] border border-[#252420] p-10 flex flex-col">
              <h2 className="font-heading text-3xl font-bold mb-4">Web & App Development</h2>
              <p className="font-sans text-[#8A8478] mb-8 leading-relaxed">
                We build sites and systems that convert — and that become intellectual property when you exit.
              </p>
              <ul className="space-y-2 mb-10 font-sans text-sm text-[#F5F0E8]/80">
                <li>• Website Design & Dev</li>
                <li>• Landing Pages</li>
                <li>• App Development</li>
                <li>• CMS Setup</li>
              </ul>
              <div className="mt-auto">
                <p className="font-sans text-sm tracking-widest text-[#8A8478] uppercase mb-4">Project-based — scoped after discovery.</p>
                <Link href="/apply" className="inline-flex items-center gap-2 font-sans font-bold text-amber border border-amber px-6 py-3 rounded-sm hover:bg-amber/10 transition-colors">
                  Talk Development <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="border border-amber p-10 relative bg-[#0a0a08]">
            <h3 className="font-sans font-bold uppercase tracking-[0.12em] text-amber text-sm mb-4">A note on how we price:</h3>
            <p className="font-heading text-2xl text-[#F5F0E8] leading-relaxed">
              We separate the human build from the AI execution — because they're different kinds of value. You pay us to architect the machine. Then you keep us to run, supervise, and improve it. Month-to-month after your initial 90-day live period. No rigid long-term contracts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}