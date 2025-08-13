import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-cream min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center py-20">

          {/* TEXTO */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Wellness. Fitness. Healthness.
            </h1>
            <p className="text-lg text-slate-600">
              Awaken your full potential. Your journey is our commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/#cta"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow"
              >
                Unlock your next level
              </Link>
              <Link
                href="/conteudo"
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-6 py-3 rounded-full text-lg font-semibold shadow-sm"
              >
                Science & nature
              </Link>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <Image
              src="/media/logos/LogoHorizontal-AzulOceanoProfundo.svg"
              alt="Improve"
              width={500}
              height={200}
              priority
            />
          </div>
        </div>
      </section>

      {/* FRASES SECUNDÁRIAS */}
      <section className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Let nature be your medicine</h3>
            <p className="text-slate-600 text-sm">
              We combine science and natural principles to enhance your performance and health.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Energy for your best day</h3>
            <p className="text-slate-600 text-sm">
              Supplementation and habits designed to keep you energized from morning to night.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Care that transforms</h3>
            <p className="text-slate-600 text-sm">
              Long-term well-being starts with the right choices today — and we help you every step of the way.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
