import Link from 'next/link';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { IoIosMail } from "react-icons/io";
 export default function ContactCards() {
  return (
    <div className='flex flex-row justify-center flex-wrap gap-8 p-10 md:mt-0 mt-10'>
      <div className='bg-[#F6EFDD] w-[363px] h-[184px] p-5 items-center text-center rounded-2xl'>
        <div className='flex flex-col justify-center gap-1 items-center -mt-12'>
          <IoLocationSharp className='text-[#F3A20C] w-[50px] h-[60px]' />
          <h1 className='font-bold text-[20px]'>Brookside Global School</h1>
          <p>Plot No 9, Situated at Silpa Valley,
            Near My Home Mangala, Kondapur,
            Telangana 500084</p>
        </div>
      </div>
      
      <div className='bg-[#F6EFDD] w-[363px] h-[184px] p-5 items-center text-center rounded-2xl'>
        <div className='flex flex-col justify-center gap-1 items-center -mt-12'>
        <FaPhoneAlt className='text-[#F3A20C] w-[50px] h-[50px]' />
          <h1 className='font-bold text-[20px] mt-2'><Link href={`tel:040 4917 1111`}>040 4917 1111</Link></h1>
          <p>Operating hours are from9:00 AM to 5:00 PM IST(Monday - Saturday)</p>
        </div>
      </div>
      
      <div className='bg-[#F6EFDD] w-[363px] h-[184px] p-5 items-center text-center rounded-2xl'>
        <div className='flex flex-col justify-center gap-1 items-center -mt-12'>
          <IoIosMail className='text-[#F3A20C] w-[50px] h-[60px]' />
          <h1 className='font-bold text-[20px]'>Email</h1>
          <h5>For Admissions:</h5>
          <Link href={`mailto:info@brooksideschool.in`}>info@brooksideschool.in</Link>
          <h5>For Complaints:</h5>
          <Link href={`mailto:feedback@brooksideschool.in`}>feedback@brooksideschool.in</Link>        
        </div>
      </div>
    </div>
  );
}
