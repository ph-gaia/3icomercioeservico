'use client';

import { useState, useRef } from 'react';
import { Vaga } from '../types/vaga';

interface VagaDialogProps {
  vaga: Vaga | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VagaDialog({ vaga, isOpen, onClose }: VagaDialogProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    curriculo: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen || !vaga) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        curriculo: file
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Aqui você pode implementar o envio para a API
    // Por enquanto, vamos simular o envio
    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Aqui você faria a chamada para a API que enviaria o email
      // Exemplo:
      // await fetch('/api/candidaturas', {
      //   method: 'POST',
      //   body: formData
      // });

      console.log('Candidatura enviada:', {
        vaga: vaga.titulo,
        ...formData
      });

      alert('Candidatura enviada com sucesso! Entraremos em contato em breve.');
      
      // Reset form
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        curriculo: null
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      onClose();
    } catch (error) {
      console.error('Erro ao enviar candidatura:', error);
      alert('Erro ao enviar candidatura. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
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
    <>
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-gray-500 bg-opacity-75 z-[100]"
        onClick={onClose}
      />

      {/* Dialog container */}
      <div className="fixed inset-0 z-[100] overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          {/* Dialog panel */}
          <div 
            className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {vaga.titulo}
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getModalidadeBadge(vaga.modalidade)}`}>
                    {vaga.modalidade.charAt(0).toUpperCase() + vaga.modalidade.slice(1)}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getContratacaoBadge(vaga.tipoContratacao)}`}>
                    {vaga.tipoContratacao}
                  </span>
                </div>
                <div className="space-y-2 text-gray-600">
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
              </div>
              <button
                onClick={onClose}
                className="ml-4 text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Description */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Sobre a vaga</h3>
              <div className="text-gray-700 whitespace-pre-line">
                {vaga.descricao.split('\n').map((line, index) => {
                  // Check if line is bold (starts with **)
                  if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
                    const text = line.replace(/\*\*/g, '');
                    return (
                      <p key={index} className="font-semibold mt-2 mb-1">
                        {text}
                      </p>
                    );
                  }
                  // Regular line
                  if (line.trim() === '') {
                    return <br key={index} />;
                  }
                  return (
                    <p key={index} className="mb-2">
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Candidatar-se para esta vaga
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="(91) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="curriculo" className="block text-sm font-medium text-gray-700 mb-2">
                    Anexar currículo *
                  </label>
                  <div className="flex items-center">
                    <input
                      ref={fileInputRef}
                      type="file"
                      id="curriculo"
                      name="curriculo"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark file:cursor-pointer"
                    />
                  </div>
                  {formData.curriculo && (
                    <p className="mt-2 text-sm text-gray-600">
                      Arquivo selecionado: {formData.curriculo.name}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    Formatos aceitos: PDF, DOC, DOCX (máx. 5MB)
                  </p>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    disabled={isSubmitting}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Candidatura'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
