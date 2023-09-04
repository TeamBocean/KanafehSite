import React from "react";

export default function Footer () {
  return (
    <footer className="p-4 bg-black sm:p-6 dark:bg-gray-800">
    <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com" className="flex items-center">
                    <img src="#" className="mr-3 h-8" alt="Kanafeh-Logo" />
                    <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">Kanafeh Kingz</span>
                </a>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-orange uppercase dark:text-white">Our Links</h2>
                    <ul className="text-white dark:text-gray-400">
                        <li className="">
                            <a href="#" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Menu</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>


                <div>
                    <h2 class="mb-6 text-sm font-semibold text-orange uppercase dark:text-white">Follow us</h2>
                    <ul className="text-white dark:text-gray-400">
                        <li className="">
                            <a href="#" className="hover:underline ">Instagram</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Facebook</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <hr class="my-6 border-whitesm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://blue-ocean.ie/" className="hover:underline">Blue Ocean</a>. All Rights Reserved.
            </span>
        </div>
    </div>
</footer>
  )
}