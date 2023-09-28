import React from "react";

import HeroImage from "../assets/images/KanafehHero.png";

export default function Hero () {
  return (
    <section className="bg-black dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7" data-aos="fade-right">
            <h1 className="text-white max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Experience The Royal Taste Of The <span className="text-orange">Middle East!</span></h1>
            <p className="max-w-2xl mb-6 text-white lg:mb-8 md:text-lg lg:text-base dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="https://www.just-eat.ie/restaurants-kanafeh-kingz-dublin-tallaght-tymon/menu?gclsrc=aw.ds&&adj_tracker=84l7irb&adj_campaign=14083491826&k1111=k1111&gclid=CjwKCAjw38SoBhB6EiwA8EQVLrziXjc3cROqgPHtsY-hq6wnl4o4NWg7AObg-wDSQHRA5FXbjz1klxoC_YAQAvD_BwE" className="bg-orange inline-flex items-center justify-center px-5 py-3 mr-3 text-lg font-medium text-center text-black px-8 py-2 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                View Menu
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium text-center text-white border border-orange px-8 py-2 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Order Now
            </a> 
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex " data-aos="fade-left">
            <img src={HeroImage} alt="Hero-image"/>
        </div>                
    </div>
</section>
  )
}