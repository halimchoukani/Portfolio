import React from "react";

function About() {
  return (
    <div
      className="relative w-[90%] md:w-[100%] h-[100vh] m-auto rounded-3xl flex flex-col justify-start items-center mt-2 gap-4 bg-[#161616] z-[90]"
      id="about"
    >
      <h1 className="text-white text-[100px] ">About me</h1>
      <div className="w-full flex flex-row justify-between items-center">
        <div className="w-[30vw] p-6">
          <svg
            className="w-full h-full text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
            />
          </svg>
        </div>
        <div className="w-[50%]">
          <p className="text-white text-[26px] font-extralight ">
            I'm a Full-Stack developer from Tunisia, I have a passion for web
            development and love to create new and exciting projects. I have
            experience working with both front-end and back-end technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
