"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          ".hero-name",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-actions",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-deco",
          { opacity: 0 },
          { opacity: 1, duration: 1.2 },
          "-=0.4"
        )
        .fromTo(
          ".hero-scroll-hint",
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          "-=0.8"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={container}
      className="min-h-screen flex flex-col justify-center px-8 md:px-[60px] pt-[120px] pb-[80px] overflow-hidden"
    >
      <div className="hero-eyebrow font-mono text-[12px] tracking-[0.3em] uppercase text-accent mb-7"> // Software Engineer · Full-Stack Developer </div>
      <h1 className="hero-name text-[clamp(52px,10vw,120px)] font-[800] leading-[0.9] tracking-[-0.03em]">
        <span className="block bg-gradient-to-br from-white via-accent to-accent2 bg-clip-text text-transparent">
          Halim
        </span>
        <span className="block bg-gradient-to-br from-white via-accent to-accent2 bg-clip-text text-transparent">
          Choukani
        </span>
      </h1>
      <p className="hero-title text-[clamp(16px,2.5vw,24px)] text-text-muted mt-7 font-normal tracking-[0.02em]">
        Building scalable systems.
        <br />
        Based in Tunisia &mdash; Available remotely
      </p>
      <div className="hero-actions flex gap-4 mt-[52px]">
        <a
          href="#projects"
          className="inline-flex items-center gap-2.5 py-[14px] px-8 rounded-sm bg-accent text-[#050810] font-mono text-[12px] font-bold tracking-[0.1em] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow cursor-none"
        >
          View Work →
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 py-[14px] px-8 rounded-sm bg-transparent text-text-main font-mono text-[12px] tracking-[0.1em] uppercase border border-border-accent transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5 cursor-none"
        >
          Get in Touch
        </a>
      </div>

      <div className="hero-deco absolute hidden lg:block right-[60px] top-1/2 -translate-y-1/2">
        <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(240px,35vw,500px)] h-auto">
          <circle cx="210" cy="210" r="180" stroke="rgba(0,245,196,0.07)" strokeWidth="1" />
          <circle cx="210" cy="210" r="140" stroke="rgba(0,245,196,0.1)" strokeWidth="1" />
          <circle cx="210" cy="210" r="100" stroke="rgba(0,245,196,0.12)" strokeWidth="1" />
          <circle cx="210" cy="210" r="60" stroke="rgba(0,245,196,0.15)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="210" cy="30" r="4" fill="#00f5c4" opacity="0.8">
            <animateTransform attributeName="transform" type="rotate" from="0 210 210" to="360 210 210" dur="12s" repeatCount="indefinite" />
          </circle>
          <circle cx="70" cy="210" r="3" fill="#0066ff" opacity="0.8">
            <animateTransform attributeName="transform" type="rotate" from="0 210 210" to="-360 210 210" dur="18s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="210" r="3" fill="#7b2fff" opacity="0.6">
            <animateTransform attributeName="transform" type="rotate" from="90 210 210" to="450 210 210" dur="25s" repeatCount="indefinite" />
          </circle>
          <polygon points="210,175 239,192 239,228 210,245 181,228 181,192" stroke="rgba(0,245,196,0.3)" strokeWidth="1" fill="rgba(0,245,196,0.04)" />
          <polygon points="210,185 232,198 232,224 210,237 188,224 188,198" stroke="rgba(0,245,196,0.2)" strokeWidth="1" fill="none" />
          <circle cx="210" cy="210" r="5" fill="#00f5c4" opacity="0.9" />
          <line x1="0" y1="210" x2="420" y2="210" stroke="rgba(0,245,196,0.15)" strokeWidth="1" strokeDasharray="6 12">
            <animateTransform attributeName="transform" type="translate" from="0,-200" to="0,200" dur="6s" repeatCount="indefinite" />
          </line>
          <path d="M30 30 L30 55 M30 30 L55 30" stroke="rgba(0,245,196,0.35)" strokeWidth="1.5" />
          <path d="M390 30 L390 55 M390 30 L365 30" stroke="rgba(0,245,196,0.35)" strokeWidth="1.5" />
          <path d="M30 390 L30 365 M30 390 L55 390" stroke="rgba(0,245,196,0.35)" strokeWidth="1.5" />
          <path d="M390 390 L390 365 M390 390 L365 390" stroke="rgba(0,245,196,0.35)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="hero-scroll-hint absolute bottom-10 left-8 md:left-[60px] flex items-center gap-3 font-mono text-[11px] text-text-muted tracking-[0.1em]">
        <div className="w-12 h-[1px] bg-text-muted animate-[scrollPulse_2s_infinite]"></div>
        Scroll to explore
      </div>
    </section>
  );
}
