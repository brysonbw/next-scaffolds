'use client';
import Image from 'next/image';

import styles from '@assets/css/app-header.module.css';

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <Image
            width={10}
            height={10}
            className={styles.logo}
            src="/images/nextjs.jpg"
            alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
          />
          <p aria-current="page">{process.env.NEXT_PUBLIC_APP_NAME}</p>
        </div>

        <div className={styles.navLinks}>
          <a href="/about">About</a>
        </div>
      </nav>
    </header>
  );
}
