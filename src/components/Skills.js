
import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel,
  FaPython, FaCode, FaBrain, FaSitemap, FaDatabase,
  FaGitAlt, FaSearch, FaArrowRight, FaLayerGroup,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMysql, SiMongodb, SiGithub, SiNpm,
} from 'react-icons/si';

const skillsData = [
  { id: 'html', name: 'HTML5', category: 'frontend', icon: FaHtml5, color: '#F97316', tag: 'Web' },
  { id: 'css', name: 'CSS3', category: 'frontend', icon: FaCss3Alt, color: '#38BDF8', tag: 'Web' },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', icon: FaJs, color: '#FACC15', tag: 'Language' },
  { id: 'react', name: 'React', category: 'frontend', icon: FaReact, color: '#22D3EE', tag: 'Library' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', icon: SiTailwindcss, color: '#06B6D4', tag: 'CSS' },
  { id: 'php', name: 'PHP', category: 'backend', icon: FaPhp, color: '#A5B4FC', tag: 'Language' },
  { id: 'laravel', name: 'Laravel', category: 'backend', icon: FaLaravel, color: '#F87171', tag: 'Framework' },
  { id: 'oop', name: 'Programmation orientée objet', category: 'backend', icon: FaCode, color: '#67E8F9', tag: 'Concept' },
  { id: 'python', name: 'Python', category: 'backend', icon: FaPython, color: '#93C5FD', tag: 'Bases', learning: true },
  { id: 'sql', name: 'SQL', category: 'database', icon: FaDatabase, color: '#60A5FA', tag: 'Query' },
  { id: 'mysql', name: 'MySQL', category: 'database', icon: SiMysql, color: '#38BDF8', tag: 'Relational' },
  { id: 'mongodb', name: 'MongoDB', category: 'database', icon: SiMongodb, color: '#4ADE80', tag: 'NoSQL' },
  { id: 'algorithmique', name: 'Algorithmique', category: 'conception', icon: FaBrain, color: '#C4B5FD', tag: 'Logique' },
  { id: 'uml', name: 'UML', category: 'conception', icon: FaSitemap, color: '#67E8F9', tag: 'Modélisation' },
  { id: 'merise', name: 'Merise', category: 'conception', icon: FaLayerGroup, color: '#93C5FD', tag: 'Modélisation' },
  { id: 'git', name: 'Git', category: 'tools', icon: FaGitAlt, color: '#FB923C', tag: 'Versioning' },
  { id: 'github', name: 'GitHub', category: 'tools', icon: SiGithub, color: '#64748B', darkColor: '#E2E8F0', tag: 'Repository' },
  { id: 'npm', name: 'npm', category: 'tools', icon: SiNpm, color: '#DC2626', tag: 'Packages' },
];

const translations = {
  fr: {
    eyebrow: 'MON SAVOIR-FAIRE',
    heading: 'Compétences',
    headingAccent: 'techniques',
    intro: 'Les technologies et les concepts étudiés dans mon parcours en développement web Full Stack.',
    all: 'Toutes',
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Bases de données',
    conception: 'Conception',
    tools: 'Outils',
    search: 'Rechercher une compétence...',
    technologies: 'technologies',
    domains: 'domaines',
    learning: 'Notions de base',
    empty: 'Aucune compétence trouvée.',
    emptyHint: 'Essaie un autre mot-clé ou une autre catégorie.',
    footerTitle: 'Toujours apprendre.',
    footerText: 'Je continue à développer mes compétences à travers la pratique et la réalisation de projets.',
    button: 'Découvrir mes projets',
    descriptions: {
      html: 'Structure des pages web et HTML sémantique.',
      css: 'Mise en page, Flexbox, Grid et styles visuels.',
      javascript: 'Variables, fonctions, événements et logique interactive.',
      react: 'Composants, props, state et Hooks.',
      tailwind: 'Création d’interfaces avec des classes utilitaires.',
      php: 'Programmation côté serveur et traitement des données.',
      laravel: 'Routes, contrôleurs, modèles et opérations CRUD.',
      oop: 'Classes, objets, encapsulation et principes fondamentaux.',
      python: 'Syntaxe de base, variables, conditions et boucles.',
      sql: 'Requêtes SQL et manipulation des données.',
      mysql: 'Gestion de bases de données relationnelles.',
      mongodb: 'Bases de données NoSQL et documents.',
      algorithmique: 'Variables, conditions, boucles et fonctions.',
      uml: 'Modélisation et représentation des systèmes.',
      merise: 'Modélisation des données et conception des bases.',
      git: 'Suivi des modifications et gestion des versions.',
      github: 'Hébergement de dépôts et partage de code.',
      npm: 'Gestion des dépendances et des scripts JavaScript.',
    },
  },
  en: {
    eyebrow: 'WHAT I WORK WITH',
    heading: 'Technical',
    headingAccent: 'Skills',
    intro: 'Technologies and concepts studied throughout my Full Stack web development journey.',
    all: 'All skills',
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Databases',
    conception: 'Design & Logic',
    tools: 'Tools',
    search: 'Search for a skill...',
    technologies: 'technologies',
    domains: 'skill areas',
    learning: 'Basic knowledge',
    empty: 'No skills found.',
    emptyHint: 'Try another keyword or category.',
    footerTitle: 'Always learning.',
    footerText: 'I keep improving my skills through hands-on practice and building projects.',
    button: 'Explore my projects',
    descriptions: {
      html: 'Web page structure and semantic HTML.',
      css: 'Layouts, Flexbox, Grid and visual styling.',
      javascript: 'Variables, functions, events and interactive logic.',
      react: 'Components, props, state and Hooks.',
      tailwind: 'Building interfaces with utility-first CSS classes.',
      php: 'Server-side programming and data processing.',
      laravel: 'Routes, controllers, models and CRUD operations.',
      oop: 'Classes, objects, encapsulation and core principles.',
      python: 'Basic syntax, variables, conditions and loops.',
      sql: 'SQL queries and data manipulation.',
      mysql: 'Relational database management.',
      mongodb: 'NoSQL databases and document storage.',
      algorithmique: 'Variables, conditions, loops and functions.',
      uml: 'System modelling and visual representation.',
      merise: 'Data modelling and database design.',
      git: 'Change tracking and version control.',
      github: 'Repository hosting and code sharing.',
      npm: 'Managing JavaScript dependencies and scripts.',
    },
  },
};

const categoryKeys = ['all', 'frontend', 'backend', 'database', 'conception', 'tools'];

function readTheme() {
  if (typeof document === 'undefined') return false;
  return document.documentElement.classList.contains('dark');
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'fr';
    } catch {
      return 'fr';
    }
  });
  const [isDark, setIsDark] = useState(readTheme);

  useEffect(() => {
    const updateLanguage = () => {
      try {
        setLanguage(localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'fr');
      } catch {
        setLanguage('fr');
      }
    };

    const updateTheme = () => setIsDark(readTheme());

    window.addEventListener('portfolio-language-change', updateLanguage);
    window.addEventListener('portfolio-theme-change', updateTheme);

    // Detect changes to the root "dark" class, even if Navbar doesn't dispatch an event.
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    updateTheme();

    return () => {
      window.removeEventListener('portfolio-language-change', updateLanguage);
      window.removeEventListener('portfolio-theme-change', updateTheme);
      observer.disconnect();
    };
  }, []);

  const t = translations[language];

  const filteredSkills = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return skillsData.filter((skill) => {
      const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
      const description = t.descriptions[skill.id] || '';

      const matchesSearch =
        !query ||
        skill.name.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query) ||
        skill.tag.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, t]);

  const categoryCounts = useMemo(
    () =>
      skillsData.reduce(
        (counts, skill) => {
          counts[skill.category] = (counts[skill.category] || 0) + 1;
          return counts;
        },
        { all: skillsData.length }
      ),
    []
  );

  return (
    <section
      id="skills"
      className={`relative isolate overflow-hidden py-24 transition-colors duration-500 sm:py-28 ${
        isDark
          ? 'bg-[#071426] text-white'
          : 'bg-[#E8F4F8] text-[#1E293B]'
      }`}
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className={`absolute -left-32 top-10 h-80 w-80 rounded-full blur-[110px] ${isDark ? 'bg-blue-600/20' : 'bg-blue-400/25'}`} />
        <div className={`absolute -right-32 top-1/3 h-96 w-96 rounded-full blur-[120px] ${isDark ? 'bg-cyan-400/15' : 'bg-cyan-300/30'}`} />
        <div className={`absolute bottom-0 left-1/3 h-72 w-72 rounded-full blur-[100px] ${isDark ? 'bg-indigo-500/15' : 'bg-sky-300/25'}`} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 ${
            isDark ? 'border-cyan-400/20 bg-cyan-400/[0.07]' : 'border-cyan-600/20 bg-white/70 shadow-sm'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>
              {t.eyebrow}
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t.heading}{' '}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
              {t.headingAccent}
            </span>
          </h2>

          <p className={`mx-auto mt-6 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.intro}
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 88 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 h-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300"
          />
        </motion.header>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { number: skillsData.length, label: t.technologies, icon: <FaCode />, color: 'text-blue-500', bg: 'bg-blue-500/10' },
            { number: categoryKeys.length - 1, label: t.domains, icon: <FaLayerGroup />, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
            { number: skillsData.filter((skill) => skill.learning).length, label: t.learning, icon: <FaBrain />, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.015 }}
              className={`flex items-center gap-4 rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:shadow-lg ${
                isDark
                  ? 'border-white/[0.08] bg-white/[0.035] hover:border-cyan-400/30 hover:shadow-cyan-950/20'
                  : 'border-white bg-white/80 shadow-slate-300/30 hover:border-cyan-300 hover:shadow-cyan-900/10'
              }`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${stat.bg} ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>{stat.number}</p>
                <p className={`mt-1 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category filters */}
        <div className="mb-7 flex flex-wrap justify-center gap-2.5">
          {categoryKeys.map((key) => {
            const selected = activeCategory === key;

            return (
              <motion.button
                key={key}
                type="button"
                onClick={() => setActiveCategory(key)}
                whileHover={{ y: -3, scale: 1.035 }}
                whileTap={{ scale: 0.95 }}
                aria-pressed={selected}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  selected
                    ? 'border-cyan-400/50 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                    : isDark
                      ? 'border-white/10 bg-white/[0.035] text-slate-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-200'
                      : 'border-slate-300 bg-white/80 text-slate-600 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-800'
                }`}
              >
                {t[key]}
                <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  selected ? 'bg-white/20 text-white' : isDark ? 'bg-white/[0.08]' : 'bg-slate-100'
                }`}>
                  {categoryCounts[key] || 0}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Search */}
        <div className="mx-auto mb-10 max-w-md">
          <label className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 transition-all duration-300 focus-within:border-cyan-400 focus-within:ring-4 focus-within:ring-cyan-400/10 ${
            isDark
              ? 'border-white/10 bg-[#0C1C31]/80'
              : 'border-slate-200 bg-white/90 shadow-sm'
          }`}>
            <FaSearch className={`shrink-0 text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={t.search}
              aria-label={t.search}
              className={`w-full bg-transparent text-sm outline-none ${
                isDark
                  ? 'text-white placeholder:text-slate-500'
                  : 'text-slate-800 placeholder:text-slate-400'
              }`}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="rounded-full px-2 py-1 text-xs text-slate-400 transition-colors hover:bg-cyan-400/10 hover:text-cyan-500"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </label>
        </div>

        {/* Skill cards */}
        <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.article
                  layout
                  key={skill.id}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.32, delay: Math.min(index * 0.035, 0.18) }}
                  whileHover={{
                    y: -9,
                    scale: 1.025,
                    transition: { duration: 0.22, ease: 'easeOut' },
                  }}
                  whileTap={{ scale: 0.985 }}
                  className={`group relative overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-300 sm:p-6 ${
                    isDark
                      ? 'border-white/[0.09] bg-gradient-to-br from-[#102139] to-[#0B192B] shadow-black/10 hover:border-cyan-300/40 hover:shadow-xl hover:shadow-cyan-950/40'
                      : 'border-white bg-white/90 shadow-slate-300/30 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/10'
                  }`}
                >
                  {/* Card hover glow */}
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-25 group-hover:scale-150"
                    style={{ backgroundColor: skill.color }}
                  />

                  {/* Animated top border */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 transition-all duration-500 group-hover:w-full" />

                  <div className="relative flex items-start justify-between gap-3">
                    <motion.div
                      whileHover={{ rotate: [-5, 5, 0], scale: 1.12 }}
                      transition={{ duration: 0.35 }}
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-3xl transition-all duration-300 ${
                        isDark
                          ? 'border-white/[0.08] bg-white/[0.045] group-hover:border-cyan-300/25 group-hover:bg-cyan-300/[0.08]'
                          : 'border-slate-100 bg-slate-50 group-hover:border-cyan-200 group-hover:bg-cyan-50'
                      }`}
                      style={{ color: isDark && skill.darkColor ? skill.darkColor : skill.color }}
                    >
                      <Icon />
                    </motion.div>

                    <span className={`rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-wide transition-colors duration-300 ${
                      isDark
                        ? 'border-white/[0.08] bg-white/[0.035] text-slate-400 group-hover:border-cyan-300/20 group-hover:text-cyan-200'
                        : 'border-slate-200 bg-slate-50 text-slate-500 group-hover:border-cyan-200 group-hover:text-cyan-700'
                    }`}>
                      {skill.tag}
                    </span>
                  </div>

                  <div className="relative mt-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className={`text-lg font-bold leading-snug transition-colors duration-300 ${
                        isDark ? 'text-slate-100 group-hover:text-cyan-200' : 'text-slate-800 group-hover:text-cyan-700'
                      }`}>
                        {skill.name}
                      </h3>

                      {skill.learning && (
                        <span className={`rounded-full border px-2 py-0.5 text-[10px] ${
                          isDark
                            ? 'border-amber-300/20 bg-amber-300/[0.08] text-amber-200'
                            : 'border-amber-200 bg-amber-50 text-amber-700'
                        }`}>
                          {t.learning}
                        </span>
                      )}
                    </div>

                    <p className={`mt-2 min-h-[3rem] text-sm leading-6 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {t.descriptions[skill.id]}
                    </p>
                  </div>

                  <div className={`relative mt-5 flex items-center justify-between border-t pt-4 ${
                    isDark ? 'border-white/[0.07]' : 'border-slate-100'
                  }`}>
                    <span className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
                      isDark ? 'text-slate-500' : 'text-slate-500'
                    }`}>
                      {t[skill.category]}
                    </span>

                    <motion.span
                      whileHover={{ rotate: 0, scale: 1.1 }}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                        isDark
                          ? 'border-white/[0.08] text-slate-500 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10 group-hover:text-cyan-200'
                          : 'border-slate-200 text-slate-400 group-hover:border-cyan-300 group-hover:bg-cyan-50 group-hover:text-cyan-700'
                      }`}
                      aria-hidden="true"
                    >
                      <FaArrowRight className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                    </motion.span>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl border px-5 py-14 text-center ${
              isDark ? 'border-white/[0.08] bg-white/[0.025]' : 'border-slate-200 bg-white/80'
            }`}
          >
            <FaSearch className="mx-auto mb-4 text-3xl text-slate-400" />
            <h3 className={`text-lg font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              {t.empty}
            </h3>
            <p className={`mt-2 text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
              {t.emptyHint}
            </p>
          </motion.div>
        )}

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`relative mt-16 overflow-hidden rounded-3xl border p-7 transition-colors duration-500 sm:mt-20 sm:p-10 ${
            isDark
              ? 'border-cyan-300/15 bg-gradient-to-r from-blue-500/[0.09] via-[#102139] to-cyan-400/[0.07]'
              : 'border-cyan-200 bg-gradient-to-r from-blue-50 via-white to-cyan-50 shadow-lg shadow-cyan-900/5'
          }`}
        >
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                {t.eyebrow}
              </p>
              <h3 className={`text-2xl font-bold sm:text-3xl ${isDark ? 'text-white' : 'text-slate-800'}`}>
                {t.footerTitle}
              </h3>
              <p className={`mt-3 text-sm leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {t.footerText}
              </p>
            </div>

            <motion.a
              href="#projects"
              whileHover={{ y: -4, scale: 1.035 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3.5 text-sm font-semibold text-[#071426] shadow-lg shadow-cyan-900/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              {t.button}
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
