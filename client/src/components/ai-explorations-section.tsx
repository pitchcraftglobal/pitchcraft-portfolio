import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import AI Exploration images
import aiKeyframe1 from "/attached_assets/1. u3727262279_hyper-realistic_profile_portrait_of_a_woman_dreamy_5a741d9d-a6ba-484d-9820-cdcec72a9948 copy (convert.io)_1751216195951.webp";
import aiKeyframe2 from "/attached_assets/2. u3727262279_An_ultra-realistic_fashion_editorial_portrait_of_a_9016c294-6c5d-43c2-b4fd-4d59b9255e4b (convert.io)_1751216195951.webp";
import aiKeyframe3 from "/attached_assets/3. u3727262279_cinematic_medium_shot_of_a_futuristic_race_car_driv_2a2b4c05-85f8-420c-9a42-6a312df9ea96 (convert.io)_1751216195951.webp";
import aiKeyframe4 from "/attached_assets/4. u3727262279_cinematic_shot_inside_a_vast_volcanic_cavern_foregr_2d734951-de98-4d2c-aa14-65cf0a2e44a6 (convert.io)_1751216195951.webp";
import aiKeyframe5 from "/attached_assets/5. u3727262279_hyper-realistic_Formula_1_race_car_in_a_dark_garage_1048d973-fca2-48ca-bd8d-aaca0fedd1d1 (convert.io)_1751216195952.webp";
import aiKeyframe6 from "/attached_assets/6. u3727262279_Medium_low-angle_shot_of_a_menacing_warrior_wearing_6a6627d3-e68e-43a1-a007-2499517e4177 (convert.io)_1751216195952.webp";
import aiKeyframe7 from "/attached_assets/7. u3727262279_medium_side_profile_shot_of_two_male_models_and_one_0eba7985-2f7e-4b87-80b3-89960fe928bf copy (convert.io)_1751216195952.webp";
import aiKeyframe8 from "/attached_assets/8. u3727262279_ultra-realistic_cinematic_action_shot_of_a_male_sur_8d55b64b-3420-45a6-9f5d-55079c871c69 (convert.io)_1751216195952.webp";
import aiKeyframe9 from "/attached_assets/9. u3727262279_Ultra-realistic_fashion_editorial_scene_set_in_a_su_6189358e-b908-475e-9266-f1e30a3079d0 (convert.io)_1751216195952.webp";
import aiKeyframe10 from "/attached_assets/10. u3727262279_a_futuristic_humanoid_combat_android_holding_a_high_8f43a60e-6b3e-4f6b-a673-208034e0a0a7 copy (convert.io)_1751216195952.webp";
import aiKeyframe11 from "/attached_assets/11. u3727262279_A_gorgeous_Indian_bride_--chaos_5_--ar_169_--raw_--_00298052-486d-4a7a-93f9-61a24a669619 (convert.io)_1751216195952.webp";
import aiKeyframe12 from "/attached_assets/12. u3727262279_A_medium_low-angle_shot_of_a_powerful_Indian_warrio_08492cb6-2519-4420-8dd1-a3c3b20d5a45 copy (convert.io)_1751216195953.webp";
import aiKeyframe13 from "/attached_assets/13. u3727262279_ultra-realistic_wide_cinematic_shot_of_a_futuristic_c2bf006b-b911-41a4-9870-2e34d5189398 copy (convert.io)_1751216667397.webp";
import aiKeyframe14 from "/attached_assets/14. u3727262279_A_towering_asymmetrical_mech_suit_sculpted_entirely_18ee9b12-34e3-490e-b1d1-aaf03c5eddfe copy (convert.io)_1751216667397.webp";
import aiKeyframe15 from "/attached_assets/15. u3727262279_cinematic_portrait_of_a_woman_seated_gracefully_in_28aa5b92-87a5-4f6a-89e1-db861e9bec80 copy (convert.io)_1751216667397.webp";
import aiKeyframe16 from "/attached_assets/16. u3727262279_epic_wide-angle_cinematic_shot_of_a_lone_samurai_in_06d39589-d375-44bc-bd1f-7b8aacf8062e copy (convert.io)_1751216667398.webp";
import aiKeyframe17 from "/attached_assets/17. u3727262279_A_gorgeous_Indian_bride_--chaos_5_--ar_169_--raw_--_d452c4fa-cc2a-4cea-b62c-7729c9bf761d (convert.io)_1751216667398.webp";
import aiKeyframe18 from "/attached_assets/18. u3727262279_cinematic_portrait_of_a_woman_seated_on_a_massive_b_cc667cbd-9b16-4b56-afbd-95520d73ee67 (convert.io)_1751216667398.webp";
import aiKeyframe19 from "/attached_assets/19. u3727262279_Hyper-stylized_fashion_editorial_scene_set_in_a_sur_6b3c7268-f50f-4cbb-b2c3-63bd3044db3c copy (convert.io)_1751216667398.webp";
import aiKeyframe20 from "/attached_assets/20. u3727262279_medium_shot_low-angle_cinematic_view_of_a_powerful_84fcb4ce-386a-45a0-9f73-2d163996ffb3 (convert.io)_1751216667398.webp";
import aiKeyframe21 from "/attached_assets/21. u3727262279_epic_wide-angle_cinematic_shot_of_a_lone_samurai_in_9dfd557a-0823-4a53-8677-7eab50faba2a (convert.io)_1751216667398.webp";
import aiKeyframe22 from "/attached_assets/22. u3727262279_Ultra-realistic_fashion_editorial_low-angle_wide_sh_3c7ab63f-8dad-4117-8d9f-689f38b3c24d (convert.io)_1751216667398.webp";
import aiKeyframe23 from "/attached_assets/23. u3727262279_Ultra-realistic_fashion_editorial_low-angle_wide_sh_de2ba65e-333e-491d-8a12-d6430311cab6 (convert.io)_1751216667398.webp";
import aiKeyframe24 from "/attached_assets/24. u3727262279_medium_shot_low-angle_cinematic_view_of_a_powerful_a0d0ee58-c8da-4213-aaf9-8d0cd607b9e7 (convert.io)_1751216667399.webp";
import aiKeyframe25 from "/attached_assets/25. u3727262279_Ultra-realistic_fashion_editorial_low-angle_wide_sh_ea34b262-d729-403f-ac26-c93e2e8ed3b0 (convert.io)_1751216667399.webp";

