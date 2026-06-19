/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, MessageCircle, Sparkles, Gem } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-stone-50 overflow-hidden pt-20"
    >
      {/* Editorial aesthetic abstract circle */}
      <div className="absolute top-1/4 left-1/12 w-24 h-24 border border-gold-elegant/20 rounded-full opacity-60 pointer-events-none z-0"></div>

      <div className="w-full flex flex-col lg:flex-row items-stretch min-h-[calc(100vh-80px)]">
        
        {/* Left Column: Branding, Statement and Messaging */}
        <div className="w-full lg:w-3/5 px-6 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-center relative bg-stone-50 z-10">
          <div className="max-w-2xl space-y-8">
            
            {/* Elegant Luxury Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 border border-gold-elegant/40 bg-stone-100/50 px-4 py-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-elegant sparkle-animation" />
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-dark font-bold">
                Mentoria de Lapidação Feminina
              </span>
            </motion.div>

            {/* Principal Copy Heading */}
            <div className="space-y-6">
              <motion.h4
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-gold-elegant uppercase tracking-[0.4em] text-xs font-bold"
              >
                Bem-vinda ao Método Esmeralda
              </motion.h4>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-4xl sm:text-5xl lg:text-[70px] leading-[1.0] text-esmeralda-950 font-light"
              >
                Você não nasceu para <span className="italic font-normal">sobreviver.</span><br />
                Nasceu para <span className="text-gold-elegant font-normal">brilhar.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-sans text-stone-600 text-base sm:text-lg max-w-xl leading-relaxed font-light"
              >
                O Método Esmeralda é uma jornada de transformação feminina para mulheres que desejam curar feridas, fortalecer sua identidade, alinhar espiritualidade, prosperidade, carreira e relacionamentos.
              </motion.p>
            </div>

            {/* Bullet Points of Authority */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 w-full max-w-md pt-2"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-elegant"></div>
                <span className="font-sans text-xs sm:text-sm text-stone-700 font-semibold uppercase tracking-wider">Autoestima Restaurada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-elegant"></div>
                <span className="font-sans text-xs sm:text-sm text-stone-700 font-semibold uppercase tracking-wider">Prosperidade Alinhada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-elegant"></div>
                <span className="font-sans text-xs sm:text-sm text-stone-700 font-semibold uppercase tracking-wider">Espiritualidade e Fé</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-elegant"></div>
                <span className="font-sans text-xs sm:text-sm text-stone-700 font-semibold uppercase tracking-wider">Relacionamentos Saudáveis</span>
              </div>
            </motion.div>

            {/* Premium CTA Buttons Block with crisp square editorial corners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
            >
              <a
                href="#formulario"
                className="group flex items-center justify-center gap-3 bg-esmeralda-800 hover:bg-esmeralda-900 text-stone-50 font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-5 rounded-none shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Quero iniciar minha transformação</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="https://wa.me/5516991521475"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 border border-esmeralda-800 text-esmeralda-800 hover:bg-esmeralda-800 hover:text-white px-8 py-5 rounded-none text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>Conversar no WhatsApp</span>
              </a>
            </motion.div>

            {/* Elegant Trust Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex items-center gap-2.5 pt-2 text-stone-400 text-xs italic"
            >
              <ShieldCheck className="w-4 h-4 text-gold-elegant" />
              <span>Sua privacidade e segurança de dados são 100% garantidas.</span>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Visual "Emerald" Center & High-Converting Video Sales Letter (VSL) Frame */}
        <div className="w-full lg:w-2/5 bg-esmeralda-950 p-6 sm:p-10 lg:p-12 flex flex-col justify-center text-[#FCFAF7] relative overflow-hidden z-10">
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #D4AF37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="space-y-6 sm:space-y-8 relative z-10">
            <div className="space-y-2">
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase text-gold-bright font-bold block">Assista à Apresentação</span>
              <h3 className="font-serif text-2xl sm:text-3xl italic text-gold-bright leading-tight">Dê o Play na sua Nova Vida</h3>
              <p className="text-xs sm:text-sm font-light leading-relaxed text-stone-300">
                Veja o recado especial que a psicanalista Layra Santos preparou para guiar a sua jornada de lapidação pessoal.
              </p>
            </div>

            {/* Embedded Vertical Video Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative w-full max-w-[280px] sm:max-w-[300px] mx-auto aspect-[9/16] border border-gold-elegant bg-stone-900 shadow-2xl group overflow-hidden rounded-md"
            >
              <iframe
                src="https://drive.google.com/file/d/1vQmb5wjsuhaG6Jl_1r4AL4-1f909hvC_/preview"
                className="w-[316%] h-full absolute top-0 left-1/2 -translate-x-1/2 border-0 z-10"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </motion.div>

            {/* Welcoming Mentor Card */}
            <div className="bg-esmeralda-900/60 border border-gold-elegant/20 p-4 rounded-none flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gold-elegant overflow-hidden shrink-0">
                <img 
                  src="https://lh3.googleusercontent.com/d/1U4k0qGG0GToqgyfb1piHJELzTtPR8si4" 
                  alt="Layra Santos" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-xs font-semibold text-gold-bright">Layra Santos</h4>
                <p className="text-[10px] sm:text-xs text-stone-300 font-light italic">
                  "Sua esmeralda está pronta para brilhar. Permita-se ser lapidada por completo."
                </p>
              </div>
            </div>
            
            {/* Trust disclaimer */}
            <div className="flex justify-between text-[11px] text-stone-400 font-sans border-t border-stone-800/60 pt-4">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-gold-elegant" /> Sigilo Absoluto</span>
              <span>Mentorias Exclusivas</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
