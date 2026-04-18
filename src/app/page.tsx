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
      <section id="work" className="py-32 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 font-poppins mb-4">Latest Projects</div>
              <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none font-syne">
                Work <br />
                <span className="italic font-normal text-black">showcase.</span>
              </h2>
            </div>
            <div className="text-right">
              <Link href="/projects" className="group flex items-center gap-4 px-10 py-5 bg-white border border-gray-200 rounded-2xl text-sm font-bold hover:bg-black hover:text-white transition-all shadow-sm font-poppins">
                View all projects <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          <div className="max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            <div className="divide-y divide-gray-100 border-y border-gray-100">
              {PROJECTS.map((project, index) => (
                <Link 
                  key={project.slug} 
                  href={`/projects/${project.slug}`} 
                  className="group block bg-white py-6 px-4 md:px-8 transition-all hover:bg-black"
                >
                  <div className="grid md:grid-cols-12 gap-8 items-center">
                    {/* Index */}
                    <div className="hidden md:block md:col-span-1">
                      <span className="text-[11px] font-bold text-gray-400 group-hover:text-gray-700 font-syne transition-colors tracking-tighter">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Thumbnail */}
                    <div className="md:col-span-2">
                       <div className="aspect-[16/11] bg-gray-50 rounded-xl overflow-hidden border border-gray-100 group-hover:border-white/20 transition-all duration-500 shadow-sm">
                        <img 
                          src={project.thumbnail || project.images?.[0]} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                       </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-6">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight font-syne group-hover:text-white transition-colors mb-1">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#10b981] font-syne group-hover:text-[#10b981] transition-colors">{project.niche}</span>
                        <span className="w-1 h-1 bg-gray-300 group-hover:bg-gray-700 rounded-full"></span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 font-syne group-hover:text-gray-400 transition-colors">{project.location || "Global"}</span>
                      </div>
                      
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.stack.split(",").slice(0, 3).map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-white border border-gray-200 text-[9px] font-bold uppercase tracking-widest text-gray-500 group-hover:bg-transparent group-hover:border-white/30 group-hover:text-white transition-all font-syne">
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link Label */}
                    <div className="md:col-span-3 flex justify-end items-center">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-[#10b981] transition-colors font-poppins text-right">
                        {project.link ? `${project.link.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]} ↗` : 'Link N/A'}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 font-poppins">
            {PROJECTS.length} of {PROJECTS.length} shown
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-20 items-center">
          <div className="md:col-span-12 lg:col-span-5">
            <h2 className="text-7xl font-bold tracking-tighter leading-none font-syne">Hi, I'm <br />Umair.</h2>
            <div className="mt-8 text-[#10b981] text-xl font-black uppercase tracking-widest">Full-Stack Engineer</div>
          </div>
          <div className="md:col-span-12 lg:col-span-7 space-y-12 text-xl text-gray-600 leading-relaxed font-dm">
            <div className="space-y-6">
              <p className="text-2xl text-black font-medium leading-snug">
                I specialize in building end-to-end digital products using modern technologies.
              </p>
              <p>
                From robust PHP/Laravel backends and AWS cloud infrastructure to pixel-perfect Next.js and React frontends.
                My focus is on creating scalable, maintainable systems that solve real business problems.
              </p>
            </div>

            <div className="pt-12 border-t border-gray-100 flex flex-wrap gap-x-12 gap-y-6 text-sm">
              <div>
                <div className="font-semibold text-black">Based in</div>
                <div className="text-gray-500">Lahore, Pakistan</div>
              </div>
              <div>
                <div className="font-semibold text-black">Available for</div>
                <div className="text-gray-500">Freelance & Contract projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK MATIX */}
      <section className="py-24 bg-[#FBFBFB] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 font-poppins mb-4">Core Competencies</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter font-syne uppercase">Tech Stack</h2>
          </div>
          
          <div className="border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-200">
              {[
                { category: "BACKEND", tags: ["Laravel", "PHP", "MySQL", "REST APIs", "Laravel Breeze"], primary: ["Laravel"] },
                { category: "FRONTEND", tags: ["Tailwind CSS", "HTML", "Bootstrap", "JavaScript", "Blade templates"], primary: ["Tailwind CSS", "JavaScript"] },
                { category: "INTEGRATIONS", tags: ["Deliverect API", "QuickBooks API", "Barcode APIs", "Payment Gateways"], primary: [] },
                { category: "ARCHITECTURE", tags: ["Multi-tenant SaaS", "RBAC", "Admin portals", "Auth systems", "Custom CMS"], primary: ["Multi-tenant SaaS", "RBAC"] },
                { category: "TOOLS", tags: ["Git", "Composer", "Postman", "cPanel"], primary: ["Git"] }
              ].map((row) => (
                <div key={row.category} className="grid grid-cols-12 group">
                  <div className="col-span-12 md:col-span-3 p-6 md:p-8 bg-[#FBFBFB] border-b md:border-b-0 md:border-r border-gray-200 flex items-center">
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400 font-poppins">{row.category}</span>
                  </div>
                  <div className="col-span-12 md:col-span-9 p-6 md:p-8 flex flex-wrap gap-3">
                    {row.tags.map((tag) => (
                      <div 
                        key={tag} 
                        className={`px-4 py-2 text-[11px] font-bold uppercase tracking-wider font-poppins transition-all duration-300 ${
                          row.primary.includes(tag) 
                            ? "border-2 border-gray-800 text-black shadow-sm" 
                            : "border border-gray-200 text-gray-400 group-hover:text-gray-600"
                        }`}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Legend */}
            <div className="p-6 md:p-8 bg-[#FBFBFB] border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-[10px] font-medium text-gray-400 uppercase tracking-widest font-poppins">
                Bold border = primary expertise
              </div>
              <div className="text-[10px] font-medium text-gray-400 uppercase tracking-widest font-poppins">
                Muted = supporting / occasional
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <div>
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 font-poppins mb-4">What I Build</div>
              <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.8] font-syne">
                Full-stack <br />
                <span className="italic font-normal">services.</span>
              </h2>
            </div>
            <div className="max-w-xs text-right self-end">
              <p className="text-[11px] font-medium leading-relaxed text-gray-500 uppercase tracking-widest font-poppins">
                Every service ships as a complete, working product — not a prototype.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 border border-gray-200">
            {/* Service 01 */}
            <div className="p-10 md:p-16 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-[#FBFBFB] transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <span className="text-xs font-bold text-gray-400 font-poppins">01</span>
                <span className="px-3 py-1 border border-gray-200 text-[9px] font-bold uppercase tracking-widest text-gray-400">SaaS</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight font-syne mb-6 italic group-hover:text-[#10b981] transition-colors">SaaS Platform Development</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-10 font-poppins max-w-sm">
                Multi-tenant applications with role-based access, subscription flows, and deep API integrations.
              </p>
              <ul className="space-y-3 mb-12">
                {['Multi-tenant architecture', 'RBAC & permissions', 'QuickBooks / third-party APIs', 'Custom admin dashboard'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                    <span className="w-4 h-px bg-gray-300"></span> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-8 border-t border-gray-100 text-[10px] italic text-gray-400 font-poppins">
                Seen in: TMS trucking platform — Canadian logistics SaaS.
              </div>
            </div>

            {/* Service 02 */}
            <div className="p-10 md:p-16 border-b border-gray-200 md:border-b-0 hover:bg-[#FBFBFB] transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <span className="text-xs font-bold text-gray-400 font-poppins">02</span>
                <span className="px-3 py-1 border border-gray-200 text-[9px] font-bold uppercase tracking-widest text-gray-400">E-commerce</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight font-syne mb-6 italic group-hover:text-[#10b981] transition-colors">Food & Retail E-commerce</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-10 font-poppins max-w-sm">
                Proprietary storefronts and food delivery platforms with deals engines and delivery integrations.
              </p>
              <ul className="space-y-3 mb-12">
                {['Custom storefront & checkout', 'Deals & discounts engine', 'Deliverect API integration', 'Category & menu management'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                    <span className="w-4 h-px bg-gray-300"></span> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-8 border-t border-gray-100 text-[10px] italic text-gray-400 font-poppins">
                Seen in: Medaan — food delivery platform, Calgary CA.
              </div>
            </div>

            {/* Service 03 */}
            <div className="p-10 md:p-16 border-t border-gray-200 md:border-r hover:bg-[#FBFBFB] transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <span className="text-xs font-bold text-gray-400 font-poppins">03</span>
                <span className="px-3 py-1 border border-gray-200 text-[9px] font-bold uppercase tracking-widest text-gray-400">ERP</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight font-syne mb-6 italic group-hover:text-[#10b981] transition-colors">ERP & Inventory Systems</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-10 font-poppins max-w-sm">
                End-to-end inventory engines, order lifecycle tracking, and CRM built for real operations.
              </p>
              <ul className="space-y-3 mb-12">
                {['Barcode-driven inventory', 'Custom product bundling', 'Multi-tenant CRM', 'Real-time analytics'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                    <span className="w-4 h-px bg-gray-300"></span> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-8 border-t border-gray-100 text-[10px] italic text-gray-400 font-poppins">
                Seen in: ANR Inventory ERP — US market.
              </div>
            </div>

            {/* Service 04 */}
            <div className="p-10 md:p-16 border-t border-gray-200 hover:bg-[#FBFBFB] transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <span className="text-xs font-bold text-gray-400 font-poppins">04</span>
                <span className="px-3 py-1 border border-gray-200 text-[9px] font-bold uppercase tracking-widest text-gray-400">Booking</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight font-syne mb-6 italic group-hover:text-[#10b981] transition-colors">Booking & Reservation Platforms</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-10 font-poppins max-w-sm">
                Conversion-optimised booking flows with package browsers, guide profiles, and custom CMS.
              </p>
              <ul className="space-y-3 mb-12">
                {['Booking engine & availability', 'Tour & package management', 'Custom CMS for admins', 'Dynamic homepage controls'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                    <span className="w-4 h-px bg-gray-300"></span> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-8 border-t border-gray-100 text-[10px] italic text-gray-400 font-poppins">
                Seen in: Hot Air Balloon platform — Dubai, AE.
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 font-poppins">
              <span>4 services</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full self-center"></span>
              <span>3 markets</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full self-center"></span>
              <span>Laravel ecosystem</span>
            </div>
            <a 
              href="https://wa.me/923354455494" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white border border-gray-200 rounded-2xl text-sm font-bold hover:bg-black hover:text-white transition-all shadow-sm font-poppins flex items-center gap-4"
            >
              Start a project <span>→</span>
            </a>
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