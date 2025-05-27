// ================================
// COMPONENTE CAMPO (LABEL + INPUT)
// Archivo: Campo.jsx
// ================================

import React from 'react';

export default function Campo({ 
  etiqueta, // label text
  tipo = "text",  // "text", "email", "password", "number", "tel", "url", "textarea"
  textoAyuda = "", // placeholder
  valor, // value
  alCambiar, // onChange
  requerido = false,
  error = false,
  exito = false,
  claseCSS = "", // className
  ...otrasProps 
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
    <div className={`campo ${claseCSS}`}>
      <label htmlFor={id} className={clasesEtiqueta}>
        {etiqueta}
      </label>
      {tipo === "textarea" ? (
        <textarea
          id={id}
          className={clasesEntrada}
          placeholder={textoAyuda}
          value={valor}
          onChange={alCambiar}
          required={requerido}
          rows={4}
          {...otrasProps}
        />
      ) : (
        <input
          id={id}
          type={tipo}
          className={clasesEntrada}
          placeholder={textoAyuda}
          value={valor}
          onChange={alCambiar}
          required={requerido}
          {...otrasProps}
        />
      )}
    </div>
  );
}