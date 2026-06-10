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

        {/* Right Column: Visual "Emerald" Center with deep green paper canvas backdrop */}
        <div className="w-full lg:w-2/5 bg-esmeralda-950 p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-[#FCFAF7] relative overflow-hidden z-10">
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #D4AF37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="space-y-8 relative z-10">
            <div className="pt-4">
              <h3 className="font-serif text-3xl mb-3 italic text-gold-bright">O Processo de Lapidação</h3>
              <p className="text-sm font-light leading-relaxed text-stone-300">
                Assim como uma esmeralda revela seu brilho espetacular somente após a lapidação, você removerá camadas de medo e escassez para revelar sua verdadeira identidade divina.
              </p>
            </div>

            {/* Interactive Vector Graphic Container */}
            <div className="flex justify-center items-center py-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center animate-none"
              >
                {/* Outer Golden Aura Ripple Circles */}
                <div className="absolute inset-x-0 inset-y-0 border border-gold-elegant/20 rounded-full scale-100 luxury-glow"></div>
              <div className="absolute inset-4 border border-gold-elegant/10 rounded-full scale-95 animate-[spin_24s_linear_infinite]"></div>
              <div className="absolute inset-10 border border-gold-bright/15 rounded-full scale-90 border-dashed animate-[spin_40s_linear_infinite]"></div>
              
              {/* Central Glowing Sparkles */}
              <div className="absolute top-1/4 right-1/4 z-10 sparkle-animation">
                <Sparkles className="w-6 h-6 text-gold-bright" />
              </div>
              <div className="absolute bottom-1/4 left-1/4 z-10 sparkle-animation delay-1000">
                <Sparkles className="w-5 h-5 text-gold-elegant" />
              </div>

              {/* Complex Vector Graphic container mimicking the logo structure */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-esmeralda-950/80 border border-gold-elegant/30 flex items-center justify-center p-8 shadow-[0_0_50px_rgba(3,45,32,0.8)]">
                
                {/* SVG representing the Crown, Face profile, Emerald diamond, and Leaf accents */}
                <svg viewBox="0 0 400 400" className="w-full h-full text-gold-elegant drop-shadow-[0_2px_15px_rgba(197,168,92,0.3)]">
                  {/* Definition of gradients */}
                  <defs>
                    <radialGradient id="emeraldGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="50%" stopColor="#047857" />
                      <stop offset="100%" stopColor="#022c22" />
                    </radialGradient>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="50%" stopColor="#d4af37" />
                      <stop offset="100%" stopColor="#854d0e" />
                    </linearGradient>
                  </defs>

                  {/* Golden circular frame boundary */}
                  <circle cx="200" cy="200" r="170" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" strokeOpacity="0.4" />

                  {/* 1. The Royal Crown on Top of the Diamond */}
                  <g transform="translate(182, 60) scale(1.1)">
                    <path d="M0,25 L8,8 L16,18 L24,8 L32,25 Z" fill="url(#goldGrad)" />
                    <circle cx="0" cy="25" r="2.5" fill="url(#goldGrad)" />
                    <circle cx="8" cy="8" r="2.5" fill="url(#goldGrad)" />
                    <circle cx="16" cy="18" r="2.5" fill="url(#goldGrad)" />
                    <circle cx="24" cy="8" r="2.5" fill="url(#goldGrad)" />
                    <circle cx="32" cy="25" r="2.5" fill="url(#goldGrad)" />
                  </g>

                  {/* 2. Beautiful Emerald Diamond (Polished Polygon Facets) */}
                  <g transform="translate(140, 95)">
                    {/* Outer path container */}
                    <polygon points="60,0 20,40 60,120 100,120 140,40 100,0" fill="url(#emeraldGrad)" stroke="url(#goldGrad)" strokeWidth="2.5" />
                    
                    {/* Inner polished glass facets lines */}
                    <line x1="60" y1="0" x2="60" y2="120" stroke="url(#goldGrad)" strokeWidth="1" strokeOpacity="0.7" />
                    <line x1="100" y1="0" x2="100" y2="120" stroke="url(#goldGrad)" strokeWidth="1" strokeOpacity="0.7" />
                    
                    <line x1="20" y1="40" x2="140" y2="40" stroke="url(#goldGrad)" strokeWidth="1" strokeOpacity="0.7" />
                    
                    <line x1="60" y1="0" x2="20" y2="40" stroke="url(#goldGrad)" strokeWidth="1" strokeOpacity="0.7" />
                    <line x1="100" y1="0" x2="140" y2="40" stroke="url(#goldGrad)" strokeWidth="1" strokeOpacity="0.7" />
                    
                    <line x1="20" y1="40" x2="60" y2="120" stroke="url(#goldGrad)" strokeWidth="1" strokeOpacity="0.7" />
                    <line x1="140" y1="40" x2="100" y2="120" stroke="url(#goldGrad)" strokeWidth="1" strokeOpacity="0.7" />
                    
                    <polygon points="60,40 100,40 80,80" fill="none" stroke="url(#goldGrad)" strokeWidth="1" strokeOpacity="0.6" />
                    <line x1="60" y1="0" x2="80" y2="40" stroke="url(#goldGrad)" strokeWidth="1" strokeOpacity="0.6" />
                    <line x1="100" y1="0" x2="80" y2="40" stroke="url(#goldGrad)" strokeWidth="1" strokeOpacity="0.6" />
                    <line x1="80" y1="80" x2="60" y2="120" stroke="url(#goldGrad)" strokeWidth="1" strokeOpacity="0.6" />
                    <line x1="80" y1="80" x2="100" y2="120" stroke="url(#goldGrad)" strokeWidth="1" strokeOpacity="0.6" />
                  </g>

                  {/* 3. Golden Silhouette Profile of Woman (facing left, embracing the diamond) */}
                  <path 
                    d="M 152 140 
                       C 134 160, 130 190, 140 215 
                       C 142 220, 138 226, 142 228
                       C 146 230, 150 220, 153 226 
                       C 155 230, 150 236, 154 240
                       C 158 244, 168 244, 166 250
                       C 164 256, 180 270, 195 272
                       C 215 275, 235 250, 245 220
                       C 255 190, 260 160, 250 130" 
                    fill="none" 
                    stroke="url(#goldGrad)" 
                    strokeWidth="3" 
                  />

                  {/* Leaves/Plant base representing Roots & Blooming life */}
                  <path 
                    d="M 160 280 
                       C 180 300, 210 305, 240 290 
                       C 260 280, 280 250, 285 225
                       C 287 220, 280 215, 275 220
                       C 260 235, 240 250, 220 252" 
                    fill="url(#goldGrad)" 
                    fillOpacity="0.25"
                    stroke="url(#goldGrad)" 
                    strokeWidth="2.5" 
                  />
                  
                  <path 
                    d="M 183 293
                       C 170 310, 168 322, 175 328
                       C 182 334, 195 328, 205 315
                       C 215 302, 218 290, 210 285" 
                    fill="url(#goldGrad)" 
                    fillOpacity="0.15"
                    stroke="url(#goldGrad)" 
                    strokeWidth="1.5" 
                  />
                </svg>

                {/* Sparkling crystal center badge overlay */}
                <div className="absolute bottom-6 bg-esmeralda-950/90 border border-gold-elegant px-4 py-1.5 rounded-full shadow-md">
                  <span className="text-[10px] sm:text-xs tracking-widest text-gold-elegant font-semibold select-none">
                    CURA • IDENTIDADE • PROPÓSITO
                  </span>
                </div>
              </div>

              {/* Little Floating Badge Card */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute right-[-15px] bottom-[15%] bg-esmeralda-900/90 border border-gold-elegant/40 p-3 sm:p-4 rounded-xl shadow-2xl backdrop-blur-md max-w-[170px]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Gem className="w-4 h-4 text-gold-bright" />
                  <span className="font-display text-[9px] uppercase tracking-wider text-gold-elegant font-bold">Autocuidado Real</span>
                </div>
                <p className="text-[10px] text-stone-300 leading-relaxed font-serif italic">
                  "Exceda os seus próprios limites com sabedoria."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  </section>
  );
}
