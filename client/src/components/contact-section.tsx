import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <motion.section 
      id="contact" 
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-black w-full flex items-center"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04875) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04875) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}
    >
      <div className="max-w-full lg:max-w-[1280px] xl:max-w-[1500px] 2xl:max-w-[1800px] mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : 40
          }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <motion.div 
            className="flex items-center justify-center gap-4 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-orange text-base md:text-lg font-light">06</span>
            <span className="text-white/60 text-xs md:text-sm uppercase tracking-widest">//CONNECT</span>
          </motion.div>
          <motion.h2 
            className="text-white font-bold tracking-tight mobile-title-26 text-center"
            style={{ 
              fontSize: 'clamp(1.5rem, 8vw, 70px)',
              fontFamily: "'Druk Wide', sans-serif",
              fontWeight: 900,
              lineHeight: '1.1',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              y: isInView ? 0 : 30
            }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            LET'S CREATE<br />TOGETHER!
          </motion.h2>
        </motion.div>
        
        {/* Email Section */}
        <motion.div
          className="mb-4 md:mb-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : 50
          }}
          transition={{ 
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <motion.p 
            className="text-white/60 text-base md:text-sm mb-1 md:mb-2 tracking-wide uppercase font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            SEND AN EMAIL
          </motion.p>
          <motion.a
            href="mailto:hello@pitchcraft.global"
            className="hover:text-white transition-colors duration-300 block touch-target focus:outline-2 focus:outline-orange-500 focus:outline-offset-2 text-center contact-detail-text"
            style={{ 
              lineHeight: 1.1,
              width: '100%',
              display: 'block',
              height: 'auto',
              minHeight: '28px',
              padding: '0'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              scale: isInView ? 1 : 0.95
            }}
            transition={{ 
              duration: 0.8,
              delay: 0.6,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            aria-label="Send email to hello@pitchcraft.global"
          >
            HELLO@PITCHCRAFT.GLOBAL
          </motion.a>
        </motion.div>

        {/* Phone Section */}
        <motion.div
          className="mb-0 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : 50
          }}
          transition={{ 
            duration: 0.8,
            delay: 0.7,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <motion.p 
            className="text-white/60 text-base md:text-sm mb-1 md:mb-2 tracking-wide uppercase font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            PHONE US
          </motion.p>
          <motion.a
            href="https://wa.me/919987563570"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 block touch-target focus:outline-2 focus:outline-orange-500 focus:outline-offset-2 text-center contact-detail-text"
            style={{ 
              lineHeight: 1.1,
              height: 'auto',
              minHeight: '28px',
              padding: '0'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              scale: isInView ? 1 : 0.95
            }}
            transition={{ 
              duration: 0.8,
              delay: 1.0,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            aria-label="Contact us on WhatsApp at +91 99875 63570"
          >
            +91 99875 63570
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
