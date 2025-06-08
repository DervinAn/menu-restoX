import React from 'react';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Wws from './components/Wws.jsx';
import Om from './components/Om.jsx';
import Wts from './components/Wts.jsx';
import Footer from './components/Footer.jsx';


const App = () => {
  return (
    <div className="min-h-screen flex flex-col overflowX-hidden bg-graident-to.r from-red-50 to via-orage-50 to-yallow-5">
    <Navbar/>     
    <br />
    
    <main className='flex-1 w-full'>
      <div className='w-full '>
        <Banner />
      </div>

      <div className='w-full'>
        <Wws/>
        <Om/>
        <Wts/>
      </div>

    </main>

    <div className='mt-auto'>
      <Footer />
    </div>
    </div>
  );
}
export default App;