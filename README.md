# Classic Lounge Café — Astro

Sitio web estático preparado para Classic Lounge Café. Está construido con Astro, HTML semántico, CSS moderno y JavaScript mínimo para interacciones accesibles.

## Incluye

- Hero comercial para café, desayunos y postres.
- Navegación responsive con menú móvil accesible.
- Secciones de propuesta de valor, productos destacados, experiencia y ubicación.
- Datos de carta separados en `src/data/menu.ts` para agregar productos y precios posteriormente.
- SEO básico: title, description, Open Graph y JSON-LD de `CafeOrCoffeeShop`.
- Accesibilidad: skip link, landmarks, etiquetas, focus visible, `aria-expanded`, reduced motion y contraste cuidado.
- Diseño responsive mobile-first.
- Base preparada para futuras integraciones: WhatsApp, reservas, carta dinámica, analítica, CMS o backend.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```

## Publicar en GitHub Pages

El workflow de GitHub Actions publica el sitio al hacer push a `main` o `master`.
En el repositorio, ve a **Settings → Pages** y selecciona **GitHub Actions** como
fuente de publicación. La configuración de Astro detecta automáticamente el
repositorio y ajusta la URL base para páginas de proyecto y páginas de usuario.

## Personalización rápida

1. Edita `src/data/menu.ts` para productos, categorías y precios.
2. Cambia los datos del negocio en `src/data/business.ts`.
3. Sustituye `public/images/classic-lounge-poster.png` por las fotografías finales.
4. Actualiza el dominio en `astro.config.mjs`.
5. Configura los enlaces reales de WhatsApp, Instagram y Google Maps.
