import React, {useState, useEffect} from 'react';
import styles from '../css/Carousel.module.css';
import left from '../assets/images/desktop/arrowleft.svg';
import right from '../assets/images/desktop/arrowright.svg';


const inactive = () => {
    return {
        opacity: '0.5',
        pointerEvents: 'none',
    }
}


function Carousel(props) {
    const [curr, setCurr] = useState(0);

    function moveSlide (dir) {
        setCurr(prevState=>prevState+dir);
        const slider = document.getElementById(`slider`);
        const dist = document.getElementById(`empty-slide`).offsetWidth+20;
        slider.scrollBy(dir*dist, 0);
    }

    function slideStyle (i, image) {
        return {
            transform: i===curr ? 'scale(1)' : 'scale(0.85)',
            backgroundImage: `url("${image}")`,
            height: props.height,
            maxHeight: props.maxHeight,
        }
    }

    function mainStyle () {
        return {
            maxWidth: props.maxWidth,
        }
    }
    
    useEffect(() => {
        const initialScrollDistance = 10+(document.getElementById(`empty-slide`).offsetWidth*0.764);
        const slider = document.getElementById(`slider`);
        slider.scrollTo(initialScrollDistance, 0);
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.main} style={mainStyle()}>
                <div className={styles.slider} id={'slider'}>
                    <div className={styles.slide} id={`empty-slide`} />
                    {props.images.map((image,i)=>{
                        return (
                            <div key={i} className={styles.slide} style={slideStyle(i, image)}></div>
                        )
                    })}
                    <div className={styles.slide} id={`empty-slide`} />
                </div>
                <div className={`${styles.control} ${styles.leftAlign}`} style={curr===0 ? inactive() : {}} onClick={()=>{moveSlide(-1)}} >
                    <img src={left} alt={"prev"} style={{borderRadius: '1024px'}} />
                </div>
                <div className={`${styles.control} ${styles.rightAlign}`} style={curr===props.images.length-1 ? inactive() : {}} onClick={()=>{moveSlide(1)}}>
                    <img src={right} alt={"next"} style={{borderRadius: '1024px'}} />
                </div>
            </div>
        </div>
    )
}

export default Carousel
