export interface Candidatura {
  id: string;
  vagaId: string;
  vagaTitulo: string;
  nome: string;
  email: string;
  telefone: string;
  curriculoUrl: string;
  curriculoNome: string;
  dataAplicacao: Date;
  status?: 'pendente' | 'em_analise' | 'aprovado' | 'rejeitado';
}

