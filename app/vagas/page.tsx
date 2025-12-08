'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VagaCard from '../components/VagaCard';
import VagaDialog from '../components/VagaDialog';
import { vagas } from '../data/vagas';
import { Vaga } from '../types/vaga';

export default function VagasPage() {
  const [selectedVaga, setSelectedVaga] = useState<Vaga | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleVagaClick = (vaga: Vaga) => {
    setSelectedVaga(vaga);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedVaga(null);
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Oportunidades
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vagas em Aberto
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              Encontre a oportunidade perfeita para sua carreira
            </p>

            <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full">
              <svg className="h-6 w-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-lg font-semibold text-gray-900">
                {vagas.length} {vagas.length === 1 ? 'vaga disponível' : 'vagas disponíveis'}
              </span>
            </div>
          </div>

          {/* Vagas List */}
          {vagas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vagas.map((vaga) => (
                <VagaCard
                  key={vaga.id}
                  vaga={vaga}
                  onClick={() => handleVagaClick(vaga)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhuma vaga disponível</h3>
              <p className="mt-1 text-sm text-gray-500">Não há vagas abertas no momento.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      {/* Dialog */}
      <VagaDialog
        vaga={selectedVaga}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </main>
  );
}
