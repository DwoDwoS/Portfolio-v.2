import Image from 'next/image'
import Link from 'next/link'

export default function LastestProjects() {
    return (
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Derniers Projets Réalisés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-linear-to-br from-blue-600/30 via-blue-600/20 to-blue-600/30 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 flex flex-col h-full border border-blue-400/50 hover:border-blue-300/80 transform hover:-translate-y-2 hover:scale-[1.02]">
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
              <p className="text-gray-300 mb-4">
                Site de ventes de meubles entre particuliers avec gestion de paiement.
              </p>
              <Link
                href="/projects"
                className="text-blue-400 hover:text-blue-300"
              >
                En savoir plus →
              </Link>
            </div>
          </div>
          
          <div className="relative bg-linear-to-br from-blue-600/30 via-blue-600/20 to-blue-600/30 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 flex flex-col h-full border border-blue-400/50 hover:border-blue-300/80 transform hover:-translate-y-2 hover:scale-[1.02]">
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
              <p className="text-gray-300 mb-4">
                Application d'adoption d'animaux avec recherche par filtres et gestion des annonces.
              </p>
              <Link
                href="/projects"
                className="text-blue-400 hover:text-blue-300"
              >
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}