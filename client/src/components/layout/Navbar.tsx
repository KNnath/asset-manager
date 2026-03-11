import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a0a08]/90 backdrop-blur-md border-b border-[#252420] py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50">
            <span className="font-heading font-bold text-2xl tracking-tight text-[#F5F0E8]">
              Whiskey River <span className="text-amber">Media</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8 text-sm font-medium text-[#F5F0E8]/70">
              <Link href="/services" className="hover:text-[#F5F0E8] transition-colors">Services</Link>
              <Link href="/intelligence" className="hover:text-[#F5F0E8] transition-colors">Intelligence</Link>
              <Link href="/about" className="hover:text-[#F5F0E8] transition-colors">About</Link>
              <Link href="/blog" className="hover:text-[#F5F0E8] transition-colors">Blog</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="px-5 py-2.5 text-sm font-medium text-amber border border-amber rounded-sm hover:bg-amber/10 transition-colors">
              Client Login
            </Link>
            <Link href="/apply" className="px-5 py-2.5 text-sm font-medium text-[#0a0a08] bg-amber rounded-sm hover:bg-amber-light transition-colors">
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-[#F5F0E8] z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0a0a08] z-40 pt-24 px-6 flex flex-col">
          <div className="flex flex-col gap-6 text-2xl font-heading text-[#F5F0E8]">
            <Link href="/services" onClick={closeMenu}>Services</Link>
            <Link href="/intelligence" onClick={closeMenu}>Intelligence</Link>
            <Link href="/about" onClick={closeMenu}>About</Link>
            <Link href="/blog" onClick={closeMenu}>Blog</Link>
          </div>
          <div className="mt-auto pb-12 flex flex-col gap-4">
            <Link href="/login" onClick={closeMenu} className="w-full text-center px-5 py-4 text-amber border border-amber rounded-sm">
              Client Login
            </Link>
            <Link href="/apply" onClick={closeMenu} className="w-full text-center px-5 py-4 text-[#0a0a08] bg-amber rounded-sm">
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
