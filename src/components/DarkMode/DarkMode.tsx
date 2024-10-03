import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './DarkMode.module.scss';

const DarkMode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false); // Ensure component is mounted for client-side

  // This function handles the toggle between dark and light mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (typeof window !== 'undefined') {
      document.body.classList.toggle('dark-mode', newMode);
      localStorage.setItem('darkMode', String(newMode));
    }
  };

  useEffect(() => {
    // Component is mounted
    setIsMounted(true);

    // Get dark mode preference from localStorage after mounting
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode && typeof window !== 'undefined') {
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Render null on server to avoid SSR mismatch (ensuring the app renders only after mounting)
  if (!isMounted) {
    return null;
  }

  return (
    <div className={`${styles['dark-mode']} ${isDarkMode ? styles.active : ''}`} onClick={toggleDarkMode}>
      <span className={styles['dark-mode__icon']}>
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </span>
    </div>
  );
};

export default DarkMode;
