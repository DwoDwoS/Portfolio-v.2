import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faReact,
  faNode,
  faGithub,
  faJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faNpm,
  faDocker,
  faAws,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faServer,
  faCode,
  faMobile,
  faGears,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function TechSkills() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Compétences Techniques
      </h2>
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
              GitHub
            </li>
            <li>
              <img
                src="agile-svgrepo-com.svg"
                alt="Agile"
                className="inline h-4 w-4 mr-2"
              />
              Méthodologie Agile
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
