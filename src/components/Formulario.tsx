/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MessageCircle, Send, CheckCircle2, AlertTriangle, HelpCircle, ArrowRight, Loader2 } from 'lucide-react';
import { Lead, AreaTransformacao } from '../types';
import { saveLead, isSupabaseConfigured } from '../lib/supabase';

export default function Formulario() {
  const [formData, setFormData] = useState<{
    nome: string;
    whatsapp: string;
    email: string;
    area_transformacao: AreaTransformacao | '';
    mensagem: string;
  }>({
    nome: '',
    whatsapp: '',
    email: '',
    area_transformacao: '',
    mensagem: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    isFallback: boolean;
    show: boolean;
    error?: string;
  } | null>(null);

  const areas: AreaTransformacao[] = [
    'Identidade',
    'Relacionamentos',
    'Prosperidade',
    'Espiritualidade',
    'Autoestima',
    'Limites',
    'Carreira',
  ];

  // Simple mask format for Brazilian phone numbers: (XX) XXXXX-XXXX
  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 10) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    
    setFormData((prev) => ({ ...prev, whatsapp: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.whatsapp || !formData.email || !formData.area_transformacao) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setLoading(true);
    setSubmitResult(null);

    const leadObject: Lead = {
      nome: formData.nome,
      whatsapp: formData.whatsapp,
      email: formData.email,
      area_transformacao: formData.area_transformacao,
      mensagem: formData.mensagem || undefined,
    };

    const response = await saveLead(leadObject);
    
    setLoading(false);
    if (response.success) {
      setSubmitResult({
        success: true,
        isFallback: response.isFallback,
        show: true,
      });
      // Clear form inputs
      setFormData({
        nome: '',
        whatsapp: '',
        email: '',
        area_transformacao: '',
        mensagem: '',
      });
    } else {
      setSubmitResult({
        success: false,
        isFallback: false,
        show: true,
        error: response.error,
      });
    }
  };

  return (
    <section
      id="formulario"
      className="relative bg-gradient-to-b from-stone-50 via-esmeralda-950/20 to-stone-100 py-24 sm:py-32 overflow-hidden border-t border-stone-200/50"
    >
      {/* Decorative luxury sparkles */}
      <div className="absolute top-10 right-10 pulse-glow opacity-30 select-none pointer-events-none text-gold-bright">
        <Sparkles className="w-12 h-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Double column grid framework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* CTA Row Left Column */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 lg:sticky lg:top-32">
            
            <div className="inline-flex items-center gap-2 border border-gold-elegant bg-white/80 px-4 py-1.5 rounded-none shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark sparkle-animation" />
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-dark font-bold">
                Comece Sua Evolução
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-esmeralda-950 font-light leading-tight">
                Sua nova vida começa quando você <span className="italic font-normal text-gold-elegant">decide se escolher.</span>
              </h2>
              
              <p className="font-serif italic text-lg sm:text-xl text-stone-600 leading-relaxed font-light">
                “A esmeralda já existe dentro de você. Agora é hora de lapidar.”
              </p>
            </div>

            {/* Benefit details */}
            <div className="space-y-4 pt-4 border-t border-stone-200/80">
              <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed font-light">
                Ao preencher o formulário ao lado para a mentoria, você entra diretamente em nossa lista prioritária. Layra ou sua assessoria fará uma triagem carinhosa e exclusiva.
              </p>
              
              <div className="flex gap-4 items-center pt-2">
                <a
                  href="https://wa.me/5516991521475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-esmeralda-950 hover:text-gold-dark transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-[#25d366]" />
                  <span>Chamar direto no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Custom info panel showing what happens next */}
            <div className="bg-white border border-stone-200 p-5 rounded-none shadow-sm flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-none bg-gold-elegant/10 flex items-center justify-center shrink-0 text-gold-dark">
                <CheckCircle2 className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="font-sans text-[10px] font-bold uppercase text-esmeralda-950 tracking-wider mb-1">
                  Atendimento Confidencial
                </h4>
                <p className="font-serif text-xs text-stone-500 leading-normal font-light">
                  Seus dados e relatos são mantidos em absoluto sigilo ético-psicanalítico profissional.
                </p>
              </div>
            </div>

          </div>

          {/* Form Interactive Capture Right Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-stone-200 p-8 sm:p-10 rounded-none shadow-xl relative overflow-hidden"
            >
              {/* Subtle top visual green band */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-esmeralda-950"></div>

              <h3 className="font-serif text-xl font-medium text-esmeralda-950 mb-1 tracking-wide text-center sm:text-left">
                Ficha de Entrada Prioritária
              </h3>
              <p className="font-serif italic text-xs text-stone-500 mb-8 text-center sm:text-left">
                Preencha os dados abaixo e inicie sua jornada de cura.
              </p>

              {/* Form implementation */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Nome input field */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="nome" className="font-sans text-[9px] uppercase tracking-wider text-stone-500 font-bold">
                    Seu Nome Completo *
                  </label>
                  <input
                    id="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData((prev) => ({ ...prev, nome: e.target.value }))}
                    placeholder="Ex: Layra Santos"
                    className="w-full bg-stone-50 border border-stone-200 hover:border-gold-elegant/40 focus:border-gold-elegant focus:bg-white text-stone-800 text-xs py-3.5 px-4 rounded-none outline-none transition-all duration-300 font-sans"
                  />
                </div>

                {/* Grid of Contact details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* WhatsApp field */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="whatsapp" className="font-sans text-[9px] uppercase tracking-wider text-stone-500 font-bold">
                      WhatsApp com DDD *
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={handleWhatsappChange}
                      placeholder="(16) 99152-1475"
                      className="w-full bg-stone-50 border border-stone-200 hover:border-gold-elegant/40 focus:border-gold-elegant focus:bg-white text-stone-800 text-xs py-3.5 px-4 rounded-none outline-none transition-all duration-300 font-sans"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="email" className="font-sans text-[9px] uppercase tracking-wider text-stone-500 font-bold">
                      E-mail Principal *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="Ex: seuemail@esmeralda.com"
                      className="w-full bg-stone-50 border border-stone-200 hover:border-gold-elegant/40 focus:border-gold-elegant focus:bg-white text-stone-800 text-xs py-3.5 px-4 rounded-none outline-none transition-all duration-300 font-sans"
                    />
                  </div>

                </div>

                {/* Qual area select option dropdown */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="area_transformacao" className="font-sans text-[9px] uppercase tracking-wider text-stone-500 font-bold">
                    Qual área da sua vida mais precisa de cura hoje? *
                  </label>
                  <select
                    id="area_transformacao"
                    required
                    value={formData.area_transformacao}
                    onChange={(e) => setFormData((prev) => ({ ...prev, area_transformacao: e.target.value as AreaTransformacao }))}
                    className="w-full bg-stone-50 border border-stone-200 hover:border-gold-elegant/40 focus:border-gold-elegant focus:bg-white text-stone-800 text-xs py-3.5 px-4 rounded-none outline-none transition-all duration-300 font-sans cursor-pointer"
                  >
                    <option value="" disabled className="text-stone-400">Selecione uma área...</option>
                    {areas.map((area) => (
                      <option key={area} value={area} className="text-stone-800 font-sans">{area}</option>
                    ))}
                  </select>
                </div>

                {/* Mensagem optional input textarea */}
                <div className="flex flex-col space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label htmlFor="mensagem" className="font-sans text-[9px] uppercase tracking-wider text-stone-500 font-bold">
                      Mensagem / Relato Adicional (Opcional)
                    </label>
                    <span className="text-[10px] text-stone-400 font-serif italic">Seguro & Confidencial</span>
                  </div>
                  <textarea
                    id="mensagem"
                    value={formData.mensagem}
                    onChange={(e) => setFormData((prev) => ({ ...prev, mensagem: e.target.value }))}
                    placeholder="Conte brevemente sobre o seu momento atual, se desejar..."
                    rows={4}
                    className="w-full bg-stone-50 border border-stone-200 hover:border-gold-elegant/40 focus:border-gold-elegant focus:bg-white text-stone-800 text-xs py-3.5 px-4 rounded-none outline-none transition-all duration-300 font-serif resize-none"
                  />
                </div>

                {/* Loading / Submit Trigger Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-esmeralda-800 hover:bg-esmeralda-900 text-stone-50 py-4.5 rounded-none font-sans text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-lg group transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-gold-bright" />
                      <span>Processando dados de registro...</span>
                    </>
                  ) : (
                    <>
                      <span>Quero Participar da Consultoria</span>
                      <Send className="w-3.5 h-3.5 text-gold-bright group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

              </form>

              {/* Status / Notice below submission form */}
              {!isSupabaseConfigured() && (
                <div className="mt-4 flex items-center gap-2 bg-yellow-50 border border-yellow-200 p-3 rounded-none text-yellow-800 text-[11px] leading-relaxed">
                  <AlertTriangle className="w-5 h-5 shrink-0 text-yellow-600" />
                  <span>
                    Chaves do Supabase não configuradas no `.env`. Os dados do lead serão salvos com segurança em seu <strong>localStorage</strong> local para testes.
                  </span>
                </div>
              )}

              {/* Submit result feedback popup modal overlays */}
              <AnimatePresence>
                {submitResult?.show && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-esmeralda-950/95 backdrop-blur-md z-30 flex flex-col items-center justify-center p-6 text-center text-white"
                  >
                    <motion.div
                      initial={{ scale: 0.9, y: 15 }}
                      animate={{ scale: 1, y: 0 }}
                      className="max-w-md space-y-6"
                    >
                      {submitResult.success ? (
                        <>
                          <div className="w-16 h-16 rounded-none bg-gold-elegant/10 border border-gold-bright flex items-center justify-center text-gold-bright mx-auto sparkle-animation">
                            <Sparkles className="w-8 h-8" />
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="font-serif text-xl sm:text-2xl font-light tracking-wider text-gold-elegant">
                              Inscrição Concluída!
                            </h4>
                            <p className="font-serif italic text-stone-200 text-sm sm:text-base px-2 font-light">
                              “Recebemos seus dados. Em breve entraremos em contato para iniciar sua jornada Esmeralda.”
                            </p>
                          </div>

                          <div className="pt-4 flex flex-col sm:flex-row gap-3">
                            <button
                              onClick={() => setSubmitResult(null)}
                              className="bg-white/10 hover:bg-white/20 text-white font-sans text-xs uppercase tracking-wider py-3.5 px-6 rounded-none transition-all cursor-pointer"
                            >
                              Voltar para a Página
                            </button>
                            <a
                              href="https://wa.me/5516991521475"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gold-elegant hover:bg-gold-bright text-esmeralda-950 font-sans text-xs font-semibold uppercase tracking-wider py-3.5 px-6 rounded-none transition-all shadow-md flex items-center justify-center gap-2"
                            >
                              <MessageCircle className="w-4 h-4 fill-current text-esmeralda-950" />
                              <span>Iniciar no WhatsApp</span>
                            </a>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-16 h-16 rounded-none bg-red-500/10 border border-red-500 flex items-center justify-center text-red-500 mx-auto">
                            <AlertTriangle className="w-8 h-8" />
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="font-serif text-xl font-medium text-red-400">
                              Ocorreu um Erro
                            </h4>
                            <p className="font-sans text-stone-300 text-xs px-2 font-light">
                              {submitResult.error || 'Não foi possível completar o envio.'}
                            </p>
                          </div>

                          <button
                             onClick={() => setSubmitResult(null)}
                             className="bg-white text-stone-800 font-sans text-xs uppercase tracking-wider py-3.5 px-6 rounded-none transition-all font-semibold cursor-pointer"
                          >
                            Tentar Novamente
                          </button>
                        </>
                      )}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
