/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, HelpingHand, HeartPulse } from 'lucide-react';

export default function ParaQuem() {
  const perfis = [
    'Você sente que perdeu sua identidade tentando ser forte e cuidar de todos ao redor.',
    'Quer prosperar na carreira e finanças sem arrastar aquela culpa inconsciente de egoísmo.',
    'Deseja pacificar a mente e curar de vez padrões familiares ou emocionais repetitivos.',
    'Precisa aprender a se posicionar melhor nos ambientes corporativos ou sociais com leveza.',
    'Quer fortalecer e amadurecer a sua caminhada de fé prática e espiritualidade real.',
    'Deseja restabelecer uma relação abençoada, saudável e inteligente com o dinheiro.',
    'Quer viver relacionamentos afetivos maduros, recíprocos e sem se anular.',
    'Sente no fundo do peito que está pronta para abrir os braços para uma nova grande fase da vida.',
  ];

  return (
    <section
      id="para-quem"
      className="relative bg-white py-24 sm:py-32 overflow-hidden border-b border-stone-200/55"
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft elegant linear background divider ornaments */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-gold-elegant/20 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual card decoration column on Left */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-gold-dark font-sans text-xs font-semibold uppercase tracking-[0.3em]">
              <HeartPulse className="w-4 h-4 text-gold-bright sparkle-animation" />
              <span>O Chamado à Escolha</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-esmeralda-950 font-light leading-tight">
              Esta mentoria é para <span className="italic font-normal text-gold-elegant">você se...</span>
            </h2>

            <div className="w-12 h-[1.5px] bg-gold-elegant"></div>

            <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              Se você se reconhece em uma ou mais dessas situações, saiba que essa desconexão não é definitiva. É apenas o aviso de que a casca ficou apertada demais para o tamanho da esmeralda que você abriga dentro de si.
            </p>

            {/* Micro visual card signature */}
            <div className="bg-stone-50 border-l border-gold-elegant p-6 rounded-none mt-4 space-y-2">
              <span className="font-sans text-[10px] tracking-[0.25em] text-[#05412e] uppercase font-bold block">
                O Primeiro Passo
              </span>
              <p className="font-serif italic text-sm text-stone-600">
                "Lapidar a própria vida exige coragem de recusar continuar no modo automático."
              </p>
            </div>
          </div>

          {/* Checklist columns on Right */}
          <div className="lg:col-span-7 bg-stone-50 border border-stone-200 p-6 sm:p-10 rounded-none shadow-sm space-y-6">
            
            <div className="grid grid-cols-1 gap-5">
              {perfis.map((perfil, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex gap-4 items-start bg-white p-4 rounded-none border border-stone-200/60 hover:border-gold-elegant/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-none bg-esmeralda-950/5 text-esmeralda-950 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-dark" />
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                    {perfil}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Prompt action button redirect link */}
            <div className="pt-4 text-center sm:text-left">
              <a
                href="#formulario"
                className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-esmeralda-950 font-bold hover:text-gold-bright transition-colors group"
              >
                <span>Eu decido dizer sim à minha lapidação</span>
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
