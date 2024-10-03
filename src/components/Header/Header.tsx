import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import DarkMode from '../DarkMode/DarkMode'; // Adjust the path as necessary

const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 80) {
        headerRef.current?.classList.add(`${styles.scroll}`);
      } else {
        headerRef.current?.classList.remove(`${styles.scroll}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const moveToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.top} onClick={moveToTop}>
        <span className={styles.earLeft}><b>૮</b></span>
        <span className={styles.face}><b>• ᴥ •</b></span>
        <span className={styles.earRight}><b>ა</b></span>
      </div>
      <div className={styles.logo}>
        <Link href="/">
          <h1>
            <span className={styles['logo__mark']}><b>&lt;/&gt;</b></span>
            <span className={styles['logo__text']}><b>Rasel Shikdar</b></span>
          </h1>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles['nav__list']}>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/now">now</Link>
          </li>
          <li>
            <Link href="https://rasel.us.kg" target="__blank" rel="noopener noreferrer">me</Link>
          </li>
        </ul>
      </nav>
      <DarkMode /> {/* Include the DarkMode component */}
    </header>
  );
};

export default Header;
