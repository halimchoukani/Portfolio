import React, { useEffect, useRef, useState } from "react";
import CircleType from "circletype";
import { gsap } from "gsap";

function ScrollIcon() {
  const textRef = useRef(null);
  const wrapperRef = useRef(null);
  const [opacity, setOpacity] = useState(1); // State to manage opacity

  useEffect(() => {
    // Apply CircleType for the circular text effect
    const circleType = new CircleType(textRef.current);
    circleType.radius(80); // Adjust the radius as needed

    // GSAP rotation animation for the text wrapper
    gsap.to(wrapperRef.current, {
      rotation: 360,
      repeat: -1, // Infinite rotation
      duration: 2, // Adjust the speed of rotation
      ease: "linear",
      transformOrigin: "center center", // Ensures rotation happens around the center
    });

    // Scroll event listener
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get the vertical scroll position
      const newOpacity = Math.max(0, 1 - scrollTop / 500); // Change 300 to adjust the fade distance
      setOpacity(newOpacity); // Update the opacity state
    };

    window.addEventListener("scroll", handleScroll); // Add the scroll event listener

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-auto h-auto bg-black left-[100%]">
      {/* Wrapper around the text to ensure proper rotation */}
      <div
        className="fixed top-[90%] left-[80%] translate-x-[-50%] translate-y-[-50%] text-[24px] font-extrabold font-sans transition-all duration-500 text-stroke"
        ref={wrapperRef}
        style={{ display: "inline-block", opacity }} // Apply the calculated opacity
      >
        <span ref={textRef}>Scroll • Down • Scroll • Down</span>
      </div>
      <div className="fixed top-[90%] left-[80%] translate-x-[-50%] translate-y-[-50%]">
        <img
          className="w-[100px]"
          src="/assets/images/arrowdown.png"
          alt="Scroll Down Arrow"
          style={{ opacity }} // Apply the calculated opacity
        />
      </div>
    </div>
  );
}

export default ScrollIcon;
