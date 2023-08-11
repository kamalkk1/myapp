import React from 'react';
import styles from './HeroSection.module.css'; // Import your CSS file for styling
import HeroImage from '../assests/heroimg.png';

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>100 Thousand Songs, ad-free
            <br></br>Over thousands podcast episodes</h1>
        
     
      </div>
      <div className={styles.heroImage}>
        <img src={HeroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;
