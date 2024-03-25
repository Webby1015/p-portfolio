import React, { useEffect, useState } from "react";
import { db, storage } from "../Config/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { getDocs, collection } from "firebase/firestore";

const sections = [];

const Hello = () => {
  const [profileUrl, setProfileUrl] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const NameAndRoleRef = collection(db, "Home");
  const LinksRef = collection(db, "Links");
  const [sections, setSections] = useState([]);

  // useEffect to fetch NameAndRole and Links on component mount
  useEffect(() => {
    getNameAndRole();
    getLinks();
    getImageUrl(); // Corrected: Call getImageUrl to get profile image URL
  }, []);

  // Function to get profile image URL from Firebase Storage
  const getImageUrl = async () => {
    const imageRef = ref(storage, "ProfilePicture/image");
    try {
      const url = await getDownloadURL(imageRef);
      setProfileUrl(url);
    } catch (error) {
      setProfileUrl("");
    }
  };

  // Function to get Name and Role from Firestore
  const getNameAndRole = async () => {
    try {
      const data = await getDocs(NameAndRoleRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setName(filteredData[0]?.Name || "");
      setRole(filteredData[0]?.Role || "");
    } catch (err) {
      console.error(err);
    }
  };

  // Function to get Links from Firestore
  const getLinks = async () => {
    try {
      const data = await getDocs(LinksRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSections(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="Hello" className="min-h-screen bg-white pt-20">
      <div className="flex flex-col-reverse lg:flex-row justify-between">
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:ml-0 pl-5 lg:pl-0 bg-gradient-to-b from-white to-white">
          <div>
            <h2 className="text-base lg:text-lg">Hello, I am</h2>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-2 lg:mb-4 text-gray-900 leading-tight">
              {name}
            </h2>
            <hr className="border-b-2 lg:border-b-4 border-blue-600 mb-2 lg:mb-4" />
            <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-4 text-gray-900 leading-tight">
              {role}
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
              src={profileUrl}
              alt="Your Picture"
              className="object-cover w-full h-full bg-black"
            />
          </div>
        </div>
      </div>
      <div className="border-solid border-4 border-slate-400 lg:rounded-full rounded-lg p-8 mt-20 lg:mt-32 mx-3 lg:mx-24 lg:flex justify-between shadow-lg hover:shadow-xl duration-300">
        {sections.map((section, index) => (
          <div key={index} className="w-full lg:w-1/2 lg:flex-grow">
            <a
              className="block w-full p-4 lg:m-1 text-lg font-semibold text-gray-800 bg-white border border-gray-300 rounded-md lg:rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100 text-center"
              href={section.Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {section.Name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hello;
