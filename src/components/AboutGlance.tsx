import React from 'react'

const AboutGlance = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full gap-20 py-16 bg-white'>
            <h1 className='text-[#F3A20C] font-bold md:text-5xl text-2xl '>Brookfield at a Glance</h1>
            <div className='flex justify-center items-start flex-col gap-20'>
                <div className='flex justify-start items-center gap-10'>
                    <span className='text-3xl'>Current Admissions</span>
                    <hr className='w-60 border-[1px] border-[#F3A20C]' />
                    <span className='text-5xl'>200</span>
                </div>
                <div className='flex justify-start items-center gap-20'>
                    <span className='text-3xl'>Qualified Staff</span>
                    <hr className='w-60 border-[1px] border-[#F3A20C]' />
                    <span className='text-5xl'>20+</span>
                </div>
                <div className='flex justify-start items-center gap-12'>
                    <span className='text-3xl'>Clubs & Activities</span>
                    <hr className='w-60 border-[1px] border-[#F3A20C]' />
                    <span className='text-5xl'>30+</span>
                </div>
            </div>
        </div>
    )
}

export default AboutGlance