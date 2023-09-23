// app/page.tsx
"use client";
import { useExploreProfiles } from "@lens-protocol/react-web";
import Link from "next/link";
import { Inter } from "next/font/google";
// import styles from "globals/styles";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";

import { LuPhoneCall } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  const { data: profiles } = useExploreProfiles({
    limit: 5,
  });
  return (
    // <div
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-[#302C42]`}
    // >
    <>
      <div className="p-20">
        <h1 className="text-5xl">My Lens App</h1>
        {profiles?.map((profile, index) => (
          <Link href={`/profile/${profile.handle}`} key={index}>
            <div className=" flex flex-col items-center bg-gradient-radial from-[#413C5D] via-[#312539] to-[#211E2D] rounded-lg shadow-lg p-2 overflow-hidden m-2">
              {profile.picture && profile.picture.__typename === "MediaSet" ? (
                <img
                  src={profile.picture.original.url}
                  width="120"
                  height="120"
                  alt={profile.handle}
                  className="border-4 rounded-full"
                />
              ) : (
                <div className="w-14 h-14 bg-slate-500	" />
              )}
              <h3 className="font-bold text-xl text-white mb-2">
                {profile.handle}
              </h3>
              <div className="border-t-[1px] h-0 w-48 "></div>
              <p className="text-gray-700 text-base w-40">{profile.bio}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-[#302C42] p-4 min-h-screen">
        <div className="mx-6">
          <nav className=" p-4 ">
            <div className="container mx-auto flex justify-between items-center">
              {/* Left side with image and name */}
              <div className="flex items-center space-x-4 ">
                <Image
                  src="/Frame.png" // Replace with the path to your image
                  alt="Logo"
                  className="w-32 h-32 "
                  width={700}
                  height={700}
                />
                {/* <Image
                  src="/hydra.png" // Replace with the path to your image
                  alt="Logo"
                  className="w-12 h-8"
                  width={500}
                  height={500}
                /> */}

                <p className="font-semibold text-3xl text-gradient w-40 hidden md:block ">
                  CHAIN CHRONICLES
                </p>
              </div>

              {/* Middle section with navigation links */}
              <div className="flex space-x-12 hidden xl:block ">
                <Link
                  href="/about"
                  className="text-white hover:text-gray-200 text-xs"
                >
                  ABOUT
                </Link>
                <Link
                  href="/team"
                  className="text-white hover:text-gray-200 text-xs"
                >
                  CREATE PROFILE
                </Link>
                <Link
                  href="/team"
                  className="text-white hover:text-gray-200 text-xs"
                >
                  hey{" "}
                </Link>
                <Link
                  href="/team"
                  className="text-white hover:text-gray-200 text-xs"
                >
                  HOW TO
                </Link>
                {/* Add more links as needed */}
              </div>

              {/* Right side with a button */}
              <span className=" sm:block xl:hidden ">
                <GiHamburgerMenu
                  style={{ height: "40px", width: "40px", color: "#8379B2" }}
                />
              </span>
              <div className="space-x-8 hidden xl:block">
                <button className="text-white border-2 border-white text-xs font-semibold py-2 px-4 rounded-full">
                  CONTACT US
                </button>
                <button className="bg-gradient-to-r from-[#8379B2] to-[#BFB6F6] text-xs font-semibold py-2 px-4 rounded-full">
                  LOGIN
                </button>
              </div>
            </div>
          </nav>
          {/* hero section   */}
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center p-4 ">
            <div className="flex items-center flex-col space-x-4 w-1/3">
              <div className="space-y-1 text-2xl md:text-4xl">
                <span className="font-semibold  text-gradient">
                  CryptoCurrents{" "}
                </span>
                <span className="font-semibold text-white  ">Beyond</span>
                <span className="font-semibold  text-gradient ">
                  {" "}
                  Blockchain Basics
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-4 hidden lg:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore nisl tincidunt
                eget. Lectus mauris eros in vitae .
              </p>

              <div className="flex justify-start space-x-8 mt-20">
                <button className="rounded-full font font-semibold bg-gradient-to-r from-[#8379B2] to-[#BFB6F6] text-xs py-2 px-8">
                  EXPLORE PROFILES
                </button>{" "}
                <Image
                  src="/arrow.png" // Replace with the path to your image
                  alt="Logo"
                  className="w-12 h-8"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="relative z-20 p-12">
              <Image
                src="/girl.png" // Replace with the path to your image
                alt="Logo"
                layout="responsive"
                className=" "
                width={490}
                height={426}
              />
              <Image
                src="/Rectangle 4.png" // Replace with the path to your image
                alt="Logo"
                layout="responsive"
                className="absolute top-[0%] left-[0%] -z-10 p-7"
                width={524}
                height={455}
              />
              <Image
                src="/Group 4.png" // Replace with the path to your image
                alt="Logo"
                className="absolute -top-[25%] left-[0%] -z-10 "
                width={735}
                height={845}
              />
            </div>
          </div>

          <div className=" flex justify-between items-center p-4 m-4 ">
            <div className=" space-y-2 w-[45%] hidden lg:block">
              {" "}
              <p className="font-bold text-white text-4xl">INTRODUCTION</p>
              <div className="flex flex-row items-center space-x-10">
                <p className="text-white text-3xl font-thin">TO US</p>
                <Image
                  src="/arrow.png" // Replace with the path to your image
                  alt="Logo"
                  className="m-2"
                  width={200}
                  height={80}
                />
              </div>
            </div>
            <p className=" text-white w-[45%]  hidden lg:block">
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
              nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
              est placerat in. Lectus magna fringilla urna porttitor rhoncus
              vitae.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div className="w-[45%]">
              <Image
                src="/mask group.png" // Replace with the path to your image
                alt="Logo"
                className="m-2"
                width={524}
                height={557}
              />
            </div>{" "}
            <div className="w-[45%] space-y-5">
              <p className="font-bold text-white text-2xl lg:text-4xl ">
                ABOUT
              </p>
              <p className="text-white text-3xl font-thin ">
                CHAIN CHRONICLES{" "}
              </p>{" "}
              <p className=" text-white text-xs lg:text-base">
                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
                mattis rhoncus urna neque viverra justo. Vivamus at augue eget
                arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
                Aenean et tortor at risus viverra adipiscing at in. Mattis
                aliquam faucibus purus in massa. Est placerat in egestas erat
                imperdiet sed. Consequat semper viverra nam libero justo laoreet
                sit amet. Aliquam etiam erat velit scelerisque in dictum non
                consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec
                ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet
                nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n
                tempor.
              </p>
              <button className="bg-gradient-to-r from-[#8379B2] to-[#BFB6F6] text-xs font-semibold py-2 px-4 rounded-full hidden">
                Let s get in touch
              </button>
            </div>
          </div>
          {/* below the second image  */}
          <div className="flex flex-row justify-between items-center p-4 m-4 ">
            <div className=" space-y-2 w-[45%] hidden lg:block">
              {" "}
              <p className="font-bold text-white text-4xl">WHY BLOG </p>
              <div className="flex flex-row items-center space-x-10">
                <p className="text-white text-3xl font-thin">
                  WITH CHAIN CHRONICLES{" "}
                </p>
                <Image
                  src="/arrow.png" // Replace with the path to your image
                  alt="Logo"
                  className="m-2"
                  width={200}
                  height={80}
                />
              </div>
            </div>
            <p className=" text-white w-[45%] hidden lg:block">
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
              nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
              est placerat in. Lectus magna fringilla urna porttitor rhoncus
              vitae.
            </p>
          </div>

          {/* cards components    */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-radial from-[#413C5D] via-[#312539] to-[#211E2D] rounded-lg shadow-lg p-2 overflow-hidden m-2">
              <div className="relative z-10">
                <Image
                  src="/Mask group (1).png" // Replace with the path to your image
                  alt="Logo"
                  className="  border-4  rounded-full "
                  width={190}
                  height={190}
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl text-white mb-2">htyhg</div>
                <div className="border-t-[1px] h-0 w-48 "></div>
                <div className="text-gray-700 text-base">
                  {" "}
                  Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
                  est placerat in. Lectus magna fringilla urna porttitor rhoncus
                  vitae.
                </div>
              </div>
              <div className="px-6 py-4">
                <button className="bg-gradient-to-r from-[#8379B2] to-[#BFB6F6]   font-bold py-2 px-4 rounded-full">
                  Learn More
                </button>
              </div>
            </div>

            <div className="  bg-gradient-radial from-[#413C5D] via-[#312539] to-[#211E2D] relative rounded-lg shadow-lg overflow-hidden m-2">
              <div className="">
                <Image
                  src="/Mask group (2).png" // Replace with the path to your image
                  alt="Logo"
                  className="m-8 blur-sm p-4 border-8 rounded-full border-[#B0B0B0] border-opacity-50"
                  layout="responsive"
                  width={200}
                  height={80}
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">htyhg</div>
                <div className="text-gray-700 text-base">dasfvc</div>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Learn More
                </button>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden m-2">
              <div className="relative">
                <Image
                  src="/arrow.png" // Replace with the path to your image
                  alt="Logo"
                  className="m-8 border-8 rounded-full border-[#B0B0B0] border-opacity-50"
                  width={200}
                  height={80}
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">htyhg</div>
                <div className="text-gray-700 text-base">dasfvc</div>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Learn More
                </button>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden m-2">
              <div className="relative">
                <Image
                  src="/arrow.png" // Replace with the path to your image
                  alt="Logo"
                  className="m-8 border-8 rounded-full border-[#B0B0B0] border-opacity-50"
                  width={200}
                  height={80}
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">htyhg</div>
                <div className="text-gray-700 text-base">dasfvc</div>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Learn More
                </button>
              </div>
            </div>
          </div> */}

          {/* <div className="flex flex-row justify-center align-middle relative">
            {" "}
            <p className="font-bold text-white text-4xl absolute top-20">
              TECHNOLOGIES & HARDWARE
            </p>
            <p className="text-white text-3xl font-thin absolute top-40">
              USED BY HYDRA VR.{" "}
            </p>
            <Image
              src="/Tech-Section (1).png" // Replace with the path to your image
              alt="Logo"
              className="m-8"
              layout="responsive"
              width={200}
              height={80}
            />
          </div>
          <div>
            <Image
              src="/Tech-Section (2).png" // Replace with the path to your image
              alt="Logo"
              className="m-8"
              layout="responsive"
              width={200}
              height={80}
            />
          </div> */}

          <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#211E2E] via-[#393355] to-[#211E2E] rounded-lg md:rounded-full justify-around p-5 mx-5 my-20">
            <div className="flex justify-around items-center">
              <Image
                src="/Page-1.png" // Replace with the path to your image
                alt="Logo"
                className="m-2"
                width={40}
                height={60}
              />
              <div className="space-y-1">
                {" "}
                <p className="text-xl font-bold text-white">Give us a visit</p>
                <p className="text-xs text-white">
                  Union St, Seattle, WA 98101, United States
                </p>
              </div>
            </div>
            <div className="flex justify-around items-center space-x-4 ">
              <LuPhoneCall
                style={{
                  color: "#C2B2E1",
                }}
                className="w-12 h-16 pt-2"
              />
              <div className="space-y-1">
                {" "}
                <p className="text-xl font-bold text-white ">Give Us a Call</p>
                <p className="text-xs text-white">(110) 1111-1010</p>
              </div>
            </div>
            <div className="flex justify-around items-center space-x-4">
              <FiMail
                style={{
                  color: "#C2B2E1",
                }}
                className="w-14 h-14 pt-2"
              />
              <div className="space-y-1">
                {" "}
                <p className="text-xl font-bold text-white pt-2">
                  Send Us a Message
                </p>
                <p className="text-xs text-white">Contact@HydraVTech.com</p>
              </div>
            </div>
          </div>

          {/* footer  */}
          <div className="flex flex-col md:flex-row justify-between">
            <Image
              src="/Frame.png" // Replace with the path to your image
              alt="Logo"
              className="m-8 hidden lg:block"
              width={120}
              height={120}
            />
            <div className="h-40 w-1 bg-gradient-to-b from-[#3F3349] via-[#B2A2D3] to-[#3F3349] hidden lg:block"></div>
            <div>
              <p className="text-white ">ABOUT</p>
              <p className="text-white ">SERVICES </p>
              <p className="text-white ">TECHNOLOGIES</p>
              <p className="text-white ">HOW TO</p>
              <p className="text-white ">JOIN HYDRA</p>
            </div>
            <div className="h-40 w-1 bg-gradient-to-b from-[#3F3349] via-[#B2A2D3] to-[#3F3349] hidden md:block"></div>
            <div className="hidden lg:block">
              <p className="text-white">ABOUT</p>
              <p className="text-white">SERVICES </p>
              <p className="text-white">TECHNOLOGIES</p>
              <p className="text-white">HOW TO</p>
              <p className="text-white">JOIN HYDRA</p>
            </div>
            <div className="h-40 w-1 bg-gradient-to-b from-[#3F3349] via-[#B2A2D3] to-[#3F3349] hidden lg:block"></div>
            <div>
              <p className="text-white">SOCIALISE WITH HYDRA</p>
              <Image
                src="/Footer-Section.png" // Replace with the path to your image
                alt="Logo"
                className="my-8"
                width={250}
                height={40}
              />
              <button className="bg-gradient-to-r from-[#8379B2] to-[#BFB6F6] text-xs font-semibold py-2 px-4 rounded-full">
                BUILD YOUR WORLD
              </button>
            </div>
          </div>
          <div className=" h-[1px] flex justify-center m-12  bg-gradient-to-r from-[#3F3349] via-[#B2A2D3] to-[#3F3349]"></div>

          <p className="flex justify-center text-xs md:text-sm text-white ">
            2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS
            RESERVED{" "}
          </p>
        </div>
      </div>
    </>
  );
}
