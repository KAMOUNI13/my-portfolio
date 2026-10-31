
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaPaperPlane,
} from 'react-icons/fa';

const CV_URL = '/CV_KAMOUNI_MOHAMED_IT.pdf';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const inputClasses = `
  w-full rounded-xl border border-slate-300 dark:border-slate-700
  bg-white dark:bg-[#112240]
  text-slate-900 dark:text-white
  placeholder-slate-400 dark:placeholder-slate-500
  px-4 py-3.5 outline-none
  transition-all duration-200
  focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20
`;

const content = {
  fr: {
    eyebrow: 'Parlons de votre projet',
    title: 'Contact',
    intro:
      'Vous avez une opportunité professionnelle, une proposition de collaboration ou un projet web ? Contactez-moi.',
    contactTitle: 'Restons en contact',
    contactDescription:
      "Je suis à la recherche d'opportunités professionnelles dans le développement web et les solutions digitales. Je reste ouvert aux offres d'emploi et aux collaborations.",
    email: 'E-mail',
    phone: 'Téléphone',
    location: 'Localisation',
    city: 'Settat, Maroc',
    cvTitle: 'Mon CV',
    cvDescription:
      'Consultez mon parcours, mes compétences et mon expérience professionnelle.',
    downloadCV: 'Télécharger mon CV',
    socialTitle: 'Retrouvez-moi également sur',
    github: 'Mon profil GitHub',
    linkedin: 'Mon profil LinkedIn',
    formTitle: 'Envoyez-moi un message',
    formDescription:
      'Remplissez les champs ci-dessous. Je vous répondrai dès que possible.',
    name: 'Votre nom',
    namePlaceholder: 'Nom complet',
    emailLabel: 'Votre adresse e-mail',
    emailPlaceholder: 'exemple@email.com',
    subject: 'Objet du message',
    subjectPlaceholder: 'Ex. : Opportunité professionnelle',
    message: 'Votre message',
    messagePlaceholder: 'Écrivez votre message ici...',
    characters: 'caractères',
    send: 'Envoyer le message',
    privacy:
      'Vos informations sont utilisées pour répondre à votre message.',
  },

  en: {
    eyebrow: "Let's talk about your project",
    title: 'Contact',
    intro:
      'Have a job opportunity, a collaboration proposal, or a web project? Feel free to contact me.',
    contactTitle: "Let's stay in touch",
    contactDescription:
      'I am looking for professional opportunities in web development and digital solutions. I am open to job offers and collaborations.',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    city: 'Settat, Morocco',
    cvTitle: 'My CV',
    cvDescription:
      'Discover my background, skills, and professional experience.',
    downloadCV: 'Download my CV',
    socialTitle: 'You can also find me on',
    github: 'My GitHub profile',
    linkedin: 'My LinkedIn profile',
    formTitle: 'Send me a message',
    formDescription:
      'Fill in the form below. I will get back to you as soon as possible.',
    name: 'Your name',
    namePlaceholder: 'Full name',
    emailLabel: 'Your email address',
    emailPlaceholder: 'example@email.com',
    subject: 'Message subject',
    subjectPlaceholder: 'e.g. Job opportunity',
    message: 'Your message',
    messagePlaceholder: 'Write your message here...',
    characters: 'characters',
    send: 'Send message',
    privacy: 'Your information is used to respond to your message.',
  },
};

