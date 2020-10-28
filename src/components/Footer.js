import React from 'react';
import fonts from '../css/Fonts.module.css';
import styles from '../css/Footer.module.css';

function Footer() {
    return (
        <div className={`${fonts.poppins} ${styles.wrapper}`}>
            <div>Prasad Jadhav {new Date().getFullYear()}</div>
            <div>Original Content. Do not copy without prior written permission.</div>
        </div>
    )
}

export default Footer
