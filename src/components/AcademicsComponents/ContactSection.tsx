import React from 'react'
import { IoLocationSharp, IoLogoInstagram } from "react-icons/io5";
import { FaPhoneAlt, FaYoutube } from "react-icons/fa";
import Link from 'next/link';
import { MdOutlineMail } from 'react-icons/md';
import Image from 'next/image';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';



const ContactSection = () => {
    return (
        <div className='bg-white py-24 flex justify-center gap-16 flex-wrap md:items-stretch items-center px-5 md:px-0'>
            <div className='bg-[#F6EFDD] rounded-2xl max-w-[360px] flex justify-start items-center flex-col p-6 gap-4'>
                <h5 className='font-bold text-xl'>Brookside Global School</h5>
                <div className='flex flex-col justify-start items-start w-full gap-3'>

                    <div className='flex justify-between items-center gap-4'>
                        <IoLocationSharp className='text-[#F3A20C] w-[50px] h-[60px]' />
                        <p className='text-base font-normal'>Plot No 9, Situated at Silpa Valley,
                            Near My Home Mangala, Kondapur,
                            Telangana 500084</p>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <FaPhoneAlt className='text-[#F3A20C] w-[18px] h-[23px]' />
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-lg font-bold'><Link href={`tel:040 4917 1111`}>040 4917 1111</Link></p>
                            <p className='text-base'>9:00 AM to 5:00 PM IST</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <MdOutlineMail className='text-[#F3A20C] w-[20px] h-[25px]' />
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-lg font-bold'><Link href={`mailto:info@brooksideschool.in`}>info@brooksideschool.in</Link></p>
                            <p className='text-base'>For Admissions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#F6EFDD] rounded-2xl p-10 flex justify-center items-center gap-16 flex-wrap'>
                <div className='flex flex-col justify-center items-center gap-8 text-sm text-[#2E2B4F]'>
                    <Link href={'https://instagram.com'} target='_blank'>
                        <p className='flex justify-start items-center gap-2'>
                            <IoLogoInstagram />
                            <span>Instagram</span>
                        </p>
                    </Link>
                    <Link href={'https://facebook.com'} target='_blank'>
                        <p className='flex justify-start items-center gap-2'>
                            <AiOutlineFacebook />
                            <span>Facebook</span>
                        </p>
                    </Link>
                    <Link href={'https://x.com'} target='_blank'>
                        <p className='flex justify-start items-center gap-2'>
                            <FaXTwitter />
                            <span>Twitter(X)</span>
                        </p>
                    </Link>
                    <Link href={'https://youtube.com'} target='_blank'>
                        <p className='flex justify-start items-center gap-2 -ml-2'>
                            <FaYoutube />
                            <span>Youtube</span>
                        </p>
                    </Link>
                </div>
                <div className='flex justify-center items-center gap-5 flex-wrap'>
                    <Image src='/assets/images/contact1.png' alt="contactImage1" width={158} height={158} />
                    <Image src='/assets/images/contact2.png' alt="contactImage2" width={158} height={158} />
                    <Image src='/assets/images/contact3.png' alt="contactImage3" width={158} height={158} />
                </div>
            </div>
        </div>
    )
}

export default ContactSection