const Contact = () => {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('portfolio-language') === 'en'
        ? 'en'
        : 'fr';
    } catch {
      return 'fr';
    }
  });

  const [formData, setFormData] = useState(initialForm);

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
          const savedLanguage =
            localStorage.getItem('portfolio-language');

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

  const t = content[language] || content.fr;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const contactItems = [
    {
      icon: FaEnvelope,
      label: t.email,
      value: 'kamounimohamed22@gmail.com',
      href: 'mailto:kamounimohamed22@gmail.com',
    },
    {
      icon: FaPhone,
      label: t.phone,
      value: '+212 696 649 113',
      href: 'tel:+212696649113',
    },
    {
      icon: FaMapMarkerAlt,
      label: t.location,
      value: t.city,
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      lang={language}
      dir="ltr"
      className="
        relative min-h-screen overflow-hidden
        bg-slate-50 dark:bg-[#0a192f]
        py-20 sm:py-24 transition-colors duration-300
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -top-32 -right-32
          h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute bottom-0 -left-32
          h-72 w-72 rounded-full bg-blue-500/10 blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
            {t.eyebrow}
          </p>

          <h2 className="flex flex-wrap items-center gap-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            {t.title}
            <span className="mt-2 h-1 w-16 rounded-full bg-cyan-500 sm:w-24" />
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            {t.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              rounded-2xl border border-slate-200
              bg-white p-6 shadow-xl shadow-slate-200/40
              dark:border-slate-700/70 dark:bg-gradient-to-br
              dark:from-[#112240] dark:to-[#0d1b32]
              dark:shadow-black/20 sm:p-9 lg:p-10
            "
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t.contactTitle}
            </h3>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              {t.contactDescription}
            </p>

            {/* Contact details */}
            <div className="mt-8 space-y-6">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4"
                  >
                    <div
                      className="
                        flex h-12 w-12 shrink-0 items-center
                        justify-center rounded-xl
                        bg-cyan-50 text-cyan-600
                        dark:bg-cyan-400/10 dark:text-cyan-400
                      "
                    >
                      <Icon className="text-xl" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          dir="ltr"
                          className="
                            break-all font-semibold
                            text-slate-800 transition-colors
                            hover:text-cyan-600
                            dark:text-slate-100 dark:hover:text-cyan-400
                          "
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-slate-800 dark:text-slate-100">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CV download */}
            <div
              className="
                mt-9 rounded-xl border border-cyan-200
                bg-cyan-50/70 p-5
                dark:border-cyan-400/20 dark:bg-cyan-400/5
              "
            >
              <h4 className="font-bold text-slate-900 dark:text-white">
                {t.cvTitle}
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {t.cvDescription}
              </p>

              <a
                href={CV_URL}
                download="CV_KAMOUNI_MOHAMED_IT.pdf"
                className="
                  mt-4 inline-flex w-full items-center
                  justify-center gap-3 rounded-xl
                  bg-gradient-to-r from-blue-700 to-cyan-500
                  px-5 py-3.5 font-bold text-white
                  shadow-lg shadow-cyan-500/15
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-cyan-500/25
                  focus:outline-none focus:ring-2
                  focus:ring-cyan-500 focus:ring-offset-2
                  dark:focus:ring-offset-[#112240]
                "
              >
                <FaDownload />
                {t.downloadCV}
              </a>
            </div>

            {/* Social networks */}
            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-700">
              <p className="mb-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                {t.socialTitle}
              </p>

              <div className="flex gap-4">
                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/kamouni13"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.github}
                  title={t.github}
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-xl bg-slate-100 text-2xl text-slate-800
                    transition-colors hover:bg-cyan-100 hover:text-cyan-700
                    dark:bg-slate-800 dark:text-white
                    dark:hover:bg-cyan-400/10 dark:hover:text-cyan-400
                  "
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/kamouni-mohamed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.linkedin}
                  title={t.linkedin}
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-xl bg-slate-100 text-2xl text-slate-800
                    transition-colors hover:bg-cyan-100 hover:text-cyan-700
                    dark:bg-slate-800 dark:text-white
                    dark:hover:bg-cyan-400/10 dark:hover:text-cyan-400
                  "
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            action="https://formsubmit.co/kamounimohamed22@gmail.com"
            method="POST"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              space-y-6 rounded-2xl border border-slate-200
              bg-white p-6 shadow-xl shadow-slate-200/40
              dark:border-slate-700/70 dark:bg-gradient-to-br
              dark:from-[#112240] dark:to-[#0d1b32]
              dark:shadow-black/20 sm:p-9 lg:p-10
            "
          >
            <input
              type="hidden"
              name="_subject"
              value="New message from my portfolio"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t.formTitle}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {t.formDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  {t.name}
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  minLength={2}
                  maxLength={100}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  {t.emailLabel}
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={254}
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                {t.subject}
              </label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder={t.subjectPlaceholder}
                value={formData.subject}
                onChange={handleChange}
                minLength={3}
                maxLength={150}
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                {t.message}
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder={t.messagePlaceholder}
                rows={6}
                value={formData.message}
                onChange={handleChange}
                minLength={10}
                maxLength={5000}
                required
                className={`${inputClasses} resize-y`}
              />

              <p className="mt-2 text-right text-xs text-slate-500 dark:text-slate-400">
                {formData.message.length}/5000 {t.characters}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="
                flex w-full items-center justify-center gap-3
                rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500
                px-5 py-4 text-base font-bold text-white
                shadow-lg shadow-cyan-500/15
                transition-all duration-300
                hover:from-cyan-500 hover:to-blue-700
                focus:outline-none focus:ring-2 focus:ring-cyan-500
                focus:ring-offset-2 dark:focus:ring-offset-[#112240]
              "
            >
              <FaPaperPlane />
              {t.send}
            </motion.button>

            <p className="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
              {t.privacy}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
