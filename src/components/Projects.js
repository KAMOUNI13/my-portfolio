import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaBoxes,
  FaWallet,
  FaIndustry,
  FaFlask,
  FaUsers,
  FaChartLine,
  FaCode,
  FaLaptopCode,
  FaCheckCircle,
  FaHome,
} from 'react-icons/fa';

import kharroubaImage from '../assets/images/kharrouba1.png';
import myportfolioImage from '../assets/images/myportfolio.png';
import darivaImage from '../assets/images/dariva_home_living.png';

const translations = {
  fr: {
    portfolio: 'Mon portfolio',
    my: 'Mes',
    projectsTitle: 'Projets',
    intro:
      'Découvrez mes réalisations, les technologies utilisées et les solutions web développées pour répondre à différents besoins.',
    featured: 'Projet principal',
    featuresTitle: 'Fonctionnalités principales',
    otherModules: 'autres fonctionnalités',
    technologies: 'Technologies',
    viewProject: 'Voir le projet',
    sourceCode: 'Code source',
    githubLabel: 'Code source de',
    demoLabel: 'Démo de',
    footer:
      "Des solutions web conçues autour de la gestion des données, de l’organisation des activités et de l’expérience utilisateur.",
    projects: [
      {
        title: 'Kharouba Copper Mining',
        category: 'Application Full Stack',
        description:
          'Application web de gestion minière permettant de centraliser les opérations, les analyses du laboratoire, les stocks et la gestion des ressources humaines.',
        features: [
          'Dashboard et statistiques',
          'Gestion du laboratoire',
          'Stocks et matériel',
          'Dossiers des employés',
          'Présences, congés et paie',
          'Rapports et suivi des activités',
        ],
      },
      {
        title: 'Personal Portfolio',
        category: 'Portfolio Web',
        description:
          'Portfolio personnel présentant mon profil, mes compétences techniques, mon parcours et mes projets en développement web dans une interface moderne.',
        features: [
          'Présentation du profil',
          'Section compétences',
          'Galerie de projets',
          'Animations et transitions',
          'Mode clair et sombre',
          'Design adaptatif',
        ],
      },
      {
  title: 'Dariva Home & Living',
  category: 'E-commerce',
  description:
    'Plateforme e-commerce dédiée à l’univers de la maison et de la décoration, offrant une expérience de navigation moderne pour découvrir les produits et aménager son intérieur.',
  features: [
    'Catalogue de produits',
    'Présentation des collections',
    'Interface moderne et élégante',
    'Navigation intuitive',
  ],
},
      {
        title: 'StockManager',
        category: 'Application Full Stack',
        description:
          'Application de gestion de stock permettant de gérer les produits, contrôler les quantités disponibles et suivre les mouvements d’entrée et de sortie.',
        features: [
          'Gestion des produits',
          'Suivi des quantités',
          'Entrées et sorties',
          'Consultation des stocks',
        ],
      },
      {
        title: 'BudgetFlow',
        category: 'Application de Gestion',
        description:
          'Application de gestion budgétaire permettant d’enregistrer les revenus et les dépenses, de suivre le solde et de consulter un résumé des opérations financières.',
        features: [
          'Enregistrement des revenus',
          'Suivi des dépenses',
          'Calcul du solde',
          'Résumé des opérations',
        ],
      },
    ],
  },

  en: {
    portfolio: 'My portfolio',
    my: 'My',
    projectsTitle: 'Projects',
    intro:
      'Explore my projects, the technologies I use, and the web solutions I develop to meet different needs.',
    featured: 'Featured project',
    featuresTitle: 'Key features',
    otherModules: 'other features',
    technologies: 'Technologies',
    viewProject: 'View project',
    sourceCode: 'Source code',
    githubLabel: 'Source code for',
    demoLabel: 'Demo of',
    footer:
      'Web solutions focused on data management, activity organization, and user experience.',
    projects: [
      {
        title: 'Kharouba Copper Mining',
        category: 'Full Stack Application',
        description:
          'A mining management web application that centralizes operations, laboratory analyses, inventory, and human resources management.',
        features: [
          'Dashboard and statistics',
          'Laboratory management',
          'Inventory and equipment',
          'Employee records',
          'Attendance, leave and payroll',
          'Reports and activity tracking',
        ],
      },
      {
        title: 'Personal Portfolio',
        category: 'Web Portfolio',
        description:
          'A personal portfolio showcasing my profile, technical skills, background, and web development projects through a modern interface.',
        features: [
          'Personal profile',
          'Skills section',
          'Project gallery',
          'Animations and transitions',
          'Light and dark mode',
          'Responsive design',
        ],
      },
    {
  title: 'Dariva Home & Living',
  category: 'E-commerce Website',
  description:
    'An e-commerce platform dedicated to home living and decoration, offering a modern browsing experience to explore products and discover interior design inspiration.',
  features: [
    'Product catalog',
    'Collection presentation',
    'Modern and elegant interface',
    'Intuitive navigation',
  ],
},
      {
        title: 'StockManager',
        category: 'Full Stack Application',
        description:
          'An inventory management application for managing products, checking available quantities, and tracking incoming and outgoing stock.',
        features: [
          'Product management',
          'Quantity tracking',
          'Stock in and out',
          'Inventory overview',
        ],
      },
      {
        title: 'BudgetFlow',
        category: 'Management Application',
        description:
          'A budget management application for recording income and expenses, tracking balances, and reviewing financial transactions.',
        features: [
          'Income recording',
          'Expense tracking',
          'Balance calculation',
          'Transaction summary',
        ],
      },
    ],
  },
};

