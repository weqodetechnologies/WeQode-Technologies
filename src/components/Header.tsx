import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down → hide header
        setIsVisible(false);
      } else {
        // Scrolling up → show header
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg sm:text-2xl font-black">
            <span
              className="font-outfit"
              style={{ color: "hsl(var(--brand-orange))" }}
            >
              We
            </span>
            <span
              className="font-outfit"
              style={{ color: "hsl(var(--brand-purple))" }}
            >
              Qode
            </span>
            <span className="font-outfit">Technologies</span>
          </div>

          {/* Menu (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/home"
              className="text-foreground font-medium border-b-2 border-primary pb-1"
            >
              Home
            </a>
            <a
              href="/services"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="/careers"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Careers
            </a>
          </div>

          {/* Contact Button (Desktop) */}
          <Button
            className="hidden md:flex text-white rounded-xl px-6 hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "hsl(var(--brand-orange))" }}
          >
            Contact us
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <a href="#home" className="block text-foreground font-medium">
              Home
            </a>
            <a
              href="/services"
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="/about"
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="/careers"
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Careers
            </a>
            <Button
              className="w-full text-white rounded-xl px-6 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "hsl(var(--brand-orange))" }}
            >
              Contact us
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
