import React, { useEffect, useState } from "react";
import { db } from "../Config/firebase";
import { collection, getDocs } from "firebase/firestore";

const AboutMe = () => {
  const ParaRef = collection(db, "AboutMe");
  const gradientStyle = {
    background: "linear-gradient(to bottom, white, #87CEFA)",
  };

  // State to hold the paragraphs
  const [paragraphs, setParagraphs] = useState([]);

  // Fetch paragraphs from Firestore
  const getParas = async () => {
    try {
      const querySnapshot = await getDocs(ParaRef);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data().paragraph, // Assuming 'data' is the field name in your Firestore document
      }));
      data.sort((a, b) => a.id - b.id);
      setParagraphs(data);
    } catch (error) {
      console.error("Error fetching paragraphs: ", error);
    }
  };

  // Fetch paragraphs on component mount
  useEffect(() => {
    getParas();
  }, []); // Empty dependency array runs once on mount

  return (
    <div
      id="About"
      className="lg:h-screen flex flex-col justify-center items-center px-8"
      style={gradientStyle}
    >
      <h2 className="text-5xl font-bold mb-10 text-gray-900 leading-tight ">
        <span className="">About </span>
        <span className="font-thin bg-violet-300 rounded-full">Me</span>
      </h2>

      {/* Map through fetched paragraphs and render */}
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph.id} // Unique key prop for each paragraph
          className="text-xl text-gray-700 leading-relaxed lg:mr-20 lg:ml-20"
        >
          {paragraph.data}
        </p>
      ))}
    </div>
  );
};

export default AboutMe;
