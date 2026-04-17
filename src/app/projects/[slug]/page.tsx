"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { PROJECTS, Project } from "../../../data/projects";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const slug = params.slug as string;
    const found = PROJECTS.find((p) => p.slug === slug);
    if (found) {
      setProject(found);
    } else if (slug) {
      router.push("/projects");
    }
  }, [params.slug, router]);

  if (!mounted || !project) {
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
          <Link href="/" className="text-3xl font-bold tracking-tighter heading-font text-black uppercase">UMAIR</Link>
          <Link href="/projects" className="text-sm font-semibold hover:text-[#10b981] transition-colors flex items-center gap-2">
            <span className="text-lg">←</span> Back to Archive
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
            <div className="max-w-3xl">
               <div className="flex items-center gap-4 mb-6">
                  <span className="px-5 py-2 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest">{project.niche}</span>
                  <div className="w-12 h-px bg-gray-300"></div>
                  <span className="text-gray-500 text-sm font-medium">{project.stack.split(',')[0]}</span>
               </div>
               <h1 className="text-6xl md:text-8xl font-bold tracking-tighter heading-font leading-none">{project.title}</h1>
            </div>
            
            {project.link !== "#" && (
                <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-6 px-10 py-6 bg-black text-white rounded-full text-xl font-medium hover:bg-[#10b981] transition-all duration-300"
                >
                Launch Site
                <span className="group-hover:translate-x-2 transition-transform">↗</span>
                </a>
            )}
          </div>

          <div className="relative aspect-video rounded-[60px] overflow-hidden shadow-2xl border border-gray-200">
             <img 
               src={project.thumbnail || project.images?.[0] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"} 
               alt={project.title}
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-20">
           <div className="md:col-span-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-12">The Details</h2>
              
              <div className="space-y-10">
                 <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">My Role</div>
                    <div className="text-xl font-medium">Full-Stack Engineering</div>
                 </div>
                 <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Technologies</div>
                    <div className="text-xl font-medium leading-relaxed">{project.stack}</div>
                 </div>
                 <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Context</div>
                    <div className="text-xl font-medium leading-relaxed">{project.tags.join(', ')}</div>
                 </div>
              </div>
           </div>

           <div className="md:col-span-8 flex flex-col gap-16">
              <div>
                 <h3 className="text-3xl font-semibold heading-font mb-6">Brief</h3>
                 <p className="text-2xl text-gray-600 leading-tight">
                    {project.description}
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-gray-100">
                 <div>
                    <h3 className="text-sm font-bold text-[#10b981] uppercase tracking-widest mb-6">The Problem</h3>
                    <p className="text-lg text-gray-600 leading-relaxed uppercase tracking-tight text-[15px] font-medium">
                        {project.problem}
                    </p>
                 </div>
                 <div>
                    <h3 className="text-sm font-bold text-[#10b981] uppercase tracking-widest mb-6">The Solution</h3>
                    <p className="text-lg text-gray-600 leading-relaxed text-[15px] font-medium">
                        {project.solution}
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* IMAGE SHOWCASE */}
      {project.images && project.images.length > 1 && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 space-y-12">
               {project.images.slice(1).map((img, idx) => (
                   <div key={idx} className="rounded-[40px] overflow-hidden border border-gray-100 shadow-xl">
                      <img src={img} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-auto" />
                   </div>
               ))}
            </div>
          </section>
      )}

      {/* FEATURES GRID */}
      <section className="py-32 bg-[#0A0A0A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="max-w-3xl mb-24">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter heading-font mb-8">Core<br />Features.</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                 Engineering precision meets functional design.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.features.map((feature, idx) => (
                  <div key={idx} className="p-12 rounded-[40px] border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
                     <div className="w-10 h-10 rounded-full border border-[#10b981] flex items-center justify-center text-[#10b981] mb-8 font-bold">
                        {idx + 1}
                     </div>
                     <p className="text-xl font-medium leading-tight">
                        {feature}
                     </p>
                  </div>
              ))}
           </div>
        </div>
      </section>

      {/* PROJECT NAVEGATION */}
      <section className="py-40 bg-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-8 text-gray-400">Next Project</h2>
            <Link 
              href={`/projects/${PROJECTS[(PROJECTS.findIndex(p => p.slug === project.slug) + 1) % PROJECTS.length].slug}`}
              className="group block"
            >
              <div className="text-5xl md:text-8xl font-bold heading-font tracking-tighter group-hover:text-[#10b981] transition-all duration-500 mb-8 inline-block decoration-[#10b981]/0 underline decoration-[8px] underline-offset-8 group-hover:decoration-[#10b981]/100">
                {PROJECTS[(PROJECTS.findIndex(p => p.slug === project.slug) + 1) % PROJECTS.length].title}
              </div>
              <div className="flex justify-center">
                 <div className="text-5xl font-light group-hover:translate-x-4 transition-transform duration-500 text-[#10b981]">→</div>
              </div>
            </Link>
         </div>
      </section>
    </div>
  );
}