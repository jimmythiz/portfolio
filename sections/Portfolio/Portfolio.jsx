
import { useContext,useState,useEffect } from "react";
import { ThemeContext } from "../../context.jsx";
import axios from "axios";
import Advert from "../Advert/Advert"
import Testimonial from "../Testimonial/Testimonial"
import Portfoliocards from './Portfoliocards.jsx'

import "./Portfolio.css"
import { Element } from 'react-scroll';

import { motion } from 'framer-motion';
import PortfolioSwipper from '../../Components/PortfolioSwiper.jsx'
const Portfolio = () => {
          const context = useContext(ThemeContext)
          let darkmode = context.darkMode;
          const [portfoliostuffs,setportfoliostuffs] = useState([])
          const [loading, setLoading] = useState(true); 
          const [error, setError] = useState(null); 
           useEffect(() => {
            const fetchData = async () => {
              try {
                const baseURL = import.meta.env.VITE_API_BASE_URL; 
                const response = await axios.get(`${baseURL}/projects/`);
                setportfoliostuffs(response.data.projects);  
              } catch (err) {
                setError(err);
                console.error('Fetch error:', err);
              } finally {
                setLoading(false);
              }
            };

            fetchData();
          }, []);
          
    const cards = portfoliostuffs.map((portfoliostuff, index) => (
    <Portfoliocards 
      key={portfoliostuff._id}
      title={portfoliostuff.title}
      imageUrl={portfoliostuff.imageUrl}
      description={portfoliostuff.description}
      darkmode={darkmode}
      link={portfoliostuff.projectLink}
    />
  ));


  return (
    <motion.div
    className="contact-section-22"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <Element name='portfolio' className={darkmode ?'portfolio' : "portfolio portfolio-dark"}>
      
      <h1 className={darkmode ? 'portfolio-title' : "portfolio-title dark-text"}>Portfolio</h1>
      { portfoliostuffs.length > 0 ? 
          <PortfolioSwipper items={cards}/> : 
          <div style={{margin:"1rem 1rem 2rem 1rem", textAlign:"center"}}>
          <p>Hello, if you are seeing this message, it's probably because i am hosting the backend services of this page with a server that spins down when inactive.</p>
          <p>The Good new is, now that you are here, you have just spinned it back up and it should be back in less than 30 seconds !</p>
          <p>Kindly refresh in about 20seconds time to view the actual content. Thank you !</p>
          </div>
          }
      
        <Advert/>
      <Testimonial/>
    </Element>
    
      </motion.div>
    
  )
}

export default Portfolio