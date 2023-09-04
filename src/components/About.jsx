import React from "react";

import AboutImage from "../assets/images/anas-about.png"
import Signature from "../assets/images/signature.png"

export default function About () {
  return (
    <section className="bg-black flex flex-col md:flex-row items-start p-4 font-poppins">

      <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center">
        <img src={AboutImage} alt="about-image" className="w-3/4 md:w-2/2" />
      </div>

      <div className="w-full md:w-1/2 text-white">
        <h1 className="text-2xl mb-4 text-center md:text-left pb-2 border-b-2 border-orange inline-block">About Us</h1>
        <p className="max-w-2xl mb-4 lg:mb-8 md:text-lg lg:text-base dark:text-gray-400 mx-auto md:mx-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="text-orange text-center md:text-left text-lg">Anas Almahroum</p>
        <p className="text-center md:text-left mb-4 text-lg">Chef & Founder</p>
        
        <img src={Signature} alt="" className="mx-auto md:mx-0 w-1/4 md:w-1/8 mb-4"/>
      </div>

    </section>
  )
}
