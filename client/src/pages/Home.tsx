import { Link } from "wouter";
import { ArrowRight, BarChart3, Database, Target, Layers } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [revenue, setRevenue] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setRevenue(10);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-noise">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 py-20 overflow-hidden">
        {/* Spotight */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <p className="font-sans font-bold uppercase tracking-[0.12em] text-amber text-xs mb-8">
            Marketing AI Concierge
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-[#F5F0E8] mb-8">
            Scale Smarter. <br/>
            <span className="text-amber/90">Exit Stronger.</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-[#F5F0E8]/70 max-w-2xl leading-relaxed mb-12">
            We combine decades of senior marketing strategy with AI execution to build marketing engines that drive growth now — and increase business value when it's time to sell.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/services" className="inline-flex justify-center items-center px-8 py-4 bg-amber hover:bg-amber-light text-[#0a0a08] font-sans font-bold rounded-sm transition-colors text-base">
              See How It Works
            </Link>
            <Link href="/apply" className="inline-flex justify-center items-center px-8 py-4 border border-amber text-amber hover:bg-amber/5 font-sans font-bold rounded-sm transition-colors text-base">
              Apply to Work With Us
            </Link>
          </div>
        </div>

        {/* Ticker */}
        <div className="absolute bottom-10 left-0 w-full border-y border-[#252420] bg-[#111110]/50 backdrop-blur-md py-4 overflow-hidden">
          <div className="flex justify-center gap-12 md:gap-24 text-sm font-sans text-[#8A8478] tracking-wide whitespace-nowrap">
            <span className="flex items-center gap-2"><span className="text-amber">$0 &rarr; ${revenue}M</span> Revenue Journeys</span>
            <span className="hidden md:inline">•</span>
            <span>AI + Human Execution</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Exit-Ready Systems</span>
          </div>
        </div>
      </section>

      {/* 2. Three Pillars */}
      <section className="py-32 px-6 bg-[#0a0a08]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#161614] border border-[#252420] flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-amber" />
              </div>
              <h3 className="font-heading text-3xl font-bold mb-4">Systems</h3>
              <p className="font-sans text-[#8A8478] leading-relaxed">
                We build the foundation. Without structure, there's no scale.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#161614] border border-[#252420] flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-amber" />
              </div>
              <h3 className="font-heading text-3xl font-bold mb-4">Scale</h3>
              <p className="font-sans text-[#8A8478] leading-relaxed">
                We activate growth with AI-powered execution and data-driven targeting.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#161614] border border-[#252420] flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-amber" />
              </div>
              <h3 className="font-heading text-3xl font-bold mb-4">Exit</h3>
              <p className="font-sans text-[#8A8478] leading-relaxed">
                Everything is engineered for optionality — so you can sell, raise, or step away on your terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className="py-32 px-6 bg-[#111110]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Four Doors. One Direction.</h2>
            <p className="font-sans text-xl text-[#8A8478] max-w-2xl">
              Every engagement starts with a conversation about where you are and where you want to go.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "AI SEO", desc: "Human strategy. AI execution. SearchAtlas-powered." },
              { title: "Media Buying", desc: "Paid media across Meta, Google, YouTube, TikTok." },
              { title: "Branding & Messaging", desc: "Voice, identity, and content that converts." },
              { title: "Web & App Development", desc: "Sites and systems built to scale." }
            ].map((s, i) => (
              <div key={i} className="bg-[#161614] border border-[#252420] border-l-2 border-l-amber p-8 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300">
                <h3 className="font-heading text-2xl font-bold mb-3">{s.title}</h3>
                <p className="font-sans text-[#8A8478] mb-6">{s.desc}</p>
                <Link href="/services" className="font-sans text-amber font-bold text-sm inline-flex items-center gap-2 hover:text-amber-light transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Whiskey River */}
      <section className="py-32 px-6 border-y border-[#252420]">
        <div className="container mx-auto max-w-6xl">
          <div className="border-l-4 border-amber pl-8 md:pl-12 mb-20 max-w-4xl">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#F5F0E8] leading-snug">
              "We don't do random acts of marketing. We build repeatable systems — and then we manage them so you don't have to."
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ul className="space-y-6">
              {[
                "AI + Human hybrid execution model",
                "Exit-focused strategy from day one",
                "MEC-driven reporting (Marketing Efficiency Coefficient)",
                "Month-to-month after initial 90-day build"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-amber/10 text-amber flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3 h-3" />
                  </span>
                  <span className="font-sans text-lg text-[#F5F0E8]/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#161614] border border-[#252420] rounded-sm p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-amber/10 transition-colors duration-500"></div>
              <div className="relative z-10">
                <Layers className="w-8 h-8 text-amber mb-6" />
                <h3 className="font-heading text-3xl font-bold mb-4">WhiskeyNeat.ai</h3>
                <p className="font-sans text-[#8A8478] mb-8 leading-relaxed">
                  Your marketing data. Your intelligence layer. Powered by WhiskeyNeat.ai. Real-time visibility into the metrics that actually drive business value.
                </p>
                <Link href="/intelligence" className="font-sans text-[#0a0a08] bg-amber hover:bg-amber-light px-6 py-3 rounded-sm font-bold inline-flex items-center gap-2 transition-colors">
                  Learn About Our Intelligence Platform <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Social Proof */}
      <section className="py-32 px-6 bg-[#0a0a08]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "They turned our brand into a sales machine... a record-setting Black Friday.",
                author: "Aftermarket Truck Parts CEO"
              },
              {
                quote: "They didn't just build us a website — they built the foundation for a future sale.",
                author: "Energy Supply Co CEO"
              },
              {
                quote: "We tripled our lead flow in 90 days, and it's built to run without us.",
                author: "SaaS CEO"
              }
            ].map((t, i) => (
              <div key={i} className="bg-[#111110] border border-[#252420] p-8 flex flex-col justify-between">
                <p className="font-heading text-xl italic text-[#F5F0E8]/90 mb-8 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-amber"></div>
                  <span className="font-sans text-xs uppercase tracking-widest text-[#8A8478]">{t.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#111110] to-[#0a0a08] text-center border-t border-[#252420]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Ready to Build a Business Worth Scaling — and Worth Buying?
          </h2>
          <p className="font-sans text-xl text-[#8A8478] mb-10 leading-relaxed">
            Start with a conversation. We'll tell you exactly where you are and what it would take to get where you want to go.
          </p>
          <Link href="/apply" className="inline-flex justify-center items-center px-10 py-5 bg-amber hover:bg-amber-light text-[#0a0a08] font-sans font-bold rounded-sm transition-colors text-lg">
            Apply to Work With Us <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}