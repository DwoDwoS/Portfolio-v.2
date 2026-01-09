'use client';
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext';

export default function LastestProjects() {
    const { theme } = useTheme();

    return (
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Derniers Projets Réalisés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`${theme === 'light' ? 'bg-linear-to-br from-amber-300/50 via-amber-100/70 to-amber-400/50 hover:shadow-amber-500/50 border-amber-300/50 hover:border-amber-200/80' : 'bg-linear-to-br from-blue-600/30 via-blue-400/50 to-blue-600/30 hover:shadow-blue-500/50 border-blue-400/50 hover:border-blue-300/80'} relative backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 flex flex-col h-full border transform hover:-translate-y-2 hover:scale-[1.02]`}>
            <div className="relative h-48">
              <Image
                src="/ampunv.png"
                alt="Ancien Meuble Pour Une Nouvelle Vie"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">AMPUNV</h3>
              <p className={`${theme === 'light' ? 'text-gray-700 mb-4' : 'text-gray-300 mb-4'}`}>
                Site de ventes de meubles entre particuliers avec gestion de paiement.
              </p>
              <Link
                href="/projects"
                className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-300' : 'text-blue-300 hover:text-blue-100'}`}
              >
                En savoir plus →
              </Link>
            </div>
          </div>
          
          <div className={`${theme === 'light' ? 'bg-linear-to-br from-amber-300/50 via-amber-100/70 to-amber-400/50 hover:shadow-amber-500/50 border-amber-300/50 hover:border-amber-200/80' : 'bg-linear-to-br from-blue-600/30 via-blue-400/50 to-blue-600/30 hover:shadow-blue-500/50 border-blue-400/50 hover:border-blue-300/80'} relative backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 flex flex-col h-full border transform hover:-translate-y-2 hover:scale-[1.02]`}>
            <div className="relative h-48">
              <Image
                src="/adaopte.svg"
                alt="Adaopte"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Adaopte</h3>
              <p className={`${theme === 'light' ? 'text-gray-700 mb-4' : 'text-gray-300 mb-4'}`}>
                Application d'adoption d'animaux avec recherche par filtres et gestion des annonces.
              </p>
              <Link
                href="/projects"
                className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-300' : 'text-blue-300 hover:text-blue-100'}`}
              >
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}