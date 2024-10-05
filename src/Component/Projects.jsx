import gsap from "gsap";
import Card from "./Card";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    gsap.to(".card-left", {
      scrollTrigger: {
        trigger: "#container-left", // Use a container for triggering the animation
        start: "-10% 80%", // Adjust start and end based on visibility
        end: "80% 80%",
        scrub: true,
        toggleActions: "play play reverse play",
        markers: false,
      },
      opacity: 1,
      y: -150,
      duration: 1,
      stagger: 0.3,
      ease: "slow(0.3, 0.4, false)",
    });
    gsap.to(".card-right", {
      scrollTrigger: {
        trigger: "#container-right", // Use a container for triggering the animation
        start: "top 80%", // Adjust start and end based on visibility
        end: "80% 80%",
        scrub: true,
        toggleActions: "play play reverse play",
        markers: false,
      },
      opacity: 1,
      y: -150,
      duration: 1,
      stagger: 0.3,
      ease: "slow(0.3, 0.4, false)",
    });
    gsap.to(".text", {
      scrollTrigger: {
        trigger: ".text",
        start: "-50% 80%",
        end: "200% 80%",
        scrub: true,
        toggleActions: "play none none none",
        markers: false,
      },
      opacity: 1,
      y: -20,
      duration: 1,
    });
  }, []);

  return (
    <div className="relative w-full bg-[#0F0F0F] z-[80]" id="project">
      <div className="w-[90%] md:w-[80%] m-auto rounded-3xl flex flex-col justify-center gap-20 ">
        <div className="w-[90%] md:w-[80%] m-auto rounded-3xl flex flex-col justify-start items-center mt-2 gap-4">
          <h1 className="text-white text-[100px] text">Selected Works</h1>
          <p className="text-white text-[26px] font-extralight text">
            Take a look at some of my projects
          </p>
        </div>
        <div className="card-container flex flex-row  w-full  justify-center items-start gap-12">
          {" "}
          {/* Added container */}
          <div
            className="w-full flex flex-col justify-center p-20 gap-12"
            id="container-left"
          >
            <Card
              cname="card-left" // Consistent class name
              num="0"
              img="/assets/images/project1.png"
              title="Nexus Games"
              link="https://github.com/halimchoukani/NexusGames"
              desc="A marketplace for e-sports peripherals."
            />
            <Card
              cname="card-left" // Consistent class name
              num="1"
              img="https://github.com/halimchoukani/PFE_Manager/raw/main/image_2024-10-02_155259849.png"
              title="PFE Manger"
              link="https://github.com/halimchoukani/PFE_Manager"
              desc="Web application that manages the entire student registration process for the PFE (Final Year Project) internship."
            />
          </div>
          <div
            className="card-container w-full flex flex-col justify-center p-20 pt-52 gap-12"
            id="container-right"
          >
            <Card
              cname="card-right" // Consistent class name
              num="0"
              img="/assets/images/apple.png"
              title="Apple 3D iPhone 15 Clone"
              link="https://github.com/halimchoukani/apple_website"
              desc="3D Apple Website Clone."
            />
            <Card
              cname="card-right" // Consistent class name
              num="1"
              img="https://github.com/halimchoukani/StarbucksHomeUIClone/raw/main/image_2024-10-02_165110636.png"
              link="https://github.com/halimchoukani/StarbucksHomeUIClone"
              title="Starbucks Home UI Clone"
              desc="Simple Starbucks home UI clone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
