# Componentes React en Español

Una colección de componentes React básicos con nomenclatura **completamente en español**, diseñados para enseñar React a principiantes hispanohablantes.

## 📁 Estructura de Archivos

```
mi-proyecto/
├── src/
│   ├── componentes/
│   │   ├── Parrafo.jsx
│   │   ├── Imagen.jsx
│   │   ├── Contenedor.jsx
│   │   ├── Texto.jsx
│   │   ├── Cabecera.jsx
│   │   ├── Formulario.jsx
│   │   ├── Campo.jsx
│   │   ├── Boton.jsx
│   │   └── index.js
│   ├── estilos.css
│   ├── App.jsx
│   └── index.js
└── package.json
```

## 🚀 Instalación y Configuración

### 1. Crear proyecto React
```bash
npx create-react-app mi-proyecto
cd mi-proyecto
```

### 2. Crear estructura de carpetas
```bash
mkdir src/componentes
```

### 3. Copiar archivos
- Copia cada archivo `.jsx` a la carpeta `src/componentes/`
- Copia `estilos.css` a la carpeta `src/`
- Reemplaza `src/App.js` con el contenido de `App.jsx`

### 4. Importar estilos en src/index.js
```javascript
import './estilos.css';
```

### 5. Ejecutar la aplicación
```bash
npm start
```

## 📖 Componentes Disponibles

### 1. **Párrafo** (`<Parrafo>`)
```jsx
<Parrafo tamano="grande" alineacion="centrado">
  Mi primer párrafo
</Parrafo>
```

**Props:**
- `tamano`: "pequeno", "normal", "grande"
- `alineacion`: "izquierda", "centrado", "derecha"
- `claseCSS`: clases CSS adicionales
- `contenido` o `hijos`: contenido del párrafo

### 2. **Imagen** (`<Imagen>`)
```jsx
<Imagen 
  fuente="mi-imagen.jpg" 
  textoAlternativo="Descripción" 
  forma="circular" 
  sombra 
  centrada 
/>
```

**Props:**
- `fuente`: URL de la imagen (requerido)
- `textoAlternativo`: texto alternativo (requerido)
- `forma`: "normal", "circular"
- `sombra`: true/false
- `centrada`: true/false
- `ancho`: ancho de la imagen
- `alto`: alto de la imagen
- `claseCSS`: clases CSS adicionales

### 3. **Contenedor** (`<Contenedor>`)
```jsx
<Contenedor tipo="tarjeta">
  Contenido aquí
</Contenedor>
```

**Props:**
- `tipo`: "normal", "tarjeta", "centrado", "columna", "fila"
- `claseCSS`: clases CSS adicionales
- `contenido` o `hijos`: elementos hijo

### 4. **Texto** (`<Texto>`)
```jsx
<Texto estilo="negrita" color="exito">
  Texto importante
</Texto>
```

**Props:**
- `estilo`: "normal", "negrita", "cursiva", "resaltado"
- `color`: "normal", "error", "exito", "advertencia"
- `claseCSS`: clases CSS adicionales
- `contenido` o `hijos`: texto a mostrar

### 5. **Cabecera** (`<Cabecera>`)
```jsx
<Cabecera nivel={1} centrada>
  Mi Título Principal
</Cabecera>
```

**Props:**
- `nivel`: 1-6 (corresponde a h1-h6)
- `centrada`: true/false
- `claseCSS`: clases CSS adicionales
- `contenido` o `hijos`: texto del título

### 6. **Formulario** (`<Formulario>`)
```jsx
<Formulario alEnviar={manejarEnvio} tipo="sombra">
  {/* campos aquí */}
</Formulario>
```

**Props:**
- `alEnviar`: función para manejar el envío
- `tipo`: "normal", "compacto", "sombra"
- `claseCSS`: clases CSS adicionales
- `contenido` o `hijos`: campos del formulario

### 7. **Campo** (`<Campo>`)
```jsx
<Campo
  etiqueta="Tu nombre"
  tipo="text"
  textoAyuda="Escribe aquí"
  valor={nombre}
  alCambiar={(e) => setNombre(e.target.value)}
  requerido
/>
```

**Props:**
- `etiqueta`: texto del label (requerido)
- `tipo`: "text", "email", "password", "number", "textarea"
- `textoAyuda`: texto placeholder
- `valor`: valor controlado
- `alCambiar`: función para cambios
- `requerido`: true/false
- `error`: true/false (estilo de error)
- `exito`: true/false (estilo de éxito)
- `claseCSS`: clases CSS adicionales

### 8. **Botón** (`<Boton>`)
```jsx
<Boton tipo="primario" tamano="grande" haciendoClic={miFuncion}>
  Hacer clic
</Boton>
```

