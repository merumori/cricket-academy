import React from 'react';
import Services from '../components/Services';
import AboutUs from '../components/About';
import Gallery from '../components/Gallery';
import Videos from '../components/Videos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import MapComponent from '../components/map';


function Home() {
  return (
    <div>
     <Services />
     <AboutUs/>
     <Gallery/>
     <Videos/>
     <Testimonials />
     <Contact />
     <MapComponent />
   
    </div>
  );
}

export default Home;
