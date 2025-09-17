import React, { useState, useEffect, useCallback } from 'react';
import { CountdownContext, calculateTime } from './use-countdown';

interface CountdownProviderProps {
  children: React.ReactNode;
}

// Configurazione countdown: 47 ore 23 minuti
const COUNTDOWN_SECONDS = 47 * 3600 + 23 * 60;
const STORAGE_KEY = 'COUNTDOWN_ENDTIME';

// Funzioni helper per localStorage
function getEndTimestamp(): number | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? parseInt(stored, 10) : null;
}

function getNextEndTimestamp(): number {
  return Date.now() + COUNTDOWN_SECONDS * 1000;
}

export const CountdownProvider: React.FC<CountdownProviderProps> = ({ children }) => {
  // Inizializza o recupera il timestamp di fine countdown
  const [endTimestamp, setEndTimestamp] = useState(() => {
    const stored = getEndTimestamp();
    
    // Se non c'è un timestamp salvato, o è nel passato, crea uno nuovo
    if (!stored || isNaN(stored) || stored < Date.now()) {
      const newEndTimestamp = getNextEndTimestamp();
      localStorage.setItem(STORAGE_KEY, newEndTimestamp.toString());
      return newEndTimestamp;
    }
    
    return stored;
  });

  // Calcola il countdown iniziale basandosi sul timestamp
  const [countdown, setCountdown] = useState(() => {
    const secondsLeft = Math.max(0, Math.floor((endTimestamp - Date.now()) / 1000));
    return calculateTime(secondsLeft);
  });

  // Funzione per resettare manualmente il countdown
  const resetCountdown = useCallback(() => {
    const newEndTimestamp = getNextEndTimestamp();
    localStorage.setItem(STORAGE_KEY, newEndTimestamp.toString());
    setEndTimestamp(newEndTimestamp);
    setCountdown(calculateTime(COUNTDOWN_SECONDS));
  }, []);

  // Timer principale - calcola sempre basandosi sul timestamp
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const secondsLeft = Math.max(0, Math.floor((endTimestamp - now) / 1000));
      
      setCountdown(calculateTime(secondsLeft));
      
      // Se il countdown è arrivato a zero, auto-reset
      if (secondsLeft <= 0) {
        const newEndTimestamp = getNextEndTimestamp();
        localStorage.setItem(STORAGE_KEY, newEndTimestamp.toString());
        setEndTimestamp(newEndTimestamp);
        setCountdown(calculateTime(COUNTDOWN_SECONDS));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTimestamp]);

  return (
    <CountdownContext.Provider value={{ countdown, resetCountdown }}>
      {children}
    </CountdownContext.Provider>
  );
};
