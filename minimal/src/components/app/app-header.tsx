import Image from 'next/image';
import Link from 'next/link';

import styles from '@components/app/app-header.module.css';

export default function AppHeader(): React.JSX.Element {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles['nav-logo']}>
          <Image
            width={10}
            height={10}
            className={styles.logo}
            src="/images/nextjs.jpg"
            alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
            priority
          />
          <p className={styles['app-title']} aria-current="page">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </p>
        </div>

        <div className={styles['nav-links']}>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}
