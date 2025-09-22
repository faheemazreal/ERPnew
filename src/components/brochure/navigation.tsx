import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/evoulth-logo.jpg" 
              alt="Evoulth ERP logo" 
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="font-bold text-lg text-foreground">Evoulth ERP</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-preschool-blue transition-smooth"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("benefits")}
              className="text-muted-foreground hover:text-preschool-blue transition-smooth"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-muted-foreground hover:text-preschool-blue transition-smooth"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-muted-foreground hover:text-preschool-blue transition-smooth"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-muted-foreground hover:text-preschool-blue transition-smooth"
            >
              FAQ
            </button>
            
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white/95 backdrop-blur-md rounded-b-lg shadow-lg">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("features")}
                className="text-left px-4 py-2 text-muted-foreground hover:text-preschool-blue transition-smooth"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("benefits")}
                className="text-left px-4 py-2 text-muted-foreground hover:text-preschool-blue transition-smooth"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-left px-4 py-2 text-muted-foreground hover:text-preschool-blue transition-smooth"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="text-left px-4 py-2 text-muted-foreground hover:text-preschool-blue transition-smooth"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection("faq")}
                className="text-left px-4 py-2 text-muted-foreground hover:text-preschool-blue transition-smooth"
              >
                FAQ
              </button>
              <div className="px-4">
                <Button 
                  className="w-full gradient-hero text-white"
                  onClick={() => scrollToSection("cta")}
                >
                  Get Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}