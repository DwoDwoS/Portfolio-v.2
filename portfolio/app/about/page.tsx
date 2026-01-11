import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen transition-colors duration-300 bg-[rgb(var(--bg-primary))] text-[rgb(var(--text-primary))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="order-2 lg:order-1 text-center lg:text-justify space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 mt-6">À propos de moi</h2>
            <p>Elouan, apprenant <strong>Développeur Web/Concepteur d'Applications et Logiciels</strong> au sein d'ADA Tech School Nantes.
              J'ai commencé ma formation en fin Mai 2025. Je suis actuellement à la recherche d'une alternance d'un an, à partir de Février 2026, pour passer mon <strong>RNCP IV</strong>.</p>

            <p>Auparavant, j'étais éducateur spécialisé, principalement dans la Protection de l'Enfance, pendant une dizaine d'années.
              J'ai pu développer une expertise dans mon milieu précédent et j'ai pu partager mon savoir sur les dernières années passées sur mon poste. J'ai donc voulu me challenger en reprenant des études dans un domaine que je connaissais moins.
              J'avais déjà repéré des besoins dans le Social en lien avec l'informatique, améliorer les logiciels utilisés par les équipes, concentrer les informations pour qu'elles soient accessibles plus facilement, etc.
            </p>

            <p>Je suis d'un naturel curieux, j'aime apprendre de nouvelles choses, avoir commencé à coder m'a permis d'avoir un nouveau regard sur les outils du quotidien que l'on peut utiliser.
              Je me surprends, à regarder certains sites que j'utilisais pourtant depuis un moment pour comprendre comment ils sont réalisés et savoir si je pourrais le reproduire.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <Image 
              src="/moi.jpg"
              alt="Une photo de moi"
              width={550}
              height={733}
              className="w-full h-auto hover:shadow-2xl transition-all duration-300 border border-gray-700/50 rounded-lg transform hover:-translate-y-0.5"
            />
          </div>
        </div>
      </div>
    </main>
  )
}