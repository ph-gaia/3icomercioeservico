'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href='/'>
                <img src="/img/logo.png" alt="3i Comércio e Serviço" className="h-16 w-auto" />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-primary transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#depoimentos" className="text-gray-700 hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-gray-700 hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#trabalhe-conosco"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Trabalhe Conosco
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
                Início
              </a>
              <a href="#sobre" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#depoimentos" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
                Depoimentos
              </a>
              <a href="#contato" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
                Contato
              </a>
              <a
                href="#trabalhe-conosco"
                className="block px-3 py-2 bg-primary text-white rounded-lg font-medium text-center"
              >
                Trabalhe Conosco
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 