const projects = [
  {
    id: 1,
    image: kharroubaImage,
    tech: ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],
    icon: <FaIndustry />,
    github:
      'https://github.com/kamouni13/kharouba-copper-mining-demo',
    live: '',
    featured: true,
  },
  {
    id: 2,
    image: myportfolioImage,
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
    icon: <FaLaptopCode />,
    github: 'https://github.com/kamouni13/my-portfolio',
    live: 'https://my-portfolio-liart-five-85.vercel.app/',
    featured: false,
  },
 {
  id: 3,
  image: darivaImage,
  tech: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
  icon: <FaHome />,
  github: 'https://github.com/kamouni13/dariva-home-living',
  live: 'https://dariva-home-living.vercel.app/',
  featured: false,
},
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85',
    tech: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS'],
    icon: <FaBoxes />,
    github: 'https://github.com/kamouni13/stockmanager',
    live: 'https://stockmanager-demo.example.com',
    featured: false,
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85',
    tech: ['React', 'Laravel', 'MySQL'],
    icon: <FaWallet />,
    github: 'https://github.com/kamouni13/budgetflow',
    live: 'https://budgetflow-demo.example.com',
    featured: false,
  },
];

const featureIcons = [
  <FaChartLine key="chart" />,
  <FaFlask key="flask" />,
  <FaBoxes key="boxes" />,
  <FaUsers key="users" />,
];

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'fr';

  return localStorage.getItem('portfolio-language') === 'en'
    ? 'en'
    : 'fr';
};

