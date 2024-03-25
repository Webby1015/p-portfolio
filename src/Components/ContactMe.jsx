import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../Config/firebase"; // assuming you have firebase.js setup

const ContactMe = () => {
  const [contact, setContact] = useState({});
  const [resume, setResume] = useState("");
  
  const gradientStyle = {
    background: "linear-gradient(to bottom, #F0F8FF, white)",
  };

  const ContactRef = collection(db, "contactInfo");

  useEffect(() => {
    getContactInfo();
    getImageUrl();
  }, []);

  const getImageUrl = async () => {
    const imageRef = ref(storage, "Resume/resume");
    try {
      const url = await getDownloadURL(imageRef);
      setResume(url);
    } catch (error) {
      setResume("");
    }
  };

  const getContactInfo = async () => {
    try {
      const data = await getDocs(ContactRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setContact(filteredData[0]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="Contact">
      <div
        className="h-screen flex flex-col justify-center items-center"
        style={gradientStyle}
      >
        <h2 className="text-5xl font-bold mb-10 text-gray-900 leading-tight ">
          <span className="">Contact </span>
          <span className="font-thin bg-violet-300 rounded-full">Me</span>
        </h2>
        <p className="text-lg mb-4 text-center">
          Feel free to reach out to me:
        </p>
        <div className="bg-gray-200 lg:p-10 w-9/12 lg:mb-10 rounded-md shadow-inner">
          <div className="flex flex-row flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 p-4">
              <div className="bg-blue-200 shadow-md rounded px-6 py-8">
                <p className="text-lg">
                  Email:{" "}
                  <a href={`mailto:${contact.email}`} className="text-blue-700">
                    {contact.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
              <div className="bg-green-200 shadow-md rounded px-6 py-8">
                <p className="text-lg">
                  Phone:{" "}
                  <a href={`tel:${contact.phone}`} className="text-green-700">
                    {contact.phone}
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
              <div className="bg-yellow-200 shadow-md rounded px-6 py-8">
                <p className="text-lg">
                  Linkedin:{" "}
                  <a href={contact.linkedin} className="text-yellow-700">
                    View Profile
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
              <div className="bg-red-200 shadow-md rounded px-6 py-8">
                <p className="text-lg">
                  Resume:{" "}
                  <a href={resume} className="text-red-700" target="_blank" rel="noopener noreferrer">
                    Download
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
