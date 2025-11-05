import React from 'react';
// Ya no necesitamos FaWhatsapp si vamos a usar una imagen
// import { FaWhatsapp } from 'react-icons/fa'; 
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
      <img src={imageSrc} alt="WhatsApp Chat" className={styles.whatsappImage} />
    </a>
  );
};

export default WhatsappButton;