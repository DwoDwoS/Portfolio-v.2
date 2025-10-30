'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHome, faFolderOpen, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
    { href: '/portfolio', label: 'Portfolio', icon: faFolderOpen },
    { href: '/about', label: 'À propos', icon: faUser },
    { href: '/contact', label: 'Contact', icon: faEnvelope },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' 
          : 'bg-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/about" 
            className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            <Image 
              src="/favicon_DoDoS_SVG.svg"
              alt="Logo DoDoS"
              width={64}
              height={1}
              >
            </Image>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center space-x-2 py-2 text-sm font-medium transition-all
                  ${pathname === href 
                    ? 'text-blue-400' 
                    : 'text-gray-300 hover:text-white hover:-translate-y-0.5'
                  }`}
              >
                <FontAwesomeIcon icon={icon} className="h-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon 
              icon={isOpen ? faTimes : faBars} 
              className="h-6 w-6"
            />
          </button>
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
                className={`flex items-center space-x-2 p-3 rounded-lg transition-colors
                  ${pathname === href
                    ? 'text-blue-400 bg-gray-800'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
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