import React from 'react'
import img from '../assets/image 9.png'
import ClientLogo from '../assets/Logo (0).png'
import ClientLogo1 from '../assets/Logo (1).png'
import ClientLogo2 from '../assets/Logo (2).png'
import ClientLogo3 from '../assets/Logo (3).png'
import ClientLogo4 from '../assets/Logo (4).png'
import ClientLogo5 from '../assets/Logo (5).png'
import ClientLogo6 from '../assets/Logo (6).png'

function Customer() {
  return (
    <div className='w-[100%] h-[271.47px] flex justify-around items-center bg-[#F5F7FA] mt-[33.41px] max-w-[1002px]  md: max-sm:w-[100vw]'>
      <img className='md: max-sm:w-[108px] max-sm:h-[108px]' src={img} alt="" />
      <div className='w-[520.66px] md: max-sm:w-[250px] h-[226.39px] justify-between'>
        <p className='text-[#717171] flex-wrap'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
        <h3 className='text-[13.92px] text-[#4CAF4F]'>Tim Smith </h3>
        <p className='text-[#89939E]'>British Dragon Boat Racing Association</p>
        <div className='w-[520.66px] h-[33.41px]   flex justify-between items-center p max-sm:w-[250px]'>
          <div className='w-[343.16px] h-[33.41px] flex justify-between items-center '>
            <img className='md: max-sm:w-[16px] max-sm:h-[16px]' src={ClientLogo}/>
            <img className='md: max-sm:w-[16px] max-sm:h-[16px]' src={ClientLogo1}/>
            <img className='md: max-sm:w-[16px] max-sm:h-[16px]' src={ClientLogo2}/>
            <img className='md: max-sm:w-[16px] max-sm:h-[16px]' src={ClientLogo3}/>
            <img className='md: max-sm:w-[16px] max-sm:h-[16px]' src={ClientLogo4}/>
            <img className='md: max-sm:w-[16px] max-sm:h-[16px]' src={ClientLogo5}/>
            <img className='md: max-sm:w-[16px] max-sm:h-[16px]' src={ClientLogo6}/>
          </div>
          <div className='w-[155.22px] h-[31.14px] flex justify-between items-center'>
            <h3 className='text-[13.92px] font-semibold text-[#4CAF4F]'>Meet all customers</h3>
            <i class="fa-solid fa-arrow-right text-[#4CAF4F]"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customer
