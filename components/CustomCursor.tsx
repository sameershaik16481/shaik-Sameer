'use client';

import { useEffect, useState, useRef } from 'react';

interface Splash {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [splashes, setSplashes] = useState<Splash[]>([]);
  const splashIdRef = useRef(0);
  const lastSplashTime = useRef(0);
  const prevPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only show custom cursor on desktop
    if (typeof window === 'undefined') return;
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updateCursor = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      setIsVisible(true);

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.onclick !== null ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        (typeof window !== 'undefined' && window.getComputedStyle(target).cursor === 'pointer');
      
      setIsPointer(isClickable);

      // Create splash effect on movement
      const now = Date.now();
      const distance = Math.sqrt(
        Math.pow(newPosition.x - prevPositionRef.current.x, 2) + 
        Math.pow(newPosition.y - prevPositionRef.current.y, 2)
      );

      if (now - lastSplashTime.current > 150 && distance > 10) {
        const newSplash: Splash = {
          id: splashIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          timestamp: now,
        };
        setSplashes((prev) => [...prev, newSplash]);
        lastSplashTime.current = now;

        // Remove splash after animation
        setTimeout(() => {
          setSplashes((prev) => prev.filter((s) => s.id !== newSplash.id));
        }, 1000);
      }

      prevPositionRef.current = newPosition;
    };

    const handleClick = (e: MouseEvent) => {
      // Create larger splash on click
      const newSplash: Splash = {
        id: splashIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      };
      setSplashes((prev) => [...prev, newSplash]);
      
      setTimeout(() => {
        setSplashes((prev) => prev.filter((s) => s.id !== newSplash.id));
      }, 1200);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    if (!isMobile && typeof document !== 'undefined') {
      window.addEventListener('mousemove', updateCursor);
      window.addEventListener('click', handleClick);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (!isMobile && typeof document !== 'undefined') {
        window.removeEventListener('mousemove', updateCursor);
        window.removeEventListener('click', handleClick);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Splash ripple effects */}
      {splashes.map((splash) => {
        const age = Date.now() - splash.timestamp;
        const progress = Math.min(age / 1000, 1); // 1 second animation
        const scale = 1 + progress * 3;
        const opacity = 1 - progress;
        
        return (
          <div
            key={splash.id}
            className="fixed pointer-events-none z-[9997]"
            style={{
              left: `${splash.x}px`,
              top: `${splash.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Ripple circles */}
            <div
              className="absolute inset-0 rounded-full border-2 border-primary-400/60"
              style={{
                width: `${20 * scale}px`,
                height: `${20 * scale}px`,
                opacity: opacity * 0.8,
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                animation: 'splashRipple 1s ease-out forwards',
              }}
            />
            <div
              className="absolute inset-0 rounded-full border-2 border-primary-300/40"
              style={{
                width: `${30 * scale}px`,
                height: `${30 * scale}px`,
                opacity: opacity * 0.6,
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                animation: 'splashRipple 1s ease-out 0.1s forwards',
              }}
            />
            <div
              className="absolute inset-0 rounded-full border border-primary-500/30"
              style={{
                width: `${40 * scale}px`,
                height: `${40 * scale}px`,
                opacity: opacity * 0.4,
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                animation: 'splashRipple 1s ease-out 0.2s forwards',
              }}
            />
            {/* Center splash dot */}
            <div
              className="absolute inset-0 rounded-full bg-primary-400"
              style={{
                width: '6px',
                height: '6px',
                opacity: opacity,
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                boxShadow: `0 0 ${8 * (1 - progress)}px rgba(14, 165, 233, ${opacity})`,
              }}
            />
          </div>
        );
      })}

      {/* Outer trailing circle */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <div
          className={`absolute inset-0 rounded-full border-2 ${
            isPointer
              ? 'border-primary-400 w-12 h-12 opacity-80'
              : 'border-white w-10 h-10 opacity-50'
          } transition-all duration-300`}
          style={{
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
          }}
        />
      </div>

      {/* Inner cursor dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          transition: 'transform 0.05s ease-out',
        }}
      >
        <div
          className={`absolute inset-0 rounded-full ${
            isPointer
              ? 'bg-primary-500 w-3 h-3 shadow-lg shadow-primary-500/50'
              : 'bg-white w-2 h-2 shadow-lg shadow-white/30'
          } transition-all duration-200`}
          style={{
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
          }}
        />
      </div>

      {/* Clickable element highlight */}
      {isPointer && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
            transition: 'transform 0.15s ease-out',
          }}
        >
          <div
            className="absolute inset-0 rounded-full bg-primary-500/20 w-16 h-16 blur-md animate-pulse"
            style={{
              transform: 'translate(-50%, -50%)',
              left: '50%',
              top: '50%',
            }}
          />
        </div>
      )}
    </>
  );
};

export default CustomCursor;
