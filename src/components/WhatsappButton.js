import React from 'react';
import styles from './WhatsappButton.module.scss'; // Usaremos módulos SCSS

const WhatsappButton = () => {
  const phoneNumber = '573148042601'; // Tu número sin el '+'
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const imageSrc = '/assets/intalito5.png'; // La ruta a tu imagen

  return (
    <a
      href={whatsappLink}
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      {/* La imagen de fondo */}
      <img src={imageSrc} alt="WhatsApp Chat" className={styles.whatsappImage} />
      
      {/* El "div invisible redondo". 
        Este es el ÚNICO elemento que recibirá eventos del mouse.
      */}
      <div className={styles.hoverTrigger}></div>
    </a>
  );
};

export default WhatsappButton;