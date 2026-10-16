
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTasks,
  FaBoxes,
  FaWallet,
  FaIndustry,
} from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'TaskFlow',
    category: 'Application Web',
    description:
      'Une application web de gestion des tâches permettant d’organiser les activités, de suivre leur progression et de gérer les priorités.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=900&q=80',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    icon: <FaTasks />,
    github: '',
    live: '',
  },
  {
    id: 2,
    title: 'StockManager',
    category: 'Application Full Stack',
    description:
      'Une application de gestion de stock permettant d’organiser les produits, de suivre les quantités disponibles et de simplifier la gestion des entrées et des sorties.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
    tech: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS'],
    icon: <FaBoxes />,
    github: '',
    live: '',
  },
  {
    id: 3,
    title: 'Kharouba Copper Mining',
    category: 'Site Web Industriel',
    description:
      'Un site web institutionnel consacré à une exploitation minière de cuivre, présentant ses activités, ses opérations, ses engagements en matière de durabilité et ses opportunités de carrière.',
    image:
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    icon: <FaIndustry />,
    github: '',
    live: '',
  },
  {
    id: 4,
    title: 'BudgetFlow',
    category: 'Application de Gestion',
    description:
      'Une application de suivi budgétaire permettant d’enregistrer les revenus et les dépenses, de calculer le solde et de consulter un résumé des opérations financières.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
    tech: ['React', 'Laravel', 'MySQL'],
    icon: <FaWallet />,
    github: '',
    live: '',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-[#0a192f] to-[#0d2544] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Mon portfolio
          </p>

          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Mes <span className="text-cyan-400">Projets</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Découvrez une sélection de projets web utilisant les
            technologies du développement Frontend et Backend.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -7 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cyan-900/40 bg-[#112240] shadow-xl transition-colors duration-300 hover:border-cyan-400/50"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Illustration du projet ${project.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-[#0a192f]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#0a192f]/90 text-3xl text-cyan-400">
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {project.category}
                </p>

                <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
                  {project.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-7 text-gray-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-cyan-900/60 bg-cyan-950/60 px-3 py-1.5 text-xs font-medium text-cyan-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links: displayed only when URLs exist */}
                {(project.github || project.live) && (
                  <div className="flex items-center gap-3 border-t border-gray-700/70 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Code source de ${project.title} sur GitHub`}
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-200 transition hover:border-cyan-400 hover:text-cyan-300"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Voir la démonstration de ${project.title}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-cyan-500/20"
                      >
                        Démo
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
