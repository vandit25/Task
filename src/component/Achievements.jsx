import React from 'react'
import icone from '../assets/Vector (11).png'
import icone2 from '../assets/Group 2.png'
import icone3 from '../assets/Icon.png'
import icone4 from '../assets/Icon (1).png'

function Achievements() {
  return (
    <div className='w-[100vw] min-h-[202.94px] bg-[#F5F7FA] mt-[33.41px] flex justify-around items-center max-w-[1002px]'>
        <div className='w-[375.88px] min-h-[84.57px] ml-[20px] '>
            <h1 className='text-[25.06px]'>Helping a local</h1>
            <h2 className='text-[25.06px] text-[#4CAF4F] font-semibold'>business reinvent itself</h2>
            <p className='text-[11.14px]'>We reached here with our hard work and dedication</p>
        </div>
        <div className='w-[375.88px]  min-h-[113.84px] flex flex-col justify-between items-center max-w-[1002px]'>
            <div className='w-[100%] min-h-[43px] flex justify-between items-center'>
                <div className='max-w-[177.5px] h-[100%] flex justify-between items-center'>
                    <div className='w-[33.41px] min-h-[33.41px]'>
                        <img className='max-sm:w-[16px] max-sm:h-[16px]'  src={icone}/>
                    </div>
                    <div className='max-w-[132.95px] h-[100%]'>
                        <h3 className='text-[19.49px] font-bold text-[#4D4D4D]'>2,245,341</h3>   
                        <p className='text-[#717171]'>Members</p>
                    </div>
                </div>
                <div className='w-[177.5px] h-[100%] flex justify-between items-center'>
                    <div className='max-w-[33.41px] min-h-[33.41px]'>
                        <img className='max-sm:w-[16px] max-sm:h-[16px]'  src={icone2}/>
                    </div>
                    <div className='w-[132.95px] min-h-[100%]'>
                        <h3 className='text-[19.49px] font-bold text-[#4D4D4D]'>46,328</h3>   
                        <p className='text-[#717171]'>Clubs</p>
                    </div>
                </div>
            </div>
            <div className='w-[100%] h-[43px] flex justify-between items-center'>
                <div className='w-[177.5px] h-[100%] flex justify-between items-center'>
                    <div className='w-[33.41px] min-h-[33.41px]'>
                        <img className='max-sm:w-[16px] max-sm:h-[16px]'  src={icone3}/>
                    </div>
                    <div className='w-[132.95px] h-[100%]'>
                        <h3 className='text-[19.49px] font-bold text-[#4D4D4D]'>828,867</h3>   
                        <p className='text-[#717171]'>Event Bookings</p>
                    </div>
                </div>
                <div className='w-[177.5px] h-[100%] flex justify-between items-center'>
                    <div className='w-[33.41px] min-h-[33.41px]'>
                        <img className='max-sm:w-[16px] max-sm:h-[16px]'  src={icone4}/>
                    </div>
                    <div className='w-[132.95px] h-[100%]'>
                        <h3 className='text-[19.49px] font-bold text-[#4D4D4D]'>46,328</h3>   
                        <p className='text-[#717171]'>Payments</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Achievements