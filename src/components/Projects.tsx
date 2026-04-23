import { motion } from 'framer-motion'
import { ExternalLink, Lock } from 'lucide-react'
import { GithubIcon } from './Icons'
import { projects } from '../data/portfolio'

const typeColors: Record<string, string> = {
  'Full Stack': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  Backend: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Frontend: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-mono text-brand-500 text-sm mb-2">03. Proyectos</p>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Lo que he construido</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-brand-400/50 hover:shadow-xl hover:shadow-brand-400/5 transition-all flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${typeColors[project.type]}`}>
                {project.type}
              </span>
              <div className="flex gap-2">
                {project.private ? (
                  <Lock size={16} className="text-gray-400 mt-1" />
                ) : (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-500 transition-colors mt-1">
                    <GithubIcon size={16} />
                  </a>
                )}
                {project.link && !project.private && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-500 transition-colors mt-1">
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
