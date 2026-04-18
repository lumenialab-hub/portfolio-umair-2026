"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { PROJECTS } from "../data/projects";
import { 
  Menu, X, ArrowRight, Zap, Trophy, Users, Code2, 
  Terminal, Globe, Database, Smartphone, Layout
} from "lucide-react";
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
        setCount(Math.min(start, end));
        if (start >= end) clearInterval(timer);
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
            <a href="#experience" className="hover:text-[#10b981] transition-colors">Experience</a>
            <a href="https://wa.me/923354455494" className="px-5 py-2.5 bg-black text-white rounded-full hover:bg-[#10b981] transition-all shadow-lg hover:-translate-y-0.5 font-black uppercase text-[10px] tracking-widest">Free Call</a>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION - REBUILT */}
      <section className="pt-48 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                </span>
                Available for Q3 2026
              </div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase text-black">
                I build digital <br />
                products that <span className="text-[#10b981] italic underline decoration-black/10">scale.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-12 leading-relaxed font-bold uppercase tracking-tight">
                Senior Full-Stack Developer specializing in React, Next.js, and high-performance Laravel backends.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-16">
                 <a href="#work" className="px-10 py-5 bg-[#10b981] text-black rounded-full font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:bg-black hover:text-white transition-all shadow-xl hover:-translate-y-1">
                    View Portfolio <ArrowRight size={18} />
                 </a>
                 <a href="https://wa.me/923354455494" className="px-10 py-5 border-2 border-black text-black rounded-full font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all hover:-translate-y-1">
                    Contact Me
                 </a>
              </div>

              {/* STATS BENTO */}
              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-black/5">
                <div>
                  <div className="text-4xl font-black mb-1 text-black"><Counter value={40} suffix="+" /></div>
                  <div className="text-[9px] uppercase tracking-widest font-black text-gray-400">Projects Finished</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-1 text-black"><Counter value={65} suffix="%" /></div>
                  <div className="text-[9px] uppercase tracking-widest font-black text-gray-400">Performance Boost</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-1 text-black"><Counter value={100} suffix="%" /></div>
                  <div className="text-[9px] uppercase tracking-widest font-black text-gray-400">Satisfaction</div>
                </div>
              </div>
            </motion.div>

            {/* Right Visuals */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Premium Image Container */}
              <div className="relative z-10">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-50 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white grayscale hover:grayscale-0 transition-all duration-700 group">
                   <img src="/umair-portrait.jpg" alt="Umair Tufail" className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                {/* Floating Code Flex */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/20 max-w-[260px]"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                  </div>
                  <code className="text-xs font-black text-black block leading-loose">
                    <span className="text-[#10b981]">const</span> build = () ={`>`} {'{'}<br />
                    &nbsp;&nbsp;<span className="text-slate-400">"Clean. Fast. Scalable."</span><br />
                    {'}'};
                  </code>
                </motion.div>
              </div>

              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#10b981]/5 blur-3xl -z-10 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION - NEW */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-20">
          <div className="md:col-span-5">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#10b981] mb-6 block">The Persona</span>
            <h2 className="text-5xl font-black tracking-tighter uppercase mb-8 leading-[0.9]">Full-Stack <br />Architect.</h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-2xl text-gray-700 font-black tracking-tight leading-snug mb-12 uppercase italic">
              I BRIDGE THE GAP BETWEEN COMPLEX BACKEND LOGIC AND PIXEL-PERFECT INTERFACES.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-black/5">
              <div>
                <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-6 text-[#10b981]">Expertise</h4>
                <ul className="text-[11px] space-y-3 font-black uppercase tracking-widest text-gray-400">
                   <li>SaaS Infrastructure</li>
                   <li>Next.js Systems</li>
                   <li>API Engineering</li>
                   <li>UI/UX Strategy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-6 text-[#10b981]">Philosophy</h4>
                <ul className="text-[11px] space-y-3 font-black uppercase tracking-widest text-gray-400">
                   <li>Performance First</li>
                   <li>Scalable Design</li>
                   <li>Modern Tech Stack</li>
                   <li>Business Value</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="py-24 bg-[#FCFCFA] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Frontend", tools: "Next.js, React, Tailwind" },
              { label: "Backend", tools: "Laravel, PHP, Node.js" },
              { label: "Cloud", tools: "AWS, Redis, Docker" },
              { label: "Design", tools: "Figma, UI/UX, Motion" }
            ].map(stack => (
              <div key={stack.label}>
                <div className="text-[9px] font-black uppercase tracking-widest text-gray-300 mb-3">{stack.label}</div>
                <div className="text-lg font-black uppercase tracking-tighter text-black">{stack.tools}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section id="work" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#10b981] mb-2 block">Projects</span>
              <h2 className="text-7xl font-black tracking-tighter uppercase whitespace-nowrap">Selected Work</h2>
            </div>
            <Link href="/projects" className="text-[10px] font-black uppercase tracking-[0.3em] border-b-4 border-[#10b981] pb-2 hover:text-black hover:border-black transition-all">Explore All Archives</Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              project && (
                <motion.div 
                  key={project.slug}
                  whileHover={{ y: -15 }}
                  className="group bg-[#FCFCFA] rounded-[3rem] overflow-hidden border border-black/5 transition-all duration-700 shadow-sm hover:shadow-2xl"
                >
                  <Link href={`/projects/${project.slug}`} className="block aspect-[1.4] overflow-hidden relative">
                    <img src={project.thumbnail || project.images?.[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="px-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-2xl">Case Study</span>
                    </div>
                  </Link>
                  <div className="p-10">
                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-[#10b981] mb-4">{project.niche}</div>
                    <h3 className="text-2xl font-black mb-6 line-clamp-1 group-hover:text-[#10b981] transition-colors">{project.title}</h3>
                    <p className="text-[11px] text-gray-400 mb-10 line-clamp-2 leading-relaxed uppercase font-black tracking-widest">{project.problem}</p>
                    <div className="flex flex-wrap gap-2">
                       {project.stack.split(",").slice(0,2).map(s => (
                         <span key={s} className="px-4 py-2 bg-black text-white rounded-lg text-[8px] font-black uppercase tracking-[0.2em] leading-none">{s.trim()}</span>
                       ))}
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-32 bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#10b981] mb-4 block">History</span>
            <h2 className="text-6xl font-black tracking-tighter uppercase">Work Timeline</h2>
          </div>
          <div className="space-y-4">
            {[
              { role: "Senior Freelance Engineer", date: "2023 - 2026", desc: "Crafting scalable digital assets for founders." },
              { role: "Full-Stack Developer", date: "2021 - 2023", desc: "Expertise in TALL stack & SaaS development." },
              { role: "Product Specialist", date: "2019 - 2021", desc: "UI/UX engineering and performance optimization." }
            ].map((exp, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row md:items-center justify-between p-12 border-b border-black/5 hover:bg-white transition-all rounded-[2.5rem]">
                <div>
                   <span className="text-[10px] font-black text-[#10b981] uppercase tracking-[0.3em] block mb-2">{exp.date}</span>
                   <h3 className="text-4xl font-black tracking-tighter uppercase">{exp.role}</h3>
                </div>
                <p className="text-gray-400 font-black uppercase text-[11px] tracking-widest mt-4 md:mt-0">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-40 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="bg-black text-white p-20 rounded-[4rem] relative overflow-hidden">
               <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
                  <div className="text-center lg:text-left">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#10b981] mb-10 block">Available Now</span>
                    <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-16 leading-[0.8]">Let’s build <br />something <br /><span className="text-[#10b981] italic">Legendary.</span></h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                       <a href="https://wa.me/923354455494" className="px-14 py-8 bg-[#10b981] text-black font-black text-xl rounded-full hover:scale-105 transition-all shadow-[0_20px_50px_rgba(16,185,129,0.4)] uppercase tracking-tighter">Get Started</a>
                       <a href="mailto:umair@lumenialab.com" className="px-14 py-8 bg-transparent border-2 border-white/20 text-white font-black text-xl rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-tighter">Email Me</a>
                    </div>
                  </div>
                  <div className="flex flex-col items-center lg:items-end gap-8">
                     <div className="flex flex-col items-center lg:items-end gap-4">
                        <a href="https://github.com/lumenialab-hub" className="text-5xl font-black uppercase tracking-tighter hover:text-[#10b981] transition-all">GitHub</a>
                        <a href="https://linkedin.com/in/umair-tufail" className="text-5xl font-black uppercase tracking-tighter hover:text-[#10b981] transition-all">LinkedIn</a>
                     </div>
                     <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mt-10">© Architectural Engineering 2026</p>
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981]/10 blur-[150px] rounded-full -mr-40 -mt-40"></div>
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-black/5 bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6 text-center text-[10px] font-black uppercase tracking-[0.6em] text-gray-300">
           Digital Asset Engineering • Crafted for Founders
        </div>
      </footer>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 bg-white z-[200] flex flex-col p-12 transition-all duration-700 ease-in-out ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
         <div className="flex justify-between items-center mb-24">
            <span className="font-black uppercase tracking-widest text-2xl">UMAIR.DEV</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-4 bg-gray-50 rounded-full"><X size={32} /></button>
         </div>
         <div className="flex flex-col gap-10 text-6xl font-black tracking-tighter uppercase">
            <a href="#work" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>Timeline</a>
            <a href="https://wa.me/923354455494">Contact</a>
         </div>
      </div>
    </div>
  );
}