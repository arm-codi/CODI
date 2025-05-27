// ================================
// COMPONENTE FORMULARIO
// Archivo: Formulario.jsx
// ================================

import React from 'react';

export default function Formulario({ 
  contenido, // children
  hijos, // children (alternativo)
  alEnviar, // onSubmit
  tipo = "normal",  // "normal", "compacto", "sombra"
  claseCSS = "", // className
  ...otrasProps 
}) {
  // Usar contenido o hijos como children
  const elementosHijos = contenido || hijos;
  
  const clases = [
    "formulario",
    tipo === "compacto" && "formulario--compacto",
    tipo === "sombra" && "formulario--sombra",
    claseCSS
  ].filter(Boolean).join(" ");

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    if (alEnviar) {
      alEnviar(evento);
    }
  };

  return (
    <form className={clases} onSubmit={manejarEnvio} {...otrasProps}>
      {elementosHijos}
    </form>
  );
}