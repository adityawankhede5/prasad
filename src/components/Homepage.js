import React, { useEffect } from 'react';
import fonts from '../css/Fonts.module.css';
import utils from '../css/Utils.module.css';
import styles from '../css/Homepage.module.css';
import ULineBtn from './ULineBtn';
import chessMobile from '../assets/images/mobile/Group 3343.png';
import chessDesktop from '../assets/images/desktop/Group 24.png';
import cookieMobile from '../assets/images/mobile/Group 3344.png';
import cookieDesktop from '../assets/images/desktop/Group 32.png'
import diaryMobile from '../assets/images/mobile/Group 3354.png';
import diaryDesktop from '../assets/images/desktop/Group 29.png';
import { Link } from 'react-router-dom';

function Intro() {
    return (
        <div className={styles.intro} >
            <div className={`${fonts.poppinsSemiBold} ${styles.introHeader}`}>HI, I AM <span style={{color: '#cc3939'}}>PRASAD</span></div>
            <div className={`${fonts.mwLight} ${styles.introContent}`}>
                I'm a UX designer, trying to create meaningful experiences through design and intend to solve 
                some real life problems.
            </div>
            <div className={`${fonts.mwLight} ${styles.introContent} ${utils.hideOnDesktop}`}>
                Currently perusing B.Tech from NIT Jalandhar. Looking for opportunities 
                where I can grow professionally.  
            </div>
            <div className={`${styles.introButton}`}>
                <a href="#work"><ULineBtn text={"LET'S SEE MY WORK"} /></a>
            </div>
        </div>
    )
}

function Picture (props){
    return (
        <>
            <img width="100%" className={utils.hideOnMobile} src={props.imgDesktop} alt={props.title} />
            <img width="100%" className={utils.hideOnDesktop} src={props.imgMobile} alt={props.title} />
        </>
    )
}

function Pill (props) {
    return (
        <span className={`${styles.pill}`}>{props.text}</span>
    )
}

function Project (props) {
    return (
        <div className={styles.projectWrapper}>
            <div className={styles.pImage} style={{margin: '5px 0px'}}>
                <Picture title={props.title} imgDesktop={props.imgDesktop} imgMobile={props.imgMobile} />
            </div>
            <div className={styles.pDetails}>
                <div className={fonts.mwBold} style={{fontSize: '1.1em', margin: '5px 0px'}}>{props.title}</div>
                <div className={`${fonts.poppins} ${styles.pDesc}`} style={{margin: '5px 0px'}}>{props.desc}</div>
                <div className={`${fonts.poppins} ${styles.pills}`}>
                    {props.badges.map((badge)=>{
                        return <Pill text={badge} key={badge} />
                    })}
                </div>
                <div style={{marginTop: '50px'}}><a href={props.url} target="_blank" rel="noopener noreferrer"><ULineBtn text={props.btn} /></a></div>
            </div>
        </div>
    )
}

function Portfolio () {
    return (
        <div id="work">
            <Project 
                imgMobile={chessMobile}
                imgDesktop={chessDesktop}
                title={"Chess 24 App Redesign"} 
                desc={"The goal was to find problems in existing app and fix them so that it will me more usable and efficient."}
                btn={"VIEW CASE STUDY"} 
                url={"https://www.notion.so/prasadjadhav/Chess24-Redesign-for-better-Usability-672a7a92bc2a4addb743446cada15227"}
                badges={["User Research", "Usability Testing", "Competitor Analysis", "Wire Frames", "Visual Design"]}
            />
            <Project 
                imgMobile={cookieMobile}
                imgDesktop={cookieDesktop}
                title={"Help it Cookie!!"}
                desc={"A case study about tackling mental health related issues."}
                btn={"VIEW CASE STUDY"}
                url={"https://www.notion.so/prasadjadhav/Help-it-cookie-c3d675aa2f1d4dec83784d708271ed4c"}
                badges={["User Research", "Focus Group Studies", "Visual Design"]}
            />
            <Project 
                imgMobile={diaryMobile}
                imgDesktop={diaryDesktop}
                title={"My Diary"}
                desc={"A case is about solving some mental health problems. It includes mood tracker, activities etc."}
                btn={"VIEW CASE STUDY"}
                url={"https://www.notion.so/prasadjadhav/My-Diary-8c4f8d35d3ab4c6091d746b27b15f397"}
                badges={["User Research", "Focus Group Studies", "Visual Design"]}
            />
        </div>
    )
}

function About () {
    return (
        <div className={`${styles.aboutWrapper} ${utils.hideOnMobile}`}>
            <div className={styles.aContent}>
                <div className={fonts.poppinsSemiBold} style={{color: '#CC3939', fontSize: '1.5em'}}>About</div>
                <div className={fonts.merriweather}>
                    <div style={{margin: '10px 0px'}}> 
                        I am undergraduate student of NIT Jalandhar. Design have so much impact on people's life so 
                        I am trying to make it meaning through design. I like to travel, Play chess and listen music.  
                    </div>
                    <div style={{margin: '30px 0px'}}>
                        <Link to="/about-me"><ULineBtn text={"Read more about me here."} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Homepage(props) {
    const {setNavItem} = props;
    useEffect(()=>{
        setNavItem(0);
    },[setNavItem]);
    return (
        <div className={styles.wrapper}>
            <Intro /> 
            <Portfolio />
            <About />
        </div>
    )
}

export default Homepage
