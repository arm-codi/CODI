// ================================
// COMPONENTE TEXTO
// Archivo: Texto.jsx
// ================================

import React from 'react';

export default function Texto({ 
  children, // JSX children estándar
  contenido, // alternativo en español
  hijos, // alternativo en español
  estilo = "normal",  // "normal", "negrita", "cursiva", "resaltado"
  color = "normal",  // "normal", "error", "exito", "advertencia"
  claseCSS = "", // className
  ...otrasProps 
}) {
  // Prioridad: children JSX > contenido > hijos
  const elementosHijos = children || contenido || hijos;
  
  const clases = [
    "texto",
    estilo === "negrita" && "texto--negrita",
    estilo === "cursiva" && "texto--cursiva",
    estilo === "resaltado" && "texto--resaltado",
    color === "error" && "texto--error",
    color === "exito" && "texto--exito",
    color === "advertencia" && "texto--advertencia",
    claseCSS
  ].filter(Boolean).join(" ");

  return (
    <span className={clases} {...otrasProps}>
      {elementosHijos}
    </span>
  );
}