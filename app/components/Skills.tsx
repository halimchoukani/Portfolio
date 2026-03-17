"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: "⚙️", title: "Backend Development", tags: ["Spring Boot", "FastAPI", "Express.js", "Node.js", "REST API", "WebSockets"] },
  { icon: "🖥️", title: "Frontend Development", tags: ["React.js", "Next.js", "Angular", "TypeScript", "JavaScript"] },
  { icon: "🗄️", title: "Databases", tags: ["MySQL", "MongoDB", "OracleDB"] },
  { icon: "📱", title: "Mobile Development", tags: ["React Native", "Kotlin", "Android"] },
  { icon: "🧰", title: "Languages", tags: ["Java", "Python", "C/C++", "TypeScript", "JavaScript"] },
  { icon: "🐳", title: "DevOps & Tools", tags: ["Docker", "Git / GitHub", "CI/CD", "Linux", "Android Studio"] },
  { icon: "🚀", title: "Currently Learning", tags: ["AI Integration", "NLP Systems", "Microservices"] },
];

export default function Skills() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".reveal-header", 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: container.current, start: "top 80%" } }
      );

      gsap.fromTo(".skill-card", 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: ".skills-grid", start: "top 85%" } }
      );
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={container} className="py-[120px] px-8 md:px-[60px]">
      <div className="reveal-header text-center mb-[72px]">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent mb-5 flex justify-center items-center gap-3 before:content-[''] before:block before:w-8 before:h-[1px] before:bg-accent after:content-[''] after:block after:w-8 after:h-[1px] after:bg-accent">
          02 / Skills
        </div>
        <h2 className="text-[clamp(32px,4vw,52px)] font-[800] leading-[1.05] tracking-[-0.02em]">Technical Arsenal</h2>
      </div>
      <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card bg-surface border border-border-accent rounded-lg p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent2 scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
            <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-5 text-[22px]">
              {skill.icon}
            </div>
            <div className="text-[16px] font-[700] mb-4 tracking-[0.02em]">{skill.title}</div>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag, j) => (
                <span key={j} className="font-mono text-[11px] py-1 px-3 border border-border-accent rounded-sm text-text-muted transition-colors duration-200 hover:text-accent hover:border-accent/40">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
