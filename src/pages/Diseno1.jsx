import React from 'react';
import styles from './Diseno1.module.css';
import espantapajaros from '../assets/img/espantapajaros.png'; // Asegúrate de tener esta imagen aquí

const Diseno1 = () => {
  return (
    <div>
      <h1 className={styles.text}>404 NOT FOUND</h1>
      <div className={styles.diseño1}>
        <div className={styles.imagen}>
          <img src={espantapajaros} alt="Espantapájaros" />
        </div>
        <div className={styles.carta}>
          <h1>I have bad news <br />for you</h1>
          <p>
            The page you are looking <br />
            for might be removed or is <br />
            temporarily unavailable
          </p>
          <div>
            <a className={styles.btn} href="/">Go back home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diseno1;
