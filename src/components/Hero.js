
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
  FaDownload,
  FaMapMarkerAlt,
  FaCheckCircle,
} from 'react-icons/fa';

import profilePhoto from '../assets/images/kamouni.jpeg';

const CV_PATH = '/CV_KAMOUNI_MOHAMED_IT.pdf';

const content = {
  fr: {
    greeting: 'Bonjour, je suis',
    roles: [
      'Développeur Web Full Stack.',
      2200,
      'Développeur Frontend.',
      2200,
      'Développeur Backend.',
      2200,
      'Passionné par les technologies web.',
      2200,
    ],
    description:
      "Technicien Spécialisé en Développement Digital, option Web Full Stack. Je m'intéresse à la création d'applications web modernes, accessibles et utiles, en combinant le frontend et le backend.",
    location: 'Maroc',
    projects: 'Découvrir mes projets',
    cv: 'Télécharger mon CV',
    contact: 'Me contacter',
    socials: 'Retrouvez-moi sur',
    available: 'Ouvert aux opportunités',
    role: 'Développement Web Full Stack',
    tech: 'Technologies',
  },
  en: {
    greeting: "Hello, I'm",
    roles: [
      'Full Stack Web Developer.',
      2200,
      'Frontend Developer.',
      2200,
      'Backend Developer.',
      2200,
      'Passionate about web technologies.',
      2200,
    ],
    description:
      'Specialized Technician in Digital Development, focused on Full Stack Web Development. I am interested in building modern, accessible, and useful web applications by combining frontend and backend technologies.',
    location: 'Morocco',
    projects: 'Explore my projects',
    cv: 'Download my CV',
    contact: 'Contact me',
    socials: 'Find me on',
    available: 'Open to opportunities',
    role: 'Full Stack Web Development',
    tech: 'Technologies',
  },
};

