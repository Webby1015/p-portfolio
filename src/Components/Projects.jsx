import React from 'react';

const Projects = () => {
  // Placeholder image URL
  const placeholderImageURL = 'https://via.placeholder.com/150';

  // Placeholder projects
  const placeholderProjects = [
    { 
      name: 'Placeholder Project 1', 
      image: placeholderImageURL,
      description: 'This is a placeholder project 1.',
      visitButton: <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Visit</button>
    },
    { 
      name: 'Placeholder Project 2', 
      image: placeholderImageURL,
      description: 'This is a placeholder project 2.',
      visitButton: <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Visit</button>
    },
    { 
      name: 'Placeholder Project 3', 
      image: placeholderImageURL,
      description: 'This is a placeholder project 3.',
      visitButton: <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Visit</button>
    },
    { 
      name: 'Placeholder Project 4', 
      image: placeholderImageURL,
      description: 'This is a placeholder project 4.',
      visitButton: <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Visit</button>
    },
    { 
      name: 'Placeholder Project 5', 
      image: placeholderImageURL,
      description: 'This is a placeholder project 5.',
      visitButton: <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Visit</button>
    },
    { 
      name: 'Placeholder Project 6', 
      image: placeholderImageURL,
      description: 'This is a placeholder project 6.',
      visitButton: <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Visit</button>
    },
    { 
      name: 'Placeholder Project 7', 
      image: placeholderImageURL,
      description: 'This is a placeholder project 7.',
      visitButton: <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Visit</button>
    },
    { 
      name: 'Placeholder Project 8', 
      image: placeholderImageURL,
      description: 'This is a placeholder project 8.',
      visitButton: <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Visit</button>
    },
    { 
      name: 'Placeholder Project 9', 
      image: placeholderImageURL,
      description: 'This is a placeholder project 9.',
      visitButton: <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Visit</button>
    },
  ];

  const gradientStyle = {
    background: 'linear-gradient(to bottom, #87CEEB,#87CEEB)',
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center" style={gradientStyle}>
        <h2 className="text-5xl font-bold mt-32 mb-10 text-gray-900 leading-tight text-center">
          <span className="">My </span><span className='font-thin'>Proje</span><span className="font-thin bg-violet-300 rounded-full">cts</span>
        </h2>
        <div className="lg:grid grid-cols-3 gap-4">
          {placeholderProjects.map((project, index) => (
            <div key={index} className="bg-white p-4 bg-opacity-35 rounded-lg shadow-xl hover:shadow-2xl duration-200 flex flex-col items-start m-5">
              <img src={project.image} alt={project.name} className="mx-auto mb-4 w-96 h-52 object-cover" />
              <p className="text-lg mb-3 font-bold text-center">{project.name}</p>
              <p className="text-sm text-center mb-2 font-thin">{project.description}</p>
              <div className="text-left my-2">{project.visitButton}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
