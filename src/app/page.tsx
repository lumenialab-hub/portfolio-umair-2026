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
    // Simple intersection observer logic for fade-ins would be handled by Framer Motion here
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
               className="px-8 py-3.5 bg-[#0A0A0A] text-white text-sm font-medium rounded-3xl hover:bg-[#10B981] transition-all duration-300">
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
                 className="px-10 py-5 bg-[#10B981] text-white rounded-3xl text-sm font-medium hover:bg-[#0EA5E9] transition-all">
                Free 30-min consultation
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 relative"
          >
            <div className="aspect-[4/5] md:aspect-auto md:h-[520px] bg-[#F7F7F7] rounded-[3rem] overflow-hidden shadow-2xl shadow-black/5 relative group">
              <img src="/portfolioimg.png" 
                   alt="Umair Tufail" 
                   className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.02] group-hover:scale-105" />
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg text-sm max-w-[220px]">
                <div className="flex items-center gap-2 text-[#10B981]">
                  <span className="text-xs uppercase tracking-[1px]">Live project</span>
                </div>
                <p className="font-medium mt-1">Finora Dashboard — 42% retention lift</p>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Narrative Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#EAEAEA] to-transparent -z-10"></div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="bg-[#F7F7F7] py-32 relative">
        <div className="max-w-screen-2xl mx-auto px-8">
          <h2 className="text-5xl font-semibold tracking-[-1px] mb-20 font-syne">Selected Work</h2>
          
          <div className="space-y-40">
            {featuredProjects.map((project, idx) => (
              project && (
                <motion.div 
                  key={project.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center`}
                >
                  <div className={`md:col-span-7 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                    <Link href={`/projects/${project.slug}`} className="block aspect-video bg-neutral-200 rounded-3xl overflow-hidden group">
                      <img src={project.thumbnail || project.images?.[0]} 
                           alt={project.title} 
                           className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                    </Link>
                  </div>
                  <div className={`md:col-span-5 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="sticky top-12">
                      <span className="text-sm text-[#6B6B6B] uppercase tracking-widest">{project.niche}</span>
                      <h3 className="text-4xl font-medium mt-3 font-syne capitalize">{project.title}</h3>
                      <p className="mt-6 text-lg text-[#6B6B6B] leading-relaxed italic">{project.problem}</p>
                      <Link href={`/projects/${project.slug}`} className="mt-8 inline-flex items-center gap-3 text-sm font-medium underline underline-offset-4 hover:text-[#10B981] transition-colors">
                        Read full case study →
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
            <h2 className="text-5xl font-semibold tracking-[-1px] font-syne">My story</h2>
          </div>
          <div className="md:col-span-8">
            <div className="max-w-2xl">
              <p className="text-2xl leading-tight text-[#6B6B6B] font-dm">
                Hi, I’m Umair — a Lahore-based product designer obsessed with turning complex SaaS problems into calm, delightful experiences.
              </p>
              <p className="mt-10 text-lg text-[#6B6B6B] font-dm">
                Over the past 6 years I’ve helped startups go from early-stage to product-market fit by designing the interfaces their teams actually love using. 
                I believe great design is invisible — it just works.
              </p>
              <div className="mt-12 border-l-2 border-[#10B981] pl-8">
                <p className="text-xl italic">"The best interfaces disappear. The user only remembers how good it felt to use them."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#F7F7F7] py-32">
        <div className="max-w-screen-2xl mx-auto px-8">
          <h2 className="text-5xl font-semibold tracking-[-1px] mb-16 font-syne">Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "SaaS Product Design", desc: "End-to-end dashboards, onboarding, and complex workflows that scale.", price: "from $8,500" },
              { title: "Design Systems", desc: "Scalable, consistent component libraries that speed up your entire team.", price: "from $12,000" },
              { title: "Ship-ready Prototypes", desc: "High-fidelity interactive prototypes and marketing sites ready to ship.", price: "from $4,500" }
            ].map(service => (
              <div key={service.title} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
                <h3 className="text-3xl font-medium font-syne">{service.title}</h3>
                <p className="mt-6 text-[#6B6B6B]">{service.desc}</p>
                <div className="mt-12 pt-12 border-t text-sm font-medium uppercase tracking-widest text-gray-400">Starting {service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-32 bg-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <h2 className="text-5xl font-semibold tracking-[-1px] mb-16 font-syne">The Process</h2>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { id: "01", title: "Discovery", desc: "User interviews, competitor audit, and deep business alignment." },
              { id: "02", title: "Exploration", desc: "Rapid wireframing and user-flow mapping in Figma." },
              { id: "03", title: "Refinement", desc: "High-fidelity design with motion and micro-interactions." },
              { id: "04", title: "Delivery", desc: "Developer handoff, testing, and post-launch iteration." }
            ].map(step => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-[#EAEAEA] text-7xl font-bold font-syne group-hover:text-[#10B981] transition-colors duration-500">{step.id}</div>
                <h4 className="text-2xl mt-6 font-syne">{step.title}</h4>
                <p className="mt-4 text-[#6B6B6B]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-black text-white py-32">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 text-center">
          <div><div className="text-7xl font-semibold text-[#10B981] font-syne">+42%</div><p className="mt-3 uppercase text-sm tracking-widest opacity-60">Retention</p></div>
          <div><div className="text-7xl font-semibold text-[#10B981] font-syne">18</div><p className="mt-3 uppercase text-sm tracking-widest opacity-60">SaaS products</p></div>
          <div><div className="text-7xl font-semibold text-[#10B981] font-syne">9</div><p className="mt-3 uppercase text-sm tracking-widest opacity-60">Countries</p></div>
          <div><div className="text-7xl font-semibold text-[#10B981] font-syne">100%</div><p className="mt-3 uppercase text-sm tracking-widest opacity-60">Repeat clients</p></div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-40 bg-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <h2 className="text-5xl font-semibold tracking-[-1px] mb-20 font-syne">What clients say</h2>
          <div className="grid md:grid-cols-2 gap-20">
            <div className="border-l-4 border-[#10B981] pl-10">
              <p className="text-3xl leading-tight font-dm italic">"Umair turned our chaotic analytics platform into something our team actually looks forward to opening every morning."</p>
              <p className="mt-8 text-sm text-[#6B6B6B] uppercase tracking-widest font-black">— Sarah Chen, CEO @ Pulse</p>
            </div>
            <div className="border-l-4 border-[#10B981] pl-10">
              <p className="text-3xl leading-tight font-dm italic">"The attention to detail and speed of iteration was unmatched. Our conversion rate jumped 31% in the first month."</p>
              <p className="mt-8 text-sm text-[#6B6B6B] uppercase tracking-widest font-black">— Alex Rivera, Founder @ Finora</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE / FAQ */}
      <section className="bg-[#F7F7F7] py-32">
        <div className="max-w-screen-2xl mx-auto px-8 grid md:grid-cols-12 gap-20">
          <div className="md:col-span-5">
            <h2 className="text-5xl font-semibold tracking-[-1px] mb-12 font-syne">Expertise</h2>
            <div className="flex flex-wrap gap-4">
              {["SaaS Dashboards", "Complex Data Viz", "Design Systems", "Onboarding Flows", "Framer Prototypes"].map(skill => (
                <span key={skill} className="px-8 py-4 bg-white border border-[#EAEAEA] rounded-3xl text-sm font-medium hover:border-[#10B981] transition-colors">{skill}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="text-5xl font-semibold tracking-[-1px] mb-12 font-syne">FAQ</h2>
            <div className="space-y-12">
              <div>
                <h4 className="text-xl font-medium font-syne">How does pricing work?</h4>
                <p className="mt-4 text-[#6B6B6B]">Project-based, transparent milestones. Most full SaaS redesigns range $8k–$25k. We always start with a free scoping call.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium font-syne">Do you work remotely?</h4>
                <p className="mt-4 text-[#6B6B6B]">Yes — I’ve collaborated with teams across 9 countries. Timezone overlap with Europe & US is easy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 bg-white">
        <div className="max-w-screen-2xl mx-auto px-8 grid md:grid-cols-12 gap-20">
          <div className="md:col-span-5">
            <h2 className="text-7xl font-semibold tracking-[-3px] font-syne leading-[0.9]">Let’s create <br />something <br />remarkable.</h2>
            <p className="mt-12 text-xl text-[#6B6B6B]">Currently accepting 2 new projects for 2026.</p>
            <a href="mailto:umair@lumenialab.com" className="mt-12 block text-3xl underline decoration-1 underline-offset-8 hover:text-[#10B981] transition-colors font-syne">umair@lumenialab.com</a>
          </div>
          <div className="md:col-span-7">
            <form className="space-y-12">
              <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-black text-gray-300">Your Full Name</label>
                 <input type="text" placeholder="John Doe" className="w-full border-b-2 border-gray-100 pb-6 text-xl focus:outline-none focus:border-[#10B981] bg-transparent transition-all" />
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-black text-gray-300">Business Email</label>
                 <input type="email" placeholder="john@company.com" className="w-full border-b-2 border-gray-100 pb-6 text-xl focus:outline-none focus:border-[#10B981] bg-transparent transition-all" />
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-black text-gray-300">The Problem</label>
                 <textarea placeholder="Tell me about your product challenges..." rows={4} className="w-full border-b-2 border-gray-100 pb-6 text-xl focus:outline-none focus:border-[#10B981] bg-transparent transition-all"></textarea>
              </div>
              <button type="submit" 
                      className="w-full py-8 bg-black text-white rounded-[2rem] text-xl font-medium hover:bg-[#10B981] transition-all transform hover:-translate-y-1 shadow-2xl">
                Send investigation request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#EAEAEA] py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12 text-sm text-[#6B6B6B]">
          <div className="font-syne font-semibold text-black text-xl">Umair</div>
          <div>© 2026 Umair Tufail. Made with intention in Lahore, Pakistan.</div>
          <div className="flex gap-12 font-medium">
            <a href="https://github.com/lumenialab-hub" className="hover:text-black transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/umair-tufail" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
          <div className="text-[10px] uppercase tracking-widest opacity-40">Minimal by design. Human by heart.</div>
        </div>
      </footer>

      {/* MOBILE MENU overlay would go here */}
    </div>
  );
}