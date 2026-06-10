/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ShieldAlert, Sparkles, Gem } from 'lucide-react';

export default function AntesDepois() {
  const antesPoints = [
    'Vive tentando agradar a todos ao redor, silenciando os próprios desejos.',
    'Sente uma culpa avassaladora por dizer "não" a tarefas abusivas.',
    'Tem medo paralisante de cobrar o real valor pelo seu trabalho.',
    'Se anula nos relacionamentos afetivos, abrindo mão do seu espaço.',
    'Vive aprisionada no modo exaustivo de sobrevivência e pressa.',
    'Busca validação externa e aplauso para se sentir amada e importante.',
  ];

  const depoisPoints = [
    'Reconhece com clareza o seu valor intrínseco, sem depender de elogios.',
    'Coloca limites firmes com profundo amor e respeito à sua integridade.',
    'Atrai prosperidade financeira com sabedoria, consciência e abundância.',
    'Constrói relacionamentos recíprocos, onde se posiciona com dignidade.',
    'Desfruta de uma vida espiritual verdadeiramente alinhada à sua essência.',
    'Presença firme, postura elegante e autoridade transformadora nos ambientes.',
  ];

  return (
    <section
      id="transformacao"
      className="relative bg-stone-50 py-24 sm:py-32 overflow-hidden border-b border-stone-200/55"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-esmeralda-700/5 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 space-y-4">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark block">
            A Transição de Vida
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-esmeralda-950 font-light">
            De uma mulher sobrecarregada para uma <span className="italic font-normal text-gold-elegant">mulher lapidada</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-gold-elegant mx-auto my-6"></div>
          <p className="font-sans text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
            A jornada pelo Método Esmeralda não é sobre se transformar em outra pessoa, mas sim despir-se das armaduras e pesos que forçaram você a se esconder.
          </p>
        </div>

        {/* Dual Tablet Display Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Burdened Condition Tablet (Antes) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-stone-200 p-8 sm:p-10 rounded-none shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between"
          >
            {/* Absolute visual marker banner */}
            <div className="absolute -top-3 left-8 bg-stone-500 text-white font-sans text-[10px] tracking-[0.2em] uppercase font-bold py-1 px-4 rounded-none">
              Fase de Sobrevivência
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
                <div className="w-10 h-10 rounded-none bg-stone-100 flex items-center justify-center text-stone-500">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-stone-800">A Mulher Sobrecarregada</h3>
                  <p className="font-serif italic text-xs text-stone-500">"Dar tudo para os outros e se perder pelo caminho"</p>
                </div>
              </div>

              {/* Point items */}
              <ul className="space-y-4">
                {antesPoints.map((point, index) => (
                  <li key={index} className="flex gap-3.5 items-start">
                    <div className="w-5 h-5 rounded-none bg-red-50 text-red-600 flex items-center justify-center mt-0.5 shrink-0">
                      <X className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-stone-100 mt-8">
              <div className="text-[10px] text-stone-400 font-sans uppercase tracking-widest font-semibold">
                Diagnóstico de bloqueio emocional • Falta de clareza identitária
              </div>
            </div>
          </motion.div>

          {/* Polished Shiny Condition Tablet (Depois) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-esmeralda-950 border-2 border-gold-elegant p-8 sm:p-10 rounded-none shadow-xl relative overflow-hidden flex flex-col justify-between text-white"
          >
            {/* Glowing background highlights */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold-elegant/15 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Crown decoration banner */}
            <div className="absolute -top-3 left-8 bg-gold-elegant text-esmeralda-950 font-sans text-[10px] tracking-[0.2em] uppercase font-bold py-1 px-4 rounded-none shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-esmeralda-950 sparkle-animation" />
              <span>A Mulher Lapidada</span>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3 border-b border-gold-elegant/10 pb-4">
                <div className="w-10 h-10 rounded-none bg-gold-elegant/10 border border-gold-elegant/30 flex items-center justify-center text-gold-bright">
                  <Gem className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-gold-elegant">A Essência Esmeralda</h3>
                  <p className="font-serif italic text-xs text-stone-300">"Viver o florescer espiritual e a dignidade real"</p>
                </div>
              </div>

              {/* Point items */}
              <ul className="space-y-4">
                {depoisPoints.map((point, index) => (
                  <li key={index} className="flex gap-3.5 items-start">
                    <div className="w-5 h-5 rounded-none bg-gold-elegant/20 text-gold-bright flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-stone-200 font-light leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-gold-elegant/10 mt-8 relative z-10">
              <div className="text-[10px] text-gold-elegant font-sans tracking-widest uppercase font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-gold-bright" />
                <span>O brilho da sua verdadeira essência</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
