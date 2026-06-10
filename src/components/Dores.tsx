/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, HelpCircle, HeartOff, UserCheck, ShieldAlert, Coins, Sparkles } from 'lucide-react';

export default function Dores() {
  const dores = [
    {
      id: 'vazio',
      titulo: 'Sensação de vazio mesmo com conquistas',
      descricao: 'Você olha para a sua carreira, sua casa e sua família... Tudo parece certo no papel, mas no silêncio do seu peito resta um eco de insatisfação inexplicável.',
      icon: HeartOff,
    },
    {
      id: 'limites',
      titulo: 'Dificuldade extrema de colocar limites',
      descricao: 'Dizer "não" parece impossível. Você acaba sobrecarregando sua agenda para carregar problemas que não pertencem a você.',
      icon: ShieldAlert,
    },
    {
      id: 'culpa',
      titulo: 'Culpa sufocante por escolher a si mesma',
      descricao: 'Tirar uma única tarde para descansar ou investir em si mesma gera um sentimento automático de egoísmo e negligência.',
      icon: AlertCircle,
    },
    {
      id: 'dinheiro',
      titulo: 'Bloqueios sutis com dinheiro e prosperidade',
      descricao: 'Trabalhar exaustivamente sem conseguir desfrutar da abundância financeira. Um teto invisível de escassez sabota seu merecimento.',
      icon: Coins,
    },
    {
      id: 'anular',
      titulo: 'Relacionamentos onde você se anula aos poucos',
      descricao: 'Você é a coluna forte que sustenta a todos, mas quem acolhe você? O medo de desagradar faz você engolir sua própria voz para manter a paz.',
      icon: UsersCloseIcon, // Fallback safely
    },
    {
      id: 'conexao',
      titulo: 'Falta de conexão e clareza espiritual',
      descricao: 'Sua rotina corrida desconectou suas decisões diárias da sua fé, criando um tatear cego sobre qual é o seu verdadeiro propósito.',
      icon: Sparkles,
    },
    {
      id: 'posicionamento',
      titulo: 'Medo latente de se posicionar com firmeza',
      descricao: 'Receio constante de ser julgada como "difícil" ou "agressiva" ao expressar suas reais opiniões e necessidades emocionais.',
      icon: UserCheck,
    },
  ];

  return (
    <section
      id="dores"
      className="relative bg-stone-50 py-24 sm:py-32 border-y border-stone-200/50 overflow-hidden"
    >
      {/* Decorative luxury elements (soft background text and elegant borders) */}
      <div className="absolute top-0 right-0 p-8 select-none pointer-events-none opacity-[0.02] font-sans text-9xl font-bold tracking-widest text-[#05412e]">
        METAMORFOSE
      </div>
      <div className="absolute bottom-0 left-0 p-8 select-none pointer-events-none opacity-[0.02] font-serif text-9xl italic font-bold text-[#c5a85c]">
        Lapidação
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark block">
            Reconhecendo as Barreiras Atuais
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-esmeralda-950 font-light leading-snug">
            Você sente que conquistou grandes coisas, mas <span className="italic font-normal text-gold-elegant">ainda falta algo?</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-gold-elegant mx-auto my-6"></div>
          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
            Mulheres de alma nobre se acostumaram a dar suporte a famílias inteiras, sustentar negócios e desempenhar múltiplos papéis impecáveis no palco da sociedade. No entanto, na privacidade do próprio espelho, muitas se encontram cansadas na alma, inseguras e isoladas.
          </p>
        </div>

        {/* Pain Points Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {dores.map((dor, index) => {
            const IconComponent = dor.icon;
            
            return (
              <motion.div
                key={dor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative bg-white border border-stone-200/80 p-6 sm:p-8 rounded-none shadow-sm hover:shadow-xl hover:border-gold-elegant/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Gold Corner Decor */}
                <div className="absolute top-0 right-0 w-8 h-[1px] bg-gold-elegant/0 group-hover:bg-gold-elegant/50 transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 h-8 w-[1px] bg-gold-elegant/0 group-hover:bg-gold-elegant/50 transition-colors duration-300"></div>

                <div className="space-y-4">
                  {/* Icon Frame */}
                  <div className="w-11 h-11 rounded-none bg-esmeralda-950/5 group-hover:bg-esmeralda-950 group-hover:text-gold-200 text-esmeralda-950 flex items-center justify-center transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-base font-semibold text-esmeralda-950 tracking-wide leading-tight group-hover:text-gold-dark transition-colors">
                    {dor.titulo}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    {dor.descricao}
                  </p>
                </div>

                {/* Subtle bottom detail dot */}
                <div className="w-1.5 h-1.5 rounded-none bg-gold-elegant/20 group-hover:bg-gold-elegant mt-6 transition-colors"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Empathy Quote block with Editorial Frame */}
        <div className="mt-16 sm:mt-24 bg-esmeralda-950 rounded-none p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl border border-gold-elegant/20">
          <div className="absolute inset-4 border border-gold-elegant/10 pointer-events-none z-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gold-elegant/10 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6">
            <p className="font-serif italic text-lg sm:text-2xl text-stone-100 max-w-3xl mx-auto leading-relaxed font-light">
              "Não há maior sofrimento do que viver uma vida cheia de realizações públicas mas vazia de si mesma. Continuar fingindo que está tudo bem não é força; é apenas prolongar a sua cura."
            </p>
            <div className="w-12 h-[1px] bg-gold-elegant/30 mx-auto"></div>
            <div className="font-sans text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-elegant font-semibold">
              — Layra Santos • Psicanálise & Cura Feminina
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Minimal safe fallback icon wrapper
function UsersCloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