// AI Explorations data
const aiKeyframes = [
  { id: 1, image: aiKeyframe1, category: "PORTRAIT" },
  { id: 2, image: aiKeyframe2, category: "FASHION" },
  { id: 3, image: aiKeyframe3, category: "AUTOMOTIVE" },
  { id: 4, image: aiKeyframe4, category: "ENVIRONMENT" },
  { id: 5, image: aiKeyframe5, category: "MOTORSPORT" },
  { id: 6, image: aiKeyframe6, category: "CHARACTER" },
  { id: 7, image: aiKeyframe7, category: "FASHION" },
  { id: 8, image: aiKeyframe8, category: "ACTION" },
  { id: 9, image: aiKeyframe9, category: "AUTOMOTIVE" },
  { id: 10, image: aiKeyframe10, category: "ANDROID" },
  { id: 11, image: aiKeyframe11, category: "PORTRAIT" },
  { id: 12, image: aiKeyframe12, category: "CHARACTER" },
  { id: 13, image: aiKeyframe13, category: "ACTION" },
  { id: 14, image: aiKeyframe14, category: "SCI-FI" },
  { id: 15, image: aiKeyframe15, category: "FASHION" },
  { id: 16, image: aiKeyframe16, category: "ACTION" },
  { id: 17, image: aiKeyframe17, category: "PORTRAIT" },
  { id: 18, image: aiKeyframe18, category: "FASHION" },
  { id: 19, image: aiKeyframe19, category: "AUTOMOTIVE" },
  { id: 20, image: aiKeyframe20, category: "CHARACTER" },
  { id: 21, image: aiKeyframe21, category: "ACTION" },
  { id: 22, image: aiKeyframe22, category: "FASHION" },
  { id: 23, image: aiKeyframe23, category: "FASHION" },
  { id: 24, image: aiKeyframe24, category: "CHARACTER" },
  { id: 25, image: aiKeyframe25, category: "FASHION" }
];

