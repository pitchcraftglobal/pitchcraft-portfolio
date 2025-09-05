import { useEffect, useRef, useState } from 'react';

export default function ScrollTest() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0);
  const [frames, setFrames] = useState(0);

  useEffect(() => {
    let position = 0;
    let frameCount = 0;
    let animationId: number;

    const scroll = () => {
      position += 2;
      frameCount++;
      
      // Reset position after one complete cycle (10 boxes * 110px per box = 1100px)
      if (position >= 1100) {
        position = 0;
      }
      
      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateX(-${position}px)`;
      }
      
      setPos(position);
      setFrames(frameCount);
      
      animationId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationId);
  }, []);

  const boxes = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div style={{
      position: 'fixed',
      top: '100px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10000,
      background: '#000',
      color: '#fff',
      padding: '20px',
      border: '2px solid #0f0',
      borderRadius: '8px',
      width: '500px'
    }}>
      <div>Frames: {frames} | Position: {pos}px</div>
      
      <div style={{ 
        overflow: 'hidden', 
        width: '100%', 
        height: '60px', 
        marginTop: '10px',
        border: '1px solid #333'
      }}>
        <div 
          ref={scrollRef}
          style={{ 
            display: 'flex', 
            height: '100%',
            alignItems: 'center',
            gap: '30px'
          }}
        >
          {/* Create seamless loop by duplicating boxes */}
          {[...boxes, ...boxes].map((num, index) => (
            <div 
              key={index}
              style={{ 
                background: num % 2 === 1 ? '#f00' : '#00f',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '4px',
                minWidth: '80px',
                textAlign: 'center'
              }}
            >
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}