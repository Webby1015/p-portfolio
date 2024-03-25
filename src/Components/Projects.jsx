import React, { useEffect, useState } from "react";
import { db } from "../Config/firebase"; // Assuming you have initialized Firebase
import { getDocs, collection } from "firebase/firestore";

const Projects = () => {
  // Placeholder image URL
  const placeholderImageURL = "https://via.placeholder.com/150";

  // State to hold projects data
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const projectsRef = collection(db, "MyProjects");

  const getProjects = async () => {
    try {
      const data = await getDocs(projectsRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProjects(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const gradientStyle = {
    background: "linear-gradient(to bottom, #87CEEB,#87CEEB)",
  };

  return (
    <div id="Projects">
      {/* {console.log(projects)} */}
      <div className="flex flex-col justify-center items-center" style={gradientStyle}>
        <h2 className="text-5xl font-bold mt-32 mb-10 text-gray-900 leading-tight text-center">
          <span className="">My </span>
          <span className="font-thin">Proje</span>
          <span className="font-thin bg-violet-300 rounded-full">cts</span>
        </h2>
        <div className="lg:grid grid-cols-3 gap-4">
          {/* Render project cards */}
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-4 bg-opacity-35 rounded-lg shadow-sm hover:shadow-2xl duration-300 flex flex-col items-start m-5">
              <img
                src={project.imageURL || placeholderImageURL}
                alt={project.name}
                className="mx-auto mb-4 w-96 h-52 object-cover"
              />
              <p className="text-lg mb-3 font-bold text-center">{project.name}</p>
              <p className="text-sm text-center mb-2 font-thin">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-300 shadow-inner hover:bg-stone-400 duration-300 font-bold py-2 px-4 rounded"
              >
                Visit
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
