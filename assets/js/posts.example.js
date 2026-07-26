/**
 * LBtecno - Archivo de Ejemplo de Publicaciones (posts.example.js)
 * Copia de estructura y plantilla de ejemplo para agregar nuevas publicaciones en la plataforma.
 */

const postsDataExample = [
  // --------------------------------------------------------------------------
  // PLANTILLA VACÍA / EJEMPLO DE ESTRUCTURA PARA NUEVO POST
  // --------------------------------------------------------------------------
  {
    id: "post-ejemplo-id", // Identificador único (String)
    title: "Título de Ejemplo de la Publicación", // Título principal
    category: "Software", // Categorías disponibles: Software, Plantillas, Plugins, Scripts, Recursos
    type: "image", // Tipo de media: "image" o "video"
    mediaUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", // URL de la imagen (si type es "image")
    youtubeId: "", // ID del video de YouTube ej: "dQw4w9WgXcQ" (si type es "video")
    date: "2026-07-25", // Fecha en formato YYYY-MM-DD
    version: "v1.0.0", // Versión del producto digital
    fileSize: "5.0 MB", // Peso del archivo descargable
    shortDescription: "Esta es una breve descripción de resumen para la tarjeta del producto.",
    content: `
      <p>Este es el contenido explicativo detallado que se mostrará dentro del modal.</p>
      <h5>Características destacadas:</h5>
      <ul>
        <li>Característica 1.</li>
        <li>Característica 2.</li>
      </ul>
    `,
    codeSnippet: {
      language: "javascript", // Lenguaje para resaltado (bash, css, php, python, javascript, html)
      title: "Ejemplo de Código de Instalación o Snippet:",
      code: "console.log('Hola Mundo desde LBtecno');"
    },
    externalLinks: [
      { label: "Documentación Oficial", url: "https://example.com/docs", icon: "bi-book" },
      { label: "Repositorio GitHub", url: "https://github.com", icon: "bi-github" }
    ],
    downloadUrl: "https://example.com/downloads/producto-ejemplo.zip",
    downloadFileName: "producto-ejemplo.zip",
    demoUrl: "https://example.com/demo", // URL del demo en vivo o demostración del producto
    tags: ["ejemplo", "plantilla", "lbtecno", "demostracion"]
  },

  // --------------------------------------------------------------------------
  // COPIA DE LOS POSTS ACTUALES EN SISTEMA
  // --------------------------------------------------------------------------
  {
    id: "post-lb-optimizer",
    title: "LB-Optimizer Pro v2.4 - Suite de Optimizacion de Sistema",
    category: "Software",
    type: "image",
    mediaUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    date: "2026-07-20",
    version: "v2.4.0",
    fileSize: "8.5 MB",
    shortDescription: "Script interactivo y ejecutable para la limpieza profunda de caché, optimización de RAM y gestión de procesos en Windows y Linux.",
    content: `
      <p><strong>LB-Optimizer Pro</strong> es una herramienta ligera desarrollada por LBtecno diseñada para ingenieros, administradores de sistemas y usuarios avanzados que buscan exprimir el máximo rendimiento de sus equipos.</p>
      <p>Incluye módulos de desinfección de archivos temporales, liberación rápida de memoria RAM no asignada y desactivación segura de telemetría y servicios innecesarios.</p>
      <h5>Características Principales:</h5>
      <ul>
        <li>Ejecución autónoma sin instalación pesada.</li>
        <li>Limpieza de caché de navegadores, registros y temporales del SO.</li>
        <li>Informe interactivo en consola con tiempos de respuesta.</li>
      </ul>
    `,
    codeSnippet: {
      language: "bash",
      title: "Comando de Instalación Rápida (Consola / Terminal):",
      code: "curl -sSL https://lbtecno.com/scripts/install-optimizer.sh | bash"
    },
    externalLinks: [
      { label: "Documentación en GitHub", url: "https://github.com", icon: "bi-github" },
      { label: "Notas de la Versión 2.4", url: "https://example.com/changelog", icon: "bi-journal-text" }
    ],
    downloadUrl: "https://example.com/downloads/LB-Optimizer-Pro-v2.4.zip",
    downloadFileName: "LB-Optimizer-Pro-v2.4.zip",
    demoUrl: "https://example.com/demo-optimizer",
    tags: ["software", "optimizacion", "windows", "linux", "terminal", "utilidad"]
  },
  {
    id: "post-dashboard-template",
    title: "Plantilla Admin Dashboard Dark Glassmorphism HTML5/CSS3",
    category: "Plantillas",
    type: "video",
    youtubeId: "dQw4w9WgXcQ",
    date: "2026-07-22",
    version: "v1.2.0",
    fileSize: "6.8 MB",
    shortDescription: "Plantilla web completa para paneles de control modernos con estética neon/glassmorphic, gráficos interactivos y Bootstrap 5.",
    content: `
      <p>Aprende a estructurar tu propio panel de administración interactivo utilizando nuestra plantilla UI/UX prémium. En el tutorial en video adjunto mostramos la arquitectura de componentes y la integración de gráficos con Chart.js.</p>
      <p>La plantilla es 100% responsiva y adaptable a dispositivos móviles, tablets y monitores de alta resolución.</p>
      <h5>Incluye:</h5>
      <ul>
        <li>15+ componentes UI reutilizables (Modales, Tablas, Gráficos, Badges).</li>
        <li>Soporte nativo para modo oscuro y efectos de cristal brillante (Glassmorphism).</li>
        <li>Código modular organizado en SCSS/CSS puro.</li>
      </ul>
    `,
    codeSnippet: {
      language: "css",
      title: "Snippet CSS para efecto Glassmorphism:",
      code: `.lb-glass-card {\n  background: rgba(15, 23, 42, 0.65);\n  backdrop-filter: blur(16px) saturate(180%);\n  -webkit-backdrop-filter: blur(16px) saturate(180%);\n  border: 1px solid rgba(255, 255, 255, 0.125);\n  border-radius: 1rem;\n}`
    },
    externalLinks: [
      { label: "Ver Demo en Vivo", url: "https://example.com/demo-dashboard", icon: "bi-box-arrow-up-right" }
    ],
    downloadUrl: "https://example.com/downloads/LB-Glass-Dashboard-Template.zip",
    downloadFileName: "LB-Glass-Dashboard-Template.zip",
    demoUrl: "https://example.com/demo-dashboard",
    tags: ["plantilla", "html5", "css3", "glassmorphism", "dashboard", "ui-kit"]
  },
  {
    id: "post-wp-security-plugin",
    title: "LB-Security Guard - Plugin de Protección WordPress",
    category: "Plugins",
    type: "image",
    mediaUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    date: "2026-07-15",
    version: "v3.0.1",
    fileSize: "2.1 MB",
    shortDescription: "Plugin ultraligero para blindar inicios de sesión en WordPress, bloquear inyecciones SQL y prevenir ataques por fuerza bruta.",
    content: `
      <p><strong>LB-Security Guard</strong> es un plugin para WordPress enfocado en el rendimiento y la seguridad máxima sin sobrecargar la base de datos.</p>
      <p>A diferencia de otras suites pesadas, Security Guard aplica reglas a nivel de encabezados HTTP y filtrado directo de peticiones sospechosas en tiempo real.</p>
      <h5>Funcionalidades destacadas:</h5>
      <ul>
        <li>Ocultación de URL de login (wp-admin).</li>
        <li>Bloqueo IP automático tras 3 intentos fallidos.</li>
        <li>Cabeceras de seguridad HTTP (HSTS, X-Frame-Options, CSP).</li>
      </ul>
    `,
    codeSnippet: {
      language: "php",
      title: "Filtro para customizar límite de intentos de login:",
      code: "add_filter('lb_security_max_login_attempts', function($attempts) {\n    return 5; // Ajustar a 5 intentos máximos\n});"
    },
    externalLinks: [
      { label: "Repositorio GitHub", url: "https://github.com", icon: "bi-github" },
      { label: "Guía de Configuración", url: "https://example.com/docs-security", icon: "bi-book" }
    ],
    downloadUrl: "https://example.com/downloads/lb-security-guard.zip",
    downloadFileName: "lb-security-guard.zip",
    demoUrl: "https://example.com/demo-security-guard",
    tags: ["plugins", "wordpress", "seguridad", "php", "cybersecurity"]
  },
  {
    id: "post-py-backup-script",
    title: "Script Automatizado de Respaldos Nube en Python",
    category: "Scripts",
    type: "video",
    youtubeId: "L_LUpnjgPso",
    date: "2026-07-10",
    version: "v1.5.0",
    fileSize: "1.2 MB",
    shortDescription: "Script en Python para realizar copias de seguridad encriptadas de bases de datos MySQL/PostgreSQL y subirlas a S3/Google Drive.",
    content: `
      <p>Mantén la integridad de tus datos con este script automatizable mediante Cron o Task Scheduler. Encripta tus respaldos con cifrado AES-256 antes de sincronizarlos con la nube.</p>
      <p>Revisa el tutorial en video donde explicamos cómo configurar las llaves API y programar la ejecución en servidores Ubuntu/Debian.</p>
    `,
    codeSnippet: {
      language: "python",
      title: "Configuración de Variables de Entorno (.env):",
      code: "DB_HOST=localhost\nDB_NAME=lbtecno_prod\nENCRYPTION_KEY=lbtecno_secret_key_aes256\nSTORAGE_PROVIDER=s3\nS3_BUCKET_NAME=backups-lbtecno"
    },
    externalLinks: [
      { label: "Ver en GitHub", url: "https://github.com", icon: "bi-github" }
    ],
    downloadUrl: "https://example.com/downloads/python-backup-script.zip",
    downloadFileName: "python-backup-script.zip",
    demoUrl: "https://example.com/demo-python-script",
    tags: ["scripts", "python", "backup", "mysql", "automation", "video"]
  },
  {
    id: "post-ui-icons-pack",
    title: "LB-Icons Pack - 500+ Íconos SVG para Desarrolladores",
    category: "Recursos",
    type: "image",
    mediaUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    date: "2026-07-05",
    version: "v2.0.0",
    fileSize: "14.2 MB",
    shortDescription: "Paquete vectorial completo de íconos en formato SVG y Font-Icon optimizados para aplicaciones web y móviles.",
    content: `
      <p>Colección exclusiva de íconos vectoriales minimalistas y tecnológicos creados para la suite de aplicaciones de LBtecno.</p>
      <p>Todos los íconos están vectorizados de forma limpia, admiten cambio de color por CSS y están listos para proyectos en Figma, React, Vue o HTML estático.</p>
    `,
    codeSnippet: null,
    externalLinks: [
      { label: "Catálogo de Íconos (Figma)", url: "https://figma.com", icon: "bi-figma" }
    ],
    downloadUrl: "https://example.com/downloads/LB-Icons-Pack-v2.zip",
    downloadFileName: "LB-Icons-Pack-v2.zip",
    demoUrl: "https://example.com/demo-icons-pack",
    tags: ["recursos", "svg", "iconos", "ui", "figma", "diseno"]
  }
];
