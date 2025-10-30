export default function Projects () {
    const projects = [
        {
            title: "Adaction",  
            description: "Application de gestion de bénévoles pour le recyclage des déchets, permettant aux utilisateurs de faire des dons à des associations. Réalisé en équipe de 2 durant 4 semaines. Technologies utilisées : React, Tailwind CSS, Java, Spring Boot, Neon.",
            demoLink: "#",
            githubLink: "https://github.com/DwoDwoS/Project_Adaction_Front"
        },
        {
            title: "Adaopte",
            description: "Application d'adoption d'animaux avec recherche par filtres et gestion des annonces. Réalisé en équipe de 3 durant 2 semaines. Technologies utilisées : Tailwind CSS, JavaScript, SQLite. Contraintes: pas de back-end, uniquement du front-end.",
            demoLink: "https://dwodwos.github.io/projet_Adaopte/homepage",
            githubLink: "https://github.com/DwoDwoS/projet_Adaopte"
        },
        {
            title: "ToDoList",
            description: "Application de gestion de tâches avec ajout, suppression et marquage comme terminé. Technologies utilisées : HTML, CSS, JavaScript. Travail personnel pour pratiquer le JavaScript.",
            demoLink: "https://dwodwos.github.io/ToDoList/",
            githubLink: "https://github.com/DwoDwoS/ToDoList"
        },
        {
            title: "Weather App",
            description: "Application de visualisation des données météorologiques avec graphiques interactifs. Technologies utilisées : JavaScript, D3.js, Node.js, Express. Réalisé en équipe de 3 durant 2 semaines.",
            demoLink: "https://dwodwos.github.io/Weather-Dataviz/",
            githubLink: "https://github.com/DwoDwoS/Weather-Dataviz"
        }
    ];

    function ProjectCard({ title, description, demoLink, githubLink }: { title: string; description: string; demoLink: string; githubLink: string }) {
        return (
            <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-white-700 mb-4">{description}</p>
                <a  href={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Voir le projet
                </a>
                <br />
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Voir le code source
                </a>
            </div>
        );
    }
    return (
        <section className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Mes Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        demoLink={project.demoLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </section>
    );
}