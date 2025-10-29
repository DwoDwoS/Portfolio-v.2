import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava,faReact, faNode, faGithub,faJs,faHtml5,faCss3Alt,faGitAlt,faNpm,faDocker,faAws,faLinux} from '@fortawesome/free-brands-svg-icons'
import { faDatabase,faServer,faCode,faMobile,faGears,faListCheck} from '@fortawesome/free-solid-svg-icons'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-900 to-gray-800 text-white">
      
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Bonjour, je suis Elouan
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
     
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Compétences Techniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-linear-to-b from-blue-600 to-blue-200 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Front-end</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faReact} height={16} />
                React & Next.js
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCode} height={16} />
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCss3Alt} height={16} />
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faMobile} height={16} />
                Responsive Design
              </li>
            </ul>
          </div>
          <div className="bg-gray-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Back-end</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faNode} height={16} />
                Node.js
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faServer} height={16} />
                Express
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faJava} height={16} />
                Java
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faGears} height={16} />
                Spring Boot
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faDatabase} height={16} />
                PostgreSQL
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faServer} height={16} />
                API REST
              </li>
            </ul>
          </div>
          <div className="bg-gray-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Outils & Méthodes</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faGithub} height={16} />
                GitHub</li>
              <li>Méthodologie Agile</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Derniers Projets Réalisés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/Adaction_login.png"
                alt="Adaction"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Adaction</h3>
              <p className="text-gray-300 mb-4">
                Application de gestion de déchets par des bénévoles, pouvant faire des dons à des associations.
              </p>
              <Link
                href="/portfolio"
                className="text-blue-400 hover:text-blue-300"
              >
                En savoir plus →
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
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
                href="/portfolio"
                className="text-blue-400 hover:text-blue-300"
              >
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Intéressé par mon profil ?</h2>
          <p className="text-xl mb-6">
            Je suis ouvert aux opportunités de collaboration et aux nouveaux défis.
          </p>
          <Link
            href="/contact"
            className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-3 rounded-lg font-medium inline-block"
          >
            Discutons de votre projet
          </Link>
        </div>
      </section>
    </main>
  )
}