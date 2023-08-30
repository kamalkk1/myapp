import React from 'react';
import SongCard from '../SongCard/SongCard'; // Import the SongCard component
import styles from './MusicGrid.module.css'; // Import the CSS module

const songsTopAlbums = [
  { title: 'Song 1', artist: 'Artist 1', albumCover: 'path/to/cover1.jpg' },
  // Add more songs
];

const songsNewAlbum = [
  { title: 'Song 8', artist: 'Artist 2', albumCover: 'path/to/cover8.jpg' },
  // Add more songs
];

const MusicGrid = () => {
  return (
    <div className={styles['music-grid']}>
      <div className={styles['music-row']}>
        {songsTopAlbums.map((song, index) => (
          <SongCard
            key={index}
            title={song.title}
            artist={song.artist}
            albumCover={song.albumCover}
          />
        ))}
      </div>
      <div className={styles['music-row']}>
        {songsNewAlbum.map((song, index) => (
          <SongCard
            key={index}
            title={song.title}
            artist={song.artist}
            albumCover={song.albumCover}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicGrid;
