import "./Navbar.css"
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useContext } from "react";
import { ThemeContext } from "../../context.jsx";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const context = useContext(ThemeContext)
  let darkmode = context.darkMode;
  let setDarkMode = context.setDarkMode
  const displayMode = () =>{
      setDarkMode(!darkmode)
      console.log(darkmode)

  }

  return (
    <nav className={darkmode ? 'nav-container' : " nav-container nav-container-darkmode"}>
    <div className="container">
          <div className='nav-left'>
              <h1 className={darkmode ? 'my-name' : "my-name my-name-darkmode"}>Folajimi</h1>
          </div>
          <div className='div-right'>
                <div className={darkmode 
  ? `links ${isOpen ? "open" : ""}` 
  : `links links-darkmode ${isOpen ? "open" : ""}`}>
                    <Link to="home" smooth={true} duration={1000} spy={true} activeClass="active" className="nav-link" offset={-70} onClick={() => setIsOpen(false)} >Home</Link>
                    <Link to="about" smooth={true} duration={1000} spy={true} activeClass="active" className="nav-link" offset={-70} onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="skills" smooth={true} duration={1000} spy={true} activeClass="active" className="nav-link" offset={-70} onClick={() => setIsOpen(false)}>Skills</Link>
                    <Link to="services" smooth={true} duration={1000} spy={true} activeClass="active" className="nav-link" offset={-70} onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="portfolio" smooth={true} duration={1000} spy={true} activeClass="active" className="nav-link" offset={-70} onClick={() => setIsOpen(false)}>Portfolio</Link>
                    <Link to="contact" smooth={true} duration={1000} spy={true} activeClass="active" className="nav-link" offset={-70} onClick={() => setIsOpen(false)}>Contact Me</Link>
                </div>
                <div className="toggle-mode">
                  <button onClick={displayMode} style={{background:"none"}}>
                      {context.darkMode ? <FaMoon size={37} />  : <FaSun size={37} color="white"/>}
                  </button>
                </div>
                <div className="hambuger" onClick={toggleMenu} >
            <PiDotsThreeOutlineDuotone size={30} color={darkmode ? 'black' : 'white'}/>
          </div>
          </div>
          
    </div>
    </nav>
  )
}

export default Navbar