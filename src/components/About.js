
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaGraduationCap,
  FaArrowRight,
  FaEnvelope,
} from 'react-icons/fa';

const experiences = [
  {
    title: 'Analyses du cuivre en laboratoire',
    company: 'Kharrouba',
    period: '1 an',
    category: 'Expérience professionnelle',
    description:
      "Expérience dans un environnement lié à l'exploitation minière, avec participation aux activités d'analyse du cuivre en laboratoire.",
    highlights: [
      'Participation aux analyses du cuivre',
      'Respect des procédures de laboratoire',
      'Rigueur et attention aux détails',
      'Travail dans un environnement professionnel',
    ],
  },
  {
    title: 'Stage en développement web',
    company: 'Stage professionnel',
    period: 'À compléter',
    category: 'Stage',
    description:
      'Mise en pratique des compétences acquises en développement web.',
    highlights: [
      'Développement frontend avec HTML, CSS et JavaScript',
      'Initiation au backend avec PHP et Laravel',
      'Manipulation des bases de données MySQL',
      'Conception d’interfaces web responsives',
    ],
  },
];

const projects = [
  {
    title: 'TaskFlow – Gestion des tâches',
    company: 'Projet personnel',
    period: '2026',
    description:
      'Conception d’une application web de gestion des tâches permettant d’organiser les activités, de suivre leur avancement et de gérer les priorités.',
    highlights: [
      'Interface utilisateur avec React',
      'Gestion des tâches et de leurs statuts',
      'Conception d’une interface responsive',
      'Backend avec Laravel et base de données MySQL',
    ],
  },
  {
    title: 'StockManager – Gestion de stock',
    company: 'Projet personnel',
    period: '2026',
    description:
      'Développement d’une application web destinée à la gestion des produits, au suivi du stock et à l’organisation des mouvements de marchandises.',
    highlights: [
      'Gestion des produits et des catégories',
      'Suivi des entrées et sorties de stock',
      'Développement backend avec PHP et Laravel',
      'Stockage des données avec MySQL',
    ],
  },
];

const education = [
  {
    degree: 'Master 2 en Droit et Sécurité Numérique (DSN)',
    school: 'Formation universitaire',
    period: 'En cours',
    location: 'Maroc',
    description:
      'Formation spécialisée dans les aspects juridiques et sécuritaires du numérique.',
    achievements: [
      'Droit du numérique et réglementation',
      'Cybersécurité et cybercriminalité',
      'Protection des données personnelles',
      'Preuve numérique et droit des technologies',
    ],
  },
  {
    degree: 'Licence',
    school: 'Formation universitaire',
    period: 'Obtenue',
    location: 'Maroc',
    description:
      'Formation universitaire permettant de développer des connaissances académiques et des compétences d’analyse.',
    achievements: [
      'Diplôme de licence obtenu',
    ],
  },
  {
    degree: 'Technicien Spécialisé en Développement Digital',
    school: 'OFPPT – Option Web Full Stack',
    period: '2022 - 2024',
    location: 'Maroc',
    description:
      'Formation professionnelle en conception et développement d’applications web frontend et backend.',
    achievements: [
      'Frontend : HTML, CSS, JavaScript et React',
      'Backend : PHP et Laravel',
      'Bases de données : MySQL et MongoDB',
      'Git, GitHub et méthodes de développement web',
    ],
  },
  {
    degree: 'Baccalauréat',
    school: 'Formation secondaire',
    period: 'À compléter',
    location: 'Maroc',
    description:
      'Formation secondaire préalable aux études supérieures.',
    achievements: [
      'Formation générale et scientifique',
    ],
  },
];

const renderHighlights = (items = []) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li
        key={item}
        className="flex items-start text-sm leading-relaxed text-gray-300 sm:text-base"
      >
        <FaArrowRight className="mr-2 mt-1 flex-shrink-0 text-cyan-400" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const SectionTitle = ({ icon, children }) => (
  <div className="mb-8 flex items-center gap-4">
    <div className="rounded-xl bg-gray-800 p-3">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white">
      {children}
    </h3>
  </div>
);

const InfoCard = ({ item, index, showCategory = false }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
    viewport={{ once: true }}
    className="rounded-xl border border-gray-700/50 bg-gray-800/80 p-5 shadow-lg transition-shadow duration-300 hover:shadow-cyan-900/20 sm:p-6"
  >
    {showCategory && item.category && (
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
        {item.category}
      </p>
    )}

    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h4 className="text-lg font-bold text-white sm:text-xl">
          {item.title}
        </h4>
        <p className="mt-1 font-medium text-cyan-400">
          {item.company}
        </p>
      </div>

      <span className="self-start whitespace-nowrap rounded-full bg-gray-700 px-3 py-1 text-sm text-cyan-300">
        {item.period}
      </span>
    </div>

    <p className="mb-4 leading-relaxed text-gray-300">
      {item.description}
    </p>

    {renderHighlights(item.highlights)}
  </motion.article>
);

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-16 min-h-screen bg-gradient-to-b from-[#0a192f] to-[#0d2544] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Présentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            À propos de moi
          </h2>

          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-gray-700/50 bg-gray-800/50 p-6 text-left backdrop-blur-sm sm:p-8">
            <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
              Je suis titulaire d’un diplôme de Technicien Spécialisé
              en Développement Digital, option Web Full Stack, obtenu
              à l’OFPPT. Je possède des connaissances en développement
              frontend et backend, notamment avec React, PHP, Laravel
              et les bases de données MySQL et MongoDB.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
              Actuellement étudiant en Master 2 en Droit et Sécurité
              Numérique (DSN), je m’intéresse également à la cybersécurité,
              à la protection des données et au droit des technologies
              numériques.
              <span className="font-bold text-cyan-400">
                {' '}Mon objectif est de développer mes compétences
                et de contribuer à des projets informatiques concrets.
              </span>
            </p>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-cyan-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                Me contacter
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Expérience professionnelle et formation */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <SectionTitle
              icon={<FaBriefcase className="text-2xl text-cyan-400" />}
            >
              Expérience professionnelle
            </SectionTitle>

            {experiences.map((item, index) => (
              <InfoCard
                key={item.title}
                item={item}
                index={index}
                showCategory
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <SectionTitle
              icon={<FaGraduationCap className="text-2xl text-cyan-400" />}
            >
              Formation
            </SectionTitle>

            {education.map((item, index) => (
              <InfoCard
                key={item.degree}
                item={{
                  title: item.degree,
                  company: item.school,
                  period: item.period,
                  description: item.description,
                  highlights: item.achievements,
                }}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Projets académiques et personnels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <SectionTitle
            icon={<FaBriefcase className="text-2xl text-cyan-400" />}
          >
            Projets académiques et personnels
          </SectionTitle>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((item, index) => (
              <InfoCard
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
