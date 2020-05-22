import React, {useEffect} from 'react';
import fonts from '../css/Fonts.module.css';
import styles from '../css/AboutMe.module.css';
import Me from '../assets/images/desktop/me.png';
import linkedin from '../assets/images/desktop/linkedin.svg';
import behance from '../assets/images/desktop/behance.svg';

function Intro () {
    return (
        <div className={`${fonts.merriweather} ${styles.intro}`}>
            <div className={styles.me}>
                <img src={Me} alt={"Prasad Jadhav"} />
            </div>
            <div className={styles.meDetails}>
                <p>
                    Hello, I'm Prasad. 3rd Year engineering student 
                    from NIT Jalandhar. Looking forward to make carrier in User experience Design. 
                </p>
                <p>
                    I am born and raised in Nanded, Maharashtra. While working with some graphics I realised that design
                    is more than just colours, fonts and lines. It generates emotions and 
                    that's why I started learning about UX design in sophomore year of college.
                </p>
                <p>
                    Designing thinking made me good listener. It helped me to see other side of coin. It made me more wise as a human.      
                </p>
                <p>
                    I always wanted to work with great designers and organizations. Please reach out to me for any type of collaboration.                
                </p>
            </div>
        </div>
    )
}

function Title (props) {
    return (
        <div className={`${fonts.poppinsSemiBold} ${styles.title}`}>{props.text}</div>
    )
}
function Heading (props) {
    return (
        <div className={`${fonts.poppinsMedium} ${styles.heading}`}>{props.text}</div>
    )
}
function SubHeading (props) {
    return (
        <div className={`${fonts.poppins} ${styles.subHeading}`}>{props.text}</div>
    )
}
function Content (props) {
    return (
        <div className={`${fonts.poppinsLight} ${styles.content}`}>{props.text}</div>
    )
}

function Pill (props) {
    return (
        <span className={`${styles.pill}`}>{props.text}</span>
    )
}


function Resume () {
    const skills = ["Interaction Design", "Figma", "Human Computer Interaction", "Wireframing", "Prototyping", "AdobeXD", "Adobe Photoshop", "Adobe Illustrator"]
    return (
        <div className={styles.resumeWrapper}>
            <section className={styles.edu}>
                <Title text={"Eduction"} />
                <Heading text={"Bachelor of technology "} />
                <SubHeading text={"Dr. B . R. Ambedkar National Institute of Technology, Jalandhar"} />
                <Content text={"Instrumentation and control engineering."} />
            </section>
            <section className={styles.exp}>
                <Title text={"Experience"} />
                <ul>
                    <li>
                        <Heading text={"UX/UI Intern"} />
                        <SubHeading text={"AsFit &Co."} />
                        <Content text={"AsFit is a Digital fitness platform that connects Gym, Trainers and Nutritionist directly to fitness enthusiasts."} />
                    </li>
                    <li>
                        <Heading text={"UX/UI Intern"} />
                        <SubHeading text={"PECS&co. (Digital Kund)"} />
                        <Content text={"The app is about being medium between the patent holder, industry, and customer. My contribution was in user research, Information architecture and UI designing."} />
                    </li>
                </ul>
            </section>
            <section   className={styles.skills}>
                <Title text={"Skills"} />
                <div className={`${fonts.poppins} ${styles.pills}`}>
                    {skills.map((skill)=>{
                        return <Pill text={skill} key={skill} />
                    })}
                </div>
            </section>
            <section  className={styles.certi}>
                <Title text={"Certificates"} />
            </section>
            <section  className={styles.contact}>
                <Title text={"prasadj181@gmail.com"} />
                <div className={`${fonts.poppinsLight} ${styles.contactInfo}`}>
                    <div>
                        let's get in touch for UX/UI related work and projects.
                    </div>
                    <div>
                        <span style={{display: 'inline-block',width: '20px'}}><img src={linkedin} alt="linked in" /></span>
                        <span style={{display: 'inline-block',width: '20px', margin: '5px 5px'}}><img src={behance} alt="beehance" /></span>
                    </div>
                </div>
                <div></div>
            </section>
        </div>
    )
}


function AboutMe(props) {
    const {setNavItem} = props;
    useEffect(()=>{
        setNavItem(1);
    }, [setNavItem])
    return (
        <div className={styles.wrapper}>
            <Intro />
            <Resume />
        </div>
    )
}

export default AboutMe
