"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { PROJECTS } from "../data/projects";

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const ALL_SERVICES = [
  {
    num: "01",
    tag: "SaaS",
    title: "SaaS Platform Development",
    desc: "Multi-tenant applications with role-based access, subscription flows, and deep API integrations.",
    items: ["Multi-tenant architecture", "RBAC & permissions", "Subscription billing", "Custom admin dashboard"],
    proof: "Seen in: Ezanias TMS — Canadian logistics SaaS.",
  },
  {
    num: "02",
    tag: "E-commerce",
    title: "Food & Retail E-commerce",
    desc: "Proprietary storefronts and food delivery platforms with deals engines and delivery integrations.",
    items: ["Custom storefront & checkout", "Deals & discounts engine", "Deliverect API integration", "Category & menu management"],
    proof: "Seen in: Medaan — food delivery platform, Calgary CA.",
  },
  {
    num: "03",
    tag: "ERP",
    title: "ERP & Inventory Systems",
    desc: "End-to-end inventory engines, order lifecycle tracking, and CRM built for real operations.",
    items: ["Barcode-driven inventory", "Custom product bundling", "Multi-tenant CRM", "Real-time analytics"],
    proof: "Seen in: ANR Inventory ERP — US market.",
  },
  {
    num: "04",
    tag: "Booking",
    title: "Booking & Reservation Platforms",
    desc: "Conversion-optimised booking flows with package browsers, guide profiles, and custom CMS.",
    items: ["Booking engine & availability", "Tour & package management", "Custom CMS for admins", "Dynamic homepage controls"],
    proof: "Seen in: Hot Air Balloon platform — Dubai, AE.",
  },
  {
    num: "05",
    tag: "Real-Time",
    title: "Real-Time Applications",
    desc: "Live location tracking, real-time chat, driver-passenger matching, and push notifications.",
    items: ["Live location tracking", "Real-time chat", "Driver-passenger matching", "Firebase push notifications"],
    proof: "Seen in: 911 Limo App — InDrive-style ride-sharing platform.",
  },
  {
    num: "06",
    tag: "Infrastructure",
    title: "Domain & Hosting Infrastructure",
    desc: "WHMCS replicas, domain registrar integrations, reseller portals, and hosting automation — specialist-level expertise.",
    items: ["Verisign / CentralNic / PIR APIs", "WHMCS replica & plugins", "Plesk / cPanel automation", "Domain backorder systems"],
    proof: "Seen in: Navicosoft Reseller Portal — live, serving real resellers.",
  },
  {
    num: "07",
    tag: "AI",
    title: "AI Chatbots & Automation",
    desc: "AI-powered chatbots for support and lead capture. Workflow automation pipelines. OpenAI, Claude, Gemini integrations.",
    items: ["Custom chatbot training", "OpenAI / Claude / Gemini APIs", "n8n & Zapier pipelines", "RAG & LLM integrations"],
    proof: "Seen in: AI Chatbot Platform — 24/7 support automation.",
  },
  {
    num: "08",
    tag: "EdTech",
    title: "EdTech & Learning Platforms",
    desc: "Multi-role SaaS with quizzes, assignments, progress tracking, and subscription billing built for scale.",
    items: ["Multi-role access", "Quiz & assignment engine", "Progress analytics", "Subscription billing"],
    proof: "Seen in: Knowroo — EdTech SaaS.",
  },
  {
    num: "09",
    tag: "Custom",
    title: "Custom Web Applications",
    desc: "CRMs, internal tools, admin panels, accounting systems — any business problem that needs a software solution.",
    items: ["Invoicing & expense tracking", "Role-based access control", "Reporting & analytics", "Custom business logic"],
    proof: "Seen in: AirIdeal — accounting & business management platform.",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [trustVisible, setTrustVisible] = useState(false);
  const trustRef = useRef<HTMLElement>(null);

  const projects = useCountUp(13, 1800, trustVisible);
  const apis = useCountUp(1500, 2200, trustVisible);
  const years = useCountUp(4, 1200, trustVisible);
  const completion = useCountUp(100, 1600, trustVisible);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const el = trustRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTrustVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted]);

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

  const visibleServices = showAllServices ? ALL_SERVICES : ALL_SERVICES.slice(0, 6);

  return (
    <div className="bg-white text-[#0A0A0A] overflow-x-hidden selection:bg-[#10b981] selection:text-white antialiased font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold tracking-tighter text-black uppercase font-syne leading-none">UMAIR</div>
            <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400 font-poppins mt-0.5">Software Engineer & AI Systems</div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[13px]">
            <a href="#work" className="font-medium hover:text-[#10b981] transition-colors">Work</a>
            <a href="#services" className="font-medium hover:text-[#10b981] transition-colors">Services</a>
            <a href="#about" className="font-medium hover:text-[#10b981] transition-colors">About</a>
            <a href="#contact" className="font-medium hover:text-[#10b981] transition-colors">Contact</a>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Available</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/mumairtufail" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-black transition-colors">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/umair-laravel-dev/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-[#0077b5] transition-colors">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href="https://wa.me/923354455494"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-6 py-3 bg-black hover:bg-[#10b981] text-white text-[13px] font-semibold transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          <button className="md:hidden text-2xl" onClick={handleMobileMenu}>☰</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-32 pb-24 relative overflow-hidden bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[0.9] font-bold tracking-tighter mb-8 font-syne">
              I build <span className="text-[#10b981]">scalable</span><br />systems that last.
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-dm">
              From real-time SaaS platforms and AI automation to domain infrastructure and enterprise backends — one engineer, complete ownership, production-grade delivery.
            </p>

            <div className="mt-14 flex flex-wrap gap-5">
              <a
                href="#work"
                className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-black text-lg font-semibold hover:bg-[#10b981] hover:text-white transition-all"
              >
                View My Work
              </a>
              <a
                href="https://wa.me/923354455494"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-5 border border-white/30 hover:border-white text-lg font-medium transition-all"
              >
                Book a Free Call
              </a>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-8 text-[10px] uppercase tracking-[0.25em] font-black text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full"></span>
                13+ live projects
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full"></span>
                CA · US · AE · QA markets
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full"></span>
                Available now
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden border border-white/10 shadow-2xl group">
              <img src="/portfolioimg.png" alt="Umair Tufail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#10b981] p-6 shadow-2xl">
              <div className="text-[9px] uppercase tracking-widest font-black text-black">Active Status</div>
              <div className="text-xl font-black text-white">Open to Work</div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981]/5 blur-[120px] rounded-full -mr-40 -mt-40"></div>
      </section>

      {/* TRUST BAR */}
      <section ref={trustRef} className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-gray-200 border-x border-gray-200">
            {/* 13+ Projects */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="text-4xl md:text-5xl font-black tracking-tighter font-syne text-black leading-none">
                {projects}<span className="text-[#10b981]">+</span>
              </div>
              <div className="mt-3 text-[9px] font-black uppercase tracking-[0.25em] text-gray-500 font-poppins leading-tight">
                PROJECTS<br />SHIPPED
              </div>
            </div>
            {/* 1,500+ APIs */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="text-4xl md:text-5xl font-black tracking-tighter font-syne text-black leading-none">
                {apis >= 1000 ? `${(apis / 1000).toFixed(1).replace(".0", "")}K` : apis}<span className="text-[#10b981]">+</span>
              </div>
              <div className="mt-3 text-[9px] font-black uppercase tracking-[0.25em] text-gray-500 font-poppins leading-tight">
                REST APIS<br />DELIVERED
              </div>
            </div>
            {/* 4+ Years */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="text-4xl md:text-5xl font-black tracking-tighter font-syne text-black leading-none">
                {years}<span className="text-[#10b981]">+</span>
              </div>
              <div className="mt-3 text-[9px] font-black uppercase tracking-[0.25em] text-gray-500 font-poppins leading-tight">
                YEARS<br />EXPERIENCE
              </div>
            </div>
            {/* 100% */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="text-4xl md:text-5xl font-black tracking-tighter font-syne text-black leading-none">
                {completion}<span className="text-[#10b981]">%</span>
              </div>
              <div className="mt-3 text-[9px] font-black uppercase tracking-[0.25em] text-gray-500 font-poppins leading-tight">
                COMPLETION<br />RATE
              </div>
            </div>
            {/* Markets */}
            <div className="col-span-2 md:col-span-1 p-8 md:p-10 flex flex-col justify-center">
              <div className="text-3xl md:text-4xl font-black tracking-tighter font-syne text-black leading-tight">
                CA·US<br />AE·QA
              </div>
              <div className="mt-3 text-[9px] font-black uppercase tracking-[0.25em] text-gray-500 font-poppins leading-tight">
                MARKETS<br />SERVED
              </div>
            </div>
          </div>
        </div>
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
              <Link href="/projects" className="group flex items-center gap-4 px-10 py-5 bg-white border border-gray-200 text-sm font-bold hover:bg-black hover:text-white transition-all shadow-sm font-poppins">
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
                    <div className="hidden md:block md:col-span-1">
                      <span className="text-[11px] font-bold text-gray-400 group-hover:text-gray-700 font-syne transition-colors tracking-tighter">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="md:col-span-2">
                      <div className="aspect-[16/11] bg-gray-50 overflow-hidden border border-gray-100 group-hover:border-white/20 transition-all duration-500 shadow-sm">
                        <img
                          src={project.thumbnail || project.images?.[0]}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight font-syne group-hover:text-white transition-colors mb-1">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#10b981] font-syne">{project.niche}</span>
                        <span className="w-1 h-1 bg-gray-300 group-hover:bg-gray-700 rounded-full"></span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 font-syne group-hover:text-gray-400 transition-colors">{(project as any).location || "Global"}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.split(",").slice(0, 3).map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-white border border-gray-200 text-[9px] font-bold uppercase tracking-widest text-gray-500 group-hover:bg-transparent group-hover:border-white/30 group-hover:text-white transition-all font-syne">
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
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

      {/* SERVICES */}
      <section id="services" className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <div>
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 font-poppins mb-4">What I Build</div>
              <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.85] font-syne">
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
            {visibleServices.map((service, index) => {
              const isLastRow = index >= visibleServices.length - (visibleServices.length % 2 === 0 ? 2 : 1);
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={service.num}
                  className={`p-10 md:p-14 hover:bg-[#FBFBFB] transition-colors group ${
                    isLeft ? "md:border-r border-gray-200" : ""
                  } ${
                    !isLastRow || visibleServices.length % 2 !== 0 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-xs font-bold text-gray-400 font-poppins">{service.num}</span>
                    <span className="px-3 py-1 border border-gray-200 text-[9px] font-bold uppercase tracking-widest text-gray-400">{service.tag}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight font-syne mb-5 italic group-hover:text-[#10b981] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-8 font-poppins max-w-sm">
                    {service.desc}
                  </p>
                  <ul className="space-y-2.5 mb-10">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                        <span className="w-4 h-px bg-gray-300"></span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-gray-100 text-[10px] italic text-gray-400 font-poppins">
                    {service.proof}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="px-10 py-5 bg-white border border-gray-200 text-sm font-bold hover:bg-black hover:text-white transition-all shadow-sm font-poppins flex items-center gap-4"
            >
              {showAllServices ? "Show fewer services ↑" : `View all ${ALL_SERVICES.length} services →`}
            </button>
            <a
              href="https://wa.me/923354455494"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-black text-white text-sm font-bold hover:bg-[#10b981] transition-all font-poppins flex items-center gap-4"
            >
              Start a project →
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 bg-[#FBFBFB] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 font-poppins mb-4">About</div>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none font-syne">Builder.<br /><span className="italic font-normal">Not just<br />a coder.</span></h2>
            <div className="mt-8 text-[#10b981] text-sm font-black uppercase tracking-widest">Software Engineer & AI Systems</div>
            <div className="mt-10 flex gap-4">
              <a href="https://www.linkedin.com/in/umair-laravel-dev/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-200 text-[11px] font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all font-poppins">
                LinkedIn
              </a>
              <a href="https://github.com/mumairtufail" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-200 text-[11px] font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all font-poppins">
                GitHub
              </a>
            </div>
          </div>

          <div className="md:col-span-7 space-y-10">
            <div className="text-xl text-gray-700 leading-relaxed font-dm space-y-5">
              <p className="text-2xl text-black font-medium leading-snug">
                I'm a software engineer based in Lahore with 4+ years building production systems at scale.
              </p>
              <p>
                I've designed and delivered 1,500+ REST APIs, engineered real-time ride-sharing platforms, built WHMCS-style hosting infrastructure, and shipped AI-powered products — across companies in Pakistan, Canada, UAE, and Qatar.
              </p>
              <p>
                I don't specialise in a framework. I specialise in building systems that work.
              </p>
            </div>

            <div className="pt-10 border-t border-gray-200">
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 font-poppins mb-6">Experience</div>
              <div className="space-y-0 divide-y divide-gray-100">
                {[
                  { period: "Mar 2025 – Present", role: "Senior Backend Developer", company: "Navicosoft" },
                  { period: "Sep 2023 – Feb 2025", role: "Senior Backend Developer", company: "Tecjaunt" },
                  { period: "May 2023 – Sep 2023", role: "Junior Backend Developer", company: "Vebtual Limited" },
                  { period: "Ongoing", role: "Freelance Full-Stack Engineer", company: "CA · US · AE · QA" },
                ].map((item) => (
                  <div key={item.company} className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="font-semibold text-black font-syne">{item.role}</div>
                      <div className="text-sm text-[#10b981] font-bold font-poppins">{item.company}</div>
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-poppins">{item.period}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-x-12 gap-y-4 text-sm font-poppins">
              <div>
                <div className="font-semibold text-black text-xs uppercase tracking-widest">Education</div>
                <div className="text-gray-500 mt-1">ADP Computer Science · Superior University Lahore</div>
              </div>
              <div>
                <div className="font-semibold text-black text-xs uppercase tracking-widest">Based in</div>
                <div className="text-gray-500 mt-1">Lahore, Pakistan · Remote-first</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 font-poppins mb-4">Core Competencies</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter font-syne uppercase">Tech Stack</h2>
            <p className="mt-4 text-sm text-gray-400 font-poppins">Stack is an implementation detail. Outcome is everything.</p>
          </div>

          <div className="border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-200">
              {[
                { category: "BACKEND", tags: ["PHP", "Laravel", "Python", "Node.js", "REST APIs", "GraphQL", "MVC"], primary: ["Laravel", "PHP"] },
                { category: "FRONTEND", tags: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "Vue", "Blade", "Livewire"], primary: ["Tailwind CSS", "JavaScript"] },
                { category: "DATABASES", tags: ["MySQL", "PostgreSQL", "Redis", "Query Optimisation"], primary: ["MySQL", "PostgreSQL"] },
                { category: "CLOUD / DEVOPS", tags: ["AWS EC2", "AWS S3", "CloudFront", "Lightsail", "Route 53", "CI/CD Pipelines", "Linux"], primary: ["AWS EC2", "CI/CD Pipelines"] },
                { category: "AI / AUTOMATION", tags: ["OpenAI API", "Claude API", "Gemini", "n8n", "Zapier", "LangChain"], primary: ["OpenAI API"] },
                { category: "DOMAIN / HOSTING", tags: ["WHMCS", "Plesk", "cPanel", "Verisign API", "CentralNic", "PIR Registry", "SSO/IdP"], primary: ["WHMCS", "Verisign API"] },
                { category: "INTEGRATIONS", tags: ["Stripe", "QuickBooks", "Deliverect", "Firebase", "Barcode APIs", "Swagger"], primary: [] },
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
            <div className="p-6 md:p-8 bg-[#FBFBFB] border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-[10px] font-medium text-gray-400 uppercase tracking-widest font-poppins">Bold border = primary expertise</div>
              <div className="text-[10px] font-medium text-gray-400 uppercase tracking-widest font-poppins">Muted = supporting / occasional</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#10b981] font-poppins mb-4">Get in Touch</div>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none font-syne">
              Let's build<br /><span className="italic font-normal text-[#10b981]">something.</span>
            </h2>
            <p className="mt-6 text-xl text-gray-400 max-w-xl font-dm">Full brief or just an idea — let's talk. Every message gets a reply within 24 hours.</p>
          </div>

          <div className="grid md:grid-cols-3 border border-white/10">
            <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors">
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 font-poppins mb-4">01</div>
              <h3 className="text-xl font-bold font-syne mb-3">Book a Call</h3>
              <p className="text-sm text-gray-400 font-poppins mb-8">Free 30-minute discovery call. No commitment, just a conversation.</p>
              <a href="https://wa.me/923354455494" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all font-poppins">
                WhatsApp →
              </a>
            </div>
            <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors">
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 font-poppins mb-4">02</div>
              <h3 className="text-xl font-bold font-syne mb-3">Send a Message</h3>
              <p className="text-sm text-gray-400 font-poppins mb-8">Describe your project, timeline, and budget — I'll reply with an honest estimate.</p>
              <a href="mailto:mumairtufail786@gmail.com" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all font-poppins">
                Email →
              </a>
            </div>
            <div className="p-10 hover:bg-white/5 transition-colors">
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 font-poppins mb-4">03</div>
              <h3 className="text-xl font-bold font-syne mb-3">Quick Message</h3>
              <p className="text-sm text-gray-400 font-poppins mb-8">Prefer LinkedIn? Send a direct message — I check it daily.</p>
              <a href="https://www.linkedin.com/in/umair-laravel-dev/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all font-poppins">
                LinkedIn DM →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12 items-start">
            <div>
              <div className="text-3xl font-black tracking-tighter text-white uppercase font-syne">UMAIR TUFAIL</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-600 font-poppins">Software Engineer · Lahore, PK</div>
            </div>
            <div className="flex flex-wrap gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-500 font-poppins">
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Available for new projects</span>
              </div>
              <a href="https://github.com/mumairtufail" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-white transition-colors">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/umair-laravel-dev/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-[#0077b5] transition-colors">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 text-center text-[9px] text-gray-600 tracking-[0.4em] font-black uppercase">
            © {new Date().getFullYear()} Muhammad Umair · Built by me, obviously.
          </div>
        </div>
      </footer>
    </div>
  );
}
