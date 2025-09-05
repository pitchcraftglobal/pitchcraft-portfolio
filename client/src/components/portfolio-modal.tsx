import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronUp, ChevronDown } from "lucide-react";
import { type PortfolioItem } from "@/lib/portfolio-data";

interface PortfolioModalProps {
  project: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PortfolioModal({ project, isOpen, onClose }: PortfolioModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const scrollPositionRef = useRef<number>(0);

  if (!project) return null;

  const projectSlides = project.assets || [project.image];

  // Prevent body scroll and preserve scroll position
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
      
      // Prevent scrolling but don't change visual position
      document.body.style.overflow = 'hidden';
    } else {
      // Restore when modal is closed - ensure it's always restored
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    }

    // Cleanup function - force restore scrolling
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // Additional safety cleanup on component unmount
  useEffect(() => {
    return () => {
      // Ensure scrolling is always restored when component unmounts
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col w-full h-screen bg-black pt-16 lg:pt-20">
          {/* Minimal Header */}
          <div className="flex-shrink-0 bg-black border-b border-gray-800">
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <h1 className="text-xl md:text-2xl font-space font-bold text-white tracking-wider uppercase">
                  {project.title}
                </h1>
                <p className="text-xs text-gray-400 mt-0.5 font-mono uppercase tracking-widest">
                  {project.category}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Close portfolio detail"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto overscroll-contain modal-scroll-container" style={{ height: 'calc(100vh - 120px)' }}>
            <div className="max-w-7xl mx-auto px-6 pb-16">
              {/* Project Info Section - Properly Aligned */}
              <motion.div
                className="mb-8 border-b border-gray-800/50 pb-8 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {/* Project Meta Grid - Better Aligned */}
                <div className="grid grid-cols-3 gap-12 mb-8">
                  <div>
                    <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                      Brand
                    </h3>
                    <p className="text-white font-space text-sm font-medium">{project.brand}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                      Industry
                    </h3>
                    <p className="text-white font-space text-sm font-medium">{project.industry}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                      Duration
                    </h3>
                    <p className="text-white font-space text-sm font-medium">{project.duration}</p>
                  </div>
                </div>
                
                {/* Description */}
                <div className="grid grid-cols-1">
                  <div>
                    <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">
                      Project Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm font-light">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Images Grid - 2x2 Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectSlides.map((slide, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Container preserving original aspect ratio */}
                    <div className="w-full">
                      {slide.endsWith('.webm') || slide.endsWith('.mp4') ? (
                        <video
                          src={slide}
                          className="w-full h-auto rounded-lg shadow-2xl object-contain"
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{ maxHeight: '70vh' }}
                          onError={() => {}}
                        />
                      ) : (
                        <img
                          src={slide}
                          alt={`${project.title} - Slide ${index + 1}`}
                          className="w-full h-auto rounded-lg shadow-2xl object-contain"
                          style={{ maxHeight: '70vh' }}
                          onError={() => {}}
                          onLoad={() => {}}
                        />
                      )}
                    </div>
                    
                    {/* Image number overlay */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <span className="text-white text-xs font-mono font-medium">
                        {index + 1}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}