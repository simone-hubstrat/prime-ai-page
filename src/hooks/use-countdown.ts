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

export const CountdownContext = createContext<CountdownContextType | null>(null);

// Funzione per calcolare il tempo formattato
export const calculateTime = (seconds: number): CountdownTime => {
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
