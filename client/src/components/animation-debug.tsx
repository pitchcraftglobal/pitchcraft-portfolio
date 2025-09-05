import { useEffect, useRef, useState } from 'react';

export default function AnimationDebug() {
  const [isMobile, setIsMobile] = useState(false);
  const testRef = useRef<HTMLDivElement>(null);
  const [animationState, setAnimationState] = useState('Testing...');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Test 1: Pure inline style animation
    if (testRef.current) {
      const element = testRef.current;
      let rotation = 0;
      
      const animate = () => {
        rotation += 2;
        element.style.cssText = `
          width: 60px; 
          height: 60px; 
          background: blue; 
          margin: 10px auto; 
          transform: rotate(${rotation}deg) !important;
          transition: none !important;
          animation: none !important;
        `;
        requestAnimationFrame(animate);
      };
      
      // Test CSS animations work
      element.style.cssText = `
        width: 60px; 
        height: 60px; 
        background: red; 
        margin: 10px auto;
        animation: spin-test 1s linear infinite !important;
      `;
      
      // Check if CSS animation is actually running
      setTimeout(() => {
        const computed = window.getComputedStyle(element);
        if (computed.animationName === 'none') {
          setAnimationState('CSS animations blocked - using JS');
          animate(); // Fallback to JS
        } else {
          setAnimationState('CSS animations working');
        }
      }, 100);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '80px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 9999,
      background: 'white',
      color: 'black',
      padding: '15px',
      border: '2px solid black',
      textAlign: 'center'
    }}>
      <div>Mobile: {isMobile ? 'YES' : 'NO'}</div>
      <div>Status: {animationState}</div>
      <div ref={testRef}></div>
      
      <style>{`
        @keyframes spin-test {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}