'use client';

import { createContext, useContext, useSyncExternalStore } from 'react';

// 1. Create the "radio station"
const ThemeContext = createContext();

// The saved theme lives in localStorage, outside React. These three helpers
// let React read it directly instead of copying it into state in an effect.
const THEME_EVENT = 'theme-change';

function subscribe(onChange) {
  window.addEventListener(THEME_EVENT, onChange);
  window.addEventListener('storage', onChange); // theme changed in another tab
  return () => {
    window.removeEventListener(THEME_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

const getSnapshot = () => localStorage.getItem('theme') === 'dark';
const getServerSnapshot = () => false; // the server can't see localStorage

// 2. This is the "broadcaster" — it wraps your whole app
export function ThemeProvider({ children }) {
  // Remember the user's choice even after page refresh
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {/* This adds 'dark-mode' class to whatever wraps the app */}
      <div className={isDark ? 'dark-mode' : ''} style={{ minHeight: '100vh' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// 3. This is how any page "tunes in" to the station
export function useTheme() {
  return useContext(ThemeContext);
}
