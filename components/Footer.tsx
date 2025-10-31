'use client';

import { FiHeart, FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Shaik Sameer Basha</h3>
            <p className="text-gray-400 mb-4">
              AI Engineer & Full-Stack Developer passionate about building innovative solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/sameershaik16481"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sameer-basha-shaik-112965255"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:sameershaik16481@gmail.com"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">Let&apos;s Work Together</h4>
            <p className="text-gray-400 mb-4">
              Have a project in mind? Let&apos;s create something amazing together.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Shaik Sameer Basha. Made with{' '}
            <FiHeart className="inline text-red-500 animate-pulse" /> using Next.js & Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 bg-dark-800 text-primary-400 rounded-full hover:bg-dark-700 hover:text-primary-300 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

