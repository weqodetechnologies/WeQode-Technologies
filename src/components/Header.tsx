import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const currentPath = location.pathname;

  // ✅ Hide/show header on scroll
  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  // ✅ Nav items (for both desktop & mobile)
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
  ];

  // ✅ Active link class
  const getLinkClass = (path: string) =>
    currentPath === path
      ? "text-[hsl(var(--brand-orange))] font-semibold border-b-2 border-[hsl(var(--brand-orange))] pb-1"
      : "text-muted-foreground hover:text-foreground transition-colors";

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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={getLinkClass(item.path)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact Button (Desktop) */}
          <Button
            onClick={() => navigate("/contact")}
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
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`block ${
                  currentPath === item.path
                    ? "text-[hsl(var(--brand-orange))] font-semibold"
                    : "text-muted-foreground hover:text-foreground transition-colors"
                }`}
                onClick={() => setIsMenuOpen(false)} // close menu on click
              >
                {item.name}
              </a>
            ))}
            <Button
              onClick={() => navigate("/contact")}
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
