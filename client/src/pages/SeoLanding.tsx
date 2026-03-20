import { Link } from "wouter";
import { BrandLogos } from "@/components/BrandLogos";
import { Faq } from "@/components/Faq";
import { Search, BarChart3, FileText, Globe, Zap, Shield, TrendingUp, Check } from "lucide-react";

const seoFaqs = [
  {
    q: "What is WRM AI SEO + Human?",
    a: "WRM AI SEO + Human is Whiskey River Media's hybrid search optimization service — combining AI-powered tools (SearchAtlas) with senior U.S. SEO experts. AI handles the volume and speed: keyword research, content production, technical scanning. Humans handle the strategy, quality control, and alignment with your business goals and exit timeline."
  },
  {
    q: "How is AI SEO different from traditional SEO?",
    a: "Traditional SEO is slow, expensive, and often disconnected from business outcomes. AI SEO uses machine learning tools to map entire keyword universes, identify gaps, generate content, and track performance in hours instead of weeks. Our human layer ensures the AI output is accurate, on-brand, and strategically sound — giving you the best of both worlds without the limitations of either."
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "Most clients begin seeing measurable ranking movement within 60 to 90 days. Significant organic traffic growth typically develops over months 3 through 6, with compounding returns as domain authority builds. SEO is not a short-term tactic — it's infrastructure. That's why we tie it to your exit timeline, not just this quarter's traffic report."
  },
  {
    q: "What is SearchAtlas and why do you use it?",
    a: "SearchAtlas is an AI-powered SEO platform that provides keyword research, content briefs, backlink analysis, competitor tracking, and on-page optimization — all in one system. We use it as the backbone of our AI SEO workflow because it dramatically accelerates what would otherwise take weeks of manual research, and it integrates directly with our client reporting dashboard."
  },
  {
    q: "What is the Marketing Efficiency Coefficient (MEC)?",
    a: "MEC is Whiskey River Media's proprietary reporting framework. Instead of reporting on vanity metrics like impressions or domain rating in isolation, we correlate your SEO performance to revenue impact and business value. Every monthly report is built around MEC so you always know what your SEO investment is actually doing for your business — and your potential valuation."
  },
  {
    q: "What is LLM visibility strategy and which plans include it?",
    a: "LLM visibility strategy is the process of optimizing your brand's presence in AI-generated answers — so when someone asks ChatGPT, Perplexity, or Google Gemini a question in your niche, your brand appears. This is the next frontier of search, and we include it in our Concierge+ and Full-Stack Partnership tiers."
  },
  {
    q: "Do I need to sign a long-term SEO contract?",
    a: "No. Month 1 is a setup month — strategy, keyword map, dashboard configuration, and technical audit. After that, we operate month-to-month. We believe the compounding results should keep you here, not a 12-month lock-in clause."
  },
  {
    q: "What happens during Month 1 setup?",
    a: "Month 1 is foundational. We conduct a full technical SEO audit, build your keyword map, configure your white-labeled SEO dashboard, identify your top 3 competitors, and develop your content and backlink strategy. By the end of Month 1, you have a complete SEO roadmap and the infrastructure to execute it."
  },
  {
    q: "What size business is WRM AI SEO best for?",
    a: "Our SEO service works best for businesses doing $1M or more in annual revenue who want organic search to become a real acquisition channel — not just a checkbox. Whether you're an e-commerce brand, B2B service company, or local business with national ambitions, we have a tier built for your current stage and your next one."
  }
];

