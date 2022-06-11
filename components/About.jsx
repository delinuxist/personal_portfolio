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
          <p className=" py-2 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta
            fugit quasi, corporis, culpa quidem mollitia aliquid qui dolore ab
            facere fugiat beatae rem? Magnam eveniet quidem id dignissimos sequi
            quis aspernatur quia dolores molestias necessitatibus ad mollitia
            dolorem ducimus, ab praesentium excepturi est nobis placeat nostrum
            iusto, perferendis quod?
          </p>
          <p className=" py-2 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta
            fugit quasi, corporis, culpa quidem mollitia aliquid qui dolore ab
            facere fugiat beatae rem? Magnam eveniet quidem id dignissimos sequi
            quis aspernatur quia dolores molestias necessitatibus ad mollitia
            dolorem ducimus, ab praesentium excepturi est nobis placeat nostrum
            iusto, perferendis quod?
          </p>
        </div>
        {/* grid two */}
        <div className=" max-w-[720px] h-auto m-auto shadow-lg rounded-xl drop-shadow-md hover:shadow-gray-600 flex items-center justify-center p-4 hover:scale-105 ease-in duration-150  ">
          <img
            className="rounded-xl"
            src="https://res.cloudinary.com/delinuxist/image/upload/v1654874438/vxc3t4fl1ulsxkhr98tt.jpg"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
