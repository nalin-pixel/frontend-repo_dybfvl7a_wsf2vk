import Spline from '@splinetool/react-spline';
import ErrorBoundary from './ErrorBoundary';

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <ErrorBoundary>
          <Spline scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </ErrorBoundary>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-20">
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">Sekolah Unggul Berkarakter</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                SMP Muhammadiyah 2 Surakarta
              </h1>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                Membangun generasi berilmu, berakhlak mulia, dan berdaya saing global melalui pendidikan yang modern, islami, dan kolaboratif.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#program" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700 transition-colors">Jelajah Program</a>
                <a href="#kontak" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-blue-700 font-medium ring-1 ring-blue-200 hover:bg-blue-50 transition-colors">Hubungi Kami</a>
              </div>
            </div>
            <div className="lg:h-[520px] h-72"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
