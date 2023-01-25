import React from "react";

export const ButtonGrillTv = ({ name, plans }) => {
  const typeTvChannels = plans?.map((serv) =>
    serv.services.map((serv2) => serv2)
  );

  const getTypeChannelsTv = typeTvChannels?.map(
    (serv) => serv.find((e) => e.id === 17)?.name
  );

  console.log(getTypeChannelsTv);

  let filepdf = "/assets/docs/monteria.pdf";

  if (getTypeChannelsTv?.includes("75 Canales TV")) {
    filepdf = "/assets/docs/valencia-tierralta.pdf";
  }

  return (
    <>
      <a
        className="btn transparent-btn w-and-btn"
        href={filepdf}
        rel="noopener noreferrer"
        target="_blank"
      >
        Ver Parrilla de Canales
      </a>
    </>
  );
};
