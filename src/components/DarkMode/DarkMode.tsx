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
    <div className={`${styles['dark-mode']} ${isDarkMode ? styles.active : ''}`} onClick={toggleDarkMode}>
      <span className={styles['dark-mode__icon']}>
        {isDarkMode ? '🌙' : '☀️'} {/* Replace with your icon components or SVG */}
      </span>
      <span>{isDarkMode ? '' : ''}</span>
    </div>
  );
};

export default DarkMode;
