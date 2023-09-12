import fb from './images/facebook.svg'
import inst from './images/instagram.svg'
import github from './images/github.svg'
import projectImage from './images/bubble-timer-img.jpeg'
import headshot from './images/headshot.svg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (  
        <><section className="hero">
            <div className="hero-area">
                <div className="hero-text">
                    <h1 data-aos="fade-down">Amra Zenkić</h1>
                    <p data-aos="fade-down">Computer science student</p>
                    <div className="button" data-aos="fade-down"><a href="#about-me">About me</a></div>
                </div>
                <div className="socials" data-aos="fade-down">
                    <div>
                        <a href="https://www.facebook.com/amra.zenkic.9" target="_blank" className="social">
                            <img src={fb} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/amra.zenkic/" target="_blank" className="social">
                            <img src={inst} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/amra-zenkic" target="_blank" className="social">
                            <img src={github} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section><section onmouseover="blackCursor()" class="sub-section black-cursor" id="about-me">
                <div class="information">
                    <h2 data-aos="fade-down">About Me</h2>
                    <p data-aos="fade-down">Hello! I'm Amra Zenkić, a passionate and dedicated second-year computer science
                        student.<br /><br /> I have always been fascinated by the world of technology and computers, which led me to pursue
                        a degree in computer science. I have gained experience in various programming languages and frameworks,
                        including but not limited to C++, Python, HTML/CSS, SCSS, and JavaScript. I am continuously expanding my
                        knowledge base and exploring new languages and tools to broaden my skill set.<br /><br />As I continue my
                        journey as a computer science student, I am excited to further expand my knowledge, gain hands-on
                        experience through internships and projects, and contribute to the ever-evolving world of technology.
                        <br /><br />Thank you for visiting my portfolio! Please feel free to explore my projects and get in touch if
                        you have any questions or opportunities for collaboration. I look forward to connecting with you!
                    </p>
                </div>
                <div class="headshot-container" data-aos="fade-down">
                    <img class="headshot" src={headshot} alt="Amra Zenkić slika" />
                </div>
            </section>
            <section class="sub-section-alternative black-cursor" id="projects">
                <h2 data-aos="fade-down">Projects</h2>
                <div class="project-container" data-aos="fade-down">
                    <div class="project-card">
                        <img class="project-image" src={projectImage} alt="Project"/>
                            <h3>Bubble Timer</h3>
                            <p class="subtext">Using HTML, SCSS and Java Script I made a simple timer.</p>
                            <hr />
                            <p class="subtext"><a class="project-link" href="https://github.com/amra-zenkic/bubble-timer" target="_blank">View on
                                GitHub</a></p>
                        </div>
                </div>
            </section></>
    );
}
 
export default Home
;