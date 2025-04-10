"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import logo from "../../public/assets/images/logo.png";
import Image from "next/image";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const courseLinks = [
    { id: 1, link: "/best-school-for-play-group-in-kondapur-admissions-open-now", title: "Play Group" },
    { id: 2, link: "/best-preschool-in-kondapur", title: "Pre Schooling" },
  ];

  const links = [
    { id: 1, link: "home", title: "Home" },
    { id: 2, link: "/about", title: "About" },
    { id: 3, link: "/academics", title: "Academics" },
    { id: 4, link: "/activities", title: "Activities" },
    { id: 5, link: "/blog", title: "Blog" },
    { id: 6, link: "/gallery", title: "Gallery" },
    { id: 7, link: "/contact", title: "Contact" },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200); // 200ms delay before closing
  };

  return (
    <div className="container-fluid top-0 justify-center w-full text-black bg-white fixed nav z-10" style={{ zIndex: "9999" }}>
      
      <div className="container flex justify-between items-center h-20 px-4">
        <div>
          <h1 className="text-5xl font-signature ml-2">
            <Link className="link-underline link-underline-black" href="/">
              <Image className="" width={173} height={44} src={logo} alt="logo" />
            </Link>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center">
          {links.map(({ id, link, title }) => (
            <React.Fragment key={id}>
              <li
                className={`nav-links mx-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200 
                  ${pathname === `/${link.toLowerCase()}` ? "activeLink" : ""}
                  ${pathname === "/" && link === "home" ? "activeLink" : ""}`}
              >
                <Link href={link === "home" ? "/" : link}>{title}</Link>
              </li>

              {/* Insert Courses Dropdown after Academics */}
              {title === "Academics" && (
                <li
                  className="relative mx-4 capitalize font-medium text-gray-500 hover:text-black duration-200"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="cursor-pointer">Courses ▼</span>
                  {dropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                      {courseLinks.map(({ id, link, title }) => (
                        <li key={id} className="px-4 py-2 hover:bg-gray-100">
                          <Link href={link}>{title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Navigation */}
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link, title }) => (
              <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                <Link onClick={() => setNav(false)} href={link === "home" ? "/" : link}>
                  {title}
                </Link>

                {/* Insert mobile dropdown after Academics */}
                {title === "Academics" && (
                  <div className="mt-2 text-center">
                    <span className="cursor-pointer text-white text-xl" onClick={() => setDropdownOpen(!dropdownOpen)}>
                      Courses ▼
                    </span>
                    {dropdownOpen && (
                      <ul className="mt-2 bg-gray-800 text-white text-center rounded-md">
                        {courseLinks.map(({ id, link, title }) => (
                          <li key={id} className="px-4 py-2 hover:bg-gray-700">
                            <Link href={link} onClick={() => setNav(false)}>
                              {title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-full p-4 bg-black text-white">
      <div className="overflow-hidden whitespace-nowrap">
  <div className="inline-block animate-marquee text-md  text-white text-right">
    Admissions Open! | Contact Us today! +91 90321 88850 | 90321 88851
  </div>
</div>
      </div>
    </div>
  );
};

export default Header;
