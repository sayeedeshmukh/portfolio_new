import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function CaseStudy({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <main className="min-h-screen bg-[#fbf9f6] text-neutral-900 pb-32">
      {/* Header */}
      <div className="w-full bg-white border-b border-neutral-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/#projects" className="inline-flex items-center text-neutral-500 hover:text-brand-pink transition-colors font-jakarta font-medium text-sm">
            <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
          </Link>
          <div className="flex gap-4">
            {project.website && (
              <a href={project.website} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-brand-pink transition-colors">
                <ExternalLink size={20} />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-brand-pink transition-colors">
                <FaGithub size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-16">
        <h1 className="font-jakarta text-5xl md:text-6xl font-bold tracking-tight mb-4">
          {project.name}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-500 font-medium mb-10 max-w-2xl">
          {project.tagline}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-neutral-200/60 mb-16">
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-neutral-400 mb-2">Role</h4>
            <p className="font-medium text-neutral-800">{project.role}</p>
          </div>
          <div className="col-span-2 md:col-span-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-neutral-400 mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(t => (
                <span key={t} className="text-sm bg-neutral-100 px-3 py-1 rounded-full text-neutral-600 font-medium">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Big Showcase Image */}
        <div className="w-full aspect-[16/9] relative rounded-3xl overflow-hidden shadow-2xl mb-16 border border-black/5">
          <Image src={project.image} alt={project.name} fill className="object-cover" priority />
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Overview & Problem */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="font-amatic text-5xl font-bold text-neutral-800 sticky top-24">Overview</h2>
            </div>
            <div className="md:col-span-8 space-y-8">
              <p className="text-lg text-neutral-600 leading-relaxed bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">{caseStudy.overview}</p>
              
              <div>
                <h3 className="font-jakarta text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-pink/10 text-brand-pink flex items-center justify-center mr-3 text-sm">01</span>
                  The Problem
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed">{caseStudy.problemStatement}</p>
              </div>
            </div>
          </div>

          {/* Research & Design */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="font-amatic text-5xl font-bold text-neutral-800 sticky top-24">Process</h2>
            </div>
            <div className="md:col-span-8 space-y-12">
              <div>
                <h3 className="font-jakarta text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-pink/10 text-brand-pink flex items-center justify-center mr-3 text-sm">02</span>
                  Research
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed">{caseStudy.research}</p>
              </div>

              <div>
                <h3 className="font-jakarta text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-pink/10 text-brand-pink flex items-center justify-center mr-3 text-sm">03</span>
                  Design Decisions
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed">{caseStudy.designDecisions}</p>
              </div>
              
              <div>
                <h3 className="font-jakarta text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-pink/10 text-brand-pink flex items-center justify-center mr-3 text-sm">04</span>
                  Development
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed">{caseStudy.developmentProcess}</p>
              </div>
            </div>
          </div>

          {/* Final UI Showcase Image */}
          <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-black/5">
            <Image 
              src={caseStudy.finalUI} 
              alt={`${project.name} Final UI`} 
              width={1200} 
              height={800} 
              className="w-full h-auto object-cover" 
            />
          </div>

          {/* Challenges & Reflections */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="font-amatic text-5xl font-bold text-neutral-800 sticky top-24">Outcome</h2>
            </div>
            <div className="md:col-span-8 space-y-12">
              <div>
                <h3 className="font-jakarta text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center mr-3 text-sm">!</span>
                  Challenges Faced
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed">{caseStudy.challenges}</p>
              </div>

              <div className="bg-brand-pink/5 p-8 rounded-2xl border border-brand-pink/10">
                <h3 className="font-jakarta text-2xl font-bold mb-4 text-brand-pink-dark">Reflections</h3>
                <p className="text-lg text-neutral-700 leading-relaxed italic">"{caseStudy.reflections}"</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="font-jakarta text-3xl font-bold mb-8">Ready to see it in action?</h3>
          <div className="flex justify-center gap-4">
            {project.website && (
              <a href={project.website} target="_blank" rel="noreferrer" className="px-8 py-4 bg-brand-pink text-white rounded-full font-jakarta font-semibold hover:bg-brand-pink-dark hover:shadow-lg transition-all hover:-translate-y-1">
                View Live Site
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white border border-neutral-200 text-neutral-800 rounded-full font-jakarta font-semibold hover:border-neutral-300 hover:shadow-md transition-all hover:-translate-y-1">
                Source Code
              </a>
            )}
          </div>
        </div>

      </section>
    </main>
  );
}
