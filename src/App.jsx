import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import News from './components/News';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <News />
        <Contact />
      </main>
      <footer className="border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} SMP Muhammadiyah 2 Surakarta. All rights reserved.</p>
          <p className="text-slate-500">Dibangun dengan nuansa biru modern.</p>
        </div>
      </footer>
    </div>
  );
}
