import React from 'react';
import Footer from './Footer';

const ContactMe = () => {
  const gradientStyle = {
    background: 'linear-gradient(to bottom, #F0F8FF, white)',
  };

  return (
    <div id='Contact' >
    <div  className="h-screen flex flex-col justify-center items-center" style={gradientStyle}>
    <h2 className="text-5xl font-bold mb-10 text-gray-900 leading-tight ">
        <span className="">Contact </span><span className="font-thin bg-violet-300 rounded-full">Me</span>
      </h2>
      <p className="text-lg mb-4 text-center">Feel free to reach out to me:</p>
      <div className="list-disc ml-4 text-center">
        <p>Email: example@example.com</p>
        <p>Phone: +1234567890</p>
        <p>Linkedin:</p>
      </div>

    </div>
    <Footer />
    </div>
  );
}

export default ContactMe;
