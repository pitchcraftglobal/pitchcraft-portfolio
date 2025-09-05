import { useEffect, useRef, useState } from 'react';

export default function SpinTest() {
  const [isMobile, setIsMobile] = useState(false);
  const spinRef = useRef<HTMLDivElement>(null);
  const [animationStatus, setAnimationStatus] = useState('Initializing...');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Test CSS animation first
    if (spinRef.current) {
      const element = spinRef.current;
      
      // Apply CSS animation
      element.style.animation = 'spin-test 2s linear infinite';
      
      // Check if CSS animation works
      setTimeout(() => {
        const computed = window.getComputedStyle(element);
        if (computed.animationName === 'none' || computed.animationName === '') {
          setAnimationStatus('CSS blocked - using JavaScript');
          
          // Fallback to JavaScript animation
          let rotation = 0;
          const animate = () => {
            rotation += 2;
            if (spinRef.current) {
              spinRef.current.style.setProperty('transform', `rotate(${rotation}deg)`, 'important');
            }
            requestAnimationFrame(animate);
          };
          animate();
        } else {
          setAnimationStatus('CSS animation working');
        }
      }, 100);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '120px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10000,
      background: 'rgba(0, 0, 0, 0.9)',
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center',
      border: '2px solid #ff6b35'
    }}>
      <div style={{ marginBottom: '15px', fontSize: '14px' }}>
        <div>Device: {isMobile ? 'Mobile' : 'Desktop'}</div>
        <div>Status: {animationStatus}</div>
      </div>
      
      <div 
        ref={spinRef}
        style={{ 
          width: '80px', 
          height: '80px', 
          background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
          margin: '0 auto',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '16px'
        }}
      >
        SPIN
      </div>
      
      <style>{`
        @keyframes spin-test {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}