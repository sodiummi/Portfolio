"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { useState } from "react";

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

const categories = ["All", "AI/ML", "Web App", "Data Viz", "Security", "VR/AR", "Mobile"];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="flex flex-col gap-20 pb-20 min-h-screen">
            <div className="px-6 max-w-7xl mx-auto w-full pt-20">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="space-y-6 mb-12"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl md:text-6xl font-bold tracking-tighter"
                    >
                        All Work
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-gray-400 max-w-2xl"
                    >
                        A collection of projects spanning AI, data visualization, web applications, and more.
                    </motion.p>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                ? "bg-white text-black"
                                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
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
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-300 mb-4 line-clamp-2 text-sm">{project.description}</p>
                                    <div className="flex gap-2 flex-wrap mb-4">
                                        {project.techStack.slice(0, 3).map((tech) => (
                                            <span key={tech} className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-200 backdrop-blur-sm">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-200 backdrop-blur-sm">
                                                +{project.techStack.length - 3}
                                            </span>
                                        )}
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
                </motion.div>
            </div>
        </div>
    );
}
