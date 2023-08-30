import React from 'react'
import styles from './Search.module.css';
import { ReactComponent as SearchIcon } from '../assests/Searchicon.svg';

const SearchBar = ({placeholder, data}) => {
  return (
    <>
    <form className={styles.wrapper}>
        <input className={styles.search} placeholder={placeholder} />
        <button type='submit' className={styles.searchButton}>
            <SearchIcon />
            </button>
    </form>
    </>
  )
}

export default SearchBar