import { useState, useEffect, useContext, createContext, useCallback } from 'react';

interface CountdownTime {
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
  displayTime: string;
  formatted: {
    hours: string;
    minutes: string;
    seconds: string;
  };
}

interface CountdownContextType {
  countdown: CountdownTime;
  resetCountdown: () => void;
}

const CountdownContext = createContext<CountdownContextType | null>(null);

export const CountdownProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Countdown iniziale: 47 ore 23 minuti
  const initialHours = 47;
  const initialMinutes = 23;
  const initialTotalSeconds = (initialHours * 3600) + (initialMinutes * 60);

  const [totalSeconds, setTotalSeconds] = useState(initialTotalSeconds);

  // Funzione per calcolare il tempo formattato
  const calculateTime = useCallback((seconds: number): CountdownTime => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const formatted = {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: secs.toString().padStart(2, '0')
    };

    const displayTime = `${formatted.hours} ore ${formatted.minutes} minuti`;

    return {
      hours,
      minutes,
      seconds: secs,
      totalSeconds: seconds,
      displayTime,
      formatted
    };
  }, []);

  const [countdown, setCountdown] = useState<CountdownTime>(() => 
    calculateTime(initialTotalSeconds)
  );

  // Reset countdown function
  const resetCountdown = useCallback(() => {
    setTotalSeconds(initialTotalSeconds);
    setCountdown(calculateTime(initialTotalSeconds));
  }, [initialTotalSeconds, calculateTime]);

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
  }, [initialTotalSeconds, calculateTime]);

  return (
    <CountdownContext.Provider value={{ countdown, resetCountdown }}>
      {children}
    </CountdownContext.Provider>
  );
};

// Hook per usare il countdown
export const useCountdown = () => {
  const context = useContext(CountdownContext);
  if (!context) {
    throw new Error('useCountdown deve essere usato dentro CountdownProvider');
  }
  return context;
};

// Export legacy per compatibilità
export const useLegacyCountdown = (initialHours: number = 47, initialMinutes: number = 23) => {
  const { countdown } = useCountdown();
  return countdown;
};
