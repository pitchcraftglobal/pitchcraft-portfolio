import { portfolioItems } from "@/lib/portfolio-data";
import { useEffect, useState, useRef } from 'react';
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
// GENESIS project assets - 50 slides
import genesisSlide1 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.001.webp";
import genesisSlide2 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.002.webp";
import genesisSlide3 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.003.webp";
import genesisSlide4 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.004.webp";
import genesisSlide5 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.005.webp";
import genesisSlide6 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.006.webp";
import genesisSlide7 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.007.webp";
import genesisSlide8 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.008.webp";
import genesisSlide9 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.009.webp";
import genesisSlide10 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.010.webp";
import genesisSlide11 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.011.webp";
import genesisSlide12 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.012.webp";
import genesisSlide13 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.013.webp";
import genesisSlide14 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.014.webp";
import genesisSlide15 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.015.webp";
import genesisSlide16 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.016.webp";
import genesisSlide17 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.017.webp";
import genesisSlide18 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.018.webp";
import genesisSlide19 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.019.webp";
import genesisSlide20 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.020.webp";
import genesisSlide21 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.021.webp";
import genesisSlide22 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.022.webp";
import genesisSlide23 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.023.webp";
import genesisSlide24 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.024.webp";
import genesisSlide25 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.025.webp";
import genesisSlide26 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.026.webp";
import genesisSlide27 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.027.webp";
import genesisSlide28 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.028.webp";
import genesisSlide29 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.029.webp";
import genesisSlide30 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.030.webp";
import genesisSlide31 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.031.webp";
import genesisSlide32 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.032.webp";
import genesisSlide33 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.033.webp";
import genesisSlide34 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.034.webp";
import genesisSlide35 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.035.webp";
import genesisSlide36 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.036.webp";
import genesisSlide37 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.037.webp";
import genesisSlide38 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.038.webp";
import genesisSlide39 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.039.webp";
import genesisSlide40 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.040.webp";
import genesisSlide41 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.041.webp";
import genesisSlide42 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.042.webp";
import genesisSlide43 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.043.webp";
import genesisSlide44 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.044.webp";
import genesisSlide45 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.045.webp";
import genesisSlide46 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.046.webp";
import genesisSlide47 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.047.webp";
import genesisSlide48 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.048.webp";
import genesisSlide49 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.049.webp";
import genesisSlide50 from "/attached_assets/1. GENESIS Treatment_FOR WEBSITE/GENESIS Brand Launch Event_Pitch Deck_V2.050.webp";
import laMerImage from "/attached_assets/3. LA MER x ANA DE ARMAS Treatment_FOR WEBSITE/LA MER x Ana De Armas_1.webp";
import acuvueVideo from "/attached_assets/2. ACUVUE Treatment_FOR WEBSITE/ACUVUE_1.webm";
import fordImage from "/attached_assets/4. FORD - Make Your Own Normal_FOR WEBSITE/FORD - Make Your Own Normal_Treatment_Initium.001.webp";
import panteneVideo from "/attached_assets/5. PANTENE Treatment_FOR WEBSITE/PANTENE_1.webm";
import vaselineHboVideo1 from "/attached_assets/6. VASELINE x HBO Treatment_FOR WEBSITE/VXHBO_1080p_1.webm";
import bmwImage from "/attached_assets/9. BMW X3 Treatment_FOR WEBSITE/BMW X3_WARP SPEED.001.webp";
import toyotaBeyondZeroImage from "/attached_assets/11. TOYOTA - Beyond Zero_FOR WEBSITE/TOYOTA - Beyond Zero_WARP SPEED.001.webp";
import bumbleImage from "/attached_assets/12. BUMBLE Treatment_FOR WEBSITE/BUMBLE_Director's Treatment_May Apizsara_V3.001.webp";

import downyVideo from "/attached_assets/13. DOWNY Saudi Arabia_FOR WEBSITE/DOWNY_1.webm";
import f1RenaultImage from "/attached_assets/7. FORMULA 1 x RENAULT SPORT Treatment_FOR WEBSITE/FORMULA 1 : : RENAULT SPORT_Treatment_Initium.001.webp";
import olayImage from "/attached_assets/14. OLAY Treatment_FOR WEBSITE/OLAY_1.webp";