const Projects = () => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    const syncLanguage = (event) => {
      const nextLanguage =
        typeof event.detail === 'string'
          ? event.detail
          : event.detail?.language;

      if (nextLanguage === 'fr' || nextLanguage === 'en') {
        setLanguage(nextLanguage);
      }
    };

    const syncSavedLanguage = () => {
      const savedLanguage = localStorage.getItem('portfolio-language');

      if (savedLanguage === 'fr' || savedLanguage === 'en') {
        setLanguage(savedLanguage);
      }
    };

    window.addEventListener('portfolio-language-change', syncLanguage);
    window.addEventListener('storage', syncSavedLanguage);

    syncSavedLanguage();

    return () => {
      window.removeEventListener(
        'portfolio-language-change',
        syncLanguage
      );
      window.removeEventListener('storage', syncSavedLanguage);
    };
  }, []);

  const text = translations[language];

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#E8F4F8] py-20 transition-colors duration-700 dark:bg-[#0A192F] sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-800 shadow-sm dark:bg-[#10243B] dark:text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            {text.portfolio}
          </span>

          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-100">
            {text.my}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {text.projectsTitle}
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
            {text.intro}
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const projectText = text.projects[index];

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  opacity: {
                    duration: 0.75,
                    delay: index * 0.1,
                  },
                  y: {
                    duration: 0.75,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                whileHover={{
                  y: -7,
                  transition: {
                    type: 'spring',
                    stiffness: 160,
                    damping: 23,
                  },
                }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-lg shadow-slate-900/5 transition-[border-color,box-shadow,background-color] duration-500 hover:border-cyan-400/70 hover:shadow-xl hover:shadow-cyan-900/10 dark:border-slate-700/70 dark:bg-[#10243B] dark:shadow-black/10 dark:hover:border-cyan-400/40"
              >
                <div className="relative h-52 shrink-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={projectText.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/85 via-[#071426]/10 to-transparent" />

                  <span className="absolute left-4 top-4 max-w-[85%] truncate rounded-full border border-white/20 bg-[#071426]/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    {projectText.category}
                  </span>

                  {project.featured && (
                    <span className="absolute right-4 top-4 rounded-full border border-cyan-300/30 bg-cyan-400/20 px-3 py-1.5 text-xs font-bold text-cyan-100 backdrop-blur-md">
                      {text.featured}
                    </span>
                  )}

                  <motion.div
                    className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/30 bg-[#071426]/75 text-2xl text-cyan-300 backdrop-blur-md"
                    whileHover={{ scale: 1.07, rotate: -3 }}
                    transition={{
                      duration: 0.45,
                      ease: 'easeOut',
                    }}
                  >
                    {project.icon}
                  </motion.div>

                  <span className="absolute bottom-5 right-4 text-xs font-semibold text-white/80">
                    {String(project.id).padStart(2, '0')}
                    <span className="ml-1 text-cyan-300">
                      / {String(projects.length).padStart(2, '0')}
                    </span>
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-500 group-hover:text-cyan-700 dark:text-slate-100 dark:group-hover:text-cyan-300">
                    {projectText.title}
                  </h3>

                  <p className="mb-5 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {projectText.description}
                  </p>

                  <div className="mb-5 rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-[#0A192F]/50">
                    <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      <FaCheckCircle className="text-cyan-600 dark:text-cyan-400" />
                      {text.featuresTitle}
                    </p>

                    <div className="grid grid-cols-1 gap-2">
                      {projectText.features.slice(0, 4).map(
                        (feature, featureIndex) => (
                          <div
                            key={feature}
                            className="flex items-start gap-2 text-xs leading-5 text-slate-600 dark:text-slate-300"
                          >
                            <span className="mt-1 shrink-0 text-cyan-600 dark:text-cyan-400">
                              {
                                featureIcons[
                                  featureIndex % featureIcons.length
                                ]
                              }
                            </span>
                            <span>{feature}</span>
                          </div>
                        )
                      )}
                    </div>

                    {projectText.features.length > 4 && (
                      <p className="mt-2 text-xs font-medium text-cyan-700 dark:text-cyan-300">
                        + {projectText.features.length - 4}{' '}
                        {text.otherModules}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      {text.technologies}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-cyan-600/15 bg-cyan-50 px-2.5 py-1.5 text-xs font-medium text-cyan-900 transition-colors duration-500 group-hover:border-cyan-600/25 dark:border-cyan-300/15 dark:bg-cyan-400/5 dark:text-cyan-200"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex items-center gap-3 border-t border-slate-200 pt-4 dark:border-slate-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${text.githubLabel} ${projectText.title} sur GitHub`}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-500 hover:-translate-y-0.5 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-slate-600 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300"
                    >
                      <FaGithub className="text-base" />
                      GitHub
                    </a>

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${text.demoLabel} ${projectText.title}`}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-2.5 text-sm font-bold text-white transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                      >
                        {text.viewProject}
                        <FaExternalLinkAlt className="text-xs transition-transform duration-500 group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-300">
                        <FaCode />
                        {text.sourceCode}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 text-center text-xs leading-6 text-slate-500 dark:text-slate-500"
        >
          {text.footer}
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;
