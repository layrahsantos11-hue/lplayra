/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Lead {
  id?: string;
  nome: string;
  whatsapp: string;
  email: string;
  area_transformacao: AreaTransformacao;
  mensagem?: string;
  created_at?: string;
}

export type AreaTransformacao =
  | 'Identidade'
  | 'Relacionamentos'
  | 'Prosperidade'
  | 'Espiritualidade'
  | 'Autoestima'
  | 'Limites'
  | 'Carreira';

export interface Pilar {
  id: number;
  titulo: string;
  descricao: string;
  iconName: string;
}

export interface Depoimento {
  id: number;
  nome: string;
  idade?: string;
  profissao?: string;
  texto: string;
  antes: string;
  depois: string;
  iniciais: string;
}
