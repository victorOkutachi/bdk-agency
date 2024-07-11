import React from 'react'

const Others = () => {

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
    <div className='mx-4 shadow-md pt-1 px-4 lg:px-10 pb-6 bg-[#f19a60]'>
        <h3 className="my-16 font-medium lg:max-w-[1320px] lg:text-xl text-white ">We also provide Visa Processing for the following countries; France, Portugal, Sweden, Georgia, UK, Phillipines, Thailand, Morocco, Turkey, Kuwait, Saudi Arabia, Qatar, Jordan, Israel etc</h3>
        <button className="text-white font-bold hover:text-white border-2 border-white hover:bg-[#ff822e] hover:border-white px-6 py-2 mt-16 flex items-center" onClick={() => handleWhatsAppClick(false)}>
        Contact Us Now
        </button>
    </div>
  )
}

export default Others