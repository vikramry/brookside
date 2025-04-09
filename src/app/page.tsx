import Header from "@/components/header";
import React from "react";
import Image from "next/image";
import b1 from "../../public/assets/Ages/b1.png";
import b2 from "../../public/assets/Ages/b2.png";
import b3 from "../../public/assets/Ages/b3.png";
import b4 from "../../public/assets/Ages/b4.png";
import curve from "../../public/assets/images/curve.png";
import { FaCirclePlay } from "react-icons/fa6";
import goldShield from "../../public/assets/images/goldShield.png";
import greyShield from "../../public/assets/images/greyShield.png";
import AdmissionEnquiryForm from "@/components/admissionEnquiryForm";
import CurouselComponent from "@/components/curousel";
import decorImg from "../../public/assets/images/pagedecor.png";
import Card2 from "@/components/card2";
import allMix from "../../public/assets/ILC/allMix.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import k1 from "../../public/assets/images/k1.png";
import k2 from "../../public/assets/images/k2.png";
import k3 from "../../public/assets/images/k3.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import ContactSection from "@/components/AcademicsComponents/ContactSection";
import type { Metadata } from "next";
import mainBanner from "../../public/assets/images/mainBanner.png";
import whyChooseImg from "../../public/assets/images/WhyChoseus.png";
import mainmobilebanner from "../../public/assets/images/mainmobilebanner.png";
import busImg from "../../public/assets/images/BusImage.png";
import PopUpBanner from "@/components/pop-up-banner";

export const metadata: Metadata = {
  title: "Best Primary School in Kondapur, Hyderabad",
  description:
    "Welcome to Brookside Global School, where young minds bloom! We are the Best Primary School in Kondapur, Hyderabad. Join us on an exciting educational journey tailored to inspire and empower our students for a lifetime of success.",
  keywords:
    "Best Primary School in Kondapur - Hyderabad, Best Primary School in Hyderabad, Best Pre Primary Schools in Hyderabad'",
};

