// ================================
// COMPONENTE CABECERA
// Archivo: Cabecera.jsx
// ================================

import React from 'react';

export default function Cabecera({ 
  contenido, // children
  hijos, // children (alternativo)
  nivel = 1,  // 1-6
  centrada = false,
  claseCSS = "", // className
  ...otrasProps 
}) {
  const Tag = `h${Math.min(Math.max(nivel, 1), 6)}`;
  
  // Usar contenido o hijos como children
  const elementosHijos = contenido || hijos;
  
  const clases = [
    "cabecera",
    `cabecera--h${nivel}`,
    centrada && "cabecera--centrada",
    claseCSS
  ].filter(Boolean).join(" ");

  return (
    <Tag className={clases} {...otrasProps}>
      {elementosHijos}
    </Tag>
  );
}