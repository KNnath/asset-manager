import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                Whiskey River <span className="text-primary">Media</span>
              </span>
            </Link>
            <p className="text-white/60 max-w-sm text-sm leading-relaxed mb-6">
              We combine decades of marketing experience with the best AI tools so you don't have to. Your Marketing AI Concierge.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/ai-seo" className="hover:text-primary transition-colors">AI SEO Funnel</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Media Buying</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Creative Design</Link></li>
              <li><Link href="/whiskeyneat" className="hover:text-primary transition-colors">WhiskeyNeat.ai</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/framework" className="hover:text-primary transition-colors">Our Framework</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Results</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Whiskey River Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
