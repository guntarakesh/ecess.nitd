import React from 'react'
import logo from './pcb1.jpg'
import img1 from './ecedepartment1.jpeg'
import img2 from './ecedepartment2.jpeg'
import img3 from './ecedepartment3.jpeg'
import img4 from './nitdgp1.png'
import { CarouselProvider , Slider , Slide , ButtonBack , ButtonNext  } from 'pure-react-carousel' ;
import 'pure-react-carousel/dist/react-carousel.es.css' ;
import './carousel.css'
function Carousel() {
  return (
    <div className='rgallery'>
    <h1 className='rgalleryHeading'>Gallery</h1>
    <div className='rcarousel'>
    <CarouselProvider
    naturalSlideWidth={90}
    naturalSlideHeight={70}
    totalSlides={4}>
      <Slider>
        <Slide index={0}><img src={img1}/></Slide>
        <Slide index={1}><img src={img2}/></Slide>
        <Slide index={2}><img src={img3}/></Slide>
        <Slide index={3}><img src={img4}/></Slide>
      </Slider>
      <ButtonBack className='rbtn'>back</ButtonBack>
      <ButtonNext className='rbtn'>next</ButtonNext>
    </CarouselProvider>
    </div>
    </div>
  )
}

export default Carousel