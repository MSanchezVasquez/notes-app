# 📝 Aplicación de Notas con React y Zustand

¡Bienvenido/a! Esta es una aplicación de notas moderna, responsiva y eficiente creada con **React**.  
Utiliza **Zustand** para un manejo de estado global simple y `zustand/middleware/persist` para guardar todas tus notas directamente en el **localStorage** de tu navegador, asegurando que no pierdas tu trabajo.

---

## ✨ Características Principales

- **CRUD Completo**: Crea, lee, actualiza y elimina notas de manera intuitiva.
- **Personalización**: Asigna colores a tus notas para una mejor organización visual.
- **Diseño Responsivo**: Disfruta de una experiencia perfecta en cualquier dispositivo (móvil, tablet o escritorio).
- **Modo Oscuro Automático**: La interfaz se adapta al tema de tu sistema operativo.
- **Persistencia de Datos**: Tus notas se guardan localmente y persisten entre sesiones.
- **Interfaz Pulida**: Modal de confirmación para evitar borrados accidentales y animaciones sutiles para una mejor UX.
- **Rendimiento Optimizado**: Uso de `React.memo` y `useCallback` para prevenir renders innecesarios.

---

## 🚀 Tecnologías Utilizadas

- **React** – Construcción de la interfaz declarativa y basada en componentes.
- **Zustand** – Manejo de estado global minimalista y eficiente.
- **CSS Moderno** – Estilos modulares, variables CSS y soporte para temas.
- **Vite** – Herramienta de construcción ultrarrápida y servidor de desarrollo.

---

## ⚙️ Instalación y Uso Local

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

2. **Navega al directorio del proyecto:**

   ```bash
   cd tu-repositorio
   ```

3. **Instala las dependencias:**

   ```bash
   npm install
   ```

4. **Ejecuta el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

5. **Abre tu navegador y visita:**
   👉 [http://localhost:5173](http://localhost:5173) _(o el puerto indicado por Vite en tu terminal)_

---

## 📂 Estructura del Proyecto

```
/src
├── /components
│   ├── NoteForm.jsx      # Componente para crear y editar notas
│   ├── NoteForm.css      # Estilos para el formulario
│   ├── NoteItem.jsx      # Componente para mostrar una nota individual
│   └── NoteItem.css      # Estilos para las tarjetas de nota
│
├── /store
│   └── notesStore.js     # Store de Zustand para el manejo del estado global
│
├── App.jsx               # Componente principal que une la aplicación
├── App.css               # Estilos principales y del modal
├── main.jsx              # Punto de entrada de React
└── index.css             # Estilos globales y variables CSS
```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! 🎉
Si deseas colaborar:

1. Haz un **fork** del repositorio.
2. Crea una rama con tu nueva función o mejora:

   ```bash
   git checkout -b feature/nueva-funcion
   ```

3. Haz commit de tus cambios:

   ```bash
   git commit -m "Agregada nueva función"
   ```

4. Haz push a la rama:

   ```bash
   git push origin feature/nueva-funcion
   ```

5. Abre un **Pull Request**.

---
