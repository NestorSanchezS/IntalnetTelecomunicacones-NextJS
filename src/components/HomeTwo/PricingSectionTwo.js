import React from "react";
import Link from "next/link";

const PricingTwo = () => {
  return (
    <section className="pricing-two-area mt-5">
      <div className="container">
        <div className="row justify-content-center">
          {/* ================================================================
            NUEVA ESTRUCTURA DE TARJETA, USANDO TU CONTENIDO ORIGINAL
            ================================================================
          */}

          {/* Card 1 - Empresa Cordobesa */}
          <div className="col-lg-4 col-md-6 col-sm-9">
            <div className="game-card pricing-card-hover">
              {/* Contenedor de la imagen superior */}
              <div className="card-image-container">
                <div
                  className="card-main-image"
                  style={{
                    backgroundImage: `url(${"assets/img/images/pricing_item_bg01.jpg"})`,
                  }}
                ></div>
              </div>

              {/* Contenedor del contenido con corte diagonal */}
              <div className="card-content">
                <div className="text-background icon-pulse">
                  <h6 className="title fade-in-up">
                    Somos una empresa 100% Cordobesa
                  </h6>
                </div>
                <div className="text-background">
                  <p className="fade-in-up">
                    que ofrece soluciones de conectividad, entretenimiento y
                    servicios de telecomunicaciones.
                  </p>
                </div>
                <h3 className="price glow-text">
                  <span>
                    {" "}
                    <br />
                  </span>
                </h3>
                <div className="pricing-btn">
                  <Link href="#">
                    {/* Botón Ver Planes */}
                    <a className="btn btn-link btn-float">Ver Planes</a>
                  </Link>
                </div>
              </div>
              {/* Mantenemos tu efecto .card-shine */}
              <div className="card-shine"></div>
            </div>
          </div>

          {/* Card 2 - Netbox Mobile Net */}
          <div className="col-lg-4 col-md-6 col-sm-9">
            <div className="game-card pricing-card-hover">
              <div className="card-image-container">
                <div
                  className="card-main-image"
                  style={{
                    backgroundImage: `url(${"assets/img/images/pricing_item_bg02.jpg"})`,
                  }}
                ></div>
              </div>
              <div className="card-content">
                <div className="text-background">
                  <h3 className="title slide-in-right">Netbox Mobile Net</h3>
                </div>
                <div className="text-background">
                  <p className="fade-in-up">Limited Internet with Mobile & TV</p>
                </div>
                <div className="text-background price-container">
                  <h3 className="price bounce-in">
                    <sup>$</sup>90
                    <span>
                      From <br /> /Month
                    </span>
                  </h3>
                </div>
                <div className="pricing-btn">
                  <Link href="#">
                    {/* Botón Ver Planes */}
                    <a className="btn btn-link btn-float">Ver Planes</a>
                  </Link>
                </div>
              </div>
              <div className="card-shine"></div>
            </div>
          </div>

          {/* Card 3 - Conócenos */}
          <div className="col-lg-4 col-md-6 col-sm-9">
            <div className="game-card pricing-card-hover">
              <div className="card-image-container">
                <div
                  className="card-main-image"
                  style={{
                    backgroundImage: `url(${"assets/img/images/pricing_item_bg03.jpg"})`,
                  }}
                ></div>
              </div>
              <div className="card-content">
                <div className="text-background">
                  <h3 className="title slide-in-left">Conócenos</h3>
                </div>
                <div className="text-background">
                  <p className="fade-in-up">Danos el gusto de atenderte</p>
                </div>
                <div className="text-background price-container">
                  <h3 className="price count-up">
                    <sup></sup>4
                    <span>
                      Municipios <br /> /Nos encontramos
                    </span>
                  </h3>
                </div>
                <div className="pricing-btn">
                  <Link href="#">
                    {/* Botón Ver Planes */}
                    <a className="btn btn-link btn-float">Ver Planes</a>
                  </Link>
                </div>
              </div>
              <div className="card-shine"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* =================================
         NUEVOS ESTILOS PARA EL LAYOUT DE TARJETA
        =================================
        */
        .game-card {
          position: relative;
          background: white;
          border-radius: 20px;
          overflow: hidden; /* Oculta lo que se sale, importante para la imagen */
          margin-bottom: 30px;
          /* Ajustamos min-height para acomodar la imagen más grande */
          min-height: 480px; 
          display: flex;
          flex-direction: column;
        }

        .card-image-container {
          width: 100%;
          /* CAMBIO: Aumentamos la altura de la imagen */
          height: 250px; 
          overflow: hidden;
          /* Redondea solo las esquinas superiores */
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          flex-shrink: 0; /* Evita que la imagen se encoja */
        }

        .card-main-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          display: block;
        }

        .card-content {
          position: relative;
          z-index: 11; /* CAMBIO: De 2 a 11 para que esté por encima de los efectos (9 y 10) */
          padding: 20px;
          /* CAMBIO: Ajustamos el margin-top para subir más la sección azul */
          margin-top: -30px; 
          /* CAMBIO: Reducimos padding-top para que el contenido empiece antes */
          padding-top: 30px; 

          /* * Aquí está la magia:
           * 1. Usamos TU gradiente azul original
           * 2. Aplicamos el corte diagonal
          */
          background: linear-gradient(
            135deg,
            rgba(0, 82, 212, 0.85),
            rgba(0, 122, 255, 0.9)
          );
          /* CAMBIO: Mantenemos el corte diagonal pero lo ajustamos si es necesario */
          clip-path: polygon(0 20px, 100% 0, 100% 100%, 0 100%);

          /* Para que el contenido llene el espacio restante */
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* * MODIFICACIÓN IMPORTANTE:
         * Hacemos que tus 'text-background' sean transparentes
         * porque el contenedor '.card-content' ya tiene el fondo azul.
         * Mantenemos el padding/margin para el espaciado.
        */
        .card-content .text-background {
          background: transparent;
          box-shadow: none;
          border: none;
          padding: 0; /* El padding ya lo da .card-content */
        }

        .card-content .text-background.price-container {
          /* El contenedor del precio sí mantenía un fondo diferente */
          background: linear-gradient(
            135deg,
            rgba(0, 82, 212, 0.9),
            rgba(0, 122, 255, 0.95)
          );
          padding: 15px 25px; /* Devolvemos el padding al del precio */
          border-radius: 12px; /* Lo re-aplicamos */
        }

        /* Centramos el botón */
        .card-content .pricing-btn {
          margin-top: 15px;
        }

        /* =================================
         TUS ESTILOS ORIGINALES (MODIFICADOS)
        =================================
        */

        /* Modificamos pricing-card-hover para que no defina el layout */
        .pricing-card-hover {
          /* Ya no necesita min-height, lo tiene .game-card */
          /* Ya no necesita border-radius, lo tiene .game-card */
          /* Mantenemos lo importante: */
          position: relative;
          overflow: hidden; /* Esto es CLAVE para el clip-path y la imagen */
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        /* * Tu .pricing-two-content original ahora es .card-content.
         * Vamos a migrar los estilos.
        */
        .card-content .pricing-two-content {
          /* Esto ya no se usa, pero por si acaso */
          padding: 0;
        }

        .card-content h6.title {
          color: white;
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 15px;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }

        .card-content p {
          color: white;
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 20px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .pricing-card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2),
            0 0 30px rgba(102, 126, 234, 0.3);
        }

        .pricing-card-hover::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.8s;
          z-index: 10; /* Aseguramos que esté por encima */
        }

        .pricing-card-hover:hover::before {
          left: 100%;
        }

        .card-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 60%
          );
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.6s ease;
          z-index: 9;
        }

        .pricing-card-hover:hover .card-shine {
          opacity: 1;
          transform: scale(1);
        }

        /* =================================
         CAMBIO EN EL BOTÓN
        =================================
        */
        .btn-float {
          transition: all 0.3s ease;
          background: #60a5fa; /* Azul claro */
          color: white;
          border: none;
          padding: 10px 25px;
          border-radius: 10px; /* Menos redondeado */
          text-decoration: none;
          font-weight: 600;
          /* Quitamos efectos anteriores */
          /* backdrop-filter: blur(10px); */
          /* border: 1px solid rgba(255, 255, 255, 0.3); */
        }

        .btn-float:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          background: #3b82f6; /* Azul más oscuro en hover */
          color: white;
        }

        /* Quitamos el efecto ripple */
        /* .btn-float::after { ... } */
        /* @keyframes ripple { ... } */


        /* Estilos existentes para las otras cards */
        .text-background {
          background: linear-gradient(
            135deg,
            rgba(0, 82, 212, 0.85),
            rgba(0, 122, 255, 0.9)
          );
          padding: 12px 20px;
          margin: 8px 0;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .text-background::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.6s;
        }

        .text-background:hover::before {
          left: 100%;
        }

        .price-container {
          background: linear-gradient(
            135deg,
            rgba(0, 82, 212, 0.9),
            rgba(0, 122, 255, 0.95)
          );
          padding: 15px 25px;
        }

        .text-background h6,
        .text-background h3,
        .text-background p {
          color: white;
          margin: 0;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        .card-content h3,
        .card-content h6 {
          color: white;
          margin: 0;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        /* Animaciones (sin cambios) */
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        .slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
        .slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        .bounce-in {
          animation: bounceIn 1s ease-out;
        }
        .count-up {
          animation: countUp 1.5s ease-out;
        }
        .glow-text {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        .icon-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(1.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        /* Quitamos @keyframes ripple */

        /* Efectos de entrada escalonados para cada tarjeta */
        /* Apuntamos a la nueva estructura */
        .col-lg-4:nth-child(1) .game-card {
          animation-delay: 0.1s;
        }
        .col-lg-4:nth-child(2) .game-card {
          animation-delay: 0.2s;
        }
        .col-lg-4:nth-child(3) .game-card {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default PricingTwo;


