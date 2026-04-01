import { Translations } from './translation.model';

export const en: Translations = {
  navbar: {
    subtitle: 'Software Engineer',
    description: 'I build accessible, pixel-perfect digital experiences for the web.',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    contact: 'Contact',
  },
  about: {
    title: 'About',
    paragraph1:
      'Front-end engineer with 3+ years of experience specializing in Angular and modern web development. Passionate about continuous learning, currently expanding my skill set with others front-end frameworks. I work closely with backend teams to deliver end-to-end solutions and prioritize clean architecture to build Scalable and maintainable applications',
    paragraph2: "Here are a few technologies I've been working with recently:",
  },
  experience: {
    title: 'Experience',
    viewResume: 'View Full Resume',
    items: [
      {
        dateRange: 'July 2024 — Present',
        title: 'Front End Developer',
        company: 'Cikume',
        description: [
          'Engineered responsive, high-performance web applications using Angular, optimizing user interfaces for seamless cross-device experiences.',
          'Integrated complex data structures by connecting front-end components to GraphQL APIs, reducing data overfetching and improving load times.',
          'Collaborated on backend development using .NET through pair programming, assisting in debugging and optimization of microservices.',
          'Bridged the gap between design and development by creating high-fidelity Figma wireframes and presenting technical roadmaps to stakeholders.',
          'Implemented dual-layer API communication strategies using GraphQL and REST for legacy system integration.',
        ],
        technologies: ['Angular', 'TypeScript', 'GraphQL', '.NET', 'REST APIs', 'Figma'],
      },
      {
        dateRange: 'Jan 2023 — July 2024',
        title: 'Front End Developer',
        company: 'Cloudsa',
        description: [
          'Developed and maintained scalable front-end architectures using Angular, ensuring full responsiveness and accessibility across platforms.',
          'Expanded full-stack capabilities by working on .NET backend endpoints, streamlining the development lifecycle and supporting backend teams during high-demand sprints.',
          'Designed sequence diagrams to visualize complex logic, improving team alignment and accelerating onboarding for new developers.',
        ],
        technologies: ['Angular', 'TypeScript', '.NET', 'SCSS', 'REST APIs'],
      },
    ],
  },
  projects: {
    sectionTitle: "Some Things I've Built",
    viewArchive: 'View Full Project Archive',
    pageDescription:
      "A collection of projects I've worked on. Each one taught me something new and pushed me to grow as a developer.",
    items: [
      {
        title: 'Portfolio Website',
        description:
          'Personal portfolio built with Angular and Tailwind CSS featuring interactive canvas background, dark/light theme toggle, and smooth scroll animations.',
        technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
      },
      {
        title: 'Task Management App',
        description:
          'A full-stack task management application with real-time updates, drag-and-drop kanban boards, and team collaboration features.',
        technologies: ['Angular', 'Node.js', 'PostgreSQL', 'WebSockets'],
      },
      {
        title: 'E-Commerce Dashboard',
        description:
          'An analytics dashboard for e-commerce platforms with interactive charts, real-time sales tracking, and inventory management.',
        technologies: ['Angular', 'D3.js', 'TypeScript', 'REST API'],
      },
      {
        title: 'Weather App',
        description:
          'A minimalist weather application with location-based forecasts, beautiful animations, and offline support via service workers.',
        technologies: ['Angular', 'PWA', 'OpenWeather API'],
      },
    ],
  },
  contact: {
    sectionTitle: "What's Next?",
    heading: 'Get In Touch',
    paragraph:
      "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open. I'll try my best to get back to you!",
    button: 'Say Hello',
  },
  footer: {
    designedBy: 'Loosely designed and coded by',
    builtWith: 'Built with',
    and: 'and',
  },
  theme: {
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
    switchToSystem: 'Switch to system mode',
  },
  language: {
    switchTo: 'Cambiar a español',
  },
};
