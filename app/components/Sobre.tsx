import Link from 'next/link';

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Sobre Nós
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mais de uma década de excelência em Engenharia, Manutenção e Facilities
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A 3i Comércio e Serviços atua há mais de 10 anos no segmento de facilities e manutenção, oferecendo soluções completas em engenharia mecânica e elétrica, refrigeração, equipamentos eletromecânicos e manutenção predial.
              Fundada para atender à crescente demanda de órgãos públicos e empresas privadas, nossa missão é entregar serviços de alta qualidade com foco na segurança, eficiência e na melhor experiência para o cliente.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Atendimento Técnico Especializado</h3>
                  <p className="text-gray-600">Equipe qualificada e certificada para atender todas as suas necessidades.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Tecnologia de Ponta</h3>
                  <p className="text-gray-600">Utilizamos equipamentos modernos e técnicas avançadas.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Suporte 24/7</h3>
                  <p className="text-gray-600">Disponibilidade total para emergências e manutenções preventivas.</p>
                </div>
              </div>
            </div>

            {/* Saiba Mais Button */}
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

          {/* Visual Element */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-center h-24 w-24 bg-white/20 rounded-full mx-auto">
                    <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">10+ Anos</h3>
                    <p className="text-white/90">de experiência no mercado</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">300+</div>
                      <div className="text-sm text-white/80">Projetos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">100+</div>
                      <div className="text-sm text-white/80">Clientes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 