import React from 'react';
import fonts from '../css/Fonts.module.css';

function ULineBtn(props) {
    return (
        <span className={fonts.poppinsMedium} style={{padding: '5px 0px', borderBottom: '1px solid black'}}>{props.text}</span>
    )
}

export default ULineBtn
