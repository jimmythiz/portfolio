import './App.css'
import Navbar from "../sections/Navbar/Navbar"
import Home from "../sections/Home/Home"
import About from "../sections/About/About"
import Skills from "../sections/Skills/Skills"
import Services from "../sections/Services/Services"
import Portfolio from "../sections/Portfolio/Portfolio"
import Contact from "../sections/Contact/Contact"
import Footer from '../sections/Footer/Footer'

import { useContext } from "react";
import { ThemeContext } from "../context.jsx";

function App() {
            const context = useContext(ThemeContext)
            let darkmode = context.darkMode;

  return (
    <div className={darkmode ? "app" : "app app-dark"}>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
