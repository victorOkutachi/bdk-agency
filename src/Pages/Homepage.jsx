import React from 'react';

const Homepage = () => {
  return (
    <div id='home'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/island.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '750px',
         // Ensure the parent container is positioned
      }}
      className=" w-full h-[750px] md:h-screen"
    >
      {/* Overlay with semi-transparent background */}
      <div className="  h-[750px] flex flex-col items-center justify-center bg-overlay">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          BLESSED DON-KATE 
        </h1>
        <p className="text-lg md:text-2xl font-bold pt-5 text-white text-center">
          LOGISTIC, TRAVEL & EDUCATION
        </p>

        <p className="text-lg md:text-xl font-bold pt-5 text-white text-center">
          Dream,... Study,... Fly
        </p>
        <button className="text-white font-bold hover:text-white border-2 border-white hover:bg-[#ff822e] hover:border-white px-6 py-2 mt-16 flex items-center">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Homepage;
