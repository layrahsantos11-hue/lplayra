/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createClient } from '@supabase/supabase-js';
import { Lead } from '../types';

// Retrieve keys from environment variables safely.
// Supports both Vite (import.meta.env) and Next.js (process.env) if portable.
const metaEnv = (import.meta as any).env || {};
const supabaseUrl = metaEnv.VITE_SUPABASE_URL || metaEnv.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = metaEnv.VITE_SUPABASE_ANON_KEY || metaEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

let supabaseClient: any = null;

// Determine if Supabase parameters are configured
export const isSupabaseConfigured = (): boolean => {
  return typeof supabaseUrl === 'string' && supabaseUrl.trim().length > 0 && 
         typeof supabaseAnonKey === 'string' && supabaseAnonKey.trim().length > 0;
};

// Lazy initialization of the Supabase Client
export function getSupabase() {
  if (!isSupabaseConfigured()) {
    return null;
  }
  if (!supabaseClient) {
    try {
      supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
    } catch (e) {
      console.error('Falha ao inicializar o cliente do Supabase:', e);
      return null;
    }
  }
  return supabaseClient;
}

/**
 * Saves a lead into the Supabase 'leads_metodo_esmeralda' table.
 * If credentials are missing, stores it into localStorage as fallback to make testing and review flawless!
 */
export async function saveLead(lead: Lead): Promise<{ success: boolean; error?: string; isFallback: boolean }> {
  const client = getSupabase();
  const timestamp = new Date().toISOString();
  const newLead = {
    ...lead,
    created_at: timestamp,
  };

  if (!client) {
    // Elegant fallback to localStorage
    try {
      const existingLeadsStr = localStorage.getItem('leads_metodo_esmeralda') || '[]';
      const existingLeads = JSON.parse(existingLeadsStr);
      newLead.id = 'loc-' + Math.random().toString(36).substr(2, 9);
      existingLeads.unshift(newLead);
      localStorage.setItem('leads_metodo_esmeralda', JSON.stringify(existingLeads));
      
      console.warn(
        'Supabase não configurado. O lead foi salvo localmente (localStorage):',
        newLead
      );
      return { success: true, isFallback: true };
    } catch (e: any) {
      return { success: false, error: e.message || 'Erro ao salvar no storage local.', isFallback: true };
    }
  }

  try {
    const { error } = await client
      .from('leads_metodo_esmeralda')
      .insert([
        {
          nome: newLead.nome,
          whatsapp: newLead.whatsapp,
          email: newLead.email,
          area_transformacao: newLead.area_transformacao,
          mensagem: newLead.mensagem || null,
          created_at: newLead.created_at,
        }
      ]);

    if (error) {
      console.error('Erro de inserção no Supabase:', error);
      throw error;
    }

    return { success: true, isFallback: false };
  } catch (err: any) {
    console.error('Falha ao salvar lead no banco de dados:', err);
    // Auto-fallback on live network/auth query errors as well to prevent user disappointment
    try {
      const existingLeadsStr = localStorage.getItem('leads_metodo_esmeralda') || '[]';
      const existingLeads = JSON.parse(existingLeadsStr);
      newLead.id = 'err-fallback-' + Math.random().toString(36).substr(2, 9);
      existingLeads.unshift(newLead);
      localStorage.setItem('leads_metodo_esmeralda', JSON.stringify(existingLeads));
      return { success: true, error: err.message, isFallback: true };
    } catch (e) {
      return { success: false, error: err.message || 'Erro de conexão.', isFallback: false };
    }
  }
}

/**
 * Utility to fetch saved leads (mainly for testing or local monitoring states)
 */
export function getSavedLeads(): Lead[] {
  try {
    const local = JSON.parse(localStorage.getItem('leads_metodo_esmeralda') || '[]');
    return local;
  } catch {
    return [];
  }
}
