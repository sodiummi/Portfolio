"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Code, Brain, Database, Wrench } from "lucide-react";
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

export default function About() {
  return (
    <div className="flex flex-col gap-20 pb-20 overflow-hidden">
      <LiquidCursor />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed"
          >
            AI-focused Software Engineer with hands-on experience developing and deploying <span className="text-white font-medium">LLM-powered</span> and <span className="text-white font-medium">ML-based applications</span>. Skilled in building end-to-end AI products, scalable backend systems, and integrating MLOps practices using Python, FastAPI, and Docker. Experienced in prompt engineering, RAG (Retrieval-Augmented Generation), and web technologies such as React and Flask. Passionate about creating production-ready AI products that power real-world digital transformation.
          </motion.p>
        </motion.div>
      </section>

      {/* Work Experience */}
      <section className="px-6 max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Work Experience</h2>
          </div>

          <div className="space-y-12">
            {/* Cymax Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500"></div>
              <div className="mb-2">
                <h3 className="text-2xl font-bold text-white">Software Engineer (AI)</h3>
                <p className="text-purple-400 font-medium">Cymax Technologies, Pakistan</p>
                <p className="text-gray-500 text-sm">Oct 2024 - Aug 2025</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2"><span className="text-purple-400 mt-1">•</span><span>Designed and deployed enterprise-grade conversational AI solutions using <strong>GPT, LangChain, and FAISS</strong>, enabling multi-document semantic search and context-aware responses.</span></li>
                <li className="flex gap-2"><span className="text-purple-400 mt-1">•</span><span>Built and fine-tuned <strong>LLM-based chatbots</strong> with feedback loops for continuous learning and performance optimization.</span></li>
                <li className="flex gap-2"><span className="text-purple-400 mt-1">•</span><span>Developed scalable <strong>Flask/FastAPI</strong> backends, integrated with PostgreSQL, Hugging Face models, and internal APIs.</span></li>
                <li className="flex gap-2"><span className="text-purple-400 mt-1">•</span><span>Automated large-scale web scraping using <strong>SerpAPI</strong>, building data pipelines for structured extraction (LinkedIn, Google Maps, Glassdoor).</span></li>
                <li className="flex gap-2"><span className="text-purple-400 mt-1">•</span><span>Created real-time chat systems for healthcare apps using <strong>WebSockets and Jetpack Compose</strong>.</span></li>
                <li className="flex gap-2"><span className="text-purple-400 mt-1">•</span><span>Implemented MLOps practices: containerized models using <strong>Docker</strong>, set up API endpoints for inference, and managed deployments.</span></li>
                <li className="flex gap-2"><span className="text-purple-400 mt-1">•</span><span>Customized and extended modules in <strong>Odoo 18</strong> for internal process automation and task tracking.</span></li>
              </ul>
            </motion.div>

            {/* Safe City FYP */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="mb-2">
                <h3 className="text-2xl font-bold text-white">Backend Developer (Python)</h3>
                <p className="text-blue-400 font-medium">Safe City (FYP Implementation), Islamabad</p>
                <p className="text-gray-500 text-sm">Oct 2023 - Jun 2024</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2"><span className="text-blue-400 mt-1">•</span><span>Developed <strong>CityWatch</strong>, a real-time computer vision system for accident and violence detection.</span></li>
                <li className="flex gap-2"><span className="text-blue-400 mt-1">•</span><span>Built hybrid deep learning pipelines (<strong>Inception + Custom CNN</strong>) with stream-based inference.</span></li>
                <li className="flex gap-2"><span className="text-blue-400 mt-1">•</span><span>Designed scalable backend in <strong>Python</strong> for stream ingestion, event classification, and emergency alerts.</span></li>
                <li className="flex gap-2"><span className="text-blue-400 mt-1">•</span><span>Deployed the system using <strong>Docker</strong> for continuous monitoring and cloud scalability.</span></li>
              </ul>
            </motion.div>

            {/* ZEETech */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-green-500/30 hover:border-green-500 transition-colors"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-500"></div>
              <div className="mb-2">
                <h3 className="text-2xl font-bold text-white">Software Engineer</h3>
                <p className="text-green-400 font-medium">ZEETech, PITB, Pakistan</p>
                <p className="text-gray-500 text-sm">Mar 2023 - Dec 2023</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2"><span className="text-green-400 mt-1">•</span><span>Developed AI models for image enhancement and anime-style generation using <strong>CNNs and OpenCV</strong>.</span></li>
                <li className="flex gap-2"><span className="text-green-400 mt-1">•</span><span>Collaborated with frontend teams to integrate AI APIs into production-level web applications.</span></li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Education */}
      <section className="px-6 max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Education</h2>
          </div>

          <div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-blue-500/50 transition-colors">
            <h3 className="text-2xl font-bold text-white mb-2">BS Computer Science</h3>
            <p className="text-blue-400 font-medium mb-1">University of Engineering and Technology, Taxila</p>
            <p className="text-gray-500 text-sm mb-4">Aug 2020 - Jul 2024</p>
            <p className="text-gray-300 mb-4">
              <strong>Thesis:</strong> Autonomous Crime and Accident Detection using <strong>Django, TensorFlow, Keras, OpenCV</strong>
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm">Machine Learning</span>
              <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm">Neural Networks</span>
              <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm">Cloud Computing</span>
              <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm">AI</span>
              <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm">Data Science</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Technical Skills */}
      <section className="px-6 max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Code className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Programming */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">Python</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">JavaScript</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">C#</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">SQL</span>
              </div>
            </div>

            {/* AI/ML */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-pink-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-pink-400" />
                <h3 className="text-xl font-bold text-white">AI/ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">TensorFlow</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">Keras</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">PyTorch</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">LangChain</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">HuggingFace</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">FAISS</span>
              </div>
            </div>

            {/* Web & Backend */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Web & Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">Flask</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">FastAPI</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">React</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">Django</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">REST APIs</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">Laravel</span>
              </div>
            </div>

            {/* MLOps */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-bold text-white">MLOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">Docker</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">CI/CD</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">Model Deployment</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">MLflow (basic)</span>
              </div>
            </div>

            {/* Databases */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-green-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold text-white">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">PostgreSQL</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">MySQL</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">SQLite</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">MongoDB</span>
              </div>
            </div>

            {/* Tools */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-yellow-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">Git</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">Bitbucket</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">Jupyter</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">Odoo</span>
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 text-sm">VS Code</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Certifications */}
      <section className="px-6 max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Award className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-neutral-900/50 border border-white/10 hover:border-yellow-500/50 transition-colors">
              <p className="text-white font-semibold">Generative AI Fundamentals</p>
              <p className="text-gray-400 text-sm">IBM</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/50 border border-white/10 hover:border-yellow-500/50 transition-colors">
              <p className="text-white font-semibold">TensorFlow Developer Specialization</p>
              <p className="text-gray-400 text-sm">deeplearning.ai</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/50 border border-white/10 hover:border-yellow-500/50 transition-colors">
              <p className="text-white font-semibold">Intermediate Machine Learning</p>
              <p className="text-gray-400 text-sm">Kaggle</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/50 border border-white/10 hover:border-yellow-500/50 transition-colors">
              <p className="text-white font-semibold">Python for Everybody</p>
              <p className="text-gray-400 text-sm">University of Michigan</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/50 border border-white/10 hover:border-yellow-500/50 transition-colors">
              <p className="text-white font-semibold">Generative AI for Leaders</p>
              <p className="text-gray-400 text-sm">Udemy</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Awards & Activities */}
      <section className="px-6 max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Award className="w-8 h-8 text-pink-400" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Awards & Activities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-2">🏆 Regional Winner</h3>
              <p className="text-gray-300">Huawei Innovation Track</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-2">🥇 Winner</h3>
              <p className="text-gray-300">PakCrypt Challenge 2023</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <h3 className="text-xl font-bold text-white mb-2">👨‍💼 Captain</h3>
              <p className="text-gray-300">UETT Table Tennis & Swimming Teams</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20">
              <h3 className="text-xl font-bold text-white mb-2">🤝 Volunteer</h3>
              <p className="text-gray-300">Women in Tech Pakistan - AI Mentorship</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
