// ================================
// COMPONENTE CONTENEDOR
// Archivo: Contenedor.jsx
// ================================

import React from 'react';

export default function Contenedor({ 
  children, 
  tipo = "normal",  // "normal", "tarjeta", "centrado", "columna", "fila"
  className = "",
  ...props 
}) {
  const clases = [
    "contenedor",
    tipo === "tarjeta" && "contenedor--tarjeta",
    tipo === "centrado" && "contenedor--centrado",
    tipo === "columna" && "contenedor--columna",
    tipo === "fila" && "contenedor--fila",
    className
  ].filter(Boolean).join(" ");

  return (
    <div className={clases} {...props}>
      {children}
    </div>
  );
}