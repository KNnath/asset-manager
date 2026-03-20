import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqProps {
  items: FaqItem[];
  heading?: string;
  subheading?: string;
}

export function Faq({ items, heading = "Frequently Asked Questions", subheading }: FaqProps) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const existing = document.getElementById("faq-schema");
    if (existing) existing.remove();

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": items.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    };

    const script = document.createElement("script");
    script.id = "faq-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("faq-schema");
      if (el) el.remove();
    };
  }, [items]);

  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--bg-section)' }}>
      <div className="max-w-3xl mx-auto">
        {subheading && (
          <p className="font-sans text-xs tracking-[0.16em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
            {subheading}
          </p>
        )}
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12" style={{ color: 'var(--text-primary)' }}>
          {heading}
        </h2>

        <div className="space-y-0">
          {items.map((item, i) => (
            <div
              key={i}
              style={{ borderBottom: '0.5px solid var(--border-subtle)' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 py-6 text-left transition-opacity hover:opacity-80"
              >
                <span
                  className="font-sans font-medium text-sm leading-relaxed"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.q}
                </span>
                <span className="shrink-0 mt-0.5" style={{ color: 'var(--gold)' }}>
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              {open === i && (
                <div className="pb-6">
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
                  >
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
