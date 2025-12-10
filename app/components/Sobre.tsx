import Link from 'next/link';

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content - Full Width */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Sobre Nós
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Mais de uma década de excelência em Engenharia, Manutenção e Facilities
          </h2>
          
          <div className="text-lg text-gray-600 justify-center leading-relaxed space-y-4 mb-12">
            <p>
              A 3i Comércio e Serviços atua há mais de 10 anos no segmento de facilities e manutenção.
              Fundada para atender à crescente demanda de órgãos públicos e empresas privadas, nossa missão é entregar serviços de alta qualidade com foco na segurança, eficiência e na melhor experiência para o cliente.
            </p>
          </div>

          {/* Saiba Mais Button */}
          <div className="flex justify-center mb-16">
            <Link
              href="/sobre"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Saiba mais
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-gray-600">Projetos Concluídos</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-gray-600">Clientes Satisfeitos</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="text-3xl font-bold text-primary mb-2">60+</div>
            <div className="text-gray-600">Licitações Atendidas</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="text-3xl font-bold text-primary mb-2">10 anos de</div>
            <div className="text-gray-600">Presença em todo o Brasil</div>
          </div>
        </div>
      </div>
    </section>
  );
} 