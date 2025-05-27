// ================================
// COMPONENTE CONTENEDOR
// Archivo: Contenedor.jsx
// ================================

import React from 'react';

export default function Contenedor({ 
  children, // JSX children estándar
  contenido, // alternativo en español
  hijos, // alternativo en español
  tipo = "normal",  // "normal", "tarjeta", "centrado", "columna", "fila"
  claseCSS = "", // className
  ...otrasProps 
}) {
  // Prioridad: children JSX > contenido > hijos
  const elementosHijos = children || contenido || hijos;
  
  const clases = [
    "contenedor",
    tipo === "tarjeta" && "contenedor--tarjeta",
    tipo === "centrado" && "contenedor--centrado",
    tipo === "columna" && "contenedor--columna",
    tipo === "fila" && "contenedor--fila",
    claseCSS
  ].filter(Boolean).join(" ");

  return (
    <div className={clases} {...otrasProps}>
      {elementosHijos}
    </div>
  );
}