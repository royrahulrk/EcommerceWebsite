import React from 'react'
import "./Nav.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Corousel from "../../image/miscellaneous/corousel_1.png"
import Corouseltwo from "../../image/miscellaneous/corousel_2.png"
import Corouselthree from "../../image/miscellaneous/corousel_3.png"
const Nav = () => {

  return (
    <>
  
    <div  className='carousel'>
        
    <Carousel autoPlay>
      <div>
        <img src={Corousel} alt="Slide 1" />
      </div>
      <div>
        <img src={Corouseltwo} alt="Slide 2" />

      </div>
      <div>
        <img src={Corouselthree} alt="Slide 3" />
      </div>
     </Carousel>
     </div>
    </>
  )
}


export default Nav