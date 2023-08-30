import React from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import styles from './Navbar.module.css';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
   <Logo />
   <SearchBar />
   <Button children="Give Feedback" />
   </nav>

  )
}

export default Navbar