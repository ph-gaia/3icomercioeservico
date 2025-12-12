'use client';

import { useState, useEffect } from 'react';
import { createVaga, updateVaga } from '../../lib/services/vagasService';
import { Vaga, Modalidade, TipoContratacao } from '../../types/vaga';

interface VagaFormProps {
  vaga?: Vaga | null;
  onClose: () => void;
  onSave: () => void;
}

export default function VagaForm({ vaga, onClose, onSave }: VagaFormProps) {
  const [formData, setFormData] = useState({
    titulo: '',
    local: '',
    modalidade: 'remoto' as Modalidade,
    tipoContratacao: 'CLT' as TipoContratacao,
    faixaSalarial: '',
    descricao: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (vaga) {
      setFormData({
        titulo: vaga.titulo,
        local: vaga.local,
        modalidade: vaga.modalidade,
        tipoContratacao: vaga.tipoContratacao,
        faixaSalarial: vaga.faixaSalarial,
        descricao: vaga.descricao
      });
    }
  }, [vaga]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (vaga) {
        await updateVaga(vaga.id, formData);
        alert('Vaga atualizada com sucesso!');
      } else {
        await createVaga(formData);
        alert('Vaga criada com sucesso!');
      }
      onSave();
    } catch (error) {
      console.error('Erro ao salvar vaga:', error);
      alert('Erro ao salvar vaga. Verifique a configuração do Firebase.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {vaga ? 'Editar Vaga' : 'Nova Vaga'}
        </h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-500"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-2">
            Título da Vaga *
          </label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="Ex: Desenvolvedor Full Stack"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="local" className="block text-sm font-medium text-gray-700 mb-2">
              Local *
            </label>
            <input
              type="text"
              id="local"
              name="local"
              value={formData.local}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="Ex: Belém/PA"
            />
          </div>

          <div>
            <label htmlFor="faixaSalarial" className="block text-sm font-medium text-gray-700 mb-2">
              Faixa Salarial *
            </label>
            <input
              type="text"
              id="faixaSalarial"
              name="faixaSalarial"
              value={formData.faixaSalarial}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="Ex: R$ 5.000 - R$ 8.000"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="modalidade" className="block text-sm font-medium text-gray-700 mb-2">
              Modalidade *
            </label>
            <select
              id="modalidade"
              name="modalidade"
              value={formData.modalidade}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            >
              <option value="presencial">Presencial</option>
              <option value="remoto">Remoto</option>
              <option value="hibrido">Híbrido</option>
            </select>
          </div>

          <div>
            <label htmlFor="tipoContratacao" className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Contratação *
            </label>
            <select
              id="tipoContratacao"
              name="tipoContratacao"
              value={formData.tipoContratacao}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            >
              <option value="CLT">CLT</option>
              <option value="PJ">PJ</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-2">
            Descrição *
          </label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            required
            rows={10}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="Descreva os requisitos, responsabilidades e diferenciais da vaga..."
          />
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
            {isSubmitting ? 'Salvando...' : vaga ? 'Atualizar' : 'Criar Vaga'}
          </button>
        </div>
      </form>
    </div>
  );
}

