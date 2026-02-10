import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen pb-20">
            {/* Hero Section */}
            <div className={`relative h-[50vh] flex items-center justify-center bg-gradient-to-br ${project.colors.from} ${project.colors.to}`}>
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">{project.title}</h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">{project.description}</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 -mt-20 relative z-20">
                <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Projects
                    </Link>

                    <div className="space-y-12">
                        {/* Overview & Tech */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="md:col-span-2">
                                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {project.fullDescription}
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-semibold">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-semibold">Interested?</h3>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all"
                                    >
                                        Request a Demo
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Challenge & Outcome */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8 border-t border-white/10">
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-red-400">The Challenge</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    {project.challenge}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-green-400">The Solution & Outcome</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    {project.outcome}
                                </p>
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="pt-8 border-t border-white/10">
                            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                                        <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${project.colors.from} ${project.colors.to}`} />
                                        <span className="text-gray-200">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
