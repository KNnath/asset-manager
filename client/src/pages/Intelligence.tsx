import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Activity, BarChart3, Database } from "lucide-react";
import dashboardMockup from "@/assets/images/dashboard-mockup.png";
import { Faq } from "@/components/Faq";

const intelligenceFaqs = [
  {
    q: "What is WhiskeyNeat.ai?",
    a: "WhiskeyNeat.ai is Whiskey River Media's proprietary marketing intelligence platform. It's a white-labeled client dashboard that unifies your paid media data, SEO performance, and CRM signals into a single real-time view — built around the MEC (Marketing Efficiency Coefficient) framework. It is not a standalone SaaS product. It's the intelligence layer provided exclusively to WRM clients."
  },
  {
    q: "Who has access to WhiskeyNeat.ai?",
    a: "WhiskeyNeat.ai is exclusively available to active Whiskey River Media clients. It is not available for purchase as a standalone tool. Access is provisioned as part of your onboarding and is included in all Full-Stack Partnership and SEO tiers."
  },
  {
    q: "What data does WhiskeyNeat.ai track?",
    a: "WhiskeyNeat.ai connects via API to your marketing stack: Meta Ads, Google Ads, SearchAtlas (for SEO), and your CRM. It surfaces MEC scores, keyword rankings, organic traffic trends, paid media ROAS, and funnel performance — all in one place, updated in real time."
  },
  {
    q: "What is the MEC (Marketing Efficiency Coefficient)?",
    a: "The MEC is our proprietary performance framework — a single score that correlates your marketing activity to revenue impact and enterprise value. It replaces vanity metrics (impressions, clicks, follower counts) with data that actually matters for your P&L and your eventual exit. Every WhiskeyNeat.ai report is built around your MEC."
  },
  {
    q: "Can I share WhiskeyNeat.ai access with my investors or acquirers?",
    a: "Yes. One of the core design principles of WhiskeyNeat.ai is exit-readiness. The dashboard is structured so your marketing performance is documented, reportable, and presentable to investors, PE firms, or acquirers at any time. Many of our clients use it as a live marketing data room during due diligence."
  },
  {
    q: "Does WhiskeyNeat.ai integrate with my existing tools?",
    a: "WhiskeyNeat.ai integrates directly with Meta Ads, Google Ads, SearchAtlas, and CRM platforms via API. If you use a tool that isn't yet natively supported, our team can typically build a custom integration as part of your onboarding."
  }
];

export default function Intelligence() {
  return (
    <div className="min-h-screen pt-24 bg-noise pb-32">
      
      {/* Hero */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <p className="font-sans font-bold uppercase tracking-[0.12em] text-amber text-xs mb-8">
            Proprietary Technology
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Marketing <br/>Intelligence Layer.
          </h1>
          <p className="font-sans text-xl text-[#8A8478] max-w-2xl mx-auto mb-10 leading-relaxed">
            WhiskeyNeat.ai gives you a real-time view of your marketing performance — built on the data that actually matters for growth and exit value.
          </p>
          <img src={dashboardMockup} alt="WhiskeyNeat.ai Interface" className="w-full max-w-5xl mx-auto rounded-sm border border-[#252420] shadow-[0_20px_50px_rgba(0,0,0,0.5)] mt-16" />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t border-[#252420]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#111110] border border-[#252420] p-10">
              <Activity className="w-8 h-8 text-amber mb-6" />
              <h3 className="font-heading text-2xl font-bold mb-4">Live Performance</h3>
              <p className="font-sans text-[#8A8478] leading-relaxed">
                A consolidated dashboard pulling real-time data from Meta, Google, LinkedIn, and organic channels. Stop waiting until the end of the month to see how your money is performing.
              </p>
            </div>
            
            <div className="bg-[#111110] border border-[#252420] p-10 border-t-4 border-t-amber relative">
              <div className="absolute top-0 right-0 bg-amber text-[#0a0a08] text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Core KPI</div>
              <BarChart3 className="w-8 h-8 text-amber mb-6" />
              <h3 className="font-heading text-2xl font-bold mb-4">MEC Score Tracking</h3>
              <p className="font-sans text-[#8A8478] leading-relaxed">
                We track the Marketing Efficiency Coefficient — the only metric that directly correlates your marketing spend to tangible enterprise value and bottom-line health.
              </p>
            </div>

            <div className="bg-[#111110] border border-[#252420] p-10">
              <Database className="w-8 h-8 text-amber mb-6" />
              <h3 className="font-heading text-2xl font-bold mb-4">AI-Generated Insights</h3>
              <p className="font-sans text-[#8A8478] leading-relaxed">
                Raw data is useless without interpretation. Our engine analyzes the numbers and generates plain-English insights, anomalies, and strategic recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">Seamless Integration</h2>
          <p className="font-sans text-lg text-[#8A8478] mb-12">
            WhiskeyNeat.ai connects directly via API to your existing tech stack: SearchAtlas, Meta Ads, Google Ads, and your CRM to provide a single source of truth.
          </p>
          
          <div className="bg-[#0a0a08] border border-amber/30 p-12">
            <h3 className="font-heading text-3xl font-bold mb-4">Exclusive Access</h3>
            <p className="font-sans text-[#8A8478] mb-8">
              WhiskeyNeat.ai is not a standalone SaaS product. It is the intelligence layer provided exclusively to Whiskey River Media clients.
            </p>
            <Link href="/apply" className="inline-flex justify-center items-center px-8 py-4 bg-amber hover:bg-amber-light text-[#0a0a08] font-sans font-bold rounded-sm transition-colors text-base gap-2">
              Apply to Get Access <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Faq
        items={intelligenceFaqs}
        subheading="Platform Questions"
        heading="Everything About WhiskeyNeat.ai."
      />

    </div>
  );
}