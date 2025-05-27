// ================================
// COMPONENTE TEXTO
// Archivo: Texto.jsx
// ================================

import React from 'react';

export default function Texto({ 
  children, 
  estilo = "normal",  // "normal", "negrita", "cursiva", "resaltado"
  color = "normal",  // "normal", "error", "exito", "advertencia"
  className = "",
  ...props 
}) {
  const clases = [
    "texto",
    estilo === "negrita" && "texto--negrita",
    estilo === "cursiva" && "texto--cursiva",
    estilo === "resaltado" && "texto--resaltado",
    color === "error" && "texto--error",
    color === "exito" && "texto--exito",
    color === "advertencia" && "texto--advertencia",
    className
  ].filter(Boolean).join(" ");

  return (
    <span className={clases} {...props}>
      {children}
    </span>
  );
}