export const personalInfo = {
  name: 'Ulises Téllez Landón',
  role: 'Full Stack Developer',
  tagline: 'Turning ideas into digital products | Code + Design',
  location: 'Texcoco, Estado de México',
  email: 'uliie2112@gmail.com',
  github: 'https://github.com/ulietellez21',
  linkedin: '#',
  bio: 'Desarrollador Full Stack apasionado por crear experiencias digitales que combinan funcionalidad sólida con diseño atractivo. Me especializo en construir aplicaciones web modernas de principio a fin, desde interfaces de usuario fluidas hasta APIs robustas y escalables.',
}

export const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'HTML/CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Django', 'FastAPI', 'PostgreSQL', 'REST APIs'] },
  { category: 'Tools & Design', items: ['Git', 'Docker', 'Figma', 'Vite', 'Prisma', 'Swagger'] },
  { category: 'Cloud', items: ['DigitalOcean', 'Vercel', 'Netlify', 'GitHub Actions'] },
]

export const projects = [
  {
    title: 'Dashboard Movums',
    description: 'Sistema de gestión integral para agencia de viajes. Incluye módulo de ventas, comisiones, reportes y facturación con integración a Stripe.',
    tech: ['Python', 'Django', 'PostgreSQL', 'Stripe', 'Gunicorn'],
    type: 'Full Stack',
    status: 'Producción',
    private: true,
  },
  {
    title: 'REST API Auth',
    description: 'API RESTful con sistema de autenticación JWT completo. Incluye registro, login, refresh tokens y documentación interactiva con Swagger.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
    type: 'Backend',
    status: 'Open Source',
    link: 'https://github.com/ulietellez21/rest-api-auth',
    private: false,
  },
  {
    title: 'Portfolio Personal',
    description: 'Este mismo portafolio. Construido con React, Tailwind CSS y Framer Motion para animaciones fluidas y diseño responsivo.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    type: 'Frontend',
    status: 'Open Source',
    link: 'https://github.com/ulietellez21/portfolio-personal',
    private: false,
  },
]
