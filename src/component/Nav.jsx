import React from 'react'
import Logo from '../assets/Logo.png'

function Nav() {
  return (
    <div className='h-[58.76px] w-[100vw]  flex justify-around items-center max-w-[1002px]'>
        <img srcSet={Logo} alt="Logo" className='h-[16.71px] w-[107.54px]'/>
        <div className='h-[35.49px] w-[650.48px] flex items-center justify-end'>
            <div className='h-[17px] w-[307.82px] flex items-center justify-between mr-[9.74px]'>
              <div className='navbar w-[71px]'>Home</div>
              <div className='navbar w-[47px]'>Features</div>
              <div className='navbar w-[62px]'>Community</div>
              <div className='navbar w-[24px]'>Blog</div>
              <div className='navbar w-[37px]'>Pricing</div>
            </div>
            <button className='btn w-[133.25px] h-[100%]'>Register Now</button>
        </div>
    </div>
  )
}

export default Nav
