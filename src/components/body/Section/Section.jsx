import { CircularProgress } from '@mui/material'
import React from 'react'
import SongCard from '../SongCard/SongCard'
import styles from './Section.module.css'
import { useState } from 'react';
const Section = ({title,data,type}) => {
const [carouselToggle, setCarouselToggle] = useState(true);

const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
}
  return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle}>
                {carouselToggle ? "show All" : "collapse All"}</h4>
        </div>
        {
            data?.length === 0 ? (
                <CircularProgress />
            ):(<div className={styles.cardWrapper}>
                    {!carouselToggle ? (
        data.map((ele) =>  (
                            <SongCard data={ele} type={type} key={ele.id} />
                        ))):(<></>)}
                       </div>)
}
    </div>
  )
}

export default Section