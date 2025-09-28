"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import TechCube from "./TechCube";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-16 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-[#00D4FF]/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content - FIXED MOBILE ALIGNMENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full order-2 md:order-1" // Ensure content comes first on mobile
          >
            {/* Company Name with Subtle Animation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                Clarity<span className="text-accent">.</span>
              </h1>
              <p className="text-base md:text-lg text-gray-400">Software Engineering Studio</p>
            </motion.div>
            
            {/* Main Headline with NEW COLOR */}
            <motion.h2
              className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#00D4FF] to-[#00ffab] bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              We Engineer Software for You
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Building <span className="text-accent font-semibold">digital experiences</span> with clean code and modern technology
            </motion.p>

            {/* CTA Buttons - Better mobile layout */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="bg-accent text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-accent/90 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-accent/25 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
                <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
              </motion.button>
              
              <motion.button
                onClick={scrollToAbout}
                className="border border-gray-600 text-gray-300 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:border-accent hover:text-accent transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Cube - Better mobile sizing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[300px] md:h-[500px] flex items-center justify-center w-full order-1 md:order-2 mb-4 md:mb-0" // Cube comes first on mobile
          >
            <TechCube />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - NOW CLICKABLE */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-accent hover:text-white transition-colors cursor-pointer group"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        whileHover={{ scale: 1.2 }}
      >
      </motion.button>
    </section>
  );
};

export default Hero;