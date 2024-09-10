import React from 'react'
import { metadata } from '@/lib/metadata'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  const { name } = metadata.owner

  const moveToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__copyright']}>
        © 2024 <a href="https://rasel.us.kg">Rasel Shikdar</a> | All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
