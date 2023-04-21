'use client';

import styles from '../styles/Navbar.module.css';

export default function Navbar() {    

    return (
        <nav className={styles.nav}>
            <h1 className={styles.appTitle}>Task Tracker</h1>
            <svg className={styles.settingsBtn} viewBox='0 0 40 40'>
                <circle cx='20' cy='15' r='10' fill='lightgrey'/>
                <circle cx='20' cy='42' r='15' fill='lightgrey'/>
            </svg>
        </nav>
    )
}