"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ctx = gsap.context(() => {
      gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

      const onMouseMove = (e: MouseEvent) => {
        gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
        gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.3, ease: "power2.out" });
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
          gsap.to(ring, { scale: 1.6, opacity: 1, duration: 0.2 });
        }
      };

      const handleMouseOut = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
          gsap.to(ring, { scale: 1, opacity: 0.6, duration: 0.2 });
        }
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseover", handleMouseOver);
      window.addEventListener("mouseout", handleMouseOut);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseover", handleMouseOver);
        window.removeEventListener("mouseout", handleMouseOut);
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 border-[1.5px] border-accent rounded-full pointer-events-none z-[9999] opacity-60 mix-blend-difference"
      />
    </>
  );
}
