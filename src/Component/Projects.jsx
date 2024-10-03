import gsap from "gsap";
import Card from "./Card";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    gsap.to(".card", {
      scrollTrigger: {
        trigger: ".card-container", // Use a container for triggering the animation
        start: "-100% top",  // Adjust start and end based on visibility
        end: "90% 80%",
        scrub: true,
        toggleActions: "play play reverse play",
        markers: false,
      },
      opacity: 1,
      y: -150,
      duration: 1,
      stagger: 0.3,
      ease: "power4.out",
    });
    gsap.to(".text",{
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
    })

    gsap.to("#project",{
      scrollTrigger: {
        trigger: "#project",
        start: "top bottom",
        end: "50% 50%",
        scrub: true,
        toggleActions: "play none none none",
        markers: false,
      },
      y: "-50%",
      duration: 1,
    })


  }, []);
  
  return (
    <div className="w-full h-auto bg-[#0F0F0F]" id="project">
      <div className="w-[90%] md:w-[80%] m-auto rounded-3xl flex flex-col justify-center gap-20 " >
      <div className="w-[90%] md:w-[80%] m-auto rounded-3xl flex flex-col justify-start items-center mt-2 gap-4">
        <h1 className="text-white text-[100px] text">Selected Works</h1>
        <p className="text-white text-[26px] font-extralight text">
          Take a look at some of my projects
        </p>
      </div>
      <div className="card-container flex flex-row  w-full  justify-center gap-12"> {/* Added container */}
        <div className="w-full flex flex-col justify-center p-20 gap-12">
          <Card
            className="card"  // Consistent class name
            num="0"
            img="/assets/images/project1.png"
            title="Nexus Games"
            link="https://github.com/halimchoukani/NexusGames"
            desc="A marketplace for e-sports peripherals."
          />
          <Card
            className="card"  // Consistent class name
            num="1"
            img="https://github.com/halimchoukani/PFE_Manager/raw/main/image_2024-10-02_155259849.png"
            title="PFE Manger"
            link="https://github.com/halimchoukani/PFE_Manager"
            desc="Web application that manages the entire student registration process for the PFE (Final Year Project) internship."
          />
        </div>
        <div className="card-container w-full flex flex-col justify-center p-20 pt-52 gap-12">
          <Card
            className="card"  // Consistent class name
            num="0"
            img="/assets/images/apple.png"
            title="Apple 3D iPhone 15 Clone"
            link="https://github.com/halimchoukani/apple_website"
            desc="3D Apple Website Clone."
          />
          <Card
            className="card"  // Consistent class name
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
