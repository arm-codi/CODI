// ================================
// COMPONENTE CABECERA
// Archivo: Cabecera.jsx
// ================================

import React from 'react';

export default function Cabecera({ 
  children, // JSX children estándar
  contenido, // alternativo en español
  hijos, // alternativo en español
  nivel = 1,  // 1-6
  centrada = false,
  claseCSS = "", // className
  ...otrasProps 
}) {
  const Tag = `h${Math.min(Math.max(nivel, 1), 6)}`;
  
  // Prioridad: children JSX > contenido > hijos
  const elementosHijos = children || contenido || hijos;
  
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