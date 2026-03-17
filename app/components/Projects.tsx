"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { num: "01 / 2024", title: "SandD — Auction Platform", desc: "A full-featured auction platform with real-time bidding, online payment processing via Stripe, and cross-platform presence across web and mobile.", tech: ["React.js", "Spring Boot", "Oracle DB", "Android", "Stripe"] },
  { num: "02 / 2024", title: "PFE Manager", desc: "A web application for managing final-year project registrations with real-time notifications and live collaboration features using WebSockets.", tech: ["React.js", "Node.js", "MongoDB", "Socket.io"] },
  { num: "03 / 2025", title: "AI Task Optimizer", desc: "Smart project management system with AI-powered natural language scheduling, resource allocation optimization and interactive analytics dashboards.", tech: ["Spring Boot", "React.js", "AI/NLP", "Docker"] },
  { num: "04 / 2024", title: "Support Ticket System", desc: "Internal support ticket management platform with analytical dashboards, status tracking and a responsive UI built for operational efficiency.", tech: ["PHP", "MySQL", "Bootstrap", "Chart.js"] }
];

export default function Projects() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".reveal-header", 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: container.current, start: "top 80%" } }
      );

      gsap.fromTo(".project-card", 
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: ".projects-grid", start: "top 85%" } }
      );
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={container} className="py-[120px] px-8 md:px-[60px]">
      <div className="reveal-header mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent mb-5 flex items-center gap-3 before:content-[''] before:block before:w-8 before:h-[1px] before:bg-accent">
            04 / Projects
          </div>
          <h2 className="text-[clamp(32px,4vw,52px)] font-[800] leading-[1.05] tracking-[-0.02em]">Selected Work</h2>
        </div>
        <a href="https://github.com/halimchoukani" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 py-[14px] px-8 rounded-sm bg-transparent text-text-main font-mono text-[12px] font-normal tracking-[0.1em] uppercase border border-border-accent transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5 cursor-none whitespace-nowrap">
          GitHub →
        </a>
      </div>
      
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 border border-border-accent rounded-lg overflow-hidden lg:rounded-br-lg lg:rounded-bl-none">
        {projects.map((proj, i) => (
          <div key={i} className={`project-card bg-surface p-10 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:z-10 hover:shadow-glow cursor-none group ${i === 0 ? "lg:rounded-tl-lg" : ""} ${i === 2 ? "lg:rounded-tr-lg" : ""} ${i === 3 ? "lg:rounded-bl-lg" : ""}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent2/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute top-8 right-8 text-[20px] text-text-muted transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1">↗</div>
            <div className="font-mono text-[11px] text-text-muted tracking-[0.2em] mb-5">{proj.num}</div>
            <div className="text-[22px] font-[800] mb-3 relative z-10">{proj.title}</div>
            <div className="text-[14px] text-text-muted leading-[1.7] mb-6 relative z-10">{proj.desc}</div>
            <div className="flex flex-wrap gap-2 relative z-10">
              {proj.tech.map((tag, j) => (
                <span key={j} className="font-mono text-[11px] py-1 px-3 border border-border-accent rounded-sm text-text-muted transition-colors duration-200 hover:text-accent hover:border-accent/40">{tag}</span>
              ))}
            </div>
          </div>
        ))}

        <div className="project-card bg-gradient-to-br from-accent/5 to-accent2/5 p-10 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:z-10 hover:shadow-glow cursor-none group lg:col-span-2 lg:rounded-br-lg">
          <div className="absolute top-8 right-8 text-[20px] text-text-muted transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1">↗</div>
          <div className="font-mono text-[11px] text-text-muted tracking-[0.2em] mb-5">More on GitHub</div>
          <div className="text-[22px] font-[800] mb-3 relative z-10">Open Source & Personal Projects</div>
          <div className="text-[14px] text-text-muted leading-[1.7] mb-6 relative z-10">Explore additional projects, experiments and open-source contributions on GitHub — ranging from utility tools to full-stack applications.</div>
          <a href="https://github.com/halimchoukani" target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center gap-2.5 py-3 px-6 rounded-sm bg-accent text-[#050810] font-mono text-[12px] font-bold tracking-[0.1em] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow cursor-none">
            github.com/halimchoukani →
          </a>
        </div>
      </div>
    </section>
  );
}
