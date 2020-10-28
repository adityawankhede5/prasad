import React from 'react';
import fonts from '../css/Fonts.module.css';
import styles from '../css/Header.module.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className={`${styles.wrapper} ${fonts.raleway}`}>
            <div className={styles.header}>
                <div className={styles.logo}><Link to="/">PRASAD JADHAV</Link></div>
                <div className={styles.items}>
                    <span className={styles.item} style={props.navItem===1 ? {display: 'initial'} : {}} ><Link to="/">PORTFOLIO</Link></span>
                    <span className={styles.item} style={props.navItem===0 ? {display: 'initial'} : {}} ><Link to="/about-me">ABOUT ME</Link></span>
                    <span className={styles.item}>RESUME</span>
                </div>
            </div>
        </header>
    )
}

export default Header
