"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PROJECTS } from "../../data/projects";

export default function AllProjects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-2xl font-bold tracking-tighter heading-font uppercase">UMAIR</div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FA] text-[#0A0A0A] min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold tracking-tighter heading-font text-black uppercase">UMAIR</Link>
          
          <div className="hidden md:flex items-center gap-10 text-base">
            <Link href="/#work" className="nav-link font-medium hover:text-[#10b981] transition-colors">Work</Link>
            <Link href="/#about" className="nav-link font-medium hover:text-[#10b981] transition-colors">About</Link>
            <Link href="/#services" className="nav-link font-medium hover:text-[#10b981] transition-colors">Services</Link>
          </div>

          <a 
            href="https://wa.me/923354455494" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:flex items-center gap-3 px-7 py-3.5 bg-black hover:bg-[#10b981] text-white rounded-2xl text-sm font-semibold transition-all duration-300"
          >
            Work with me
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-20">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter heading-font mb-6">Archive.</h1>
            <p className="text-2xl text-gray-500 max-w-2xl leading-tight">
              A comprehensive list of systems, platforms, and products I've engineered over the years.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <Link 
                key={project.slug} 
                href={`/projects/${project.slug}`}
                className="group flex flex-col bg-white rounded-[40px] overflow-hidden border border-gray-200/50 hover:border-[#10b981]/30 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
              >
                <div className="relative h-72 bg-gray-100 overflow-hidden">
                  <img 
                    src={project.thumbnail || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-black text-white px-5 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.1em]">
                      {project.niche}
                    </span>
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold heading-font tracking-tight leading-none mb-4 group-hover:text-[#10b981] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-8">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-black text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-[#0A0A0A] text-white py-20">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold heading-font mb-8">Let's talk about your project.</h2>
            <a href="https://wa.me/923354455494" className="inline-flex items-center gap-4 px-12 py-6 bg-[#10b981] text-white rounded-3xl text-xl font-medium hover:bg-white hover:text-black transition-all">
               Get in Touch
            </a>
         </div>
      </footer>
    </div>
  );
}