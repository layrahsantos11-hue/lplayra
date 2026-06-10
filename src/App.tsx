/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dores from './components/Dores';
import Metodo from './components/Metodo';
import Pilares from './components/Pilares';
import AntesDepois from './components/AntesDepois';
import ParaQuem from './components/ParaQuem';
import Sobre from './components/Sobre';
import Etapas from './components/Etapas';
import Depoimentos from './components/Depoimentos';
import Formulario from './components/Formulario';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans antialiased overflow-x-hidden selection:bg-gold-elegant selection:text-esmeralda-950">
      {/* 1. Global Navigation Bar */}
      <Header />

      {/* 2. Hero Presentation (Você não nasceu para sobreviver) */}
      <Hero />

      {/* 3. Pain Points Empathy (Você sente que conquistou coisas, mas ainda falta algo?) */}
      <Dores />

      {/* 4. Metaphor & Explanatory Stepper (O que é o Método Esmeralda?) */}
      <Metodo />

      {/* 5. Core Pillars Grid (The 7 Pillars) */}
      <Pilares />

      {/* 6. High-Contrast Side-by-Side (Mulher Sobrecarregada vs Mulher Lapidada) */}
      <AntesDepois />

      {/* 7. Diagnostic Checklists (Essa consultoria é para você se...) */}
      <ParaQuem />

      {/* 8. Therapist Portrait bio (Quem vai guiar sua jornada — Layra Santos) */}
      <Sobre />

      {/* 9. Cascade Timeline (Como funciona) */}
      <Etapas />

      {/* 10. Voice of our users (Depoimentos) */}
      <Depoimentos />

      {/* 11. Lead capturing card (CTA Final & Formulário) */}
      <Formulario />

      {/* 12. Footers & Floating elements */}
      <Footer />
    </div>
  );
}

