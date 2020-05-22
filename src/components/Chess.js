import React, {useEffect} from 'react';
import fonts from '../css/Fonts.module.css';
import utils from '../css/Utils.module.css';
import styles from '../css/Chess.module.css';
import PlayChess from '../assets/images/desktop/playchess.jpg';
import pawnImg from '../assets/images/desktop/pawn.png'
import knightImg from '../assets/images/desktop/knight.png'
import bishopImg from '../assets/images/desktop/bishop.png'
import rockImg from '../assets/images/desktop/rock.png'
import queenImg from '../assets/images/desktop/queen.png'
import kingImg from '../assets/images/desktop/king.png'
import analysis from '../assets/images/mobile/analysis.svg';
import analysisDesktop from '../assets/images/desktop/analysisDesktop.svg';
import reviews from '../assets/images/desktop/reviews.png'
import analysisTable from '../assets/images/desktop/analysisTable.svg';
import rock1 from '../assets/images/desktop/rock1.jpg';
import rock2 from '../assets/images/desktop/rock2.jpg';
import rock3 from '../assets/images/desktop/rock3.jpg';
import rock4 from '../assets/images/desktop/rock4.jpg';
import sketch1 from '../assets/images/desktop/sketch1.jpg';
import sketch2 from '../assets/images/desktop/sketch2.jpg';
import sketch3 from '../assets/images/desktop/sketch3.jpg';
import sketch4 from '../assets/images/desktop/sketch4.jpg';
import controls from '../assets/images/desktop/controls.svg';




function Intro () {
    return (
        <div className={styles.intro}>
            <div className={`${fonts.poppinsSemiBold} ${styles.introCard}`}>
                <div style={{width: '50vw', maxWidth: '300px'}}>
                    <img src={PlayChess} alt={"Play Chess Logo"} />
                </div>
                <div>
                Chess 24  App Redesign<br /> 
                casestudy
                </div>
            </div>
            <div style={{marginBottom: '20px'}}>
                13 Iterations.....so many sleepless nights.... for what?
                <span style={{color: '#FF0034'}}> For love of the Game!!</span>  
            </div>
        </div>
    )
}

function Peice (props) {
    return (
        <div className={`${fonts.poppins} ${styles.peiceWrapper}`}>
            <div className={`${styles.peice}`}>
                <div className={styles.peiceHeader} style={{fontSize: '1.4em'}}>
                    <div className={fonts.mwItalicRed}>{props.heading}</div>
                    <div className={styles.pSub}>{props.subHeading}</div>
                </div>
                <div className={styles.pImg}>
                    <img src={props.image} alt={"Chess peice"} />
                </div>
                {props.children}
            </div>
        </div>
    )
}

function Definition (props) {
    return (
        <div style={{margin: '10px 0px'}}>
            <div style={{fontWeight: 500}}>{props.dt}</div>
            <div>{props.dd}</div>
        </div>
    )
}

