"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".reveal",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: container.current, start: "top 80%" } }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={container} className="py-[120px] px-8 md:px-[60px] text-center relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,245,196,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="reveal relative z-10">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent mb-5 flex items-center justify-center gap-3 before:content-[''] before:block before:w-8 before:h-[1px] before:bg-accent after:content-[''] after:block after:w-8 after:h-[1px] after:bg-accent">
          06 / Contact
        </div>
        <div className="text-[clamp(40px,8vw,96px)] font-[800] tracking-[-0.04em] leading-[0.9] mb-8">
          Let's Build<br />
          <span className="bg-gradient-to-br from-accent to-accent2 bg-clip-text text-transparent">Something.</span>
        </div>
        <p className="text-text-muted leading-[1.8] text-[16px] max-w-[520px] mx-auto mb-10">
          Open to full-time roles, freelance projects and remote collaborations.
          If you have an interesting challenge, let's talk.
        </p>

        <div className="mb-14">
          <a href="mailto:halim.choukani@gmail.com" className="inline-flex items-center gap-2.5 py-[14px] px-8 rounded-sm bg-accent text-[#050810] font-mono text-[12px] font-bold tracking-[0.1em] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow cursor-none">
            halim.choukani@gmail.com →
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <a href="mailto:halim.choukani@gmail.com" className="flex items-center gap-2.5 font-mono text-[13px] text-text-muted tracking-[0.05em] transition-colors duration-200 hover:text-accent cursor-none">
            <Mail size={18} /> Email
          </a>
          <a href="https://github.com/halimchoukani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 font-mono text-[13px] text-text-muted tracking-[0.05em] transition-colors duration-200 hover:text-accent cursor-none">
            <Github size={18} /> GitHub
          </a>
          <a href="tel:+21656123197" className="flex items-center gap-2.5 font-mono text-[13px] text-text-muted tracking-[0.05em] transition-colors duration-200 hover:text-accent cursor-none">
            <Phone size={18} /> +216 56 123 197
          </a>
          <a href="https://www.linkedin.com/in/halim-choukani-921488257/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 font-mono text-[13px] text-text-muted tracking-[0.05em] transition-colors duration-200 hover:text-accent cursor-none">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
