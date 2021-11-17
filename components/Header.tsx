import React from 'react';
import styles from '../styles/Header.module.css'
import Title from './Title';

const Header = () => {
    return (
        <header className={styles.header}>
            <Title />
        </header>
    )
}

export default Header;