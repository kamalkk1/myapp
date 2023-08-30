import React,{memo} from 'react';
import HeroImage from "../../assests/heroimg.png";
import "./Hero.css"
import { Grid } from '@mui/material';

const HeroSection = () => {
  return (
    <Grid container className='hero-main'>
        <h1 className='hero-text'>
            <div>100 Thousand Songs, ad free</div>
            <div>Over thousands podcast episodes</div>
        </h1>
        <img src={HeroImage} alt="..."/>
    </Grid>
  )
}

export default memo(HeroSection)