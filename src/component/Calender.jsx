import React from 'react'
import pana from '../assets/pana.png'

function Calender() {
  return (
    <div className='w-[100%] h-[301.68px] flex justify-around items-center mt-[33.41px]'>
        <img src={pana}></img>
        <div className='w-[460.1px] h-[215.9px] flex flex-col justify-between'>
            <h1 className='text-[25.06px]'>How to design your site footer like<br/> we did</h1>
            <p className='text-[#717171] text-[9.74px]'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button className='btn w-[105.55px] h-[36.49px]'>Learn More</button>
        </div>
    </div>
  )
}

export default Calender
