import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
        <div className="border-t border-gray-700 mb-4">
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <Link href="/" className="text-xl font-bold hover:text-blue-400">
                        Elouan's Portfolio
                    </Link>
                </div>
                <div>
                    <Link href="/about" className="mx-2 hover:text-blue-400 transition-colors">À propos</Link>
                    <Link href="/portfolio" className="mx-2 hover:text-blue-400 transition-colors">Portfolio</Link>
                    <Link href="/contact" className="mx-2 hover:text-blue-400 transition-colors">Contact</Link>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Elouan's Portfolio. Tous droits réservés.</p>
        </div>
    </footer>
  );
}
export default Footer;