import bankOfAmericaImage from "/attached_assets/15. BANK OF AMERICA Treatment_FOR WEBSITE/BANK OF AMERICA_Director's Treatment.001.webp";
import unitedNationsPrideImage from "/attached_assets/17. UNITED NATIONS Treatment_FOR WEBSITE/UNITED NATIONS - Pride In Peace.001.webp";
import stingImage from "/attached_assets/10. STING Treatment_FOR WEBSITE/STING_1.webp";
import hitachiImage from "/attached_assets/8. HITACHI Treatment_FOR WEBSITE/HITACHI SKYLINE - Kasiti Sangkul_Director's Treatment_White.001.webp";
import tigerBeerImage from "/attached_assets/16. TIGER BEER Treatment_FOR WEBSITE/TIGER BEER - Christopher Hill_Treatment_V2.001.webp";


interface PortfolioSectionProps {
  onSelectProject: (projectId: string) => void;
}

export default function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // GENESIS project assets array
  const genesisAssets = [
    genesisSlide1, genesisSlide2, genesisSlide3, genesisSlide4, genesisSlide5,
    genesisSlide6, genesisSlide7, genesisSlide8, genesisSlide9, genesisSlide10,
    genesisSlide11, genesisSlide12, genesisSlide13, genesisSlide14, genesisSlide15,
    genesisSlide16, genesisSlide17, genesisSlide18, genesisSlide19, genesisSlide20,
    genesisSlide21, genesisSlide22, genesisSlide23, genesisSlide24, genesisSlide25,
    genesisSlide26, genesisSlide27, genesisSlide28, genesisSlide29, genesisSlide30,
    genesisSlide31, genesisSlide32, genesisSlide33, genesisSlide34, genesisSlide35,
    genesisSlide36, genesisSlide37, genesisSlide38, genesisSlide39, genesisSlide40,
    genesisSlide41, genesisSlide42, genesisSlide43, genesisSlide44, genesisSlide45,
    genesisSlide46, genesisSlide47, genesisSlide48, genesisSlide49, genesisSlide50
  ];


  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const headerY = useTransform(scrollYProgress, [0, 1], ["0px", "-30px"]);

  useEffect(() => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      setSectionTop(portfolioSection.offsetTop);
    }

    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Map project titles to specific industry genres
  const getGenre = (title: string) => {
    if (title.includes("Genesis")) return "LUXURY AUTOMOTIVE";
    if (title.includes("La Mer")) return "LUXURY BEAUTY";
    if (title.includes("ACUVUE")) return "VISION CARE";
    if (title.includes("Ford")) return "AUTOMOTIVE";
    if (title.includes("Vaseline")) return "SKINCARE";
    if (title.includes("BMW")) return "PREMIUM AUTO";
    if (title.includes("Toyota")) return "SUSTAINABLE AUTO";
    if (title.includes("BUMBLE")) return "DATING TECH";
    if (title.includes("PANTENE")) return "HAIR CARE";
    if (title.includes("DOWNY")) return "FABRIC CARE";
    if (title.includes("Formula 1")) return "MOTORSPORT";
    if (title.includes("OLAY")) return "SKINCARE";

    if (title.includes("Bank")) return "FINANCIAL";
    if (title.includes("United Nations")) return "HUMANITARIAN";
    if (title.includes("STING")) return "PERFORMANCE AUTO";
    if (title.includes("HITACHI")) return "TECH INNOVATION";
    return "BRAND CAMPAIGN";
  };

  return (
    <>
      {/* PITCH DECKS Section */}
      <section
        ref={sectionRef}
        id="portfolio" 
        className="py-16 md:py-20 relative overflow-hidden bg-black min-h-screen w-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04875) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04875) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      >
        {/* Content Container */}
        <div className="max-w-full lg:max-w-[1280px] xl:max-w-[1500px] 2xl:max-w-[1800px] mx-auto px-2 sm:px-4 md:px-6 lg:px-16 xl:px-32 2xl:px-48">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="flex items-center justify-center gap-4 mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-orange text-base md:text-lg font-light">04</span>
              <span className="text-white/60 text-xs md:text-sm uppercase tracking-widest">//PITCH DECKS</span>
            </motion.div>
            <motion.h1 
              className="text-white font-bold tracking-tight leading-none text-[24px] md:text-[clamp(3rem,8vw,70px)] mobile-title-26"
              style={{ 
                fontFamily: "'Druk Wide', sans-serif",
                fontWeight: 900
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              PITCH DECKS
            </motion.h1>
          </motion.div>

          {/* Portfolio Grid with Perfect Alignment */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {portfolioItems
              .slice(0, isMobile && !isExpanded ? 6 : portfolioItems.length)
              .map((item, index) => (
              <motion.div 
                key={item.id} 
                className="group cursor-pointer will-change-transform transform-gpu w-full h-full flex flex-col"
                style={{ minWidth: 0, maxWidth: '100%' }}
                onClick={() => onSelectProject(item.id)}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.2 + (index * 0.03),
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.08, ease: "easeOut" }
                }}
                animate={{
                  y: 0,
                  transition: { duration: 0.05, ease: "easeOut" }
                }}
              >
                {/* Project card */}
                <div 
                  className="relative overflow-hidden rounded-2xl aspect-[16/9] shadow-2xl transition-all duration-200 ease-out group-hover:shadow-3xl group-hover:shadow-orange-500/10 mb-4"
                  style={{ 
                    width: '100%', 
                    minWidth: 0,
                    background: (item.id === "pantene" || item.id === "downy-saudi") ? 'linear-gradient(135deg, #374151 0%, #111827 100%)' : '#1f2937'
                  }}
                >
                  {item.id === "acuvue" ? (
                    <video
                      src={acuvueVideo}
                      className="w-full h-full object-cover transition-all duration-150 ease-out group-hover:brightness-110 group-hover:contrast-105 group-hover:scale-105 will-change-transform transform-gpu"
                      autoPlay
                      muted
                      loop
                      playsInline
                      title="ACUVUE contact lens campaign video showcasing lifestyle and vision clarity innovation"
                    />
                  ) : item.id === "vaseline-hbo" ? (
                    <video
                      src={vaselineHboVideo1}
                      className="w-full h-full object-cover transition-all duration-150 ease-out group-hover:brightness-110 group-hover:contrast-105 group-hover:scale-105 will-change-transform transform-gpu"
                      autoPlay
                      muted
                      loop
                      playsInline
                      title="Vaseline x HBO collaboration campaign video featuring skincare storytelling and premium entertainment partnership content"
                    />
                  ) : item.id === "pantene" ? (
                    <video
                      src={panteneVideo}
                      className="w-full h-full object-cover transition-all duration-150 ease-out group-hover:brightness-110 group-hover:contrast-105 group-hover:scale-105 will-change-transform transform-gpu"
                      autoPlay
                      muted
                      loop
                      playsInline
                      title="Pantene hair care campaign video showcasing beautiful hair transformation and styling with golden aesthetic elements"
                    />
                  ) : item.id === "downy-saudi" ? (
                    <video
                      src={downyVideo}
                      className="w-full h-full object-contain transition-all duration-150 ease-out group-hover:brightness-110 group-hover:contrast-105 group-hover:scale-105 will-change-transform transform-gpu"
                      autoPlay
                      muted
                      loop
                      playsInline
                      title="Downy Saudi Arabia fabric care campaign video featuring softness, freshness, and premium laundry care lifestyle"
                    />
                  ) : (
                    <img
                      src={item.id === "genesis" ? genesisSlide1 : item.id === "la-mer" ? laMerImage : item.id === "ford" ? fordImage : item.id === "bmw-x3" ? bmwImage : item.id === "toyota-beyond-zero" ? toyotaBeyondZeroImage : item.id === "bumble" ? bumbleImage : item.id === "f1-renault" ? f1RenaultImage : item.id === "olay" ? olayImage : item.id === "bank-of-america" ? bankOfAmericaImage : item.id === "united-nations-pride-in-peace" ? unitedNationsPrideImage : item.id === "sting" ? stingImage : item.id === "hitachi" ? hitachiImage : item.id === "tiger-beer" ? tigerBeerImage : item.image}
                      alt={
                        item.id === "genesis" ? "Genesis luxury automotive brand launch event pitch deck presentation featuring elegant vehicle design and premium branding" :
                        item.id === "la-mer" ? "La Mer x Ana De Armas luxury beauty campaign director's treatment showcasing atmospheric ocean scenes and premium skincare aesthetic" :
                        item.id === "ford" ? "Ford Make Your Own Normal advertising campaign treatment featuring authentic lifestyle photography and innovative vehicle positioning" :
                        item.id === "bmw-x3" ? "BMW X3 Warp Speed automotive campaign featuring high-performance vehicle cinematography in dramatic canyon landscape setting" :
                        item.id === "toyota-beyond-zero" ? "Toyota Beyond Zero sustainability campaign showcasing environmental innovation with wind turbines and eco-friendly vehicle technology" :
                        item.id === "bumble" ? "Bumble Make the First Move dating app campaign featuring empowering relationship scenarios and diverse authentic connections" :
                        item.id === "f1-renault" ? "Formula 1 Renault Sport motorsport campaign featuring high-speed yellow racing car with dynamic motion blur effects" :
                        item.id === "olay" ? "Olay skincare campaign director's treatment featuring confident portrait photography with red gradient overlay and premium beauty aesthetic" :

                        item.id === "bank-of-america" ? "Bank of America financial services campaign director's treatment showcasing trust, reliability, and professional financial expertise" :
                        item.id === "united-nations-pride-in-peace" ? "United Nations Pride in Peace humanitarian campaign featuring UN peacekeeping missions and global cooperation initiatives" :
                        item.id === "sting" ? "Sting automotive performance campaign for Nissan featuring high-performance vehicle cinematography and dynamic driving sequences" :
                        item.id === "hitachi" ? "Hitachi Skyline technology innovation campaign by director Kasiti Sangkul featuring cutting-edge technology and urban infrastructure" :
                        item.id === "tiger-beer" ? "Tiger Beer The Uncaged campaign by director Christopher Hill for Heineken Asia Pacific featuring vibrant nightlife and music culture" :
                        `${item.title} campaign project showcasing professional visual design and creative storytelling for brand communication`
                      }
                      className={`w-full h-full ${item.id === "f1-renault" || item.id === "olay" ? "object-fill" : item.id === "tiger-beer" || item.id === "downy-saudi" ? "object-contain" : "object-cover"} transition-all duration-150 ease-out group-hover:brightness-110 group-hover:contrast-105 group-hover:scale-105 will-change-transform transform-gpu`}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                </div>
                
                {/* Title and View button below image */}
                <div className="flex justify-between items-center">
                  <div className="flex-1 min-w-0">
                    <h3 className="portfolio-card-title text-white text-lg md:text-2xl font-bold uppercase tracking-wide truncate">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span 
                      className="text-sm font-medium uppercase tracking-wider transition-all duration-200 ease-out"
                      style={{ color: 'rgb(251, 146, 60)' }}
                    >
                      View
                    </span>
                    <svg 
                      width="18" 
                      height="18" 
                      fill="none" 
                      stroke="rgb(251, 146, 60)" 
                      viewBox="0 0 24 24" 
                      className="transition-all duration-100 ease-out lg:group-hover:translate-x-2 lg:group-hover:scale-110"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile View More/Collapse Button */}
          {isMobile && portfolioItems.length > 6 && (
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-8 py-3 bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 hover:text-orange-300 
                          border border-orange-500/30 hover:border-orange-500/50 rounded-full font-medium
                          transition-all duration-300 ease-out backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isExpanded ? 'Collapse' : 'View More'}
              </motion.button>
            </motion.div>
          )}

          {/* Project count indicator with Animation */}
          <motion.div 
            className="text-center mt-16 md:mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(34, 197, 94, 0.2)"
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-white/70 text-sm font-medium">
                {portfolioItems.length} projects completed
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}