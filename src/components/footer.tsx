"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from next
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import wtsappImg from '../../public/assets/images/wtsappImg.png'

import logo from "../../public/assets/images/logo.png";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaArrowUp, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      <div className="max-w-full max-h-fit bg-[#e4e4e4] shadow-2xl">
        <div className="flex flex-row justify-between flex-wrap px-20 sm:px-20 py-16 gap-10 ">
          <div>
            <img
              src={logo.src}
              alt="img-blur-shadow"
              className="w-[251px] h-[64px]"
            />
            <div className="mt-4 flex justify-start pl-12 items-center gap-8 sm:!hidden">
              <Link
                target="_blank"
                href={"https://www.instagram.com/Brookside_school.kondapur"}
                className="text-2xl"
              >
                <FaInstagram />
              </Link>
              <Link
                target="_blank"
                href={"https://www.facebook.com/brooksideglobalschool"}
                className="text-2xl"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                target="_blank"
                href={"https://x.com/BrooksideS3384"}
                className="text-2xl"
              >
                <FaXTwitter />
              </Link>
              <Link
                target="_blank"
                href={"https://www.youtube.com/@BrooksideGlobalSchool"}
                className="text-2xl"
              >
                <FaYoutube />
              </Link>
            </div>
            <div className="mt-[30px]">
              <p className="text-[13px] sm:text-base sm:text-center">
                Copyright © Brookside Global School 2024 | All Rights Reserved
              </p>
            </div>
          </div>
          <hr className="h-1 w-available bg-[#F3A20C] md:hidden" />
          <div className="flex flex-row flex-wrap gap-10 md:gap-40 justify-center ">
            <div className=" rounded-2xl p-10  flex justify-center items-center gap-16 flex-wrap sm:px-4 sm:py-5 sm:gap-8 md:hidden">
              <div className="flex flex-col justify-center items-center gap-8 text-sm text-[#2E2B4F] sm:gap-4 sm:text-xl">
                <div className="flex gap-4 justify-start sm:items-center">
                  <Link
                    href={"https://www.instagram.com/Brookside_school.kondapur"}
                    target="_blank"
                  >
                    <p className="flex justify-start items-center gap-2">
                      <FaInstagram />
                      <span>Instagram</span>
                    </p>
                  </Link>
                  <Link
                    href={"https://www.facebook.com/brooksideglobalschool"}
                    target="_blank"
                  >
                    <p className="flex justify-start items-center gap-2">
                      <FaFacebookSquare />
                      <span>Facebook</span>
                    </p>
                  </Link>
                </div>
                <div className="flex gap-8 justify-start">
                  <Link href={"https://x.com/BrooksideS3384"} target="_blank">
                    <p className="flex justify-start items-center gap-2">
                      <FaXTwitter />
                      <span>Twitter(X)</span>
                    </p>
                  </Link>
                  <Link
                    href={"https://www.youtube.com/@BrooksideGlobalSchool"}
                    target="_blank"
                  >
                    <p className="flex justify-start items-center gap-2 -ml-2">
                      <FaYoutube />
                      <span>Youtube</span>
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center gap-5 flex-wrap sm:!hidden">
                <Image
                  src="/assets/images/contact1.png"
                  alt="contactImage1"
                  width={158}
                  height={158}
                />
                <Image
                  src="/assets/images/contact2.png"
                  alt="contactImage2"
                  width={158}
                  height={158}
                />
                <Image
                  src="/assets/images/contact3.png"
                  alt="contactImage3"
                  width={158}
                  height={158}
                />
              </div>
            </div>
            <hr className="h-1 w-available bg-[#F3A20C] md:hidden" />

            <div>
              <p className="font-bold">Quick Links</p>
              <ul className="flex flex-col m-[5px] font-light sm:font-normal">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Useful Links</p>
              <ul className="flex flex-col gap-1 m-[5px] font-light sm:font-normal">
                <li>
                  <Link href="/academics">Academics</Link>
                </li>
                <li>
                  <Link href="/activities">Activities</Link>
                </li>
                {/* <li>
                                    <Link href="/Blog">
                                        Blog
                                    </Link>
                                </li> */}
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
            <div>
              {isVisible && (
                <span
                  onClick={scrollToTop}
                  className="text-[#F3A20C] cursor-pointer fixed right-5 bottom-5 flex items-center gap-1 text-sm"
                >
                  {/* <span>Back to the top</span> */}
                  <span className="text-gold border-2 rounded-full p-2 border-[#F3A20C]">
                    <FaArrowUp />
                  </span>
                </span>
              )}
            </div>
            <div>
            <a href="https://wa.me/+919032188851" target="_blank" className="cursor-pointer fixed right-3 bottom-20">
                <Image src={wtsappImg} alt="wtsapp" className="w-12 h-auto " />
                </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
