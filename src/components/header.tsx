"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'Sobre Mí' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#portfolio', label: 'Portafolio' },
  { href: '#contact', label: 'Contacto' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-4", className)}>
      {navLinks.map(({ href, label }) => (
        <Link key={href} href={href} passHref>
          <Button variant="ghost" onClick={() => setIsMobileMenuOpen(false)}>
            {label}
          </Button>
        </Link>
      ))}
    </nav>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-card/80 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2" passHref>
          <span className="font-headline text-xl font-bold text-primary">
            Venancio Morales
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="#home" passHref>
                  <span className="font-headline text-xl font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                    Venancio Morales
                  </span>
                </Link>
                <NavLinks className="flex-col items-start" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
