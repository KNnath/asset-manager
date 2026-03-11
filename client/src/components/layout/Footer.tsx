import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0a0a08] relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-heading font-bold text-2xl tracking-tight text-[#F5F0E8]">
                Whiskey River <span className="text-amber">Media</span>
              </span>
            </Link>
            <p className="text-[#F5F0E8]/60 text-sm leading-relaxed font-sans">
              Scale Smarter. Exit Stronger.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-bold uppercase tracking-[0.12em] text-[#8A8478] text-xs mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-[#F5F0E8]/70">
              <li><Link href="/services" className="hover:text-amber transition-colors">AI SEO Concierge</Link></li>
              <li><Link href="/services" className="hover:text-amber transition-colors">Media Buying</Link></li>
              <li><Link href="/services" className="hover:text-amber transition-colors">Branding & Messaging</Link></li>
              <li><Link href="/services" className="hover:text-amber transition-colors">Web Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold uppercase tracking-[0.12em] text-[#8A8478] text-xs mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-[#F5F0E8]/70">
              <li><Link href="/about" className="hover:text-amber transition-colors">Story</Link></li>
              <li><Link href="/about" className="hover:text-amber transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-amber transition-colors">Blog</Link></li>
              <li><Link href="/apply" className="hover:text-amber transition-colors">Apply</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold uppercase tracking-[0.12em] text-[#8A8478] text-xs mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-[#F5F0E8]/70">
              <li><Link href="/intelligence" className="hover:text-amber transition-colors">WhiskeyNeat.ai</Link></li>
              <li><Link href="/login" className="hover:text-amber transition-colors">Client Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#252420] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8A8478] text-xs font-sans">
            © {new Date().getFullYear()} Whiskey River Media | Phoenix, AZ
          </p>
          <div className="flex gap-6 text-xs text-[#8A8478]">
            <a href="#" className="hover:text-[#F5F0E8] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#F5F0E8] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}