import { Link } from "wouter";
import { Database, Target, BarChart3, Layers, Check } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Hero load animations
    const heroEls = document.querySelectorAll('[data-hero-anim]');
    heroEls.forEach((el, i) => {
      const delay = parseInt(el.getAttribute('data-hero-anim') || '0');
      setTimeout(() => {
        el.classList.add('animate-in', 'fade-in', 'slide-in-from-bottom-4');
      }, delay);
    });

    // Scroll animations
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in', 'fade-in', 'slide-in-from-bottom-4', 'duration-700');
        }
      });
    }, { threshold: 0.12 });

    const scrollEls = document.querySelectorAll('[data-scroll-anim]');
    scrollEls.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-base)' }}>
      
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center pt-32 px-6 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(196,148,31,0.07) 0%, transparent 70%)'
          }}
        ></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p 
            data-hero-anim="0"
            className="font-sans text-xs font-normal tracking-[0.16em] uppercase mb-8 opacity-0"
            style={{ color: 'var(--gold)' }}
          >
            Marketing AI Concierge
          </p>
          
          <h1 className="font-heading font-bold leading-none mb-8">
            <div 
              data-hero-anim="100"
              className="opacity-0"
              style={{ 
                fontSize: 'clamp(3rem, 7vw, 5rem)',
                color: 'var(--text-primary)',
                lineHeight: '1.0'
              }}
            >
              Scale Smarter.
            </div>
            <div 
              data-hero-anim="220"
              className="italic opacity-0"
              style={{ 
                fontSize: 'clamp(3rem, 7vw, 5rem)',
                color: 'var(--gold)',
                lineHeight: '1.0'
              }}
            >
              Exit Stronger.
            </div>
          </h1>
          
          <p 
            data-hero-anim="380"
            className="font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 opacity-0"
            style={{ color: 'var(--text-secondary)' }}
          >
            We build AI-powered marketing systems that unstick growth-stage businesses — and make them worth significantly more when it's time to sell. No bloated retainers. No vanity metrics. Just compounding results engineered from day one around your exit.
          </p>
          
          <div 
            data-hero-anim="520"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 opacity-0"
          >
            <a 
              href="#how-it-works"
              className="inline-flex items-center justify-center font-sans font-bold text-sm px-9 py-4 rounded transition-all hover:scale-[1.02]"
              style={{ 
                backgroundColor: 'var(--gold-btn)', 
                color: 'var(--gold-btn-text)',
                letterSpacing: '0.02em'
              }}
            >
              See How It Works
            </a>
            <Link 
              href="/apply"
              className="inline-flex items-center justify-center font-sans font-medium text-sm px-9 py-4 rounded transition-all hover:border-opacity-35"
              style={{ 
                border: '1px solid rgba(255,255,255,0.18)',
                color: 'var(--text-primary)'
              }}
            >
              Apply to Work With Us
            </Link>
          </div>

          <div 
            data-hero-anim="680"
            className="flex flex-wrap items-center justify-center gap-8 pt-6 opacity-0"
            style={{ borderTop: '1px solid var(--border-subtle)' }}
          >
            <span className="font-sans text-xs" style={{ color: 'var(--text-secondary)' }}>$0 → $10M Revenue Journeys</span>
            <span className="hidden sm:inline" style={{ color: 'var(--text-secondary)' }}>•</span>
            <span className="font-sans text-xs" style={{ color: 'var(--text-secondary)' }}>AI + Human Execution</span>
            <span className="hidden sm:inline" style={{ color: 'var(--text-secondary)' }}>•</span>
            <span className="font-sans text-xs" style={{ color: 'var(--text-secondary)' }}>Exit-Ready Systems</span>
          </div>
        </div>
      </section>

      {/* SYSTEMS · SCALE · EXIT */}
      <section 
        className="py-28 px-6"
        id="how-it-works"
        style={{ 
          backgroundColor: 'var(--bg-section)',
          backgroundImage: 'linear-gradient(to bottom, rgba(20,18,10,0.0) 0%, rgba(30,28,18,0.6) 100%)'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {[
              { icon: <Database className="w-6 h-6" />, title: "Systems", desc: "We build the foundation. Without structure, there's no scale." },
              { icon: <Target className="w-6 h-6" />, title: "Scale", desc: "We activate growth with AI-powered execution and data-driven targeting." },
              { icon: <BarChart3 className="w-6 h-6" />, title: "Exit", desc: "Everything is engineered for optionality — so you can sell, raise, or step away on your terms." }
            ].map((pillar, i) => (
              <div key={i} data-scroll-anim className="text-center opacity-0" style={{ transitionDelay: `${i * 80}ms` }}>
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--gold)' }}
                >
                  {pillar.icon}
                </div>
                <h3 className="font-heading font-bold text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed max-w-xs mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          <div data-scroll-anim className="max-w-2xl opacity-0">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Four Doors. One Direction.
            </h2>
            <p className="font-sans text-base" style={{ color: 'var(--text-secondary)' }}>
              Every engagement starts with a conversation about where you are and where you want to go.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="pb-28 px-6" style={{ backgroundColor: 'var(--bg-section)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-[2px]">
            {[
              { title: "AI SEO", desc: "Human strategy. AI execution. SearchAtlas-powered." },
              { title: "Media Buying", desc: "Paid media across Meta, Google, YouTube, TikTok." },
              { title: "Branding & Messaging", desc: "Voice, identity, and content that converts." },
              { title: "Web & App Development", desc: "Sites and systems built to scale." }
            ].map((service, i) => (
              <div 
                key={i}
                data-scroll-anim
                className="p-10 transition-all hover:bg-opacity-100 opacity-0"
                style={{ 
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderLeft: '2px solid var(--gold)',
                  transitionDelay: `${i * 80}ms`
                }}
              >
                <h3 className="font-heading font-bold text-xl mb-2" style={{ color: 'var(--text-primary)' }}>
                  {service.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {service.desc}
                </p>
                <Link 
                  href="/services"
                  className="font-sans text-sm font-medium hover:underline"
                  style={{ color: 'var(--gold)' }}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE + WHISKEYNEAT */}
      <section className="py-28 px-6" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[55%_45%] gap-16 items-center">
            
            <div data-scroll-anim className="opacity-0">
              <blockquote 
                className="font-heading text-2xl md:text-3xl leading-snug mb-10 pl-8"
                style={{ 
                  borderLeft: '3px solid var(--gold)',
                  color: 'var(--text-primary)'
                }}
              >
                "Hope is not a strategy. We combine decades of experience with AI-powered systems and human oversight to build repeatable marketing engines that scale."
              </blockquote>

              <ul className="space-y-4">
                {[
                  "AI + Human hybrid execution model",
                  "Exit-focused strategy from day one",
                  "MEC-driven reporting (Marketing Efficiency Coefficient)",
                  "Month-to-month after initial 90-day build"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--gold)' }} />
                    <span className="font-sans text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div 
              data-scroll-anim
              className="p-8 rounded-md opacity-0"
              style={{ 
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                transitionDelay: '120ms'
              }}
            >
              <Layers className="w-7 h-7 mb-5" style={{ color: 'var(--gold)' }} />
              <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>
                WhiskeyNeat.ai
              </h3>
              <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Your marketing data. Your intelligence layer. Powered by WhiskeyNeat.ai. Real-time visibility into the metrics that actually drive business value.
              </p>
              <Link 
                href="/intelligence"
                className="inline-flex items-center justify-center w-full font-sans font-bold text-sm px-6 py-4 rounded transition-all hover:scale-[1.02]"
                style={{ 
                  backgroundColor: 'var(--gold-btn)', 
                  color: 'var(--gold-btn-text)'
                }}
              >
                Learn About Our Intelligence Platform →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6" style={{ backgroundColor: 'var(--bg-section)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "They turned our brand into a sales machine... a record-setting Black Friday.", author: "Aftermarket Truck Parts CEO" },
              { quote: "They didn't just build us a website — they built the foundation for a future sale.", author: "Energy Supply Co CEO" },
              { quote: "We tripled our lead flow in 90 days, and it's built to run without us.", author: "SaaS CEO" }
            ].map((testimonial, i) => (
              <div 
                key={i}
                data-scroll-anim
                className="p-8 rounded opacity-0"
                style={{ 
                  border: '1px solid var(--border-subtle)',
                  transitionDelay: `${i * 80}ms`
                }}
              >
                <p className="font-heading italic text-lg leading-relaxed mb-6" style={{ color: 'var(--text-primary)' }}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-px" style={{ backgroundColor: 'var(--gold)' }}></div>
                  <span className="font-sans text-xs tracking-[0.12em] uppercase" style={{ color: 'var(--text-secondary)' }}>
                    {testimonial.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 text-center" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 
            data-scroll-anim
            className="font-heading font-bold mb-6 leading-tight opacity-0"
            style={{ 
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: 'var(--text-primary)'
            }}
          >
            Ready to Build a Business Worth Scaling — and Worth Buying?
          </h2>
          <p 
            data-scroll-anim
            className="font-sans text-base max-w-lg mx-auto mb-8 opacity-0"
            style={{ color: 'var(--text-secondary)', transitionDelay: '100ms' }}
          >
            Start with a conversation. We'll tell you exactly where you are and what it would take to get where you want to go.
          </p>
          <Link 
            href="/apply"
            data-scroll-anim
            className="inline-flex items-center justify-center font-sans font-bold px-11 py-5 rounded transition-all hover:scale-[1.02] opacity-0"
            style={{ 
              backgroundColor: 'var(--gold-btn)', 
              color: 'var(--gold-btn-text)',
              fontSize: '16px',
              transitionDelay: '200ms'
            }}
          >
            Apply to Work With Us →
          </Link>
          <p 
            data-scroll-anim
            className="font-sans text-xs mt-5 opacity-0"
            style={{ color: 'var(--text-tertiary)', transitionDelay: '300ms' }}
          >
            We only accept clients doing $1M+ in annual revenue. Applications are reviewed within 48 hours.
          </p>
        </div>
      </section>

    </div>
  );
}
