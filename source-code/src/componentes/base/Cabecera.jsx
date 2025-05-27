// ================================
// COMPONENTE CABECERA
// Archivo: Cabecera.jsx
// ================================

import React from 'react';

export default function Cabecera({ 
  children, 
  nivel = 1,  // 1-6
  centrada = false,
  className = "",
  ...props 
}) {
  const Tag = `h${Math.min(Math.max(nivel, 1), 6)}`;
  
  const clases = [
    "cabecera",
    `cabecera--h${nivel}`,
    centrada && "cabecera--centrada",
    className
  ].filter(Boolean).join(" ");

  return (
    <Tag className={clases} {...props}>
      {children}
    </Tag>
  );
}