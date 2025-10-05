import { contactInfo } from '@/lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Venancio Morales. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <a href={`mailto:${contactInfo.email}`}>
                <Button variant="ghost" size="icon" aria-label="Email">
                    <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </Button>
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </Button>
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="GitHub">
                    <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </Button>
            </a>
        </div>
      </div>
    </footer>
  );
}
