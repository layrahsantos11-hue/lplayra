/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, Sparkles } from 'lucide-react';
import { Depoimento } from '../types';

export default function Depoimentos() {
  const depoimentos: Depoimento[] = [
    {
      id: 1,
      nome: 'Helena M.',
      idade: '38 anos',
      profissao: 'Empresária',
      texto: 'Antes do Método Esmeralda, eu vivia tentando ser tudo para todos, cuidando de funcionários, casa, marido e filhos, mas caindo em prantos no silêncio do carro. Hoje aprendi a me escolher sem culpa, a gerenciar meu faturamento com merecimento e a cultivar minha fé em cada decisão corporativa.',
      antes: 'Anulada e sobrecarregada',
      depois: 'Identidade firme & faturamento livre',
      iniciais: 'HM',
    },
    {
      id: 2,
      nome: 'Patrícia S.',
      idade: '42 anos',
      profissao: 'Médica & Diretora Clínica',
      texto: 'Sempre conquistei muito sucesso material, mas me sentia de alguma forma inadequada e invisível nas minhas próprias relações afetivas. A mentoria de Layra foi um processo cirúrgico de reconstrução do meu valor. Hoje sei impor limites saudáveis e vivo uma relação verdadeiramente recíproca.',
      antes: 'Insegura nos relacionamentos',
      depois: 'Presença régia, elegante e amada',
      iniciais: 'PS',
    },
    {
      id: 3,
      nome: 'Vanessa K.',
      idade: '31 anos',
      profissao: 'Arquiteta e Designer de Interiores',
      texto: 'Eu lidava com um teto invisível de escassez e cansaço mental extremo. Trabalhava até adoecer para me provar válida. O Método Esmeralda destravou meu fluxo de finanças com consciência e alinhou completamente minha rotina com a minha paz de espírito.',
      antes: 'Exaustão física e bloqueio financeiro',
      depois: 'Prosperidade em paz & autoestima reerguida',
      iniciais: 'VK',
    },
  ];

  return (
    <section
      id="depoimentos"
      className="relative bg-stone-50 py-24 sm:py-32 overflow-hidden border-b border-stone-200/55"
    >
      {/* Elegante decor */}
      <div className="absolute top-10 left-10 text-gold-elegant/10 select-none pointer-events-none text-9xl font-display font-medium">
        LAYRA
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 space-y-4">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark block">
            Vozes da Transformação
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-esmeralda-950 font-light">
            Relatos de Quem <span className="italic font-normal text-gold-elegant">Foi Lapidada</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-gold-elegant mx-auto my-6"></div>
          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
            Mulheres reais que decidiram romper o silêncio da exaustão e hoje desfrutam de vidas equilibradas, prósperas e verdadeiramente sintonizadas à sua dignidade sagrada.
          </p>
        </div>

        {/* Grid display cards of testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((depo, index) => (
            <motion.div
              key={depo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-stone-200 p-6 sm:p-8 rounded-none shadow-sm hover:shadow-xl hover:border-gold-elegant/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Upper rating stars with double quote icons */}
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-bright text-gold-bright" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gold-elegant/20" />
                </div>

                {/* Main feedback copy block */}
                <p className="font-serif text-xs sm:text-sm text-stone-600 leading-relaxed italic font-light">
                  "{depo.texto}"
                </p>

                {/* Comparison before vs after list widget */}
                <div className="bg-stone-50 border border-stone-200 p-4 rounded-none grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="font-sans text-[9px] uppercase tracking-wider text-stone-400 font-bold block">Antes:</span>
                    <span className="font-serif italic text-stone-600 mt-0.5 inline-block leading-tight">{depo.antes}</span>
                  </div>
                  <div className="border-l border-stone-200 pl-3">
                    <span className="font-sans text-[9px] uppercase tracking-wider text-esmeralda-800 font-bold flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-gold-bright animate-bounce" /> Depois:
                    </span>
                    <span className="font-serif italic text-esmeralda-950 font-medium mt-0.5 inline-block leading-tight">{depo.depois}</span>
                  </div>
                </div>

              </div>

              {/* Student Bio line signature */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-stone-100">
                {/* Avatar Initials Circle */}
                <div className="w-12 h-12 rounded-full border border-gold-elegant flex items-center justify-center bg-gradient-to-br from-[#043c2c] to-[#011c13] text-gold-bright font-sans text-xs font-bold">
                  {depo.iniciais}
                </div>
                <div>
                  <h4 className="font-serif text-xs sm:text-sm font-medium text-esmeralda-950 tracking-wide">
                    {depo.nome}
                  </h4>
                  <p className="font-sans text-[11px] text-stone-500">
                    {depo.idade} • {depo.profissao}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
