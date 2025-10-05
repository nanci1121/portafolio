
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SkillsShowcase } from '@/components/skills-showcase';
import { ProjectCard } from '@/components/project-card';
import { Button } from '@/components/ui/button';
import { projects, skills, contactInfo } from '@/lib/data';
import { Mail, Linkedin, Github } from 'lucide-react';
import type { Project, Skill } from '@/lib/data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';


type ProjectWithDescription = Project & {
  description: string;
};

export default async function Home() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');
  const projectsWithDescriptions: ProjectWithDescription[] = projects.map(project => ({
    ...project,
    description: project.fallbackDescription,
  }));

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="py-20 sm:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl">
              Venancio Morales
            </h1>
            <p className="mt-4 font-headline text-2xl tracking-tight text-foreground sm:text-4xl">
              Ingeniero de Software & Desarrollador Full Stack
            </p>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
              Transformando ideas en soluciones digitales. Más de 5 años de experiencia en desarrollo de software y gestión de infraestructuras.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#portfolio">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Ver proyectos
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline">
                  Contactar
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="bg-card py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-1 flex justify-center">
                  {profileImage && <Image
                    src={profileImage.imageUrl}
                    alt={profileImage.description}
                    width={400}
                    height={400}
                    className="rounded-full aspect-square object-cover"
                    data-ai-hint={profileImage.imageHint}
                  />}
              </div>
              <div className="md:col-span-2">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center md:text-left">
                  Un experto en tecnología con experiencia práctica
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Soy Venancio Morales, un Ingeniero de Software con una sólida trayectoria de más de 5 años. Mi experiencia en Huayi me ha permitido perfeccionar mis habilidades en el desarrollo de aplicaciones robustas y la optimización de sistemas. Actualmente, me especializo en la administración de aplicaciones y redes, lo que me proporciona una perspectiva integral del ciclo de vida del software, desde el código hasta el despliegue y el mantenimiento.
                </p>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  Mi pasión es crear soluciones digitales eficientes y escalables. Me mantengo al día con las últimas tecnologías, incluyendo el desarrollo con IA, para ofrecer resultados innovadores y de alta calidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Mi Stack Tecnológico
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Mi experiencia abarca una amplia gama de tecnologías y herramientas. Esto me permite adaptarme rápidamente a diferentes entornos y proyectos, garantizando siempre la mejor solución técnica.
              </p>
            </div>
            <SkillsShowcase skills={skills} />
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="bg-card py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Proyectos Destacados en GitHub
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Cada proyecto es un reflejo de mi compromiso con la calidad y la innovación. Explora mi código y descubre mi enfoque para resolver problemas complejos.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {projectsWithDescriptions.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Conéctate conmigo
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Estoy abierto a nuevas oportunidades y colaboraciones. Si te interesa mi perfil o tienes un proyecto en mente, no dudes en contactarme.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href={`mailto:${contactInfo.email}`}>
                  <Button variant="outline" size="lg">
                    <Mail className="mr-2 h-5 w-5" />
                    {contactInfo.email}
                  </Button>
                </a>
                <div className="flex items-center justify-center gap-4">
                  <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" aria-label="LinkedIn">
                      <Linkedin className="h-7 w-7 text-muted-foreground hover:text-primary" />
                    </Button>
                  </a>
                  <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" aria-label="GitHub">
                      <Github className="h-7 w-7 text-muted-foreground hover:text-primary" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
