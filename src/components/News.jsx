import { useEffect, useState } from 'react';

// Mengambil informasi publik dari internet (statis via fetch) sebagai contoh
const sources = [
  {
    title: 'PWM Jateng Dorong Digitalisasi Sekolah Muhammadiyah',
    url: 'https://muhammadiyah.or.id/',
  },
  {
    title: 'Program Merdeka Belajar dan Profil Pelajar Pancasila',
    url: 'https://kurikulum.kemdikbud.go.id/',
  },
  {
    title: 'Prestasi Siswa Muhammadiyah di Ajang Nasional',
    url: 'https://suaramuhammadiyah.id/',
  },
];

export default function News() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulasikan fetch: sumber referensi tautan terpercaya
    // Dalam produksi, bisa ganti dengan endpoint backend yang melakukan crawling resmi.
    setItems(sources);
  }, []);

  return (
    <section id="update" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Berita & Informasi</h2>
          <p className="mt-2 text-slate-600">Tautan referensi seputar pendidikan, Muhammadiyah, dan kurikulum terkini.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((n) => (
            <a
              key={n.url}
              href={n.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl p-6 ring-1 ring-slate-200/70 bg-white shadow-sm hover:shadow-md transition-shadow block"
            >
              <h3 className="font-semibold text-slate-900">{n.title}</h3>
              <p className="mt-2 text-sm text-slate-600">Baca selengkapnya →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
