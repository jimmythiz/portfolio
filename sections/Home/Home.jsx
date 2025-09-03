import "./Home.css";
import { useContext } from "react";
import { ThemeContext } from "../../context.jsx";
import { Element } from "react-scroll";
import profile_pic from "../../src/assets/removebg.png";
import { Link } from 'react-scroll';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaPaperPlane,
  FaWhatsapp 
} from "react-icons/fa";

import { motion } from 'framer-motion';
const Home = () => {
  
    const context = useContext(ThemeContext)
    let darkmode = context.darkMode;
  return (
       <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="hpme-cont"
  >
    <Element name="home" className={darkmode ? 'home' : "home home-darkmode"}>
   
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/folajimi-omolola-728260193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} color="#305CDE" />
        </a>
        <a
          href="https://github.com/jimmythiz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} color="#305CDE" />
        </a>
        <a
          href="https://www.tiktok.com/@jimmythiz?_t=ZS-8x5uDJuRFkf&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={24} color="#305CDE" />
        </a>
        <a
          href="https://www.instagram.com/jimmythiz?igsh=MWJxd25tenluNjYx&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} color="#305CDE" />
        </a>
        <a
          href="https://wa.me/2348154073246"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp  size={24} color="#305CDE" />
        </a>
      </div>
      <div className="home-right">
        <div className="home-text">
          <h1 className={darkmode ? "light-text" : "dark-text"}>Hi, I am Folajimi</h1>
          <h3 className={darkmode ? "light-text" : "dark-text"}>Full-Stack Developer</h3>
          <p className={darkmode ? "light-text" : "dark-text"}>
            High level experience in web design and development knowledge
            producing quality work
          </p>
          <p className={darkmode ? "light-text" : "dark-text"}>
            Expertise with modern languages like HTML, CSS, Javacript, React Js, PHP, Laravel, Node Js, Express Js and Database system like Mongo DB, MySQL and PostgreSQL.
          </p>
          <Link to="contact" smooth={true} duration={1000} spy={true} activeClass="active" className="nav-link" offset={-70} >
          <button className="home-btn">
            Contact Me <FaPaperPlane />
          </button>
          </Link>
        </div>
        <div className="home-image">
          <svg className="home-blob-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#305CDE" d="M52.8,-36.5C60.7,-17,53.8,5.1,42.5,19C31.3,32.9,15.6,38.6,-1.5,39.5C-18.6,40.3,-37.2,36.3,-45.5,24.1C-53.7,11.9,-51.7,-8.4,-42.4,-28.8C-33.1,-49.2,-16.6,-69.6,3,-71.4C22.5,-73.1,45,-56,52.8,-36.5Z" transform="translate(100 100)"/>
            <image x={0} y={50} width={120} height={120} className="home-blob-img" href={profile_pic} preserveAspectRatio="xMidYMid meet" clipPath="url(#blobClip)"/>
            <defs>
              <clipPath id="blobClip">
                <path
                  d="M52.8,-36.5C60.7,-17,53.8,5.1,42.5,19C31.3,32.9,15.6,38.6,-1.5,39.5C-18.6,40.3,-37.2,36.3,-45.5,24.1C-53.7,11.9,-51.7,-8.4,-42.4,-28.8C-33.1,-49.2,-16.6,-69.6,3,-71.4C22.5,-73.1,45,-56,52.8,-36.5Z"
                  transform="translate(100 100)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </Element>
    
      </motion.div>
  );
};

export default Home;
