"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PROJECTS } from "../data/projects";
import { Menu, X, ArrowRight, Calendar, MessageCircle, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter specific projects requested by user
  const featuredSlugs = ["reseller-frontend", "medaan", "vendors-hendor", "air-ideal", "satradelink", "saas-trucking"];
  const featuredProjects = featuredSlugs.map(slug => PROJECTS.find(p => p.slug === slug)).filter(Boolean);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-2xl font-bold tracking-tighter heading-font uppercase text-black">umair.dev</div>
      </div>
    );
  }

  // Placeholder SVGs for Social Icons to ensure build stability
  const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
  );
  
  const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  );

  return (
    <div className="bg-white text-[#0A0A0A] overflow-x-hidden selection:bg-[#10b981] selection:text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter heading-font text-black uppercase">
            umair<span className="text-[#10b981]">.dev</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-bold">
            <a href="#work" className="hover:text-[#10b981] transition-colors">Work</a>
            <a href="#about" className="hover:text-[#10b981] transition-colors">About</a>
            <a href="#process" className="hover:text-[#10b981] transition-colors">Process</a>
            <div className="w-px h-4 bg-gray-200"></div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/lumenialab-hub" target="_blank" className="hover:text-[#10b981] transition-colors py-1">
                <GithubIcon />
              </a>
              <a href="https://linkedin.com/in/umair-tufail" target="_blank" className="hover:text-[#10b981] transition-colors py-1">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <a
            href="https://wa.me/923354455494"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-black hover:bg-[#10b981] text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300"
          >
            <Calendar size={14} />
            Free Call
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 top-[73px] bg-white z-[99] md:hidden flex flex-col p-10 transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
           <div className="flex flex-col gap-8 text-4xl font-bold tracking-tighter heading-font">
                <a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#process" onClick={() => setIsMenuOpen(false)}>Process</a>
           </div>
           <div className="mt-auto pt-10 border-t border-gray-100 flex flex-col gap-6">
                <div className="flex gap-6">
                  <a href="https://github.com/lumenialab-hub" target="_blank" className="p-3 bg-gray-50 rounded-full text-black">
                    <GithubIcon />
                  </a>
                  <a href="https://linkedin.com/in/umair-tufail" target="_blank" className="p-3 bg-gray-50 rounded-full text-black">
                    <LinkedinIcon />
                  </a>
                </div>
                <a
                  href="https://wa.me/923354455494"
                  className="w-full py-5 bg-black text-white rounded-2xl text-center font-bold uppercase tracking-widest active:scale-95 transition-transform"
                >
                  Book Strategy Call
                </a>
           </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#10b981]/10 blur-[120px] rounded-full -mr-40 -mt-40"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
          <div className="max-w-5xl">
            <div className="inline-block px-4 py-1.5 bg-[#10b981]/20 border border-[#10b981]/30 rounded-full text-[#10b981] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 animate-pulse">
               Architecture • Engineering • Scale
            </div>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter heading-font leading-[0.85] mb-10">
              I build <span className="text-[#10b981]">robust</span><br />digital assets.
            </h1>

            <p className="text-xl md:text-3xl text-gray-400 max-w-2xl leading-[1.3] mb-16">
              Expert-level Laravel backends and high-performance Next.js frontends. I turn complex problems into simplified, scalable software.
            </p>

            <div className="flex flex-wrap gap-6">
              <a
                href="#work"
                className="group inline-flex items-center gap-4 px-10 py-6 bg-[#10b981] text-black rounded-full text-xl font-bold hover:scale-105 transition-all"
              >
                View Selected Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/923354455494"
                target="_blank"
                className="inline-flex items-center gap-4 px-10 py-6 border-2 border-white/20 hover:border-[#10b981] rounded-full text-xl font-medium transition-all"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="py-32 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter heading-font leading-none mb-6">Selected Work</h2>
              <p className="text-xl text-gray-500 font-medium">Real projects delivered with modern full-stack tools and production-grade architecture.</p>
            </div>
            <Link href="/projects" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-[#10b981] hover:border-[#10b981] transition-all">
               View Full Archive <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-40">
            {featuredProjects.map((project, idx) => (
              project && (
                <div key={project.slug} className="group grid md:grid-cols-12 gap-12 items-center">
                   <div className={`md:col-span-12 lg:col-span-7 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                      <Link href={`/projects/${project.slug}`} className="block relative aspect-video rounded-[40px] overflow-hidden bg-gray-100 shadow-2xl border border-gray-100 transform group-hover:scale-[1.01] transition-transform duration-500">
                         <img 
                           src={project.thumbnail || project.images?.[0] || ""} 
                           alt={project.title}
                           className="w-full h-full object-cover"
                         />
                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 px-8 py-4 bg-white rounded-full text-black font-bold uppercase tracking-widest text-xs translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                               View Case Study
                            </div>
                         </div>
                      </Link>
                   </div>
                   
                   <div className={`md:col-span-12 lg:col-span-5 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-3 mb-6">
                         <span className="px-4 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                           {project.niche}
                         </span>
                      </div>
                      <h3 className="text-4xl md:text-6xl font-bold tracking-tighter heading-font mb-6 leading-tight group-hover:text-[#10b981] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xl text-gray-600 leading-relaxed mb-10 font-medium">
                        {project.problem}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-10">
                        {project.stack.split(",").slice(0, 4).map(tech => (
                          <span key={tech} className="text-xs font-bold uppercase tracking-widest text-gray-400">
                             {tech.trim()}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-3 text-lg font-bold border-b-2 border-black pb-1 hover:text-[#10b981] hover:border-[#10b981] transition-all"
                      >
                        Explore Project Details <ArrowRight size={20} />
                      </Link>
                   </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS / IMPACT */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-4xl md:text-7xl font-bold tracking-tighter heading-font mb-20">Measurable Impact</h2>
           <div className="grid md:grid-cols-3 gap-12">
              <div className="p-10 border border-white/10 rounded-[40px] bg-white/5">
                 <div className="text-6xl font-bold text-[#10b981] mb-4">40%</div>
                 <div className="text-xl font-bold uppercase tracking-widest mb-4">Conversion Boost</div>
                 <p className="text-gray-400">Average increase in user retention through UX-driven engineering for early-stage SaaS.</p>
              </div>
              <div className="p-10 border border-white/10 rounded-[40px] bg-white/5">
                 <div className="text-6xl font-bold text-[#10b981] mb-4">2x</div>
                 <div className="text-xl font-bold uppercase tracking-widest mb-4">Core Web Vitals</div>
                 <p className="text-gray-400">Speed improvements for e-commerce platforms using Next.js 15 and specialized caching.</p>
              </div>
              <div className="p-10 border border-white/10 rounded-[40px] bg-white/5">
                 <div className="text-6xl font-bold text-[#10b981] mb-4">100%</div>
                 <div className="text-xl font-bold uppercase tracking-widest mb-4">Data Integrity</div>
                 <p className="text-gray-400">Bulletproof Laravel backends with zero downtime during complex migrations.</p>
              </div>
           </div>
        </div>
      </section>

      {/* ABOUT ENHANCED */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-20">
           <div className="md:col-span-12 lg:col-span-5">
              <div className="sticky top-40">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#10b981] mb-8 block">The Studio DNA</span>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter heading-font leading-none mb-10">Boutique Web Engineering.</h2>
                <p className="text-2xl text-gray-600 leading-relaxed mb-12">
                   I operate as a high-end solo studio, specializing in the TALL Stack and Next.js. I don't just write code; I architect systems that survive success.
                </p>
                <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center font-bold">UT</div>
                   <div>
                      <div className="font-bold">Umair Tufail</div>
                      <div className="text-sm text-gray-400">Lead Architectural Engineer</div>
                   </div>
                </div>
              </div>
           </div>
           
           <div className="md:col-span-12 lg:col-span-7">
              <div className="space-y-32">
                 <div>
                    <h3 className="text-3xl font-bold mb-10 pb-6 border-b border-gray-100">Why Boutique?</h3>
                    <div className="grid gap-12">
                       <div className="flex gap-8">
                          <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">1</div>
                          <div>
                             <h4 className="text-xl font-bold mb-4 uppercase tracking-widest">Ownership over Outsourcing</h4>
                             <p className="text-gray-500 leading-relaxed text-lg">Every line of code is handwritten by me. No junior developers, no offshore handoffs. You get senior expertise from day one to launch.</p>
                          </div>
                       </div>
                       <div className="flex gap-8">
                          <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">2</div>
                          <div>
                             <h4 className="text-xl font-bold mb-4 uppercase tracking-widest">Business-First Engineering</h4>
                             <p className="text-gray-500 leading-relaxed text-lg">I prioritize ROI. I choose tools that maximize speed to market without sacrificing the long-term maintainability of your core asset.</p>
                          </div>
                       </div>
                       <div className="flex gap-8">
                          <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">3</div>
                          <div>
                             <h4 className="text-xl font-bold mb-4 uppercase tracking-widest">Absolute Availability</h4>
                             <p className="text-gray-500 leading-relaxed text-lg">As a boutique studio, I only take on 2-3 major projects per quarter. This ensures your vision gets the obsession it deserves.</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div>
                    <h3 className="text-3xl font-bold mb-10 pb-6 border-b border-gray-100">Core Stack</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                       {["Laravel", "Next.js", "MySQL", "Tailwind CSS", "Alpine.js", "TILT Stack"].map(tech => (
                          <div key={tech} className="p-6 bg-gray-50 rounded-2xl flex items-center gap-4 group hover:bg-black hover:text-white transition-all cursor-default">
                             <CheckCircle2 className="text-[#10b981]" size={20} />
                             <span className="font-bold uppercase tracking-widest text-[10px]">{tech}</span>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section id="process" className="py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-32">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#10b981] mb-6 block">The Roadmap</span>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter heading-font mb-8">Four Steps to Launch.</h2>
           </div>
           
           <div className="grid md:grid-cols-4 gap-4 relative">
              <div className="hidden md:block absolute top-[60px] left-0 right-0 h-px bg-gray-200 z-0"></div>
              {[
                { title: "Define", desc: "Strategy call to audit your current stack and define technical milestones." },
                { title: "Architect", desc: "Database schema, API design, and high-fidelity technical documentation." },
                { title: "Engineer", desc: "The deep work. Building your asset in the TALL stack or Next.js." },
                { title: "Optimize", desc: "Rigorous testing, performance tuning, and bulletproof deployment." }
              ].map((step, i) => (
                <div key={step.title} className="relative z-10 p-8 pt-0 text-center md:text-left">
                   <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center text-2xl font-black mb-8 mx-auto md:mx-0 shadow-sm">
                      0{i+1}
                   </div>
                   <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase heading-font">{step.title}</h3>
                   <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FINAL CTA & CONTACT */}
      <section className="bg-black text-white pt-40 pb-20 rounded-t-[60px] md:rounded-t-[100px] mt-20">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 mb-40">
               <div>
                  <h2 className="text-6xl md:text-9xl font-bold tracking-tighter heading-font leading-none mb-12">
                     Let's build<br />something <span className="text-[#10b981]">legendary</span>.
                  </h2>
                  <div className="space-y-8">
                     <p className="text-2xl text-gray-400">Available for select projects in Q3 2026.</p>
                     <div className="flex flex-col gap-4">
                        <a href="mailto:umair@lumenialab.com" className="text-3xl md:text-5xl font-bold hover:text-[#10b981] transition-colors break-words">umair@lumenialab.com</a>
                        <div className="flex gap-6 mt-4">
                           <a href="https://github.com/lumenialab-hub" target="_blank" className="p-4 bg-white/5 rounded-full hover:bg-[#10b981] transition-all">
                              <GithubIcon />
                           </a>
                           <a href="https://linkedin.com/in/umair-tufail" target="_blank" className="p-4 bg-white/5 rounded-full hover:bg-[#10b981] transition-all">
                              <LinkedinIcon />
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="bg-[#10b981] p-12 md:p-20 rounded-[60px] text-black flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter heading-font mb-8">Free Strategy Consultation</h3>
                    <p className="text-[1.3rem] leading-relaxed mb-12 opacity-80 font-medium">
                       A 30-minute call to audit your software architecture and map out a path to scale. No sales pitch, just engineering value.
                    </p>
                  </div>
                  <a 
                    href="https://wa.me/923354455494"
                    target="_blank"
                    className="flex items-center justify-between group p-8 bg-black text-white rounded-3xl text-2xl font-bold hover:scale-[1.02] transition-all"
                  >
                     Schedule Now
                     <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </a>
               </div>
            </div>

            <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
               <div className="text-2xl font-black tracking-tighter heading-font uppercase">umair.dev</div>
               <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                  <span>© 2026 Umair Tufail</span>
                  <a href="#" className="hover:text-white transition-colors">Privacy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms</a>
               </div>
            </div>
         </div>
      </section>

      {/* Floating WhatsApp Mobile CTA */}
      <a 
        href="https://wa.me/923354455494"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[110] p-5 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all md:hidden"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
