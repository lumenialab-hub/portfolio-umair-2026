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
        <div className="animate-pulse text-2xl font-bold tracking-tighter heading-font uppercase">UMAIR</div>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#0A0A0A] overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-3xl font-bold tracking-tighter heading-font text-black uppercase">UMAIR</div>

          <div className="hidden md:flex items-center gap-10 text-base">
            <a href="#work" className="nav-link font-medium hover:text-[#10b981] transition-colors">Work</a>
            <a href="#about" className="nav-link font-medium hover:text-[#10b981] transition-colors">About</a>
            <a href="#services" className="nav-link font-medium hover:text-[#10b981] transition-colors">Services</a>
            <a href="#process" className="nav-link font-medium hover:text-[#10b981] transition-colors">Process</a>
          </div>

          <a
            href="https://wa.me/923354455494"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-3 px-7 py-3.5 bg-black hover:bg-[#10b981] text-white rounded-2xl text-sm font-semibold transition-all duration-300"
          >
            <i className="fa-solid fa-calendar"></i>
            Book a Call
          </a>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            className="md:hidden text-2xl"
            onClick={handleMobileMenu}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center hero-bg text-white pt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl leading-none font-bold tracking-tighter heading-font mb-8">
              I build <span className="text-[#10b981]">scalable</span><br />systems that last.
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 max-w-2xl leading-tight">
              Full-stack developer crafting robust Laravel backends, beautiful Next.js frontends,
              and production-grade AWS infrastructure.
            </p>

            <div className="mt-16 flex flex-wrap gap-5">
              <a
                href="#work"
                className="group inline-flex items-center gap-4 px-10 py-6 bg-white text-black rounded-3xl text-xl font-medium hover:bg-[#10b981] hover:text-white transition-all"
              >
                Explore My Work
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>

              <a
                href="https://wa.me/923354455494"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-6 border-2 border-white/70 hover:border-white rounded-3xl text-xl font-medium transition-all"
              >
                Free Consultation
              </a>
            </div>

            <div className="mt-20 flex items-center gap-8 text-sm uppercase tracking-widest text-gray-400">
              <div>Based in Lahore, Pakistan</div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div>Available for projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="section-padding bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter heading-font">Selected Work</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-md">Real projects delivered with modern full-stack tools.</p>
            </div>
            <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-[#10b981]">
              View all projects <span className="text-xl">→</span>
            </Link>
          </div>

          {/* Horizontal Scroll */}
          <div className="horizontal-scroll overflow-x-auto pb-8 snap-x snap-mandatory">
            <div className="flex gap-8 pr-12 md:pr-24" style={{ width: "max-content" }}>
              {PROJECTS.filter(p => p.featured).map((project, index) => (
                <div key={project.slug} className="project-card w-[460px] bg-white rounded-[40px] overflow-hidden border border-gray-200/60 snap-center shadow-sm">
                  <div className="relative h-80 bg-gray-900">
                    <img
                      src={project.thumbnail || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-80"
                    />
                    <div className="absolute top-6 right-6 bg-black text-white text-[9px] font-bold uppercase tracking-[0.1em] px-5 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                      {project.niche}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col h-full">
                    <h3 className="text-3xl font-semibold heading-font tracking-tight leading-tight">{project.title}</h3>
                    <p className="mt-4 text-gray-600 leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="text-[9px] font-bold uppercase tracking-wider bg-black/5 text-gray-600 px-4 py-2 rounded-2xl">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link href={`/projects/${project.slug}`} className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#10b981] group-hover:gap-4 transition-all uppercase tracking-widest text-[11px]">
                      View Case Study <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-padding">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-20">
          <div className="md:col-span-5">
            <h2 className="text-6xl font-bold tracking-tighter heading-font leading-none">Hi, I'm Umair.</h2>
            <div className="mt-8 text-[#10b981] text-xl font-medium uppercase tracking-tight">Full-Stack Engineer</div>
          </div>
          <div className="md:col-span-7 space-y-8 text-xl text-gray-600 leading-relaxed">
            <p>
              I specialize in building end-to-end digital products using modern technologies.
              From robust PHP/Laravel backends and AWS cloud infrastructure to pixel-perfect Next.js and React frontends.
            </p>
            <p>
              My focus is on creating scalable, maintainable systems that solve real business problems.
              Whether it's a SaaS platform, complex dashboard, or high-traffic API — I deliver clean code and exceptional user experiences.
            </p>
            <div className="pt-6 border-t border-gray-200 flex flex-wrap gap-x-12 gap-y-6 text-sm">
              <div>
                <div className="font-semibold text-black">Currently learning</div>
                <div className="text-gray-500">Advanced AWS architectures &amp; AI integrations</div>
              </div>
              <div>
                <div className="font-semibold text-black">Based in</div>
                <div className="text-gray-500">Lahore, Pakistan</div>
              </div>
              <div>
                <div className="font-semibold text-black">Open to</div>
                <div className="text-gray-500">Freelance &amp; Contract projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-padding bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tighter heading-font mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-md">Project-based pricing with transparent deliverables.</p>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-gray-100">
              <div className="text-2xl font-semibold heading-font">Full-Stack SaaS Development</div>
              <div className="mt-6 text-gray-600 text-sm">TALL Stack</div>
              <div className="mt-12 text-4xl font-bold text-[#10b981]">Starting from $700</div>
              <ul className="mt-8 space-y-4 text-gray-600 text-sm">
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-emerald-500"></i> User authentication &amp; billing</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-emerald-500"></i> Real-time features</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-emerald-500"></i> Scalable cloud setup</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-gray-100">
              <div className="text-2xl font-semibold heading-font">Admin Dashboards &amp; Internal Tools</div>
              <div className="mt-6 text-gray-600 text-sm">Powerful TALL stack admin panels</div>
              <div className="mt-12 text-4xl font-bold text-[#10b981]">Starting from $500</div>
              <ul className="mt-8 space-y-4 text-gray-600 text-sm">
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-emerald-500"></i> Data visualization</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-emerald-500"></i> Role-based access</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-emerald-500"></i> Export &amp; reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tighter heading-font mb-16">My Process</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-7xl font-bold text-gray-200 group-hover:text-[#10b981] transition-colors tracking-tighter">01</div>
              <div className="mt-6 text-2xl font-semibold heading-font">Discovery</div>
              <p className="mt-4 text-gray-600 text-sm">Understanding your goals, users, and technical requirements.</p>
            </div>
            <div className="group">
              <div className="text-7xl font-bold text-gray-200 group-hover:text-[#10b981] transition-colors tracking-tighter">02</div>
              <div className="mt-6 text-2xl font-semibold heading-font">Architecture</div>
              <p className="mt-4 text-gray-600 text-sm">Creating clean architecture and beautiful interfaces.</p>
            </div>
            <div className="group">
              <div className="text-7xl font-bold text-gray-200 group-hover:text-[#10b981] transition-colors tracking-tighter">03</div>
              <div className="mt-6 text-2xl font-semibold heading-font">Development</div>
              <p className="mt-4 text-gray-600 text-sm">Iterative coding with regular feedback loops.</p>
            </div>
            <div className="group">
              <div className="text-7xl font-bold text-gray-200 group-hover:text-[#10b981] transition-colors tracking-tighter">04</div>
              <div className="mt-6 text-2xl font-semibold heading-font">Launch</div>
              <p className="mt-4 text-gray-600 text-sm">Deployment, testing, and ongoing maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS / STATS */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-6xl font-bold text-[#10b981]">40+</div>
            <div className="mt-4 text-gray-400 text-sm uppercase tracking-widest">Projects Delivered</div>
          </div>
          <div>
            <div className="text-6xl font-bold text-[#10b981]">15</div>
            <div className="mt-4 text-gray-400 text-sm uppercase tracking-widest">Happy Clients</div>
          </div>
          <div>
            <div className="text-6xl font-bold text-[#10b981]">99.9%</div>
            <div className="mt-4 text-gray-400 text-sm uppercase tracking-widest">Uptime Delivered</div>
          </div>
          <div>
            <div className="text-6xl font-bold text-[#10b981]">AWS</div>
            <div className="mt-4 text-gray-400 text-sm uppercase tracking-widest">Solutions Architect</div>
          </div>
        </div>
      </section>

      {/* CONTACT / FINAL CTA */}
      <section id="contact" className="section-padding bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-6xl font-bold tracking-tighter heading-font">Ready to build something exceptional?</h2>
          <p className="mt-8 text-2xl text-gray-600">Let's discuss your project. First consultation is free.</p>

          <a
            href="https://wa.me/923354455494"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-4 px-12 py-7 bg-black text-white rounded-3xl text-2xl font-medium hover:bg-[#10b981] transition-all"
          >
            Schedule a Call
            <i className="fa-solid fa-arrow-right text-3xl"></i>
          </a>

          <div className="mt-16 text-sm text-gray-500">
            Or email me directly at <span className="text-black font-semibold">mumairtufail786@gmail.com</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div>
              <div className="text-3xl font-bold tracking-tighter heading-font text-white uppercase">UMAIR</div>
              <p className="mt-4 text-gray-400 max-w-xs text-sm">Full-stack developer specializing in Laravel, Next.js &amp; AWS.</p>
            </div>

            <div className="grid grid-cols-3 gap-16">
              <div>
                <div className="font-medium mb-6 text-gray-400 uppercase tracking-widest text-[10px]">Navigation</div>
                <div className="space-y-3 text-xs">
                  <a href="#work" className="block hover:text-[#10b981]">Work</a>
                  <a href="#about" className="block hover:text-[#10b981]">About</a>
                  <a href="#services" className="block hover:text-[#10b981]">Services</a>
                </div>
              </div>
              <div>
                <div className="font-medium mb-6 text-gray-400 uppercase tracking-widest text-[10px]">Connect</div>
                <div className="space-y-3 text-xs">
                  <a href="#" className="block hover:text-[#10b981]">Twitter</a>
                  <a href="#" className="block hover:text-[#10b981]">LinkedIn</a>
                  <a href="#" className="block hover:text-[#10b981]">GitHub</a>
                </div>
              </div>
              <div>
                <div className="font-medium mb-6 text-gray-400 uppercase tracking-widest text-[10px]">Legal</div>
                <div className="space-y-3 text-xs">
                  <a href="#" className="block hover:text-[#10b981]">Privacy</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-gray-800 text-center text-[10px] text-gray-500 tracking-[0.2em] font-medium">
            © {new Date().getFullYear()} UMAIR TUFAIL. ALL RIGHTS RESERVED. BUILT WITH LOVE.
          </div>
        </div>
      </footer>
    </div>
  );
}