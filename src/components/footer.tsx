import React from "react"
import Image from "next/image"
import logo from '../../public/assets/images/logo.png'
const Footer=()=>{
    return(
        <>
        <div className="max-w-full max-h-fit bg-[#e4e4e4] shadow-2xl ">
            <div className="flex flex-row justify-between">
            <div className="p-20">
       
            <img
              src={logo.src}
              alt="img-blur-shadow"
            className="  w-[251px] h-[64px] animate-bounce"
            />
            <div className="mt-[50px]">
            <text >Copyright © Brookside Global School 2024 | All Rights Reserved</text>
            </div>

            </div>
            <div className="p-20 flex flex-row flex-wrap gap-40">
                <div>
            <text>Quick Links</text>
            <ul className="flex flex-col  m-[5px] font-light ">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
            
                </div>  
                <div>
                <text>Usefull Links</text>
                <ul className="flex flex-col gap-1 m-[5px] font-light">
            <li>Academics</li>
            <li>Activities</li>
            <li>Blog</li>
            <li>Gallery</li>
            </ul>
                </div>

            </div>
            </div>
        </div>
        </>

    )
}
export default Footer