import TechSkills from '@/components/TechSkills'
import LastestProjects from '@/components/LastestProjects'
import HomePageContact from '@/components/HomepageContact'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-900 to-gray-700 text-white">
      
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Bonjour, je suis <span className="text-blue-400">Elouan</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
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
     
      <TechSkills />
      <LastestProjects />
      <HomePageContact />
    </main>
  )
}