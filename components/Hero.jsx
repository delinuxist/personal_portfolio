import React from "react";
import BackgroundAnimation from "./BgAnimation/BgAnimation";

const Hero = () => {
  return (
    <div id="home" className=" w-full h-screen text-white text-center">
      <div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex items-center justify-center ">
        <div className="flex lg:grid grid-cols-2">
          <div className="flex items-center justify-center h-full  ">
            <div>
              <p className=" uppercase text-sm tracking-widest">
                Let&apos;s Build Something Together
              </p>
              <h1 className="py-4">
                Hi, I&apos;m <span className=" text-[#5651e5]">Emmanuel</span>
              </h1>
              <h1>
                <span className=" text-cyan-600 mx-auto">Software</span>{" "}
                <span>Engineer</span>
              </h1>
              <p className=" tracking-widest font-light py-2 max-w-[70%] mx-auto">
                I&apos;m a Software Engineer specialized in building exceptional
                digital experiences. Currently I&apos;m focused on building{" "}
                <span className=" text-orange-400">innovative </span>
                applications while implementing the best ways to secure my
                backend.
              </p>
            </div>
          </div>
          <div>
            <BackgroundAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
