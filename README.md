# REGESLU — Sitio web empresarial multipágina

Versión del **14 de octubre de 2026**. Proyecto estático listo para GitHub + Vercel: HTML, CSS y JavaScript sin frameworks ni dependencias.

## Qué incluye

- Inicio (`/`) con identidad y animaciones de REGESLU original, clientes y 8 tarjetas de servicios enlazadas.
- Catálogo de servicios (`/servicios/`) con 8 páginas independientes:
  - `desarrollo-web/`, `marketing-digital/`, `seo-google/`, `cotizadores-automatizacion/`, `consultoria-procesos/`, `energia-solar/`, `maquinados-industriales/`, `eventos-corporativos/`.
- Nosotros, Proyectos (marcas proporcionadas en el proyecto original), Contacto y Aviso de privacidad.
- `sitemap.xml`, `robots.txt`, títulos/descripciones/canonical y Open Graph por página.
- Datos estructurados JSON-LD: Organization, WebSite, WebPage, BreadcrumbList y Service según página.
- Imagen de compartir: `images/regeslu-compartir.jpg` y conservación del logo original.
- Formularios que preparan el mensaje en WhatsApp sin almacenamiento en un servidor propio.
- Google Tag Manager **GTM-K2WK2CFG** integrado una sola vez en `<head>` y `<body>` **en las 14 páginas de indexación** y la página 404.
- Verificación de Google Search Console original preservada: `DcKPJSdP05TOtJhjiBDzfvTclPDUQnPpOd2PEOv6DGM`.

## Publicar en GitHub / Vercel

1. Descomprime el ZIP y **sube el contenido interior de esta carpeta** a la raíz del repositorio GitHub: `index.html`, `css/`, `js/`, `images/`, `servicios/`, etc. No publiques únicamente el ZIP en GitHub.
2. En Vercel, importa el repositorio mediante **Add New → Project → Import Git Repository**.
3. Framework: **Other**; Build command: **ninguno**; Output directory: **vacío / raíz**. No requiere instalar npm.
4. Despliega y comprueba que se abran tanto la portada como `https://regeslu.com/servicios/desarrollo-web/`.
5. En **Settings → Domains**, asocia el dominio `regeslu.com` y verifica la configuración de DNS de acuerdo con lo que indique Vercel.
6. Si la página actual ya está publicada, la actualización se verá al desplegar los archivos del mismo repositorio y rama que tenga conectado Vercel.

## Google Tag Manager y Analytics 4

El snippet proporcionado corresponde a **Tag Manager**, no es por sí mismo una etiqueta de Google Analytics 4.

1. Entra a tagmanager.google.com, abre el contenedor `GTM-K2WK2CFG`.
2. Crea una etiqueta de tipo **Google tag** usando el ID `G-XXXXXXXXXX` de tu flujo web de Google Analytics 4 (ese ID se obtiene en analytics.google.com, no está incluido en este repositorio).
3. Asigna un disparador adecuado y revisa configuración de consentimiento según corresponda.
4. Prueba con **Vista previa / Tag Assistant**, valida medición en **Tiempo real / DebugView** de GA4 y **Publica** el contenedor GTM.
5. En el código se envían eventos `whatsapp_link_click` y `lead_form_whatsapp_open` a `dataLayer`; no se envían nombres, teléfonos ni mensajes a estos eventos. El evento de apertura de WhatsApp **no prueba que el usuario haya enviado el mensaje**.
6. No dupliques la etiqueta de GA4 directamente en HTML si ya está instalada mediante GTM.

## SEO, Google e IA

- Página canónica para cada ruta bajo `https://regeslu.com/`.
- Sitemap actualizado en `https://regeslu.com/sitemap.xml`.
- Abre Search Console y envía el sitemap para descubrir las URL nuevas. Puedes solicitar indexación de páginas prioritarias.
- Comprueba Search Console, Lighthouse/PageSpeed y la prueba de resultados enriquecidos de Google tras la publicación.
- Los datos estructurados y el contenido orientado a preguntas ayudan a la comprensión e indexación, **pero no garantizan posicionamiento, aparición en IA ni ventas**.
- Revisa periódicamente información, enlaces de clientes y textos de cada servicio para mantenerlos verificables y actuales.

## Importante: privacidad y consentimiento

El aviso de privacidad agregado es un borrador informativo técnico y **requiere revisión legal** con los datos definitivos del responsable de los tratamientos. Antes de publicar etiquetas de cookies/analítica/marketing en GTM, define requisitos de consentimiento y avisos aplicables a los visitantes.

## Contacto

- Correo: regeslu10@gmail.com
- WhatsApp: +52 56 6093 9384
- Ubicación de referencia: Santiago de Querétaro, Querétaro. Atención remota nacional. La disponibilidad de proyectos técnicos y especializados depende de evaluación.

## Estructura

```
index.html
404.html
css/styles.css
css/pages.css
js/main.js
images/...
servicios/index.html
servicios/<cada-servicio>/index.html
nosotros/index.html
proyectos/index.html
contacto/index.html
aviso-de-privacidad/index.html
robots.txt
sitemap.xml
site.webmanifest
README.md
```
