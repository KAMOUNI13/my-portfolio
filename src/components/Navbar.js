
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
];

const translations = {
  fr: {
    home: 'Accueil',
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    contact: 'Contact',
    talk: 'Me contacter',
    language: 'Langue',
    light: 'Activer le mode clair',
    dark: 'Activer le mode sombre',
    open: 'Ouvrir le menu',
    close: 'Fermer le menu',
  },
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    talk: "Let's talk",
    language: 'Language',
    light: 'Enable light mode',
    dark: 'Enable dark mode',
    open: 'Open menu',
    close: 'Close menu',
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');


  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) return savedTheme === 'dark';

    return false;
  });
  ;

  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'fr';

    return localStorage.getItem('portfolio-language') === 'en'
      ? 'en'
      : 'fr';
  });

  const t = translations[language];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.style.colorScheme = darkMode
      ? 'dark'
      : 'light';

    localStorage.setItem('theme', darkMode ? 'dark' : 'light');

    window.dispatchEvent(
      new CustomEvent('portfolio-theme-change', {
        detail: { darkMode },
      })
    );
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = 'ltr';

    localStorage.setItem('portfolio-language', language);

    window.dispatchEvent(
      new CustomEvent('portfolio-language-change', {
        detail: { language },
      })
    );

    setIsOpen(false);
  }, [language]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);

        let currentSection = 'home';

        navItems.forEach((item) => {
          const section = document.getElementById(item.key);

          if (section && section.getBoundingClientRect().top <= 140) {
            currentSection = item.key;
          }
        });

        setActiveSection(currentSection);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);


  const handleNavClick = (event, href) => {
    event.preventDefault();

    const sectionId = href.slice(1);

    // نسدّ المينيو فالهاتف
    setIsOpen(false);

    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    // فالهاتف كنتسناو حتى تسالي حركة إغلاق المينيو
    const delay = isMobile ? 300 : 0;

    window.setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (!section) {
        console.warn(`Section not found: #${sectionId}`);
        return;
      }

      setActiveSection(sectionId);

      // نحسب الموضع من بعد ما تسالي حركة المينيو
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 76;

      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: 'smooth',
      });

      window.history.replaceState(null, '', href);
    }, delay);
  };


  const renderNavLink = (item, mobile = false) => {
    const isActive = activeSection === item.key;

    return (
      <a
        key={item.key}
        href={item.href}
        onClick={(event) => handleNavClick(event, item.href)}
        aria-current={isActive ? 'location' : undefined}
        className={`group relative ${mobile ? 'block rounded-xl px-4 py-3' : 'px-2 py-2'
          } text-sm font-semibold transition-colors duration-300 ${isActive
            ? 'text-sky-600 dark:text-cyan-400'
            : 'text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-white'
          }`}
      >
        {t[item.key]}

        {!mobile && (
          <span
            className={`absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-sky-500 transition-transform duration-300 dark:bg-cyan-400 ${isActive
              ? 'scale-x-100'
              : 'scale-x-0 group-hover:scale-x-100'
              }`}
          />
        )}

        {mobile && (
          <span
            className={`absolute bottom-2 left-0 top-2 w-0.5 rounded-full bg-sky-500 dark:bg-cyan-400 ${isActive ? 'opacity-100' : 'opacity-0'
              }`}
          />
        )}
      </a>
    );
  };

  const themeButton = () => (
    <button
      type="button"
      onClick={() => setDarkMode((previous) => !previous)}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-sky-400 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-white/10 dark:bg-white/5 dark:text-cyan-300 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/10"
      aria-label={darkMode ? t.light : t.dark}
      title={darkMode ? t.light : t.dark}
    >
      {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
    </button>
  );

  const languageSelector = () => (
    <label className="flex h-10 items-center rounded-xl border border-slate-200 bg-white px-2.5 dark:border-white/10 dark:bg-white/5">
      <span className="sr-only">{t.language}</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
        aria-label={t.language}
        className="cursor-pointer bg-transparent text-sm font-bold text-slate-700 outline-none dark:text-slate-200"
      >
        <option value="fr">FR</option>
        <option value="en">EN</option>
      </select>
    </label>
  );

  const contactButton = (mobile = false) => (
    <a
      href="#contact"
      onClick={(event) => handleNavClick(event, '#contact')}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:bg-cyan-400 dark:text-[#0a192f] dark:hover:bg-cyan-300 ${mobile ? 'mt-3 w-full py-3' : ''
        }`}
    >
      {t.talk}
      <span aria-hidden="true">↗</span>
    </a>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${darkMode
        ? scrolled
          ? 'border-white/10 bg-[#0a192f]/95 shadow-lg shadow-black/10 backdrop-blur-xl'
          : 'border-transparent bg-[#0a192f]/85 backdrop-blur-md'
        : scrolled
          ? 'border-slate-200 bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-xl'
          : 'border-transparent bg-white/90 backdrop-blur-md'
        }`}
    >
      <nav
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        {/* Full name */}
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, '#home')}
          className="shrink-0 rounded-lg text-base font-extrabold tracking-tight text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:text-xl dark:text-white"
          aria-label="KAMOUNI MOHAMED - Home"
        >
          KAMOUNI <span className="text-sky-500 dark:text-cyan-400">MOHAMED</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-3 md:flex lg:gap-5">
          <div className="flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => renderNavLink(item))}
          </div>

          {languageSelector()}
          {themeButton()}
          {contactButton()}
        </div>

        {/* Mobile controls */}
        <div className="flex shrink-0 items-center gap-2 md:hidden">
          {languageSelector()}
          {themeButton()}

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition hover:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
            aria-label={isOpen ? t.close : t.open}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <FaTimes size={19} /> : <FaBars size={19} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a192f]/98 md:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-5 py-5 sm:px-8">
              {navItems.map((item) => renderNavLink(item, true))}
              {contactButton(true)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
