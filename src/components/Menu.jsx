import { useState, useEffect } from "react";
import nabulsi from "../assets/images/nabulsi.png";
import baklawa from "../assets/images/baklawa.png";
import classic from "../assets/images/classic.png"
import pistachio from "../assets/images/pistachio.png"
import "./Reviews.css"

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState("Pistachio Baklawa");

  const [before, setBefore] = useState(4);
  const [current, setCurrent] = useState(0)
  const [after, setAfter] = useState(1);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    arr.indexOf(selectedOption);
  };

  const arr = [{name:"Pistachio Baklawa", image: baklawa},{name:"Classic Kanafeh", image: classic}, {name: "Pistachio Kanafeh", image: pistachio}, {name:"Nabulsi Kanafeh", image: nabulsi},{name: "Basbusa", image: classic}];

  const position = (arr, pos) => {
    let before;
    let after;
    if (pos === 0) {
      before = arr.length - 1;
    } else {
      before = pos - 1;
    }

    after = pos + 1;

    if (after === arr.length || after === arr.length + 1) {
      after = 0;
    }

    setAfter(after);
    setBefore(before);
  };

  useEffect(() => {
    let pos;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === selectedOption) {
        pos = i; 
      }
    }
    setCurrent(pos)
    position(arr,pos);
  }, [selectedOption]);

  return (
    <section className="mb-20 bg-black flex flex-col mt-32">#
    <h1 className="text-3xl font-bold mb-6 text-white mx-auto">Our Menu</h1>
      <div className="flex my-10 mx-auto">
        
        <button
          type="button"
          class={`${
            selectedOption === "Pistachio Baklawa"
              ? "bg-[#FFC300] text-black"
              : "text-black bg-white"
          } hover:bg-[#FFC300]focus:outline-none   font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 `}
          onClick={() => {
            handleOptionChange("Pistachio Baklawa");
          }}
        >
          Pistachio Baklawa
        </button>
        <button
          type="button"
          class={`${
            selectedOption === "Classic Kanafeh"
              ? "bg-[#FFC300] text-black"
              : "text-black bg-white"
          } hover:bg-[#FFC300] focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 `}
          onClick={() => {
            handleOptionChange("Classic Kanafeh");
          }}
        >
          Classic Kanafeh
        </button>
        <button
          type="button"
          class={`${
            selectedOption === "Pistachio Kanafeh"
              ? "bg-[#FFC300] text-black"
              : "text-black bg-white"
          } hover:bg-[#FFC300] focus:outline-none   font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 `}
          onClick={() => {
            handleOptionChange("Pistachio Kanafeh");
          }}
        >
          Pistachio Kanafeh
        </button>
        <button
          type="button"
          class={`${
            selectedOption === "Nabulsi Kanafeh"
              ? "bg-[#FFC300] text-black"
              : "text-black bg-white"
          } hover:bg-[#FFC300] focus:outline-none   font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 `}
          onClick={() => {
            handleOptionChange("Nabulsi Kanafeh");
          }}
        >
          Nabulsi Kanafeh
        </button>
        <button
          type="button"
          class={`${
            selectedOption === "Basbusa"
              ? "bg-[#FFC300] text-black"
              : "text-black bg-white"
          } hover:bg-[#FFC300] focus:outline-none   font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 `}
          onClick={() => {
            handleOptionChange("Basbusa");
          }}
        >
          Basbusa
        </button>
      </div>
      <div className="flex flex-col justify-center content-center sm:flex-row gap-4 sm:mx-10">
        <div class="w-full self-center max-w-sm shadow container-one">
          <div class="flex flex-col items-center pt-4 pb-10">
            <img
              class="w-36 h-36 mb-3 rounded-full shadow-lg"
              src={arr[before].image}
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-white">
              {arr[before].name}
            </h5>
          </div>
        </div>
        <div class="self-center w-full max-w-sm container-two">
          <div class="flex flex-col items-center px-6 py-12 ">
            <img
              class="w-36 h-36 mb-3 rounded-full shadow-lg"
              src={arr[current].image}
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-white">
              {arr[current].name}
            </h5>
          </div>
        </div>
        <div class="self-center w-full max-w-sm shadow container-one">
          <div class="flex flex-col items-center pt-4 pb-10">
            <img
              class="w-36 h-36 mb-3 rounded-full shadow-lg"
              src={arr[after].image}
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-white">
              {arr[after].name}
            </h5>
          </div>
          
        </div>
      </div>
      <div className="text-center mt-8">
          <a href="https://www.just-eat.ie/restaurants-kanafeh-kingz-dublin-tallaght-tymon/menu" className="mx-auto px-8 py-2 text-black bg-orange">View Menu</a>
          </div>
    </section>
  );
};

export default Menu;
