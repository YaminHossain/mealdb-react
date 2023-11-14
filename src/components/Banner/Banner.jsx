import React from "react";
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import { useState } from "react";

const Banner = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const keyHandleChange = (event) => {
    setMessage(event.target.value);
    if (event.key === 'Enter') {
      console.log('Enter key pressed!');
      console.log(event.target.value);
    }
    console.log(event.target.value);

  };

  return (
    <div
      className={`w-full md:h-[650px] h-[400px] bg-fixed bg-no-repeat  sm:bg-center md:bg-cover sm:bg-contain bg-[url('https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  flex flex-col justify-center items-center  bg-blend-multiply 
        bg-[#6d6b6b]`}
    >
      <div>
        <p className="text-white font-bold text-6xl text-center">
          Taste Our Delicious
        </p>
        <p className="text-white font-bold text-6xl text-center">Best Foods</p>
        <p className="text-white text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humou.
        </p>
      </div>
      <div className="pt-8 flex justify-center items-center">
        <input
          type="search"
          id="message"
          name="message"
          placeholder="Search your favorite foods"
          onChange={handleChange}
          onKeyUp={keyHandleChange}
          value={message}
          className="w-96 p-2 outline-none"
        />
        <button className="bg-[#ffc107] hover:bg-yellow-500 px-2 py-2 rounded-r-lg left-[-5px]">
        <MagnifyingGlassIcon className="w-6 text-white"></MagnifyingGlassIcon>
        </button>
      </div>
    </div>
  );
};

export default Banner;
