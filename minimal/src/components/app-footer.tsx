'use client';
import Link from 'next/link';

import styles from '@assets/css/app-footer.module.css';

function currentYear(): string {
  const date = new Date();
  return date.getFullYear().toString();
}

export default function AppFooter() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerText}>
          <p>© {currentYear()}</p>•
          <p>
            <Link className={styles.link} href="/">
              {process.env.NEXT_PUBLIC_APP_NAME}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
