import React from 'react'
import ImgUnlock from '../assets/rafiki.png'

function Unlock() {
  return (
    <div className='w-[100vw] h-[301.4px] mt-[36.21px] flex justify-around items-center max-w-[1002px]'>
      <img className='h-[100%] w-[147.57] md: max-sm:w-[147px] max-sm:h-[103px]'  src={ImgUnlock}></img>
      <div className='w-[460.1px] h-[187.9px] max-sm:w-[150px]'>
        <div className='w-[418.34px] h-[129.14px] max-sm:w-[150px]'>
            <h1 className='text-[25.06px] h-[62px]'>The unseen of spending three years at Pixelgrade</h1>
            <p className='text-[#717171] mt-[11.14px] text-[9.74px] flex-wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className='btn w-[105.55px] h-[36.49px] mt-[22.27px]'>Learn More</button>
        </div>
      </div>
    </div>
  )
}
export default Unlock
