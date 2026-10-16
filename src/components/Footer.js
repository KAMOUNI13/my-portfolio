import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Personal Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              KAMOUNI MOHAMED
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about building
              modern, responsive, and user-friendly web
              applications and digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>

              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Connect With Me
            </h3>

            <div className="flex space-x-4">

              <a
                href="https://www.linkedin.com/in/kamouni-mohamed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://github.com/Kamouni13-Mohamed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://x.com/Kamounimohamed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaTwitter size={24} />
              </a>

              <a
                href="https://www.instagram.com/kamouni113/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
              >
                <FaInstagram size={24} />
              </a>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} KAMOUNI MOHAMED. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;