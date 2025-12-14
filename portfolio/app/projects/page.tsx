import Stack from '@/components/Stack';
import Projects from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center transition-colors duration-300 bg-[rgb(var(--bg-primary))] text-[rgb(var(--text-primary))]">
      <div className="flex flex-col items-center w-full gap-6 sm:items-start sm:text-left">
        <h2 className="text-4xl font-bold mt-18 inline-block mx-auto">
          Mes projets
        </h2>
        <p className="mx-auto text-lg text-center text-[rgb(var(--text-secondary))]">
          Voici une preview de quelques-uns de mes projets récents. N'hésitez
          pas à explorer et à me contacter pour toute collaboration ou
          opportunité professionnelle.
        </p>
        <Stack />
        <Projects />
      </div>
    </div>
  );
}
