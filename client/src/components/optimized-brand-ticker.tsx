import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { responsive } from '@/styles/responsive';

interface Brand {
  name: string;
  logo?: string;
}

interface OptimizedBrandTickerProps {
  brands: Brand[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

export default function OptimizedBrandTicker({ 
  brands, 
  direction = 'left', 
  speed = 'normal',
  className = '' 
}: OptimizedBrandTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop' | 'large'>('desktop');
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  // Detect screen size for responsive behavior
  useEffect(() => {
    setIsClient(true);
    
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) setScreenSize('mobile');
      else if (width < 1024) setScreenSize('tablet');
      else if (width < 1440) setScreenSize('desktop');
      else setScreenSize('large');
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Get responsive ticker settings
  const tickerConfig = responsive.components.ticker[screenSize];
  
  // Speed mapping
  const speedMap = {
    slow: tickerConfig.speed * 0.7,
    normal: tickerConfig.speed,
    fast: tickerConfig.speed * 1.3
  };

  const animationDuration = speedMap[speed];
  
  // Create duplicate arrays for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  // Smooth ticker animation
  const tickerVariants = {
    animate: {
      x: direction === 'left' ? [0, '-50%'] : ['-50%', 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: animationDuration,
        ease: "linear",
      },
    },
  };

  // Responsive brand card styles
  const getBrandCardClasses = () => {
    const base = "flex-shrink-0 flex items-center justify-center bg-gray-900/20 border border-gray-800/30 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/30 hover:border-gray-700/50";
    
    switch (screenSize) {
      case 'mobile':
        return `${base} w-12 h-8 mx-2`;
      case 'tablet':
        return `${base} w-20 h-14 mx-3`;
      case 'desktop':
        return `${base} w-28 h-18 mx-4`;
      case 'large':
        return `${base} w-36 h-24 mx-6`;
      default:
        return `${base} w-28 h-18 mx-4`;
    }
  };

  if (!isClient) {
    return <div className={`h-24 ${className}`} />; // SSR placeholder
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      {/* Ticker container */}
      <div
        ref={containerRef}
        className="relative flex items-center h-24"
        style={{
          // Performance optimizations
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
      >
        {/* Animated ticker track */}
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={prefersReducedMotion ? {} : tickerVariants.animate}
          style={{
            // Performance optimizations for smooth animation
            willChange: 'transform',
            transform: 'translateZ(0)', // Hardware acceleration
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className={getBrandCardClasses()}
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span className={`font-medium text-gray-300 hover:text-white transition-colors ${
                  screenSize === 'mobile' ? 'text-xs' : 
                  screenSize === 'tablet' ? 'text-sm' : 
                  screenSize === 'desktop' ? 'text-base' : 'text-lg'
                }`}>
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}