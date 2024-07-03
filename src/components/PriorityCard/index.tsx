'use client'
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

export type CardProps = {
    img: StaticImageData;
    text:String
    // userName: string;
}

export default function PriorityCard({ img, text }: CardProps) {


    return (
        <div className="rounded overflow-hidden w-22em flex flex-col gap-4 sm:p-0 sm:m-5 sm:gap-2 radiuscls sm:w-5/6">
            <Image className="mt-2 h-auto brightness-50 sm:mt-0" src={img} alt="Avatar of Jonathan Reinink" />
            <h3 className='text-white font-playfair text-3xl font-bold relative bottom-14 flex justify-center sm:text-4xl sm:px-4'>{text}</h3>
           
            {/* <a className='text-orMain underline sm:text-xs' href='/'>Read more...</a> */}
        </div>
    );
}
