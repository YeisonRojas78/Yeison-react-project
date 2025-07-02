import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link className={styles.brand} to="/">Diseños Yeison Rojas</Link>
        <ul className={styles.navList}>
          <li><Link className={styles.link} to="/">Inicio</Link></li>
          <li><Link className={styles.link} to="/diseño1">Diseño 1</Link></li>
          <li><Link className={styles.link} to="/diseño2">Diseño 2</Link></li>
          <li><Link className={styles.link} to="/diseño3">Diseño 3</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
