import React from 'react';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import SectionOne from '../components/sectionOne/SectionOne';
import SectionTwo from '../components/sectionTwo/SectionTwo';
import SectionThree from '../components/sectionThree/SectionThree';
import './home.css';

const Home = () => {
  return (
    <div className='homeMain'>
        <Breadcrumb/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
    </div>
  )
}

export default Home;