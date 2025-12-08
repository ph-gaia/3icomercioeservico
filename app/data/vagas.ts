import { Vaga } from '../types/vaga';

// Array de vagas - No futuro, essas vagas serão buscadas de uma API
export const vagas: Vaga[] = [
  {
    id: '1',
    titulo: 'Desenvolvedor Full Stack',
    local: 'Belém/PA',
    modalidade: 'remoto',
    tipoContratacao: 'CLT',
    faixaSalarial: 'R$ 5.000 - R$ 8.000',
    descricao: `
      Estamos buscando um Desenvolvedor Full Stack experiente para integrar nossa equipe de tecnologia.
      
      **Requisitos:**
      - Experiência com React, Next.js e TypeScript
      - Conhecimento em Node.js e bancos de dados (PostgreSQL, MongoDB)
      - Familiaridade com APIs REST e GraphQL
      - Experiência com Git e metodologias ágeis
      - Inglês intermediário
      
      **Responsabilidades:**
      - Desenvolver e manter aplicações web modernas
      - Colaborar com equipe multidisciplinar
      - Participar de code reviews e melhorias contínuas
      - Implementar testes automatizados
      
      **Diferenciais:**
      - Experiência com Docker e CI/CD
      - Conhecimento em cloud (AWS, Azure)
      - Experiência com microserviços
    `
  },
  {
    id: '2',
    titulo: 'Engenheiro de Software Sênior',
    local: 'Belém/PA',
    modalidade: 'hibrido',
    tipoContratacao: 'CLT',
    faixaSalarial: 'R$ 10.000 - R$ 15.000',
    descricao: `
      Oportunidade para Engenheiro de Software Sênior com foco em arquitetura de sistemas.
      
      **Requisitos:**
      - 5+ anos de experiência em desenvolvimento de software
      - Experiência com arquitetura de sistemas distribuídos
      - Conhecimento profundo em design patterns
      - Experiência com liderança técnica
      - Graduação em Engenharia, Ciência da Computação ou áreas afins
      
      **Responsabilidades:**
      - Liderar projetos técnicos complexos
      - Definir arquiteturas e padrões de código
      - Mentorar desenvolvedores júnior e pleno
      - Tomar decisões técnicas estratégicas
      
      **Diferenciais:**
      - Certificações em cloud
      - Experiência com Kubernetes
      - Publicações técnicas ou contribuições open source
    `
  },
  {
    id: '3',
    titulo: 'Analista de Sistemas',
    local: 'Belém/PA',
    modalidade: 'presencial',
    tipoContratacao: 'CLT',
    faixaSalarial: 'R$ 4.000 - R$ 6.000',
    descricao: `
      Procuramos Analista de Sistemas para análise, desenvolvimento e manutenção de sistemas.
      
      **Requisitos:**
      - Conhecimento em análise de requisitos
      - Experiência com modelagem de dados
      - Conhecimento em SQL e bancos de dados relacionais
      - Habilidades de comunicação e documentação
      - Graduação em Sistemas de Informação ou áreas afins
      
      **Responsabilidades:**
      - Analisar necessidades do negócio
      - Elaborar documentação técnica e funcional
      - Participar do ciclo de desenvolvimento
      - Realizar testes e validações
      
      **Diferenciais:**
      - Conhecimento em metodologias ágeis (Scrum, Kanban)
      - Experiência com ferramentas de gestão de projetos
      - Certificações em análise de sistemas
    `
  },
  {
    id: '4',
    titulo: 'Designer UX/UI',
    local: 'Belém/PA',
    modalidade: 'remoto',
    tipoContratacao: 'PJ',
    faixaSalarial: 'R$ 3.500 - R$ 5.500',
    descricao: `
      Buscamos Designer UX/UI criativo para criar experiências digitais excepcionais.
      
      **Requisitos:**
      - Portfólio com projetos de design de interfaces
      - Conhecimento em Figma, Adobe XD ou similar
      - Compreensão de princípios de UX/UI
      - Experiência com design responsivo
      - Conhecimento básico em HTML/CSS
      
      **Responsabilidades:**
      - Criar interfaces intuitivas e atraentes
      - Realizar pesquisas de usuário
      - Desenvolver protótipos e wireframes
      - Colaborar com desenvolvedores
      
      **Diferenciais:**
      - Experiência com animações e microinterações
      - Conhecimento em acessibilidade (WCAG)
      - Experiência com design system
    `
  },
  {
    id: '5',
    titulo: 'DevOps Engineer',
    local: 'Belém/PA',
    modalidade: 'hibrido',
    tipoContratacao: 'CLT',
    faixaSalarial: 'R$ 8.000 - R$ 12.000',
    descricao: `
      Oportunidade para DevOps Engineer para gerenciar infraestrutura e pipelines de CI/CD.
      
      **Requisitos:**
      - Experiência com Docker e containerização
      - Conhecimento em Kubernetes ou orquestração de containers
      - Experiência com CI/CD (GitHub Actions, GitLab CI, Jenkins)
      - Conhecimento em cloud (AWS, Azure ou GCP)
      - Experiência com IaC (Terraform, CloudFormation)
      
      **Responsabilidades:**
      - Gerenciar infraestrutura cloud
      - Automatizar processos de deploy
      - Monitorar e otimizar performance
      - Garantir segurança e compliance
      
      **Diferenciais:**
      - Certificações em cloud
      - Experiência com observabilidade (Prometheus, Grafana)
      - Conhecimento em segurança (DevSecOps)
    `
  }
];
