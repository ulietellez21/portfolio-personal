import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'

interface NavbarProps {
  darkMode: boolean
  toggleDark: () => void
}

const links = ['Inicio', 'Sobre mí', 'Skills', 'Proyectos', 'Contacto']
const hrefs = ['#hero', '#about', '#skills', '#projects', '#contact']

export default function Navbar({ darkMode, toggleDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-mono text-brand-500 font-semibold text-lg">
          &lt;UT /&gt;
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map((link, i) => (
            <li key={link}>
              <a
                href={hrefs[i]}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 px-6 pb-4"
        >
          {links.map((link, i) => (
            <a
              key={link}
              href={hrefs[i]}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-600 dark:text-gray-400 hover:text-brand-500 transition-colors"
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
