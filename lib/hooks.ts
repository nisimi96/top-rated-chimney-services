import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for throttling callback functions
 * Useful for expensive operations like scroll, resize events
 */
export const useThrottle = (callback: (...args: unknown[]) => void, delay: number = 200) => {
  const lastRun = useRef(Date.now());

  return useCallback(
    (...args: unknown[]) => {
      const now = Date.now();
      if (now - lastRun.current >= delay) {
        callback(...args);
        lastRun.current = now;
      }
    },
    [callback, delay]
  );
};

/**
 * Custom hook for debouncing callback functions
 * Useful for search inputs, resize handlers
 */
export const useDebounce = (callback: (...args: unknown[]) => void, delay: number = 200) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: unknown[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};
