'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getAllVagas, deleteVaga } from '../../lib/services/vagasService';
import { Vaga, Modalidade, TipoContratacao } from '../../types/vaga';
import VagaForm from '../../components/admin/VagaForm';

export default function AdminVagasPage() {
  const router = useRouter();
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingVaga, setEditingVaga] = useState<Vaga | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    loadVagas();
  }, []);

  const loadVagas = async () => {
    try {
      setLoading(true);
      const vagasData = await getAllVagas();
      setVagas(vagasData);
    } catch (error) {
      console.error('Erro ao carregar vagas:', error);
      alert('Erro ao carregar vagas. Verifique a configuração do Firebase.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (vaga: Vaga) => {
    setEditingVaga(vaga);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta vaga?')) {
      return;
    }

    try {
      setDeletingId(id);
      await deleteVaga(id);
      await loadVagas();
      alert('Vaga excluída com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir vaga:', error);
      alert('Erro ao excluir vaga.');
    } finally {
      setDeletingId(null);
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingVaga(null);
    loadVagas();
  };

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
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Gerenciar Vagas
              </h1>
              <p className="text-gray-600">
                Crie, edite e exclua vagas de emprego
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => router.push('/admin')}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Voltar
              </button>
              <button
                onClick={() => {
                  setEditingVaga(null);
                  setShowForm(true);
                }}
                className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-colors"
              >
                + Nova Vaga
              </button>
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-4 text-gray-600">Carregando vagas...</p>
            </div>
          )}

          {/* Vagas List */}
          {!loading && !showForm && (
            <>
              {vagas.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {vagas.map((vaga) => (
                    <div
                      key={vaga.id}
                      className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-bold text-gray-900">
                              {vaga.titulo}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getModalidadeBadge(vaga.modalidade)}`}>
                              {vaga.modalidade.charAt(0).toUpperCase() + vaga.modalidade.slice(1)}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getContratacaoBadge(vaga.tipoContratacao)}`}>
                              {vaga.tipoContratacao}
                            </span>
                          </div>
                          <div className="space-y-2 text-gray-600 mb-4">
                            <div className="flex items-center">
                              <svg className="h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span>{vaga.local}</span>
                            </div>
                            <div className="flex items-center">
                              <svg className="h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{vaga.faixaSalarial}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {vaga.descricao.substring(0, 150)}...
                          </p>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => handleEdit(vaga)}
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => handleDelete(vaga.id)}
                            disabled={deletingId === vaga.id}
                            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {deletingId === vaga.id ? 'Excluindo...' : 'Excluir'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-xl shadow-md">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhuma vaga cadastrada</h3>
                  <p className="mt-1 text-sm text-gray-500">Comece criando sua primeira vaga.</p>
                </div>
              )}
            </>
          )}

          {/* Form */}
          {showForm && (
            <VagaForm
              vaga={editingVaga}
              onClose={handleFormClose}
              onSave={handleFormClose}
            />
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

