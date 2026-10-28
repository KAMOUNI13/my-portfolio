
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaGraduationCap,
  FaArrowRight,
  FaEnvelope,
  FaCode,
  FaShieldAlt,
  FaDatabase,
  FaCheckCircle,
  FaLaptopCode,
  FaTools,
  FaNetworkWired,
  FaFileAlt,
} from 'react-icons/fa';

const translations = {
  fr: {
    eyebrow: 'MON PARCOURS',
    title: 'À propos de moi',
    subtitle:
      'Développement web, support informatique et sécurité numérique : un parcours qui associe technologie, données et résolution de problèmes.',
    introLabel: 'Qui suis-je ?',
    intro1:
      'Je suis Technicien Spécialisé en Développement Digital, option Web Full Stack, diplômé de l’OFPPT. Mon parcours comprend également une expérience en laboratoire et un stage en support informatique.',
    intro2:
      'Actuellement en Master 2 d’excellence en Droit et Sécurité Numérique à l’Université Hassan Ier de Settat, je m’intéresse au développement web, au traitement des données et à la sécurité des systèmes numériques.',
    introHighlight:
      'Mon objectif est de concevoir des applications web utiles, de développer mes compétences Full Stack et de contribuer à la résolution de problèmes techniques concrets.',
    contact: 'Me contacter',
    experienceLabel: 'EXPÉRIENCE',
    experienceTitle: 'Expériences professionnelles',
    educationLabel: 'ÉTUDES',
    educationTitle: 'Formation académique',
    skillsLabel: 'COMPÉTENCES',
    skillsTitle: 'Mes domaines',
    labRole: 'Agent de laboratoire',
    labCompany: 'KHARROUBA COPPER MINING (KCM)',
    labPlace: 'El Kelâa des Sraghna, Maroc',
    labPeriod: 'Juil. 2025 – Août 2026',
    labDescription:
      'Collecte, saisie et traitement des données liées aux analyses du cuivre, avec préparation de rapports numériques et organisation des informations du laboratoire.',
    labPoints: [
      'Utilisation d’un logiciel associé à la spectrométrie d’absorption atomique',
      'Élaboration de rapports numériques et gestion structurée des informations',
      'Saisie et traitement des données avec Microsoft Word et Excel',
      'Respect des procédures et attention aux détails',
    ],
    supportRole: 'Stagiaire — Support informatique',
    supportCompany: 'Société Régionale Multiservices (SRM)',
    supportPlace: 'Casablanca-Settat, Maroc',
    supportPeriod: 'Avr. 2024 – Mai 2024',
    supportDescription:
      'Participation aux activités d’assistance aux utilisateurs et de résolution de problèmes informatiques.',
    supportPoints: [
      'Assistance aux utilisateurs et support technique',
      'Diagnostic de problèmes de connexion Internet',
      'Résolution d’erreurs logicielles',
      'Identification de problèmes matériels et logiciels',
    ],
    current: 'En cours',
    degree: 'Diplôme obtenu',
    master: 'Master 2 d’excellence — Droit et Sécurité Numérique',
    masterSchool: 'FSJP · Université Hassan Ier de Settat',
    masterDescription:
      'Formation universitaire spécialisée dans les enjeux juridiques et sécuritaires du numérique.',
    masterPoints: [
      'Droit du numérique et confiance numérique',
      'Cybersécurité et cybercriminalité',
      'Protection des données personnelles',
    ],
    licence: 'Licence d’excellence — Droit et Sécurité Numérique',
    licenceSchool: 'FSJP · Université Hassan Ier de Settat',
    diploma: 'Technicien Spécialisé en Développement Digital',
    diplomaSchool: 'OFPPT · Settat · Option Web Full Stack',
    bac: 'Baccalauréat — Sciences physiques',
    bacSchool: 'Lycée Allal Ben Abdellah',
    educationDescription: 'Formation académique et professionnelle.',
    webTitle: 'Développement Web Full Stack',
    webDescription:
      'Développement d’interfaces avec HTML, CSS, JavaScript et React, et création de fonctionnalités backend avec PHP et Laravel, avec utilisation de bases de données.',
    supportTitle: 'Support informatique',
    supportDescription:
      'Assistance aux utilisateurs, diagnostic et résolution de problèmes informatiques.',
    dataTitle: 'Données et bases de données',
    dataDescription:
      'Traitement de données numériques et utilisation de bases de données relationnelles et NoSQL.',
    securityTitle: 'Droit et sécurité numérique',
    securityDescription:
      'Formation en droit du numérique et intérêt pour la cybersécurité, la protection des données et le cadre juridique du numérique.',
    techTitle: 'Technologies et outils',
    methodsTitle: 'Méthodes et outils de développement',
    officeTitle: 'Bureautique',
    languagesTitle: 'Langues',
    arabic: 'Arabe',
    native: 'Langue maternelle',
    french: 'Français',
    fluent: 'Courant',
    english: 'Anglais',
    basic: 'Notions de base',
    strengthsTitle: 'Qualités professionnelles',
    strengths: [
      'Communication',
      'Travail en équipe',
      'Adaptation',
      'Résolution de problèmes',
    ],
    interestsTitle: 'Domaines d’intérêt',
    interests:
      'Développement de sites et applications web · Full Stack · Bases de données · Traitement des données · Sécurité numérique · Support informatique',
    closingTitle: 'Prêt à relever de nouveaux défis.',
    closingDescription:
      'Je souhaite continuer à développer mes compétences et contribuer à des projets utiles en développement web et support informatique.',
  },

  en: {
    eyebrow: 'MY JOURNEY',
    title: 'About me',
    subtitle:
      'Web development, IT support and digital security: a background combining technology, data and problem-solving.',
    introLabel: 'Who am I?',
    intro1:
      'I am a Specialized Technician in Digital Development, focused on Full Stack Web Development, graduated from OFPPT. My background also includes laboratory experience and an IT support internship.',
    intro2:
      'I am currently pursuing a Master 2 Excellence in Digital Law and Security at Hassan I University in Settat. My interests include web development, data processing and digital systems security.',
    introHighlight:
      'My goal is to build useful web applications, strengthen my Full Stack skills, and help solve practical technical problems.',
    contact: 'Contact me',
    experienceLabel: 'EXPERIENCE',
    experienceTitle: 'Professional experience',
    labRole: 'Laboratory Agent',
    labCompany: 'KHARROUBA COPPER MINING (KCM)',
    labPlace: 'El Kelâa des Sraghna, Morocco',
    labPeriod: 'Jul. 2025 – Aug. 2026',
    labDescription:
      'Collection, entry and processing of data related to copper analyses, including digital reports and organized laboratory information.',
    labPoints: [
      'Use of software associated with atomic absorption spectrometry',
      'Preparation of digital reports and structured information management',
      'Data entry and processing using Microsoft Word and Excel',
      'Following procedures and paying attention to detail',
    ],
    supportRole: 'IT Support Intern',
    supportCompany: 'Société Régionale Multiservices (SRM)',
    supportPlace: 'Casablanca-Settat, Morocco',
    supportPeriod: 'Apr. 2024 – May 2024',
    supportDescription:
      'Participation in user assistance and IT troubleshooting activities.',
    supportPoints: [
      'User assistance and technical support',
      'Diagnosing Internet connection problems',
      'Troubleshooting software errors',
      'Identifying hardware and software issues',
    ],
    educationLabel: 'EDUCATION',
    educationTitle: 'Academic background',
    skillsLabel: 'SKILLS',
    skillsTitle: 'My areas',
    current: 'In progress',
    degree: 'Degree obtained',
    master: 'Master 2 Excellence — Digital Law and Security',
    masterSchool: 'FSJP · Hassan I University of Settat',
    masterDescription:
      'University studies focused on legal and security challenges in the digital world.',
    masterPoints: [
      'Digital law and digital trust',
      'Cybersecurity and cybercrime',
      'Personal data protection',
    ],
    licence: 'Excellence Licence — Digital Law and Security',
    licenceSchool: 'FSJP · Hassan I University of Settat',
    diploma: 'Specialized Technician in Digital Development',
    diplomaSchool: 'OFPPT · Settat · Full Stack Web option',
    bac: 'Baccalaureate — Physical Sciences',
    bacSchool: 'Lycée Allal Ben Abdellah',
    educationDescription: 'Academic and vocational education.',
    webTitle: 'Full Stack Web Development',
    webDescription:
      'Building interfaces with HTML, CSS, JavaScript and React, and developing backend features with PHP and Laravel using databases.',
    supportTitle: 'IT Support',
    supportDescription:
      'User assistance, diagnostics and troubleshooting.',
    dataTitle: 'Data and databases',
    dataDescription:
      'Digital data processing and use of relational and NoSQL databases.',
    securityTitle: 'Digital law and security',
    securityDescription:
      'Education in digital law and an interest in cybersecurity, data protection and digital regulation.',
    techTitle: 'Technologies and tools',
    methodsTitle: 'Development methods and tools',
    officeTitle: 'Office tools',
    languagesTitle: 'Languages',
    arabic: 'Arabic',
    native: 'Native',
    french: 'French',
    fluent: 'Fluent',
    english: 'English',
    basic: 'Basic',
    strengthsTitle: 'Professional strengths',
    strengths: [
      'Communication',
      'Teamwork',
      'Adaptability',
      'Problem-solving',
    ],
    interestsTitle: 'Areas of interest',
    interests:
      'Websites and applications · Full Stack · Databases · Data processing · Digital security · IT support',
    closingTitle: 'Ready for new challenges.',
    closingDescription:
      'I want to keep developing my skills and contribute to useful web development and IT support projects.',
  },
};

