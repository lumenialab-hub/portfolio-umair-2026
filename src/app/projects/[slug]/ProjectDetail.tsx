"use client";

import Link from "next/link";
import { Project } from "../../../data/projects";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectDetailClient({ projects }: { projects: Project[] }) {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const slug = params.slug as string;
    const found = projects.find((p) => p.slug === slug);
    if (found) {
      setProject(found);
    } else if (slug) {
      router.push("/projects");
    }
  }, [params.slug, router, projects]);

  if (!mounted || !project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-2xl font-bold tracking-tighter heading-font uppercase text-black">UMAIR</div>
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
                  <span className="text-gray-500 text-sm font-medium">{project.stack.split(",")[0]}</span>
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
                    <div className="text-xl font-medium leading-relaxed">{project.tags.join(", ")}</div>
                 </div>
              </div>
           </div>

           <div className="md:col-span-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-12">The Mission</h2>
              <p className="text-2xl md:text-4xl font-medium leading-[1.3] mb-12 text-gray-800">
                {project.problem}
              </p>
              <div className="h-px w-full bg-gray-200 mb-12"></div>
              <div className="prose prose-2xl max-w-none text-gray-600 leading-relaxed font-light">
                {project.description}
              </div>
           </div>
        </div>
      </section>

      {/* SHOWCASE IMAGES */}
      <section className="pb-32">
         <div className="max-w-7xl mx-auto px-6 space-y-20">
            {project.images && project.images.length > 0 ? project.images.map((img, idx) => (
              <div key={idx} className="rounded-[40px] overflow-hidden border border-gray-100 shadow-lg">
                <img src={img} alt={`${project.title} - ${idx + 1}`} className="w-full h-auto" />
              </div>
            )) : (
              <div className="grid md:grid-cols-2 gap-12">
                 <div className="bg-gray-100 aspect-[4/3] rounded-[40px]"></div>
                 <div className="bg-gray-100 aspect-[4/3] rounded-[40px]"></div>
              </div>
            )}
         </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-40 bg-black text-white rounded-t-[100px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-5xl md:text-7xl font-bold tracking-tighter heading-font mb-12">NEXT PROJECT?</h2>
           <Link 
            href="/projects"
            className="inline-block text-2xl font-medium border-b-2 border-white pb-2 hover:border-[#10b981] hover:text-[#10b981] transition-all"
           >
            Explore the full archive
           </Link>
        </div>
      </section>
    </div>
  );
}
