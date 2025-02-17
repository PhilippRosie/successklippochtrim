import styles from './page.module.css';
import Image from 'next/image';
import { playfair_display_sc, allura, economica } from '../app/layout';
import ronja from '../app/assets/images/home/ronja.jpg';

export default function Home() {
  return (
    <div className={styles.homePage}>
      <h1 className={`${playfair_display_sc.className} ${styles.homePageTitle}`}>Välkommen till Success Klipp och Trim</h1>
      <p className={`${allura.className} ${styles.homePageSubtitle}`}>Lyxig pälsvård – för hundar som förtjänar det bästa.</p>
      <div className={styles.homePageContainer}>
        <div className={styles.homePageTextContainer}>
          <p className={`${allura.className} ${styles.homePageTextQuote}`}>Lorem ipsum dolor sit amet</p>
          <h2 className={`${playfair_display_sc.className} ${styles.homePageTextTitle}`}>Välj din favorit behandling</h2>
          <p className={`${economica.className} ${styles.homePageTextSubtitle}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className={styles.homePageImageContainer}>
          <Image className={styles.homePageImage} src={ronja} alt="Ronja" width={600} height={600} />
        </div>
      </div>
    </div>
  );
}