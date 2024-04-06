import React, { useState, useEffect } from "react";
import { db } from "../Config/firebase"; // Import your Firebase configuration
import { getDocs, collection } from "firebase/firestore";

const TechnicalSkills = () => {
  // Online placeholder image URL
  const placeholderImageURL = "https://via.placeholder.com/150";

  const gradientStyle = {
    background: "linear-gradient(to bottom, #87CEFA, #87CEEB)",
  };

  // State to hold the skills data
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    getTechnicalSkills();
  }, []);

  const SkillsRef = collection(db, "TechnicalSkills");

  const getTechnicalSkills = async () => {
    try {
      const data = await getDocs(SkillsRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSkillsData(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const SkillCard = ({ imageSrc, altText, skillName }) => (
    <div className="p-5">
      <div className="bg-white rounded-lg shadow-lg p-2 bg-opacity-35 hover:shadow-2xl duration-300">
        <img
          src={imageSrc || placeholderImageURL}
          alt={altText}
          className="mx-auto mb-2 rounded-full h-48 w-48 object-cover"
        />
        <p className="text-center">{skillName}</p>
      </div>
    </div>
  );

  return (
    <div
      id="Technical"
      className="lg:h-screen flex flex-col justify-center items-center"
      style={gradientStyle}
    >
      <h2 className="text-5xl font-bold my-10 text-gray-900 leading-tight ">
        <span className="">Technical</span> <span className="font-thin">S</span>
        <span className="font-thin bg-violet-300 rounded-full">kills</span>
      </h2>
      <div className="lg:grid grid-cols-3 gap-2">
        {/* Skill Cards */}
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            imageSrc={skill.imageSrc}
            altText={skill.altText}
            skillName={skill.skillName}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
