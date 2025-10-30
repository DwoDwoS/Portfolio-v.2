import Link from 'next/link'

export default function HomePageContact() {
    return (
    <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Intéressé par mon profil ?</h2>
          <p className="text-xl mb-6">
            Je suis ouvert aux opportunités de collaboration et aux nouveaux défis.
          </p>
          <Link
            href="/contact"
            className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Discutons de votre projet
          </Link>
        </div>
    </section>
    );
}