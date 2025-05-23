import React from 'react'
import logo from '../assets/Logo-white.png'
import social from '../assets/Social Icons 1.png'
import social1 from '../assets/Social Icons 2.png'
import social2 from '../assets/Social Icons 3.png'
import social3 from '../assets/Social Icons.png'
function Footer() {
  return (
    <div className='w-[100vw] min-h-[438.53px] mt-[42.37px] max-w-[1002px] flex-wrap'>
      <div className='w-[100vw] min-h-[209.31px] flex flex-col justify-around items-center bg-[#F5F7FA] max-w-[1002px]'>
        <h1 className='text-[44.55px] text-center'>Pellentesque suscipit<br></br> fringilla libero eu.</h1>
        <button className='btn w-[124.25px] min-h-[36.49px]'>Get a Demo <i class="fa-solid fa-arrow-right"></i> </button>
      </div>
      <div className='w-[100%] min-h-[229.21px] bg-[#263238] flex justify-around items-center'>
        <div className='w-[243.62px] min-h-[131.58px] flex flex-col justify-between md:max-sm:w-[116px]'>
            <img className='w-[132.95px] min-h-[20.65px] md: max-sm:w-[63px] max-sm:h-[10px]' src={logo}/>
            <p className='text-[#FFFF] text-[9.75px] font-normal'>Copyright © 2020 Landify UI Kit.</p>
            <p className='text-[#FFFF] text-[9.75px] font-normal'>All rights reserved</p>
            <div className='h-[22.27] w-[122.50px] md: max-sm:w-[40px] flex justify-between'>
                <img className='max-sm:w-[18px] max-sm:h-[10px]' src={social2} alt="" />
                <img className='max-sm:w-[18px] max-sm:h-[10px]' src={social1} alt="" />
                <img className='max-sm:w-[18px] max-sm:h-[10px]' src={social} alt="" />
                <img className='max-sm:w-[18px] max-sm:h-[10px]' src={social3} alt="" />
            </div>
        </div>
        <div className='w-[442px] h-[140.12px] flex justify-between md: max-sm:w-[212px]'>
            <div className='w-[111.37px] min-h-[140.12px] flex flex-col justify-between'>
                <div className='w-[100%] min-h-[20px]'>
                    <p className='text-[13.92px] text-[#fff] font-semibold'>Company</p>
                </div>
                <div className='w-[100%] min-h-[103.41px] flex flex-col justify-between'>
                    <p className='footerLi'>About us</p>
                    <p className='footerLi'>Blog</p>
                    <p className='footerLi'>Contact us</p>
                    <p className='footerLi'>Pricing</p>
                    <p className='footerLi'>Testimonials</p>
                </div>
            </div>
            <div className='w-[111.37px] min-h-[140.12px] flex flex-col justify-between'>
                <div className='w-[100vw] h-[20px]'>
                    <p className='text-[13.92px] text-[#fff] font-semibold'>Support</p>
                </div>
                <div className='w-[100vw] min-h-[103.41px] flex flex-col justify-between md: max-sm:w-[85px]'>
                    <p className='footerLi'>Help center</p>
                    <p className='footerLi'>Terms of service</p>
                    <p className='footerLi'>Legal</p>
                    <p className='footerLi'>Privacy Policy</p>
                    <p className='footerLi'>Status</p>
                </div>
            </div>
            <div className='w-[85px] h-[64.55px] flex flex-col justify-between'>
                <div className='w-[100%] min-h-[20px]'>
                    <p className='text-[13.92px] text-[#fff] font-semibold'>Stay up to date</p>
                </div>
                <input className=' min-h-[27.84px] w-[160px] bg-[#717171] rounded-[5px] text-[#ffff] mt-[50px] md: max-sm:w-[40px] max-sm:h-[10px] max-sm:text-[4.3px] p-[8px]' type="text" placeholder='Your email address'/>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
