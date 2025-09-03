import "./Testimonial.css"
import TestimonialCards from "../Testimonial/TestimonialCard.jsx"
import Testimonialswipper from "../../Components/Testimonialswipper.jsx"
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context.jsx";
import axios from "axios"

import { motion } from 'framer-motion';
const Testimonial = () => {
    
          const context = useContext(ThemeContext)
          let darkmode = context.darkMode;
          const [usercomments,setusercomments] = useState([])
          const [loading, setLoading] = useState(true); 
          const [error, setError] = useState(null); 
           useEffect(() => {
            const fetchData = async () => {
              try {
                const baseURL = import.meta.env.VITE_API_BASE_URL; 
                const response = await axios.get(`${baseURL}/comments/`);
                setusercomments(response.data.testimonials);  
                console.log(usercomments)
              } catch (err) {
                setError(err);
                console.error('Fetch error:', err);
              } finally {
                setLoading(false);
              }
            };

            fetchData();
          }, []);
          
  const cards = usercomments.map((usercomment, index) => (
    <TestimonialCards 
      key={index}
      username={usercomment.name}
      imageUrl={usercomment.imageUrl}
      comments={usercomment.testimony}
      darkmode={darkmode}
    />
  ));
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
   className={darkmode ? "testimonial" : "testimonial darkmodetext"}>
        <h1 className="text-title">Testimonial</h1>
        { usercomments.length > 0 ? 
          <Testimonialswipper items={cards}/> : 
          <div style={{margin:"1rem 1rem 2rem 1rem", textAlign:"center"}}>
          <p>Hello, if you are seeing this message, it's probably because i am hosting the backend services of this page with a server that spins down when inactive.</p>
          <p>The Good new is, now that you are here, you have just spinned it back up and it should be back in less than 30 seconds !</p>
          <p>Kindly refresh in about 20seconds time to view the actual content. Thank you !</p>
          </div>
          }
        
    </motion.div>
  )
}

export default Testimonial