import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from next

import logo from "../../public/assets/images/logo.png";

const Footer = () => {
    return (
        <>
            <div className="max-w-full max-h-fit bg-[#e4e4e4] shadow-2xl">
                <div className="flex flex-row justify-between flex-wrap px-20 py-16 gap-10">
                    <div>
                        <img
                            src={logo.src}
                            alt="img-blur-shadow"
                            className="w-[251px] h-[64px]"
                        />
                        <div className="mt-[30px]">
                            <p className="text-[13px] sm:text-base">
                                Copyright © Brookside Global School 2024 | All Rights Reserved
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-10 md:gap-40">
                        <div>
                            <p>Quick Links</p>
                            <ul className="flex flex-col m-[5px] font-light">
                                <li>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p>Useful Links</p>
                            <ul className="flex flex-col gap-1 m-[5px] font-light">
                                <li>
                                    <Link href="/academics">
                                        Academics
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/activities">
                                        Activities
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/Blog">
                                        Blog
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/gallery">
                                        Gallery
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
