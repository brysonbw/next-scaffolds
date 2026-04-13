import type { Metadata } from 'next';

import '@app/globals.css';

import AppFooter from '@components/app/app-footer';
import AppHeader from '@components/app/app-header';

export const metadata: Metadata = {
  title: 'Next App | Home',
  description: 'Next App: Minimal Starter',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<Props>): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <main id="root">
          <AppHeader />
          <div id="outlet">{children}</div>
          <AppFooter />
        </main>
      </body>
    </html>
  );
}
