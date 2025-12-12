import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-900 to-gray-700 text-white columns-2">
      <div className="max-w-2xl p-24 text-justify">
          <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
          <p>Elouan, apprenant <strong>Développeur Web/Concepteur d'Applications et Logiciels</strong> au sein d'ADA Tech School Nantes.
            J'ai commencé ma formation en fin Mai 2025. Je suis actuellement à la recherche d'une alternance d'un an, à partir de Février 2026, pour passer mon <strong>RNCP IV</strong>.</p>

          <p className="my-6">Auparavant, j'étais éducateur spécialisé, principalement dans la Protection de l'Enfance, pendant une dizaine d'années.
            J'ai souhaité me réorienter après avoir fait un peu le tour du Social en général. J'ai voulu me challenger en reprenant des études dans un domaine que je connaissais moins.
            J'avais déjà repéré des besoins dans le Social en lien avec l'informatique, améliorer les logiciels utilisés par les équipes, concentrer les informations pour qu'elles soient accessibles plus facilement, etc.
          </p>

          <p>Je suis d'un naturel curieux, j'aime apprendre de nouvelles choses, avoir commencé à coder m'a permis d'avoir un nouveau regard sur les outils du quotidien que l'on peut utiliser.
            Je me surprends, à regarder certains sites que j'utilisais pourtant depuis un moment pour comprendre comment ils sont réalisés et savoir si je pourrais le reproduire.
          </p>
      </div>

      <div className="p-8">
          <Image 
            src="/moi.jpg"
            alt="Une photo de moi"
            width={550}
            height={1}
            className="hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-700/50 transform hover:-translate-y-0.5"
          />
      </div>
    </main>
  )
}