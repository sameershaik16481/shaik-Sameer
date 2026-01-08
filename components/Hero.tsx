'use client';

import { FiArrowDown, FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          {/* Greeting */}
          <p className="text-primary-400 text-lg md:text-xl font-medium mb-4">
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">Shaik Sameer Basha</span>
          </h1>

          {/* Static Role */}
          <div className="text-2xl md:text-4xl text-gray-300 mb-8 h-12 md:h-16 flex items-center justify-center">
            <span>Python Developer &amp; Full-Stack Engineer</span>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate Python Developer and Full-Stack Engineer crafting scalable web applications
            and innovative solutions. Building robust backend systems with Python and modern
            frameworks, creating seamless user experiences with React.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold text-lg hover:bg-primary-600 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-primary-500 text-primary-400 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-white transition-colors flex items-center gap-2"
            >
              <FiDownload />
              Download CV
            </a>
          </div>

          {/* Static Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <FiArrowDown className="text-primary-400 text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

