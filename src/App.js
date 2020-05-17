import React from 'react';
import Header from './components/header_footer/Header';
import Featured from './components/featured'
import './resources/styles.css'
import VenueNfo from './components/venueNfos/VenueNfo';
import Highlights from './components/Highlights';
import Pricing from './components/princing';
import Location from './components/location/Location';
import Footer from './components/header_footer/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App" style={{height: '1500px', background: 'cornflowerblue'}}>
        <Header />

        <Element name='featured'>
          <Featured />
        </Element>
        <Element name='venuenfo'>
          <VenueNfo />
        </Element>

        <Element name='highlights'>
          <Highlights />
        </Element>

        <Element name='pricing'>
          <Pricing />
        </Element>

        <Element name='location'>
          <Location />
        </Element>

          <Footer />
    </div>
  );
}

export default App;
