import React from 'react';
import styles from './Diseno2.module.css';
import icecube from '../assets/img/icecube.jpg'; // Asegúrate que esta ruta exista

const Diseno2 = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.carta2}>
        <div className={styles.imagen2}>
          <img src={icecube} alt="Yeison Rojas" className={styles.perfil} />
        </div>
        <h1>Yeison Rojas</h1>
        <div className={styles.estrellas}>
          <span className={styles.rellena}>★</span>
          <span className={styles.rellena}>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        <p>
          Backend specialist developer working on projects specializing in accounting and
          administrative management in various fields
        </p>
        <div className={styles.botones}>
          <button className={styles.btnClaro}>Read More</button>
          <button className={styles.btnOscuro}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Diseno2;
