import React, { useState } from 'react'
import { BrowserRouter as Router, Routes , Route , Link } from "react-router-dom";
import './Navbar.css'
import Home from '../HomePage/Home'
import AboutUs from '../AboutusPage/AboutUs'
import Team from '../TeamPage/Team'
import Faculty from '../FacultyPage/Faculty'
import logo from '../ecess-logo.png'

function Navbar() {
 
 const [isActive,setisActive]=useState(false);

 const handleClick = event =>{
     event.currentTarget.classList.toggle('toggle');
     setisActive(current=>!current);
 }
  
 const handleNavLinks = event =>{
    event.currentTarget.classList.toggle('open');
 }

  return (
    <div>
      <Router>
        <nav>
        <div className='hamburger' onClick={handleClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <div className="logo">
            <img src={logo}/>
        </div>
       
        <ul className={isActive ? 'nav-links open': 'nav-links'}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>AboutUs</Link></li>
            <li><Link to='/team'>Team</Link></li>
            <li><Link to='/faculty'>Faculty</Link></li>
        </ul>
    </nav>
    <Routes>
      <Route exact path='/' element={ <Home/>} />
      <Route exact path='/about' element={ <AboutUs/>} />
      <Route exact path='/team' element={ <Team/>} />
      <Route exact path='/faculty' element={ <Faculty/>} />
    </Routes>
  </Router>
    </div>
  )
}

export default Navbar