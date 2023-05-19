import React, { useState , useEffect } from 'react'
import logo from './pcb1.jpg'
import img1 from './ecedepartment1.jpeg'
import img2 from './ecedepartment2.jpeg'
import img3 from './ecedepartment3.jpeg'
import 'pure-react-carousel/dist/react-carousel.es.css' ;
import './carousel.css'
function Carousel() {
  const [index,setindex]=useState(0);
  const images = [img1,img2,img3];
  useEffect(()=>{
    const intervalid = setInterval(()=>{
      setindex(previndex=>(previndex+1)%images.length);
    },3000);
    return () => clearInterval(intervalid);
  },[]);

  return (
    <div className='rgallery'>
    <h1 className='rgalleryHeading'>Gallery</h1>
    <div className='rcarousel'>
      <img className='reach_img' src={images[index]} alt='slider'/>
    </div>
    </div>
  )
}

export default Carousel