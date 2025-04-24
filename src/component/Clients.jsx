import React from 'react'
import ClientLogo from '../assets/Logo (0).png'
import ClientLogo1 from '../assets/Logo (1).png'
import ClientLogo2 from '../assets/Logo (2).png'
import ClientLogo3 from '../assets/Logo (3).png'
import ClientLogo4 from '../assets/Logo (4).png'
import ClientLogo5 from '../assets/Logo (5).png'
import ClientLogo6 from '../assets/Logo (6).png'


function Clients() {
  return (
    <div className='min-h-[132.92px] w-[100vw] flex-col flex justify-between items-center mt-[27.84px] max-w-[1002px]'>  
      <div className='h-[53.57px] w-[100vw]'>
        <div className=' h-[31px] flex justify-center items-center '>
            <h1 className='text-[25.06px]'>Our Clients</h1>
        </div>
        <div className=' h-[17px] flex justify-center items-center'>
            <p className='text-[#717171]'>We have been working with some Fortune 500+ clients</p>
        </div>
      </div>
      <div className='h-[68.21px] w-[801px] md: max-sm:w-[384.61px]  flex justify-between items-center'>
        <img className='md: max-sm:w-[16px] max-sm:h-[16px]' src={ClientLogo}/>
        <img className='md: max-sm:w-[16px] max-sm:h-[16px]' src={ClientLogo1}/>
        <img className='md: max-sm:w-[16px] max-sm:h-[16px]' src={ClientLogo2}/>
        <img className='md: max-sm:w-[16px] max-sm:h-[16px]' src={ClientLogo3}/>
        <img className='md: max-sm:w-[16px] max-sm:h-[16px]' src={ClientLogo4}/>
        <img className='md: max-sm:w-[16px] max-sm:h-[16px]' src={ClientLogo5}/>
        <img className='md: max-sm:w-[16px] max-sm:h-[16px]' src={ClientLogo6}/>  
      </div>
    </div>
  )
}

export default Clients
