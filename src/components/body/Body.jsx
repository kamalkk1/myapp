import React,{memo} from 'react';
import Grid  from './Grid/Grid';
import apiUrl from '../../components/assests/api';

import "./Body.css"
import AccordionParent from './Accordian/AccordianParent';
import HeroSection from './HeroSection/HeroSection';


const Body = () => {
  return (
    <>
        <HeroSection />
        <Grid name="Top Albums" URL = {apiUrl.top} />
        <Grid name="New Albums" URL= {apiUrl.new} />
        <div className='grid-filter'>
          <Grid name="Songs" URL= {apiUrl.songs} filter />
        </div>
        <AccordionParent />
        
    </>
  )
}

export default memo(Body)