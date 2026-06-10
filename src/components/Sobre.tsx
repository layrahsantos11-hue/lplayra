/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, MessageCircle, Heart, Star, Sparkles, BookOpen } from 'lucide-react';

export default function Sobre() {
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
          
          {/* Visual Column / Elegant Portrait Representation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[340px] aspect-[4/5] rounded-none bg-gradient-to-b from-esmeralda-950 to-esmeralda-900 p-2 border-2 border-gold-elegant shadow-2xl overflow-hidden group"
            >
              {/* Internal abstract vectors representing beautiful healing energy and therapy setting */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gold-elegant/15 via-transparent to-transparent"></div>
              
              <div className="w-full h-full rounded-none bg-esmeralda-950 flex flex-col justify-between p-6 sm:p-8 relative overflow-hidden">
                
                {/* Floating sparkling stars and logo watermark */}
                <div className="absolute top-6 right-6 sparkle-animation text-gold-bright">
                  <Sparkles className="w-6 h-6" />
                </div>
                
                <div className="absolute bottom-[-100px] right-[-100px] w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl"></div>

                {/* Styled silhouette representing the wisdom and grace of Layra Santos */}
                <div className="flex-1 flex flex-col items-center justify-center pt-8">
                  <div className="w-24 h-24 rounded-full border-2 border-gold-elegant flex items-center justify-center bg-esmeralda-900/60 mb-4 shadow-inner relative">
                    <Heart className="w-10 h-10 text-gold-bright" />
                    <Star className="w-4 h-4 text-gold-bright absolute top-0 right-0 sparkle-animation" />
                  </div>
                  
                  <span className="font-serif text-lg font-medium text-gold-elegant tracking-widest text-center mt-2">
                    LAYRA SANTOS
                  </span>
                  <span className="font-serif italic text-xs tracking-wider text-stone-300 text-center mt-1">
                    Psicanalista Clínica & Mentora
                  </span>
                </div>

                {/* Clinical signature panel */}
                <div className="border-t border-gold-elegant/20 pt-4 mt-4 text-center space-y-1">
                  <p className="text-[10px] sm:text-xs text-stone-300 font-sans tracking-wide">
                    Registro Profissional Terápico Ativo
                  </p>
                  <p className="font-sans text-[9px] tracking-widest text-[#25d366] uppercase font-bold">
                    Especialista em Famílias e Casais
                  </p>
                </div>
              </div>

            </motion.div>

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
                Ela acredita verdadeiramente que cada mulher possui uma esmeralda intacta, porém sufocada por antigas mágoas, escassez assimilada e limites frouxos. Essa consultoria de mentoria foi lapidada estrategicamente para que você saia com uma mente pacificada e um norte de prosperidade real.
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
