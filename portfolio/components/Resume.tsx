import Link from 'next/link'

export default function Resume() {
    return (
        <section className="container mx-auto px-4 py-20 bg-[url('/background_homepage.jpg')] bg-cover bg-center rounded-lg shadow-lg mb-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Bonjour, je suis <span className="text-blue-200">Elouan</span>
          </h1>
          <p className="text-xl text-white-950 mb-8 max-w-2xl">
            Apprenant Développeur Full Stack essayant de créer des expériences web innovantes.
          </p>
          <div className="flex gap-4">
            <Link
              href="/portfolio"
              className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Voir mes projets
            </Link>
            <Link
              href="/contact"
              className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    );
}