import "./Advert.css"
import advert from "../../src/assets/project.png"
import { FaEnvelope } from 'react-icons/fa'; 
import { Link } from 'react-scroll';


import { motion } from 'framer-motion';
const Advert = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  className="advert-container">
        <div className="advert-text">
            <h2>Do you have a new project ?</h2>
            <p>Got a cool idea? I’d love to hear about it. Reach out and let’s chat!</p>
            <Link to="contact" smooth={true} duration={1000} spy={true} activeClass="active" className="nav-link" offset={-70} >
            <button className="contact-btn">Contact Me<FaEnvelope style={{ marginLeft: '8px' }} /></button>
            </Link>
        </div>
        <div className="advert-image">
            <img src={advert} alt="" />
        </div>
    </motion.div>
  )
}

export default Advert