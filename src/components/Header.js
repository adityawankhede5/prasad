import React from 'react';
import fonts from '../css/Fonts.module.css';
import styles from '../css/Header.module.css';

function Header(props) {
    return (
        <header className={`${styles.wrapper} ${fonts.raleway}`}>
            <div className={styles.header}>
                <div className={styles.logo}>PRASAD JADHAV</div>
                <div className={styles.items}>
                    <span className={styles.item} style={props.navItem===1 ? {display: 'initial'} : {}} >PORTFOLIO</span>
                    <span className={styles.item} style={props.navItem===0 ? {display: 'initial'} : {}} >ABOUT ME</span>
                    <span className={styles.item}>RESUME</span>
                </div>
            </div>
        </header>
    )
}

export default Header
