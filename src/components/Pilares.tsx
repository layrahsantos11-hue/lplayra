/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Fingerprint, Heart, Coins, Crown, Shield, Compass, Users } from 'lucide-react';
import { Pilar } from '../types';

export default function Pilares() {
  const pilares: (Pilar & { icon: React.ComponentType<any> })[] = [
    {
      id: 1,
      titulo: 'Identidade',
      descricao: 'Reconheça as máscaras que você precisou adotar ou construir para sobreviver ao longo da vida e reencontre quem você realmente nasceu para ser.',
      iconName: 'Fingerprint',
      icon: Fingerprint,
    },
    {
      id: 2,
      titulo: 'Cura emocional',
      descricao: 'Libere culpas arraigadas, mágoas antigas, feridas da infância e padrões auto-sabotadores repetitivos que impedem seu brilho autêntico.',
      iconName: 'Heart',
      icon: Heart,
    },
    {
      id: 3,
      titulo: 'Prosperidade',
      descricao: 'Transforme por completo sua relação mental com o dinheiro, destrave o sentimento profundo de merecimento e sintonize com a abundância prática.',
      iconName: 'Coins',
      icon: Coins,
    },
    {
      id: 4,
      titulo: 'Posicionamento',
      descricao: 'Aprenda a ocupar o seu devido lugar em qualquer ambiente, comunicando-se com elegância rústica, firmeza, compostura e clareza absoluta.',
      iconName: 'Crown',
      icon: Crown,
    },
    {
      id: 5,
      titulo: 'Limites',
      descricao: 'Proteja de forma inegociável o seu tempo, a sua valiosa energia e as suas prioridades sem carregar o fardo doloroso da culpa estrutural.',
      iconName: 'Shield',
      icon: Shield,
    },
    {
      id: 6,
      titulo: 'Espiritualidade',
      descricao: 'Reconecte a sua rotina pesada, as grandes escolhas de negócios e o seu cotidiano com a sua fé prática e divina, alinhada à sua verdadeira essência.',
      iconName: 'Compass',
      icon: Compass,
    },
    {
      id: 7,
      titulo: 'Relacionamentos',
      descricao: 'Aprenda de uma vez por todas a amar com generosidade sem se anular nos processos, estabelecendo trocas afetivas maduras e saudáveis.',
      iconName: 'Users',
      icon: Users,
    },
  ];

  return (
    <section
      id="pilares"
      className="relative bg-white py-24 sm:py-32 overflow-hidden border-b border-stone-200/55"
    >
      {/* Background visual watermarks */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-[80rem] h-[80rem] text-esmeralda-900">
          <polygon points="50,15 15,40 50,85 85,40" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content styling */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 space-y-4">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark block">
            A Metodologia Completa
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-esmeralda-950 font-light">
            Os 7 Pilares da <span className="italic font-normal text-gold-elegant">Lapidação Feminina</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-gold-elegant mx-auto my-6"></div>
          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
            Uma abordagem integrada que acolhe a complexidade do ser feminino. Não tratamos as dores de forma isolada, mas sim reconstruindo cada vertente da sua história de dignidade.
          </p>
        </div>

        {/* Pillars dynamic grid list layout with customized asymmetrical placement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pilares.map((pilar, index) => {
            const Icon = pilar.icon;
            
            // Asymmetrical grid column alignment for the 7th item (make it centered at the bottom of the grid)
            const isLast = index === pilares.length - 1;
            
            return (
              <motion.div
                key={pilar.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`group bg-stone-50 border border-stone-200/70 p-8 rounded-none shadow-sm hover:shadow-xl hover:border-gold-elegant/40 hover:bg-white transition-all duration-300 flex flex-col justify-between ${
                  isLast ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0' : ''
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Pillar Icon and Index indicator */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-none bg-esmeralda-950/5 text-esmeralda-950 group-hover:bg-esmeralda-950 group-hover:text-gold-elegant flex items-center justify-center transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif italic text-stone-300 text-3xl font-bold select-none group-hover:text-gold-elegant/30 transition-colors">
                      0{pilar.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-medium text-esmeralda-950 tracking-wide">
                    {pilar.titulo}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    {pilar.descricao}
                  </p>

                </div>

                {/* Micro ornament marker */}
                <div className="w-full h-[1px] bg-gradient-to-r from-gold-elegant/10 via-gold-elegant/0 mt-6 group-hover:from-gold-elegant/40 transition-all duration-500"></div>

              </motion.div>
            );
          })}
        </div>

        {/* Dynamic call to action prompt */}
        <div className="mt-16 sm:mt-24 text-center">
          <p className="font-serif italic text-base text-stone-600">
            Qual dessas áreas mais clama por um recomeço na sua vida hoje?
          </p>
          <div className="mt-4">
            <a
              href="#formulario"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-gold-dark font-bold hover:text-gold-bright transition-colors group"
            >
              <span>Selecione sua resposta no formulário abaixo</span>
              <span className="group-hover:translate-y-1 transition-transform inline-block">↓</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
