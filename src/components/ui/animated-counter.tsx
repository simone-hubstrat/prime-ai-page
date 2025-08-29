import React, { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from,
  to,
  duration = 2000,
  suffix = '',
  className = ''
}) => {
  const [count, setCount] = useState(from);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;
    
    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = from + (to - from) * easeOutCubic;
      
      setCount(Math.floor(current));
      
      if (progress >= 1) {
        clearInterval(timer);
        setCount(to);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [from, to, duration, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${from}-${to}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [from, to]);

  return (
    <span 
      id={`counter-${from}-${to}`}
      className={className}
    >
      {count}{suffix}
    </span>
  );
};