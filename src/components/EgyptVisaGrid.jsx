import React from 'react';

const EgyptVisaGrid = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#ff822e]">Services</h2>
        <h2 className="text-2xl pb-6 font-bold text-center text-[#008024]">Egyptian Visa Services</h2>
        <p className="my-8 mx-auto text-center px-4 lg:px-8 text-lg">We provide comprehensive services for obtaining various types of visas to Egypt. </p>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          <div className="col-span-1 lg:col-span-4 relative bg-white hover:cursor-pointer rounded shadow-md" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/business.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded"></div>
            <div className="relative p-6 lg:my-36">
              <h3 className="text-xl lg:text-3xl font-semibold text-white">Business Visa</h3>
              <p className="mt-2 lg:text-xl text-white">Travel to Egypt for business purposes with ease. We handle all the paperwork for your business visa.</p>
              <button className="text-white font-bold hover:text-white border-2 border-white hover:bg-[#ff822e] hover:border-white px-6 py-2 mt-16 flex items-center">
                Get Started
             </button>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
            <div className="relative bg-white rounded hover:cursor-pointer shadow-md" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/tourism.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded"></div>
              <div className="relative p-8 lg:p-12">
                <h3 className="text-xl font-semibold text-white">Tourism Visa</h3>
                <p className="mt-2 text-white">Experience the beauty of Egypt with our hassle-free tourism visa processing services.</p>
                <button className="text-white font-bold hover:text-white border-2 border-white hover:bg-[#ff822e] hover:border-white px-6 py-2 mt-16 flex items-center">
                  Get Started
                </button>
              </div>
            </div>
            <div className="relative bg-white rounded hover:cursor-pointer shadow-md" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/medical.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded"></div>
              <div className="relative p-6 lg:p-12">
                <h3 className="text-xl font-semibold text-white">Medical Visa</h3>
                <p className="mt-2 text-white">We assist in securing medical visas and recommend top hospitals in Egypt for your treatment.</p>
                <button className="text-white font-bold hover:text-white border-2 border-white hover:bg-[#ff822e] hover:border-white px-6 py-2 mt-16 flex items-center">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 relative bg-white rounded hover:cursor-pointer shadow-md" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/study.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded"></div>
            <div className="relative p-6 lg:p-14">
              <h3 className="text-xl font-semibold text-white">Study Visa</h3>
              <p className="mt-2 text-white">Planning to study in Egypt? We assist in obtaining study visas and preparing all necessary documents for you.</p>
              <button className="text-white font-bold hover:text-white border-2 border-white hover:bg-[#ff822e] hover:border-white px-6 py-2 mt-16 flex items-center">
                Get Started
             </button>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 relative bg-white rounded hover:cursor-pointer shadow-md" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/consultation.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded"></div>
            <div className="relative p-6 lg:p-14">
              <h3 className="text-xl font-semibold text-white">Free Consultations</h3>
              <p className="mt-2 text-white">We offer free consultations to help you understand the visa process and gather the necessary documents.</p>
              <button className="text-white font-bold hover:text-white border-2 border-white hover:bg-[#ff822e] hover:border-white px-6 py-2 mt-16 flex items-center">
                Get Started
             </button>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 relative bg-white rounded hover:cursor-pointer shadow-md" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/documents.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded"></div>
            <div className="relative p-6 lg:p-14">
              <h3 className="text-xl font-semibold text-white">Documents Legalization</h3>
              <p className="mt-2 text-white">We assist in the legalization of documents required for your visa application, ensuring they meet all legal standards.</p>
              <button className="text-white font-bold hover:text-white border-2 border-white hover:bg-[#ff822e] hover:border-white px-6 py-2 mt-16 flex items-center">
                Get Started
             </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EgyptVisaGrid;
