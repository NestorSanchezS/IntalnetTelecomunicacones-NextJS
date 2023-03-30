import React from "react";

const TdtMain = () => {
  return (
    <main>
      <section className="fact-area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-7">
              <h3 className="mt-5 mb-5">TDT (TELEVISIÓN DIGITAL PARA TODOS)</h3>
              <div className="fact-img-wrap">
                <img
                  src="assets/img/images/tdt.png"
                  className="main-img"
                  alt="img not found"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fact-area pt-45 pb-110">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-8 mb-3">
              <div className="video-content-wrap">
                <p>
                  Desde el año 2012 se empezó a implementar en Colombia la TDT,
                  que consiste en un servicio de televisión digital que
                  reemplazará la actual televisión análoga o irradiada como
                  comúnmente se le conoce la cual aún está disponible en
                  Colombia.
                </p>
                <p>
                  En el siguiente enlace podrás consultar la cobertura de este
                  servicio, siempre y cuando cuente con los dispositivos
                  apropiados para recibir esta señal.
                  http://www.tdtparatodos.tv/cobertura-de-la-television-digital:
                </p>
                <ul className="about-list">
                  <li>
                    Un Televisor que tenga incorporado sintonizador DVB-T2 (ver
                    manual del televisor) o en su defecto un decodificador
                    externo.
                  </li>
                  <li>Una Antena de UHF sea interna o externa.</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="video-content-wrap">
                <p>
                  Si usted es usuario del servicio de televisión proporcionado
                  por INTALNET Telecomunicaciones (INVERSIONES ZULUAGA SEJIN
                  SAS) y también cuenta con el servicio de TDT en su hogar,
                  puede acceder a los dos servicios, puesto ninguno interfiere
                  con el otro.
                </p>
                Si en la actualidad en su casa cuenta con antena aérea propia o
                en su edificio se cuenta con antena comunal, podrá conectar este
                servicio también al televisor o televisores que tenga.
                <p>
                  Por lo general, para ver los dos servicios es necesario la
                  instalación de un dispositivo conmutable que permita acceder
                  bien sea a un servicio o al otro, por lo tanto le sugerimos se
                  comunique con nuestra oficina más cercana, mediante esta
                  pagina web o por medio de nuestras redes sociales
                  (intalnet_telecomunicaciones) donde con gusto le atenderemos y
                  proveeremos para que pueda contar con dichos servicios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TdtMain;
