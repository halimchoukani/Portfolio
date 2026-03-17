"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".reveal-left", 
        { opacity: 0, x: -40 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          ease: "power2.out", 
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(".reveal-right", 
        { opacity: 0, x: 40 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          ease: "power2.out", 
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          }
        }
      );
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={container} className="py-[120px] px-8 md:px-[60px] grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center overflow-hidden">
      <div className="reveal-left">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent mb-5 flex items-center gap-3 before:content-[''] before:block before:w-8 before:h-[1px] before:bg-accent">
          01 / About
        </div>
        <h2 className="text-[clamp(32px,4vw,52px)] font-[800] leading-[1.05] tracking-[-0.02em] mb-6">
          Crafting Digital<br />Experiences
        </h2>
        <p className="text-text-muted leading-[1.8] text-[16px]">
          Information technology graduate with hands-on experience in full-stack web development. 
          I specialize in building robust backend APIs and modern, reactive frontends — from 
          scalable microservices to real-time applications.
          <br /><br />
          I thrive in dynamic environments, write clean maintainable code, and pick up new 
          technologies fast. Currently pursuing a Master's in Mobile Development while 
          expanding my expertise in AI-augmented systems.
        </p>
      </div>
      <div className="reveal-right">
        <div className="grid grid-cols-2 gap-0.5 mt-8 lg:mt-12 bg-border-accent bg-clip-border rounded-lg overflow-hidden border border-border-accent">
          <div className="p-7 bg-surface">
            <div className="text-[40px] font-[800] bg-gradient-to-br from-accent to-accent2 bg-clip-text text-transparent leading-none">3+</div>
            <div className="text-[13px] text-text-muted mt-1.5">Years building</div>
          </div>
          <div className="p-7 bg-surface">
            <div className="text-[40px] font-[800] bg-gradient-to-br from-accent to-accent2 bg-clip-text text-transparent leading-none">5+</div>
            <div className="text-[13px] text-text-muted mt-1.5">Projects shipped</div>
          </div>
          <div className="p-7 bg-surface">
            <div className="text-[40px] font-[800] bg-gradient-to-br from-accent to-accent2 bg-clip-text text-transparent leading-none">10+</div>
            <div className="text-[13px] text-text-muted mt-1.5">Technologies</div>
          </div>
          <div className="p-7 bg-surface">
            <div className="text-[40px] font-[800] bg-gradient-to-br from-accent to-accent2 bg-clip-text text-transparent leading-none">∞</div>
            <div className="text-[13px] text-text-muted mt-1.5">Coffee consumed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
