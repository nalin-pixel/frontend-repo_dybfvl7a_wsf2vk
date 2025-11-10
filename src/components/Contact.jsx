import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontak" className="relative py-16 bg-gradient-to-b from-blue-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Hubungi Kami</h2>
            <p className="mt-3 text-slate-600">Terbuka untuk konsultasi PPDB, kunjungan sekolah, atau kerja sama pendidikan.</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-700 mt-1" />
                <p className="text-slate-700">Jl. Slamet Riyadi, Surakarta, Jawa Tengah (referensi area pusat kota Solo)</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-700 mt-1" />
                <p className="text-slate-700">(0271) 000000 • Senin–Jumat 07.00–15.00 WIB</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-700 mt-1" />
                <p className="text-slate-700">info@smpmuh2-surakarta.sch.id</p>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-blue-50 text-blue-900 ring-1 ring-blue-200">
              <p className="text-sm">Catatan: Informasi di halaman ini bersifat representatif agar segera dapat dipergunakan. Untuk data resmi dan terbaru, silakan konfirmasi ke kanal resmi Muhammadiyah setempat.</p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Terima kasih! Pesan Anda telah terkirim.');
              e.currentTarget.reset();
            }}
            className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nama</label>
                <input type="text" required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Subjek</label>
                <input type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Pesan</label>
                <textarea rows={5} required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </section>
  );
}
