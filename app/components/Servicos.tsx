import ServiceCard from './ServiceCard';

export default function Servicos() {
  const services = [
    {
      title: "Instalação de Sistemas de Ar-Condicionado",
      description: "Instalação profissional de sistemas de ar-condicionado residencial, comercial e industrial com garantia de qualidade.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      features: [
        "Sistemas split e multi-split",
        "Ar-condicionado central",
        "Sistemas VRF/VRV",
        "Instalação elétrica completa",
        "Testes de funcionamento"
      ]
    },
    {
      title: "Manutenção Preventiva e Corretiva",
      description: "Serviços de manutenção preventiva para evitar falhas e corretiva para resolver problemas rapidamente.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: [
        "Limpeza de filtros e evaporadores",
        "Verificação de gás refrigerante",
        "Inspeção de componentes elétricos",
        "Lubrificação de motores",
        "Relatórios técnicos detalhados"
      ]
    },
    {
      title: "Projetos de Refrigeração Comercial e Industrial",
      description: "Desenvolvimento de projetos completos de refrigeração para câmaras frias, freezers e sistemas industriais.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      features: [
        "Câmaras frigoríficas",
        "Sistemas de congelamento",
        "Refrigeração para supermercados",
        "Sistemas de resfriamento industrial",
        "Projetos personalizados"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Nossos Serviços
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluções completas em refrigeração
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos serviços especializados em instalação, manutenção e projetos 
            de refrigeração para atender todas as suas necessidades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Precisa de um orçamento personalizado?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco e receba uma proposta sob medida para seu projeto.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Solicitar Orçamento
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 