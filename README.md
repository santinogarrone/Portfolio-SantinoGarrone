# Portfolio — Santino Garrone

Proyecto React + Vite + Tailwind CSS.

## Instalación

```
npm install
npm run dev
```

Abre http://localhost:5173

## Build de producción

```
npm run build
```

Genera la carpeta `dist/` lista para subir a Vercel, Netlify, etc.

## Dónde editar cada cosa

- `src/components/Hero.jsx` — nombre, rol, ubicación, email y redes (tarjeta de datos personales).
- `src/components/Servicios.jsx` — servicios y tiempos de entrega.
- `src/components/Proyectos.jsx` — array `proyectos` al principio del archivo. Si el proyecto tiene web pública, pon la URL en `url` y se incrusta como iframe con scroll real. Si no, se muestra un mock de vista previa.
- `src/components/Stack.jsx` — array `skills`. Los logos vienen de Simple Icons (cdn.simpleicons.org), gratis y sin necesidad de guardar archivos. Cambia el slug o añade tecnologías nuevas.
- `src/components/Contacto.jsx` — email de contacto.
- `tailwind.config.js` — paleta de colores (bg, surface, violet, ink...) y tipografías (Unbounded, Inter, JetBrains Mono).

## Notas

- Los proyectos sin `url` muestran un mock scrolleable de ejemplo — sustitúyelo por capturas o el iframe real en cuanto tengas el link.
