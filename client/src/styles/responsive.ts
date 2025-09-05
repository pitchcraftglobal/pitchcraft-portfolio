// Comprehensive responsive design system
export const breakpoints = {
  xs: 360,   // Ultra-small phones
  sm: 480,   // Small phones  
  md: 768,   // Tablets
  lg: 1024,  // Small laptops
  xl: 1280,  // Desktop
  '2xl': 1440, // Large monitors
  '3xl': 1920, // Full HD
  '4xl': 2560  // 4K displays
} as const;

// Responsive utilities for consistent scaling
export const responsive = {
  // Typography scale that works across all devices
  text: {
    xs: {
      base: 'text-sm',
      sm: 'text-base', 
      md: 'text-lg',
      lg: 'text-xl',
      xl: 'text-2xl'
    },
    heading: {
      base: 'text-2xl',
      sm: 'text-3xl',
      md: 'text-4xl', 
      lg: 'text-5xl',
      xl: 'text-6xl',
      '2xl': 'text-7xl'
    },
    display: {
      base: 'text-3xl',
      sm: 'text-4xl',
      md: 'text-5xl',
      lg: 'text-6xl', 
      xl: 'text-7xl',
      '2xl': 'text-8xl',
      '3xl': 'text-9xl'
    }
  },
  
  // Spacing scale
  spacing: {
    section: {
      base: 'py-12',
      sm: 'py-16', 
      md: 'py-20',
      lg: 'py-24',
      xl: 'py-28',
      '2xl': 'py-32'
    },
    container: {
      base: 'px-4',
      sm: 'px-6',
      md: 'px-8', 
      lg: 'px-12',
      xl: 'px-16',
      '2xl': 'px-20'
    }
  },
  
  // Component sizing
  components: {
    brandCard: {
      mobile: { width: '3rem', height: '2rem' },
      tablet: { width: '5rem', height: '3.5rem' },
      desktop: { width: '7rem', height: '4.5rem' },
      large: { width: '9rem', height: '6rem' }
    },
    ticker: {
      mobile: { gap: '1rem', speed: 20 },
      tablet: { gap: '2rem', speed: 25 },
      desktop: { gap: '3rem', speed: 30 },
      large: { gap: '4rem', speed: 35 }
    }
  }
};

// CSS custom properties for fluid scaling
export const fluidScale = {
  // Fluid typography using clamp()
  fluidText: (min: number, preferred: string, max: number) => 
    `clamp(${min}rem, ${preferred}, ${max}rem)`,
  
  // Fluid spacing
  fluidSpace: (min: number, preferred: string, max: number) =>
    `clamp(${min}rem, ${preferred}, ${max}rem)`,
    
  // Container queries for modern responsive design
  container: {
    xs: '@container (min-width: 20rem)',
    sm: '@container (min-width: 24rem)', 
    md: '@container (min-width: 28rem)',
    lg: '@container (min-width: 32rem)',
    xl: '@container (min-width: 36rem)'
  }
};