// DarkMode.tsx

import { useEffect, useState } from 'react';
import styles from './DarkMode.module.scss';

const DarkMode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
    // Save preference to localStorage
    localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Load preference from localStorage on mount
  useEffect(() => {
    const storedPreference = localStorage.getItem('dark-mode');
    if (storedPreference) {
      setIsDarkMode(JSON.parse(storedPreference));
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button className={styles['dark-mode-button']} onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkMode;
