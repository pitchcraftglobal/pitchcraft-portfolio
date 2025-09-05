import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Hero slideshow images
const heroImages = [
  '/1. u3727262279_hyper-realistic_profile_portrait_of_a_woman_dreamy_5a741d9d-a6ba-484d-9820-cdcec72a9948 copy (convert.io)_1751216195951.webp',
  '/2. u3727262279_An_ultra-realistic_fashion_editorial_portrait_of_a_9016c294-6c5d-43c2-b4fd-4d59b9255e4b (convert.io)_1751216195951.webp',
  '/3. u3727262279_cinematic_medium_shot_of_a_futuristic_race_car_driv_2a2b4c05-85f8-420c-9a42-6a312df9ea96 (convert.io)_1751216195951.webp',
  '/4. u3727262279_cinematic_shot_inside_a_vast_volcanic_cavern_foregr_2d734951-de98-4d2c-aa14-65cf0a2e44a6 (convert.io)_1751216195951.webp',
  '/5. u3727262279_hyper-realistic_Formula_1_race_car_in_a_dark_garage_1048d973-fca2-48ca-bd8d-aaca0fedd1d1 (convert.io)_1751216195952.webp',
  '/6. u3727262279_Medium_low-angle_shot_of_a_menacing_warrior_wearing_6a6627d3-e68e-43a1-a007-2499517e4177 (convert.io)_1751216195952.webp',
  '/7. u3727262279_medium_side_profile_shot_of_two_male_models_and_one_0eba7985-2f7e-4b87-80b3-89960fe928bf copy (convert.io)_1751216195952.webp',
  '/8. u3727262279_ultra-realistic_cinematic_action_shot_of_a_male_sur_8d55b64b-3420-45a6-9f5d-55079c871c69 (convert.io)_1751216195952.webp',
  '/9. u3727262279_Ultra-realistic_fashion_editorial_scene_set_in_a_su_6189358e-b908-475e-9266-f1e30a3079d0 (convert.io)_1751216195952.webp'
];

// Plus sign positions
const plusSigns = [
  { position: 'top-[15vh] left-[8vw]', delay: 2.8, rotation: 25 },
  { position: 'top-[20vh] right-[12vw]', delay: 3.2, rotation: -45 },
  { position: 'top-[60vh] left-[15vw]', delay: 3.6, rotation: 15 },
  { position: 'bottom-[25vh] right-[10vw]', delay: 4.0, rotation: -25 },
  { position: 'bottom-[15vh] left-[20vw]', delay: 4.2, rotation: 85 },
  { position: 'top-[40vh] right-[5vw]', delay: 4.4, rotation: -60 },
  { position: 'bottom-[35vh] left-[8vw]', delay: 4.6, rotation: 35 }
];

