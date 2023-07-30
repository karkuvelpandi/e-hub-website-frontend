import React from 'react'
import './Header.css'
import { Slider } from '../../components/Slider/Slider'
import slider1 from "../../assets/Slider/slider11.jpg"
import slider2 from "../../assets/Slider/slider22.jpg"
import slider3 from "../../assets/Slider/slider33.jpg"
const Header = () => {
   const imageArray = [slider1, slider2, slider3]
   const imageChild = () => {
      return imageArray.map((img, index) => (
         <div key={index} className='w-fit' >
            <img key={index} src={img} alt="" className='lg:w-fit' />
         </div>
      ))
   }
   return <>
      <div className='relative'>
         <Slider dots arrow dotColor='blue' sliderClass="h-auto" dotContainerClass='flex gap-10 absolute bottom-6 left-[47%]'>
            {imageChild()}
         </Slider>
      </div>
   </>
}
export default Header