
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
} from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-16 items-center overflow-hidden bg-gradient-to-b from-[#0a192f] to-[#0d2544] px-4 py-24 sm:px-8"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-left"
        >
          <p className="mb-4 text-lg font-medium text-cyan-300 sm:text-xl">
            Bonjour, je suis
          </p>

          <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            KAMOUNI <span className="text-cyan-400">MOHAMED</span>
          </h1>

          <div className="mb-6 min-h-[5rem] sm:min-h-[4.5rem]">
            <TypeAnimation
              sequence={[
                'Développeur Web Full Stack.',
                2000,
                'Développeur Frontend.',
                2000,
                'Développeur Backend.',
                2000,
                'Passionné par les technologies web.',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              deletionSpeed={60}
              repeat={Infinity}
              className="text-2xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 sm:text-4xl"
            />
          </div>

          <p className="mb-10 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Développeur Web Full Stack, spécialisé dans la création
            d’applications web modernes, responsives et intuitives.
            J’aime concevoir des solutions numériques utiles en utilisant
            les technologies frontend et backend.
          </p>

          {/* Main actions */}
          <div className="mb-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-lg border border-cyan-400/30 bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Découvrir mes projets
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-lg border border-gray-600 px-7 py-3.5 font-semibold text-gray-200 transition duration-300 hover:border-cyan-400 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Me contacter
              <FaEnvelope />
            </a>
          </div>

          {/* Social and contact links */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-gray-400">
              Retrouvez-moi sur
            </span>

            <motion.a
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Kamouni13-Mohamed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Mohamed"
              title="GitHub"
              className="rounded-full border border-gray-700 bg-gray-800/70 p-3 text-xl text-white transition-colors hover:border-cyan-400 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/kamouni-mohamed/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Mohamed"
              title="LinkedIn"
              className="rounded-full border border-gray-700 bg-gray-800/70 p-3 text-xl text-white transition-colors hover:border-cyan-400 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <FaLinkedin />
            </motion.a>

            <a
              href="mailto:kamounimohamed22@gmail.com"
              aria-label="Envoyer un email"
              title="Email"
              className="rounded-full border border-gray-700 bg-gray-800/70 p-3 text-xl text-white transition-colors hover:border-cyan-400 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <FaEnvelope />
            </a>

            <a
              href="tel:+212696649113"
              aria-label="Appeler Mohamed"
              title="Téléphone"
              className="rounded-full border border-gray-700 bg-gray-800/70 p-3 text-xl text-white transition-colors hover:border-cyan-400 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <FaPhone />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


