import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div id="about">
      <div className="flex flex-col md:flex-row justify-between items-center ">
        <div className="w-[45%] fade-in-from-right">
          <Image
            src="/Mask group.png" // Replace with the path to your image
            alt="Logo"
            className="m-2"
            width={524}
            height={557}
          />
        </div>{" "}
        <div className="w-[45%] space-y-5">
          <p className="font-bold text-white text-2xl lg:text-4xl ">ABOUT</p>
          <p className="text-white text-3xl font-thin ">
            CHAIN CHRONICLES{" "}
          </p>{" "}
          <p className=" text-white text-xs lg:text-base">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <button className="bg-gradient-to-r from-[#8379B2] to-[#BFB6F6] text-xs font-semibold py-2 px-4 rounded-full hidden">
            Let s get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
