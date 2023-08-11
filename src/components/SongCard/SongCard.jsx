import React from 'react';
import styles from './SongCard.module.css'; // Import the CSS module

const SongCard = ({ title, artist, albumCover }) => {
  return (
    <div className={styles['song-card']}>
      <img src={albumCover} alt={title} />
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
};

export default SongCard;
