// ================================
// EJEMPLO DE USO DE COMPONENTES
// Archivo: App.jsx
// ================================

import React, { useState } from 'react';
import './componentes/base/Estilos.css'; // Importar estilos CSS

// Importar componentes desde el index
import {
  Parrafo,
  Contenedor,
  Texto,
  Imagen,
  Cabecera,
  Formulario,
  Campo,
  Boton
} from './componentes/ComponentesBase';

export default function App() {
  return (
    <Contenedor tipo="columna">
      <Parrafo tamano="grande" alineacion="centrado">
        Bienvenido a mi aplicación creada con{" "}
        <Texto estilo="negrita" color="exito">
          componentes React en español
        </Texto>
        . Esta es una demostración de todos los componentes disponibles.
      </Parrafo>
      <Cabecera nivel={1} centrada>
        Mi primera aplicación
      </Cabecera>
      <Contenedor tipo="tarjeta">
        
      </Contenedor>
    </Contenedor>
  );
}