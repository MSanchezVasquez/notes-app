// src/components/Icons.jsx

// 1. Creamos un componente "Base" que tiene todo lo común
// Acepta props como size (tamaño), color y className para estilos extra
const IconBase = ({ children, size = 24, className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props} // Esto permite pasar onClick u otros eventos si fuera necesario
  >
    {children}
  </svg>
);

// 2. Exportamos los iconos específicos usando la Base

export const PlusIcon = (props) => (
  <IconBase {...props}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </IconBase>
);

export const EditIcon = (props) => (
  <IconBase {...props}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </IconBase>
);

export const TrashIcon = (props) => (
  <IconBase {...props}>
    <path d="M3 6h18" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M10 11v6" /> <path d="M14 11v6" />
  </IconBase>
);

export const NoNotesIcon = (props) => (
  <IconBase {...props}>
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    <path d="M2 6h.01" />
    <path d="M2 12h.01" />
    <path d="M2 18h.01" />
    <path d="M7 21h10" />
    <path d="M7 3h10" />
    <path d="M12 3v18" />
  </IconBase>
);
