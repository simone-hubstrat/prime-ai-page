import { useState, useEffect } from 'react';

interface CountdownTime {
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
}

export const useCountdown = (initialHours: number = 47, initialMinutes: number = 23) => {
  // Calculate initial total seconds
  const initialTotalSeconds = (initialHours * 3600) + (initialMinutes * 60);
  
  const [timeLeft, setTimeLeft] = useState<CountdownTime>(() => {
    const hours = Math.floor(initialTotalSeconds / 3600);
    const minutes = Math.floor((initialTotalSeconds % 3600) / 60);
    const seconds = initialTotalSeconds % 60;
    
    return {
      hours,
      minutes,
      seconds,
      totalSeconds: initialTotalSeconds
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTotalSeconds = prev.totalSeconds - 1;
        
        // If countdown reaches 0, restart from initial time
        if (newTotalSeconds <= 0) {
          const hours = Math.floor(initialTotalSeconds / 3600);
          const minutes = Math.floor((initialTotalSeconds % 3600) / 60);
          const seconds = initialTotalSeconds % 60;
          
          return {
            hours,
            minutes,
            seconds,
            totalSeconds: initialTotalSeconds
          };
        }
        
        const hours = Math.floor(newTotalSeconds / 3600);
        const minutes = Math.floor((newTotalSeconds % 3600) / 60);
        const seconds = newTotalSeconds % 60;
        
        return {
          hours,
          minutes,
          seconds,
          totalSeconds: newTotalSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTotalSeconds]);

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  const formattedTime = {
    hours: formatTime(timeLeft.hours),
    minutes: formatTime(timeLeft.minutes),
    seconds: formatTime(timeLeft.seconds)
  };

  return {
    ...timeLeft,
    formatted: formattedTime,
    displayTime: `${formattedTime.hours} ore ${formattedTime.minutes} minuti`
  };
};