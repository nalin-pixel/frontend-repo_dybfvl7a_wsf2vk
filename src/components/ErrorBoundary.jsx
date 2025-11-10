import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Optionally log error to a monitoring service
    console.error('ErrorBoundary caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="relative pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-2xl font-semibold text-slate-900">Maaf, konten 3D tidak dapat dimuat.</h2>
            <p className="mt-2 text-slate-600">Silakan muat ulang halaman atau lanjutkan menjelajah konten lainnya di bawah.</p>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
