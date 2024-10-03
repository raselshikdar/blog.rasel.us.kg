import React, { useEffect, useState } from 'react';
import styles from './DarkMode.module.scss';

const DarkMode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  useEffect(() => {
    const currentMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(currentMode);
    document.body.classList.toggle('dark-mode', currentMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  return (
    <div 
      className={`${styles['dark-mode']} ${isDarkMode ? styles.active : ''}`} 
      onClick={toggleDarkMode}
    >
      <span className={styles['dark-mode__icon']}>
        {isDarkMode ? (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 16 16"
          >
            <path d="M6.5 0a1.5 1.5 0 0 1 1.5 1.5V2a7.5 7.5 0 1 1-1 0V1.5A1.5 1.5 0 0 1 6.5 0zM8 3.5A4.5 4.5 0 1 0 12.5 8 4.5 4.5 0 0 0 8 3.5zM0 8a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1zm14 0a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1zM8 0a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V1A1 1 0 0 1 8 0zm0 15a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1zM1 15a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1zm14 0a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1z" />
          </svg>
        ) : (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 16 16"
          >
            <path d="M8 2a6 6 0 1 1-6 6 6 6 0 0 1 6-6z" />
          </svg>
        )}
      </span>
      <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
    </div>
  );
};

export default DarkMode;
