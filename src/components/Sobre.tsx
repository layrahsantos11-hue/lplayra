/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Award, MessageCircle, Heart, Star, Sparkles, BookOpen, ChevronRight } from 'lucide-react';

const facets = [
  {
    index: 0,
    label: "01. Identidade",
    role: "Acolhimento & Escuta",
    src: "https://lh3.googleusercontent.com/d/1U4k0qGG0GToqgyfb1piHJELzTtPR8si4",
    quote: "A cura começa no momento em que você se sente verdadeiramente compreendida e acolhida em sua essência.",
    accent: "Resgate Emocional"
  },
  {
    index: 1,
    label: "02. Posicionamento",
    role: "Autoestima & Limites",
    src: "https://lh3.googleusercontent.com/d/16lD_gPYSAS41nXtURjzUtw79vd7BFu0G",
    quote: "A mulher que conhece seu valor dita as regras e reconstrói as suas fronteiras de respeito com clareza.",
    accent: "Poder de Presença"
  },
  {
    index: 2,
    label: "03. Abundância",
    role: "Mentalidade Abundante",
    src: "https://lh3.googleusercontent.com/d/1FHEW6bI8hH_bNOAgWydA8R8kgoVIACb_",
    quote: "Romper as velhas amarras com a escassez te posiciona no fluxo natural de prosperidade que o Criador desenhou para você.",
    accent: "Visão & Norte"
  }
];

