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
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl pb-6 font-bold text-center text-[#008024]">Study Visa</h2>
        <p className=' font-normal text-center'>Admission is ongoing for january 2025 intake to the following countries: Poland, Malta, United Kingdom, USA, Canada. </p>
        <p className=' font-normal text-center'>Our packages cover </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md items-center hover:cursor-pointer justify-center hover:bg-[#ff822e] hover:text-white ">
              <p className=" ">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
