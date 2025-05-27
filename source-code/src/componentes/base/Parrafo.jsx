// ================================
// COMPONENTE PÁRRAFO
// Archivo: Parrafo.jsx
// ================================

import React from 'react';

export default function Parrafo({ 
  children, // JSX children estándar
  contenido, // alternativo en español
  hijos, // alternativo en español
  tamano = "normal",  // "pequeno", "normal", "grande"
  alineacion = "izquierda",  // "izquierda", "centrado", "derecha"
  claseCSS = "", // className
  ...otrasProps 
}) {
  // Prioridad: children JSX > contenido > hijos
  const elementosHijos = children || contenido || hijos;
  
  const clases = [
    "parrafo",
    tamano === "pequeno" && "parrafo--pequeno",
    tamano === "grande" && "parrafo--grande",
    alineacion === "centrado" && "parrafo--centrado",
    claseCSS
  ].filter(Boolean).join(" ");

  return (
    <p className={clases} style={{ textAlign: alineacion }} {...otrasProps}>
      {elementosHijos}
    </p>
  );
}