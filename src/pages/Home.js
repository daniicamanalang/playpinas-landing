import React from 'react';
import Hero from '../components/Hero';
import Mall from '../components/Mall';
import Games from '../components/Games';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';

const Home = () => {
  return (
    <>
      <Hero />
      <Mall />
      <Games />
      <AboutUs />
      <ContactUs />
    </>
  );
};

export default Home;
