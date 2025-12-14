'use client';
import { useTheme } from '@/contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-2 w-9 h-9" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 
                 text-yellow-400 dark:text-yellow-300 transition-all duration-300 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                 focus:ring-offset-gray-900 dark:focus:ring-offset-gray-800"
      aria-label={theme === 'light' ? 'Passer en mode sombre' : 'Passer en mode clair'}
      title={theme === 'light' ? 'Passer en mode sombre' : 'Passer en mode clair'}
    >
      {theme === 'light' ? (
        <FontAwesomeIcon icon={faMoon} className="w-5 h-5" />
      ) : (
        <FontAwesomeIcon icon={faSun} className="w-5 h-5" />
      )}
    </button>
  );
}
