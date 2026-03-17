"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".reveal-header", 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: container.current, start: "top 80%" } }
      );

      gsap.fromTo(".edu-item", 
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: ".edu-timeline", start: "top 85%" } }
      );
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={container} className="py-[120px] px-8 md:px-[60px]">
      <div className="reveal-header text-center flex flex-col items-center">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent mb-5 flex items-center justify-center gap-3 before:content-[''] before:block before:w-8 before:h-[1px] before:bg-accent after:content-[''] after:block after:w-8 after:h-[1px] after:bg-accent">
          05 / Education
        </div>
        <h2 className="text-[clamp(32px,4vw,52px)] font-[800] leading-[1.05] tracking-[-0.02em]">Academic Path</h2>
      </div>
      
      <div className="edu-timeline max-w-[800px] mx-auto mt-16 relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-gradient-to-b before:from-accent before:to-transparent">
        <div className="edu-item pl-12 pb-[60px] relative before:content-[''] before:absolute before:left-[-5px] before:top-1.5 before:w-[11px] before:h-[11px] before:rounded-full before:bg-accent before:border-2 before:border-bg before:shadow-[0_0_12px_rgba(0,245,196,0.5)]">
          <div className="font-mono text-[11px] text-accent tracking-[0.2em] mb-2.5">2025 — ONGOING</div>
          <div className="text-[22px] font-[700] mb-1.5">Master's in Mobile Development</div>
          <div className="text-[14px] text-text-muted">Institut Supérieur d'Études Technologiques des Radès (ISET Radès)</div>
        </div>
        <div className="edu-item pl-12 pb-[60px] relative before:content-[''] before:absolute before:left-[-5px] before:top-1.5 before:w-[11px] before:h-[11px] before:rounded-full before:bg-accent before:border-2 before:border-bg before:shadow-[0_0_12px_rgba(0,245,196,0.5)]">
          <div className="font-mono text-[11px] text-accent tracking-[0.2em] mb-2.5">2022 — 2025</div>
          <div className="text-[22px] font-[700] mb-1.5">Bachelor's in Information Technology</div>
          <div className="text-[14px] text-text-muted">Institut Supérieur d'Études Technologiques des Radès (ISET Radès)</div>
        </div>
        <div className="edu-item pl-12 pb-[60px] relative before:content-[''] before:absolute before:left-[-5px] before:top-1.5 before:w-[11px] before:h-[11px] before:rounded-full before:bg-accent before:border-2 before:border-bg before:shadow-[0_0_12px_rgba(0,245,196,0.5)]">
          <div className="font-mono text-[11px] text-accent tracking-[0.2em] mb-2.5">2022</div>
          <div className="text-[22px] font-[700] mb-1.5">Baccalaureate</div>
          <div className="text-[14px] text-text-muted">Lycée Hammam-Lif</div>
        </div>
      </div>
    </section>
  );
}
