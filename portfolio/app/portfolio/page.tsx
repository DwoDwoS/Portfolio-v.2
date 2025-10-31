import Stack from "@/components/Stack";
import Projects from "@/components/Projects";

export default function Porfolio() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-gray-900 to-gray-700 text-white">
      <div className="flex flex-col items-center w-full gap-6 sm:items-start sm:text-left">
        <h1 className="text-4xl font-bold mt-18  inline-block mx-auto text-white">
          Mes projets
        </h1>
        <p className="mx-auto text-lg text-center text-zinc-600 dark:text-zinc-400">
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
