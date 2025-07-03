import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>Diseños Yeison Rojas</Link>
        <ul className={styles.navList}>
          <li><Link to="/" className={styles.link}>Inicio</Link></li>
          <li><Link to="/diseño1" className={styles.link}>Diseño 1</Link></li>
          <li><Link to="/diseño2" className={styles.link}>Diseño 2</Link></li>
          <li><Link to="/diseño3" className={styles.link}>Diseño 3</Link></li>
          <li><Link to="/diseño4" className={styles.link}>Diseño 4</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
