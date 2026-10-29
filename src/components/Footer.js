
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCode,
  FaLaptopCode,
  FaGlobe
} from 'react-icons/fa';

const translations = {
  fr: {
    badge: 'Restons en contact',
    title: 'Construisons quelque chose',
    titleAccent: 'ensemble.',
    description:
      'Vous avez un projet web, une opportunité professionnelle ou une idée à concrétiser ? Échangeons ensemble.',
    contactButton: 'Me contacter',
    navigation: 'Navigation',
    home: 'Accueil',
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    contact: 'Contact',
    services: 'Ce que je propose',
    web: 'Développement Web',
    fullstack: 'Applications Full Stack',
    digital: 'Solutions numériques',
    findMe: 'Retrouvez-moi',
    location: 'Settat, Maroc',
    email: 'Envoyer un e-mail',
    github: 'Visiter mon GitHub',
    linkedin: 'Visiter mon LinkedIn',
    backToTop: 'Retour en haut',
    role: 'Développeur Full Stack & Support Informatique'
  },
  en: {
    badge: "Let's stay connected",
    title: "Let's build something",
    titleAccent: 'together.',
    description:
      'Have a web project, a professional opportunity, or an idea to bring to life? Let’s talk.',
    contactButton: 'Get in touch',
    navigation: 'Navigation',
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    services: 'What I do',
    web: 'Web Development',
    fullstack: 'Full Stack Applications',
    digital: 'Digital Solutions',
    findMe: 'Find me online',
    location: 'Settat, Morocco',
    email: 'Send an email',
    github: 'Visit my GitHub',
    linkedin: 'Visit my LinkedIn',
    backToTop: 'Back to top',
    rights: 'All rights reserved.',
    made: 'Built with passion by',
    role: 'Full Stack Developer & IT Support'
  }
};