const tiers = [
  {
    tier: "Tier 01",
    name: "Essential SEO",
    subtitle: "Starter Visibility",
    monthly: "$797/month",
    features: [
      "AI SEO dashboard (white-labeled, client login)",
      "25–50 keywords tracked",
      "1 on-page optimization per month",
      "Monthly automated SEO report",
      "5 backlinks/month (DA 20–40, niche relevant)"
    ]
  },
  {
    tier: "Tier 02",
    name: "Growth SEO",
    subtitle: "Rank & Expand",
    monthly: "$1,497/month",
    features: [
      "Everything in Essential",
      "2–3 on-page optimizations per month",
      "2 AI + expert SEO blog posts/month",
      "Local SEO setup + optimization (Google Business, citations)",
      "Quarterly strategy call with U.S. SEO expert",
      "10 backlinks/month (DA 30–50, niche relevant)"
    ]
  },
  {
    tier: "Tier 03",
    name: "Authority SEO",
    subtitle: "Dominate Your Niche",
    monthly: "$2,497/month",
    featured: true,
    features: [
      "Everything in Growth",
      "4–6 blog posts/month",
      "Competitor keyword + backlink tracking",
      "Monthly SEO strategy call with U.S. expert"
    ]
  },
  {
    tier: "Tier 04",
    name: "Enterprise SEO",
    subtitle: "Full Market Domination",
    monthly: "$4,997/month",
    features: [
      "Everything in Growth",
      "8–12 blog posts/month",
      "Competitor keyword + backlink tracking",
      "Weekly SEO strategy call with U.S. expert"
    ]
  }
];