function Peices () {
    return (
        <div style={{padding: '0px 5%'}}>
            {/* PAWN */}
            <Peice 
                heading={"Hey there, Are you excited to play the game of chess?... Let's start with  pawn.."} 
                subHeading={["Here we start with Overview and why choosing Chess24."]}
                image={pawnImg}
            >
                <div className={styles.onDesktop60}>
                    <div style={{fontWeight: 500}}>Overview -</div>
                    <div>
                        Chess is an indoor game played on board. Chess24 app is a 
                        platform which try to provide  digital solution about playing 
                        chess and related things. I redesigned it to improve its functionality.
                    </div>
                </div>
                <div  className={styles.onDesktop60}>
                    <div style={{fontWeight: 500}}>Why Chess24?</div>
                    <div>
                        There overall goal is chess24 is to “deliver the world’s best chess experience”.  This 
                        goal can be achieved with some changes in IA, UI which will change the overall UX. They provide
                        almost all the features which are required to achieve the goal.
                    </div>
                </div>
            </Peice>

            {/* KNIGHT */}
            <Peice 
                heading={"After that we play knight to control the centre, its called magician of the game."}
                subHeading={[<strong>Design process</strong>," is the centre of design and that's where magic lies...."]}
                image={knightImg}
            >
                <div>
                    <img className={utils.hideOnDesktop} src={analysis} alt="Competitor Analysis" />
                    <img className={utils.hideOnMobile} src={analysisDesktop} alt="Competitor Analysis" />
                </div>
                <div className={`${styles.knightDetails}`}>
                    <Definition dt={"Usability Testing(1) –"} dd={"The goal was to find pain points and weaknesses the users are experiencing."} />
                    <Definition dt={"Competitive analysis –"} dd={"users don’t use a solo app for their interests so it is very important to analyse the competitor."} />
                    <Definition dt={"Usability Testing(2) –"} dd={"Was to identify problems in UI, IA and user flows in exiting app."} />
                    <Definition dt={"Paper sketching and low fidelity – "} dd={"Considering the initial problems and Competitive analysis, prototyping on the paper for user feedback for low fidelity prototyping."} />
                    <Definition dt={"User Testing(3) –"} dd={"Was to identify new doubts and see if weak points mentioned in UT#2 were still there"} />
                    <Definition dt={"Wireframing – "} dd={"With consideration of finding in user testing 2, wireframing is to be done so that we can proceed towards the final product."} />
                    <Definition dt={"High Fidelity Design – "} dd={"Upgrading to high fidelity from low fidelity."} />
                </div>
            </Peice>
            
            {/* BISHOP */}
            <Peice heading={"Now it's time to play our bishop, Bishop is used to control large areas and pressurize opponent"}
                subHeading={["Lets see how can we control the designing game after the ", <strong>user testing 1</strong>, " and ", <strong>competitive analysis.</strong>]}
                image={bishopImg}
            >
                <div className={`${styles.bishopDetails}`}>
                    <div>User Testing 1 -</div>
                    <ul>
                        <li>User was not able to play chess with friend.</li>
                        <li>App doesn't allow user to retry the puzzles. </li>
                        <li>live tournaments, commentary, training videos, broadcast these features are not incorporated well in app but they provide all these things on website.</li>
                        <li>limited time variants.</li>
                        <li>User wanted the notification when their favourite player was playing.</li>
                        <li>No open tournaments</li>
                        <li>Sluggish interface.</li>
                        <li>User interfaces design is outdated.</li>
                        <li>User have to drag the piece to move.</li>
                    </ul>
                </div>
                <div className={styles.bishopImg}>
                    <img src={reviews} alt="User Reviews" />
                </div>
                <div style={{textAlign: 'center'}}>User testing 1 conducted using app reviews</div>
                <div>Competitor analysis -</div>
                <div className={styles.bishopImg}>
                    <img src={analysisTable} alt="Analysis Table" />
                </div>
            </Peice>
            
            {/* ROCK */}
            <Peice heading={"Let's continue the game by playing rook, It powerful piece when there is less pieces and board is clear."}
                subHeading={["As primary pain points are clear. Let's find why user facing these problems by ",<strong>user testing 2</strong>," and find primary solutions by ", <strong>paper sketching.</strong>]}
                image={rockImg}
            >
                <div>User Testing 2 -</div>
                <div className={`${styles.rockImagesMobile}`}>
                    <div style={{width: '100%'}}>
                        <img src={rock1}  alt={"user-test"} />
                    </div>
                    <div style={{width: '40%'}}>
                        <img src={rock2} alt={"user-test"} />
                    </div>
                    <div style={{width: '40%'}}>
                        <img src={rock3} alt={"user-test"} />
                    </div>
                    <div style={{width: '100%'}}>
                        <img src={rock4} alt={"user-test"} />
                    </div>
                </div>
                <div className={`${styles.rockImagesDesktop}`}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div><img src={rock1} alt={"user-test"} /></div>
                        <div><img src={rock3} alt={"user-test"} /></div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div><img src={rock2} alt={"user-test"} /></div>
                        <div><img src={rock4} alt={"user-test"} /></div>
                    </div>
                </div>
                <div>Paper Sketching -</div>
                <div className={styles.sketches}>
                    <div>
                        <img src={sketch1} alt="sketch" />
                    </div>
                    <div>
                        <img src={sketch2} alt="sketch" />
                    </div>
                    <div>
                        <img src={sketch3} alt="sketch" />
                    </div>
                    <div>
                        <img src={sketch4} alt="sketch" />
                    </div>
                </div>
            </Peice>
            
            {/* QUEEN */}
            <Peice heading={"Let's move our queen. Most versatile piece on board. The game is so much dependent on this piece.."}
                subHeading={["Let's check the ",<strong>wireframes</strong>," which are used for ",<strong>user testing 3</strong> ]}
                image={queenImg}
            >
                <div className={`${styles.queenDetails}`}>
                    <div>User Testing 1</div>
                    <ol>
                        <li>User wanted any method by which he/she can know the level of tournament without opening it.</li>
                        <li>User wanted the rating graph for puzzle while solving the puzzles it motivates them to solve more.</li>
                    </ol>
                </div>
            </Peice>
            
            <Peice heading={"It's time to introduce the king. In chess all the things are done to protect the KING. "}
                subHeading={["In design we do all the process to represent the ", <strong>useable interface.</strong>, " The interface which is medium between the user and the task."]}
                image={kingImg}
            >
            <div className={styles.kingDetails}>
                <div>High Fidelity Designs -</div>
                <br />
                <div className={fonts.poppinsBold}>Features-</div>
                <ol>
                    <li>
                        Let players play with other humans across the world, or with the machines.
                    </li>
                    <li>
                        Provide live game, broadcast or both on their platform.
                    </li>
                    <li>
                        Provide learning Material from excellent players.
                    </li>
                    <li>
                        Provide News of chess and related things.
                    </li>
                </ol>
            </div>
            <div className={styles.controls}>
                <img src={controls} alt="Controls" />
            </div>
            <div className={fonts.poppinsBold}>Lower Navigation -</div>
            <div className={styles.onDesktop60} style={{color: '#585C63'}}>
                This is for changing IA, these features were in Hamburger Menu and very
                hard to find. There will be clear navigations so that user will gain <span style={{fontWeight: 'bold'}}>flexibility</span>.
            </div>
            </Peice>
        </div>
    )
}

function Chess(props) {
    const {setNavItem} = props;
    useEffect(()=>{
        setNavItem(0);
    }, [setNavItem]);
    return (
        <div className={`${styles.wrapper}`}>
            <Intro />
            <Peices />
        </div>
    )
}

export default Chess
