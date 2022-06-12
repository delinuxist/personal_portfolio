import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className=" w-full md:h-screen p-2 flex items center py-16 text-white"
    >
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-6 space-y-6">
        {/* grid one */}
        <div className=" col-span-2">
          <p className=" text-[#5651e5] text-xl tracking-widest uppercase">
            About
          </p>
          <h2 className=" py-4 text-orange-300">Who I Am</h2>
          <p className=" tracking-widest font-light py-2  mx-auto">
            I&apos;m a Full-Stack Developer specialized in building exceptional
            digital experience. Currently I&apos;m focused on building{" "}
            <span className=" text-orange-400">innovative </span>
            applications while learning and implementing the best ways to secure
            backend.
          </p>
          <p className=" py-2 ">
            I have a diverse set of skills, ranging from web to backend
            development. I primarily use Reactjs and Nextjs for my frontend and
            expressjs for my backend. Open to learn any intriguing stack that
            will improve the performance of a project.
          </p>
        </div>
        {/* grid two */}
        <div className=" max-w-[720px] h-auto m-auto shadow-lg rounded-xl drop-shadow-md hover:shadow-gray-600 flex items-center justify-center p-4 hover:scale-105 ease-in duration-150  ">
          <Image
            className="rounded-xl"
            src="https://res.cloudinary.com/delinuxist/image/upload/v1654874438/vxc3t4fl1ulsxkhr98tt.jpg"
            width={600}
            height={700}
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
