import gsap from "gsap";
import  { useState, useEffect, useRef } from "react";
import { Svg1 } from "./SVG/Svg1";
import { Svg2 } from "./SVG/Svg2";
import { Svg3 } from "./SVG/Svg3";
import { Svg4 } from "./SVG/Svg4";
import { Svg5 } from "./SVG/Svg5";
import { Svg6 } from "./SVG/Svg6";
import { Svg7 } from "./SVG/Svg7";
import { Svg8 } from "./SVG/Svg8";

function Hero() {
  const svgComponents = [<Svg1 key="1" />, <Svg2 key="2" />, <Svg3 key="3" />,<Svg4 key="4" />, <Svg5 key="5" />, <Svg6 key="6" />,<Svg7 key="7" />, <Svg8 key="8" />];

  const [svgComponent, setSvgComponent] = useState(svgComponents[0]);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, { opacity: 1 ,delay:0.2 });
    // Function to animate the paths of the SVG
    const animatePaths = () => {
      console.log(document.querySelectorAll(".path")); // Debugging log
      gsap.fromTo(
        ".path", // Ensure this class is applied to your SVG paths
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power2.inOut",
          onUpdate: () => {
            gsap.to(textRef.current, { opacity: 1 ,delay:0.2 });
          }
        }
      );
    };

    // Set the initial SVG component
    const initialSvg =
      svgComponents[Math.floor(Math.random() * svgComponents.length)];
    setSvgComponent(initialSvg);
    // Animate on initial render

    const interval = setInterval(() => {
      gsap.to(textRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          animatePaths();
          const newSvg =
            svgComponents[Math.floor(Math.random() * svgComponents.length)];
          setSvgComponent(newSvg);
          // Use a slight timeout to ensure the new SVG is rendered before animating
          setTimeout(() => {
            animatePaths(); // Animate after changing SVG
          }, 50); // Adjust timing if necessary
          
        },
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="w-[90%] md:w-[80%] h-screen m-auto rounded-3xl flex flex-col justify-center items-center mt-2 gap-4"
    >
      <div className="h-[20%] opacity-0" ref={textRef}> {svgComponent} </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <h2 className="text-[25px] text-white">My name is Halim</h2>
        <h3 className="text-[20px] text-white font-light">
          I’m a Full-Stack developer from Tunisia
        </h3>
      </div>
    </div>
  );
}

export default Hero;
