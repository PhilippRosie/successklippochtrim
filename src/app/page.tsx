import styles from './page.module.css';
import { playfair_display_sc } from '../app/layout';
export default function Home() {
  return (
    <div className={styles.homePage}>
      <h1 className={playfair_display_sc.className}>Välkommen till Success Klipp och Trim</h1>
    </div>
  );
}