import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-brand-500 text-sm mb-2">04. Contacto</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">¡Hablemos!</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10">
            Estoy disponible para proyectos freelance, posiciones full-time o simplemente para
            charlar sobre tecnología y diseño.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-medium text-lg transition-colors mb-10"
          >
            <Mail size={20} />
            {personalInfo.email}
          </a>

          <div className="flex justify-center gap-6 mt-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-brand-500 transition-colors"
            >
              <GithubIcon size={20} />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-brand-500 transition-colors"
            >
              <LinkedinIcon size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
