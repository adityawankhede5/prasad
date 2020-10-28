import React from 'react';
import styles from '../css/Modal.module.css';
function Modal() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.dialog}>
                <object data="https://www.w3schools.com">
                    <embed src="https://www.w3schools.com" />
                </object>
                {/* <iframe allow src="https://www.notion.so/prasadjadhav/My-Diary-8c4f8d35d3ab4c6091d746b27b15f397" title="schools" className={styles.iframe} /> */}
            </div>
        </div>
    )
}

export default Modal
