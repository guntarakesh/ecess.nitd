import React from 'react'
import './AboutUs.css'
import pcb from './pcb-workshop.jpg'
import vlsi from './vlsi-workshop.jpg'
import tk1 from './talk_show1.jpg'
import tk2 from './talk_show2.jpg'
import tk3 from './talk_show3.jpg'
import pic from '../HomePage/pcb5.jpg'
function AboutUs() {
  return (
    <div className='rabout'>
      <div className="main">ABOUT US</div>
      <div className="writings">
        The embryonic formation of the Department of Electronics and Communication Engineering
        was in the year 1983 with the introduction of an undergraduate course. Situated amidst
        lush green campus with teak plantations, the Department, over the time, has grown in
        several dimensions and provides a magnetic ambience in teaching and learning. The faculties
        are engaged in research in diverse topics focussing in Telecommunication, Antenna and Microwave,
        Microelectronics and VLSI, Signal and Image processing and Computational Systems Biology.
        It is well equipped with sophisticated laboratories in the areas of VLSI, Signal Processing,
        Microwave, Antenna and Wireless Communication. The Department has been supported by, SMDP for
        VLSI, DST-FIST for Wireless Communications and NPMASS for MEMS Research. Sponsored research
        from research initiation grant as well as DST and SERB have been initiated over the years.
        The Department is committed to impart quality education at undergraduate as well as
        postgraduate level and promulgate quality research in diverse fields of application of electronics engineering.
      </div>
      <div className='raboutEvents'>
        <div className='raboutEventsHeading'>Our Events</div>
        <div className='reachEvent'>
          <div className="rEventcard-container">
            <img src={vlsi} alt='vlsi' className="rEventcard-img" />
            <h1 className="rEventcard-title">VLSI WORKSHOP</h1>
            <p className="rEventcard-description">Have you ever thought that VLSI circuits are used everywhere in our lives, including microprocessors in a computer, digital camera, and safety systems like anti-lock braking systems in an automobile.
This is an interesting stuff that makes everyone interested in it.
Are you also Interested??

ECESS, NIT DURGAPUR brings you the opportunity to learn this with 5 day VLSI workshop. You didn't need any prior knowlege.
Don't miss the opportunity!!
Date: 5,6,17,18,19 April 2023
Time: 6:00PM - 7:30PM 
Venue: EC31, 2rd floor.</p>
            <a href='' className="rEventcard-btn"> Know More </a>
          </div>
          <div className="rEventcard-container">
            <img src={tk1} alt='' className="rEventcard-img" />
            <h1 className="rEventcard-title">TALK SHOW</h1>
            <p className="rEventcard-description">We the *Electronics and Communication Engineering students society* has came up with a Alumni talk by *Mr. Sai Vara Prasad Bolloju* . He is currently working at *Qualcomm company*. This Alumni talk show is about how to build a career in semiconductor world . We hope the presence of all in this talk show and make use of this golden opportunity to interact with our alumni .

*Topic: career in semiconductor industry*

*Date and time: 17th December 2022. 7:00pm- 8:00pm*

*Mode: Online*
</p>
            <a href='' className="rEventcard-btn"> Know More </a>
          </div>
          <div className="rEventcard-container">
            <img src={tk2} alt='' className="rEventcard-img" />
            <h1 className="rEventcard-title">TALK SHOW</h1>
            <p className="rEventcard-description">Electronics and Communication

Engineering Student's Society (ECESS) brings you a talk by Dr. Karan Nathwani currently working as Assistant Professor in the Department of Electrical Engineering at IIT Jammu. He was a Postdoctoral

researcher in France at Telecom ParishTech and Inria-Nancy. He was also a research scientist at Oxford University in the UK. His area of research

includes speech enhancement, speech pathology, intelligibility improvement, speech recognition, underwater signal processing, Machine learning and Artificial Intelligence.

We invite all to grace the seminar with your presence and gain invaluable knowledge from one of the best person in this domain. We will be waiting for you all.

Topic Speech Intelligibility Improvement in Realistic Noisy Environments

Date: 5th August, 2022

Time: 3:30-5 PM Venue: SL 31, ECE Department, NIT DURGAPUR</p>
            <a href='' className="rEventcard-btn"> Know More </a>
          </div>
          <div className="rEventcard-container">
            <img src={tk3} alt='' className="rEventcard-img" />
            <h1 className="rEventcard-title">TALK SHOW</h1>
            <p className="rEventcard-description">Electronics and Communication Engineering Students' Society came up with a talk by Dr. Shanti Pavan currently working as Professor at IIT Madras. His areas of interests are analog, mixed signal, RF, and Microwave Design. He has done his Bachelor of Technology in Electronics and Communication Engineering from IIT Madras. He completed his Master of Science(MS) in Electrical Engineering from Columbia University. And He got his Doctor of Philosophy( PhD) in Electrical, Electronics and Communication Engineering from Columbia University. He worked as visiting senior scientist in Fairchild. The talk is about Reciprocity and inter - reciprocity in electrical network. We hope you all will make use of the opportunity.
*Topic:* Reciprocity and inter - reciprocity in electrical network
*Date and time :* 3rd November, 2022. 11:00 AM to 12:30 PM.
*Venue :* SL31, ECE DEPARTMENT, NIT DURGAPUR</p>
            <a href='' className="rEventcard-btn"> Know More </a>
          </div>
          <div className="rEventcard-container">
            <img src={pcb} alt='' className="rEventcard-img" />
            <h1 className="rEventcard-title">PCB WORKSHOP</h1>
            <p className="rEventcard-description">Discover the art of PCB design at our workshop! Learn industry-standard software tools, master schematic and layout design principles, and explore component placement and routing techniques. Join us for hands-on training, led by experienced instructors, and unlock new possibilities in electronics. Enhance your engineering skills and become a proficient PCB designer. Don't miss this transformative learning opportunity.</p>
            <a href='' className="rEventcard-btn"> Know More </a>
          </div>
         
          
         
        </div>
      </div>
    </div>
  )
}

export default AboutUs