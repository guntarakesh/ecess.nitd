import React from 'react'
import logo from './pcb1.jpg'
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
    totalSlides={3}>
      <Slider>
        <Slide index={0}><img src={logo}/></Slide>
        <Slide index={1}><img src={logo}/></Slide>
        <Slide index={2}><img src={logo}/></Slide>
      </Slider>
      <ButtonBack className='rbtn'>back</ButtonBack>
      <ButtonNext className='rbtn'>next</ButtonNext>
    </CarouselProvider>
    </div>
    </div>
  )
}

export default Carousel