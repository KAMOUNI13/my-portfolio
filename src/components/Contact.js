
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      submitting: true,
      submitted: false,
      error: null,
    });

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/kamounimohamed22@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            _subject: `Portfolio - ${formData.subject}`,
            _template: 'table',
          }),
        }
      );

      const result = await response.json();

      if (
        !response.ok ||
        (result.success !== 'true' && result.success !== true)
      ) {
        throw new Error(
          "L'envoi a échoué. Vérifiez votre adresse e-mail et l'activation de FormSubmit."
        );
      }


      setStatus({
        submitting: false,
        submitted: true,
        error: null,
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error:
          error.message ||
          "Une erreur est survenue lors de l'envoi du message.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#0a192f] to-[#0d2544] min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="text-5xl font-extrabold text-white mb-2 flex items-center gap-4">
            Contact
            <span className="block w-24 h-1 bg-cyan-400 rounded ml-2" />
          </h2>

          <p className="text-xl text-gray-300">
            N'hésitez pas à me contacter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-10 shadow-xl border border-gray-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Restons en contact
            </h3>

            <p className="text-gray-300 mb-8 max-w-md">
              Je suis à la recherche d'opportunités professionnelles
              dans le développement web et les solutions digitales.
              Pour toute proposition d'emploi, collaboration ou projet,
              n'hésitez pas à me contacter.
            </p>

            <div className="space-y-6">
              {/* Adresse e-mail */}
              <div className="flex items-center gap-4">
                <span className="bg-cyan-900/60 p-3 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-cyan-400 text-2xl" />
                </span>

                <div>
                  <span className="block text-white font-semibold">
                    E-mail
                  </span>

                  <a
                    href="mailto:kamounimohamed22@gmail.com"
                    className="text-cyan-300 hover:underline"
                  >
                    kamounimohamed22@gmail.com
                  </a>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-center gap-4">
                <span className="bg-cyan-900/60 p-3 rounded-full flex items-center justify-center">
                  <FaPhone className="text-cyan-400 text-2xl" />
                </span>

                <div>
                  <span className="block text-white font-semibold">
                    Téléphone
                  </span>

                  <a
                    href="tel:+212696649113"
                    className="text-cyan-300 hover:underline"
                  >
                    +212 696 649 113
                  </a>
                </div>
              </div>

              {/* Localisation */}
              <div className="flex items-center gap-4">
                <span className="bg-cyan-900/60 p-3 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                </span>

                <div>
                  <span className="block text-white font-semibold">
                    Localisation
                  </span>

                  <span className="text-cyan-300">
                    Settat, Maroc
                  </span>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-4 mt-8">
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://github.com/Kamouni13-Mohamed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mon profil GitHub"
                className="bg-gray-700 p-3 rounded-full text-white hover:text-cyan-400 text-2xl transition-colors duration-200"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://www.linkedin.com/in/kamouni-mohamed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mon profil LinkedIn"
                className="bg-gray-700 p-3 rounded-full text-white hover:text-cyan-400 text-2xl transition-colors duration-200"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-10 shadow-xl border border-gray-700/50 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                aria-label="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#112240] text-white placeholder-gray-400 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-700"
              />

              <input
                type="email"
                name="email"
                placeholder="Votre adresse e-mail"
                aria-label="Votre adresse e-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#112240] text-white placeholder-gray-400 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-700"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Objet du message"
              aria-label="Objet du message"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-[#112240] text-white placeholder-gray-400 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-700"
            />

            <textarea
              name="message"
              placeholder="Votre message"
              aria-label="Votre message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-[#112240] text-white placeholder-gray-400 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-700"
            />

            {status.error && (
              <div role="alert" className="text-red-400 text-sm">
                {status.error}
              </div>
            )}

            {status.submitted && (
              <div role="status" className="text-green-400 text-sm">
                Votre message a été envoyé avec succès !
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status.submitting}
              className={`w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-lg font-bold py-4 rounded-lg shadow-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 ${status.submitting
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
                }`}
            >
              {status.submitting
                ? 'Envoi en cours...'
                : 'Envoyer le message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
