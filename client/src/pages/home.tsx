import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import UIUXSection from "@/components/uiux-section";
import AIExplorationsSection from "@/components/ai-explorations-section";
import SimpleBrandsSection from "@/components/simple-brands-section";
import OptimizedBrandTicker from "@/components/optimized-brand-ticker";
import { portfolioItems } from "@/lib/portfolio-data";
import ContactSection from "@/components/contact-section";
import PortfolioModal from "@/components/portfolio-modal";
import AccessibilityChecker from "@/components/accessibility-checker";
import { useState } from "react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SimpleBrandsSection />
      
      <PortfolioSection onSelectProject={setSelectedProject} />
      <UIUXSection onSelectProject={setSelectedProject} />
      <AIExplorationsSection />
      <ContactSection />
      
      {selectedProject && (
        <PortfolioModal 
          project={portfolioItems.find(p => p.id === selectedProject) || null}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Footer */}
      <footer className="py-12 bg-charcoal border-t border-white/5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04875) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04875) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 pitchcraft-footer-text">
              PITCHCRAFT
            </div>
            <div className="text-soft-gray font-mono text-sm text-center md:text-right">
              <p className="footer-text-small">© Est. 2025 Pitchcraft Global.</p>
              <p className="footer-text-small">Crafted with passion in Mumbai, India</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
