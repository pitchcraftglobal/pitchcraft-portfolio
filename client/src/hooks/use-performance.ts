import { useEffect, useState, useCallback } from 'react';

// Performance monitoring hook
export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    fps: 60,
    memoryUsage: 0,
    renderTime: 0,
    isLowPerformance: false
  });

  useEffect(() => {
    // Disable performance monitoring on mobile devices to prevent reloads
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    if (isMobile) {
      // Set static values for mobile to avoid overhead
      setMetrics({
        fps: 30,
        memoryUsage: 0,
        renderTime: 0,
        isLowPerformance: true
      });
      return;
    }

    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        setMetrics(prev => ({
          ...prev,
          fps,
          isLowPerformance: fps < 30
        }));
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(measureFPS);
    };

    // Start monitoring only on desktop
    animationId = requestAnimationFrame(measureFPS);

    // Memory usage (if available)
    if ('memory' in performance) {
      const memoryInfo = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memoryUsage: Math.round(memoryInfo.usedJSHeapSize / 1048576) // MB
      }));
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return metrics;
}

// Adaptive performance hook
export function useAdaptivePerformance() {
  const [shouldReduceAnimations, setShouldReduceAnimations] = useState(false);
  const [shouldReduceEffects, setShouldReduceEffects] = useState(false);
  
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setShouldReduceAnimations(e.matches);
    };
    
    setShouldReduceAnimations(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaChange);
    
    // Check device capabilities
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
    
    if (isMobile || isLowEnd) {
      setShouldReduceEffects(true);
    }

    // Battery API cleanup variables
    let battery: any = null;
    const updateBatteryStatus = () => {
      if (battery && battery.level < 0.2 || (battery && !battery.charging)) {
        setShouldReduceAnimations(true);
        setShouldReduceEffects(true);
      }
    };

    // Listen for battery status (only on non-mobile to prevent issues)
    if ('getBattery' in navigator && !isMobile) {
      (navigator as any).getBattery().then((batteryRef: any) => {
        battery = batteryRef;
        battery.addEventListener('levelchange', updateBatteryStatus);
        battery.addEventListener('chargingchange', updateBatteryStatus);
        updateBatteryStatus();
      }).catch(() => {
        // Silently fail if battery API is not available
      });
    }

    // Cleanup function
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      if (battery) {
        battery.removeEventListener('levelchange', updateBatteryStatus);
        battery.removeEventListener('chargingchange', updateBatteryStatus);
      }
    };
  }, []);

  return {
    shouldReduceAnimations,
    shouldReduceEffects,
    adaptiveConfig: {
      animationDuration: shouldReduceAnimations ? 0 : 1,
      enableBlur: !shouldReduceEffects,
      enableShadows: !shouldReduceEffects,
      enableTransforms: !shouldReduceEffects
    }
  };
}

// Intersection observer hook for performance
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options?: IntersectionObserverInit
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, hasIntersected, options]);

  return { isIntersecting, hasIntersected };
}

// Debounced resize hook
export function useDebounceResize(delay: number = 100) {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    let timeoutId: number;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, delay);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return windowSize;
}