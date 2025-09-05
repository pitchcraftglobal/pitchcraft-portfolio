// Centralized animation configuration
export const animations = {
  // Smooth ticker animations that work on all devices
  ticker: {
    duration: {
      slow: 40,
      normal: 30,
      fast: 20
    },
    easing: "linear",
    // Mobile-optimized settings
    mobile: {
      duration: 25,
      willChange: "transform",
      backfaceVisibility: "hidden" as const,
      perspective: 1000
    }
  },
  
  // Responsive breakpoints for animations
  breakpoints: {
    mobile: "(max-width: 767px)",
    tablet: "(min-width: 768px) and (max-width: 1023px)",
    desktop: "(min-width: 1024px)"
  },
  
  // Performance-optimized animation variants
  variants: {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    slideUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }
};

// Media query hook for responsive animations
export const useResponsiveAnimation = (baseConfig: any) => {
  const isMobile = window.innerWidth < 768;
  
  return {
    ...baseConfig,
    transition: {
      ...baseConfig.transition,
      duration: isMobile ? baseConfig.transition.duration * 0.8 : baseConfig.transition.duration
    }
  };
};