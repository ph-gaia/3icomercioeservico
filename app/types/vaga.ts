export type Modalidade = 'presencial' | 'remoto' | 'hibrido';
export type TipoContratacao = 'PJ' | 'CLT';

export interface Vaga {
  id: string;
  titulo: string;
  local: string;
  modalidade: Modalidade;
  tipoContratacao: TipoContratacao;
  faixaSalarial: string;
  descricao: string;
}
