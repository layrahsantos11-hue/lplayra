/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gem, Sparkles, BookOpen, Layers, Flame, Sun } from 'lucide-react';

export default function Metodo() {
  const [activeStep, setActiveStep] = useState(0);

  const lapidacaoSteps = [
    {
      id: 0,
      fase: 'Fase I',
      titulo: 'Exploração & Raízes (Pedra Bruta)',
      descricao: 'Representa a mulher em seu estado bruto, imersa nas pressões e expectativas alheias. É o momento de descer às raízes, identificar os traumas familiares herdados, os bloqueios inconscientes da infância e entender quais sementes foram plantadas na base de quem você é hoje.',
      metáfora: 'Encontrar a gema preciosa ainda coberta pelas rochas e solos da vida.',
      simbolo: '🌱',
      icon: Layers,
    },
    {
      id: 1,
      fase: 'Fase II',
      titulo: 'A Limpeza das Camadas (Diário & Desabafo)',
      descricao: 'O processo começa com o autoconhecimento guiado pela psicanálise. No método, o uso de perguntas provocativas e a prática do diário terapêutico começam a derrubar as camadas de vergonha, medos ocultos, escassez assimilada e a constante necessidade de aprovação externa que abafa seu valor.',
      metáfora: 'Extrair as impurezas pesadas acumuladas ao longo dos anos para revelar a esmeralda real.',
      simbolo: '📖',
      icon: BookOpen,
    },
    {
      id: 2,
      fase: 'Fase III',
      titulo: 'A Lapidação Estratégica (Limites & Voz)',
      descricao: 'Agora inicia-se o corte preciso: a definição do posicionamento elegante. Você aprende a colocar limites firmes sem culpa nos seus relacionamentos, assume o controle do seu tempo e da sua energia, e aprende a falar a sua verdade com posicionamento régio, sem ser agressiva e sem se anular.',
      metáfora: 'Trabalhar as facetas geométricas do cristal, definindo de que forma ela irá refletir a luz.',
      simbolo: '💎',
      icon: Flame,
    },
    {
      id: 3,
      fase: 'Fase IV',
      titulo: 'O Brilho Radiante (Florescer & Fé)',
      descricao: 'A fase de consolidação da cura e da prosperidade. Sua identidade está firme, sua vida espiritual está alinhada à fé prática diária e suas finanças e carreira decolam a partir do merecimento e da abundância. Você deixa de sobreviver e aprende a brilhar com elegância.',
      metáfora: 'A esmeralda lapidada que reluz sua luz própria verde-profunda em qualquer ambiente.',
      simbolo: '✨',
      icon: Sun,
    },
  ];

  return (
    <section
      id="metodo"
      className="relative bg-esmeralda-950 text-white py-24 sm:py-32 overflow-hidden border-b border-gold-elegant/10"
    >
      {/* Background Graphic elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-esmeralda-500/5 blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-gold-elegant/5 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Side text copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 border border-gold-elegant/20 bg-esmeralda-900/40 px-3 py-1 rounded-full text-xs text-gold-elegant font-semibold uppercase tracking-widest">
              <Gem className="w-3.5 h-3.5" />
              <span>A Essência</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              O que é o <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-100 to-gold-bright font-serif italic font-normal">Método Esmeralda?</span>
            </h2>

            <div className="w-12 h-1 bg-gold-elegant"></div>

            <p className="font-serif text-lg text-stone-200 italic font-light leading-relaxed">
              “O Método Esmeralda é uma mentoria de lapidação feminina que une autoconhecimento, psicanálise, espiritualidade, prosperidade, posicionamento e reconstrução emocional.”
            </p>

            <div className="space-y-4 font-sans text-sm sm:text-base text-stone-300 leading-relaxed font-light">
              <p>
                A metáfora que carrega nossa essência é simples e profunda: assim como uma esmeralda revela seu brilho indescritível e verdejante somente após passar pelas mãos de um lapidador, a mulher de valor também precisa remover as cascas acumuladas para florescer.
              </p>
              <p>
                As camadas de medo, a culpa herdada, as crenças de escassez e o vício em agradar outras pessoas para ser amada são apenas cascalhos. Sob a orientação de Layra Santos, você passará por uma lapidação intencional, segura e libertadora.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center text-xs tracking-wider uppercase text-gold-elegant font-bold">
              <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-gold-bright" /> Lapidação Real</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-elegant/40"></span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-gold-bright" /> Psicanálise</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-elegant/40"></span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-gold-bright" /> Espiritualidade</span>
            </div>
          </div>

          {/* Interactive Stepper Column */}
          <div className="lg:col-span-7 bg-esmeralda-950/90 border border-gold-elegant/20 p-6 sm:p-10 shadow-2xl relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, #D4AF37 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
            
            <div className="flex flex-col space-y-6 relative z-10">
              
              {/* Steps control tab list */}
              <div className="border-b border-gold-elegant/10 pb-4">
                <p className="font-sans text-[11px] tracking-[0.2em] text-gold-elegant uppercase font-bold mb-4 text-center sm:text-left">
                  Selecione as fases da sua transformação:
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {lapidacaoSteps.map((step) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`relative py-3.5 transition-all duration-300 font-sans text-xs font-bold uppercase tracking-wider text-center flex flex-col items-center justify-center gap-1 rounded-none border ${
                        activeStep === step.id
                          ? 'bg-gold-elegant text-esmeralda-950 border-gold-elegant font-semibold shadow-md translate-y-[-1px]'
                          : 'bg-esmeralda-950/40 hover:bg-esmeralda-900/60 border-gold-elegant/20 text-stone-300'
                      }`}
                    >
                      <span className="text-sm font-semibold">{step.fase}</span>
                      <span className="text-[10px] opacity-75 font-serif hidden sm:inline">{step.simbolo}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Steps display cards animation */}
              <div className="min-h-[280px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gold-elegant/10 border border-gold-elegant/35 flex items-center justify-center text-gold-bright rounded-none">
                        {React.createElement(lapidacaoSteps[activeStep].icon, { className: 'w-5 h-5' })}
                      </div>
                      <h4 className="font-serif text-xl font-medium text-white tracking-wide">
                        {lapidacaoSteps[activeStep].titulo}
                      </h4>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-stone-300 leading-relaxed font-light">
                      {lapidacaoSteps[activeStep].descricao}
                    </p>

                    <div className="bg-esmeralda-900/50 border-l border-gold-elegant p-4 rounded-none">
                      <p className="font-sans text-[10px] tracking-[0.25em] text-gold-bright uppercase font-bold">
                        A metáfora da esmeralda:
                      </p>
                      <p className="font-serif italic text-sm text-stone-200 mt-1.5">
                        "{lapidacaoSteps[activeStep].metáfora}"
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Footer buttons / indicators */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-gold-elegant/5">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="text-xs uppercase tracking-wider text-stone-400 hover:text-gold-bright disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    ← Fase Anterior
                  </button>
                  <span className="font-serif italic text-xs text-stone-400">
                    Passo {activeStep + 1} de 4
                  </span>
                  <button
                    disabled={activeStep === 3}
                    onClick={() => setActiveStep((prev) => Math.min(3, prev + 1))}
                    className="text-xs uppercase tracking-wider text-gold-elegant hover:text-gold-bright disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    Próxima Fase →
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
