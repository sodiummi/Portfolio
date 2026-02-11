"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Twitter, Linkedin, Brain, Palette, Server, Wrench, Mail } from "lucide-react";
import { projects } from "@/data/projects";
import LiquidCursor from "@/components/LiquidCursor";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20 overflow-hidden">
      <LiquidCursor />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mix-blend-overlay"
          >
            Momina <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Yousaf</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed"
          >
            AI-focused Software Engineer building <span className="text-white font-medium">LLM-powered applications</span> and <span className="text-white font-medium">ML-based solutions</span> that drive real-world digital transformation.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex gap-4 pt-8">
            <Link
              href="#projects"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-white/20 font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex justify-between items-end"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Selected Work</h2>
          <Link href="/projects" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            View all projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.colors.from} ${project.colors.to} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-200 backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                  >
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
            View Archive <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-6 max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-purple-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI & Machine Learning</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Python (PyTorch, TensorFlow)</li>
                <li>LLMs (OpenAI, HuggingFace)</li>
                <li>Computer Vision (OpenCV, YOLO)</li>
                <li>NLP & Sentiment Analysis</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-blue-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Palette className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Frontend Development</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS & Framer Motion</li>
                <li>Three.js & WebGL</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-green-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Backend & Security</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Node.js & Python (FastAPI)</li>
                <li>PostgreSQL & MongoDB</li>
                <li>Cybersecurity & Threat Intel</li>
                <li>Encryption & Auth</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-orange-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Tools & DevOps</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Docker & Kubernetes</li>
                <li>AWS & Firebase</li>
                <li>Git & CI/CD</li>
                <li>Linux & Bash</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="px-6 max-w-7xl mx-auto w-full pt-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl font-bold">Let&apos;s work together</h2>
          <div className="flex gap-6">
            <a href="mailto:mominayousaf9@gmail.com" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" title="Email"><Mail className="w-5 h-5" /></a>
            <a href="https://linkedin.com/in/momina-yousaf9" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" title="LinkedIn"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="mt-8 text-center md:text-left text-gray-500 text-sm">
          © {new Date().getFullYear()} Momina Yousaf. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
