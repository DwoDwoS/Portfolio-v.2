import Button from './Button'

export default function HomePageContact() {
    return (
    <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Intéressé par mon profil ?</h2>
          <p className="text-xl mb-6">
            Je suis ouvert aux opportunités de collaboration et aux nouveaux défis.
          </p>
          <Button
            href="/contact"
            variant="primary"
          >
            Discutons de votre projet
          </Button>
        </div>
    </section>
    );
}