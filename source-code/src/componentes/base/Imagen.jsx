// ================================
// COMPONENTE IMAGEN
// Archivo: Imagen.jsx
// ================================

import React from 'react';

export default function Imagen({ 
  fuente, // src
  textoAlternativo, // alt
  forma = "normal",  // "normal", "circular"
  sombra = false,
  centrada = false,
  ancho, // width
  alto, // height
  claseCSS = "", // className
  ...otrasProps 
}) {
  const clases = [
    "imagen",
    forma === "circular" && "imagen--circular",
    sombra && "imagen--sombra",
    centrada && "imagen--centrada",
    claseCSS
  ].filter(Boolean).join(" ");

  return (
    <picture>
      <img 
        src={fuente} 
        alt={textoAlternativo}
        width={ancho}
        height={alto}
        className={clases}
        {...otrasProps}
      />
    </picture>
  );
}