import React from "react";
import Link from "next/link";
import CounterStyleTwo from "../Elements/Counter/CounterStyleTwo"; // Asegúrate de que CounterStyleTwo exista y funcione bien.

const Fact = () => {
  return (
    <section className="fact-area-modern pt-120 pb-120"> {/* Ajustado padding */}
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-6 col-lg-7">
            <div className="fact-img-wrap-modern">
              <img
                src="assets/img/images/fact_img.jpg"
                className="main-img-modern"
                alt="Imagen principal" // Mejor descripción para accesibilidad
              />
              <img
                src="assets/img/images/fact_img02.jpg"
                className="small-img-modern"
                alt="Imagen pequeña" // Mejor descripción
              />
              {/* Nuevo elemento para un efecto visual adicional */}
              <div className="img-overlay-shape"></div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8">
            <div className="section-title-modern mb-40">
              <h2 className="title-modern">
                Soluciones de Conectividad y Entretenimiento
              </h2>
            </div>
            <div className="content-wrap-modern">
              <p className="description-modern">
                Disfruta de la mejor televisión digital del municipio. Sin
                clausulas de permanencia. Ofrecemos internet banda ancha y
                planes desde lo mas básicos hasta los más avanzados. Todo por
                fibra óptica.
              </p>
              {/* Asume que CounterStyleTwo se adapta bien o se actualizará */}
              <div className="counter-area-modern">
                <CounterStyleTwo />
              </div>
              
              <Link href="/contact">
                {/* Nuevo estilo para el botón, similar al de las tarjetas */}
                <a className="btn-modern">Contáctenos</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fact-area-modern {
          position: relative;
          overflow: hidden;
          background-color: #f8f9fa; /* Un fondo claro para un look moderno */
          padding-top: 120px;
          padding-bottom: 120px;
        }

        .fact-area-modern::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0, 122, 255, 0.05), rgba(0, 82, 212, 0.05));
          z-index: 0;
          opacity: 0.7;
        }

        .fact-img-wrap-modern {
          position: relative;
          padding-right: 50px; /* Espacio para la imagen pequeña */
          padding-bottom: 50px;
          max-width: 550px; /* Controla el ancho máximo del grupo de imágenes */
          margin: 0 auto; /* Centra el grupo de imágenes en móviles */
        }

        .main-img-modern {
          width: 100%;
          height: auto;
          border-radius: 20px; /* Esquinas redondeadas */
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15); /* Sombra más pronunciada */
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          position: relative;
          z-index: 2;
        }

        .main-img-modern:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
        }

        .small-img-modern {
          position: absolute;
          bottom: 0;
          right: 0; /* Ubicación en la esquina inferior derecha */
          width: 180px; /* Tamaño de la imagen pequeña */
          height: auto;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          border: 4px solid white; /* Borde blanco para destacarla */
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          z-index: 3;
        }

        .small-img-modern:hover {
          transform: scale(1.05) rotate(2deg);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
        }

        .img-overlay-shape {
            position: absolute;
            top: 20px;
            left: -20px; /* Desplazado para un efecto visual */
            width: 80%;
            height: 80%;
            background: linear-gradient(45deg, rgba(0, 122, 255, 0.2), rgba(0, 82, 212, 0.2));
            border-radius: 25px;
            z-index: 1;
            transform: rotate(-5deg); /* Ligera rotación */
            pointer-events: none; /* Asegura que no interfiera con el clic */
            opacity: 0.8;
        }

        .section-title-modern {
          margin-bottom: 30px; /* Espaciado más compacto */
        }

        .title-modern {
          font-size: 2.5rem; /* Tamaño de fuente moderno */
          font-weight: 700;
          line-height: 1.3;
          color: #1a202c; /* Color de texto oscuro */
          text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
        }

        .content-wrap-modern {
          position: relative; /* <-- AÑADIDO */
          z-index: 5; /* <-- AÑADIDO (para estar sobre z-index: 0, 1, 2, 3) */
        }

        .description-modern {
          font-size: 1.1rem; /* Texto ligeramente más grande */
          line-height: 1.8;
          color: #4a5568; /* Color de texto gris */
          margin-bottom: 40px;
        }

        .counter-area-modern {
          margin-bottom: 50px; /* Espacio para los contadores */
        }

        .btn-modern {
          display: inline-block;
          padding: 15px 40px;
          font-size: 1rem;
          font-weight: 600;
          text-align: center;
          color: white;
          background: linear-gradient(45deg, #007bff, #0056b3); /* Degradado azul */
          border-radius: 10px; /* Esquinas redondeadas */
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 15px rgba(0, 86, 179, 0.3); /* Sombra para el botón */
          border: none;
        }

        .btn-modern:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 20px rgba(0, 86, 179, 0.4);
          background: linear-gradient(45deg, #0056b3, #007bff); /* Invertir degradado o hacer más oscuro */
        }

        /* Responsive adjustments */
        @media (max-width: 991px) {
          .fact-img-wrap-modern {
            padding-right: 0;
            padding-bottom: 0;
            margin-bottom: 50px;
            text-align: center;
          }
          .small-img-modern {
            position: static; /* Ajusta la posición en móviles */
            margin-top: 20px;
            width: 150px;
          }
          .img-overlay-shape {
              display: none; /* Oculta el overlay en pantallas pequeñas */
          }
          .title-modern {
            font-size: 2rem;
          }
        }

        @media (max-width: 767px) {
          .fact-area-modern {
            padding-top: 80px;
            padding-bottom: 80px;
          }
          .main-img-modern {
            border-radius: 15px;
          }
          .small-img-modern {
            width: 120px;
            border-radius: 10px;
            border: 3px solid white;
          }
          .title-modern {
            font-size: 1.8rem;
          }
          .description-modern {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Fact;

