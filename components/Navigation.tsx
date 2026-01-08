'use client';

import { useState } from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-dark-900/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold gradient-text">
            SB.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/sameershaik16481"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sameer-basha-shaik-112965255"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:sameershaik16481@gmail.com"
              className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-primary-400 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-900/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-gray-300 hover:text-primary-400 hover:bg-dark-800 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
            <div className="flex space-x-4 px-3 pt-4">
              <a
                href="https://github.com/sameershaik16481"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sameer-basha-shaik-112965255"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:sameershaik16481@gmail.com"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

