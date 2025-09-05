import { useEffect, useState } from "react";
import eyeCursorImage from "/attached_assets/Eye Cursor_1750769093814.png";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device is desktop (≥1024px) and not touch device
    const checkDesktop = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isWideScreen = window.innerWidth >= 1024;
      const hasHoverCapability = window.matchMedia('(hover: hover)').matches;
      const hasPointerCapability = window.matchMedia('(pointer: fine)').matches;
      
      setIsDesktop(isWideScreen && !hasTouch && hasHoverCapability && hasPointerCapability);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // Don't attach listeners on mobile/tablet
    
    // Double-check screen size before attaching listeners
    if (window.innerWidth < 1024) return;
    
    const updateMousePosition = (e: MouseEvent) => {
      // Additional check during mousemove
      if (window.innerWidth < 1024) return;
      
      // Optimized update with controlled animation frame for smooth cursor movement
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = () => {
      if (window.innerWidth >= 1024) setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
      if (window.innerWidth >= 1024) setIsHovering(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .service-card, .portfolio-item, h1, h2, h3, h4, h5, h6, p, span');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isDesktop]);

  // Only render cursor on desktop devices
  if (!isDesktop) return null;

  return (
    <div
      className="fixed pointer-events-none z-[99999] hidden lg:block"
      style={{ 
        mixBlendMode: 'exclusion',
        left: mousePosition.x - 49, // Adjusted for 40% larger size
        top: mousePosition.y - 32, // Adjusted for 40% larger size
        transform: isHovering ? 'scale(1.15)' : 'scale(1)',
        transition: 'transform 0.1s ease-out',
        display: window.innerWidth >= 1024 ? 'block' : 'none' // Additional CSS safeguard
      }}
    >
      {/* Eye cursor using the actual image */}
      <div className="relative w-[98px] h-[64px]">
        <img 
          src={eyeCursorImage} 
          alt="Eye cursor"
          className="w-full h-full object-contain"
          style={{ 
            visibility: window.innerWidth >= 1024 ? 'visible' : 'hidden'
          }}
        />
      </div>
    </div>
  );
}