'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHome, faFolderOpen, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Accueil', icon: faHome },
    { href: '/projects', label: 'Portfolio', icon: faFolderOpen },
    { href: '/about', label: 'À propos', icon: faUser },
    { href: '/contact', label: 'Contact', icon: faEnvelope },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm shadow-lg`}
      style={{ backgroundColor: `rgba(${isScrolled ? 'var(--bg-primary)' : 'var(--bg-primary)'}, ${isScrolled ? 0.95 : 1})` }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/about" 
            className="text-xl font-bold transition-colors"
            style={{ color: 'rgb(var(--text-primary))' }}
          >
            <Image 
              src={theme === 'dark' ? "/favicon_DoDoS_SVG.svg" : "/favicon_DoDoS_SVG_light.svg"}
              alt="Logo DoDoS"
              width={64}
              height={64}
              style={{ width: 64, height: 'auto' }}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center space-x-2 py-2 text-sm font-medium transition-all hover:-translate-y-0.5`}
                style={{ color: pathname === href ? 'rgb(var(--accent-primary))' : 'rgb(var(--text-secondary))' }}
              >
                <FontAwesomeIcon icon={icon} className="h-4" />
                <span>{label}</span>
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon 
                icon={isOpen ? faTimes : faBars} 
                className="h-6 w-6"
                style={{ color: 'rgb(var(--text-secondary))' }}
              />
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-64 opacity-100' 
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="py-3 space-y-2">
            {navLinks.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 p-3 rounded-lg transition-colors`}
                style={{ 
                  color: pathname === href ? 'rgb(var(--accent-primary))' : 'rgb(var(--text-secondary))',
                  backgroundColor: pathname === href ? 'rgb(var(--bg-secondary))' : undefined
                }}
              >
                <FontAwesomeIcon icon={icon} className="h-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;