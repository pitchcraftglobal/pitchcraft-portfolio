import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Import slideshow images
import image1 from "/attached_assets/1. u3727262279_hyper-realistic_profile_portrait_of_a_woman_dreamy_5a741d9d-a6ba-484d-9820-cdcec72a9948 copy (convert.io)_1751216195951.webp";
import image2 from "/attached_assets/2. u3727262279_An_ultra-realistic_fashion_editorial_portrait_of_a_9016c294-6c5d-43c2-b4fd-4d59b9255e4b (convert.io)_1751216195951.webp";
import image3 from "/attached_assets/3. u3727262279_cinematic_medium_shot_of_a_futuristic_race_car_driv_2a2b4c05-85f8-420c-9a42-6a312df9ea96 (convert.io)_1751216195951.webp";
import image4 from "/attached_assets/4. u3727262279_cinematic_shot_inside_a_vast_volcanic_cavern_foregr_2d734951-de98-4d2c-aa14-65cf0a2e44a6 (convert.io)_1751216195951.webp";
import image5 from "/attached_assets/5. u3727262279_hyper-realistic_Formula_1_race_car_in_a_dark_garage_1048d973-fca2-48ca-bd8d-aaca0fedd1d1 (convert.io)_1751216195952.webp";
import image6 from "/attached_assets/6. u3727262279_Medium_low-angle_shot_of_a_menacing_warrior_wearing_6a6627d3-e68e-43a1-a007-2499517e4177 (convert.io)_1751216195952.webp";
import image7 from "/attached_assets/7. u3727262279_medium_side_profile_shot_of_two_male_models_and_one_0eba7985-2f7e-4b87-80b3-89960fe928bf copy (convert.io)_1751216195952.webp";
import image8 from "/attached_assets/8. u3727262279_ultra-realistic_cinematic_action_shot_of_a_male_sur_8d55b64b-3420-45a6-9f5d-55079c871c69 (convert.io)_1751216195952.webp";
import image9 from "/attached_assets/9. u3727262279_Ultra-realistic_fashion_editorial_scene_set_in_a_su_6189358e-b908-475e-9266-f1e30a3079d0 (convert.io)_1751216195952.webp";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Slideshow images array
  const slideshowImages = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9
  ];

  // Auto-advance slideshow every 3 seconds
  useEffect(() => {    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  // Parallax effects for content
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section id="hero" ref={sectionRef} className="hero-section">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slideshowImages.map((image, index) => {
          const isActive = currentImageIndex === index;
          
          return (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <img
                src={image}
                alt={`Cinematic visual design portfolio image ${index + 1} showcasing creative work`}
                className="w-full h-full object-cover hero-slideshow-image"
                style={{ 
                  filter: 'brightness(0.7) contrast(1.1) saturate(1.1)'
                }}
                onLoad={() => {}}
                onError={() => {}}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Content Container - Using responsive CSS classes */}
      <div className="hero-content-container">
          {/* PITCHCRAFT Text - Main hero element with exclusion blend */}
          <h1 className="hero-title hero-text-blend">
            PITCHCRAFT
          </h1>

          {/* Services text positioned below PITCHCRAFT */}
          <div className="hero-services">
            <span className="hidden md:inline">
              PITCH DESIGN • UI/UX DESIGN • VISUAL RESEARCH • AI EXPLORATIONS
            </span>
            <div className="flex flex-col md:hidden text-center space-y-1">
              <span>PITCH DESIGN</span>
              <span>UI/UX DESIGN</span>
              <span>VISUAL RESEARCH</span>
              <span>AI EXPLORATIONS</span>
            </div>
          </div>
      </div>

      {/* Desktop Plus Signs - Hidden on mobile via CSS */}
      <div className="decorative-plus absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-8 left-8 font-thin text-white opacity-60 text-4xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
          +
        </div>
        <div className="absolute top-16 right-8 font-thin text-white opacity-60 text-5xl xl:text-7xl 2xl:text-8xl">
          +
        </div>
        <div className="absolute top-1/3 left-4 font-thin text-white opacity-60 text-3xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
          +
        </div>
        <div className="absolute bottom-1/3 right-4 font-thin text-white opacity-60 text-4xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
          +
        </div>
        <div className="absolute bottom-8 left-8 font-thin text-white opacity-60 text-5xl xl:text-7xl 2xl:text-8xl">
          +
        </div>
        <div className="absolute top-[60vh] left-[15vw] font-thin text-white opacity-60 text-2xl xl:text-4xl 2xl:text-5xl">
          +
        </div>
        <div className="absolute bottom-[15vh] right-[12vw] font-thin text-white opacity-60 text-3xl xl:text-5xl 2xl:text-6xl">
          +
        </div>
      </div>
    </section>
  );
}