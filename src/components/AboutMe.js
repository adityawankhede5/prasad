import React, {useEffect} from 'react';
import fonts from '../css/Fonts.module.css';
import styles from '../css/AboutMe.module.css';
import Me from '../assets/images/desktop/me.png';
import linkedin from '../assets/images/desktop/linkedin.svg';
import behance from '../assets/images/desktop/behance.svg';
import certi from '../assets/images/desktop/certi.svg'
import Carousel from './Carousel';

function Intro () {
    return (
        <div className={`${fonts.merriweather} ${styles.intro}`}>
            <div className={styles.me}>
                <img src={Me} alt={"Prasad Jadhav"} />
            </div>
            <div className={styles.meDetails}>
                <p>
                    Hello, I'm Prasad. Final Year engineering student 
                    from NIT Jalandhar. Looking forward to make a career in User experience Design. 
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
                <Title text={"Education"} />
                <Heading text={"Bachelor of technology "} />
                <SubHeading text={"Dr. B . R. Ambedkar National Institute of Technology, Jalandhar"} />
                <Content text={"Instrumentation and control engineering."} />
            </section>

            <section className={styles.expandskills}>
            <div className={styles.exp}>
                <Title text={"Experience"} />
                <ul>
                    <li>
                        <Heading text={"Product Design Intern"} />
                        <SubHeading text={"scholarbees.com"} />
                        <Content text={"ScholarBees is an e-learning platform that provides affordable opportunities for students to find right tutors."} />
                    </li>
                    <li>
                        <Heading text={"UX Design Intern"} />
                        <SubHeading text={"Veefitt Ventures"} />
                        <Content text={"Veefitt is a Digital fitness platform that connects Gyms, Trainers, Nutritionist directly to fitness enthusiasts."} />
                    </li>
                    <li>
                        <Heading text={"User Researcher Intern"} />
                        <SubHeading text={"PECS&co. (Digital Kund)"} />
                        <Content text={"The app is about being medium between the patent holder, industry, and customer. My contribution was in user research, Information architecture and UI designing."} />
                    </li>
                </ul>
            </div>
            <div className={styles.skills}>
                <Title text={"Skills"} />
                <div className={`${fonts.poppins} ${styles.pills}`}>
                    {skills.map((skill)=>{
                        return <Pill text={skill} key={skill} />
                    })}
                </div>
            </div>
            </section>
            <section  className={styles.certi}>
                <Title text={"Certificates"} />
                <Carousel 
                    images={[
                        certi,
                        certi,
                        certi,
                        certi,
                        certi
                    ]}
                    maxWidth={'100%'}
                    height={'75vh'}
                    maxHeight={'30vw'}
                />
            </section>
            <section  className={styles.contact}>
                <Title text={"prasadj181@gmail.com"} />
                <div className={`${fonts.poppinsLight} ${styles.contactInfo}`}>
                    <div>
                        let's get in touch for UX/UI related work and projects.
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/prasadj181/" target="_blank" rel="noopener noreferrer"><span style={{display: 'inline-block',width: '20px'}}><img src={linkedin} alt="linked in" /></span></a>
                        <a href="https://www.behance.net/prasadj181" target="_blank" rel="noopener noreferrer"><span style={{display: 'inline-block',width: '20px', margin: '5px 5px'}}><img src={behance} alt="beehance" /></span></a>
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
