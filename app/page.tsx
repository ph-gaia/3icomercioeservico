import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Sobre />
      <Servicos />
      <Depoimentos />
      <Contato />
      <Footer />
    </main>
  );
}
