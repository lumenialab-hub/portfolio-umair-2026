"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { PROJECTS } from "../data/projects";
import { 
  Menu, X, ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="bg-white text-[#0A0A0A] selection:bg-[#10b981] selection:text-white antialiased font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-lg border-b border-[#EAEAEA]">
        <div className="max-w-screen-2xl mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold tracking-[-1px]">Umair</Link>
          
          <div className="hidden md:flex gap-12 text-sm font-medium">
            <a href="#work" className="hover:underline decoration-1 underline-offset-4 transition-all">Work</a>
            <a href="#about" className="hover:underline decoration-1 underline-offset-4 transition-all">Story</a>
            <a href="#services" className="hover:underline decoration-1 underline-offset-4 transition-all">Services</a>
            <a href="#process" className="hover:underline decoration-1 underline-offset-4 transition-all">Process</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://wa.me/923354455494" 
               className="px-8 py-3.5 bg-[#0A0A0A] text-white text-sm font-medium rounded-3xl hover:bg-[#10B981] transition-all duration-300 shadow-lg shadow-black/5">
              Book a Call
            </a>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center pt-32 pb-32 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8 grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <h1 className="text-[72px] md:text-[96px] leading-[0.95] font-semibold tracking-[-2px] max-w-[640px] font-syne">
              Designing SaaS<br />that feels <span className="text-[#10B981]">alive</span>.
            </h1>
            <p className="mt-10 text-2xl text-[#6B6B6B] max-w-md font-dm">
              I craft intuitive dashboards, systems, and flows for ambitious startups. 
              Currently open for 2 projects in Q3 2026.
            </p>
            <div className="mt-16 flex flex-wrap gap-5">
              <a href="#work" 
                 className="px-10 py-5 border-2 border-[#0A0A0A] rounded-3xl text-sm font-medium hover:bg-[#0A0A0A] hover:text-white transition-all inline-flex items-center gap-3">
                Explore the work
                <span className="text-xl leading-none">↓</span>
              </a>
              <a href="https://wa.me/923354455494" 
                 className="px-10 py-5 bg-[#10B981] text-white rounded-3xl text-sm font-medium hover:bg-[#0EA5E9] transition-all shadow-lg shadow-[#10B981]/25">
                Free 30-min consultation
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 relative"
          >
            {/* VIBRANT IMAGE CONTAINER */}
            <div className="relative">
              <div className="aspect-[4/5] md:aspect-auto md:h-[600px] bg-neutral-100 rounded-[4rem] overflow-hidden translate-x-4 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] relative group">
                <img src="/portfolioimg.png" 
                     alt="Umair Tufail" 
                     className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                
                {/* Dynamic Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating Meta Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></div>
                    <span className="text-[10px] uppercase tracking-[2px] font-black text-[#10B981]">Live project</span>
                  </div>
                  <p className="font-semibold text-gray-900">Finora Dashboard — 42% retention lift</p>
                </motion.div>
              </div>

              {/* Background Accent Shape to add "Life" */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#10B981]/10 blur-[100px] rounded-full -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#0EA5E9]/10 blur-[100px] rounded-full -z-10"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="bg-[#F7F7F7] py-40 relative">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex justify-between items-end mb-24">
            <h2 className="text-5xl font-semibold tracking-[-1px] font-syne">Selected Work</h2>
            <div className="text-sm font-medium text-gray-400 uppercase tracking-widest hidden md:block">01 — 06 Projects</div>
          </div>
          
          <div className="space-y-48">
            {featuredProjects.map((project, idx) => (
              project && (
                <motion.div 
                  key={project.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="grid md:grid-cols-12 gap-10 md:gap-20 items-center group"
                >
                  <div className={`md:col-span-7 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                    <Link href={`/projects/${project.slug}`} className="block aspect-video bg-white rounded-[2.5rem] overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-700">
                      <img src={project.thumbnail || project.images?.[0]} 
                           alt={project.title} 
                           className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
                    </Link>
                  </div>
                  <div className={`md:col-span-5 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="sticky top-12">
                      <span className="text-[10px] font-black text-[#10B981] uppercase tracking-[4px]">{project.niche}</span>
                      <h3 className="text-5xl font-medium mt-6 font-syne capitalize tracking-tight group-hover:text-[#10B981] transition-colors">{project.title}</h3>
                      <p className="mt-8 text-xl text-[#6B6B6B] leading-relaxed italic border-l-2 border-gray-100 pl-8">{project.problem}</p>
                      <Link href={`/projects/${project.slug}`} className="mt-12 inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-[#10B981] transition-all group/link">
                        View Case Study 
                        <span className="w-10 h-[1px] bg-black group-hover/link:w-16 group-hover/link:bg-[#10B981] transition-all"></span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section id="about" className="py-40 bg-white">
        <div className="max-w-screen-2xl mx-auto px-8 grid md:grid-cols-12 gap-20">
          <div className="md:col-span-4">
            <h2 className="text-5xl font-semibold tracking-[-1px] font-syne uppercase">The <br />Foundry.</h2>
          </div>
          <div className="md:col-span-8">
            <div className="max-w-2xl">
              <p className="text-3xl leading-tight text-gray-900 font-syne font-medium">
                I help founders bridge the gap between human intuition and technical scale.
              </p>
              <p className="mt-10 text-xl text-[#6B6B6B] font-dm leading-relaxed">
                Hi, I’m Umair — a designer who codes. Based in Lahore/Remote, I’ve spent the last 6 years turning complex SaaS friction into seamless, high-retention products.
              </p>
              <div className="mt-16 grid grid-cols-2 gap-12 border-t border-gray-100 pt-12">
                 <div>
                    <h5 className="text-[10px] font-black uppercase tracking-[3px] text-[#10B981] mb-4">Values</h5>
                    <ul className="text-sm font-medium space-y-2 text-gray-500">
                       <li>Clarity over Cleverness</li>
                       <li>Speed to Market</li>
                       <li>Human-centered Logic</li>
                    </ul>
                 </div>
                 <div>
                    <h5 className="text-[10px] font-black uppercase tracking-[3px] text-[#10B981] mb-4">Focus</h5>
                    <ul className="text-sm font-medium space-y-2 text-gray-500">
                       <li>SaaS & AI Systems</li>
                       <li>Fintech Dashboards</li>
                       <li>Startup Scaffolding</li>
                    </ul>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#F7F7F7] py-40">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-xl mb-24">
             <h2 className="text-6xl font-semibold tracking-[-2px] mb-8 font-syne">Studio Services</h2>
             <p className="text-xl text-gray-500">Tailored engagement models for fast-moving product teams.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Product Design", desc: "Full-cycle SaaS design from research to high-fidelity handoff.", price: "from $8,500" },
              { title: "Design Systems", desc: "Atomic component libraries in Figma/React for engineering teams.", price: "from $12,000" },
              { title: "Market-Ready Ship", desc: "Interactive Framer/Next.js sites that convert your first 1k users.", price: "from $4,500" }
            ].map(service => (
              <div key={service.title} className="bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all hover:-translate-y-4 group">
                <div className="w-12 h-12 bg-[#F7F7F7] rounded-2xl mb-10 group-hover:bg-[#10B981]/10 transition-colors flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-black group-hover:bg-[#10B981] rounded-full"></div>
                </div>
                <h3 className="text-3xl font-medium font-syne mb-6">{service.title}</h3>
                <p className="text-[#6B6B6B] leading-relaxed mb-12">{service.desc}</p>
                <div className="pt-8 border-t border-gray-50 text-[10px] font-black uppercase tracking-[4px] text-gray-300">Investment {service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-40 bg-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <h2 className="text-5xl font-semibold tracking-[-1px] mb-24 font-syne">The Intelligence Process</h2>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { id: "01", title: "Audit", desc: "Mapping friction points and business objectives." },
              { id: "02", title: "Strategy", desc: "Defining the core user loop and data architecture." },
              { id: "03", title: "Craft", desc: "High-fidelity visual design and micro-interactions." },
              { id: "04", title: "Launch", desc: "Handoff to engineering and post-launch support." }
            ].map(step => (
              <div key={step.id} className="relative group">
                <div className="text-[#F0F0F0] text-9xl font-bold font-syne absolute -top-16 -left-4 -z-10 group-hover:text-[#10B981]/5 transition-colors">
                  {step.id}
                </div>
                <h4 className="text-2xl mt-6 font-syne font-bold">{step.title}</h4>
                <p className="mt-4 text-[#6B6B6B] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-black text-white py-40 overflow-hidden relative">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 text-center relative z-10">
          <div><div className="text-8xl font-semibold text-[#10B981] font-syne">+42%</div><p className="mt-4 uppercase text-[10px] font-black tracking-[4px] opacity-40">User Retention</p></div>
          <div><div className="text-8xl font-semibold text-white font-syne">18</div><p className="mt-4 uppercase text-[10px] font-black tracking-[4px] opacity-40">Products Shipped</p></div>
          <div><div className="text-8xl font-semibold text-white font-syne">09</div><p className="mt-4 uppercase text-[10px] font-black tracking-[4px] opacity-40">Countries Served</p></div>
          <div><div className="text-8xl font-semibold text-[#10B981] font-syne">100%</div><p className="mt-4 uppercase text-[10px] font-black tracking-[4px] opacity-40">Client Return</p></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#10B98110_0,transparent_70%)]"></div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-48 bg-white">
        <div className="max-w-screen-2xl mx-auto px-8 grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-[100px] leading-[0.85] font-semibold tracking-[-5px] font-syne mb-12">Let's build <br />the future.</h2>
            <p className="text-2xl text-gray-500 max-w-md font-dm">Currently booking for Q3 2026. Ready to make your SaaS alive?</p>
            
            <div className="mt-20 space-y-8">
               <a href="mailto:umair@lumenialab.com" className="group flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white group-hover:bg-[#10B981] transition-colors">
                     <ArrowRight className="-rotate-45" />
                  </div>
                  <span className="text-4xl font-syne font-medium underline underline-offset-8 decoration-gray-200">Email Me</span>
               </a>
            </div>
          </div>
          
          <div className="lg:col-span-6 bg-[#F7F7F7] p-16 rounded-[4rem]">
            <form className="space-y-12">
              <div className="space-y-4">
                 <label className="text-[10px] uppercase tracking-[4px] font-black text-gray-400">Project Type</label>
                 <div className="flex flex-wrap gap-3">
                    {["SaaS Redesign", "New Startup", "Design System"].map(t => (
                      <button key={t} type="button" className="px-6 py-3 bg-white rounded-full text-xs font-bold border border-transparent hover:border-[#10B981] transition-all">{t}</button>
                    ))}
                 </div>
              </div>
              <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-gray-200 py-6 text-xl focus:outline-none focus:border-[#10B981] transition-all" />
              <input type="email" placeholder="Work Email" className="w-full bg-transparent border-b border-gray-200 py-6 text-xl focus:outline-none focus:border-[#10B981] transition-all" />
              <textarea placeholder="Tell me about your product..." rows={4} className="w-full bg-transparent border-b border-gray-200 py-6 text-xl focus:outline-none focus:border-[#10B981] transition-all"></textarea>
              <button type="submit" 
                      className="w-full py-8 bg-black text-white rounded-full text-xl font-bold hover:bg-[#10B981] transition-all shadow-xl shadow-black/10">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-white border-t border-gray-50">
        <div className="max-w-screen-2xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12 text-gray-400 font-medium">
          <div className="text-black font-syne font-bold text-2xl uppercase tracking-tighter">Umair</div>
          <div className="text-sm">© 2026 Architectural Engineering. Lahore, PK.</div>
          <div className="flex gap-10 text-[10px] uppercase tracking-[4px]">
            <a href="https://github.com/lumenialab-hub" className="hover:text-[#10B981] transition-colors">Github</a>
            <a href="https://linkedin.com/in/umair-tufail" className="hover:text-[#10B981] transition-colors">Linkedin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}