**Props:**
- `tipo`: "normal", "primario", "secundario", "exito", "peligro", "advertencia", "outline"
- `tamano`: "pequeno", "normal", "grande"
- `completo`: true/false (ancho completo)
- `deshabilitado`: true/false
- `haciendoClic`: función onClick
- `tipoFormulario`: "button", "submit", "reset"
- `claseCSS`: clases CSS adicionales
- `contenido` o `hijos`: texto/elementos del botón

## 💡 Ejemplos de Uso

### Importación Individual
```jsx
import Parrafo from './componentes/Parrafo';
import Boton from './componentes/Boton';
```

### Importación Múltiple
```jsx
import { Parrafo, Boton, Contenedor } from './componentes';
```

### Ejemplo Básico
```jsx
function MiComponente() {
  const [nombre, setNombre] = useState('');
  
  return (
    <Contenedor tipo="tarjeta">
      <Cabecera nivel={2}>Bienvenido</Cabecera>
      <Parrafo>
        Este es mi <Texto estilo="negrita">primer componente</Texto>
      </Parrafo>
      
      <Campo
        etiqueta="Tu nombre"
        valor={nombre}
        alCambiar={(e) => setNombre(e.target.value)}
        textoAyuda="Escribe tu nombre aquí"
      />
      
      <Boton 
        tipo="primario"
        haciendoClic={() => alert(`¡Hola ${nombre}!`)}
      >
        Saludar
      </Boton>
    </Contenedor>
  );
}
```

## 🌍 Props Traducidas - Mapeo Completo

| Prop en Español | Prop React Original | Descripción |
|-----------------|-------------------|-------------|
| `contenido` / `hijos` | `children` | Elementos hijo |
| `claseCSS` | `className` | Clases CSS |
| `haciendoClic` | `onClick` | Evento de clic |
| `alCambiar` | `onChange` | Evento de cambio |
| `alEnviar` | `onSubmit` | Evento de envío |
| `textoAyuda` | `placeholder` | Texto de ayuda |
| `fuente` | `src` | URL de imagen |
| `textoAlternativo` | `alt` | Texto alternativo |
| `valor` | `value` | Valor del input |
| `deshabilitado` | `disabled` | Estado deshabilitado |
| `requerido` | `required` | Campo requerido |
| `ancho` | `width` | Ancho del elemento |
| `alto` | `height` | Alto del elemento |

## 🎓 Para Instructores

### Progresión Pedagógica Sugerida:

1. **Nivel 1:** Componentes simples
   ```jsx
   <Texto>Hola mundo</Texto>
   <Parrafo>Mi primer párrafo</Parrafo>
   ```

2. **Nivel 2:** Props básicos
   ```jsx
   <Texto estilo="negrita">Texto importante</Texto>
   <Cabecera nivel={1}>Mi título</Cabecera>
   ```

3. **Nivel 3:** Composición
   ```jsx
   <Contenedor tipo="tarjeta">
     <Cabecera nivel={2}>Título</Cabecera>
     <Parrafo>Contenido</Parrafo>
   </Contenedor>
   ```

4. **Nivel 4:** Eventos
   ```jsx
   <Boton haciendoClic={() => alert('¡Hola!')}>
     Saludar
   </Boton>
   ```

5. **Nivel 5:** Estado y formularios
   ```jsx
   const [nombre, setNombre] = useState('');
   <Campo 
     valor={nombre} 
     alCambiar={(e) => setNombre(e.target.value)} 
   />
   ```

## 🔧 Personalización

### Modificar Estilos
Edita `estilos.css` para cambiar colores, fuentes y espaciado:

```css
.boton--primario {
  background-color: #tu-color;
}
```

### Agregar Nuevos Componentes
1. Crea `NuevoComponente.jsx` en la carpeta componentes
2. Usa props en español siguiendo el patrón existente
3. Agrega los estilos CSS correspondientes
4. Exporta en `index.js`

## 📝 Ventajas de Props en Español

✅ **Accesibilidad lingüística**: Estudiantes hispanohablantes aprenden más fácilmente  
✅ **Comprensión intuitiva**: `haciendoClic` vs `onClick` es más claro  
✅ **Reducción de barreras**: Menor fricción cognitiva para principiantes  
✅ **Mantenimiento**: Mapeo interno preserva compatibilidad con React  

## 🤝 Contribuir

Para agregar nuevos componentes o mejorar los existentes:
1. Mantén **toda la nomenclatura en español**
2. Mapea props internamente a equivalentes React nativos
3. Incluye props intuitivos y descriptivos
4. Agrega estilos CSS correspondientes
5. Documenta el uso en este README
6. Sigue el patrón: `contenido`/`hijos` para `children`, `claseCSS` para `className`