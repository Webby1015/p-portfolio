import React from "react";
import { AiFillLinkedin } from "react-icons/ai";

const Hello = () => {
  const profileImage = "https://drive.google.com/file/d/1eMBhZ4DGhRmPZ8Fg8Vd4IE34w4s2SjRE/preview";

  return (
    <div id="Hello" className="min-h-screen bg-white pt-20">
      
      <div className="flex flex-col-reverse lg:flex-row justify-between">
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:ml-0 pl-5 lg:pl-0 bg-gradient-to-b from-white to-white">
          <div>
            <h2 className="text-base lg:text-lg">Hello, I am</h2>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-2 lg:mb-4 text-gray-900 leading-tight">
              Prakhar Sharma
            </h2>
            <hr className="border-b-2 lg:border-b-4 border-blue-600 mb-2 lg:mb-4" />
            <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-4 text-gray-900 leading-tight">
              3D Artist
            </h3>
            <button>
              <AiFillLinkedin size={32} />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center bg-gradient-to-b from-white to-white">
          <div className="w-48 h-48 lg:w-80 lg:h-80 rounded-full overflow-hidden">
            <img
              src={profileImage}
              alt="Your Picture"
              className="object-cover w-full h-full bg-black"
            />
          </div>
        </div>
      </div>
      <div className="border-solid  border-4 border-slate-400 lg:rounded-full rounded-lg p-1 mt-20 lg:mt-32  lg:mx-24 lg:flex  justify-between shadow-lg hover:shadow-xl duration-200">
        <div className="flex-1 px-4 py-4 lg:py-6 border-b border-r lg:border-r-0 lg:border-b-0 border-gray-300">
          <h3 className="text-lg lg:text-xl font-semibold mb-2 text-center">Section 1</h3>
          <p className="text-gray-700 mx-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex-1 px-4 py-4 lg:py-6 border-b border-r lg:border-r-0 lg:border-b-0 border-gray-300">
          <h3 className="text-lg lg:text-xl font-semibold mb-2 text-center">Section 2</h3>
          <p className="text-gray-700 mx-10">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex-1 px-4 py-4 lg:py-6 border-b lg:border-b-0 border-gray-300">
          <h3 className="text-lg lg:text-xl font-semibold mb-2 text-center">Section 3</h3>
          <p className="text-gray-700 mx-10">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Hello;
