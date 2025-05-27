// ================================
// COMPONENTE PÁRRAFO
// Archivo: Parrafo.jsx
// ================================

import React from 'react';

export default function Parrafo({ 
  children, 
  tamano = "normal",  // "pequeno", "normal", "grande"
  alineacion = "izquierda",  // "izquierda", "centrado", "derecha"
  className = "",
  ...props 
}) {
  const clases = [
    "parrafo",
    tamano === "pequeno" && "parrafo--pequeno",
    tamano === "grande" && "parrafo--grande",
    alineacion === "centrado" && "parrafo--centrado",
    className
  ].filter(Boolean).join(" ");

  return (
    <p className={clases} style={{ textAlign: alineacion }} {...props}>
      {children}
    </p>
  );
}