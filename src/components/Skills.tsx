import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-brand-500 text-sm mb-2">02. Skills</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Tecnologías</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ category, items }, ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-brand-400/50 transition-all hover:shadow-lg hover:shadow-brand-400/5"
            >
              <h3 className="font-semibold text-brand-500 mb-4 text-sm uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
