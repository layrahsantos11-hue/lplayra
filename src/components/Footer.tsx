/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, MessageCircle, ArrowUp, Instagram, Shield, Heart } from 'lucide-react';

export default function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="footer" className="bg-esmeralda-950 text-stone-200 py-16 border-t border-gold-elegant/10 relative overflow-hidden">
        {/* Abstract golden pattern shadow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-gold-elegant/5 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-between text-center gap-8">
            
            {/* Upper Emblem and Brand Slogan */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 group">
                <div className="w-9 h-9 rounded-full border border-gold-elegant/40 flex items-center justify-center bg-esmeralda-950/60 relative">
                  <Sparkles className="w-4 h-4 text-gold-bright" />
                </div>
                <span className="font-display font-medium tracking-[0.25em] text-sm text-gold-elegant">
                  MÉTODO ESMERALDA
                </span>
              </div>
              
              <p className="font-serif italic text-stone-300 text-sm tracking-widest uppercase font-semibold">
                “Equilíbrio • Prosperidade • Transformação”
              </p>
            </div>

            {/* Quick action buttons & Contact details */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a
                href="https://wa.me/5516991521475"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 hover:text-gold-bright transition-colors group"
                id="footer-whatsapp"
              >
                <MessageCircle className="w-4.5 h-4.5 text-[#25d366]" />
                <span className="font-sans font-medium">WhatsApp: (16) 99152-1475</span>
              </a>
              <span className="text-gold-elegant hidden sm:inline">•</span>
              <a
                href="https://instagram.com/layrasantos_psicanalista" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 hover:text-gold-bright transition-colors group"
                id="footer-instagram"
              >
                <Instagram className="w-4.5 h-4.5 text-pink-500" />
                <span className="font-sans font-medium">@layrahs_</span>
              </a>
            </div>

            {/* Substantive legal copyright text */}
            <div className="border-t border-gold-elegant/15 w-full pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
              
              <div className="space-y-1">
                <p className="font-display font-bold text-[10px] tracking-wider text-gold-elegant">
                  LAYRA SANTOS — PSICANALISTA
                </p>
                <p className="font-sans font-light">
                  © {new Date().getFullYear()} Método Esmeralda. Todos os direitos reservados.
                </p>
              </div>

              {/* Sub-navigation of legal requirements */}
              <div className="flex gap-6">
                <button
                  onClick={() => setShowPrivacyModal(true)}
                  className="hover:text-gold-bright border-b border-stone-500/0 hover:border-gold-bright/35 transition-all flex items-center gap-1.5"
                  id="privacy-trigger"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Política de Privacidade</span>
                </button>
                <button
                  onClick={handleBackToTop}
                  className="text-stone-300 hover:text-gold-bright transition-colors flex items-center gap-1"
                  title="Voltar ao início"
                  id="back-to-top-button"
                >
                  <span>Voltar ao topo</span>
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </footer>

      {/* PERSISTENT FLOATING WHATSAPP BUTTON (High conversion) */}
      <a
        href="https://wa.me/5516991521475"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25d366]/40 hover:bg-[#25d366]/60 backdrop-blur-md rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.7)] hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-105"
        title="Falar com Layra no WhatsApp"
        id="floating-whatsapp"
      >
        <span className="absolute inset-[-4px] border-2 border-[#25d366]/40 rounded-full animate-ping pointer-events-none"></span>
        <MessageCircle className="w-7 h-7 text-white fill-current" />
      </a>

      {/* POLICY OF PRIVACY MODAL POPUP */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white text-stone-800 max-w-2xl w-full rounded-none shadow-2xl p-6 sm:p-8 relative mt-12 overflow-hidden max-h-[80vh] flex flex-col justify-between">
            <div className="space-y-4 overflow-y-auto pr-2">
              <div className="flex items-center gap-2 border-b border-stone-200 pb-3">
                <Shield className="w-6 h-6 text-[#05412e]" />
                <h3 className="font-display text-base sm:text-lg font-bold text-[#011c13]">
                  Política de Privacidade — Método Esmeralda
                </h3>
              </div>

              <div className="font-sans text-xs sm:text-sm text-stone-600 space-y-3 leading-relaxed font-light">
                <p>
                  Sua privacidade é extremamente valiosa para nós. Esta política descreve como tratamos e protegemos as dados capturados na landing page profissional da mentoria <strong>Método Esmeralda</strong> de Layra Santos.
                </p>
                <p>
                  <strong>1. Coleta de Informações:</strong> Nós coletamos seu nome, número de WhatsApp, endereço de e-mail e relatos descritivos de forma totalmente voluntária, apenas no formulário de captação de leads.
                </p>
                <p>
                  <strong>2. Finalidade de Uso:</strong> Esses dados são utilizados única e exclusivamente para que a profissional Layra Santos ou sua equipe comercial autorizada entre em contato direto para agendamento, triagem inicial e envio de informações da mentoria.
                </p>
                <p>
                  <strong>3. Absoluto Sigilo Psicanalítico:</strong> De acordo com os preceitos éticos do exercício psicanalítico, todas as informações partilhadas sobre suas dores e áreas de transformação são tratadas sob absoluto sigilo e de forma restrita, não sendo compartilhadas com qualquer terceiro sob nenhuma circunstância.
                </p>
                <p>
                  <strong>4. Direito de Remoção:</strong> O usuário tem o direito soberano de solicitar a retificação ou exclusão definitiva de seus registros de nossa base a qualquer instante, bastando enviar uma breve solicitação ao nosso contato oficial de atendimento.
                </p>
              </div>
            </div>

            <div className="border-t border-stone-200 pt-5 mt-6 text-right">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="bg-[#043c2c] hover:bg-[#07563d] text-white px-6 py-2.5 rounded-none font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                Entendi e Aceito
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
