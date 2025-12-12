## ✅ Landing Page

### 🎨 Design e Estrutura
- Layout moderno e profissional com cores inspiradas em tecnologia (tons de azul, branco e cinza)
- Design responsivo que funciona perfeitamente em desktop, tablet e mobile
- Tipografia moderna usando a fonte Inter do Google Fonts
- Uso inteligente de espaços em branco para melhor legibilidade
### 📱 Componentes Implementados
#### 1. Header (Header.tsx)
- Logo da empresa
- Navegação responsiva com menu mobile
- Botão de CTA "Solicitar Orçamento"

#### 2. Hero (Hero.tsx)
- Título chamativo com gradiente
- Descrição dos serviços
- Botões de chamada para ação
- Estatísticas da empresa
- Indicador de scroll animado

#### 3. Sobre (Sobre.tsx)
- Destaque da experiência (10+ anos)
- Missão e diferenciais da empresa
- Cards com recursos principais
- Gráficos de performance
- Estatísticas detalhadas

#### 4. Serviços (Servicos.tsx + ServiceCard.tsx)
- Instalação de sistemas de ar-condicionado
- Manutenção preventiva e corretiva
- Projetos de refrigeração comercial e industrial
- Cards interativos com hover effects

#### 5. Depoimentos (Depoimentos.tsx)
- Depoimentos estáticos de clientes
- Sistema de avaliação com estrelas
- Estatísticas de satisfação
- Seção CTA adicional

#### 6. Contato (Contato.tsx)
- Formulário completo (nome, email, telefone, mensagem)
- Informações de contato detalhadas
- Seção de emergência 24/7
- Validação de formulário

#### 6. Footer (Footer.tsx)
- Informações da empresa
- Links para serviços
- Redes sociais
- Dados de contato
- Links legais

### Tecnologias Utilizadas
- Next.js 15 com App Router
- Tailwind CSS 4 para estilização
- TypeScript para type safety
- React 19 com hooks modernos
- Firebase (Firestore + Storage) para banco de dados
- Componentes reutilizáveis e modulares

### 🎯 Características Especiais
- Navegação suave entre seções
- Animações e transições suaves
- Design system consistente com variáveis CSS customizadas
- SEO otimizado com metadados apropriados
- Acessibilidade com labels e estrutura semântica
- Performance otimizada com lazy loading

### 📊 Conteúdo da Empresa
- Foco em refrigeração comercial e industrial
- Destaque para 10+ anos de experiência
- Atendimento técnico especializado
- Suporte 24/7 para emergências
- Tecnologia de ponta e equipamentos modernos

## 🔧 Área Administrativa

### Funcionalidades
- **Gerenciamento de Vagas (CRUD)**: Crie, edite e exclua vagas de emprego
- **Visualização de Candidaturas**: Veja todas as candidaturas recebidas
- **Filtros por Status**: Filtre candidaturas por status (Pendente, Em Análise, Aprovado, Rejeitado)
- **Download de Currículos**: Acesse os currículos enviados pelos candidatos

### Rotas Administrativas
- `/admin` - Página principal da área administrativa
- `/admin/vagas` - Gerenciamento de vagas
- `/admin/candidaturas` - Visualização de candidaturas

## 🔥 Configuração do Firebase

### 1. Criar Projeto no Firebase
1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Crie um novo projeto ou use um existente
3. Ative o **Firestore Database** e o **Storage**

### 2. Configurar Firestore
1. No Firebase Console, vá em **Firestore Database**
2. Crie o banco de dados em modo de produção ou teste
3. Configure as regras de segurança (para desenvolvimento, você pode usar regras permissivas temporariamente):
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; // Apenas para desenvolvimento!
    }
  }
}
```

### 3. Configurar Storage
1. No Firebase Console, vá em **Storage**
2. Inicie o Storage
3. Configure as regras de segurança:
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /curriculos/{allPaths=**} {
      allow read, write: if true; // Apenas para desenvolvimento!
    }
  }
}
```

### 4. Obter Credenciais
1. No Firebase Console, vá em **Configurações do Projeto** (ícone de engrenagem)
2. Role até **Seus apps** e clique em **Configuração** (ícone `</>`)
3. Copie as credenciais do Firebase

### 5. Configurar Variáveis de Ambiente
1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione as seguintes variáveis:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=sua-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu-projeto-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu-projeto-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu-projeto-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=seu-app-id
```

### 6. Estrutura do Banco de Dados

#### Coleção: `vagas`
```typescript
{
  id: string;
  titulo: string;
  local: string;
  modalidade: 'presencial' | 'remoto' | 'hibrido';
  tipoContratacao: 'PJ' | 'CLT';
  faixaSalarial: string;
  descricao: string;
}
```

#### Coleção: `candidaturas`
```typescript
{
  id: string;
  vagaId: string;
  vagaTitulo: string;
  nome: string;
  email: string;
  telefone: string;
  curriculoUrl: string;
  curriculoNome: string;
  dataAplicacao: Timestamp;
  status?: 'pendente' | 'em_analise' | 'aprovado' | 'rejeitado';
}
```

#### Storage: `curriculos/{vagaId}/{timestamp}_{nomeArquivo}`

### ⚠️ Segurança
**IMPORTANTE**: As regras de segurança mostradas acima são apenas para desenvolvimento. Para produção, configure regras adequadas que:
- Restrinjam acesso apenas a usuários autenticados
- Validem os dados antes de salvar
- Protejam informações sensíveis

## 🚀 Como Usar

1. Configure o Firebase conforme instruções acima
2. Instale as dependências: `npm install`
3. Execute o projeto: `npm run dev`
4. Acesse a área administrativa em: `http://localhost:3000/admin`
5. Crie vagas na área administrativa
6. As vagas aparecerão automaticamente na página `/vagas`
7. Quando usuários se candidatarem, as informações serão salvas no Firebase
