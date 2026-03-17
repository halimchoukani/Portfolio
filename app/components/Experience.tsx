"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".reveal-header", 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: container.current, start: "top 80%" } }
      );

      gsap.fromTo(".exp-card", 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: ".exp-grid", start: "top 85%" } }
      );
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={container} className="py-[120px] px-8 md:px-[60px]">
      <div className="reveal-header">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent mb-5 flex items-center gap-3 before:content-[''] before:block before:w-8 before:h-[1px] before:bg-accent">
          03 / Experience
        </div>
        <h2 className="text-[clamp(32px,4vw,52px)] font-[800] leading-[1.05] tracking-[-0.02em]">Work History</h2>
      </div>
      
      <div className="exp-grid grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
        <div className="exp-card bg-surface border border-border-accent rounded-lg p-10 relative overflow-hidden transition-all duration-300 hover:border-accent/25 hover:-translate-y-1 hover:shadow-glow">
          <span className="absolute top-7 right-7 font-mono text-[10px] py-1 px-2.5 rounded-sm bg-accent/10 text-accent tracking-[0.1em]">REMOTE</span>
          <div className="font-mono text-[11px] text-accent tracking-[0.1em] mb-3">Feb 2025 – Jun 2025</div>
          <div className="text-[22px] font-[800] mb-1">Turing Academy</div>
          <div className="text-[14px] text-text-muted mb-6">End-of-Studies Internship · Full-Stack Engineer</div>
          <ul className="flex flex-col gap-2.5 list-none">
            {["Built a task management optimizer improving collaborator assignment based on skills, reducing resource conflicts and planning time.",
              "Developed high-performance REST APIs with Spring Boot for project data ingestion, processing and analytics.",
              "Created an interactive React.js dashboard for project visualization, task tracking and resource management.",
              "Integrated an AI assistant for natural language project input and automated scheduling suggestions.",
              "Containerized frontend and backend services with Docker for scalable deployment."].map((item, i) => (
                <li key={i} className="text-[14px] text-text-muted leading-[1.6] pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-accent before:text-[10px] before:top-1">{item}</li>
              ))}
          </ul>
        </div>

        <div className="exp-card bg-surface border border-border-accent rounded-lg p-10 relative overflow-hidden transition-all duration-300 hover:border-accent/25 hover:-translate-y-1 hover:shadow-glow">
          <span className="absolute top-7 right-7 font-mono text-[10px] py-1 px-2.5 rounded-sm bg-accent/10 text-accent tracking-[0.1em]">ON-SITE</span>
          <div className="font-mono text-[11px] text-accent tracking-[0.1em] mb-3">Jan 2024 – Feb 2024</div>
          <div className="text-[22px] font-[800] mb-1">ZIMYS</div>
          <div className="text-[14px] text-text-muted mb-6">Internship · Web Developer · Boumhal, Ben Arous</div>
          <ul className="flex flex-col gap-2.5 list-none">
            {["Developed a support ticket management web app with PHP and MySQL, improving internal communication and request tracking.",
              "Built a responsive frontend with HTML5, CSS3, Bootstrap and Chart.js for analytical dashboards.",
              "Participated in requirements analysis and UX improvement initiatives."].map((item, i) => (
                <li key={i} className="text-[14px] text-text-muted leading-[1.6] pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-accent before:text-[10px] before:top-1">{item}</li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
