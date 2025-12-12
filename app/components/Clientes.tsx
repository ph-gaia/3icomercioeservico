import Image from 'next/image';

export default function Clientes() {
  const clientes = [
    {
      name: 'CDP Companhia Docas do Pará',
      logo: '/img/clientes/cdp.png',
    },
    {
      name: 'Fundação Hemopa',
      logo: '/img/clientes/Hemopa.png',
    },
    {
      name: 'Instituto Federal do Pará',
      logo: '/img/clientes/Instituto_Federal_do_Pará.png',
    },
    {
      name: 'Prefeitura de São Luís',
      logo: '/img/clientes/Prefeitura de São Luís.jpg',
    },
    {
      name: 'Prefeitura de Belém',
      logo: '/img/clientes/prefeitura-de-belem.png',
    },
    {
      name: 'SESMA - Prefeitura de Belém',
      logo: '/img/clientes/sesma.png',
    },
    {
      name: 'TRT 8ª Região',
      logo: '/img/clientes/trt-8-regiao.jpg',
    },
    {
      name: 'UFPA',
      logo: '/img/clientes/UFPA.jpg',
    },
  ];

  return (
    <section id="clientes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Nossos Clientes
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Empresas e Instituições que Confiam em Nossos Serviços
          </h2>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {clientes.map((cliente, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 md:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-primary/30 hover:shadow-md"
            >
              <div className="relative w-full h-20 md:h-24 flex items-center justify-center">
                <Image
                  src={cliente.logo}
                  alt={`Logo ${cliente.name}`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
