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
      <div className="relative bg-linear-to-br from-blue-600/30 via-blue-600/20 to-blue-600/30 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 flex flex-col h-full border border-blue-400/50 hover:border-blue-300/80 transform hover:-translate-y-2 hover:scale-[1.02]">
        <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="relative p-6 bg-linear-to-r from-blue-500/20 to-purple-500/20 border-b border-blue-400/30 text-center">
          <h3 className="text-2xl font-bold mb-2 drop-shadow-[0_2px_10px_rgba(59,130,246,0.5)] text-[rgb(var(--text-secondary))]">{title}</h3>
        </div>

        <div className="relative p-6 grow bg-linear-to-b from-transparent to-black/20">
          <p className="text-[rgb(var(--text-secondary))] mb-6 leading-relaxed drop-shadow-lg">{description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {usedTechnologies
              ? usedTechnologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/30 backdrop-blur-md text-blue-100 px-3 py-1.5 rounded-full text-sm font-medium border border-blue-300/50 shadow-lg hover:bg-blue-400/40 hover:scale-105 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))
              : "N/A"}
          </div>
        </div>

        <div className="relative p-6 bg-linear-to-t from-blue-900/40 to-transparent mt-auto border-t border-blue-400/30">
          <div className="flex flex-wrap gap-3 sm:justify-start xl:justify-center">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Voir le projet
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
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
      <h2 className="text-4xl font-bold mb-12 text-[rgb(var(--text-secondary))] text-center">
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