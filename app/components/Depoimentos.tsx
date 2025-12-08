export default function Depoimentos() {
  const testimonials = [
    {
      "name": "Gabriel Carneiro",
      "cargo": "Engenheiro Mecânico",
      "rating": 5,
      "avatar": "GC",
      "content": "Trabalhar na 3i é fazer parte de uma equipe que valoriza a evolução técnica e a segurança em cada projeto. Aqui, temos liberdade para inovar e o suporte necessário para entregar sempre o melhor resultado."
    },
    {
      "name": "Daniele Santos",
      "cargo": "Gerente Geral",
      "rating": 5,
      "avatar": "DS",
      "content": "Na 3i, prezamos pela excelência e pelo desenvolvimento humano. Nosso ambiente é colaborativo, transparente e voltado para o crescimento contínuo, tanto dos processos quanto das pessoas."
    },
    {
      "name": "Jorge Junior",
      "cargo": "Técnico Hospitalar",
      "rating": 5,
      "avatar": "JJ",
      "content": "A 3i me proporcionou capacitação, reconhecimento e desafios que impulsionam meu crescimento profissional. É gratificante fazer parte de uma empresa que preza pela qualidade e pela responsabilidade em cada atendimento."
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
            O que nossos colaboradores dizem
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos colaboradores é nossa maior recompensa.
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
                &quot;{testimonial.content}&quot;
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
                    {testimonial.cargo}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Junte-se a nossa equipe
            </h3>
            <p className="text-primary-100 mb-6">
            Envie seu currículo e faça parte da nossa equipe de especialistas!
            </p>
            <a
              href="#contato"
              className="inline-flex items-center bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Trabalhe Conosco
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