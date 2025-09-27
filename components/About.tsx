"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Coffee } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code2, text: "Clean Code Advocate" },
    { icon: Rocket, text: "Performance Focused" },
    { icon: Coffee, text: "Coffee Enthusiast" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About Us
          </h2>

          <div className="space-y-6 text-gray-300 text-lg">
            <p className="leading-relaxed">
              We are passionate software engineers with expertise in building scalable web applications.
              With strong foundation in both Frontend and Backend domains, we create seamless
              digital experiences that users love. Our approach combines clean code principles with
              modern development practices to deliver exceptional results.
            </p>
            {/*<p className="leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or enjoying a good cup of coffee while debugging. Fun fact: I
              once fixed a production bug while skydiving (okay, maybe right after landing). 🪂
            </p>*/}
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-surface rounded-lg border border-gray-800 hover:border-accent transition-colors"
              >
                <item.icon className="text-accent" size={24} />
                <span className="text-white font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;