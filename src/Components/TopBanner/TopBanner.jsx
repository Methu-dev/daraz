import React from 'react'
import feature1 from '../../images/feature1.png'
import feature2 from '../../images/feature2.png'
import feature3 from '../../images/feature3.png'
import feature4 from '../../images/feature4.png'
import feature5 from '../../images/feature5.gif'
import top from '../../images/top.png'

function TopBanner() {
  return (
    <>
    <div className=' flex items-center justify-center mx-auto p-1'>
        <picture>
            <img src={top} alt="" />
        </picture>
    </div>
        <div className=' max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
         <img src={feature1} className=' w-[60px]' alt="" />
         <a href="#">Free Shipping</a>

         <img src={feature1} className=' w-[60px]' alt="" />
            <a href="#">Free Shipping</a>

            <img src={feature2} className=' w-[60px]' alt="" />
            <a href="#">Grocery Shopping</a>

            <img src={feature3} className=' w-[60px] ' alt="" />
            <a href="#">DarazMail</a>

            <img src={feature4} className=' w-[60px] ' alt="" />
            <a href="#">Digital Sheba</a>

            <img src={feature5} className=' w-[60px]' alt="" />
            <a href="#">Mobile Recharge</a>
    </div>
    </>
  )
}

export default TopBanner