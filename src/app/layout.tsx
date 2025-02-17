import React from 'react';
import Head from 'next/head';
import './globals.css';
import Home from './page';
import Navbar from './components/Navbar/Navbar';
import { Playfair_Display_SC } from 'next/font/google';
import styles from './layout.module.css';
const playfair_display_sc = Playfair_Display_SC({
  weight: '400',
  subsets: ['latin'],
});

export { playfair_display_sc };

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="sv">
      <Head>
        <title>Min Next.js App</title>
        <meta name="description" content="En beskrivning av min app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className={styles.container}>
          <Navbar />
          <Home />

        </div>
      </body>
    </html>
  );
};

export default Layout;
