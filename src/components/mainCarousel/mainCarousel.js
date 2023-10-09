import React from 'react'

import { CCarousel,CCarouselItem,CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import slideshow1 from '../../asserts/ecedepartment1.jpeg'
import slideshow2 from '../../asserts/ecedepartment2.jpeg'
import slideshow3 from '../../asserts/ecedepartment3.jpeg'
import slideshow4 from '../../asserts/teachers1.jpg'
import slideshow5 from '../../asserts/teachers2.jpg'
import slideshow6 from '../../asserts/teachers3.jpg'

function MainCarousel() {
  return (
    <div>
        <CCarousel controls indicators auto>
  <CCarouselItem>
    <CImage className="d-block w-100" src={slideshow6} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={slideshow1} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={slideshow5} alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={slideshow4} alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={slideshow2} alt="slide 3" />
  </CCarouselItem>
</CCarousel>
    </div>
  )
}

export default MainCarousel