const Hero = () => {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('portfolio-language') === 'en'
        ? 'en'
        : 'fr';
    } catch {
      return 'fr';
    }
  });

  useEffect(() => {
    const handleLanguageChange = (event) => {
      const selectedLanguage =
        typeof event.detail === 'string'
          ? event.detail
          : event.detail?.language;

      if (selectedLanguage === 'fr' || selectedLanguage === 'en') {
        setLanguage(selectedLanguage);
      } else {
        try {
          const savedLanguage = localStorage.getItem('portfolio-language');
          setLanguage(savedLanguage === 'en' ? 'en' : 'fr');
        } catch {
          setLanguage('fr');
        }
      }
    };

    window.addEventListener(
      'portfolio-language-change',
      handleLanguageChange
    );

    return () => {
      window.removeEventListener(
        'portfolio-language-change',
        handleLanguageChange
      );
    };
  }, []);

  const t = content[language];

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-screen scroll-mt-16 items-center overflow-hidden bg-gradient-to-br from-[#E8F4F8] via-[#F7FBFF] to-white px-5 pb-20 pt-28 text-[#1E293B] transition-colors duration-500 dark:from-[#071426] dark:via-[#0A192F] dark:to-[#0D2544] dark:text-white sm:px-8 lg:pb-24 lg:pt-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 -z-10 h-72 w-72 rounded-full bg-[#00A3FF]/15 blur-3xl sm:h-[28rem] sm:w-[28rem] dark:bg-cyan-400/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl dark:bg-blue-600/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-px w-4/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative z-10 text-left"
        >
          {/* Availability status */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#10B981]" />
            </span>
            {t.available}
          </motion.div>

          <p className="mb-3 text-lg font-medium tracking-wide text-[#007DBD] dark:text-cyan-300 sm:text-xl">
            {t.greeting}
          </p>

          <h1
            id="hero-title"
            className="mb-5 text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl xl:text-7xl"
          >
            KAMOUNI
            <span className="mt-1 block bg-gradient-to-r from-[#008ED6] via-[#00A3FF] to-[#38BDF8] bg-clip-text pb-2 text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-blue-500">
              MOHAMED
            </span>
          </h1>

          <div className="mb-6 min-h-[4.5rem] sm:min-h-[5rem]">
            <TypeAnimation
              key={language}
              sequence={t.roles}
              wrapper="h2"
              speed={48}
              deletionSpeed={55}
              repeat={Infinity}
              className="inline-block bg-gradient-to-r from-[#007DBD] to-[#00A3FF] bg-clip-text text-xl font-bold leading-snug text-transparent dark:from-cyan-300 dark:to-blue-400 sm:text-3xl lg:text-4xl"
            />
          </div>

          <p className="mb-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {t.description}
          </p>

          {/* Location and technologies */}
          <div className="mb-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt
                aria-hidden="true"
                className="text-[#00A3FF] dark:text-cyan-400"
              />
              {t.location}
            </span>

            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-slate-300 dark:bg-slate-700 sm:block"
            />

            <span className="font-medium text-slate-700 dark:text-slate-300">
              React <span className="text-[#00A3FF]">·</span> Laravel{' '}
              <span className="text-[#00A3FF]">·</span> MySQL
            </span>
          </div>

          {/* Main actions */}
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#008ED6] to-[#00A3FF] px-6 py-3.5 font-semibold text-white shadow-lg shadow-sky-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/25 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#F7FBFF] dark:focus:ring-offset-[#0A192F] sm:px-7"
            >
              {t.projects}
              <FaArrowRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href={CV_PATH}
              download="CV_KAMOUNI_MOHAMED_IT.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-sky-500/40 bg-white/80 px-6 py-3.5 font-semibold text-[#007DBD] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300 dark:hover:border-cyan-300 dark:hover:bg-cyan-400/15 dark:focus:ring-offset-[#0A192F] sm:px-7"
            >
              <FaDownload aria-hidden="true" />
              {t.cv}
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-slate-300 bg-transparent px-6 py-3.5 font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-[#00A3FF] hover:text-[#007DBD] focus:outline-none focus:ring-2 focus:ring-sky-400 dark:border-slate-600 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300 sm:px-7"
            >
              {t.contact}
              <FaEnvelope aria-hidden="true" />
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="mr-1 text-sm text-slate-500 dark:text-slate-400">
              {t.socials}
            </span>

            <motion.a
              whileHover={{ y: -4, scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/kamouni13"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-xl text-slate-700 shadow-sm transition-colors hover:border-sky-400 hover:text-[#008ED6] focus:outline-none focus:ring-2 focus:ring-sky-400 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              <FaGithub aria-hidden="true" />
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/kamouni-mohamed/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-xl text-slate-700 shadow-sm transition-colors hover:border-sky-400 hover:text-[#008ED6] focus:outline-none focus:ring-2 focus:ring-sky-400 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              <FaLinkedin aria-hidden="true" />
            </motion.a>

            <a
              href="mailto:kamounimohamed22@gmail.com"
              aria-label="Email"
              title="Email"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-xl text-slate-700 shadow-sm transition-colors hover:border-sky-400 hover:text-[#008ED6] focus:outline-none focus:ring-2 focus:ring-sky-400 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              <FaEnvelope aria-hidden="true" />
            </a>

            <a
              href="tel:+212696649113"
              aria-label="Phone"
              title="Phone"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-xl text-slate-700 shadow-sm transition-colors hover:border-sky-400 hover:text-[#008ED6] focus:outline-none focus:ring-2 focus:ring-sky-400 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              <FaPhone aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 12 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: 'easeOut' }}
          className="mx-auto w-full max-w-[390px] lg:max-w-[440px]"
        >
          <div className="relative mx-auto aspect-[4/5] max-h-[540px]">
            {/* Decorative frame */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rotate-3 rounded-[2rem] border border-sky-500/30 transition-transform duration-500 hover:rotate-1 dark:border-cyan-400/30"
            />

            <div
              aria-hidden="true"
              className="absolute -inset-1 -rotate-2 rounded-[2rem] bg-gradient-to-br from-sky-400/30 via-transparent to-cyan-400/20 blur-sm"
            />

            {/* Photo card */}
            <div className="absolute inset-0 overflow-hidden rounded-[1.7rem] border border-white/70 bg-white shadow-2xl shadow-sky-900/10 dark:border-white/10 dark:bg-[#10243B] dark:shadow-black/30">
              <img
                src={profilePhoto}
                alt="Mohamed Kamouni"
                className="h-full w-full object-cover object-center"
                fetchPriority="high"
              />

              {/* Photo overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/95 to-transparent p-6 pt-24 dark:from-[#071426] dark:via-[#071426]/90 dark:to-transparent sm:p-7 sm:pt-28">
                <p className="text-xl font-extrabold tracking-wide text-[#1E293B] dark:text-white sm:text-2xl">
                  KAMOUNI MOHAMED
                </p>

                <p className="mt-2 text-sm font-medium text-[#007DBD] dark:text-cyan-300 sm:text-base">
                  {t.role}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <FaCheckCircle
                    aria-hidden="true"
                    className="text-emerald-500"
                  />
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    React · Laravel · MySQL
                  </span>
                </div>
              </div>
            </div>

            {/* Floating technology card */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 -left-3 rounded-2xl border border-sky-200/80 bg-white/95 px-4 py-3.5 shadow-xl shadow-sky-900/10 backdrop-blur-md dark:border-cyan-400/20 dark:bg-[#10243B]/95 dark:shadow-black/20 sm:-left-7 sm:px-5"
            >
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                {t.tech}
              </p>
              <p className="text-sm font-bold text-[#007DBD] dark:text-cyan-300 sm:text-base">
                React · Laravel · MySQL
              </p>
            </motion.div>

            {/* Decorative dot */}
            <div
              aria-hidden="true"
              className="absolute -right-4 top-10 h-5 w-5 rounded-full border-4 border-[#E8F4F8] bg-[#00A3FF] shadow-lg shadow-sky-500/30 dark:border-[#0A192F] dark:bg-cyan-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
