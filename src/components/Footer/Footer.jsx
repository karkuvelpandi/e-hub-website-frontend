import React from 'react'
import "./Footer.css"
const Footer = () => {
  return <>
    <div className='footer-bg relative bottom-0'>
      <div className="w-full flex flex-col sm:flex-row justify-around p-10 gap-5">
        <div className="sm:w-1/2">
          <div className="font-semibold italic">ABOUT US</div>
          <div className="">
            Welcome to e-Hub, your one-stop destination for all things electronic! Explore a world of cutting-edge technology and innovative gadgets right at your fingertips. With a vast array of products ranging from smartphones and laptops to home appliances and entertainment systems, e-Hub brings the future of electronics to your doorstep.
          </div>
        </div>

        <div className="sm:w-1/2">
          <div className="font-semibold italic">ADDRESS</div>
          <div className="">
            <p>Tech Park, 1st Floor, Hosur Rd,
              Bengaluru, Karnataka-560068
              Phone: 0804-717-8999
              Email: hi@Ehub.com</p>
            <div><p>SOCIAL MEDIA</p>

            </div>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <h5>@ copyright 2023 | Ehub is a Electronic store powered by Ehub. All Rights Reserved</h5>
      </div>
    </div>
  </>
}

export default Footer