export default function AIExplorationsSection() {
  const [selectedKeyframe, setSelectedKeyframe] = useState<number | null>(null);

  return (
    <>
      {/* AI EXPLORATIONS Section */}
      <section 
        id="ai-explorations" 
        className="relative bg-black py-16 md:py-20 w-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04875) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04875) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      >
        <div className="max-w-full lg:max-w-[1280px] xl:max-w-[1500px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-48 relative overflow-hidden">
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
              <span className="text-orange text-base md:text-lg font-light">06</span>
              <span className="text-white/60 text-xs md:text-sm uppercase tracking-widest">//AI EXPLORATIONS</span>
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
              AI EXPLORATIONS
            </motion.h1>
          </motion.div>

          {/* AI Explorations Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 w-full overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {aiKeyframes.map((keyframe, index) => (
              <motion.div
                key={keyframe.id}
                className="group cursor-pointer will-change-transform transform-gpu w-full h-full flex flex-col"
                style={{ minWidth: 0, maxWidth: '100%' }}
                onClick={() => setSelectedKeyframe(keyframe.id)}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.6 + (index * 0.1),
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
                {/* Exploration card */}
                <div className="relative rounded-2xl aspect-[16/10] shadow-2xl transition-all duration-200 ease-out group-hover:shadow-3xl group-hover:shadow-orange-500/10 overflow-hidden"
                     style={{ width: '100%', minWidth: 0, isolation: 'isolate' }}>
                  <img
                    src={keyframe.image}
                    alt={`AI Exploration ${keyframe.id}: ${keyframe.category.toLowerCase()} themed AI-generated cinematic keyframe showcasing ${
                      keyframe.category === "PORTRAIT" ? "hyper-realistic portrait photography with dramatic lighting and professional composition" :
                      keyframe.category === "FASHION" ? "ultra-realistic fashion editorial scene with high-end styling and sophisticated aesthetic" :
                      keyframe.category === "AUTOMOTIVE" ? "cinematic automotive photography featuring futuristic vehicles and dynamic action sequences" :
                      keyframe.category === "ENVIRONMENT" ? "atmospheric environmental scenes with volcanic landscapes and dramatic natural settings" :
                      keyframe.category === "MOTORSPORT" ? "high-speed Formula 1 racing car photography with motion blur and professional garage lighting" :
                      keyframe.category === "CHARACTER" ? "powerful character portraits featuring warriors, models, and dramatic personality studies" :
                      keyframe.category === "ACTION" ? "dynamic action cinematography with surfers, athletes, and high-energy movement sequences" :
                      keyframe.category === "ANDROID" ? "futuristic sci-fi scenes with advanced technology, mech suits, and cyberpunk aesthetics" :
                      "creative visual storytelling and professional cinematography techniques"
                    }`}
                    className="w-full h-full object-cover object-center transition-all duration-150 ease-out group-hover:brightness-110 group-hover:contrast-105 group-hover:scale-105 will-change-transform transform-gpu"
                    style={{ minHeight: '100%' }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-150" />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                    <span className="inline-block px-3 py-1 bg-orange-500/20 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      {keyframe.category}
                    </span>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Explorations count indicator */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.9,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 50px rgba(251, 146, 60, 0.3)"
              }}
            >
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
              <p className="text-white/70 text-sm font-medium">
                {aiKeyframes.length} AI explorations generated
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI Keyframe Modal */}
      <AnimatePresence>
        {selectedKeyframe && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedKeyframe(null)}
          >
            <div className="max-w-6xl mx-auto relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                {(() => {
                  const keyframe = aiKeyframes.find(k => k.id === selectedKeyframe);
                  return keyframe ? (
                    <>
                      <span className="inline-block px-3 py-1 bg-orange-500/20 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        {keyframe.category}
                      </span>
                      <h2 className="text-white text-xl font-semibold">
                        AI Exploration #{keyframe.id}
                      </h2>
                    </>
                  ) : null;
                })()}
              </div>
              
              <button
                onClick={() => setSelectedKeyframe(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Image */}
              <div className="flex items-center justify-center">
                {(() => {
                  const keyframe = aiKeyframes.find(k => k.id === selectedKeyframe);
                  return keyframe ? (
                    <motion.img
                      key={keyframe.id}
                      src={keyframe.image}
                      alt={`AI Exploration ${keyframe.id}`}
                      className="max-w-full max-h-[60vh] object-contain rounded-lg"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  ) : null;
                })()}
              </div>
              
              {/* Footer */}
              <div className="flex items-center justify-center mt-4">
                {(() => {
                  const keyframe = aiKeyframes.find(k => k.id === selectedKeyframe);
                  return keyframe ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="text-white/70 text-sm"
                    >
                      AI-generated exploration • {keyframe.category.toLowerCase()} visualization
                    </motion.div>
                  ) : null;
                })()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}