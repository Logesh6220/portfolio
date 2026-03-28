"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

const projects = [
  {
    title: "MediVoyage",
    description:
      "A machine learning-based traveller health risk assessment system that analyzes climate, location, and user data to predict potential health risks.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1080",
    tags: ["Machine Learning", "Python", "Healthcare", "Data Science"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio built using Next.js, Tailwind CSS, and Framer Motion to showcase projects and skills.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1080",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" ref={ref} className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 text-white">Featured Projects</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A showcase of my work focused on solving real-world problems and building scalable applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >

              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-white">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-5 h-5" />
                    Code
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MdOpenInNew className="w-5 h-5" />
                    Demo
                  </motion.a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}