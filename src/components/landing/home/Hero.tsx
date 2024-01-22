import React from 'react';

interface HeroProps {
  title: string;
  description: string;
  videoFileName: string;
}

const HeroComponent: React.FC<HeroProps> = ({ title, description, videoFileName }) => {
  return (
    <div className="relative h-screen flex items-center -mt-20">
      <video autoPlay muted loop className="absolute inset-0 object-cover w-full h-full z-0">
        <source src={`/videos/${videoFileName}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-sky-300 opacity-25 "></div>

      <div className="container mx-auto text-white z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-8">{description}</p>

        <div className="flex justify-center">
          <button className=" bg-dark-purple hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-md mr-4">
            Learn More
          </button>
          <button className="bg-white hover:bg-sky-400 text-dark-purple font-bold py-2 px-4 rounded-md">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
