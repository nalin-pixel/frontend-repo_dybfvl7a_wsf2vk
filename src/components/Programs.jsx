import { BookOpen, Microscope, Languages, Trophy } from 'lucide-react';

const items = [
  {
    icon: BookOpen,
    title: 'Kurikulum Merdeka',
    desc: 'Pembelajaran yang memerdekakan potensi siswa dengan proyek penguatan profil pelajar Pancasila dan karakter Islami.'
  },
  {
    icon: Microscope,
    title: 'Kelas Riset & Sains',
    desc: 'Fasilitas laboratorium IPA, klub sains, serta bimbingan olimpiade untuk menumbuhkan budaya ilmiah.'
  },
  {
    icon: Languages,
    title: 'Tahfidz & Bahasa',
    desc: 'Program tahfidz Al-Qur’an, BTQ, serta penguatan Bahasa Inggris dan Arab melalui metode komunikatif.'
  },
  {
    icon: Trophy,
    title: 'Prestasi & Ekstrakurikuler',
    desc: 'Pilihan ekskul: robotik, tapak suci, futsal, panahan, band, jurnalistik, pramuka, dan masih banyak lagi.'
  }
];

export default function Programs() {
  return (
    <section id="program" className="relative py-16 bg-gradient-to-b from-white to-blue-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Program Unggulan</h2>
          <p className="mt-2 text-slate-600">Menyemai kompetensi akademik dan karakter islami dalam ekosistem belajar yang menyenangkan.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-blue-600/10 text-blue-700 grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
