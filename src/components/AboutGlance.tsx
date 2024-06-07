import React from 'react'

const AboutGlance = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full gap-20 py-16 bg-white'>
            <h1 className='text-[#F3A20C] font-bold md:text-5xl text-2xl '>Brookside at a Glance</h1>
            <div className='flex justify-center items-start flex-col gap-20'>
                <div className='flex justify-start items-center gap-10'>
                    <span className='md:text-3xl text-[16px] '>Current Admissions</span>
                    <hr className='md:w-60 w-10 border-[1px] border-[#F3A20C]' />
                    <span className='md:text-5xl text-[30px]'>200</span>
                </div>
                <div className='flex justify-start items-center md:gap-20 gap-12'>
                    <span className='md:text-3xl text-[16px] '>Qualified Staff</span>
                    <hr className='md:w-60 w-10 border-[1px] border-[#F3A20C]' />
                    <span className='md:text-5xl text-[30px]'>20+</span>
                </div>
                <div className='flex justify-start items-center gap-12'>
                    <span className='md:text-3xl text-[16px]'>Clubs & Activities</span>
                    <hr className='md:w-60 w-10 border-[1px] border-[#F3A20C]' />
                    <span className='md:text-5xl text-[30px]'>30+</span>
                </div>
            </div>
        </div>
    )
}

export default AboutGlance