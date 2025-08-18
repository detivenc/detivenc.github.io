# Portfolio (Astro)

Este proyecto es un portfolio personal construido con Astro y soporte multi‑idioma (ES/EN). Incluye varias secciones generadas a partir de un CV en formato JSON y un selector de idioma que también está integrado con la impresión del CV.

## ✨ Características

- i18n (es/en) con claves centralizadas en `src/i18n/ui.ts` y utilidades en `src/i18n/utils.ts`.
- Selector de idioma (ES/EN) que se oculta automáticamente al imprimir (`window.print()` o imprimir desde el navegador).
- Secciones:
  - About, Experience, Education, Projects, Skills.
  - Certificates: tarjeta por certificado con nombre, entidad emisora y fecha.
  - Interests: tarjetas grandes por interés, con etiquetas de palabras clave.
  - Languages: barra de nivel por idioma. La barra se ajusta a partir de niveles CEFR (A1–C2) o descriptores en ES/EN (p. ej. "Principiante", "Avanzado", "Native").
- Diseño responsive y preparado para imprimir.

## 📁 Datos del CV

- `cv.json`: versión en español.
- `cv_english.json`: versión en inglés.
- Las páginas cargan el CV correspondiente y lo pasan como prop a los componentes de sección.

Si añades nuevas secciones o campos, actualiza el JSON correspondiente y, si procede, añade las claves de traducción en `src/i18n/ui.ts`.

## 🌐 Rutas e idiomas

- Español: `/es`
- Inglés: `/en`

La utilidad `getLangFromUrl` detecta el idioma desde la URL y `useTranslations` resuelve las cadenas traducidas. Los títulos de sección y algunos `title` de enlaces usan claves i18n como `projects.title`, `projects.see.project`, etc.

## 🖨️ Impresión

- Puedes imprimir desde la paleta de comandos (atajo Ctrl+P) o desde el navegador.
- El Language Picker (EN/ES) no aparece en la impresión.
- Algunas animaciones/transiciones se desactivan al imprimir para un resultado más limpio.

## ▶️ Desarrollo

Requisitos: Bun instalado.

- Instalar dependencias: `bun install`
- Entorno de desarrollo: `bun dev` (por defecto en `http://localhost:4321`)
- Build producción: `bun build`
- Previsualización del build: `bun preview`

## 📦 Estructura relevante

- `src/components/sections/*`: componentes por sección (Projects, Skills, Certificates, Interests, Languages, etc.)
- `src/components/LanguagePicker.astro`: selector de idioma (oculto en impresión).
- `src/i18n/ui.ts`: claves de traducción.
- `src/i18n/utils.ts`: helpers i18n.
- `src/pages/es` y `src/pages/en`: páginas por idioma.

## 💡 Notas

- Para añadir proyectos con enlace a código, usa el campo `github` en cada proyecto del CV.
- La barra de idiomas intenta normalizar niveles (A1–C2) y términos comunes en ES/EN. Si un valor no coincide, se usa un valor intermedio por defecto.
