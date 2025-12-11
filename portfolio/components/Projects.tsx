export default function Projects() {
  const projects = [
    {
      title: "AMPUNV",
      description:
        "Site de vente de meubles entre particuliers avec gestion de paiement. Réalisé en solo durant 4 semaines.",
      usedTechnologies: [
        "React",
        "Next",
        "Tailwind CSS",
        "Java",
        "Spring Boot",
        "Neon",
        "Stripe",
      ],
      demoLink: "https://ampunv.vercel.app/",
      githubLink: "https://github.com/DwoDwoS/ampunv_back",
    },
    {
      title: "Adaction",
      description:
        "Application de gestion de bénévoles pour le recyclage des déchets, permettant aux utilisateurs de faire des dons à des associations. Réalisé en équipe de 2 durant 4 semaines.",
      usedTechnologies: [
        "React",
        "Tailwind CSS",
        "Java",
        "Spring Boot",
        "Neon",
      ],
      demoLink: "#",
      githubLink: "https://github.com/DwoDwoS/Project_Adaction_Front",
    },
    {
      title: "Adaopte",
      description:
        "Application d'adoption d'animaux avec recherche par filtres et gestion des annonces. Réalisé en équipe de 3 durant 2 semaines. Contraintes: pas de back-end, uniquement du front-end.",
      usedTechnologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      demoLink: "https://projet-adaopte.vercel.app/",
      githubLink: "https://github.com/DwoDwoS/projet_Adaopte",
    },
    {
      title: "ToDoList",
      description:
        "Application de gestion de tâches avec ajout, suppression et marquage comme terminé. Travail personnel pour pratiquer le JavaScript.",
      usedTechnologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://dwodwos.github.io/ToDoList/",
      githubLink: "https://github.com/DwoDwoS/ToDoList",
    },
    {
      title: "Weather App",
      description:
        "Application de visualisation des données météorologiques avec graphiques interactifs. Réalisé en équipe de 3 durant 2 semaines.",
      usedTechnologies: ["JavaScript", "D3.js", "Node.js", "Express"],
      demoLink: "https://weather-dataviz.onrender.com",
      githubLink: "https://github.com/DwoDwoS/Weather-Dataviz",
    },
  ];

  function ProjectCard({
    title,
    description,
    usedTechnologies,
    demoLink,
    githubLink,
  }: {
    title: string;
    description: string;
    usedTechnologies?: string[];
    demoLink: string;
    githubLink: string;
  }) {
    return (
      <div className="bg-blue-500/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-700/50 transform hover:-translate-y-0.5">
        <div className="p-6 border-b border-gray-700/50">
          <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        </div>

        <div className="p-6 grow">
          <p className="text-white mb-6 leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {usedTechnologies
              ? usedTechnologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-600"
                  >
                    {tech}
                  </span>
                ))
              : "N/A"}
          </div>
        </div>

        <div className="p-6 bg-neutral-900/50 mt-auto border-t border-gray-700/50">
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600/50 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Voir le projet
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-neutral-800/90 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Voir le code
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="container mx-auto px-4 py-16 w-100%">
      <h2 className="text-4xl font-bold mb-12 text-white text-center">
        Descriptions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            usedTechnologies={project.usedTechnologies}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}