import React from 'react';
import Landing from '../components/Landing.jsx';
import Highlights from '../components/Highlights.jsx';
import Features from '../components/Features.jsx';
import Discounted from '../components/Discounted.jsx';
import Explore from '../components/Explore.jsx';

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Features />
      <Discounted />
      <Explore />
    </>
  );
}

export default Home;