import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="transition-colors duration-300 border-t"
      style={{
        backgroundColor: "rgb(var(--bg-secondary))",
        color: "rgb(var(--text-secondary))",
        borderColor: "rgb(var(--border-color))",
      }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] lg:grid-cols-[3fr_1fr_1.5fr] gap-8 md:gap-6 lg:gap-12 mb-8">
          <div className="space-y-4">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: "rgb(var(--text-primary))" }}
            >
              Mon Portfolio
            </h3>
            <p className="leading-relaxed">
              Développeur Full Stack passionné par la création d'expériences web
              innovantes et performantes. <br />
              D'un naturel curieux et avec une envie d'apprendre considérable.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: "rgb(var(--text-primary))" }}
            >
              Navigation
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="transition-colors duration-200 hover:translate-x-1 inline-block"
                style={{ color: "rgb(var(--text-secondary))" }}
              >
                Accueil
              </Link>
              <Link
                href="/projects"
                className="transition-colors duration-200 hover:translate-x-1 inline-block"
                style={{ color: "rgb(var(--text-secondary))" }}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="transition-colors duration-200 hover:translate-x-1 inline-block"
                style={{ color: "rgb(var(--text-secondary))" }}
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="transition-colors duration-200 hover:translate-x-1 inline-block"
                style={{ color: "rgb(var(--text-secondary))" }}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: "rgb(var(--text-primary))" }}
            >
              Suivez-moi
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/DwoDwoS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-white"
                style={{ backgroundColor: "black" }}
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="h-5" />
              </a>
              <a
                href="https://linkedin.com/in/elouan-gauriaud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-white"
                style={{ backgroundColor: "#0077B5" }}
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-5" />
              </a>
            </div>
            <p className="text-sm mt-4">
              N'hésitez pas à me contacter pour toute collaboration ou projet !
            </p>
          </div>
        </div>

        <div
          className="border-t pt-8"
          style={{ borderColor: "rgb(var(--border-color))" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm mx-auto">
              &copy; {new Date().getFullYear()} Elouan's Portfolio. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;