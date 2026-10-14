# REGESLU | Soluciones digitales y empresariales

REGESLU se dedica principalmente al **desarrollo web**, **marketing y creación de contenido**, **ERP/CRM**, **cotizadores y automatización**, y **consultoría de procesos y planeación estratégica**.

## Servicios con aliados estratégicos

Los servicios de **grúas y maniobras, construcción y mantenimiento, energía solar, maquinados industriales y eventos** son **tercerizados**. REGESLU únicamente gestiona la vinculación comercial y solicitudes; el proveedor externo es quien evalúa, contrata y realiza la ejecución conforme al alcance acordado. Nunca se presentan como operación propia.

Página separada de aliados: `/aliados-estrategicos/`. Las páginas de cada especialidad se conservan para consultas y enlaces de buscadores, con aviso de servicio externo.

## Publicación GitHub y Vercel

1. Respalda tu repositorio actual.
2. Borra archivos anteriores que contienen clientes: `proyectos/index.html`, el directorio `images/clientes/` y, si aún existe, `servicios/seo-google/index.html` (se integró a marketing). GitHub no elimina esos archivos automáticamente al cargar un ZIP.
3. Descomprime **SOLO_CAMBIOS** y sube su **contenido** conservando carpetas y rutas en la **raíz** del repositorio (no metas una carpeta adicional).
4. Confirma `Commit changes` en la rama conectada a Vercel. Si los despliegues automáticos están activos, Vercel publicará el cambio.
5. Revisa el inicio, `/servicios/`, `/aliados-estrategicos/`, el formulario de WhatsApp, `sitemap.xml` y `robots.txt`.

Para una carga desde cero, usa el ZIP **COMPLETO** con archivos en la raíz del proyecto. No es necesario borrar el repositorio ni desconectar Vercel.

## Analítica y SEO

- Google Tag Manager `GTM-K2WK2CFG` aparece al inicio de `<head>` y el `noscript` tras `<body>` en todas las páginas.
- La etiqueta de Google Analytics 4 aún debe configurarse y publicarse dentro de Google Tag Manager.
- Se conservan los enlaces canónicos, metadatos de Open Graph y Twitter, datos estructurados JSON-LD, `sitemap.xml` y `robots.txt`.
- La indexación/visibilidad en Google y buscadores con IA no se garantiza y depende de rastreo y calidad de contenido.
