import { motion } from 'framer-motion'
import { MapPin, Code2, Palette } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const highlights = [
  { icon: <Code2 size={20} />, label: 'Full Stack', desc: 'Frontend + Backend desde cero' },
  { icon: <Palette size={20} />, label: 'Design', desc: 'UI/UX centrado en el usuario' },
  { icon: <MapPin size={20} />, label: personalInfo.location, desc: 'México' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-mono text-brand-500 text-sm mb-2">01. Sobre mí</p>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">¿Quién soy?</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
            Soy un desarrollador Full Stack con pasión por crear productos digitales que combinen
            código limpio y diseño atractivo. Me encanta trabajar en todo el stack, desde interfaces
            de usuario animadas hasta APIs robustas y bases de datos optimizadas.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Cuando no estoy programando, estoy explorando nuevas tendencias de diseño, aprendiendo
            sobre nuevas tecnologías o trabajando en proyectos personales que me desafían a crecer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-4"
        >
          {highlights.map(({ icon, label, desc }) => (
            <div
              key={label}
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-brand-400/50 transition-colors"
            >
              <div className="p-3 rounded-lg bg-brand-50 dark:bg-brand-900/20 text-brand-500">
                {icon}
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{label}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