export default function Home() {
  const data = [
    {
      image: goldShield,
      title: "Equips students for evolving global challenges.",
      color: "grey",
    },
    {
      image: greyShield,
      title: "Instills confidence for independent decision-making.",
      color: "gold",
    },
    {
      image: goldShield,
      title: "Cultivates innate potential in students.",
      color: "grey",
    },
    {
      image: greyShield,
      title: "Enables excellence in chosen paths.",
      color: "gold",
    },
    {
      image: goldShield,
      title: "Embraces a holistic approach to education.",
      color: "grey",
    },
    {
      image: greyShield,
      title: "Fosters values in thoughtful individuals.",
      color: "gold",
    },
  ];
  //   Art and Craft Zone
  // Language lab experience
  // STEAM (Science, Technology, Engineering, Arts and Mathematics) corner
  // Dance and Drama studio
  // Day care center
  // Role Play area
  // Play Area
  // Transportation facility
  // AV Room
  // Comprehensive curriculum
  // Experienced and caring faculty
  // Library
  // Affordable fee structure
  // Exciting Summer Camps at Kondapu

  const whyChooseData = [
    {
      image: goldShield,
      title: "Art and Craft Zone",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Language lab experience",
      color: "grey",
    },
    {
      image: goldShield,
      title:
        "STEAM (Science, Technology, Engineering, Arts and Mathematics) corner",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Dance and Drama studio",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Day care center",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Role Play area ",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Transportation facility",
      color: "grey",
    },
    {
      image: goldShield,
      title: "AV Room",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Comprehensive curriculum",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Experienced and caring faculty",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Library",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Affordable fee structure",
      color: "grey",
    },
    {
      image: goldShield,
      title: "Exciting Summer Camps at Kondapur",
      color: "grey",
    },
  ];

  return (
    <main className="flex container-fluid min-h-screen bg-white w-full max-w-full flex-col items-center justify-between">
      {/* <PopUpBanner /> */}

      <div className="w-full bg-white">
        {/* Main Banner for larger screens */}
        <div
          className="hidden md:flex items-center justify-start p-4 md:p-8 lg:p-12"
          style={{
            backgroundImage: `url('/assets/images/mainBannerwithImg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "70vh", // Default height
            minHeight: "300px", // Set a minimum height for mobile visibility
          }}
        >
          <div className="w-full flex">
            {/* Left Container */}
            <div
              className="w-2/5 flex flex-col justify-start ml-4"
              style={{
                marginTop: "20px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-playfair leading-tight">
                We Cover it All,
                <br />
                <span className="bg-orMain text-black mt-4 mb-2 px-2 py-1 rounded inline-block">
                  Play Group to Primary Schooling
                </span>
                <br />
                <span className="flex flex-col sm:flex-row mt-2">
                  <span>in Kondapur, Hyderabad!</span>
                </span>
              </h1>
              <span className="text-sm mt-4 md:text-base text-white font-roboto  hidden md:block">
                At Brookside, we believe that every child is unique and full of
                ability. Our dedicated and passionate teachers build a nurturing
                and holistic environment in which curiosity thrives and learning
                becomes an exciting adventure. Our primary school is located at
                Kondapur, Hyderabad. We believe in both traditional values and
                modern educational practices.
              </span>
              <div className="flex gap-4 mt-4">
                <a
                  href="/about"
                  className="bg-orMain text-black font-roboto px-4 py-2 rounded text-xs font-bold"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
            {/* Optional Space to Fill Remaining Width */}
            <div className="w-3/5"></div>{" "}
            {/* This div takes the remaining space */}
          </div>
        </div>

        {/* Mobile Banner for smaller screens */}
        <div className="md:hidden">
          <a href="/about">
            <Image
              src={mainmobilebanner}
              alt="mainBanner"
              className="w-full h-auto"
            />
          </a>
        </div>

        {/* Admission Form Section */}
        <div className="bg-lightBlue w-full flex items-center justify-center rounded-b-10em">
          <div className="flex flex-col items-center w-full">
            <div className="container px-4 lg:px-10 flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 flex flex-col gap-4 py-12 lg:block hidden">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
                  Your child's success story starts here!!!
                </h2>
                <span className="text-sm md:text-base text-purpleMain font-roboto text-justify mb-4">
                  Our goal is to give kids the necessary skills to confront the
                  continuously evolving global challenges, instil the confidence
                  to take risks and make independent decisions, and above all,
                  foster values that contribute to developing thoughtful and
                  engaged individuals. We are the best, affordable Pre-Primary
                  and primary schools in Kondapur, Hyderabad, helping students
                  fulfil their natural abilities and succeed in their chosen
                  fields. We are also known for academic excellence and holistic
                  approach to education focusing on the top 10 best primary
                  schools in Kondapur, Hyderabad.
                </span>
                {data.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center mt-4">
                    <Image
                      className="w-auto"
                      src={item.image}
                      alt="goldshield"
                    />
                    <span
                      className={`text-sm md:text-base ${
                        item.color === "gold"
                          ? "text-orMain"
                          : "text-purpleMain"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
                <div className="w-full lg:w-2/3 shadow-xl">
                  <AdmissionEnquiryForm />
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col gap-4 py-12 lg:hidden">
                <span className="text-3xl md:text-4xl lg:text-5xl font-playfair">
                  Your child's success story starts here!!!
                </span>
                <span className="text-sm md:text-base text-purpleMain font-roboto text-justify mb-4">
                  Our goal is to give kids the necessary skills to confront the
                  continuously evolving global challenges, instil the confidence
                  to take risks and make independent decisions, and above all,
                  foster values that contribute to developing thoughtful and
                  engaged individuals. We are the best, affordable Pre-Primary
                  and primary schools in Kondapur, Hyderabad, helping students
                  fulfil their natural abilities and succeed in their chosen
                  fields. We are also known for academic excellence and holistic
                  approach to education focusing on the top 10 best primary
                  schools in Kondapur, Hyderabad.
                </span>
                {data.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center mt-4">
                    <Image
                      className="w-auto pl-2 w-10"
                      src={item.image}
                      alt="goldshield"
                    />
                    <span
                      className={`text-sm md:text-base ${
                        item.color === "gold"
                          ? "text-orMain"
                          : "text-purpleMain"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Section */}
            <div className="bg-[#E5F6D4] w-11/12 flex justify-center p-4 md:p-8 font-playfair text-xl md:text-2xl lg:text-3xl flex-col items-baseline gap-4 md:gap-8 relative -mb-24 rounded-lg">
              <div className="flex items-center justify-center">
                <div className="w-full md:w-4/5 flex flex-col items-baseline gap-4 md:gap-8">
                  <div className="flex flex-col font-roboto">
                    <span className="quotation quotadesk text-4xl md:text-5xl lg:text-6xl w-fit font-bold text-orMain relative">
                      "
                    </span>
                    <span>
                      We aim at inspiring our students to dream more, learn
                      more, do more, and become more in their respective
                      journeys of life.
                    </span>
                  </div>
                  <span className="text-sm">- Director, Brookside</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        {/* Why Choose Brookside Section */}
        <div className="bg-lightBlue w-full flex items-center justify-center mt-20 md:mt-32 py-12">
          <div className="container px-4 lg:px-10 flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/5 flex justify-center items-center mb-8 lg:mb-0">
              <Image
                src={whyChooseImg}
                alt="why choose"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-3/5 flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair">
                Why choose Brookside Global Primary School for your kid?
              </h2>
              <span className="text-sm md:text-base font-roboto text-purpleMain">
                {/* ... (keep existing content) */}
                Our goal is to give kids the necessary skills to confront the
                continuously evolving global challenges, instil the confidence
                to take risks and make independent decisions, and above all,
                foster values that contribute to developing thoughtful and
                engaged individuals. We are the best, affordable Pre-Primary and
                primary schools in Kondapur, Hyderabad, helping students fulfil
                their natural abilities and succeed in their chosen fields. We
                are also known for academic excellence and holistic approach to
                education focusing on the top 10 best primary schools in
                Kondapur, Hyderabad.
              </span>
              {whyChooseData.map((item, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <Image className="w-auto" src={item.image} alt="icon" />
                  <span
                    className={`text-sm md:text-base ${
                      item.color === "gold" ? "text-orMain" : "text-purpleMain"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Parents Review Section */}
        <div className="py-16">
          <div className="flex justify-center container px-4">
            <span className="font-playfair text-2xl md:text-3xl text-purpleMain">
              Parent's Review
            </span>
          </div>
          <CurouselComponent />
        </div>

        {/* Ages We Meet Section */}
        <div className="w-full py-20 md:py-40 flex items-center justify-center desktopbg">
          <div className="container px-4 lg:px-10 flex flex-col gap-8 md:gap-12 items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-purpleMain text-2xl md:text-3xl font-playfair font-bold text-center">
                Ages we meet kids where they are
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full font-roboto">
              <Card2 img={b1} grade="IK1-IK3" desc="" />
              <Card2 img={b2} grade="Grade 1-2" desc="" />
              <Card2 img={b3} grade="Grade 3-5" desc="" />
              <Card2 img={b4} grade="Day Care Center" desc="" />
            </div>
          </div>
        </div>

        {/* Transport Facility Section */}
        <div className="bg-lightBlue w-full flex items-center justify-center py-12">
          <div className="container px-4 lg:px-10 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 flex flex-col gap-4 mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair">
                We also provide Transportation facilities
              </h2>
              <span className="text-sm md:text-base font-roboto text-purpleMain">
                Brookside Global School offers transportation facilities to
                ensure our students safety and security. We include modern
                safety features in our transportation because the safety and
                wellbeing of every child during the trip is our top priority. We
                make sure that transportation facilities are available to every
                student; the transportation service at Brookside covers a larger
                area; and we ensure that students from various areas can easily
                access the school.
              </span>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <Image src={busImg} alt="bus" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* ILC's Innovative Learning Centres Section */}
        <div className="flex justify-center pt-20">
          <div className="w-full flex items-center flex-col justify-center">
            <div className="flex flex-col md:flex-row gap-2 items-baseline md:items-center">
              <h2 className="text-purpleMain font-playfair text-2xl md:text-4xl font-bold">
                <span className="text-orMain text-4xl md:text-7xl font-bold">
                  ILC's{" "}
                </span>
                innovative learning centres
              </h2>
            </div>
            {/* <div className="w-full md:w-3/4 mt-8">
              <img src={allMix.src} alt="allmix" className="w-full h-auto" />
            </div> */}
            <div className="w-full container px-4 lg:px-10 pt-16 flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 flex flex-col gap-8 mb-8 lg:mb-0">
                <div className="flex flex-col gap-4">
                  <span className="text-2xl md:text-4xl activeLink font-playfair font-bold">
                    Art & Craft Corner
                  </span>
                  <span className="text-sm md:text-base font-roboto">
                    {/* ... (keep existing content) */}
                    Our Art and Craft Corner where creativity knows no bounds is
                    a place where students can explore their imagination and
                    develop their artistic skills in a fun and engaging way.
                    Different Art and craft activities for primary schoolers
                    provide a sense of achievement and build confidence.
                    Students can also enroll for summer camps at kondapur,
                    Hyderabad for more exciting activities.
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-2xl md:text-4xl activeLink font-playfair font-bold">
                    Role Play Area
                  </span>
                  <span className="text-sm md:text-base font-roboto">
                    {/* ... (keep existing content) */}
                    Our Role Play area provides a dynamic and immersive learning
                    experience for our students. By assuming different roles and
                    scenarios, our students develop important social and
                    emotional skills such as empathy, communication,
                    problem-solving and teamwork. We welcome every student to
                    enroll in our primary school kondapur, Hyderabad. It's going
                    to be every exciting and fun learning.
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-2xl md:text-4xl activeLink font-playfair font-bold">
                    Dance & Drama Studio
                  </span>
                  <span className="text-sm md:text-base font-roboto">
                    {/* ... (keep existing content) */}
                    Our Dance and Drama studio provides a vibrant and creative
                    space for our students to explore the world of performing
                    arts. Through dance and drama activities, our students
                    develop self-expression, confidence, teamwork and
                    creativity. Come and enjoy a perfect blend of study and fun
                    with the many summer camp programmes offered by Brookside
                    global School in Kondapur, Hyderabad.
                  </span>
                </div>
              </div>
              <div
                className="w-full lg:w-2/3 mt-8 lg:mt-0"
                style={{ zIndex: "999" }}
              >
                <img src={allMix.src} alt="allmix" className="w-full h-auto" />
              </div>
            </div>
            <div className="w-full flex items-center justify-left bg-lightBlue h-40 exploresec">
              <a
                href="/activities"
                className="bg-purpleMain text-white px-4 py-2 rounded text-base font-bold flex items-center gap-4 font-playfair"
              >
                Explore all activities
                <FaArrowRight className="text-base" />
              </a>
            </div>
            <ContactSection />
          </div>
        </div>
      </div>
    </main>
  );
}
