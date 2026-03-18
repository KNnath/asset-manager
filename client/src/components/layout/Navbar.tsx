import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 h-[72px] flex items-center ${
          scrolled ? "border-b" : ""
        }`}
        style={{
          backgroundColor: 'rgba(12,11,9,0.88)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottomColor: scrolled ? 'var(--border-subtle)' : 'transparent'
        }}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50">
            <span className="font-sans font-medium text-lg tracking-tight" style={{ color: '#EDE8DF' }}>
              Whiskey River <span style={{ color: '#C4941F' }}>Media</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-10 text-sm font-normal" style={{ color: '#7a7468' }}>
              <Link href="/services" className="hover:opacity-100 transition-opacity" style={{ color: '#7a7468', opacity: location === '/services' ? 1 : 0.8 }}>Services</Link>
              <Link href="/intelligence" className="hover:opacity-100 transition-opacity" style={{ color: '#7a7468', opacity: location === '/intelligence' ? 1 : 0.8 }}>Intelligence</Link>
              <Link href="/about" className="hover:opacity-100 transition-opacity" style={{ color: '#7a7468', opacity: location === '/about' ? 1 : 0.8 }}>About</Link>
              <Link href="/blog" className="hover:opacity-100 transition-opacity" style={{ color: '#7a7468', opacity: location === '/blog' ? 1 : 0.8 }}>Blog</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/login" 
              className="px-5 py-2 text-xs font-medium rounded transition-all"
              style={{ 
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#EDE8DF'
              }}
            >
              Client Login
            </Link>
            <Link 
              href="/apply" 
              className="px-5 py-2 text-xs font-bold rounded transition-all hover:scale-[1.02]"
              style={{ 
                backgroundColor: '#C4941F',
                color: '#0c0b09'
              }}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: '#EDE8DF' }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 pt-24 px-6 flex flex-col" style={{ backgroundColor: '#0c0b09' }}>
          <div className="flex flex-col gap-8 text-2xl font-heading" style={{ color: '#EDE8DF' }}>
            <Link href="/services" onClick={closeMenu}>Services</Link>
            <Link href="/intelligence" onClick={closeMenu}>Intelligence</Link>
            <Link href="/about" onClick={closeMenu}>About</Link>
            <Link href="/blog" onClick={closeMenu}>Blog</Link>
          </div>
          <div className="mt-auto pb-12 flex flex-col gap-4">
            <Link href="/login" onClick={closeMenu} className="w-full text-center px-5 py-4 rounded" style={{ border: '1px solid rgba(255,255,255,0.18)', color: '#EDE8DF' }}>
              Client Login
            </Link>
            <Link href="/apply" onClick={closeMenu} className="w-full text-center px-5 py-4 rounded" style={{ backgroundColor: '#C4941F', color: '#0c0b09' }}>
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
