export interface Project {
  src: string
  alt: string
  display: string
  description: string
  srcRepo: string
}

export const projects: Project[] = [
  {
    src: '/panel-md.jpg',
    alt: 'panel',
    display: 'Panel Administrativo',
    description:
      'Este proyecto fue desarrollado con React y Laravel, construyendo una API RESTful y comunicandola con el frontend, añadendo una capa de autenticación con JWT (JSON Web Token). Se usó MUI, Styled Components, Axios y React Hook Form para construir la UI.',
    srcRepo: 'https://github.com/dotmanki/insarg-servicio-tecnico',
  },
  {
    src: '/cv-md.jpg',
    alt: 'cv',
    display: 'Curriculum Vitae',
    description:
      'En este ejercicio decidí implementar un Curriculum Vitae interactivo, responsivo y con un diseño agradable a la vista. En el proyecto profundicé en la semántica de HTML5 y trabajé con una libreria de Javascript para manipular vectores llamada SVGJS.',
    srcRepo: 'https://github.com/dotmanki/cv-curso',
  },
]
