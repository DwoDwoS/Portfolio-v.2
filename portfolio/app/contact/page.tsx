import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-900 to-gray-700 text-white">
      <div className="w-full max-w-2xl p-24 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mt-18  inline-block mx-auto mb-4 text-white">
            Contactez-moi
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Vous avez un projet en tête ? Je serais ravi d'en discuter avec vous.
          </p>
        </div>
        <ContactForm />
      </div>
    </main>  
  );
}
