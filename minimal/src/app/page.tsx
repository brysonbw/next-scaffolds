'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import styles from '@app/page.module.css';

export default function Home() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <main className={styles.page}>
      <div className={styles.logoWrapper}>
        <Link href="https://nextjs.org/" target="_blank">
          <Image
            width={150}
            height={150}
            src="/images/nextjs.jpg"
            className={styles.logo}
            alt="Next logo"
          />
        </Link>
      </div>
      <h1>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
      <p>Count: {count}</p>
      <div className={styles.card}>
        <button onClick={decrement}>Decrement Count</button>
        <button onClick={reset} disabled={count === 0}>
          Reset
        </button>
        <button onClick={increment}>Increment Count</button>
      </div>
    </main>
  );
}
