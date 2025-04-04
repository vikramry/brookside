"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import logo from "../../public/assets/images/logo.png";
import Image from "next/image";
import { title } from "process";

const Header = () => {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();

  const links = [
    {
      id: 1,
      link: "home",
      title:"Home"
    },
    {
      id: 2,
      link: "/about",
      title:"About"

    },
    {
      id: 3,
      link: "/academics",
      title:"Academics"

    },
    {
      id: 4,
      link: "/activities",
      title:"Activities"

    },
    {
      id: 5,
      link: "/blog",
      title:"Blog"

    },
    {
      id: 6,
      link: "/gallery",
      title:"Gallery"

    },

    {
      id: 7,
      link: "/contact",
      title:"Contact"

    },
  ];

  return (
    <div className=" container-fluid top-0 flex justify-center   w-full  text-black bg-white fixed nav z-10" style={{ zIndex:"9999"}}>
      <div className="container flex justify-between items-center h-20 px-4">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <Link
            className="link-underline link-underline-black"
            href="/"
          >
            <Image className="" width={173} height={44} src={logo} alt="logo" />
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className={`nav-links mx-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200 link-underline  ${pathname == `/${link.toLowerCase()}` ? "activeLink" : ""
              }
            ${pathname == "/" && link == "home" ? "activeLink" : ""}
            `

            }
          >
            <Link href={link == "home" ? "/" : link}>{title}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6 text-4xl ${pathname == `/${link.toLowerCase()}` ? "activeLink" : ""
                }`}
            >
              <Link onClick={() => setNav(!nav)} href={link === "home" ? "/" : link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default Header;
