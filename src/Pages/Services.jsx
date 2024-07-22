import React from 'react';

const services = [
  "Assisting to collate all required documents",
  "Securing admission offers for degree and postgraduate students",
  "Assisting to pay tuition deposit (if necessary)",
  "Preparing students for Pre-CAS interviews (UK only)",
  "Preparation of visa application documents",
  "Pre-departure counselling",
  "Booking flight tickets",
  "Securing accommodation",
  "Guidance upon arrival in the foreign country"
];

const Services = () => {

  const handleWhatsAppClick = (withMessage) => {
    const phoneNumber = '+2348124759744';
    let whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    
    if (withMessage) {
      const message = encodeURIComponent("I'm interested in Egyptian visa services. Can you provide more information?");
      whatsappUrl += `&text=${message}`;
    }
    
    window.open(whatsappUrl, '_blank');
  };

  
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
          <div className='flex flex-col justify-center items-center py-4'>
            <h2 className="text-2xl pb-6 font-bold text-center text-[#008024]">Study Visa</h2>
            <div className='absolute h-[3px] bg-[#008024] w-[120px] mt-6'></div>
          </div>
        
        <p className=' font-normal text-center'>Admission is ongoing for january 2025 intake to the following countries: Poland, Malta, United Kingdom, USA, Canada. </p>
        <p className=' font-normal text-center'>Our packages cover: </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md items-center hover:cursor-pointer justify-center hover:bg-[#ff822e] hover:text-white " onClick={() => handleWhatsAppClick(false)}>
              <p className=" ">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
