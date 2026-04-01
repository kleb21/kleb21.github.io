import { Translations } from './translation.model';

export const es: Translations = {
  navbar: {
    subtitle: 'Ingeniero de Software',
    description: 'Creo experiencias digitales accesibles y perfectas para la web.',
  },
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    contact: 'Contacto',
  },
  about: {
    title: 'Sobre mí',
    paragraph1:
      'Ingeniero front-end con más de 3 años de experiencia especializado en Angular y desarrollo web moderno. Apasionado por el aprendizaje continuo, actualmente ampliando mis habilidades con otros frameworks front-end. Trabajo de cerca con equipos de backend para entregar soluciones de extremo a extremo y priorizo la arquitectura limpia para construir aplicaciones escalables y mantenibles.',
    paragraph2: 'Estas son algunas tecnologías con las que he estado trabajando recientemente:',
  },
  experience: {
    title: 'Experiencia',
    viewResume: 'Ver currículum completo',
    items: [
      {
        dateRange: 'Julio 2024 — Presente',
        title: 'Desarrollador Front End',
        company: 'Cikume',
        description: [
          'Desarrollé aplicaciones web responsivas y de alto rendimiento usando Angular, optimizando interfaces de usuario para experiencias fluidas en múltiples dispositivos.',
          'Integré estructuras de datos complejas conectando componentes front-end a APIs GraphQL, reduciendo la sobrecarga de datos y mejorando los tiempos de carga.',
          'Colaboré en el desarrollo backend usando .NET mediante programación en pareja, asistiendo en la depuración y optimización de microservicios.',
          'Conecté el diseño con el desarrollo creando wireframes de alta fidelidad en Figma y presentando hojas de ruta técnicas a los interesados.',
          'Implementé estrategias de comunicación de API de doble capa usando GraphQL y REST para la integración de sistemas legados.',
        ],
        technologies: ['Angular', 'TypeScript', 'GraphQL', '.NET', 'REST APIs', 'Figma'],
      },
      {
        dateRange: 'Ene 2023 — Julio 2024',
        title: 'Desarrollador Front End',
        company: 'Cloudsa',
        description: [
          'Desarrollé y mantuve arquitecturas front-end escalables usando Angular, asegurando total responsividad y accesibilidad en todas las plataformas.',
          'Amplié mis capacidades full-stack trabajando en endpoints backend de .NET, agilizando el ciclo de desarrollo y apoyando a los equipos de backend durante sprints de alta demanda.',
          'Diseñé diagramas de secuencia para visualizar lógica compleja, mejorando la alineación del equipo y acelerando la incorporación de nuevos desarrolladores.',
        ],
        technologies: ['Angular', 'TypeScript', '.NET', 'SCSS', 'REST APIs'],
      },
    ],
  },
  projects: {
    sectionTitle: 'Algunos proyectos que he construido',
    viewArchive: 'Ver archivo completo de proyectos',
    pageDescription:
      'Una colección de proyectos en los que he trabajado. Cada uno me enseñó algo nuevo y me impulsó a crecer como desarrollador.',
    items: [
      {
        title: 'Sitio Web Portfolio',
        description:
          'Portfolio personal construido con Angular y Tailwind CSS con fondo de canvas interactivo, alternador de tema oscuro/claro y animaciones de scroll suaves.',
        technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
      },
      {
        title: 'App de Gestión de Tareas',
        description:
          'Una aplicación full-stack de gestión de tareas con actualizaciones en tiempo real, tableros kanban con arrastrar y soltar, y funciones de colaboración en equipo.',
        technologies: ['Angular', 'Node.js', 'PostgreSQL', 'WebSockets'],
      },
      {
        title: 'Dashboard de E-Commerce',
        description:
          'Un panel de análisis para plataformas de comercio electrónico con gráficos interactivos, seguimiento de ventas en tiempo real y gestión de inventario.',
        technologies: ['Angular', 'D3.js', 'TypeScript', 'REST API'],
      },
      {
        title: 'App del Clima',
        description:
          'Una aplicación minimalista del clima con pronósticos basados en ubicación, animaciones atractivas y soporte offline mediante service workers.',
        technologies: ['Angular', 'PWA', 'OpenWeather API'],
      },
    ],
  },
  contact: {
    sectionTitle: '¿Qué sigue?',
    heading: 'Ponte en contacto',
    paragraph:
      'Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una pregunta o solo quieras saludar, mi bandeja de entrada siempre está abierta. ¡Haré lo posible por responderte!',
    button: '',
  },
  footer: {
    designedBy: 'Diseñado y programado por',
    builtWith: 'Construido con',
    and: 'y',
  },
  theme: {
    switchToLight: 'Cambiar a modo claro',
    switchToDark: 'Cambiar a modo oscuro',
    switchToSystem: 'Cambiar a modo del sistema',
  },
  language: {
    switchTo: 'Switch to English',
  },
};
