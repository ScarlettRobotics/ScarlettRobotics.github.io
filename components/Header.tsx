import Link from 'next/link';
import React from 'react';
import styles from '../styles/Header.module.css'
import Title from './Title';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Title />
                <div className={styles.links}>
                    <Link href="/">Home</Link>
                    <Link href="/sponsors">Sponsors</Link>
                    <Link href="/go">Quick Links</Link>
                </div>
            </header>
        </>
    )
}

export default Header;