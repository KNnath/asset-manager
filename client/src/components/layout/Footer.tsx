import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="relative" style={{ backgroundColor: '#080807', borderTop: '1px solid var(--border-gold)' }}>
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-sans font-medium text-lg tracking-tight" style={{ color: '#EDE8DF' }}>
                Whiskey River <span style={{ color: '#C4941F' }}>Media</span>
              </span>
            </Link>
            <p className="font-sans text-sm" style={{ color: '#7a7468' }}>
              Scale Smarter. Exit Stronger.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-normal uppercase tracking-[0.14em] text-xs mb-6" style={{ color: '#4a463f' }}>Services</h4>
            <ul className="space-y-3 text-sm" style={{ color: '#7a7468' }}>
              <li><Link href="/services" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.85 }}>AI SEO Concierge</Link></li>
              <li><Link href="/services" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.85 }}>Media Buying</Link></li>
              <li><Link href="/services" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.85 }}>Branding & Messaging</Link></li>
              <li><Link href="/services" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.85 }}>Web Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-normal uppercase tracking-[0.14em] text-xs mb-6" style={{ color: '#4a463f' }}>Company</h4>
            <ul className="space-y-3 text-sm" style={{ color: '#7a7468' }}>
              <li><Link href="/about" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.85 }}>Story</Link></li>
              <li><Link href="/about" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.85 }}>About</Link></li>
              <li><Link href="/blog" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.85 }}>Blog</Link></li>
              <li><Link href="/apply" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.85 }}>Apply</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-normal uppercase tracking-[0.14em] text-xs mb-6" style={{ color: '#4a463f' }}>Platform</h4>
            <ul className="space-y-3 text-sm" style={{ color: '#7a7468' }}>
              <li><Link href="/intelligence" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.85 }}>WhiskeyNeat.ai</Link></li>
              <li><Link href="/login" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.85 }}>Client Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <p className="font-sans text-xs" style={{ color: '#4a463f' }}>
            © {new Date().getFullYear()} Whiskey River Media | Phoenix, AZ
          </p>
          <div className="flex gap-6 text-xs" style={{ color: '#4a463f' }}>
            <a href="#" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.85 }}>Privacy</a>
            <span>·</span>
            <a href="#" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.85 }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
