interface BrandLogosProps {
  heading?: string;
  subheading?: string;
  dark?: boolean;
}

const brands = [
  { name: "Green Mountain Grills", style: "serif" },
  { name: "Westcott Designs™", style: "sans" },
  { name: "Westcott Built™", style: "sans" },
  { name: "C2Tax", style: "mono" },
  { name: "DNA Cards & Collectibles", style: "sans" },
  { name: "Topps", style: "serif" },
  { name: "Checkout Champ", style: "sans" },
  { name: "TrueDNA", style: "mono" },
  { name: "SRC Detail", style: "sans" },
  { name: "SprintRay", style: "mono" },
  { name: "Cocaine Coffee", style: "serif" },
  { name: "Arizona Wildlife Control", style: "sans" },
  { name: "RSG Offroad", style: "mono" },
  { name: "Pipedream Industries", style: "sans" },
];

export function BrandLogos({ heading, subheading, dark = false }: BrandLogosProps) {
  return (
    <div className="py-16 px-6" style={{ backgroundColor: dark ? 'var(--bg-section)' : 'var(--bg-base)' }}>
      <div className="max-w-6xl mx-auto">
        {(heading || subheading) && (
          <div className="text-center mb-12">
            {subheading && (
              <p className="font-sans text-xs font-normal tracking-[0.16em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
                {subheading}
              </p>
            )}
            {heading && (
              <p className="font-sans text-sm" style={{ color: 'var(--text-secondary)' }}>
                {heading}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-px" style={{ border: '0.5px solid var(--border-subtle)', borderRadius: '4px', overflow: 'hidden' }}>
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-4 py-5 transition-all"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRight: '0.5px solid var(--border-subtle)',
                borderBottom: '0.5px solid var(--border-subtle)',
              }}
            >
              <span
                className="text-center leading-tight"
                style={{
                  fontFamily: brand.style === 'serif' ? 'var(--font-heading)' : brand.style === 'mono' ? 'monospace' : 'var(--font-sans)',
                  fontSize: brand.name.length > 14 ? '9px' : brand.name.length > 10 ? '10px' : '11px',
                  fontWeight: brand.style === 'mono' ? 600 : brand.style === 'serif' ? 700 : 500,
                  color: 'var(--text-secondary)',
                  letterSpacing: brand.style === 'mono' ? '0.04em' : brand.style === 'sans' ? '0.03em' : '0',
                  textTransform: brand.style === 'mono' ? 'uppercase' : 'none',
                  display: 'block',
                  maxWidth: '90px',
                  textAlign: 'center',
                }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