export default function HeroSectionFixed() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Check if device is mobile to reduce animation frequency
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;
    const slideInterval = isMobile ? 5000 : 3000; // Slower on mobile to reduce overhead

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const next = (prev + 1) % heroImages.length;
        return next;
      });
    }, slideInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => {
          const isActive = index === currentImageIndex;
          return (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ zIndex: 1 }}
            >
              <img
                src={image}
                alt={`Slideshow ${index + 1}`}
                className="w-full h-full object-cover"
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

      {/* Fixed Content Container */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center">
        
        {/* Supporting Text - Top */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="fixed-tagline"
        >
          Where Mood meets Momentum
        </motion.div>

        {/* PITCHCRAFT Main Title */}
        <motion.h1
          initial={{ y: "30%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.5,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="fixed-title"
          style={{ 
            mixBlendMode: 'exclusion',
            fontFamily: 'Druk Wide, sans-serif',
            zIndex: 25
          }}
        >
          PITCHCRAFT
        </motion.h1>

        {/* Supporting Text - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
          className="fixed-services"
        >
          PITCH DESIGN • VISUAL RESEARCH • AI EXPLORATIONS
        </motion.div>
      </div>

      {/* New Thin Plus Icons with Glitch Animation */}
      <motion.div
        className="absolute top-[15vh] left-[8vw] pointer-events-none select-none"
        style={{ zIndex: 35 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 25 }}
        transition={{ duration: 1.2, delay: 2.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div 
          className="new-plus-icon"
          style={{
            fontSize: '1.6rem',
            fontWeight: '100',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            color: '#ffffff',
            lineHeight: '1',
            animation: 'glitch 4s infinite 4.8s',
            transform: 'rotate(25deg)',
            ['--plus-rotation' as any]: '25deg'
          }}
        >
          +
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[20vh] right-[12vw] pointer-events-none select-none"
        style={{ zIndex: 35 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: -45 }}
        transition={{ duration: 1.2, delay: 3.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div 
          className="new-plus-icon"
          style={{
            fontSize: '1.6rem',
            fontWeight: '100',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            color: '#ffffff',
            lineHeight: '1',
            animation: 'glitch 4s infinite 5.2s',
            transform: 'rotate(-45deg)',
            ['--plus-rotation' as any]: '-45deg'
          }}
        >
          +
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[60vh] left-[15vw] pointer-events-none select-none"
        style={{ zIndex: 35 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 15 }}
        transition={{ duration: 1.2, delay: 3.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div 
          className="new-plus-icon"
          style={{
            fontSize: '1.6rem',
            fontWeight: '100',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            color: '#ffffff',
            lineHeight: '1',
            animation: 'glitch 4s infinite 5.6s',
            transform: 'rotate(15deg)',
            ['--plus-rotation' as any]: '15deg'
          }}
        >
          +
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[25vh] right-[10vw] pointer-events-none select-none"
        style={{ zIndex: 35 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: -25 }}
        transition={{ duration: 1.2, delay: 4.0, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div 
          className="new-plus-icon"
          style={{
            fontSize: '1.6rem',
            fontWeight: '100',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            color: '#ffffff',
            lineHeight: '1',
            animation: 'glitch 4s infinite 6.0s',
            transform: 'rotate(-25deg)',
            ['--plus-rotation' as any]: '-25deg'
          }}
        >
          +
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[15vh] left-[20vw] pointer-events-none select-none"
        style={{ zIndex: 35 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 85 }}
        transition={{ duration: 1.2, delay: 4.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div 
          className="new-plus-icon"
          style={{
            fontSize: '1.6rem',
            fontWeight: '100',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            color: '#ffffff',
            lineHeight: '1',
            animation: 'glitch 4s infinite 6.2s',
            transform: 'rotate(85deg)',
            ['--plus-rotation' as any]: '85deg'
          }}
        >
          +
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[40vh] right-[5vw] pointer-events-none select-none"
        style={{ zIndex: 35 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: -60 }}
        transition={{ duration: 1.2, delay: 4.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div 
          className="new-plus-icon"
          style={{
            fontSize: '1.6rem',
            fontWeight: '100',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            color: '#ffffff',
            lineHeight: '1',
            animation: 'glitch 4s infinite 6.4s',
            transform: 'rotate(-60deg)',
            ['--plus-rotation' as any]: '-60deg'
          }}
        >
          +
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[35vh] left-[8vw] pointer-events-none select-none"
        style={{ zIndex: 35 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 35 }}
        transition={{ duration: 1.2, delay: 4.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div 
          className="new-plus-icon"
          style={{
            fontSize: '1.6rem',
            fontWeight: '100',
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            color: '#ffffff',
            lineHeight: '1',
            animation: 'glitch 4s infinite 6.6s',
            transform: 'rotate(35deg)',
            ['--plus-rotation' as any]: '35deg'
          }}
        >
          +
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 2.5,
            ease: [0.215, 0.61, 0.355, 1]
          }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-white text-center"
          >
            <div className="text-sm font-light mb-2">Scroll to explore</div>
            <div className="text-2xl">↓</div>
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  );
}