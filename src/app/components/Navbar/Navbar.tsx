import React from 'react';
import Image from 'next/image';
import logo from '../../assets/images/Navbar/logo.png';
import { playfair_display_sc } from '../../layout';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    
    <div className={styles.navbarPage}>
<div className={styles.navbarsHeader}>
    <h1 className={playfair_display_sc.className}>Success Klipp och Trim</h1>
</div>
<div className={styles.navbarContainer}>
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={`${styles.navbarItem} ${playfair_display_sc.className}`}><a href="/">HEM</a></li>
        <li className={`${styles.navbarItem} ${playfair_display_sc.className}`}><a href="/">BEHANDLINGAR</a></li>
        <Image src={logo} alt="Success Klipp och Trim" width={300} height={300} />
        <li className={`${styles.navbarItem} ${playfair_display_sc.className}`}><a href="/contact">KONTAKT</a></li>  
        <li className={`${styles.navbarItem} ${playfair_display_sc.className}`}><a href="/about">OM</a></li>
             
      </ul>
    </nav>
    </div>
    </div>
  );
};

export default Navbar;