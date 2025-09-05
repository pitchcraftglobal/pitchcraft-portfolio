import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// Real UI/UX project data
const uiuxProjects = [
  {
    id: "futurefirst-families",
    title: "FUTUREFIRST FAMILIES",
    category: "AI LEARNING",
    description: "A civic engagement platform empowering parents to take monthly actions on educational reform through gamified, user-friendly design tailored for non-tech-savvy users.",
    industry: "Civic Platform",
    services: "Web Design & Development",
    duration: "4 Weeks",
    type: "Web Platform"
  },
  {
    id: "liffo", 
    title: "LIFFO",
    category: "HEALTHCARE PLATFORM",
    description: "A unified emergency health services platform providing fast, reliable access to critical healthcare including ambulance booking, doctor consultations, lab tests, and medicine delivery.",
    industry: "Healthcare Platform",
    services: "Mobile App Design",
    duration: "13 Weeks",
    type: "Mobile App"
  }
];

interface UIUXSectionProps {
  onSelectProject?: (projectId: string) => void;
}

export default function UIUXSection({ onSelectProject }: UIUXSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="uiux-design" 
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
      <div className="max-w-full lg:max-w-[1280px] xl:max-w-[1500px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
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
            <span className="text-orange text-base md:text-lg font-light">05</span>
            <span className="text-white/60 text-xs md:text-sm uppercase tracking-widest">//UI/UX DESIGN</span>
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
            UI/UX DESIGN
          </motion.h1>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {uiuxProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="group cursor-pointer will-change-transform transform-gpu w-full h-full flex flex-col"
              style={{ minWidth: 0, maxWidth: '100%' }}
              onClick={() => window.open('https://karnkalaa.in/', '_blank')}
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
              {/* Project card - Square format */}
              <div 
                className="relative overflow-hidden rounded-2xl aspect-square shadow-2xl transition-all duration-200 ease-out group-hover:shadow-3xl group-hover:shadow-orange-500/10 mb-4"
                style={{ 
                  width: '100%', 
                  minWidth: 0
                }}
              >
                {/* Project thumbnail */}
                <img
                  src={project.id === "futurefirst-families" 
                    ? "/attached_assets/FutureFirstFamilies_thumbnail_1756583012098.png"
                    : "/attached_assets/Liffo_thumbnail_1756583030965.png"
                  }
                  alt={project.id === "futurefirst-families" 
                    ? "FutureFirst Families civic engagement platform web design showcasing educational reform interface"
                    : "Liffo emergency healthcare mobile app design featuring unified health services platform"
                  }
                  className="w-full h-full object-cover transition-all duration-150 ease-out group-hover:brightness-110 group-hover:contrast-105 group-hover:scale-105 will-change-transform transform-gpu"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>

              {/* Project info */}
              <div className="flex justify-between items-start mb-3 w-full overflow-hidden">
                <div className="flex-1 min-w-0">
                  <div className="text-orange-400 text-xs md:text-sm font-medium mb-1 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-white font-bold text-base md:text-lg leading-tight mb-2 tracking-tight truncate" 
                      style={{ fontFamily: "'Druk Wide', sans-serif" }}>
                    {project.title}
                  </h3>
                </div>
                
                {/* View button */}
                <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                  <span className="text-orange text-sm font-medium transition-colors duration-150 group-hover:text-orange-300">
                    View
                  </span>
                  <svg 
                    className="w-4 h-4 text-orange transition-all duration-150 group-hover:text-orange-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project count indicator */}
        <motion.div
          className="flex items-center gap-3 mt-8 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(34, 197, 94, 0.2)",
            transition: { duration: 0.2 }
          }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <p className="text-white/70 text-sm font-medium">
            {uiuxProjects.length} UI/UX featured projects
          </p>
        </motion.div>
      </div>
    </section>
  );
}