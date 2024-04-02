import React from 'react'
import { IoLocationSharp } from "react-icons/io5";


const ContactSection = () => {
    return (
        <div className='bg-white py-24 flex justify-center items-center gap-16'>
            <div className='bg-[#F6EFDD] rounded-2xl'>
                <h5 className='font-bold text-xl p-6'>Brookside Global School</h5>
                <div className='flex flex-col justify-center items-center w-full'>
                    <div className='flex justify-between items-center'>
                        <IoLocationSharp />

                    </div>
                </div>
            </div>
            <div className='bg-[#F6EFDD] rounded-2xl'>

            </div>
        </div>
    )
}

export default ContactSection