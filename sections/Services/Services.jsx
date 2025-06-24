import { FaCode, FaPalette, FaUserTie } from "react-icons/fa";
import "./Services.css";
import { Element } from "react-scroll";
import { useContext } from "react";
import { ThemeContext } from "../../context.jsx";


import ServicesCard from "./ServicesCard.jsx";
import SwiperComponent from "../../Components/Swiper.jsx";

import { motion } from 'framer-motion';
import { fadeInUp } from '../../src/assets/motionFade.js';

const Services = () => {
  const context = useContext(ThemeContext);
  const darkmode = context.darkMode;

  const services = [
    {
      logo: <FaCode size={30} title="Code" color="#305CDE" />,
      header: "Website Design",
      description:
        "From stunning visuals to seamless functionality, I design and build responsive websites that not only look great but also drive results. Whether you need a brand-new site from scratch or a powerful e-commerce platform, I focus on creating intuitive user experiences that convert visitors into customers. Let's make your online presence unforgettable.",
    },
    {
      logo: <FaPalette size={24} title="Write" color="#305CDE" />,
      header: "Rebranding",
      description:
        "Is your brand feeling outdated or failing to connect with your audience? I specialize in comprehensive rebranding strategies that revitalize your identity. From logo redesigns and visual guidelines to messaging and brand storytelling, I help businesses redefine their essence and stand out in a crowded market. Let's build a brand that truly reflects your vision.",
    },
    {
      logo: <FaUserTie size={24} title="Write" color="#305CDE" />,
      header: "Consultations",
      description:
        "Navigating the digital landscape can be challenging. My consultation services offer tailored insights and strategic advice to help you overcome hurdles and capitalize on opportunities. Whether it's optimizing your website, planning a digital marketing strategy, or improving user engagement, I provide actionable recommendations to propel your business forward. Get clarity and a clear roadmap for success.",
    },
  ];

  const cards = services.map((service, index) => (
    <ServicesCard
      key={index}
      logo={service.logo}
      header={service.header}
      description={service.description}
      darkmode={darkmode}
    />
  ));



  return (
    <Element name="services" className={darkmode ? "services" : "services services-dark"}>
      <div className="contact-section-2">
        <motion.div {...fadeInUp} className={darkmode ? "main-services": "main-services main-services-dark"}>
          <h1 className="services-title">Services</h1>
          <SwiperComponent items={cards} />
        </motion.div>
      </div>
    </Element>
  );
};

export default Services;
