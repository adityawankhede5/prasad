import React from 'react';
import fonts from '../css/Fonts.module.css';

function Footer() {
    return (
        <div className={fonts.poppins} style={{padding: '0px 5%', fontSize: '0.8em', margin: '20px 0px'}}>
            <div>Prasad Jadhav {new Date().getFullYear()}</div>
            <div>Original Content. Do not copy without prior written permission.</div>
        </div>
    )
}

export default Footer