export default function Sobre() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="sobre"
      className="relative bg-stone-50 py-24 sm:py-32 overflow-hidden border-b border-stone-200/55"
    >
      {/* Decorative luxury circles */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/3 left-10 w-[50rem] h-[50rem] rounded-full border border-esmeralda-900"></div>
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full border border-gold-bright"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column / Elegant Portfolio Representation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Main Interactive Poster Display */}
            <div className="relative w-full max-w-[340px] aspect-[3/4] bg-white border border-gold-elegant shadow-2xl p-1 overflow-hidden group">
              <div className="absolute inset-x-0 inset-y-0 bg-black/10 z-10 pointer-events-none"></div>
              <div className="absolute inset-3 border border-gold-bright/35 z-20 pointer-events-none"></div>
              
              {/* Floating micro-badge */}
              <div className="absolute top-6 left-6 z-20 bg-esmeralda-950/80 border border-gold-elegant/70 px-3 py-1 font-sans text-[9px] uppercase tracking-widest text-gold-bright">
                {facets[activeIndex].accent}
              </div>

              {/* Sparkle top right */}
              <div className="absolute top-6 right-6 sparkle-animation text-gold-bright z-20">
                <Sparkles className="w-4 h-4 drop-shadow-md" />
              </div>

              {/* Animate-Presence for sleek image carousel loading state */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={facets[activeIndex].src}
                  alt="Layra Santos"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Card Label Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-esmeralda-950 via-esmeralda-950/45 to-transparent p-5 pt-16 z-20">
                <span className="font-serif text-base font-medium text-gold-elegant tracking-widest block uppercase">
                  Layra Santos
                </span>
                <span className="font-serif italic text-xs tracking-wider text-stone-200 block mt-0.5">
                  {facets[activeIndex].role}
                </span>
              </div>
            </div>

            {/* Micro quote below portrait */}
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-[340px] mt-4 text-center px-4"
            >
              <p className="font-serif text-xs italic text-stone-500 leading-relaxed">
                "{facets[activeIndex].quote}"
              </p>
            </motion.div>

            {/* Tab/Thumbnail Selectors underneath the Photo */}
            <div className="w-full max-w-[340px] mt-6 grid grid-cols-3 gap-3">
              {facets.map((f) => (
                <button
                  key={f.index}
                  onClick={() => setActiveIndex(f.index)}
                  className={`relative aspect-[3/4] border focus:outline-none transition-all duration-350 cursor-pointer overflow-hidden p-0.5 group ${
                    activeIndex === f.index 
                      ? 'border-gold-bright shadow-lg ring-1 ring-gold-elegant' 
                      : 'border-stone-200 hover:border-gold-elegant/60'
                  }`}
                >
                  <img 
                    src={f.src}
                    alt={f.label}
                    className={`w-full h-full object-cover transition-all ${
                      activeIndex === f.index ? 'brightness-[1.05]' : 'brightness-[0.65] group-hover:brightness-[0.85]'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/60 py-0.5 text-center">
                    <span className="font-sans text-[8px] sm:text-[9px] font-bold text-white tracking-wider block">
                      {f.label.split(". ")[1]}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Quick stats details badge bottom */}
            <div className="flex gap-4 justify-center mt-6 w-full max-w-[340px]">
              <div className="bg-white border border-stone-200 px-4 py-2.5 rounded-none flex-1 text-center shadow-sm">
                <p className="font-serif text-lg font-medium text-esmeralda-950">100%</p>
                <p className="font-sans text-[9px] text-stone-500 uppercase tracking-wider mt-0.5">Segurança & Ética</p>
              </div>
              <div className="bg-white border border-stone-200 px-4 py-2.5 rounded-none flex-1 text-center shadow-sm">
                <p className="font-serif text-lg font-medium text-gold-dark">+700</p>
                <p className="font-sans text-[9px] text-stone-500 uppercase tracking-wider mt-0.5">Mulheres Atendidas</p>
              </div>
            </div>
          </div>

          {/* Biography Column / Text content on Right */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark block">
                A Guia da Sua Transformação
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-esmeralda-950 font-light">
                Sua Facilitadora <span className="italic font-normal text-gold-elegant">Layra Santos</span>
              </h2>
              <div className="w-12 h-[1.5px] bg-gold-elegant"></div>
            </div>

            <div className="font-sans text-sm sm:text-base text-stone-600 space-y-4 sm:space-y-5 leading-relaxed font-light">
              <p>
                <strong>Layra Santos</strong> é psicanalista renomada, terapeuta especialista em casais e núcleos de famílias, mentora dedicada ao desenvolvimento feminino e a idealizadora do inovador <strong>Método Esmeralda</strong>.
              </p>
              
              <p className="font-serif italic text-base sm:text-lg text-esmeralda-900 border-l border-gold-elegant pl-4 font-normal">
                "Minha missão inalienável de vida é resgatar a real identidade de mulheres que se perderam no meio de rotinas pesadas, reerguer a autoestima de quem se desvalorizou e capacitar conexões abençoadas com clareza espiritual e abundância."
              </p>
              
              <p>
                Através de um ambiente clínico de profunda escuta, acolhimento livre de julgamentos e embasamento empírico do funcionamento mental combinado à espiritualidade consciente, Layra orienta mulheres a reescreverem suas próprias narrativas cotidianas.
              </p>
              <p>
                Ela acredita verdadeiramente que cada mulher possui uma esmeralda intacta, porém sufocada por antigas mágoas, escassez assimilada e limites frouxos. Esta mentoria foi lapidada estrategicamente para que você saia com uma mente pacificada e um norte de prosperidade real.
              </p>
            </div>

            {/* List of elements of Authority */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-gold-elegant shrink-0" />
                <span className="font-sans text-xs sm:text-sm text-stone-700 font-semibold uppercase tracking-wider">Bases em Psicanálise Clássica</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-gold-elegant shrink-0" />
                <span className="font-sans text-xs sm:text-sm text-stone-700 font-semibold uppercase tracking-wider">Atendimento Exclusivo Sigiloso</span>
              </div>
            </div>

            {/* Practical buttons of instant contact */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#formulario"
                className="bg-esmeralda-800 hover:bg-esmeralda-900 text-stone-50 px-8 py-4.5 rounded-none text-xs font-sans font-semibold uppercase tracking-widest text-center shadow-lg transition-all hover:-translate-y-0.5"
              >
                Garantir Minha Vaga com Layra
              </a>
              <a
                href="https://wa.me/5516991521475"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-esmeralda-800 text-esmeralda-800 hover:bg-esmeralda-800 hover:text-white px-8 py-4.5 rounded-none text-xs font-sans font-semibold uppercase tracking-widest bg-white transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25d366]" />
                Conversar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
