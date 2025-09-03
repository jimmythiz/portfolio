import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap, FaCode, FaServer, FaBriefcase, FaGraduationCap,FaLaravel, FaPhp    } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiTailwindcss, SiMysql,SiPostgresql   } from 'react-icons/si';
import "./Skills.css"
import { Element } from 'react-scroll';

import { motion } from 'framer-motion';

import { useContext } from "react";
import { ThemeContext } from "../../context.jsx";
const Skills = () => {
        const context = useContext(ThemeContext)
        let darkmode = context.darkMode;
        const iconsStyle = {display:"flex",flexDirection:"column",alignItems:'center',justifyContent:'center',margin:"10px",gap:"5px"}
  return (
    <Element name='skills' className={darkmode ?'skills' : "skills skills-dark"}>
      <motion.div
      
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
      <div className='main-skills'>
          <h1 className={darkmode ? 'skill-title' : "skill-title skill-title-dark"}>Skills</h1>
          <div className='ends'>
              <div className='front-end'>
                <div className='stack'>
                  <FaCode size={30} title="Code" className={darkmode ? '' : "skill-title-dark"}/>
                  <h3 className={darkmode ? '' : "skill-title-dark"}>Front End </h3>
                </div>
                <div className='stack-icons'>
                  <div style={iconsStyle}>
                   <FaHtml5 title="HTML5" size={40} color="#305CDE" />
                   <p>HTML</p>
                   </div>
                   <div style={iconsStyle}>
                  <FaCss3Alt title="CSS3" size={40} color=" #305CDE" />
                  <p>CSS</p>
                  </div>
                  <div style={iconsStyle}>
                  <FaBootstrap title="Bootstrap" size={40} color=" #305CDE" />
                  <p>Bootstrap</p>
                  </div>
                  <div style={iconsStyle}>
                  <SiTailwindcss title="Tailwind CSS" size={40} color=" #305CDE" />
                  <p>Tailwind CSS</p>
                  </div>
                  <div style={iconsStyle}>
                  <SiJavascript title="JavaScript" size={40} color=" #305CDE" />
                  <p>Javascript</p>
                  </div>
                  <div style={iconsStyle}>
                  <FaReact title="React" size={40} color=" #305CDE" />
                  <p>React Js</p>
                  </div>
                  
                  </div>
              </div>
              <div className='back-end'>
                <div className='stack'>
                <FaServer size={30} title="Server" className={darkmode ? '' : "skill-title-dark"}/>
                  <h3 className={darkmode ? '' : "skill-title-dark"}>Back End </h3>
                  </div>
                  <div className='stack-icons'>
                    <div style={iconsStyle}>
                    <FaPhp title="PHP" size={40} color=" #305CDE"/>
                    <p>PHP</p>
                    </div>
                    <div style={iconsStyle}>
                    <FaLaravel title="Laravel" size={40} color=" #305CDE"/>
                    <p>Laravel</p>
                    </div>
                    <div style={iconsStyle}>
                  <FaNodeJs title="Node.js" size={40} color=" #305CDE" />
                  <p>Node Js</p>
                  </div>
                  <div style={iconsStyle}>
                  <SiExpress title="Express" size={40} color=" #305CDE" />
                  <p>Express Js</p>
                  </div>
                  <div style={iconsStyle}>
                    <SiMysql  title="MySQL" size={40} color=" #305CDE"/>
                    <p>MySQL</p>
                    </div>
                    <div style={iconsStyle}>
                    <SiPostgresql  title="PostgreSQL" size={40} color=" #305CDE"/>
                    <p>PostgreSQL</p>
                    </div>
                    <div style={iconsStyle}>
                  <SiMongodb title="MongoDB" size={40} color=" #305CDE" />
                  <p>Mongo DB</p>
                  </div>

                  </div>
              </div>
          </div>
      </div>
      <div className='qualifications'>
          <h1 className={darkmode ? 'skill-title' : "skill-title skill-title-dark"}>Qualifications</h1>
          <div className='qualifications-divider'>
              <div className='education'>
                <div className="stack">
                  <FaGraduationCap size={30} title="Education" className={darkmode ? '' : "skill-title-dark"}/>
                  <h3 className={darkmode ? '' : "skill-title-dark"}>Education</h3>
                  </div>
                  <ul className={darkmode ? 'ul-1' : "ul-1 ul-1-dark"}>
                    <li>Self Taught Programmer</li>
                    <li>University Of Ilorin</li>
                    
                  </ul>
              </div>
              <div className='work-history'>
                <div className="stack">
                  <FaBriefcase size={30} title="Work Experience" className={darkmode ? '' : "skill-title-dark"} />
                  <h3 className={darkmode ? '' : "skill-title-dark"}>Work</h3>
                  </div>
                  <ul className={darkmode ? 'ul-2' : "ul-2 ul-1-dark"}>
                    <li>Play Institution</li>
                    <li>Online Code Tutor</li>
                  </ul>
              </div>
          </div>
      </div>
          </motion.div>
    </Element>
  )
}

export default Skills