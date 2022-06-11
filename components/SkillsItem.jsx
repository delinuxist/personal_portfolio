import React from "react";
import Image from "next/image";

const SkillsPng = ({ imageUrl, title }) => {
  return (
    <div className=" bg-white p-6 shadow-lg rounded-xl hover:shadow-gray-600 hover:scale-105 ease-in duration-300">
      <div className=" grid grid-cols-2 gap-4 justify-center items-center">
        {/* grid one */}
        <div className=" m-auto">
          <Image src={imageUrl} height="64px" width="64px" alt="images" />
        </div>
        {/* grid two */}
        <div>
          <h3 className=" text-black">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillsPng;
