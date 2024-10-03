import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import { ReactLenis, useLenis } from 'lenis/react';
import gsap from "gsap";
import { useEffect, useRef } from "react";

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

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      <Navbar />
      <Hero />
    </ReactLenis>
  );
}

export default App;
