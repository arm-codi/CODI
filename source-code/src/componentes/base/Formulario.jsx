// ================================
// COMPONENTE FORMULARIO
// Archivo: Formulario.jsx
// ================================

import React from 'react';

export default function Formulario({ 
  children, 
  onSubmit,
  tipo = "normal",  // "normal", "compacto", "sombra"
  className = "",
  ...props 
}) {
  const clases = [
    "formulario",
    tipo === "compacto" && "formulario--compacto",
    tipo === "sombra" && "formulario--sombra",
    className
  ].filter(Boolean).join(" ");

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    if (onSubmit) {
      onSubmit(evento);
    }
  };

  return (
    <form className={clases} onSubmit={manejarEnvio} {...props}>
      {children}
    </form>
  );
}