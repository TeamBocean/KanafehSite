import React, { useState } from "react";

export default function Menu() {
  const [activeSection, setActiveSection] = useState("Pistachio Baklawa");

  const handleButtonClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  return (
    <section className="bg-black text-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 text-black font-semibold">
        <div className="text-center">
          <h1 className="text-3xl font-bold pb-2 border-b-2 border-orange inline-block text-center text-white capitalize dark:text-white mb-4">
            Our Menu
          </h1>
        </div>

        

        <div className="text-center mt-8">
          <button className="mx-auto px-8 py-2 bg-orange text-black">View Menu</button>
        </div>
      </div>
    </section>
  );
}
