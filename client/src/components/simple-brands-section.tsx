import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./mobile-animations.css";

// Import brand logos from organized brand_logos folder
import budweiserLogo from "/attached_assets/brand_logos/budweiser-logo-vector_1751097221035.webp";
import bumbleLogo from "/attached_assets/brand_logos/Bumble-Symbol_1751097221035.webp";
import cocaColaLogo from "/attached_assets/brand_logos/coca-cola-2021_White_1751097221035.webp";
import f1Logo from "/attached_assets/brand_logos/F1 logo.webp";
import hboLogo from "/attached_assets/brand_logos/hbo-4_1751097221036.webp";
import absolutLogo from "/attached_assets/brand_logos/logo-absolut_1751097221037.webp";
import mcdonaldsLogo from "/attached_assets/brand_logos/mcdonalds_white_1751097221037.webp";
import michelobUltraLogo from "/attached_assets/brand_logos/Michelob-Ultra-Logo_1751097221037.webp";
import bmwLogo from "/attached_assets/brand_logos/2401696-middle_1751097326496.webp";
import bankOfAmericaLogo from "/attached_assets/brand_logos/bank-of-america (1)_1751097326496.webp";
import disneyLogo from "/attached_assets/brand_logos/disney-2_1751097326496.webp";
import fordLogo from "/attached_assets/brand_logos/ford-logo-flat_1751097326496.webp";
import laMerLogo from "/attached_assets/brand_logos/la-mer_1751097326497.webp";
import lorealLogo from "/attached_assets/brand_logos/loreal_white_1751097326497.webp";
import samsungLogo from "/attached_assets/brand_logos/samsung-8_1751097326497.webp";
import sonyLogo from "/attached_assets/brand_logos/sony-2_1751097326497.webp";
import visaLogo from "/attached_assets/brand_logos/visa-10_1751097326497.webp";

const allBrands = [
  { name: "Budweiser", logo: budweiserLogo },
  { name: "Bumble", logo: bumbleLogo },
  { name: "Coca-Cola", logo: cocaColaLogo },
  { name: "Formula 1", logo: f1Logo },
  { name: "HBO", logo: hboLogo },
  { name: "Absolut", logo: absolutLogo },
  { name: "McDonald's", logo: mcdonaldsLogo },
  { name: "Michelob Ultra", logo: michelobUltraLogo },
  { name: "BMW", logo: bmwLogo },
  { name: "Bank of America", logo: bankOfAmericaLogo },
  { name: "Disney", logo: disneyLogo },
  { name: "Ford", logo: fordLogo },
  { name: "La Mer", logo: laMerLogo },
  { name: "L'Oréal", logo: lorealLogo },
  { name: "Samsung", logo: samsungLogo },
  { name: "Sony", logo: sonyLogo },
  { name: "Visa", logo: visaLogo },
];

function ModernTicker({ brands, reverse = false, isMobile = false, rowIndex = 0 }: { 
  brands: typeof allBrands; 
  reverse?: boolean;
  isMobile?: boolean;
  rowIndex?: number;
}) {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobile || !tickerRef.current) return;

    const element = tickerRef.current;
    let position = 0;
    let animationId: number;
    
    // Calculate actual single set width based on DOM
    let singleSetWidth = brands.length * 112; // Fallback calculation

    const scroll = () => {
      position += 1.5; // Increased speed for mobile animation
      
      // Simple infinite loop reset
      if (position >= singleSetWidth) {
        position = 0;
      }
      
      // Apply direction - for reverse, start from negative to create seamless loop
      const translateX = reverse ? (position - singleSetWidth) : -position;
      element.style.transform = `translateX(${translateX}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    // Start animation after layout is ready and calculate real width
    setTimeout(() => {
      if (!element) return;
      // Calculate actual width of one complete set (half the total width since we have 2 copies)
      const totalWidth = element.scrollWidth;
      singleSetWidth = totalWidth / 2; // Since we duplicate brands once
      scroll(); // Start animation with correct width
    }, 100);

    return () => cancelAnimationFrame(animationId);
  }, [isMobile, brands.length, reverse]);

  if (isMobile) {
    return (
      <div style={{ 
        overflow: 'hidden', 
        width: '100%', 
        position: 'relative',
        height: '3.5rem',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Left fade */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '2rem',
          height: '100%',
          background: 'linear-gradient(to right, #0a0a0a, transparent)',
          zIndex: 10,
          pointerEvents: 'none'
        }} />
        
        {/* Right fade */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '2rem',
          height: '100%',
          background: 'linear-gradient(to left, #0a0a0a, transparent)',
          zIndex: 10,
          pointerEvents: 'none'
        }} />
        
        <div 
          ref={tickerRef}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '2rem',
            width: 'max-content'
          }}
        >
          {/* Duplicate brands for seamless loop */}
          {[...brands, ...brands].map((brand, index) => (
            <div 
              key={`${brand.name}-${index}`} 
              style={{ 
                flexShrink: 0, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '5rem', 
                height: '3.5rem' 
              }}
            >
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="ticker-container">
      <div className={`ticker-track ${reverse ? 'reverse' : ''}`}>
        {brands.concat(brands).concat(brands).concat(brands).concat(brands).map((brand, index) => (
          <div key={`${brand.name}-${index}`} className="ticker-item">
            <img 
              src={brand.logo} 
              alt={`${brand.name} logo`}
              className="ticker-logo"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SimpleBrandsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Split brands into two rows with duplicates for seamless infinite loops
  const firstRowBrands = [
    ...allBrands.slice(0, 9), // Logos 1-9
    ...allBrands.slice(0, 9)  // Repeat logos 1-9 (total 18 logos)
  ];
  const secondRowBrands = [
    ...allBrands.slice(9),    // Logos 10-17
    ...allBrands.slice(9)     // Repeat logos 10-17 (total 16 logos)
  ];

  return (
    <section 
      ref={sectionRef}
      id="brand-partners"
      className="py-12 md:py-16 lg:py-20 bg-black border-t border-white/10"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04875) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04875) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex items-center justify-center gap-4 mb-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-orange text-base md:text-lg font-light">04</span>
            <span className="text-white/60 text-xs md:text-sm uppercase tracking-widest">//PARTNERSHIPS</span>
          </motion.div>
          <motion.h2
            className="text-white tracking-wide mobile-title-26"
            style={{ 
              fontSize: 'clamp(1.5rem, 8vw, 70px)',
              fontFamily: "'Druk Wide', sans-serif",
              fontWeight: 900,
              letterSpacing: '0.02em'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            BRANDS WE'VE<br />WORKED WITH
          </motion.h2>
        </motion.div>

        {/* Moving brand rows */}
        <motion.div 
          className="space-y-8 md:space-y-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* First row - moves left */}
          <div className="py-4">
            <ModernTicker brands={firstRowBrands} isMobile={isMobile} />
          </div>

          {/* Second row - moves right */}
          <div className="py-4">
            <ModernTicker brands={secondRowBrands} reverse isMobile={isMobile} />
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}