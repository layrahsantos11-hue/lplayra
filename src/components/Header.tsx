/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Landmark, Compass, Award, HelpCircle, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'O Método', href: '#metodo' },
    { label: 'Pilares', href: '#pilares' },
    { label: 'Transformação', href: '#transformacao' },
    { label: 'Para Quem?', href: '#para-quem' },
    { label: 'Quem é Layra', href: '#sobre' },
    { label: 'Como Funciona', href: '#como-funciona' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-stone-50/95 backdrop-blur-md border-b border-gold-elegant/25 py-3 shadow-md'
          : 'bg-stone-50 border-b border-gold-elegant/15 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Brandings */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gold-bright/20 blur-md rounded-full scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-10 h-10 rounded-full border border-gold-elegant/60 flex items-center justify-center bg-esmeralda-800 relative">
                <Sparkles className="w-5 h-5 text-gold-elegant group-hover:text-gold-bright text-gold-bright transition-colors duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold tracking-[0.2em] text-sm sm:text-base text-esmeralda-800 group-hover:text-gold-elegant transition-colors duration-300">
                MÉTODO ESMERALDA
              </span>
              <span className="font-serif italic text-xs tracking-wider text-stone-500">
                por Layra Santos
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 shrink-0">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-[10px] xl:text-xs font-semibold uppercase tracking-[0.08em] xl:tracking-[0.14em] text-esmeralda-950 hover:text-gold-elegant transition-colors duration-300 relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[1px] after:bg-gold-bright after:scale-x-0 overflow-hidden hover:after:scale-x-100 after:transition-transform after:duration-300 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Cta */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href="https://wa.me/5516991521475"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 border border-gold-elegant/40 hover:border-gold-bright/80 px-2.5 py-2 xl:px-4 xl:py-2.5 rounded-none text-[10px] xl:text-xs font-sans font-semibold uppercase tracking-wider text-gold-dark hover:text-gold-elegant bg-stone-100 hover:bg-gold-elegant/15 transition-all duration-300 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#formulario"
              className="bg-esmeralda-800 hover:bg-esmeralda-900 text-white px-3 py-2 xl:px-5 xl:py-2.5 rounded-none text-[10px] xl:text-xs font-sans font-semibold uppercase tracking-[0.08em] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Quero Iniciar
            </a>
          </div>

          {/* Menu button for mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-none flex items-center justify-center border border-gold-elegant/30 text-esmeralda-800 hover:text-gold-elegant hover:border-gold-bright transition-colors animate-fade-in"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[64px] bg-stone-50/98 backdrop-blur-md z-40 transition-all duration-500 border-t border-gold-elegant/15 ${
          mobileMenuOpen ? 'opacity-100 max-h-screen translate-y-0' : 'opacity-0 max-h-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans font-semibold text-sm tracking-widest uppercase text-[#1A1A1A] hover:text-gold-elegant border-b border-gold-elegant/5 pb-2 ml-0"
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-6">
            <a
              href="https://wa.me/5516991521475"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-gold-elegant text-gold-dark hover:bg-gold-elegant/10 py-3.5 rounded-none text-sm font-sans font-medium uppercase tracking-wider"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              Falar no WhatsApp
            </a>
            <a
              href="#formulario"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-esmeralda-800 hover:bg-esmeralda-900 text-white font-semibold tracking-wider text-center py-3.5 rounded-none text-sm font-sans uppercase shadow-lg"
            >
              Iniciar Minha Transformação
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
