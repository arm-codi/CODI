// ================================
// COMPONENTE CAMPO (LABEL + INPUT)
// Archivo: Campo.jsx
// ================================

import React from 'react';

export default function Campo({ 
  etiqueta,
  tipo = "text",  // "text", "email", "password", "number", "tel", "url", "textarea"
  placeholder = "",
  valor,
  onChange,
  requerido = false,
  error = false,
  exito = false,
  className = "",
  ...props 
}) {
  const clasesEtiqueta = [
    "campo__etiqueta",
    requerido && "campo__etiqueta--requerido"
  ].filter(Boolean).join(" ");

  const clasesEntrada = [
    "campo__entrada",
    error && "campo__entrada--error",
    exito && "campo__entrada--exito"
  ].filter(Boolean).join(" ");

  const id = `campo-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`campo ${className}`}>
      <label htmlFor={id} className={clasesEtiqueta}>
        {etiqueta}
      </label>
      {tipo === "textarea" ? (
        <textarea
          id={id}
          className={clasesEntrada}
          placeholder={placeholder}
          value={valor}
          onChange={onChange}
          required={requerido}
          rows={4}
          {...props}
        />
      ) : (
        <input
          id={id}
          type={tipo}
          className={clasesEntrada}
          placeholder={placeholder}
          value={valor}
          onChange={onChange}
          required={requerido}
          {...props}
        />
      )}
    </div>
  );
}