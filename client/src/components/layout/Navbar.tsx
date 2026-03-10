import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-glass border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading font-bold text-xl tracking-tight text-white">
            Whiskey River <span className="text-primary">Media</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium text-white/70">
            <Link href="/framework" className="hover:text-white transition-colors">
              Framework
            </Link>
            <Link href="/ai-seo" className="hover:text-white transition-colors">
              AI SEO
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/whiskeyneat" className="hover:text-white transition-colors">
              WhiskeyNeat.ai
            </Link>
          </div>
          <Button variant="default" className="rounded-full px-6 font-medium">
            Book Strategy Call
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white/80 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
