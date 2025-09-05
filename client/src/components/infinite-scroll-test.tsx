import { useEffect, useRef, useState } from 'react';

export default function InfiniteScrollTest() {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState('Initializing...');
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Dead simple continuous scroll - no resets
    if (scrollRef.current) {
      const element = scrollRef.current;
      let position = 0;
      let frameCount = 0;
      
      const animate = () => {
        position += 1; // Move 1px per frame
        frameCount++;
        
        // Just keep moving forever - no resets!
        element.style.transform = `translateX(-${position}px)`;
        setPosition(position);
        setStatus(`Frame: ${frameCount}, Moving: ${position}px`);
        
        requestAnimationFrame(animate);
      };
      
      animate(); // Start immediately
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testItems = ['ITEM A', 'ITEM B', 'ITEM C', 'ITEM D', 'ITEM E'];

  return (
    <div style={{
      position: 'fixed',
      top: '200px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10000,
      background: 'rgba(0, 0, 0, 0.95)',
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #00ff00',
      width: '400px'
    }}>
      <div style={{ marginBottom: '15px', fontSize: '12px' }}>
        <div>Device: {isMobile ? 'Mobile' : 'Desktop'}</div>
        <div>Status: {status}</div>
        <div>Position: {position}px</div>
        <div>Animation: RUNNING</div>
      </div>
      
      {/* Scrolling container */}
      <div style={{ 
        overflow: 'hidden', 
        width: '100%', 
        height: '50px',
        border: '1px solid #333',
        position: 'relative'
      }}>
        <div 
          ref={scrollRef}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '20px',
            height: '100%',
            width: 'max-content'
          }}
        >
          {/* Tons of copies so it never runs out */}
          {Array(50).fill(testItems).flat().map((item, index) => (
            <div 
              key={index}
              style={{ 
                background: index < 5 ? '#ff6b35' : index < 10 ? '#f7931e' : '#00ff00',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                whiteSpace: 'nowrap',
                fontWeight: 'bold',
                flexShrink: 0
              }}
            >
              {item} ({index + 1})
            </div>
          ))}
        </div>
      </div>
      
      <div style={{ marginTop: '10px', fontSize: '10px', color: '#999' }}>
        Orange = Set 1, Yellow = Set 2, Green = Set 3
      </div>
    </div>
  );
}