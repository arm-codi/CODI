// ================================
// COMPONENTE BOTÓN
// Archivo: Boton.jsx
// ================================

import React from 'react';

export default function Boton({ 
  contenido, // children
  hijos, // children (alternativo)
  tipo = "normal",  // "normal", "primario", "secundario", "exito", "peligro", "advertencia", "outline"
  tamano = "normal",  // "pequeno", "normal", "grande"
  completo = false,
  deshabilitado = false,
  haciendoClic, // onClick
  tipoFormulario = "button",  // "button", "submit", "reset"
  claseCSS = "", // className
  ...otrasProps 
}) {
  // Usar contenido o hijos como children
  const elementosHijos = contenido || hijos;
  
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