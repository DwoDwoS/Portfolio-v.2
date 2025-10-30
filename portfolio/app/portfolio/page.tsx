import Stack from "@/components/Stack";

export default function Porfolio() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-gray-900 to-gray-700 text-white">
      <main className="flex min-h-screen w-full max-w-3xl flex-col justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
            Découvrez mes projets, compétences et expériences professionnelles.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Voici une preview de quelques-uns de mes projets récents. N'hésitez pas à explorer et à me contacter pour toute collaboration ou opportunité professionnelle.
          </p>
          <Stack />
        </div>
      </main>
    </div>
  );
}