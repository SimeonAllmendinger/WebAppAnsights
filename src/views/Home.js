import React, { useEffect, useState }  from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
//import Cta from '../components/sections/Cta';
/* <Cta split />**/

const Home = () => {

  const [currentTime, setCurrentTime] = useState(0);
  
  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      console.log(data.time);
      setCurrentTime(data.time);
    });
  }, []);

  return (
  
    <>
      <Hero className="illustration-section-01" currentTime={currentTime}/>
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill />
      <Testimonial topDivider />
       
    </>
  );
}

export default Home;