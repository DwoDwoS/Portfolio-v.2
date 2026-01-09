import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen transition-colors duration-300 bg-[rgb(var(--bg-primary))] text-[rgb(var(--text-primary))]">
      <div className="w-full max-w-2xl p-24 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mt-18 inline-block mx-auto mb-4">
            Contactez-moi
          </h2>
          <p className="text-[rgb(var(--text-secondary))]">
            Vous avez un projet en tête ? Je serais ravi d'en discuter avec vous.
          </p>
        </div>
        <ContactForm />
      </div>
    </main>  
  );
}
