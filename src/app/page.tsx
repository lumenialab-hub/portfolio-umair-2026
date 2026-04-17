"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { PROJECTS } from "../data/projects";
import { Menu, X, ArrowRight, Calendar, MessageCircle, CheckCircle2, Zap, Trophy, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";

function Counter({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const featuredSlugs = ["reseller-frontend", "medaan", "vendors-hendor", "air-ideal", "satradelink", "saas-trucking"];
  const featuredProjects = featuredSlugs.map(slug => PROJECTS.find(p => p.slug === slug)).filter(Boolean);

  if (!mounted) return null;

  const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
  );
  
  const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  );

  return (
    <div className="bg-[#FCFCFA] text-[#1A1A1A] selection:bg-[#10b981] selection:text-white antialiased font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#FCFCFA]/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-lg font-black text-xs uppercase">U</span>
            UMAIR.DEV
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold">
            <a href="#work" className="hover:text-[#10b981] transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-[#10b981] transition-colors">Studio</a>
            <a href="https://wa.me/923354455494" className="px-5 py-2.5 bg-black text-white rounded-full hover:bg-[#10b981] transition-all">Free Call</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 uppercase text-black">
                Let’s build <br />
                something <span className="text-[#10b981] italic">legendary.</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-lg mb-12 leading-relaxed">
                Architectural Engineering for founders. Specialized in Laravel backends and high-performance Next.js frontends.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-16">
                 <a href="#work" className="px-8 py-4 bg-black text-white rounded-full font-bold flex items-center gap-2 hover:bg-[#10b981] transition-all group shadow-xl">
                    View Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </a>
                 <div className="flex items-center gap-4 px-6 border-l border-gray-200">
                    <a href="https://github.com/lumenialab-hub" target="_blank" className="hover:text-[#10b981] transition-colors"><GithubIcon /></a>
                    <a href="https://linkedin.com/in/umair-tufail" target="_blank" className="hover:text-[#10b981] transition-colors"><LinkedinIcon /></a>
                 </div>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-black/5 uppercase">
                <div>
                  <div className="text-4xl font-black mb-1"><Counter value={40} suffix="+" /></div>
                  <div className="text-[10px] uppercase tracking-widest font-black text-gray-400">Projects Finished</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-1"><Counter value={100} suffix="%" /></div>
                  <div className="text-[10px] uppercase tracking-widest font-black text-gray-400">Satisfaction</div>
                </div>
                <div className="hidden lg:block">
                  <div className="text-4xl font-black mb-1">AVAILABLE</div>
                  <div className="text-[10px] uppercase tracking-widest font-black text-gray-400">For New Projects</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl bg-gray-100 border-8 border-white">
                 <img src="/umair-portrait.jpg" alt="Umair Tufail" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-10 rounded-3xl shadow-2xl max-w-[280px] border border-white/10">
                <p className="text-xs font-black leading-tight uppercase tracking-[0.1em]">"Everything I build is engineered for success and scaled for millions."</p>
                <div className="mt-4 flex items-center gap-2">
                   <div className="w-4 h-px bg-[#10b981]"></div>
                   <span className="text-[9px] font-black text-[#10b981] uppercase tracking-widest">Umair Tufail</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPACT PROJECT GRID */}
      <section id="work" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#10b981] mb-2 block">Selected Work</span>
              <h2 className="text-5xl font-black tracking-tighter uppercase">Portfolio</h2>
            </div>
            <Link href="/projects" className="text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:text-[#10b981] hover:border-[#10b981] transition-all">All Archive</Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              project && (
                <motion.div 
                  key={project.slug}
                  whileHover={{ y: -8 }}
                  className="group bg-[#FCFCFA] rounded-[2.5rem] overflow-hidden border border-black/5 hover:border-[#10b981]/20 transition-all duration-500 shadow-sm hover:shadow-2xl"
                >
                  <Link href={`/projects/${project.slug}`} className="block aspect-[16/10] overflow-hidden relative">
                    <img src={project.thumbnail || project.images?.[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="px-5 py-2.5 bg-white text-black text-[9px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">View Project</span>
                    </div>
                  </Link>
                  <div className="p-10">
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#10b981] mb-3">{project.niche}</div>
                    <h3 className="text-xl font-bold mb-4 line-clamp-1 group-hover:text-[#10b981] transition-colors">{project.title}</h3>
                    <p className="text-xs text-gray-400 mb-8 line-clamp-2 leading-relaxed uppercase tracking-tight font-medium">{project.problem}</p>
                    <div className="flex flex-wrap gap-2">
                       {project.stack.split(",").slice(0,3).map(s => (
                         <span key={s} className="px-3 py-1.5 bg-black/5 rounded-lg text-[8px] font-black uppercase tracking-wider text-gray-500">{s.trim()}</span>
                       ))}
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS GRID COMPACT */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center">
              <Zap className="text-[#10b981] mb-8" size={32} />
              <h3 className="text-lg font-black uppercase tracking-widest mb-4">Fast Performance</h3>
              <p className="text-gray-500 leading-relaxed text-xs uppercase tracking-wider font-medium">Next.js 15 apps optimized for speed and high-level user retention.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Trophy className="text-[#10b981] mb-8" size={32} />
              <h3 className="text-lg font-black uppercase tracking-widest mb-4">Scalable Schema</h3>
              <p className="text-gray-500 leading-relaxed text-xs uppercase tracking-wider font-medium">Laravel backends designed for enterprise-grade growth and security.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="text-[#10b981] mb-8" size={32} />
              <h3 className="text-lg font-black uppercase tracking-widest mb-4">Full Satisfaction</h3>
              <p className="text-gray-500 leading-relaxed text-xs uppercase tracking-wider font-medium">100% focused on business goals and measurable conversion results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO CTA */}
      <section id="about" className="py-40 bg-white">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#10b981] mb-8 block">Project Inquiry</span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-16 leading-none">Ready for the<br />Next Step?</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
               <a href="https://wa.me/923354455494" className="px-12 py-6 bg-[#10b981] text-black font-black text-xl rounded-full hover:scale-105 transition-all shadow-xl">Get Started</a>
               <a href="mailto:umair@lumenialab.com" className="px-12 py-6 bg-transparent border-2 border-black/10 text-black font-black text-xl rounded-full hover:bg-black hover:text-white transition-all">Send Email</a>
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-black/5 bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="text-xs font-black tracking-[0.2em] uppercase">UMAIR.DEV</div>
           <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
              <a href="https://github.com/lumenialab-hub" target="_blank" className="hover:text-[#10b981] transition-colors">Github</a>
              <a href="https://linkedin.com/in/umair-tufail" target="_blank" className="hover:text-[#10b981] transition-colors">Linkedin</a>
              <a href="https://wa.me/923354455494" target="_blank" className="hover:text-[#10b981] transition-colors">WhatsApp</a>
           </div>
           <div className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-300">© 2026 Architectural Engineering Studio</div>
        </div>
      </footer>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[200] flex flex-col p-10 transition-transform duration-700 ease-in-out ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
         <div className="flex justify-between items-center mb-20">
            <span className="font-black uppercase tracking-widest text-xl">UMAIR.DEV</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-4"><X size={32} /></button>
         </div>
         <div className="flex flex-col gap-10 text-6xl font-black tracking-tighter uppercase">
            <a href="#work" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Studio</a>
            <a href="https://wa.me/923354455494">Contact</a>
         </div>
      </div>
    </div>
  );
}