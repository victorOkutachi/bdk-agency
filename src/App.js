
import Homepage from './Pages/Homepage';
import Services from './Pages/Services';
import EgyptVisaGrid from './components/EgyptVisaGrid';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Others from './components/Others';

function App() {
  return (
    <div className='w-full h-full font-Lato flex flex-col bg-gray-100'>
      <Navbar/>
      <Homepage/>
      <EgyptVisaGrid/>
      <Others/>
      <Services/>
      <Footer/>
      
    </div>
  );
}

export default App;
