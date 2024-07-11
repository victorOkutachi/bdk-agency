import React from 'react';
import Navbar from '../components/Navbar';
import EgyptVisaGrid from '../components/EgyptVisaGrid';
import Homepage from './Homepage';
import Others from '../components/Others';
import Services from './Services';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const MainPage = () => {
  return (
    <div className='w-full h-full font-Lato flex flex-col bg-gray-100'>
      <Navbar />
      <section id='home'>
        <Homepage />
      </section>
      <section id='services'>
        <EgyptVisaGrid />
        <Others />
        <Services />
      </section>
      <section id='contact'>
        <Footer />
      </section>
      <ScrollToTop />
    </div>
  );
};

export default MainPage;
