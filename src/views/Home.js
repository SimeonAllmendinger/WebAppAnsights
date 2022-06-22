import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import KnowledgeGraph from '../components/sections/KnowledgeGraph';
import Testimonial from '../components/sections/Testimonial';
import DaVinciHackathon from '../components/sections/DaVinci_Hackathon';
//import Cta from '../components/sections/Cta';
/* <Cta split />**/

const Home = () => {

  return (
  
    <>
      <Hero className="illustration-section-01" />
      <DaVinciHackathon/>
      <FeaturesTiles/>
      <FeaturesSplit invertMobile topDivider imageFill />
      <KnowledgeGraph topDivider />
      <Testimonial topDivider />
       
    </>
  );
}

export default Home;