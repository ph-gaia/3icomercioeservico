'use client';

import { Vaga } from '../types/vaga';

interface VagaCardProps {
  vaga: Vaga;
  onClick: () => void;
}

export default function VagaCard({ vaga, onClick }: VagaCardProps) {
  const getModalidadeBadge = (modalidade: string) => {
    const styles = {
      presencial: 'bg-blue-100 text-blue-800',
      remoto: 'bg-green-100 text-green-800',
      hibrido: 'bg-purple-100 text-purple-800'
    };
    return styles[modalidade as keyof typeof styles] || 'bg-gray-100 text-gray-800';
  };

  const getContratacaoBadge = (tipo: string) => {
    return tipo === 'CLT' 
      ? 'bg-orange-100 text-orange-800' 
      : 'bg-indigo-100 text-indigo-800';
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-primary"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900 flex-1">
          {vaga.titulo}
        </h3>
        <div className="flex gap-2 ml-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getModalidadeBadge(vaga.modalidade)}`}>
            {vaga.modalidade.charAt(0).toUpperCase() + vaga.modalidade.slice(1)}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getContratacaoBadge(vaga.tipoContratacao)}`}>
            {vaga.tipoContratacao}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <svg className="h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-medium">{vaga.local}</span>
        </div>

        <div className="flex items-center text-gray-600">
          <svg className="h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium">{vaga.faixaSalarial}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <button className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center">
          Ver detalhes
          <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
