import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="relative w-[90%] md:w-[100%] h-[100vh] rounded-3xl flex flex-col justify-start items-center gap-4 bg-[#0F0F0F] z-[100]"
    >
      <div className="w-[90%] md:w-[80%] m-auto rounded-3xl flex flex-col justify-center gap-20">
        <div className="w-[90%] md:w-[80%] m-auto rounded-3xl flex flex-col justify-start items-center mt-2 gap-4">
          <h1 className="text-white text-[100px] text">Contact me</h1>
          <p className="text-white text-[26px] font-extralight text">
            Feel free to reach out to me
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
