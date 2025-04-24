import React from 'react'
import Illustration from '../assets/Illustration.png'

function Banner() {
  return (
    <div className=' w-[100vw] bg-[#F5F7FA] flex justify-around max-w-[1002px] md: max-sm:h-[199px]'>
      <div className='h-[192.9px] w-[457.32px] flex flex-col justify-center'>
        <div className=' ml-[20px]'>
          <h1 className='text-[#4D4D4D] text-[44.55px] font-semibold'>Lessons and insights</h1>
          <h2 className='text-[#4CAF4F] text-[44.55px] font-semibold'>from 8 years</h2>
          <p className='mb-[22.27px] text-[#717171]'>Where to grow your business as a photographer: site or social media?</p>
        </div>
        <div>
          <button className='btn w-[89.55px] h-[36.49px]'>Register</button>
        </div>
      </div>
      <div className='h-[283.3px] w-[272.16px]'>
        <img srcSet={Illustration} alt="Illustration"/>
      </div>
    </div>
  )   
}

export default Banner