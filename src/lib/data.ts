import type { ComponentType, SVGProps } from 'react';

  export interface Skill {
    name: string;
    category: string;
    iconName: string;
  }

  export interface Project {
    repoUrl: string;
    title: string;
    technologies: string[];
    fallbackDescription: string;
  }
  
  export const contactInfo = {
    email: 'mavipi@gmail.com',
    linkedin: 'https://www.linkedin.com/in/venancio-morales-valle-ab2b6252/',
    github: 'https://github.com/nanci1121',
  };

  export const skills: Skill[] = [
    { name: 'Java', category: 'Lenguajes', iconName: 'JavaIcon' },
    { name: 'JavaScript', category: 'Lenguajes', iconName: 'JavaScriptIcon' },
    { name: 'Python', category: 'Lenguajes', iconName: 'PythonIcon' },
    { name: 'HTML', category: 'Lenguajes', iconName: 'HtmlIcon' },
    { name: 'CSS', category: 'Lenguajes', iconName: 'CssIcon' },
    { name: 'Node.js', category: 'Frameworks y librerías', iconName: 'NodeJsIcon' },
    { name: 'Flutter', category: 'Frameworks y librerías', iconName: 'FlutterIcon' },
    { name: 'Android', category: 'Entornos de desarrollo', iconName: 'AndroidIcon' },
    { name: 'Ansible', category: 'Entornos de desarrollo', iconName: 'AnsibleIcon' },
    { name: 'Docker', category: 'Infraestructura y DevOps', iconName: 'DockerIcon' },
    { name: 'Servidores', category: 'Infraestructura y DevOps', iconName: 'ServerIcon' },
    { name: 'Clientes', category: 'Infraestructura y DevOps', iconName: 'ClientIcon' },
    { name: 'PostgreSQL', category: 'Bases de datos', iconName: 'PostgreSqlIcon' },
    { name: 'Git', category: 'Control de versiones', iconName: 'GitIcon' },
    { name: 'RESTful APIs', category: 'Trabajo con APIs', iconName: 'RestApiIcon' },
    { name: 'WebSockets', category: 'Trabajo con APIs', iconName: 'WebSocketIcon' },
    { name: 'IA', category: 'Nube y tecnologías emergentes', iconName: 'AiIcon' },
  ];

  export const projects: Project[] = [
    {
      repoUrl: 'https://github.com/nanci1121/miproyecto-git',
      title: 'miProyecto-git',
      technologies: ['HTML', 'JavaScript', 'Git'],
      fallbackDescription: 'Guía completa sobre los comandos y el flujo de trabajo básico de Git. Ideal para principiantes que buscan dominar el control de versiones.',
    },
    {
      repoUrl: 'https://github.com/nanci1121/tabla-multiplicar-node',
      title: 'tabla-multiplicar-node',
      technologies: ['Node.js', 'JavaScript'],
      fallbackDescription: 'Una aplicación de consola en Node.js que genera tablas de multiplicar y las guarda en archivos de texto, demostrando el manejo de archivos y la lógica de negocio.',
    },
    {
      repoUrl: 'https://github.com/nanci1121/curso-node-restserver',
      title: 'curso-node-restserver',
      technologies: ['Node.js', 'Express', 'REST APIs'],
      fallbackDescription: 'Un servidor RESTful completo construido con Node.js y Express, incluyendo autenticación, roles de usuario y operaciones CRUD.',
    },
    {
      repoUrl: 'https://github.com/nanci1121/server-socket.io-postgresql',
      title: 'server-socket.io-postgresql',
      technologies: ['Node.js', 'Socket.IO', 'PostgreSQL'],
      fallbackDescription: 'Proyecto que implementa comunicación en tiempo real utilizando Socket.IO, con una base de datos PostgreSQL para persistencia de datos.',
    },
    {
      repoUrl: 'https://github.com/nanci1121/flutter_application_1',
      title: 'flutter_application_1',
      technologies: ['Flutter', 'Dart'],
      fallbackDescription: 'Una aplicación móvil de inicio desarrollada con Flutter, explorando los fundamentos del framework para la creación de interfaces de usuario multiplataforma.',
    },
    {
      repoUrl: 'https://github.com/nanci1121/pruebaScripts',
      title: 'pruebaScripts',
      technologies: ['Ansible', 'Shell'],
      fallbackDescription: 'Colección de scripts y playbooks de Ansible para la automatización de tareas de configuración y despliegue de sistemas.',
    },
  ];