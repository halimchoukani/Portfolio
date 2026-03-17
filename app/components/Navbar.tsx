"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        const htmlElement = s as HTMLElement;
        if (window.scrollY >= htmlElement.offsetTop - 120) {
          current = htmlElement.id;
        }
      });
      setActiveTab(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = ["about", "skills", "experience", "projects", "contact"];

  return (
    <nav className="w-[100vw] fixed top-0 left-0 right-0 z-[100] flex flex-col backdrop-blur-[20px] bg-bg/70 border-b border-border-accent">
      <div className="w-full flex items-center justify-between py-4 px-6 md:py-5 md:px-16 relative z-[101]">
        <a href="#hero" className="font-mono text-[13px] tracking-[0.15em] text-accent decoration-none z-[101]">
          Halim Choukani
        </a>

        <ul className="hidden md:flex gap-6 lg:gap-9 list-none">
          {navLinks.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`text-[13px] tracking-[0.12em] uppercase transition-colors duration-200 ${activeTab === id ? "text-accent" : "text-text-muted hover:text-accent"
                  }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 md:gap-6 z-[101]">
          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-accent">
            <div className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse shadow-glow" />
            Available for work
          </div>
          <a
            href="https://drive.google.com/file/d/1s2JM6Ix7aLcVgMyZwkTy0xau9x-rbMby/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center py-2 px-4 rounded-sm border border-accent text-accent font-mono text-[11px] font-bold tracking-[0.1em] uppercase transition-all duration-200 hover:bg-accent hover:text-[#050810] cursor-none"
          >
            Resume
          </a>

          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden text-accent transition-transform duration-200 hover:scale-110 cursor-none p-2 -mr-2 relative z-[101]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 w-full bg-[#0b1120]/95 backdrop-blur-[20px] transition-all duration-300 ease-in-out border-b border-border-accent overflow-hidden z-[100] ${isMobileMenuOpen ? "max-h-[400px] opacity-100 py-6 visible" : "max-h-0 opacity-0 py-0 border-transparent invisible"
          }`}
      >
        <ul className="flex flex-col items-center gap-6 list-none">
          {navLinks.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-[14px] font-mono tracking-[0.15em] uppercase transition-colors duration-200 ${activeTab === id ? "text-accent" : "text-text-muted hover:text-accent"
                  }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1s2JM6Ix7aLcVgMyZwkTy0xau9x-rbMby/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex mt-2 items-center justify-center py-3 px-6 rounded-sm border border-accent text-accent font-mono text-[12px] font-bold tracking-[0.1em] uppercase transition-all duration-200 hover:bg-accent hover:text-[#050810] cursor-none"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
