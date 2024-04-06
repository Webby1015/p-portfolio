import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Config/firebase'; // Make sure to import your Firebase configuration

const AwardsAndCertificates = () => {
  // Placeholder image URL
  const placeholderImageURL = 'https://via.placeholder.com/150';

  // State for certificates
  const [certificates, setCertificates] = useState([]);

  // Fetch certificates from Firebase
  const certificatesRef = collection(db, "certificates");

  useEffect(() => {
    getCertificates();
  }, []);

  const getCertificates = async () => {
    try {
      const data = await getDocs(certificatesRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCertificates(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const gradientStyle = {
    background: 'linear-gradient(to bottom, #87CEEB, #F0F8FF)',
  };

  return (
    <div id='Awards' className="flex flex-col justify-center items-center" style={gradientStyle}>
      <h2 className="text-5xl font-bold mt-32 mb-10 text-gray-900 leading-tight text-center">
        <span className="">Awards & </span> <span className="font-thin">Certificates</span>
      </h2>
      <div className="lg:grid grid-cols-3 gap-4">
        {certificates.map((certificate, index) => (
          <div key={index} className="bg-transparent p-2 bg-opacity-35 rounded-lg duration-200 flex flex-col items-center m-5">
            <a href={certificate.image || placeholderImageURL} target="_blank" > 
            <img
              src={certificate.image || placeholderImageURL}
              alt={certificate.name}
              className="mx-auto shadow-md rounded-sm hover:shadow-2xl transition-shadow duration-300 mb-4 w-96 h-52 object-contain bg-white "
            />
            </a>
            <p className="text-lg  text-center">{certificate.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AwardsAndCertificates;
