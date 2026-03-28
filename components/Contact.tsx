"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Logesh6220" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/logeshthambiran/" },
  { icon: MdEmail, label: "Email", href: "mailto:logeshthambiran@gmail.com" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-5xl mb-6 text-white">
            Let's Work Together
          </h2>

          <p className="text-xl text-slate-300 mb-12">
            Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
          </p>

          <motion.a
            href="mailto:yourmail@example.com"
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg text-lg mb-16 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>

          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <motion.p
            className="text-slate-500"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            © 2026 Logesh T. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}