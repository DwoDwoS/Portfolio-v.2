import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="hover:text-gray-300">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300">
            À propos
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar