import React from 'react'
import Logo from '../assets/Logo.png'

function Nav() {
  return (
    <div className='h-[58.76px] w-[100vw] flex justify-around items-center max-w-[1002px] md: max-sm:w-[480px]'>
        <img srcSet={Logo} alt="Logo" className='h-[16.71px] w-[107.54px] max-sm:w-[51px] max-sm:h-[8px]'/>
        <div className='h-[35.49px] w-[650.48px] flex items-center justify-end md: max-sm:w-[312px]'>
            <div className='h-[17px] w-[307.82px] flex items-center justify-between mr-[9.74px] md: max-sm:w-[150px]'>
              <div className='md: max-sm:text-[5.3px]'>Home</div>
              <div className='md: max-sm:text-[5.3px]'>Features</div>
              <div className='md: max-sm:text-[5.3px]'>Community</div>
              <div className='md: max-sm:text-[5.3px]'>Blog</div>
              <div className='md: max-sm:text-[5.3px]'>Pricing</div>
            </div>
            <button className='btn w-[133.25px] h-[100%] md: max-sm:w-[64px] max-sm:text-[5.3px] max-sm:h-[18.3px]'>Register Now</button>
        </div>
    </div>
  )
}

export default Nav
