import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-gray-950 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] lg:grid-cols-[3fr_1fr_1.5fr] gap-8 md:gap-6 lg:gap-12 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">
              Mon Portfolio
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Développeur Full Stack passionné par la création d'expériences web innovantes et performantes. <br/>
              D'un naturel curieux et avec une envie d'apprendre considérable.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
              >
                Accueil
              </Link>
              <Link 
                href="/portfolio" 
                className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
              >
                Portfolio
              </Link>
              <Link 
                href="/about" 
                className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
              >
                À propos
              </Link>
              <Link 
                href="/contact" 
                className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Suivez-moi</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/DwoDwoS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="h-5" />
              </a>
              <a
                href="https://linkedin.com/in/elouan-gauriaud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              N'hésitez pas à me contacter pour toute collaboration ou projet !
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 mx-auto">
              &copy; {new Date().getFullYear()} Elouan's Portfolio. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;