import "./Contact.css"
import { Element } from 'react-scroll';
import { FaPhone, FaEnvelope, FaMapMarkerAlt,FaPaperPlane  } from 'react-icons/fa';

import { useContext } from "react";
import { ThemeContext } from "../../context.jsx";

import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const Contact = () => {
  
            const context = useContext(ThemeContext)
            let darkmode = context.darkMode;

            const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_15wqv68',     
        'template_dsjf03r',    
        formRef.current,
        'C6sno0jNzFGG8dF0E'      
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
  position: "top-right",
  autoClose: 3000,
  theme: darkmode ? "dark" : "light",
});
          
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send message.");

        }
      );
  };


  return (
    <Element name='contact' className={darkmode ? "contact-container" : "contact-container contact-container-dark "}>
      <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="contact-level"
  >
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-main">
            <div className="contact-section-1">
                <div className="contact-card">
                    <FaPhone title="Phone" color=" #305CDE "/>
                    <div>
                      <h3>Call Me</h3>
                      <p>+234 815 407 3246</p>
                    </div>
                </div>
                <div className="contact-card">
                    <FaEnvelope title="Email" color=" #305CDE "/>
                    <div>
                      <h3>E-mail</h3>
                      <p>jimmylesky6@gmail.com</p>
                    </div>
                </div>
                <div className="contact-card">
                    <FaMapMarkerAlt title="Location" color=" #305CDE "/>
                    <div>
                      <h3>Location</h3>
                      <p>Lagos, Nigeria.</p>
                    </div>
                </div>
            </div>
      </div>
      </div>
            <div className="contact-section-2">
                  <form ref={formRef} onSubmit={sendEmail}>
                        <div className="form-1">
                            <input name="user_name" required type="text" placeholder="Name" className={darkmode ? "whiteform" : "darkform"}/>
                            <input name="user_email" required type="text" placeholder="Email" className={darkmode ? "whiteform" : "darkform"}/>
                        </div>
                        <div className="form-2">
                            <input required name="project" type="text" placeholder="Project Name" className={darkmode ? "whiteform" : "darkform"}/>
                        </div>
                        <div className="form-3">
                            <textarea name="message" required placeholder="Your Message" className={darkmode ? "whiteform" : "darkform"}></textarea>
                        </div>
                        <button className="cntc-btn" type="submit" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaPaperPlane />Send Message</button>
                  </form>
            </div>
      
      <ToastContainer position="top-right" autoClose={3000} theme={darkmode ? "dark" : "light"} />
</motion.div>
    </Element>
  )
}

export default Contact