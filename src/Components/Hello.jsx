import React from "react";
import { AiFillLinkedin } from "react-icons/ai";

// keep sections less than 9
const sections = [
  {
    title: "Section 1",
    link: "https://example.com",
  },
  {
    title: "Section 2",
    link: "https://example.com",
  },
  {
    title: "Section 3",
    link: "https://example.com",
  },
];

const SectionCard = ({ title, link }) => (
  <button
    className="block w-full p-4 lg:m-1  text-lg font-semibold text-gray-800 bg-white border border-gray-300 rounded-md lg:rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
    onClick={() => window.location.assign(link)}
  >
    {title}
  </button>
);

const Hello = () => {
  const profileImage =
    "https://drive.google.com/uc?id=1eMBhZ4DGhRmPZ8Fg8Vd4IE34w4s2SjRE";

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
            {/* <button>
              <a
                href="https://www.linkedin.com/in/prakharsharma/"
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
              >
                <AiFillLinkedin size={24} className="mr-2" />
                LinkedIn
              </a>
            </button> */}
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
      <div className="border-solid border-4 border-slate-400 lg:rounded-full rounded-lg p-8 mt-20 lg:mt-32 mx-3 lg:mx-24 lg:flex justify-between shadow-lg hover:shadow-xl duration-300">
        {sections.map((section, index) => (
          <div key={index} className="w-full lg:w-1/2 lg:flex-grow">
            <SectionCard {...section} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hello;
