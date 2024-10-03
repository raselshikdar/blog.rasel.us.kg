// DarkMode.tsx

import { useEffect } from 'react';
import styles from './DarkMode.module.scss';

const DarkMode: React.FC = () => {
  const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save user preference to localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
  };

  // Load user preference on initial load
  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem('dark-mode') || 'false');
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <button
      className={styles.toggleButton}
      onClick={toggleDarkMode}
    >
      Toggle Dark Mode
    </button>
  );
};

export default DarkMode;
