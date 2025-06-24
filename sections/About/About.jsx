import profile_pic from '../../src/assets/about_profile.png'
import "./About.css"
import { Element } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';

import { useContext } from "react";
import { ThemeContext } from "../../context.jsx";

import { motion } from 'framer-motion';
import { fadeInUp } from '../../src/assets/motionFade.js';

import { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  
      const context = useContext(ThemeContext)
      let darkmode = context.darkMode;
      const [cvUrl, setCvUrl] = useState("");

  useEffect(() => {
    const fetchCV = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/get-cv`);
        setCvUrl(res.data.cvUrl);
      } catch (err) {
        console.error("Could not fetch CV");
      }
    };

    fetchCV();
  }, []);

  return (
   
    <Element name='about' className={darkmode ?'about' : "about about-dark"}>
      <div className='abt-container'>
        <div className='about-header'>
            <h1 className={darkmode ? 'about-title' : "about-title about-title-dark"}>About Me</h1>
        </div>
        <motion.div {...fadeInUp} className='about-main'>
            <div className='about-image'>
                <img src={profile_pic} alt="" />
            </div>
            <div className='about-text'>
                <p className={darkmode ? 'about-text-p' :'about-text-p about-text-p-dark'}>Web Developer with extensive knowledge and years of experience working with technologies to deliver quality work</p>
                <div className='about-description'>
                    <div>
                      <h2 className={darkmode ? "light-text" : "dark-text"}>5+</h2>
                      <p className={darkmode ? "light-text" : "dark-text"}>Years experience</p>
                    </div>
                    <div>
                      <h2 className={darkmode ? "light-text" : "dark-text"}>20+</h2>
                      <p className={darkmode ? "light-text" : "dark-text"}>Completed projects</p>
                    </div>
                    <div>
                      <h2 className={darkmode ? "light-text" : "dark-text"}>10+</h2>
                      <p className={darkmode ? "light-text" : "dark-text"}>Happy Clients</p>
                    </div>
                </div>
                <button className="download-btn">
                  <a href={cvUrl} download target="_blank" rel="noopener noreferrer">
                  <FaDownload style={{ marginRight: "8px" }} />
                  Download Resume
                  </a>
                </button>
            </div>
        </motion.div>
        </div>
    </Element>
    
  )
}

export default About