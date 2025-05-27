// ================================
// COMPONENTE BOTÓN
// Archivo: Boton.jsx
// ================================

import React from 'react';

export default function Boton({ 
  children, // JSX children estándar
  contenido, // alternativo en español
  hijos, // alternativo en español
  tipo = "normal",  // "normal", "primario", "secundario", "exito", "peligro", "advertencia", "outline"
  tamano = "normal",  // "pequeno", "normal", "grande"
  completo = false,
  deshabilitado = false,
  haciendoClic, // onClick
  tipoFormulario = "button",  // "button", "submit", "reset"
  claseCSS = "", // className
  ...otrasProps 
}) {
  // Prioridad: children JSX > contenido > hijos
  const elementosHijos = children || contenido || hijos;
  
  const clases = [
    "boton",
    `boton--${tipo}`,
    tamano === "pequeno" && "boton--pequeno",
    tamano === "grande" && "boton--grande",
    completo && "boton--completo",
    claseCSS
  ].filter(Boolean).join(" ");

  return (
    <button
      type={tipoFormulario}
      className={clases}
      onClick={haciendoClic}
      disabled={deshabilitado}
      {...otrasProps}
    >
      {elementosHijos}
    </button>
  );
}