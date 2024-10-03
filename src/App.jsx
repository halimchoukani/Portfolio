import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Projects from "./Component/Projects";
import About from "./Component/About";
import Contact from "./Component/Contact";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
function App() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      if (lenisRef.current?.lenis) {
        lenisRef.current.lenis.raf(time * 1000);
      }
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);
  useEffect(() => {
    gsap.to("#project", {
      scrollTrigger: {
        trigger: "#project",
        start: "-10% 80%",
        end: "bottom 80%",
        scrub: true,
        toggleActions: "play none none none",
        markers: false,
      },
      opacity: 1,
      y: "-400px",
      duration: 1,
      stagger: 0.3,
    });
    gsap.to("#about", {
      scrollTrigger: {
        trigger: "#project",
        start: "40% 80%",
        end: "150% 80%",
        scrub: true,
        toggleActions: "play none none none",
        markers: false,
      },
      opacity: 1,
      y: "-400px",
      duration: 1,
      stagger: 0.3,
    });
    gsap.to("#contact", {
      scrollTrigger: {
        trigger: "#about",
        start: "-100% 80%",
        end: "200% 80%",
        scrub: true,
        toggleActions: "play none none none",
        markers: false,
      },
      opacity: 1,
      y: "-400px",
      duration: 1,
      stagger: 0.3,
    });
  }, []);
  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </ReactLenis>
  );
}

export default App;
