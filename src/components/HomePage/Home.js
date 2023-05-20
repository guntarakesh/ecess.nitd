import React from 'react'
import './home.css'
import logo from '../ecess-logo.png'
import pcb1 from './pcb1.jpg'
import pcb5 from './pcb5.jpg'
import bg from './background.jpg'
import Carousel from './carousel'
function Home() {
  return (
      <div className="whole-website">
    <div className="primary-section" style={{ backgroundImage: `url(${bg})`, backgroundSize:'contain' }}>
    </div>
  <div className="secondary-section">
    <div className="section ">
        <div className="logo"> <img  className="logo" src={logo} alt=""  /> </div>
        <div className="heading"> MISSION  </div>
        <div className="descreption">
            To develop a community by the students of the Electronics and Communication Department that will work towards the  welfare of the department and its students in general.
To develop a strong alumni network and involve them in conducting various seminars as well as career guidance assistance via interaction sessions with the students of Electronics and Communication Engineering.
To systematically  access to the computer laboratory of the department for maximum utilization by the students and  software that can be made available to the students to hone their software skills and perform necessary simulations.
           
        </div>
    </div>
    <div className="section two">
        <div className="logo"> <img  className="logo" src={logo} alt=""  /> </div>
        <div className="heading"> VISION  </div>
        <div className="descreption">
           <p>To produce highly competent and resourcefull young engineers who can perform well in varied professions.</p> 
           <p> To develop a strong fundamental base which enable students to explore academic and collaborative interactions with industry, academia and research organizations.</p> 
           <p> To develop excellent research facilities.</p> 
        </div>
    </div>
    <div className="section one">
        <div className="logo"> <img  className="logo" src={logo} alt="hhhh"  /> </div>
        <div className="heading"> VALUES  </div>
        <div className="descreption">
The embryonic formation of the Department of Electronics and Communication Engineering was in the year 1983 with the introduction of an undergraduate
course.Situated amidst lush green campus with teak plantations,the Department, over the time, has grown in several dimensions and 
provides a magnetic ambience in teaching and learning.The faculties are engaged in research in diverse topics focussing in
Telecommunication, Antenna and Microwave, Microelectronics and  VLSI, Signal and Image processing and Computational Systems Biology.  
        </div>
    </div>
 </div>
 <Carousel/>
    </div>
  )
}

export default Home