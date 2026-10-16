
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');

      return savedTheme
        ? savedTheme === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    return false;
  });

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Apply dark or light theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Smooth navigation with navbar offset
  const handleNavClick = (href) => {
    setIsOpen(false);

    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);

    if (!element) {
      console.warn(`Section not found: ${href}`);
      return;
    }

    const navbarHeight = 64;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(0, elementPosition - navbarHeight),
      behavior: 'smooth',
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        bg-gradient-to-b from-[#0a192f] to-[#0d2544]
        ${scrolled ? 'shadow-lg' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="px-4 py-2 rounded-lg text-2xl font-bold text-white
                bg-gradient-to-r from-blue-600 to-cyan-400
                transition-all duration-200
                hover:shadow-lg hover:from-cyan-400 hover:to-blue-600
                hover:scale-105 focus:outline-none focus:ring-2
                focus:ring-cyan-400 focus:ring-offset-2"
            >
              Portfolio
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="relative px-4 py-2 rounded-lg text-base
                    font-semibold text-white
                    bg-gradient-to-r from-blue-600 to-cyan-400
                    transition-all duration-200
                    hover:shadow-lg hover:from-cyan-400 hover:to-blue-600
                    hover:scale-105 focus:outline-none focus:ring-2
                    focus:ring-cyan-400 focus:ring-offset-2"
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Dark Mode Toggle */}
              <button
                type="button"
                onClick={() => setDarkMode((previous) => !previous)}
                className="ml-2 p-2 rounded-full bg-gray-800
                  hover:bg-cyan-500 text-white
                  transition-colors duration-200 shadow
                  focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label={
                  darkMode
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
                title={
                  darkMode
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
              >
                {darkMode ? (
                  <FaSun className="text-yellow-300" />
                ) : (
                  <FaMoon className="text-cyan-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              type="button"
              onClick={() => setDarkMode((previous) => !previous)}
              className="p-2 rounded-full bg-gray-800
                hover:bg-cyan-500 text-white transition-colors"
              aria-label={
                darkMode
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >
              {darkMode ? (
                <FaSun className="text-yellow-300" />
              ) : (
                <FaMoon className="text-cyan-300" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen((previous) => !previous)}
              className="text-white hover:text-cyan-400
                focus:outline-none transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <FaTimes size={24} />
              ) : (
                <FaBars size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0d2544] shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block px-4 py-3 rounded-lg text-base
                    font-medium text-white
                    hover:text-cyan-300 hover:bg-white/10
                    transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;




