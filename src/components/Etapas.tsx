/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, CheckSquare, RefreshCw, Layers } from 'lucide-react';

export default function Etapas() {
  const etapas = [
    {
      numero: '01',
      titulo: 'Diagnóstico Ativo',
      descricao: 'Mapeamento minucioso e confidencial da sua fase existencial atual. Identificamos as principais dores, os traumas herdados e os bloqueios específicos que sabotam seus objetivos hoje.',
      icon: Search,
    },
    {
      numero: '02',
      titulo: 'Lapidação Guiada',
      descricao: 'Profundo trabalho terapêutico, psicanalítico e estratégico focado nos pilares fundamentais: resgate de identidade, imposição de limites saudáveis, prosperidade abundante e espiritualidade alinhada.',
      icon: PenTool,
    },
    {
      numero: '03',
      titulo: 'Plano de Ação de Alto Impacto',
      descricao: 'Desenho cirúrgico e sustentável de novos hábitos vitoriosos, decisões sábias e rituais práticos diários criados para blindar e perpetuar a sua nova identidade recém-lapidada.',
      icon: CheckSquare,
    },
    {
      numero: '04',
      titulo: 'Acompanhamento Exclusivo',
      descricao: 'Direcionamento contínuo e acolhimento próximo para garantir consistência. Monitoramos sua mente para que você jamais ceda à autossabotagem e retorne aos antigos ciclos destrutivos de carências.',
      icon: RefreshCw,
    },
  ];

  return (
    <section
      id="como-funciona"
      className="relative bg-white py-24 sm:py-32 overflow-hidden border-b border-stone-200/55"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section formatting */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 space-y-4">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark block">
            A Jornada Prática
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-esmeralda-950 font-light">
            Como Funciona a <span className="italic font-normal text-gold-elegant">Mentoria Feminina?</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-gold-elegant mx-auto my-6"></div>
          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
            Uma abordagem programada e segura em quatro fases complementares para garantir que a sua mente e a sua rotina consolidem uma verdadeira metamorfose profunda.
          </p>
        </div>

        {/* Timeline representation block cascading vertical */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Centered line divider (only on desktop/tablet) */}
          <div className="absolute left-[31px] md:left-1/2 top-10 bottom-10 w-[1.5px] bg-gold-elegant/20 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12 sm:space-y-16">
            {etapas.map((etapa, index) => {
              const IconComponent = etapa.icon;
              // Alternating alignment values for layout
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={etapa.numero}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col sm:flex-row items-stretch gap-6 sm:gap-0 relative ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Text Container Column */}
                  <div className="w-full sm:w-[45%] flex flex-col justify-center">
                    <div className={`bg-stone-50 border border-stone-200 p-6 sm:p-8 rounded-none shadow-sm hover:shadow-md hover:border-gold-elegant/30 transition-all duration-300 ${
                      isEven ? 'sm:text-right sm:items-end' : 'sm:text-left'
                    }`}>
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                        <span className="font-sans text-[10px] font-bold text-gold-dark uppercase tracking-widest bg-white border border-stone-200 px-3 py-1 rounded-none">
                          Fase {etapa.numero}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-lg font-medium text-esmeralda-950 tracking-wide mb-2 sm:mb-3">
                        {etapa.titulo}
                      </h3>
                      
                      <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                        {etapa.descricao}
                      </p>
                    </div>
                  </div>

                  {/* Bullet connection point centered */}
                  <div className="absolute left-[16px] sm:left-1/2 top-4 sm:-translate-x-1/2 z-20 flex sm:justify-center items-center">
                    <div className="w-9 h-9 rounded-none bg-esmeralda-900 border border-gold-elegant flex items-center justify-center text-gold-bright shadow-lg sm:scale-105 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4 text-gold-bright" />
                    </div>
                  </div>

                  {/* Empty matching slot placeholder for even/odd structure */}
                  <div className="w-full sm:w-[45%] hidden sm:block"></div>

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Dynamic call to action redirect link bottom */}
        <div className="mt-20 text-center relative z-10">
          <a
            href="#formulario"
            className="inline-flex items-center justify-center gap-3 bg-esmeralda-800 hover:bg-esmeralda-900 text-stone-50 font-sans text-xs font-semibold uppercase tracking-widest px-8 py-4.5 rounded-none shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Quero iniciar os meus diagnósticos</span>
          </a>
        </div>

      </div>
    </section>
  );
}
