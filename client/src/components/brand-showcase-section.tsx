import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Placeholder brand data with thumbnails
const brandShowcase = [
  { id: 1, name: "Brand Alpha", thumbnail: "https://via.placeholder.com/120x80/333333/ffffff?text=ALPHA" },
  { id: 2, name: "Brand Beta", thumbnail: "https://via.placeholder.com/120x80/444444/ffffff?text=BETA" },
  { id: 3, name: "Brand Gamma", thumbnail: "https://via.placeholder.com/120x80/555555/ffffff?text=GAMMA" },
  { id: 4, name: "Brand Delta", thumbnail: "https://via.placeholder.com/120x80/666666/ffffff?text=DELTA" },
  { id: 5, name: "Brand Epsilon", thumbnail: "https://via.placeholder.com/120x80/777777/ffffff?text=EPSILON" },
  { id: 6, name: "Brand Zeta", thumbnail: "https://via.placeholder.com/120x80/888888/ffffff?text=ZETA" },
  { id: 7, name: "Brand Eta", thumbnail: "https://via.placeholder.com/120x80/999999/ffffff?text=ETA" },
  { id: 8, name: "Brand Theta", thumbnail: "https://via.placeholder.com/120x80/AAAAAA/000000?text=THETA" },
];

const secondRowBrands = [
  { id: 9, name: "Brand Iota", thumbnail: "https://via.placeholder.com/120x80/BBBBBB/000000?text=IOTA" },
  { id: 10, name: "Brand Kappa", thumbnail: "https://via.placeholder.com/120x80/CCCCCC/000000?text=KAPPA" },
  { id: 11, name: "Brand Lambda", thumbnail: "https://via.placeholder.com/120x80/DDDDDD/000000?text=LAMBDA" },
  { id: 12, name: "Brand Mu", thumbnail: "https://via.placeholder.com/120x80/EEEEEE/000000?text=MU" },
  { id: 13, name: "Brand Nu", thumbnail: "https://via.placeholder.com/120x80/F0F0F0/000000?text=NU" },
  { id: 14, name: "Brand Xi", thumbnail: "https://via.placeholder.com/120x80/E0E0E0/000000?text=XI" },
  { id: 15, name: "Brand Omicron", thumbnail: "https://via.placeholder.com/120x80/D0D0D0/000000?text=OMICRON" },
  { id: 16, name: "Brand Pi", thumbnail: "https://via.placeholder.com/120x80/C0C0C0/000000?text=PI" },
];

function MotionTicker({ brands, reverse = false }: {
  brands: typeof brandShowcase;
  reverse?: boolean;
}) {
  const duplicatedBrands = [...brands, ...brands];
  const duration = reverse ? 35 : 30;
  
  // Performance optimization
  useEffect(() => {
    // Optimize for hardware acceleration
    const element = document.querySelector('.motion-ticker-track');
    if (element) {
      (element as HTMLElement).style.willChange = 'transform';
    }
  }, []);
  
  return (
    <div className="motion-ticker-container">
      <motion.div 
        className="motion-ticker-track"
        initial={{ x: "0%" }}
        animate={{
          x: reverse ? ["0%", "50%"] : ["0%", "-50%"]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        style={{
          willChange: "transform"
        }}
      >
        {duplicatedBrands.map((brand, index) => (
          <motion.div 
            key={`${brand.id}-${index}`} 
            className="motion-brand-card"
            whileHover={{ 
              scale: 1.05,
              y: -4,
              transition: { duration: 0.2 }
            }}
          >
            <img 
              src={brand.thumbnail} 
              alt={brand.name}
              className="motion-brand-image"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function BrandShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section 
      id="brands"
      ref={containerRef}
      className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-deep-black to-gray-950 relative overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange/5 via-transparent to-orange/5 opacity-50" />
      
      <div className="max-w-full lg:max-w-[1280px] xl:max-w-[1500px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="text-orange font-light text-lg">05</span>
            <div className="w-8 h-px bg-gradient-to-r from-orange to-transparent" />
            <span className="text-white/50 text-sm uppercase tracking-[0.3em] font-light">SHOWCASE</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight"
            style={{ 
              fontFamily: "'Clash Display', sans-serif",
              letterSpacing: '-0.02em'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.1, delay: 0.5 }}
          >
            BRAND COLLABORATIONS
          </motion.h2>
          
          <motion.p
            className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Showcasing our dynamic partnerships with industry leaders across the globe
          </motion.p>
        </motion.div>

        {/* Flowing brand displays */}
        <motion.div 
          className="space-y-12 md:space-y-16"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <MotionTicker brands={brandShowcase} />
          <MotionTicker brands={secondRowBrands} reverse />
        </motion.div>

        {/* Achievement metrics */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {[
            { value: "150+", label: "Creative Projects" },
            { value: "85+", label: "Brand Partners" },
            { value: "25+", label: "Global Markets" },
            { value: "8", label: "Years Excellence" }
          ].map((metric, index) => (
            <motion.div 
              key={metric.label}
              className="space-y-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange">
                {metric.value}
              </div>
              <div className="text-white/70 text-sm md:text-base font-light">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}