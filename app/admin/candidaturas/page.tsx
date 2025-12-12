'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getAllCandidaturas, updateCandidaturaStatus, deleteCandidatura } from '../../lib/services/vagasService';
import { Candidatura } from '../../types/candidatura';

export default function AdminCandidaturasPage() {
  const router = useRouter();
  const [candidaturas, setCandidaturas] = useState<Candidatura[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>('todos');
  const [selectedCandidatura, setSelectedCandidatura] = useState<Candidatura | null>(null);

  useEffect(() => {
    loadCandidaturas();
  }, []);

  const loadCandidaturas = async () => {
    try {
      setLoading(true);
      const candidaturasData = await getAllCandidaturas();
      setCandidaturas(candidaturasData);
    } catch (error) {
      console.error('Erro ao carregar candidaturas:', error);
      alert('Erro ao carregar candidaturas. Verifique a configuração do Firebase.');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, status: Candidatura['status']) => {
    try {
      await updateCandidaturaStatus(id, status);
      await loadCandidaturas();
      alert('Status atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      alert('Erro ao atualizar status.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta candidatura?')) {
      return;
    }

    try {
      await deleteCandidatura(id);
      await loadCandidaturas();
      alert('Candidatura excluída com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir candidatura:', error);
      alert('Erro ao excluir candidatura.');
    }
  };

  const getStatusBadge = (status?: string) => {
    const styles = {
      pendente: 'bg-yellow-100 text-yellow-800',
      em_analise: 'bg-blue-100 text-blue-800',
      aprovado: 'bg-green-100 text-green-800',
      rejeitado: 'bg-red-100 text-red-800'
    };
    return styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-800';
  };

  const getStatusLabel = (status?: string) => {
    const labels = {
      pendente: 'Pendente',
      em_analise: 'Em Análise',
      aprovado: 'Aprovado',
      rejeitado: 'Rejeitado'
    };
    return labels[status as keyof typeof labels] || 'Pendente';
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const filteredCandidaturas = filterStatus === 'todos'
    ? candidaturas
    : candidaturas.filter(c => c.status === filterStatus);

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Candidaturas
              </h1>
              <p className="text-gray-600">
                Visualize e gerencie candidaturas recebidas
              </p>
            </div>
            <button
              onClick={() => router.push('/admin')}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Voltar
            </button>
          </div>

          {/* Filter */}
          <div className="mb-6">
            <label htmlFor="filter" className="block text-sm font-medium text-gray-700 mb-2">
              Filtrar por status:
            </label>
            <select
              id="filter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="todos">Todos</option>
              <option value="pendente">Pendente</option>
              <option value="em_analise">Em Análise</option>
              <option value="aprovado">Aprovado</option>
              <option value="rejeitado">Rejeitado</option>
            </select>
          </div>

          {/* Loading */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-4 text-gray-600">Carregando candidaturas...</p>
            </div>
          )}

          {/* Candidaturas List */}
          {!loading && (
            <>
              {filteredCandidaturas.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {filteredCandidaturas.map((candidatura) => (
                    <div
                      key={candidatura.id}
                      className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-bold text-gray-900">
                              {candidatura.nome}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(candidatura.status)}`}>
                              {getStatusLabel(candidatura.status)}
                            </span>
                          </div>
                          
                          <div className="space-y-2 text-gray-600 mb-4">
                            <div className="flex items-center">
                              <svg className="h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <span>{candidatura.email}</span>
                            </div>
                            <div className="flex items-center">
                              <svg className="h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <span>{candidatura.telefone}</span>
                            </div>
                            <div className="flex items-center">
                              <svg className="h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="font-medium">{candidatura.vagaTitulo}</span>
                            </div>
                            <div className="flex items-center">
                              <svg className="h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>{formatDate(candidatura.dataAplicacao)}</span>
                            </div>
                          </div>

                          {candidatura.curriculoUrl && (
                            <div className="mb-4">
                              <a
                                href={candidatura.curriculoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                              >
                                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Ver currículo ({candidatura.curriculoNome})
                              </a>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col gap-2 ml-4">
                          <select
                            value={candidatura.status || 'pendente'}
                            onChange={(e) => handleStatusChange(candidatura.id, e.target.value as Candidatura['status'])}
                            className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="pendente">Pendente</option>
                            <option value="em_analise">Em Análise</option>
                            <option value="aprovado">Aprovado</option>
                            <option value="rejeitado">Rejeitado</option>
                          </select>
                          <button
                            onClick={() => handleDelete(candidatura.id)}
                            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors"
                          >
                            Excluir
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-xl shadow-md">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhuma candidatura encontrada</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {filterStatus === 'todos' 
                      ? 'Ainda não há candidaturas cadastradas.'
                      : `Não há candidaturas com status "${getStatusLabel(filterStatus)}".`}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

