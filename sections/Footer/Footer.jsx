import { FaLinkedin, FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa'
import "./Footer.css"
import { Link } from 'react-scroll';

import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
   className='footer'>
        <div className='footer-top'>
            <h1>FolaJimi</h1>
            <div className="links">
                <ul>
                    <li><Link to="about" smooth={true} duration={1000} spy={true} className="nav-link" offset={-70} >About</Link></li>
                    <li><Link to="services" smooth={true} duration={1000} spy={true} className="nav-link" offset={-70} >Services</Link></li>
                    <li><Link to="portfolio" smooth={true} duration={1000} spy={true} className="nav-link" offset={-70} >Portfolio</Link></li>
                </ul>
            </div>
            <div className="social-icons">
                      <a href="https://www.linkedin.com/in/folajimi-omolola-728260193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                          <FaLinkedin size={24} />
                      </a>
                      <a href="https://github.com/jimmythiz" target="_blank" rel="noopener noreferrer">
                          <FaGithub size={24} />
                      </a>
                      <a href="https://www.tiktok.com/@jimmythiz?_t=ZS-8x5uDJuRFkf&_r=1" target="_blank" rel="noopener noreferrer">
                          <FaTiktok size={24} />
                      </a>
                      <a href="https://www.instagram.com/jimmythiz?igsh=MWJxd25tenluNjYx&utm_source=qr" target="_blank" rel="noopener noreferrer">
                          <FaInstagram size={24} />
                      </a>
            </div>
        </div>
        <div className='footer-bottom'>
            <p>&copy; 2025. ||  Folajimi Omolola  || All Rights Reserved </p>
        </div>
    </motion.div>
  )
}

export default Footer