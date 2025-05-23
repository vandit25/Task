import React from 'react'
import MemberIcon from '../assets/member Icon 1.png'
import MemberIcon2 from '../assets/member Icon 2.png'
import MemberIcon3 from '../assets/member Icon 3.png'

function Community() {
  return (
    <div className='max-w-[100vw] h-auto mt-[27.84px] flex flex-col justify-center items-center'>
        <div className='max-w-[1002px] min-h-[95px]  flex justify-center items-center'>
            <div className='max-w-[377.27px] h-[100%] md: max-sm:w-[100px]'>
                <h1 className='text-[25.06px] max-w-[1002px]font-semibold flex justify-center text-center align-text-top text-[#4D4D4D]'>Manage your entire community in a single system</h1>
                <p className='flex justify-center items-center text-[#717171]'>Who is Nextcent suitable for?</p>
            </div> 
        </div>
        <div className='w-[100vw] h-[196.1px] mt-[11.14px] flex justify-around items-center max-w-[1002px]'>
            <div className='card h-[182.1px] md: max-sm:w-[100px]'>
                <div className='max-w-[185.85px] h-[101.12px] flex flex-col justify-center items-center max-sm:w-[100px]'>
                    <img className='md: max-sm:w-[16px]' src={MemberIcon}></img>
                    <p className='text-[19.49px] text-center mt-[11.14px]'>Membership Organisations</p>
                </div>
                <div className='max-w-[174.71px] h-[42px] mt-[5.57px] md: max-sm:w-[80px] text-center'>
                    <p className='text-[9.74px]'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
            <div className='card h-[196.1px] md: max-sm:w-[100px]'>
                <div className='max-w-[185.85px] h-[101.12px] flex flex-col justify-center items-center max-sm:w-[100px]'>
                    <img className='md: max-sm:w-[16px]' src={MemberIcon2}></img>
                    <p className='text-[19.49px] text-center mt-[11.14px]'>National Associations</p>
                </div>
                <div className='max-w-[174.71px] h-[42px] mt-[5.57px] md: max-sm:w-[80px] text-center'>
                    <p className='text-[9.74px] md: max-sm:text-[5px]'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
            <div className='card h-[182.1px]  md: max-sm:w-[100px]'>
                <div className='max-w-[185.85px] h-[101.12px] flex flex-col justify-center items-center max-sm:w-[100px]'>
                    <img className='md: max-sm:w-[16px]' src={MemberIcon3}></img>
                    <p className='text-[19.49px] text-center mt-[11.14px]'>Clubs And Groups</p>
                </div>
                <div className='max-w-[174.71px] h-[42px] mt-[5.57px]'>
                    <p className='text-[9.74px] md: max-sm:w-[80px] text-center' >Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Community
