import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux'
import { Slider } from '../../components/Slider/Slider'
import slider11 from "../../assets/Slider/slider11.jpg"
import slider22 from "../../assets/Slider/slider22.jpg"
import slider33 from "../../assets/Slider/slider33.jpg"
import slider1 from "../../assets/Slider/slider1.jpg"
import slider2 from "../../assets/Slider/slider2.jpg"
import slider3 from "../../assets/Slider/slider3.jpg"
const Header = () => {
   const isMobileView = useSelector(
      (state) => state.visibility.isMobileView
   );
   const imageArray = isMobileView ? [slider1, slider2, slider3] : [slider11, slider22, slider33]
   const imageChild = () => {
      return imageArray.map((img, index) => (
         <div key={index} className='w-fit' >
            <img key={index} src={img} alt="" loading="lazy" className='bg-cover w-full' />
         </div>
      ))
   }
   return <>
      <div className='xxs:h-40 xs:h-60 sm:h-40 md:h-52 lg:h-64 xl:h-72'>
         <Slider dots arrow={!isMobileView} dotColor='blue' sliderClass=" relative" dotContainerClass='flex gap-10 absolute bottom-2 left-1/2 -translate-x-1/2'>
            {imageChild()}
         </Slider>
      </div>
   </>
}
export default Header