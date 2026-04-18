"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PROJECTS } from "../data/projects";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMobileMenu = () => {
    if (typeof window !== "undefined") {
      window.open("https://wa.me/923354455494", "_blank");
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-2xl font-bold tracking-tighter uppercase font-syne">UMAIR</div>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#0A0A0A] overflow-x-hidden selection:bg-[#10b981] selection:text-white antialiased font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-3xl font-bold tracking-tighter text-black uppercase font-syne">UMAIR</div>

          <div className="hidden md:flex items-center gap-10 text-base">
            <a href="#work" className="font-medium hover:text-[#10b981] transition-colors">Work</a>
            <a href="#about" className="font-medium hover:text-[#10b981] transition-colors">About</a>
            <a href="#services" className="font-medium hover:text-[#10b981] transition-colors">Services</a>
            <a href="#process" className="font-medium hover:text-[#10b981] transition-colors">Process</a>
          </div>

          <a
            href="https://wa.me/923354455494"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-3 px-7 py-3.5 bg-black hover:bg-[#10b981] text-white rounded-2xl text-sm font-semibold transition-all duration-300"
          >
            Book a Call
          </a>

          <button
            className="md:hidden text-2xl"
            onClick={handleMobileMenu}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-32 pb-24 relative overflow-hidden bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[0.9] font-bold tracking-tighter mb-8 font-syne">
              I build <span className="text-[#10b981]">scalable</span><br />systems that last.
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 max-w-2xl leading-tight font-dm">
              Full-stack developer crafting robust Laravel backends, beautiful Next.js frontends,
              and production-grade AWS infrastructure.
            </p>

            <div className="mt-16 flex flex-wrap gap-5">
              <a
                href="#work"
                className="group inline-flex items-center gap-4 px-10 py-6 bg-white text-black rounded-3xl text-xl font-medium hover:bg-[#10b981] hover:text-white transition-all shadow-xl"
              >
                Explore My Work
              </a>

              <a
                href="https://wa.me/923354455494"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-6 border-2 border-white/30 hover:border-white rounded-3xl text-xl font-medium transition-all"
              >
                Free Consultation
              </a>
            </div>

            <div className="mt-20 flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">
              <div>Based in Lahore, Pakistan</div>
              <div className="w-px h-4 bg-gray-800"></div>
              <div>Available for projects</div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl group">
               <img src="/portfolioimg.png" alt="Umair Tufail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[#10b981] p-8 rounded-3xl shadow-2xl">
               <div className="text-xs uppercase tracking-widest font-black text-black">Active Status</div>
               <div className="text-2xl font-black text-white">Open to Work</div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981]/5 blur-[120px] rounded-full -mr-40 -mt-40"></div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="py-32 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter font-syne">Selected Work</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-md">Real projects delivered with modern full-stack tools.</p>
            </div>
            <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-[#10b981]">
              View all projects
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.slug} className="group bg-white rounded-[40px] overflow-hidden border border-gray-200/60 shadow-sm hover:shadow-2xl transition-all duration-700">
                <div className="relative h-72 bg-gray-900">
                  <img
                    src={project.thumbnail || project.images?.[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-[0.1em] px-5 py-2 rounded-full">
                    {project.niche}
                  </div>
                </div>
                <div className="p-10 flex flex-col">
                  <h3 className="text-2xl font-bold tracking-tight leading-tight font-syne">{project.title}</h3>
                  <p className="mt-4 text-gray-500 leading-relaxed text-sm line-clamp-2 italic font-dm">
                    {project.problem}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.stack.split(",").slice(0, 3).map(tag => (
                      <span key={tag} className="text-[9px] font-black uppercase tracking-wider bg-black text-white px-4 py-2 rounded-xl">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>

                  <Link href={`/projects/${project.slug}`} className="mt-10 inline-flex items-center gap-3 text-[11px] font-black text-[#10b981] uppercase tracking-widest">
                    View Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-20 items-center">
          <div className="md:col-span-5">
            <h2 className="text-7xl font-bold tracking-tighter leading-none font-syne">Hi, I'm <br />Umair.</h2>
            <div className="mt-8 text-[#10b981] text-xl font-black uppercase tracking-widest">Full-Stack Engineer</div>
          </div>
          <div className="md:col-span-7 space-y-8 text-xl text-gray-600 leading-relaxed font-dm">
            <p className="text-2xl text-black font-medium leading-snug">
              I specialize in building end-to-end digital products using modern technologies.
            </p>
            <p>
              From robust PHP/Laravel backends and AWS cloud infrastructure to pixel-perfect Next.js and React frontends.
              My focus is on creating scalable, maintainable systems that solve real business problems.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tighter mb-4 font-syne">Services</h2>
          <div className="mt-20 grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all">
              <div className="text-3xl font-bold font-syne">SaaS Development</div>
              <div className="mt-12 text-5xl font-black text-black font-syne">$700+</div>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border-t-8 border-[#10b981]">
              <div className="text-3xl font-bold font-syne">Admin Systems</div>
              <div className="mt-12 text-5xl font-black text-black font-syne">$500+</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-20">
            <div>
              <div className="text-4xl font-black tracking-tighter text-white uppercase font-syne">UMAIR</div>
              <p className="mt-6 text-gray-500 max-w-xs text-sm font-medium">Full-stack architect specializing in Laravel, Next.js, and Cloud Infrastructure.</p>
            </div>
          </div>
          <div className="mt-32 pt-12 border-t border-white/5 text-center text-[9px] text-gray-600 tracking-[0.4em] font-black uppercase">
            © {new Date().getFullYear()} UMAIR TUFAIL • ENGINEERED IN LAHORE
          </div>
        </div>
      </footer>
    </div>
  );
}