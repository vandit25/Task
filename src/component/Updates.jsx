import React from 'react'
import img from '../assets/image 18.png'
import img2 from '../assets/image 19.png'
import img3 from '../assets/image 20.png'


function Updates() {
  return (
    <div className='w-[100vw] h-[354.51px] flex flex-col justify-center items-center mt-[33.41px] max-w-[1002px]'>
        <div className='w-[772.64px] h-[87.57px] flex flex-col justify-center items-center'>
            <h1 className='text-[25.06px]'>Caring is the new marketing</h1>
            <p className='text-[#717171] text-center'>The Nextcent blog is the best place to read about the latest membership insights,<br></br> trends and more. See who's joining the community, read about how our community<br></br> are increasing their membership income and lot's more.​</p>
        </div>
        <div className='w-[100%] h-[255.15px] flex justify-between items-center pl-[100px] pr-[100px] mt-[11.14px]'>
            <div className='w-[256.15px] h-[100%] relative flex flex-col items-center'>
                <img className='absolute' src={img}/>
                <div className='absolute w[100%] h-[100%] flex flex-col justify-end'>
                    <div className=' w-[220.65px] h-[123.55px] bg-[#F5F7FA] flex flex-col justify-between'>
                        <p className='text-[13.92px] font-semibold text-[#717171] text-center mt-[11.14px]'>Creating Streamlined Safeguarding Processes with OneRen</p>
                        <div className='w-[198.38px] h-[31.14px] flex justify-center items-center'>
                            <p className='text-[#4CAF4F] text-[13.92px] font-semibold mr-[5.57px]'>Readmore</p>
                            <i class="fa-solid fa-arrow-right text-[#4CAF4F]"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[256.15px] h-[100%] relative flex flex-col items-center'>
                <img className='absolute' src={img2}/>
                <div className='absolute w[100%] h-[100%] flex flex-col justify-end'>
                    <div className=' w-[220.65px] h-[123.55px] bg-[#F5F7FA] flex flex-col justify-between'>
                        <p className='text-[13.92px] font-semibold text-[#717171] text-center mt-[11.14px]'>What are your safeguarding<br></br> responsibilities and how can<br></br> you manage them?</p>
                        <div className='w-[198.38px] h-[31.14px] flex justify-center items-center'>
                            <p className='text-[#4CAF4F] text-[13.92px] font-semibold mr-[5.57px]'>Readmore</p>
                            <i class="fa-solid fa-arrow-right text-[#4CAF4F]"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[256.15px] h-[100%] relative flex flex-col items-center'>
                <img className='absolute' src={img3}/>
                <div className='absolute w[100%] h-[100%] flex flex-col justify-end'>
                    <div className=' w-[220.65px] h-[123.55px] bg-[#F5F7FA] flex flex-col justify-between'>
                        <p className='text-[13.92px] font-semibold text-[#717171] text-center mt-[11.14px]'>Revamping the Membership<br></br> Model with Triathlon<br></br> Australia</p>
                        <div className='w-[198.38px] h-[31.14px] flex justify-center items-center'>
                            <p className='text-[#4CAF4F] text-[13.92px] font-semibold mr-[5.57px]'>Readmore</p>
                            <i class="fa-solid fa-arrow-right text-[#4CAF4F]"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Updates
