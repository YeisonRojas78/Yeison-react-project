import React from 'react'
import styles from './Card.module.css' 

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imagen}>
        <img className={styles.qr} src="https://res.cloudinary.com/dl0iakjgy/image/upload/v1750988638/download-removebg-preview_xvkv8c.png" alt="" />
      </div>
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Backend specialist developer working on projects specializing in accounting and
        administrative management in various fields
      </p>
    </div>
  )
}

export default Card
