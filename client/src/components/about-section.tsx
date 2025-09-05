import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import "./mobile-animations.css";
// import ScrollTest from "./scroll-test"; // Disabled to prevent memory issues

export default function AboutSection() {
  const [isMobile, setIsMobile] = useState(false);
  const spinRef = useRef<HTMLDivElement>(null);
  const circularTextRef = useRef<SVGSVGElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Optimized JavaScript animations for both mobile and desktop
    let animationId: number;
    let rotation = 0;
    let frameCount = 0;
    
    const startOptimizedAnimation = () => {
      if (!circularTextRef.current) return;
      
      // Starting optimized circular animation
      
      const animate = () => {
        frameCount++;
        
        // Limit animation to 30fps on mobile, 60fps on desktop for performance
        const frameLimit = isMobile ? 2 : 1;
        
        if (frameCount % frameLimit === 0) {
          rotation += isMobile ? 0.5 : 0.8; // Slower rotation on mobile
          
          if (circularTextRef.current) {
            circularTextRef.current.style.setProperty('transform', `rotate(${rotation}deg)`, 'important');
            circularTextRef.current.style.setProperty('transform-origin', 'center center', 'important');
            circularTextRef.current.style.setProperty('will-change', 'transform', 'important');
          }
        }
        
        // Reset rotation to prevent infinite growth
        if (rotation >= 360) {
          rotation = 0;
        }
        
        animationId = requestAnimationFrame(animate);
      };
      
      animationId = requestAnimationFrame(animate);
    };

    // Use intersection observer to only animate when visible
    if (circularTextRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startOptimizedAnimation();
            } else {
              // Pause animation when not visible to save resources
              if (animationId) {
                cancelAnimationFrame(animationId);
              }
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(circularTextRef.current);
      
      // Cleanup function
      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        observer.disconnect();
        window.removeEventListener('resize', checkMobile);
      };
    }
    
    // Fallback cleanup if intersection observer isn't used
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const logoY = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);

  return (
    <motion.section 
      ref={sectionRef}
      id="about" 
      className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      initial={{ backgroundColor: "#ffffff" }}
      animate={{ backgroundColor: isInView ? "#f8f8f8" : "#ffffff" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >

        {/* Navigation */}
        <motion.div 
          className="text-center mb-6 md:mb-8 lg:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 02 and //who we are */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-gray-800 font-light text-base md:text-lg">02</span>
            <span className="text-gray-500 text-xs md:text-sm uppercase tracking-widest">//WHO WE ARE</span>
          </div>
          
          {/* we are (title) */}
          <motion.h2 
            className="font-bold text-black mb-0 tracking-wider text-center w-full"
            style={{ 
              fontSize: 'clamp(1.5rem, 8vw, 70px)',
              fontFamily: "'Druk Wide', sans-serif",
              fontWeight: 900,
              letterSpacing: '0.02em',
              textAlign: 'center',
              width: '100%'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ 
              duration: 1, 
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >WE ARE!</motion.h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center">
          {/* Left side content */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="space-y-8 text-black text-center lg:text-left max-w-none lg:max-w-2xl"
          >
            <motion.p 
              className="text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ y: 30, opacity: 0 }}
              animate={{ 
                y: isInView ? 0 : 30, 
                opacity: isInView ? 1 : 0
              }}
              transition={{ 
                duration: 1.2, 
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <strong>PITCHCRAFT</strong> is a bespoke visual design studio established in Mumbai, India, where creating bold and cinematic pitch decks and mood boards tailored for commercials, documentaries, and films is the norm. We collaborate with talented filmmakers to give their ideas and stories a strong visual identity.
            </motion.p>

            <motion.p 
              className="text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ y: 30, opacity: 0 }}
              animate={{ 
                y: isInView ? 0 : 30, 
                opacity: isInView ? 1 : 0
              }}
              transition={{ 
                duration: 1.2, 
                delay: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Elevated by a collective experience of over 2 decades, our team combines a global perspective with a passion for visual storytelling. We pride ourselves on delivering high-impact designs that resonate with clients worldwide.
            </motion.p>
          </motion.div>

          {/* Right side - Logo with flip animation */}
          <motion.div
            style={{ y: logoY }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div 
              className="relative w-60 h-60 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]"
              style={{ aspectRatio: "1/1" }}
            >
              {/* Layer 1: Textured background */}
              <div
                className="absolute inset-0 rounded-full"
                style={{ 
                  backgroundImage: "url('/Textured BG_2_1750782518004.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />

              {/* Layer 2: Logo */}
              <div
                className="absolute rounded-full"
                style={{
                  top: "20%",
                  left: "20%",
                  width: "60%",
                  height: "60%",
                  backgroundImage: "url('/PITCHCRAFT_Black_Solid_3D_2_1750782589504.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  zIndex: 10
                }}
              />

              {/* Layer 3: Simplified animated text */}
              {isMobile ? (
                <div className="absolute inset-0 circular-text-mobile overflow-visible">
                  <svg 
                    ref={circularTextRef}
                    className="w-full h-full overflow-visible" 
                    viewBox="0 0 220 220"
                  >
                    <defs>
                      <path
                        id="textCircleMobile"
                        d="M 110, 110 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                      />
                    </defs>
                    <text 
                      className="font-mono font-bold fill-black"
                      style={{ 
                        fontSize: '8px',
                        letterSpacing: '0.18rem'
                      }}
                    >
                      <textPath href="#textCircleMobile" startOffset="0%">
                        SCROLL DOWN FOR OUR PORTFOLIO • SCROLL DOWN FOR OUR PORTFOLIO • 
                      </textPath>
                    </text>
                  </svg>
                </div>
              ) : (
                <motion.div 
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <svg 
                    className="w-full h-full overflow-visible" 
                    viewBox="0 0 220 220"
                  >
                    <defs>
                      <path
                        id="textCircleDesktop"
                        d="M 110, 110 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                      />
                    </defs>
                    <text 
                      className="font-mono font-bold fill-black"
                      style={{ 
                        fontSize: '8px',
                        letterSpacing: '0.18rem'
                      }}
                    >
                      <textPath href="#textCircleDesktop" startOffset="0%">
                        SCROLL DOWN FOR OUR PORTFOLIO • SCROLL DOWN FOR OUR PORTFOLIO • 
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        
        {/* Mobile animations working perfectly */}
        {/* Test element removed - mobile animations working perfectly */}

    </motion.section>
  );
}
