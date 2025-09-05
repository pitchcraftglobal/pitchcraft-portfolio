import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import pcLogoWhite from "/attached_assets/PC_Logo_White_1753105431246.png";

export default function Navigation() {
  const [currentSection, setCurrentSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Determine current section based on scroll position
          const sections = ["hero", "about", "brand-partners", "portfolio", "ai-explorations", "contact"];
          const scrollPosition = window.scrollY + 100;
          
          let current = "hero";
          
          for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
              const rect = element.getBoundingClientRect();
              const elementTop = window.scrollY + rect.top;
              
              if (scrollPosition >= elementTop) {
                current = sectionId;
              }
            }
          }
          
          setCurrentSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine section-specific styling
  const isHeroSection = currentSection === "hero";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Get navigation background based on current section
  const getNavBackground = () => {
    if (isHeroSection) {
      return "bg-white/15 backdrop-blur border-b border-black/10";
    } else {
      return "bg-black/60 backdrop-blur border-b border-white/10";
    }
  };

  // Get text/icon colors based on current section
  const shouldUseBlackText = false; // Always use white text/icons for hero, white for others

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${getNavBackground()}`}>
      <div className="max-w-[1440px] mx-auto px-[5vw] py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img 
            src={pcLogoWhite}
            alt="Pitchcraft Logo" 
            onClick={() => scrollToSection("hero")}
            className="h-6 lg:h-8 w-auto cursor-pointer hover:opacity-80 transition-all duration-300"
          />

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-md transition-all duration-300 hover:scale-105"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              {mobileMenuOpen ? (
                // Close icon (X)
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-300"
                >
                  <path d="M18 6L6 18M6 6L18 18" />
                </svg>
              ) : (
                // Hamburger icon (3 lines)
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-300"
                >
                  <path d="M4 12H20M10 18H20M7 6H20" />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* Expanded Menu Content */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6 pb-4">
              <div className="flex flex-col space-y-4">
                {[
                  { id: "about", label: "WHO WE ARE" },
                  { id: "brand-partners", label: "BRANDS" },
                  { id: "portfolio", label: "PITCH DECKS" },
                  { id: "uiux-design", label: "UI/UX DESIGN" },
                  { id: "ai-explorations", label: "AI EXPLORATIONS" },
                  { id: "contact", label: "CONNECT" }
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-sm lg:text-base font-mono tracking-wider py-2 px-2 rounded transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-500 uppercase text-white"
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <div className="pt-4 mt-4 border-t text-xs font-mono border-white/10 text-white/60">
                  <div>Mumbai, India</div>
                  <div>Est. 2025</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
