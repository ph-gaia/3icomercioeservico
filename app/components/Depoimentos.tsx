export default function Depoimentos() {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Supermercado Silva",
      content: "A 3i Comércio e Serviço instalou todo o sistema de refrigeração do nosso supermercado. O trabalho foi impecável e o atendimento técnico é excepcional. Recomendo fortemente!",
      rating: 5,
      avatar: "CS"
    },
    {
      name: "Maria Santos",
      company: "Restaurante Sabor & Arte",
      content: "Excelente serviço de manutenção preventiva. Eles sempre nos avisam quando é necessário fazer algum ajuste e o equipamento nunca para de funcionar. Profissionais muito competentes.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "João Oliveira",
      company: "Indústria Alimentícia Oliveira",
      content: "Projetaram e instalaram nosso sistema de câmaras frigoríficas. O projeto foi entregue no prazo, dentro do orçamento e com qualidade superior. Estamos muito satisfeitos.",
      rating: 5,
      avatar: "JO"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Depoimentos
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que nossos clientes dizem
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. 
            Conheça alguns depoimentos de quem já confiou em nossos serviços.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                    {testimonial.avatar}
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">Clientes Satisfeitos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-gray-600">Avaliação Média</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Projetos Concluídos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Suporte Disponível</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Junte-se aos nossos clientes satisfeitos
            </h3>
            <p className="text-primary-100 mb-6">
              Entre em contato conosco e descubra como podemos ajudar seu negócio.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Fale Conosco
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