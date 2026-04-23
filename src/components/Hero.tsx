import { motion } from 'framer-motion'
import { Mail, ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-mono text-brand-500 text-sm mb-4"
      >
        Hola, soy
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
      >
        {personalInfo.name}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl md:text-3xl font-light text-gray-500 dark:text-gray-400 mb-6"
      >
        {personalInfo.role}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-xl text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10"
      >
        {personalInfo.bio}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex gap-4 items-center mb-12"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-medium transition-colors"
        >
          Ver proyectos
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-brand-500 dark:hover:border-brand-400 rounded-lg font-medium transition-colors"
        >
          Contacto
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex gap-5"
      >
        {[
          { icon: <GithubIcon size={20} />, href: personalInfo.github },
          { icon: <LinkedinIcon size={20} />, href: personalInfo.linkedin },
          { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}` },
        ].map(({ icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-200 dark:border-gray-700 hover:border-brand-400 hover:text-brand-500 transition-colors"
          >
            {icon}
          </a>
        ))}
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-gray-400"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  )
}
