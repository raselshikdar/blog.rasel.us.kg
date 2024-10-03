import React, { useEffect, useState } from 'react';
import styles from './DarkMode.module.scss';

const DarkMode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle('dark-mode', !isDarkMode);
    localStorage.setItem('darkMode', (!isDarkMode).toString());
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <div className={`${styles['dark-mode']} ${isDarkMode ? styles.active : ''}`} onClick={toggleDarkMode}>
      <span className={styles['dark-mode__icon']}>
        {isDarkMode ? '🌙' : '☀️'} {/* Sun for light mode, moon for dark mode */}
      </span>
      <span>{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
    </div>
  );
};

export default DarkMode;
