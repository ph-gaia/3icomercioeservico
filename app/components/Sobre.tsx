export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Sobre Nós
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mais de uma década de excelência em refrigeração
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A 3i Comércio e Serviço é uma empresa especializada em sistemas de refrigeração 
              comercial e industrial, com mais de 10 anos de experiência no mercado. 
              Nossa missão é proporcionar soluções eficientes e sustentáveis para nossos clientes.
            </p>

            {/* Features */}
            <div className="space-y-6">
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
                  <p className="text-gray-600">Utilizamos equipamentos modernos e técnicas avançadas de instalação.</p>
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
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-4xl font-bold mb-4">10+</div>
                <div className="text-xl mb-6">Anos de Experiência</div>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between">
                    <span>Instalação</span>
                    <span className="font-semibold">95%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Manutenção</span>
                    <span className="font-semibold">98%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Projetos</span>
                    <span className="font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Projetos Concluídos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-gray-600">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600">Técnicos Certificados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Suporte Disponível</div>
          </div>
        </div>
      </div>
    </section>
  );
} 