export default function SeoLanding() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-base)' }}>

      {/* HERO */}
      <section className="min-h-[80vh] flex items-center pt-28 pb-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 20%, rgba(196,148,31,0.08) 0%, transparent 65%)' }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="font-sans text-xs tracking-[0.18em] uppercase mb-6" style={{ color: 'var(--gold)' }}>
            WRM AI SEO + Human
          </p>
          <h1 className="font-heading font-bold mb-8" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: 'var(--text-primary)', lineHeight: '1.05' }}>
            Search That Compounds.<br />
            <span className="italic" style={{ color: 'var(--gold)' }}>Rankings That Last.</span>
          </h1>
          <p className="font-sans text-base md:text-lg max-w-2xl mb-10" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            Most SEO agencies sell you traffic. We build search infrastructure that increases your company's enterprise value — combining AI-powered execution with senior human oversight, powered by SearchAtlas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center font-sans font-bold text-sm px-9 py-4 rounded transition-all hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--gold-btn)', color: 'var(--gold-btn-text)' }}
            >
              Start With a Free SEO Audit →
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center font-sans font-medium text-sm px-9 py-4 rounded transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.18)', color: 'var(--text-primary)' }}
            >
              View Pricing
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-10 pt-8" style={{ borderTop: '0.5px solid var(--border-subtle)' }}>
            {[
              { value: "AI + Human", label: "Hybrid Execution" },
              { value: "SearchAtlas", label: "Powered By" },
              { value: "Month 1", label: "Is Your Setup" },
              { value: "MEC", label: "Exit-Ready Reporting" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-heading font-bold text-xl mb-1" style={{ color: 'var(--text-primary)' }}>{stat.value}</p>
                <p className="font-sans text-xs" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND LOGOS */}
      <BrandLogos
        subheading="Brands We've Scaled"
        heading="From independent operators to national brands — our search systems have moved the needle across dozens of industries."
        dark={true}
      />

      {/* HOW IT WORKS */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-xs tracking-[0.16em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
            The WRM Method
          </p>
          <h2 className="font-heading font-bold text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>
            AI Does the Heavy Lifting.<br />Humans Keep It Honest.
          </h2>
          <p className="font-sans text-sm max-w-2xl mb-16" style={{ color: 'var(--text-secondary)', lineHeight: '1.75' }}>
            We don't hand AI the wheel and walk away. Every AI-generated strategy, content piece, and optimization is reviewed and directed by a U.S.-based SEO expert who understands your market, your competition, and your exit timeline.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: <Search className="w-5 h-5" />,
                step: "01",
                title: "AI-Powered Research",
                desc: "SearchAtlas maps your full keyword universe — gaps, opportunities, and competitor weaknesses — faster and deeper than any manual process."
              },
              {
                icon: <FileText className="w-5 h-5" />,
                step: "02",
                title: "Human Strategy Layer",
                desc: "A U.S. SEO expert translates raw data into a prioritized roadmap aligned with your business goals and exit timeline."
              },
              {
                icon: <Zap className="w-5 h-5" />,
                step: "03",
                title: "AI Content at Scale",
                desc: "Blog posts, on-page optimizations, and local SEO work are produced at AI speed — then reviewed and refined by human editors."
              },
              {
                icon: <Globe className="w-5 h-5" />,
                step: "04",
                title: "Authority Building",
                desc: "Niche-relevant backlinks from high-DA domains compound your domain authority month over month — no black-hat shortcuts."
              },
              {
                icon: <BarChart3 className="w-5 h-5" />,
                step: "05",
                title: "MEC Dashboard",
                desc: "Your white-labeled client portal tracks rankings, traffic, backlinks, and MEC (Marketing Efficiency Coefficient) in real time."
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                step: "06",
                title: "Exit-Ready SEO",
                desc: "Every deliverable is documented and organized so your organic channel becomes a valuation asset when it's time to sell or raise."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-6"
                style={{ border: '0.5px solid var(--border-subtle)', borderRadius: '8px', backgroundColor: 'var(--bg-card)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(196,148,31,0.1)', color: 'var(--gold)' }}>
                    {item.icon}
                  </div>
                  <span className="font-sans text-xs font-medium tracking-[0.1em] uppercase" style={{ color: 'var(--text-secondary)' }}>
                    Step {item.step}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--bg-section)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-sans text-xs tracking-[0.16em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
                Who This Is For
              </p>
              <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Built for Founders Who Think in Years, Not Months.
              </h2>
              <ul className="space-y-4">
                {[
                  "You're doing $1M–$10M/year and organic traffic is an afterthought",
                  "You've tried SEO agencies and gotten nothing but reports",
                  "You want search to be a real channel — not a box you check",
                  "You're building toward an exit and know SEO is a valuation lever",
                  "You need AI speed with human judgment — not one or the other"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 font-sans text-sm" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--gold)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="p-6" style={{ border: '0.5px solid var(--border-subtle)', borderRadius: '8px', backgroundColor: 'var(--bg-card)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5" style={{ color: 'var(--gold)' }} />
                  <h3 className="font-heading font-bold text-lg" style={{ color: 'var(--text-primary)' }}>LLM Visibility Strategy</h3>
                </div>
                <p className="font-sans text-xs" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Concierge+ clients get an LLM visibility strategy — so your brand appears when buyers ask ChatGPT, Perplexity, and Gemini. The next frontier of search is already here.
                </p>
              </div>
              <div className="p-6" style={{ border: '0.5px solid var(--border-subtle)', borderRadius: '8px', backgroundColor: 'var(--bg-card)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="w-5 h-5" style={{ color: 'var(--gold)' }} />
                  <h3 className="font-heading font-bold text-lg" style={{ color: 'var(--text-primary)' }}>What is MEC?</h3>
                </div>
                <p className="font-sans text-xs" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  The Marketing Efficiency Coefficient is our proprietary reporting framework — replacing vanity metrics with revenue-correlated performance data that tells the real story of your SEO ROI and builds a documentary trail for your eventual exit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-xs tracking-[0.16em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
            Transparent Pricing
          </p>
          <h2 className="font-heading font-bold text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>
            Pick Your Tier. Start Building.
          </h2>
          <p className="font-sans text-sm max-w-2xl mb-12" style={{ color: 'var(--text-secondary)', lineHeight: '1.75' }}>
            No audits required. No long-term lock-ins after your setup month. Every plan includes a white-labeled SEO dashboard and direct access to your strategist.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className="p-7 relative flex flex-col"
                style={{
                  border: tier.featured ? '1.5px solid var(--gold)' : '0.5px solid var(--border-subtle)',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-card)'
                }}
              >
                {tier.featured && (
                  <div
                    className="absolute -top-px right-5 px-3 py-1 text-xs font-medium tracking-[0.1em] uppercase"
                    style={{ backgroundColor: 'var(--gold)', color: '#fff', borderRadius: '0 0 4px 4px' }}
                  >
                    Most Popular
                  </div>
                )}
                <p className="font-sans text-xs font-medium tracking-[0.1em] uppercase mb-2" style={{ color: 'var(--text-secondary)' }}>
                  {tier.tier}
                </p>
                <h3 className="font-heading font-bold text-xl mb-1" style={{ color: 'var(--text-primary)' }}>
                  {tier.name}
                </h3>
                <p className="font-sans text-xs italic mb-5" style={{ color: 'var(--text-secondary)' }}>
                  {tier.subtitle}
                </p>
                <div className="mb-5 pb-5" style={{ borderBottom: '0.5px solid var(--border-subtle)' }}>
                  <p className="font-heading font-bold text-2xl" style={{ color: 'var(--gold)' }}>{tier.monthly}</p>
                  <p className="font-sans text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>Month 1 is Setup</p>
                </div>
                <ul className="space-y-2 flex-grow">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex gap-2 font-sans text-xs" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      <span style={{ color: 'var(--gold)' }}>—</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/apply"
                    className="inline-flex items-center justify-center w-full font-sans font-bold text-xs py-3 rounded transition-all hover:scale-[1.01]"
                    style={tier.featured
                      ? { backgroundColor: 'var(--gold-btn)', color: 'var(--gold-btn-text)' }
                      : { border: '0.5px solid var(--border-subtle)', color: 'var(--text-primary)' }
                    }
                  >
                    Get Started →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="pl-6" style={{ borderLeft: '2px solid var(--gold)' }}>
            <p className="font-heading italic text-base" style={{ color: 'var(--text-secondary)', lineHeight: '1.65' }}>
              "Every engagement starts with your Month 1 setup — strategy, dashboard, keyword map, and technical audit. No long-term contracts after that. Month-to-month because the results speak for themselves."
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--bg-section)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-xs tracking-[0.16em] uppercase mb-10" style={{ color: 'var(--gold)' }}>
            What Clients Say
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "We went from page 4 to page 1 for our highest-value keywords in 90 days. The organic leads have completely changed our pipeline.", author: "Industrial Supply CEO" },
              { quote: "They didn't just build SEO — they built a searchable brand. Our domain authority tripled and we're now ranking in cities we never targeted.", author: "DTC E-Commerce Founder" },
              { quote: "The MEC reporting finally gave us a number we could put in front of investors. SEO went from a cost center to a valuation driver.", author: "SaaS Founder" }
            ].map((t, i) => (
              <div key={i} className="p-8" style={{ border: '0.5px solid var(--border-subtle)', borderRadius: '4px' }}>
                <p className="font-heading italic text-lg leading-relaxed mb-6" style={{ color: 'var(--text-primary)' }}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-px" style={{ backgroundColor: 'var(--gold)' }} />
                  <span className="font-sans text-xs tracking-[0.12em] uppercase" style={{ color: 'var(--text-secondary)' }}>
                    {t.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq
        items={seoFaqs}
        subheading="SEO Questions Answered"
        heading="Everything You Need to Know About WRM AI SEO."
      />

      {/* FINAL CTA */}
      <section className="py-28 px-6 text-center" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-xs tracking-[0.16em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
            Ready to build organic that compounds?
          </p>
          <h2 className="font-heading font-bold mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', lineHeight: '1.1' }}>
            Start with a Free SEO Strategy Session.
          </h2>
          <p className="font-sans text-base mb-8" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            We'll map your keyword opportunity, audit your current rankings, and show you exactly which tier makes sense — no pressure, no pitch deck.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center font-sans font-bold px-11 py-5 rounded transition-all hover:scale-[1.02]"
            style={{ backgroundColor: 'var(--gold-btn)', color: 'var(--gold-btn-text)', fontSize: '16px' }}
          >
            Apply for a Free SEO Audit →
          </Link>
          <p className="font-sans text-xs mt-4" style={{ color: 'var(--text-tertiary)' }}>
            We work with businesses doing $1M+ annually. Responses within 48 hours.
          </p>
        </div>
      </section>

    </div>
  );
}
