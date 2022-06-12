import React from "react";
import BackgroundAnimation from "./BgAnimation/BgAnimation";

const Hero = () => {
  return (
    <div
      id="home"
      className=" w-full h-screen text-white text-center lg:text-left sm:px-2 md:px-24 pt-8"
    >
      <div className=" max-w-[1240px] w-full h-full  p-2 flex items-center justify-center ">
        <div className="flex lg:grid grid-cols-2">
          <div className="flex items-center justify-center h-full  ">
            <div>
              <p className=" uppercase text-sm tracking-widest">
                Let&apos;s Build Something Together
              </p>
              <h2 className="py-4">
                Hi, I&apos;m <span className=" text-[#5651e5]">Emmanuel</span>
              </h2>
              <h1 className="">
                <span className=" bg-gradient-to-b from-orange-400 to-cyan-400 text-transparent bg-clip-text ">
                  Full-Stack
                </span>{" "}
                <span className=" font-medium">Developer</span>
              </h1>
              <p className=" tracking-normal py-8 ">
                <span className=" text-2xl">“</span>
                <span className=" text-2xl font-bold">
                  First, solve the{" "}
                  <span className=" bg-gradient-to-r from-orange-300 to-cyan-300 bg-clip-text text-transparent font-normal">
                    problem
                  </span>
                  . Then, write the{" "}
                  <span className=" text-transparent  bg-gradient-to-r font-normal from-cyan-300 to-orange-300 bg-clip-text">
                    code
                  </span>
                </span>
                <span className=" text-2xl">“</span>
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
