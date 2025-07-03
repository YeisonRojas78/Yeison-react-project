import React from 'react';
import styles from './Diseno3.module.css';
import papel from '../assets/img/papelHigenico.png'; // Asegúrate de tener la imagen en esa ruta

const Diseno3 = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.carta3}>
        <div className={styles.imagen3}>
          <img src={papel} alt="Papel Higiénico Scott" className={styles.perfil} />
        </div>
        <div className={styles.titulo}>
          <h1>Papel Higiénico Scott</h1>
          <p>En tendencia</p>
          <h1>1.200 COP</h1>
        </div>
        <p>
          ¿Quieres cuidar del medio ambiente y tu familia? Es momento de probar Papel Higiénico Scott®, 
          el producto ideal para la higiene personal.
        </p>
        <div className={styles.botones}>
          <button>Me gusta</button>
          <button>Agregar</button>
        </div>
      </div>
    </div>
  );
};

export default Diseno3;