const getSavedLanguage = () => {
  try {
    return localStorage.getItem('portfolio-language') === 'en'
      ? 'en'
      : 'fr';
  } catch {
    return 'fr';
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [language, setLanguage] = useState(getSavedLanguage);

  useEffect(() => {
    const handleLanguageChange = (event) => {
      const nextLanguage =
        typeof event.detail === 'string'
          ? event.detail
          : event.detail?.language;

      if (nextLanguage === 'fr' || nextLanguage === 'en') {
        setLanguage(nextLanguage);
      } else {
        setLanguage(getSavedLanguage());
      }
    };

    const handleStorageChange = (event) => {
      if (
        event.key === 'portfolio-language' ||
        event.key === null
      ) {
        setLanguage(getSavedLanguage());
      }
    };

    window.addEventListener(
      'portfolio-language-change',
      handleLanguageChange
    );
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener(
        'portfolio-language-change',
        handleLanguageChange
      );
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const t = translations[language] || translations.fr;

  const navigationLinks = [
    { label: t.home, href: '#home' },
    { label: t.about, href: '#about' },
    { label: t.skills, href: '#skills' },
    { label: t.projects, href: '#projects' },
    { label: t.contact, href: '#contact' }
  ];

  const services = [
    { label: t.web, icon: FaCode },
    { label: t.fullstack, icon: FaLaptopCode },
    { label: t.digital, icon: FaGlobe }
  ];

  const handleAnchorClick = (event, href) => {
    if (!href.startsWith('#')) return;

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();

    const top =
      target.getBoundingClientRect().top + window.scrollY - 84;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: 'smooth'
    });

    window.history.replaceState(null, '', href);
  };

  const columnTitle =
    'mb-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-white';

  const linkClass =
    'inline-flex items-center gap-2 text-sm text-slate-600 transition-colors duration-200 hover:text-sky-600 dark:text-slate-400 dark:hover:text-cyan-400';

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50 text-slate-900 transition-colors duration-300 dark:border-white/10 dark:bg-[#081426] dark:text-white">

      {/* Subtle decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl dark:bg-cyan-400/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl dark:bg-blue-500/10"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Contact call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="border-b border-slate-200 py-14 dark:border-white/10 sm:py-16"
        >
          <div className="flex flex-col items-start justify-between gap-7 rounded-3xl border border-sky-200 bg-white/80 p-6 shadow-sm dark:border-cyan-400/15 dark:bg-white/[0.03] sm:p-9 md:flex-row md:items-center lg:p-11">
            <div className="max-w-2xl">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-sky-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {t.badge}
              </span>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
                {t.title}{' '}
                <span className="text-sky-600 dark:text-cyan-400">
                  {t.titleAccent}
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                {t.description}
              </p>
            </div>

            <a
              href="#contact"
              onClick={(event) =>
                handleAnchorClick(event, '#contact')
              }
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-600/15 transition duration-300 hover:-translate-y-1 hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:bg-cyan-400 dark:text-[#0a192f] dark:shadow-cyan-400/10 dark:hover:bg-cyan-300 dark:focus-visible:ring-offset-[#081426]"
            >
              {t.contactButton}
              <FaArrowRight aria-hidden="true" size={13} />
            </a>
          </div>
        </motion.div>

        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-11 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-14">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              onClick={(event) =>
                handleAnchorClick(event, '#home')
              }
              className="inline-flex items-center gap-1 rounded-lg text-xl font-extrabold tracking-tight text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-white"
              aria-label="KAMOUNI MOHAMED - Home"
            >
              KAMOUNI
              <span className="text-sky-600 dark:text-cyan-400">
                MOHAMED
              </span>
              <span className="ml-1 text-sky-600 dark:text-cyan-400">
                .
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
              {t.role}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400">
              <FaMapMarkerAlt
                className="text-sky-600 dark:text-cyan-400"
                aria-hidden="true"
              />
              {t.location}
            </div>

            <a
              href="mailto:kamounimohamed22@gmail.com"
              className={`${linkClass} mt-4 flex w-fit`}
              aria-label="kamounimohamed22@gmail.com"
            >
              <FaEnvelope
                className="text-sky-600 dark:text-cyan-400"
                aria-hidden="true"
              />
              kamounimohamed22@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className={columnTitle}>{t.navigation}</h3>

            <ul className="space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(event) =>
                      handleAnchorClick(event, item.href)
                    }
                    className={linkClass}
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-cyan-400"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={columnTitle}>{t.services}</h3>

            <ul className="space-y-4">
              {services.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-100 bg-sky-50 text-sky-600 dark:border-cyan-400/15 dark:bg-cyan-400/[0.07] dark:text-cyan-400">
                    <Icon size={15} aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className={columnTitle}>{t.findMe}</h3>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/KAMOUNI13"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.github}
                title={t.github}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-400"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/kamouni-mohamed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.linkedin}
                title={t.linkedin}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
              >
                <FaLinkedin size={19} />
              </a>

              <a
                href="https://x.com/Kamounimohamed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                title="X (Twitter)"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-slate-400 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-white/30 dark:hover:text-white"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="https://www.instagram.com/kamouni113/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-pink-400 hover:text-pink-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-pink-400/40 dark:hover:text-pink-400"
              >
                <FaInstagram size={19} />
              </a>
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-500 dark:text-slate-500">
              {t.description}
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-slate-200 py-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs leading-6 text-slate-500 dark:text-slate-400">
            © {currentYear} KAMOUNI MOHAMED. {t.rights}
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <span className="text-xs text-slate-500 dark:text-slate-500">
              {t.made}{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                KAMOUNI MOHAMED
              </span>
            </span>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })
              }
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold text-slate-600 transition-colors hover:bg-sky-50 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-slate-400 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300"
              aria-label={t.backToTop}
              title={t.backToTop}
            >
              {t.backToTop}
              <FaArrowUp aria-hidden="true" size={12} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
