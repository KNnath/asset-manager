import { Link } from "wouter";

export default function Services() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <p className="font-sans text-xs font-normal tracking-[0.14em] uppercase mb-2" style={{ color: 'var(--gold)' }}>
          Whiskey River Media
        </p>
        <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
          Pricing & Services
        </h1>
        <p className="font-sans text-base max-w-3xl mb-16" style={{ color: 'var(--text-secondary)', lineHeight: '1.75' }}>
          Every engagement is built around one objective: growing your business and making it worth more. Whether you need a single service or a full-stack partner, we offer transparent pricing with no hidden fees and no bloated retainers.
        </p>

        {/* AI SEO Section */}
        <section className="mb-20">
          <h2 className="font-heading font-bold text-3xl mb-2" style={{ color: 'var(--text-primary)' }}>
            AI SEO Concierge
          </h2>
          <p className="font-sans text-xs font-medium tracking-[0.1em] uppercase mb-6" style={{ color: 'var(--gold)' }}>
            Powered by SearchAtlas + Human QA
          </p>
          <p className="font-sans text-sm mb-8 max-w-3xl" style={{ color: 'var(--text-secondary)', lineHeight: '1.75' }}>
            Search visibility that compounds in value over time. We combine AI-powered research and content production with senior strategist oversight — so you rank, convert, and build an organic asset that increases your company's worth at exit.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              {
                tier: "Tier 01",
                name: "AI SEO Starter",
                setup: "$2,500 audit (credited) → $6,500 setup",
                monthly: "from $2,000/mo",
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
                name: "AI SEO Growth",
                setup: "$12,000 setup",
                monthly: "from $3,500/mo",
                features: [
                  "Everything in Starter",
                  "2–3 on-page optimizations per month",
                  "2 AI + expert SEO blog posts/month",
                  "Local SEO setup + optimization (Google Business, citations)",
                  "Quarterly strategy call with U.S. SEO expert",
                  "10 backlinks/month (DA 30–50, niche relevant)"
                ]
              },
              {
                tier: "Tier 03",
                name: "AI SEO Concierge",
                setup: "$18,000–$25,000 setup",
                monthly: "from $5,500/mo",
                featured: true,
                features: [
                  "Everything in Growth",
                  "4–6 blog posts/month",
                  "Competitor keyword + backlink tracking",
                  "Monthly SEO strategy call with U.S. expert",
                  "Technical SEO audit + implementation",
                  "LLM visibility strategy (ChatGPT, Perplexity, Gemini)",
                  "Exit-ready SEO reporting (MEC dashboard)"
                ]
              }
            ].map((tier, i) => (
              <div
                key={i}
                className="p-7 relative"
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
                <p className="font-sans text-xs font-medium tracking-[0.1em] uppercase mb-3" style={{ color: 'var(--text-secondary)' }}>
                  {tier.tier}
                </p>
                <h3 className="font-heading font-bold text-xl mb-5" style={{ color: 'var(--text-primary)' }}>
                  {tier.name}
                </h3>
                <div className="mb-5 pb-5" style={{ borderBottom: '0.5px solid var(--border-subtle)' }}>
                  <p className="font-sans text-xs tracking-[0.1em] uppercase mb-1" style={{ color: 'var(--text-secondary)' }}>Setup</p>
                  <p className="font-sans text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>{tier.setup}</p>
                  <p className="font-sans text-xs tracking-[0.1em] uppercase mb-1" style={{ color: 'var(--text-secondary)' }}>Monthly</p>
                  <p className="font-heading font-bold text-xl" style={{ color: 'var(--gold)' }}>{tier.monthly}</p>
                </div>
                <ul className="space-y-2">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex gap-2 font-sans text-xs" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      <span style={{ color: 'var(--gold)' }}>—</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mb-6 pl-6" style={{ borderLeft: '2px solid var(--gold)' }}>
            <p className="font-heading italic text-base" style={{ color: 'var(--text-secondary)', lineHeight: '1.65' }}>
              "Every AI SEO engagement starts with a $2,500 MEC Audit + AI Opportunity Map. This fee is credited toward setup if you sign within 14 days."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-7" style={{ border: '0.5px solid var(--border-subtle)', borderRadius: '8px', backgroundColor: 'var(--bg-card)' }}>
              <p className="font-sans text-xs font-medium tracking-[0.1em] uppercase mb-3" style={{ color: 'var(--text-secondary)' }}>
                Tier 04 — Scale
              </p>
              <h3 className="font-heading font-bold text-xl mb-5" style={{ color: 'var(--text-primary)' }}>
                Enterprise SEO
              </h3>
              <div className="mb-5 pb-5" style={{ borderBottom: '0.5px solid var(--border-subtle)' }}>
                <p className="font-sans text-xs tracking-[0.1em] uppercase mb-1" style={{ color: 'var(--text-secondary)' }}>Setup</p>
                <p className="font-sans text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>Custom scoped</p>
                <p className="font-sans text-xs tracking-[0.1em] uppercase mb-1" style={{ color: 'var(--text-secondary)' }}>Monthly</p>
                <p className="font-heading font-bold text-xl" style={{ color: 'var(--gold)' }}>from $4,997/mo</p>
              </div>
              <ul className="space-y-2">
                {[
                  "Everything in Concierge",
                  "8–12 blog posts/month",
                  "Weekly SEO strategy call with U.S. expert",
                  "Full content calendar + editorial direction",
                  "Dedicated SEO account lead"
                ].map((feature, j) => (
                  <li key={j} className="flex gap-2 font-sans text-xs" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    <span style={{ color: 'var(--gold)' }}>—</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="h-px mb-16" style={{ background: 'var(--border-subtle)' }}></div>

        {/* Full-Stack Partnership Tiers */}
        <section className="mb-20">
          <h2 className="font-heading font-bold text-3xl mb-2" style={{ color: 'var(--text-primary)' }}>
            Full-Stack Partnership Tiers
          </h2>
          <p className="font-sans text-xs font-medium tracking-[0.1em] uppercase mb-6" style={{ color: 'var(--gold)' }}>
            Paid Media + Strategy + SEO — Pick Your Depth
          </p>
          <p className="font-sans text-sm mb-8 max-w-3xl" style={{ color: 'var(--text-secondary)', lineHeight: '1.75' }}>
            For founders who want more than media buying — a strategic growth partner who leads the entire revenue architecture. Three tiers based on how much you want WRM to own vs. how much stays internal. All tiers use a base retainer + % of total ad spend model.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                tier: "Tier I",
                name: "Paid Media Execution",
                tagline: "For companies with strong internal strategy already in place. WRM operates strictly as your paid media buying and optimization team.",
                price: "$5,500/mo + 10% of ad spend",
                scope: [
                  "META + Google campaign buildout and management",
                  "Audience targeting and segmentation",
                  "Budget allocation and scaling",
                  "Ongoing optimization + monthly reporting"
                ]
              },
              {
                tier: "Tier II",
                name: "Strategic Direction + Media",
                tagline: "Adds structured strategic guidance to paid media execution. WRM works alongside your internal team to strengthen alignment, measurement, and optimization.",
                price: "$7,500/mo + 8% of ad spend",
                featured: true,
                scope: [
                  "Everything in Tier I",
                  "Monthly strategic planning session",
                  "Campaign roadmap + structured testing framework",
                  "Audience architecture development",
                  "Offer positioning guidance",
                  "Funnel performance review + retargeting buildout",
                  "KPI alignment + attribution optimization"
                ]
              },
              {
                tier: "Tier III",
                name: "Full-Funnel Growth Partner",
                tagline: "End-to-end revenue architecture. Marketing transitions from a channel to a system. WRM leads paid acquisition, SEO, CRO, and long-term authority building.",
                price: "$10,000/mo + 6% of ad spend",
                scope: [
                  "Everything in Tier II",
                  "End-to-end campaign architecture + funnel design",
                  "Conversion rate optimization strategy",
                  "Advanced retargeting ecosystems",
                  "High-intent Google search dominance",
                  "Competitor capture initiatives",
                  "Full SEO / GEO implementation",
                  "Monthly SEO reporting + ongoing optimization"
                ]
              }
            ].map((tier, i) => (
              <div
                key={i}
                className="p-7 relative"
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
                    Recommended
                  </div>
                )}
                <p className="font-sans text-xs font-medium tracking-[0.1em] uppercase mb-2" style={{ color: 'var(--gold)' }}>
                  {tier.tier}
                </p>
                <h3 className="font-heading font-bold text-xl mb-2" style={{ color: 'var(--text-primary)' }}>
                  {tier.name}
                </h3>
                <p className="font-sans text-xs mb-5" style={{ color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                  {tier.tagline}
                </p>
                <div className="py-4 mb-4" style={{ borderTop: '0.5px solid var(--border-subtle)', borderBottom: '0.5px solid var(--border-subtle)' }}>
                  <p className="font-heading font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{tier.price}</p>
                  <p className="font-sans text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>Ad spend billed directly to client</p>
                </div>
                <ul className="space-y-2">
                  {tier.scope.map((item, j) => (
                    <li key={j} className="flex gap-2 font-sans text-xs" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      <span style={{ color: 'var(--gold)' }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px mb-16" style={{ background: 'var(--border-subtle)' }}></div>

        {/* Branding + Web */}
        <section className="mb-20">
          <h2 className="font-heading font-bold text-3xl mb-2" style={{ color: 'var(--text-primary)' }}>
            Branding, Design + Messaging
          </h2>
          <p className="font-sans text-xs font-medium tracking-[0.1em] uppercase mb-8" style={{ color: 'var(--gold)' }}>
            Brand Identity · Visual Design · Voice & Positioning
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-7" style={{ border: '0.5px solid var(--border-subtle)', borderRadius: '8px', backgroundColor: 'var(--bg-card)' }}>
              <h3 className="font-heading font-bold text-xl mb-2" style={{ color: 'var(--text-primary)' }}>
                Branding + Design + Messaging
              </h3>
              <p className="font-sans text-sm mb-5" style={{ color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                Your brand is your most transferable asset. We build it to last — and to sell. From visual identity to voice and positioning, everything we create is engineered to convert and to increase your company's value at exit.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Brand Identity + Logo System",
                  "Visual Design + Style Guide",
                  "Voice & Tone Development",
                  "Messaging Architecture + Positioning",
                  "Content Strategy",
                  "Creative Direction"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 font-sans text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--gold)' }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-xs tracking-[0.1em] uppercase mb-3" style={{ color: 'var(--text-secondary)' }}>
                Custom — Starts with a discovery call
              </p>
              <Link href="/apply" className="font-sans text-sm font-medium" style={{ color: 'var(--gold)' }}>
                Start a Branding Conversation →
              </Link>
            </div>

            <div className="p-7" style={{ border: '0.5px solid var(--border-subtle)', borderRadius: '8px', backgroundColor: 'var(--bg-card)' }}>
              <h3 className="font-heading font-bold text-xl mb-2" style={{ color: 'var(--text-primary)' }}>
                Web & App Development
              </h3>
              <p className="font-sans text-sm mb-5" style={{ color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                We build sites and systems that convert — and that become intellectual property when you exit. Clean architecture, conversion-optimized, built to scale whether you have 100 visitors or 100,000.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Website Design & Development",
                  "Landing Pages",
                  "App Development",
                  "CMS Setup + Integration",
                  "Funnel Architecture",
                  "Conversion Rate Optimization"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 font-sans text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--gold)' }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-xs tracking-[0.1em] uppercase mb-3" style={{ color: 'var(--text-secondary)' }}>
                Project-based — Scoped after discovery
              </p>
              <Link href="/apply" className="font-sans text-sm font-medium" style={{ color: 'var(--gold)' }}>
                Talk Development →
              </Link>
            </div>
          </div>

          <div className="pl-6" style={{ borderLeft: '2px solid var(--gold)' }}>
            <p className="font-heading italic text-base" style={{ color: 'var(--text-secondary)', lineHeight: '1.65' }}>
              "Creative production, landing pages, advanced funnel development, and custom design work outside of a package are billed at $150 per deliverable or custom scoped rate. All work is pre-scoped and approved."
            </p>
          </div>
        </section>

        <div className="h-px mb-16" style={{ background: 'var(--border-subtle)' }}></div>

        {/* Media Buying Standalone */}
        <section className="mb-20">
          <h2 className="font-heading font-bold text-3xl mb-2" style={{ color: 'var(--text-primary)' }}>
            Media Buying
          </h2>
          <p className="font-sans text-xs font-medium tracking-[0.1em] uppercase mb-6" style={{ color: 'var(--gold)' }}>
            Standalone Paid Media Management
          </p>
          <p className="font-sans text-sm mb-8 max-w-3xl" style={{ color: 'var(--text-secondary)', lineHeight: '1.75' }}>
            Paid media management across Meta, Google, YouTube, TikTok, Pinterest, and Bing. Management fees are always separate from ad spend — your budget goes entirely toward media.
          </p>

          <div className="grid md:grid-cols-3 gap-0 mb-8 overflow-hidden" style={{ border: '0.5px solid var(--border-subtle)', borderRadius: '8px' }}>
            {[
              { pct: "15%", range: "$5K–$15K Monthly Spend" },
              { pct: "12%", range: "$15K–$50K Monthly Spend" },
              { pct: "10%", range: "$50K+ Monthly Spend" }
            ].map((tier, i) => (
              <div
                key={i}
                className="p-6"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderLeft: i > 0 ? '0.5px solid var(--border-subtle)' : 'none'
                }}
              >
                <p className="font-heading font-bold text-4xl mb-2" style={{ color: 'var(--gold)', lineHeight: '1' }}>{tier.pct}</p>
                <p className="font-sans text-xs" style={{ color: 'var(--text-secondary)' }}>{tier.range}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-4" style={{ borderTop: '0.5px solid var(--border-subtle)' }}>
            {[
              "+$1,000/month per additional ad platform beyond the first two",
              "Media management fees are always separate from retainer fees",
              "Ad spend billed directly to client — no markup on spend"
            ].map((note, i) => (
              <div key={i} className="flex gap-3 font-sans text-xs" style={{ color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--gold)' }}>✓</span>
                <span>{note}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px mb-16" style={{ background: 'var(--border-subtle)' }}></div>

        {/* À La Carte */}
        <section className="mb-20">
          <h2 className="font-heading font-bold text-3xl mb-2" style={{ color: 'var(--text-primary)' }}>
            À La Carte Services
          </h2>
          <p className="font-sans text-xs font-medium tracking-[0.1em] uppercase mb-8" style={{ color: 'var(--gold)' }}>
            Individual services, scoped independently
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { service: "SEO / GEO Only", price: "$1,000–$2,500/mo", note: "+ % of ad spend if applicable" },
              { service: "Google Ads Only", price: "$1,500/mo", note: "+ % of ad spend" },
              { service: "META Ads Only", price: "$3,500/mo", note: "+ % of ad spend" },
              { service: "TikTok Ads Only", price: "$3,500/mo", note: "+ % of ad spend" },
              { service: "LinkedIn Ads Only", price: "$1,500/mo", note: "+ % of ad spend" },
              { service: "Funnel Audit", price: "$1,500", note: "One-time" },
              { service: "MEC Audit + AI Opportunity Map", price: "$2,500", note: "Credited toward setup if signed within 14 days" },
              { service: "Attribution Audit", price: "Scoped", note: "Quoted after discovery" },
              { service: "Campaign Strategy Intensive", price: "Scoped", note: "Quoted after discovery" },
              { service: "CRO Engagement", price: "Scoped", note: "Quoted after discovery" }
            ].map((item, i) => (
              <div key={i} className="p-4" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '6px' }}>
                <p className="font-sans text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>{item.service}</p>
                <p className="font-sans text-xs font-medium mb-1" style={{ color: 'var(--gold)' }}>{item.price}</p>
                <p className="font-sans text-xs" style={{ color: 'var(--text-secondary)' }}>{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px mb-16" style={{ background: 'var(--border-subtle)' }}></div>

        {/* Engagement Structure */}
        <section className="mb-12">
          <h2 className="font-heading font-bold text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>
            Engagement Structure
          </h2>
          <p className="font-sans text-sm mb-8 max-w-3xl" style={{ color: 'var(--text-secondary)', lineHeight: '1.75' }}>
            We keep it simple. No long-term lock-ins after the build. No surprises on the invoice.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Initial Commitment", value: "90-day build engagement" },
              { label: "After 90 Days", value: "Month-to-month" },
              { label: "Billing Cycle", value: "Monthly" },
              { label: "Strategy Reviews", value: "Every 30 days" },
              { label: "Ad Spend", value: "Billed directly to client" },
              { label: "Minimum Revenue", value: "$1M+ annually" }
            ].map((term, i) => (
              <div key={i} className="p-4" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '6px' }}>
                <p className="font-sans text-xs tracking-[0.1em] uppercase mb-2" style={{ color: 'var(--text-secondary)' }}>
                  {term.label}
                </p>
                <p className="font-sans text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  {term.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Block */}
        <div className="p-12 text-center" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '8px' }}>
          <p className="font-sans text-xs font-normal tracking-[0.14em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
            Not sure which tier is right for you?
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>
            Start with a conversation.
          </h2>
          <p className="font-sans text-base max-w-lg mx-auto mb-8" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            We'll audit where you are, show you the gaps, and recommend the right engagement — honestly. No overselling. No pressure.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center font-sans font-bold px-8 py-4 rounded transition-all hover:scale-[1.02]"
            style={{
              backgroundColor: 'var(--gold-btn)',
              color: 'var(--gold-btn-text)',
              fontSize: '15px'
            }}
          >
            Apply to Work With Us
          </Link>
        </div>

      </div>
    </div>
  );
}
