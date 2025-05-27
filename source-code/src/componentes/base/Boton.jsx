// ================================
// COMPONENTE BOTÓN
// Archivo: Boton.jsx
// ================================

import React from 'react';

export default function Boton({ 
  children, 
  tipo = "normal",  // "normal", "primario", "secundario", "exito", "peligro", "advertencia", "outline"
  tamano = "normal",  // "pequeno", "normal", "grande"
  completo = false,
  deshabilitado = false,
  onClick,
  tipoFormulario = "button",  // "button", "submit", "reset"
  className = "",
  ...props 
}) {
  const clases = [
    "boton",
    `boton--${tipo}`,
    tamano === "pequeno" && "boton--pequeno",
    tamano === "grande" && "boton--grande",
    completo && "boton--completo",
    className
  ].filter(Boolean).join(" ");

  return (
    <button
      type={tipoFormulario}
      className={clases}
      onClick={onClick}
      disabled={deshabilitado}
      {...props}
    >
      {children}
    </button>
  );
}