const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ eyebrow, title, icon }) => (
  <div className="mb-7 flex items-center gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-xl text-sky-700 transition duration-300 dark:text-cyan-300">
      {icon}
    </div>
    <div>
      <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-sky-700 dark:text-cyan-400">
        {eyebrow}
      </p>
      <h3 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
        {title}
      </h3>
    </div>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="mt-4 space-y-2.5">
    {items.map((item) => (
      <li
        key={item}
        className="flex items-start gap-2.5 text-sm leading-6 text-slate-600 dark:text-slate-300"
      >
        <FaCheckCircle className="mt-1 shrink-0 text-emerald-500" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ExperienceCard = ({
  icon,
  title,
  company,
  place,
  period,
  description,
  points,
  delay = 0,
}) => (
  <Reveal delay={delay}>
    <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-md shadow-sky-950/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/70 hover:shadow-xl hover:shadow-sky-900/10 dark:border-slate-700/80 dark:bg-[#10243B]/80 dark:hover:border-cyan-400/40 dark:hover:shadow-cyan-950/20 sm:p-7">
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sky-400/10 transition-transform duration-500 group-hover:scale-150 dark:bg-cyan-400/5" />
      <div className="relative">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-xl text-sky-700 transition duration-300 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white dark:text-cyan-300 dark:group-hover:bg-cyan-400 dark:group-hover:text-[#0A192F]">
              {icon}
            </div>
            <div className="min-w-0">
              <h4 className="text-lg font-extrabold leading-6 text-slate-900 transition-colors group-hover:text-sky-700 dark:text-white dark:group-hover:text-cyan-300">
                {title}
              </h4>
              <p className="mt-2 text-sm font-semibold leading-5 text-sky-700 dark:text-cyan-300">
                {company}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {place}
              </p>
            </div>
          </div>
        </div>

        <span className="inline-flex rounded-full border border-sky-500/15 bg-sky-500/10 px-3 py-1.5 text-xs font-bold text-sky-800 dark:text-cyan-200">
          {period}
        </span>

        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>

        <BulletList items={points} />
      </div>
    </article>
  </Reveal>
);

const LanguageBar = ({ name, level, percent, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.45, delay }}
    className="mb-6 last:mb-0"
  >
    <div className="mb-2.5 flex items-center justify-between gap-3">
      <span className="font-bold text-slate-800 dark:text-white">
        {name}
      </span>
      <span className="rounded-full bg-sky-500/10 px-3 py-1.5 text-xs font-semibold text-sky-800 dark:text-cyan-200">
        {level}
      </span>
    </div>

    <div
      className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700/80"
      role="progressbar"
      aria-label={`${name} — ${level}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 1.15,
          delay: delay + 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative h-full rounded-full bg-gradient-to-r from-[#008ED6] via-[#00A3FF] to-cyan-400"
      >
        <span className="absolute inset-0 rounded-full bg-white/20" />
      </motion.div>
    </div>
  </motion.div>
);

const About = () => {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'fr';
    } catch {
      return 'fr';
    }
  });

  useEffect(() => {
    const handleLanguageChange = (event) => {
      const selected =
        typeof event.detail === 'string'
          ? event.detail
          : event.detail?.language;

      if (selected === 'fr' || selected === 'en') {
        setLanguage(selected);
      } else {
        try {
          setLanguage(
            localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'fr'
          );
        } catch {
          setLanguage('fr');
        }
      }
    };

    window.addEventListener('portfolio-language-change', handleLanguageChange);

    return () => {
      window.removeEventListener(
        'portfolio-language-change',
        handleLanguageChange
      );
    };
  }, []);

  const t = translations[language] || translations.fr;

  const education = [
    {
      title: t.master,
      school: t.masterSchool,
      period: language === 'fr' ? '2025 – En cours' : '2025 – Present',
      description: t.masterDescription,
      points: t.masterPoints,
      icon: <FaShieldAlt />,
    },
    {
      title: t.licence,
      school: t.licenceSchool,
      period: '2024 – 2025',
      description: t.educationDescription,
      points: [],
      icon: <FaGraduationCap />,
    },
    {
      title: t.diploma,
      school: t.diplomaSchool,
      period: '2022 – 2024',
      description: t.educationDescription,
      points:
        language === 'fr'
          ? [
              'HTML · CSS · JavaScript · React',
              'PHP · Laravel · MySQL · MongoDB',
              'Git · GitHub · UML · Méthodes Agile',
            ]
          : [
              'HTML · CSS · JavaScript · React',
              'PHP · Laravel · MySQL · MongoDB',
              'Git · GitHub · UML · Agile Methods',
            ],
      icon: <FaLaptopCode />,
    },
    {
      title: t.bac,
      school: t.bacSchool,
      period: '2021 – 2022',
      description: t.educationDescription,
      points: [],
      icon: <FaGraduationCap />,
    },
  ];

  const domains = [
    {
      icon: <FaLaptopCode />,
      title: t.webTitle,
      description: t.webDescription,
    },
    {
      icon: <FaTools />,
      title: t.supportTitle,
      description: t.supportDescription,
    },
    {
      icon: <FaDatabase />,
      title: t.dataTitle,
      description: t.dataDescription,
    },
    {
      icon: <FaShieldAlt />,
      title: t.securityTitle,
      description: t.securityDescription,
    },
  ];

  const skillGroups = [
    {
      title: t.techTitle,
      icon: <FaCode />,
      skills: [
        'React',
        'JavaScript',
        'HTML',
        'CSS',
        'Bootstrap',
        'PHP',
        'Laravel',
        'Python',
      ],
    },
    {
      title: language === 'fr' ? 'Bases de données' : 'Databases',
      icon: <FaDatabase />,
      skills: ['MySQL', 'MongoDB'],
    },
    {
      title: t.methodsTitle,
      icon: <FaNetworkWired />,
      skills: ['Agile / Scrum', 'UML', 'Git', 'GitHub'],
    },
    {
      title: t.officeTitle,
      icon: <FaFileAlt />,
      skills: ['Word', 'Excel', 'PowerPoint'],
    },
  ];

  const languageLevels = [
    { name: t.arabic, level: t.native, percent: 100 },
    { name: t.french, level: t.fluent, percent: 75 },
    { name: t.english, level: t.basic, percent: 35 },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative isolate scroll-mt-16 overflow-hidden bg-gradient-to-b from-white via-[#F4FAFF] to-[#E8F4F8] py-24 text-slate-800 transition-colors duration-500 dark:from-[#0A192F] dark:via-[#0B1E35] dark:to-[#0D2544] dark:text-white sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl dark:bg-cyan-400/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-24 -z-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/10"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Intro */}
        <Reveal className="mx-auto mb-16 max-w-4xl text-center sm:mb-20">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-700 shadow-sm dark:bg-slate-900/40 dark:text-cyan-300">
            <FaCode />
            {t.eyebrow}
          </span>

          <h2
            id="about-title"
            className="mb-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {t.title}
            <span className="mt-2 block bg-gradient-to-r from-[#008ED6] via-[#00A3FF] to-sky-400 bg-clip-text pb-2 text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-blue-500">
              KAMOUNI MOHAMED
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {t.subtitle}
          </p>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-cyan-300" />
        </Reveal>

        {/* Profile */}
        <Reveal className="mb-20">
          <div className="group relative overflow-hidden rounded-3xl border border-sky-200/70 bg-white/80 p-6 shadow-xl shadow-sky-950/[0.04] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/60 hover:shadow-2xl hover:shadow-sky-900/10 dark:border-white/10 dark:bg-[#10243B]/75 dark:hover:border-cyan-400/30 sm:p-9 lg:p-11">
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-sky-400 via-cyan-400 to-blue-500" />

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-700 dark:text-cyan-300">
                  {t.introLabel}
                </p>
                <p className="text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                  {t.intro1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                  {t.intro2}
                </p>
                <p className="mt-5 border-l-2 border-sky-400 pl-4 text-base font-semibold leading-7 text-slate-800 dark:text-cyan-200 sm:text-lg">
                  {t.introHighlight}
                </p>
              </div>

              <a
                href="#contact"
                className="group/button inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-xl bg-gradient-to-r from-[#008ED6] to-[#00A3FF] px-6 py-3.5 font-semibold text-white shadow-lg shadow-sky-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 dark:focus:ring-offset-[#10243B]"
              >
                {t.contact}
                <FaArrowRight className="transition-transform duration-300 group-hover/button:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Experience */}
        <div className="mb-24">
          <Reveal>
            <SectionHeading
              eyebrow={t.experienceLabel}
              title={t.experienceTitle}
              icon={<FaBriefcase />}
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ExperienceCard
              icon={<FaDatabase />}
              title={t.labRole}
              company={t.labCompany}
              place={t.labPlace}
              period={t.labPeriod}
              description={t.labDescription}
              points={t.labPoints}
              delay={0.05}
            />

            <ExperienceCard
              icon={<FaTools />}
              title={t.supportRole}
              company={t.supportCompany}
              place={t.supportPlace}
              period={t.supportPeriod}
              description={t.supportDescription}
              points={t.supportPoints}
              delay={0.12}
            />
          </div>
        </div>

        {/* Education */}
        <div className="mb-24">
          <Reveal>
            <SectionHeading
              eyebrow={t.educationLabel}
              title={t.educationTitle}
              icon={<FaGraduationCap />}
            />
          </Reveal>

          <div className="relative space-y-5 pl-5 before:absolute before:bottom-8 before:left-[9px] before:top-5 before:w-px before:bg-gradient-to-b before:from-sky-400 before:via-cyan-400/50 before:to-transparent">
            {education.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="group relative rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-md shadow-sky-950/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/70 hover:shadow-xl hover:shadow-sky-900/[0.08] dark:border-slate-700/80 dark:bg-[#10243B]/75 dark:hover:border-cyan-400/40 sm:p-6">
                  <span className="absolute -left-[25px] top-7 flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#F4FAFF] bg-sky-500 dark:border-[#0B1E35] dark:bg-cyan-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-white dark:bg-[#0A192F]" />
                  </span>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-xl text-sky-700 transition duration-300 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white dark:text-cyan-300 dark:group-hover:bg-cyan-400 dark:group-hover:text-[#0A192F]">
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="mb-2 inline-block rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {item.period}
                      </span>
                      <h4 className="text-base font-extrabold leading-6 text-slate-900 transition-colors group-hover:text-sky-700 dark:text-white dark:group-hover:text-cyan-300 sm:text-lg">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm font-medium text-sky-700 dark:text-cyan-300">
                        {item.school}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>

                      {item.points.length > 0 && (
                        <div className="mt-3 border-t border-slate-200/80 pt-1 dark:border-slate-700/70">
                          <BulletList items={item.points} />
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Areas of expertise */}
        <div className="mb-24">
          <Reveal>
            <SectionHeading
              eyebrow={t.skillsLabel}
              title={t.skillsTitle}
              icon={<FaCode />}
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {domains.map((domain, index) => (
              <Reveal key={domain.title} delay={index * 0.07}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white/75 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/70 hover:bg-white hover:shadow-2xl hover:shadow-sky-900/10 dark:border-slate-700/80 dark:bg-[#10243B]/70 dark:hover:border-cyan-400/40 dark:hover:bg-[#122A45] sm:p-7">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-400/10 transition-transform duration-500 group-hover:scale-150 dark:bg-cyan-400/5" />

                  <div className="relative">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-2xl text-sky-700 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-cyan-400 group-hover:text-white dark:text-cyan-300">
                      {domain.icon}
                    </div>
                    <h4 className="mb-3 text-lg font-extrabold text-slate-900 transition-colors group-hover:text-sky-700 dark:text-white dark:group-hover:text-cyan-300">
                      {domain.title}
                    </h4>
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {domain.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Technical skills */}
        <div className="mb-24">
          <Reveal>
            <SectionHeading
              eyebrow={t.skillsLabel}
              title={t.techTitle}
              icon={<FaCode />}
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.06}>
                <article className="group h-full rounded-2xl border border-slate-200/80 bg-white/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/70 hover:shadow-xl hover:shadow-sky-900/[0.07] dark:border-slate-700/80 dark:bg-[#10243B]/70 dark:hover:border-cyan-400/40 sm:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-lg text-sky-700 dark:text-cyan-300">
                      {group.icon}
                    </div>
                    <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                      {group.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-sky-200/80 bg-sky-50 px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-100 hover:text-sky-800 dark:border-slate-600/70 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Languages and strengths */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:border-sky-400/60 hover:shadow-xl dark:border-slate-700/80 dark:bg-[#10243B]/70 sm:p-7">
              <SectionHeading
                eyebrow={t.eyebrow}
                title={t.languagesTitle}
                icon={<FaNetworkWired />}
              />

              <div className="mt-2">
                {languageLevels.map((item, index) => (
                  <LanguageBar
                    key={item.name}
                    name={item.name}
                    level={item.level}
                    percent={item.percent}
                    delay={index * 0.15}
                  />
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="h-full rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:border-sky-400/60 hover:shadow-xl dark:border-slate-700/80 dark:bg-[#10243B]/70 sm:p-7">
              <SectionHeading
                eyebrow={t.eyebrow}
                title={t.strengthsTitle}
                icon={<FaCheckCircle />}
              />

              <div className="flex flex-wrap gap-3">
                {t.strengths.map((strength) => (
                  <span
                    key={strength}
                    className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-emerald-500/10 dark:text-slate-200"
                  >
                    <FaCheckCircle className="text-emerald-500" />
                    {strength}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-700">
                <h4 className="mb-3 font-extrabold text-slate-900 dark:text-white">
                  {t.interestsTitle}
                </h4>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {t.interests}
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Closing banner */}
        <Reveal className="mt-20 sm:mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-sky-400/20 bg-gradient-to-r from-[#E3F4FF] via-white to-[#E8F4F8] p-7 shadow-xl shadow-sky-950/[0.04] dark:from-[#10243B] dark:via-[#0D2544] dark:to-[#102C49] sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-20 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl"
            />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  {t.closingTitle}
                </h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {t.closingDescription}
                </p>
              </div>

              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#008ED6] to-[#00A3FF] px-6 py-3.5 font-bold text-white shadow-lg shadow-sky-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 dark:focus:ring-offset-[#10243B]"
              >
                {t.contact}
                <FaEnvelope className="transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
