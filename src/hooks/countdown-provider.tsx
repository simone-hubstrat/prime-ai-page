import React, { useState, useEffect, useCallback } from 'react';
import { CountdownContext, calculateTime } from './use-countdown';

interface CountdownProviderProps {
  children: React.ReactNode;
}

export const CountdownProvider: React.FC<CountdownProviderProps> = ({ children }) => {
  // Countdown iniziale: 47 ore 23 minuti
  const initialHours = 47;
  const initialMinutes = 23;
  const initialTotalSeconds = (initialHours * 3600) + (initialMinutes * 60);

  const [totalSeconds, setTotalSeconds] = useState(initialTotalSeconds);
  const [countdown, setCountdown] = useState(() => calculateTime(initialTotalSeconds));

  // Reset countdown function
  const resetCountdown = useCallback(() => {
    setTotalSeconds(initialTotalSeconds);
    setCountdown(calculateTime(initialTotalSeconds));
  }, [initialTotalSeconds]);

  // Main countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds(prev => {
        const newSeconds = prev - 1;
        
        // Se arriva a zero, riavvia automaticamente
        if (newSeconds <= 0) {
          const resetSeconds = initialTotalSeconds;
          setCountdown(calculateTime(resetSeconds));
          return resetSeconds;
        }
        
        setCountdown(calculateTime(newSeconds));
        return newSeconds;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTotalSeconds]);

  return (
    <CountdownContext.Provider value={{ countdown, resetCountdown }}>
      {children}
    </CountdownContext.Provider>
  );
};
