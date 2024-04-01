"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import logo from "../../public/assets/images/logo.png";
import Image from "next/image";

const Header = () => {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();
  console.log("🚀 ~ Header ~ pathname:", pathname);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "academics",
    },
    {
      id: 4,
      link: "Activities",
    },
    {
      id: 5,
      link: "Blog",
    },
    {
      id: 6,
      link: "Gallery",
    },

    {
      id: 7,
      link: "contact",
    },
  ];

  return (
    <div className="flex container justify-between items-center w-full h-20 px-4 text-black bg-white fixed nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <Image className="w-auto" src={logo} alt="logo"/>
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`nav-links mx-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200 link-underline  ${
              pathname == `/${link.toLowerCase()}` ? "activeLink" : ""
            }
            ${pathname == "/" && link == "home" ? "activeLink" : ""}
            `
          
        }
          >
            <Link href={link == "home" ? "/" : link}>{link}</Link>
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
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6 text-4xl ${
                pathname == `/${link.toLowerCase()}` ? "activeLink" : ""
              }`}
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
