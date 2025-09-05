import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Search, Palette, Bot } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    icon: Search,
    title: "VISUAL RESEARCH",
    description: "Comprehensive visual research and mood board creation for your next project.",
  },
  {
    icon: Palette,
    title: "LAYOUT DESIGN",
    description: "Sophisticated layout design that captures attention and communicates effectively.",
  },
  {
    icon: Bot,
    title: "AI IMAGE GENERATION",
    description: "Cutting-edge AI-powered image generation for unique visual solutions.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [clashDisplayLoaded, setClashDisplayLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        const fonts = [
          new FontFace('Clash Display', 'url(/ClashDisplay-Light_1750774280031.otf)', { weight: '300' }),
          new FontFace('Clash Display', 'url(/ClashDisplay-Regular_1750774280031.otf)', { weight: '400' }),
          new FontFace('Clash Display', 'url(/ClashDisplay-Medium_1750774280031.otf)', { weight: '500' }),
          new FontFace('Clash Display', 'url(/ClashDisplay-Semibold_1750774280031.otf)', { weight: '600' }),
          new FontFace('Clash Display', 'url(/ClashDisplay-Bold_1750774280031.otf)', { weight: '700' })
        ];
        
        await Promise.all(fonts.map(async (font) => {
          const loadedFont = await font.load();
          document.fonts.add(loadedFont);
        }));
        
        setClashDisplayLoaded(true);
      } catch (error) {
        // Font loading failed, fallback fonts will be used
      }
    };
    loadFonts();
    
    // Mobile detection
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  
  // Individual parallax effects for each text line
  const line1Y = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);
  const line2Y = useTransform(scrollYProgress, [0, 1], ["0px", "-30px"]);
  const line3Y = useTransform(scrollYProgress, [0, 1], ["0px", "-70px"]);
  
  return (
    <motion.section 
      ref={sectionRef}
      id="services" 
      className="section-padding relative overflow-hidden bg-white"
    >
      <div className="max-w-full lg:max-w-[1280px] xl:max-w-[1500px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        {/* Rotated Typography Design */}
        <div className="relative flex items-center justify-center min-h-[35vh] md:min-h-[60vh] w-full px-4">
        <motion.div
          initial={{ opacity: 0, scale: isMobile ? 0.95 : 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : (isMobile ? 0.95 : 0) }}
          transition={{ 
            duration: isMobile ? 1.2 : 1.8,
            ease: isMobile ? [0.4, 0, 0.2, 1] : [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute inset-0 z-0 rounded-3xl overflow-hidden"
          style={{
            backgroundImage: 'url("/abstract-gradient-background-with-grainy-effect_1750780355523.jpg")',
            backgroundSize: isMobile ? 'cover' : 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            transform: isMobile ? 'scale(1.05)' : 'scale(1.1)',
            transformOrigin: 'center',
            width: '100%',
            height: '100%',
            willChange: isMobile ? 'transform, opacity' : 'auto'
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
          style={{ 
            mixBlendMode: isMobile ? 'screen' : 'overlay'
          }}
        >
          <div className="space-y-8 md:space-y-16 lg:space-y-20 max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: isInView ? 1 : 0, rotate: isInView ? 1 : -5 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] xl:text-6xl 2xl:text-[48px]"
              style={{ 
                fontFamily: "'Druk Wide', sans-serif", fontWeight: 900, 
                color: '#00e5ff',
                lineHeight: '1.1', letterSpacing: '0.02em', 
                margin: isMobile ? '0 0 2rem 0' : '0 0 4rem 0', 
                whiteSpace: 'normal',
                transformOrigin: 'center',
                fontSize: 'clamp(18px, 3.5vw, 48px)'
              }}
            >
              VISUALLY LOADED DECKS.
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, rotate: 5 }}
              animate={{ opacity: isInView ? 1 : 0, rotate: isInView ? -1 : 5 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] xl:text-6xl 2xl:text-[48px]"
              style={{ 
                fontFamily: "'Druk Wide', sans-serif", fontWeight: 900, 
                color: '#00e5ff',
                lineHeight: '1.1', letterSpacing: '0.02em', 
                margin: isMobile ? '0 0 2rem 0' : '0 0 4rem 0', 
                whiteSpace: isMobile ? 'nowrap' : 'normal',
                transformOrigin: 'center',
                fontSize: 'clamp(18px, 3.5vw, 48px)'
              }}
            >
              DESIGNED TO PITCH.
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: isInView ? 1 : 0, rotate: isInView ? 1 : -5 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] xl:text-6xl 2xl:text-[48px]"
              style={{ 
                fontFamily: "'Druk Wide', sans-serif", fontWeight: 900, 
                color: '#00e5ff',
                lineHeight: '1.1', letterSpacing: '0.02em', 
                margin: '0', 
                whiteSpace: isMobile ? 'nowrap' : 'normal',
                transformOrigin: 'center',
                fontSize: 'clamp(18px, 3.5vw, 48px)'
              }}
            >
              PRIMED TO WIN.
            </motion.h2>
          </div>
        </motion.div>
        </div>
      </div>
    </motion.section>
  );
}