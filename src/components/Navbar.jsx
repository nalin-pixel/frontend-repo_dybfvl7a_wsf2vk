import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#program', label: 'Program' },
    { href: '#update', label: 'Update' },
    { href: '#kontak', label: 'Kontak' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#beranda" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">M2</div>
            <div>
              <p className="text-slate-900 font-semibold leading-tight">SMP Muhammadiyah 2</p>
              <p className="text-xs text-slate-500 -mt-0.5">Surakarta</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-600 hover:text-blue-700 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="https://www.google.com/search?q=SMP+Muhammadiyah+2+Surakarta"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium shadow hover:bg-blue-700 transition-colors"
            >
              PPDB 2025
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://www.google.com/search?q=SMP+Muhammadiyah+2+Surakarta"
                target="_blank"
                rel="noreferrer"
                className="mt-1 px-3 py-2 rounded-md bg-blue-600 text-white font-medium text-center"
                onClick={() => setOpen(false)}
              >
                PPDB 2025
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
