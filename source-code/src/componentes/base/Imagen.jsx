// ================================
// COMPONENTE IMAGEN
// Archivo: Imagen.jsx
// ================================

import React from 'react';

export default function Imagen({ 
  src, 
  alt, 
  forma = "normal",  // "normal", "circular"
  sombra = false,
  centrada = false,
  ancho,
  alto,
  className = "",
  ...props 
}) {
  const clases = [
    "imagen",
    forma === "circular" && "imagen--circular",
    sombra && "imagen--sombra",
    centrada && "imagen--centrada",
    className
  ].filter(Boolean).join(" ");

  return (
    <picture>
      <img 
        src={src} 
        alt={alt}
        width={ancho}
        height={alto}
        className={clases}
        {...props}
      />
    </picture>
  );
}