import Link from 'next/link';

import styles from '@assets/css/not-found-page.module.css';

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.title}>
        <p>Page Not Found</p>
      </div>
      <div className={styles.message}>
        <p>Unfortunately, the requested resource could not be found.</p>
      </div>
      <div className={styles.buttonWrapper}>
        <Link className={styles.link} href="/">
          Return Home
        </Link>
      </div>
    </main>
  );
}
