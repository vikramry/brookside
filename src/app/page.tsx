import Header from "@/components/header";
import React from "react";
import Image from "next/image";
import b1 from "../../public/assets/images/b1.png";
import b2 from "../../public/assets/images/b2.png";
import b3 from "../../public/assets/images/b3.png";
import curve from "../../public/assets/images/curve.png";
import { FaCirclePlay } from "react-icons/fa6";
import goldShield from "../../public/assets/images/goldShield.png";
import greyShield from "../../public/assets/images/greyShield.png";
import AdmissionEnquiryForm from "@/components/admissionEnquiryForm";
import CurouselComponent from "@/components/curousel";
import decorImg from "../../public/assets/images/pagedecor.png";
import Card2 from "@/components/card2";
import allMix from "../../public/assets/images/allMix.png";
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
  return (
    <main className="flex container-fluid min-h-screen bg-white w-screen flex-col items-center justify-between ">
      <div className="w-full bg-white">
        {/* /assets/images/mainbg1.jpg */}
        <div
          className="w-full "
          style={{
            backgroundImage: `url('/assets/images/mainbg1.jpg')`,
            padding: "40px",
            border: "1px solid",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="w-1/2 flex flex-col gap-8 h-4/5 pl-12">
              <div className="flex gap-4">
                <span className="font-playfair text-7xl font-bold">
                  We are the{" "}
                </span>
                <span className="flex flex-col ">
                  <span className="font-playfair text-7xl font-bold text-orMain">
                    future
                  </span>
                  {/* <img  className="w-fit h-3" src={curve.src} alt="curve" /> */}
                </span>
              </div>
              <span className="text-2xl w-4/5">
                We strike to make leaders of tomorrow, Equipping them with the
                skills and knowledge to make them future ready.
              </span>
              <div className="flex gap-4">
                <button className="bg-orMain text-white px-4 py-2 rounded text-xs font-bold ">
                  <a href="/contact">LEARN MORE</a>
                </button>
                <button className="bg-transparent hover:bg-dGrey text-dGrey font-semibold hover:text-white py-2 px-4 border border-dGrey hover:border-transparent rounded flex gap-2">
                  <FaCirclePlay className="hover:text-white hover:fill-white" />
                  <span>Video</span>
                </button>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
        <div className="bg-lightBlue w-full flex items-center justify-center rounded-b-10em">
          <div className="flex flex-col items-center">
            <div className="container flex ">
              <div className="w-1/2 flex flex-col gap-4 py-12">
                <span className="text-5xl font-playfair w-1/2">
                  Learning Begins With Us
                </span>
                <span className="text-base text-purpleMain">
                  Our objective is to equip  students with the necessary skills
                  to confront the continuously evolving global challenges,
                  instilling them the confidence to take risks and make
                  independent decisions, and above all, fostering values that
                  contribute to the development of thoughtful and engaged
                  individuals. We are the best schools in hyderabad with low
                  fees to  cultivate the innate potential of our students and
                  enable them to excel in their chosen paths. The school is
                  knows for its academic excellence and holistic approach in
                  education focuses to be on top 10 best schools in hyderabad.
                </span>
                {data.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <Image
                      className="w-auto"
                      src={item.image}
                      alt="goldshield"
                    />
                    <span
                      className={`text-base ${
                        item.color == "gold" ? "text-orMain" : "text-purpleMain"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <div className="w-2/3 shadow-xl ">
                  <AdmissionEnquiryForm />
                </div>
              </div>
            </div>
            <div className="bg-[#E5F6D4] w-4/5 flex justify-center p-12 font-playfair text-3xl flex-col items-baseline gap-8 relative top-24">
              <div className="w-3/5 flex flex-col items-baseline gap-8">
                <span>
                  We aim at inspiring our students to dream more, learn more, do
                  more, and become more in their respective journeys of life.
                </span>
                <span className="text-sm ">- Director, Brookside</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-32 bg-white w-full"></div>
        <div className="py-16">
          <div className="flex justify-center">
            <span className="font-playfair text-3xl text-purpleMain">
              Parent’s Review
            </span>
          </div>
          <CurouselComponent />
        </div>
        <div
          className="w-full py-40 flex items-center justify-center"
          style={{
            backgroundImage: `url('/assets/images/pagedecor.png')`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container  flex flex-col gap-12 items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <span className="text-purpleMain text-3xl font-bold">
                Ages We meet kids where they are
              </span>
            </div>
            <div className="flex gap-12">
              <Card2
                img={b1}
                grade="IK1-IK3"
                desc="We focus on helping children discover and explore their surroundings, while also develop their language skills and foster a scientific mindset. We also aim to equip children with new-age skills that prepares them for the future. To promote... "
              />
              <Card2
                img={b2}
                grade="Grade 1-2"
                desc="We place great emphasis on promoting interaction among students, cultivating their creativity, and enhancing their imagination through engaging art and music activities. To ensure effective learning, we provide age-appropriate learning materials... "
              />
              <Card2
                img={b3}
                grade="Grade 3-5"
                desc="We focus on developing students' vocabulary, attention span, reading, and writing skills through innovative and engaging teaching methods. By encouraging active participation and providing personalized feedback, we ensure that every... "
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-20">
          <div className="container w-full flex items-center flex-col justify-center">
            <div className="flex gap-2 items-baseline">
              <span className="text-orMain text-7xl font-bold">ILC’s -</span>
              <span className="text-purpleMain text-4xl font-bold">
                Innovative Learning Centres
              </span>
            </div>

            <div className="w-full container pt-16 flex">
              <div className=" w-1/3 flex flex-col gap-16">
                <div className="flex flex-col gap-8">
                  <span className="text-4xl activeLink font-playfair font-bold w-fit">
                    Art & Craft Corner
                  </span>
                  <span className="text-base w-3/5">
                    Our Art and Craft Corner where creativity knows no bounds is
                    a place where students can explore their imagination and
                    develop their artistic skills in a fun and engaging way.
                  </span>
                </div>
                <div className="flex flex-col gap-8">
                  <span className="text-4xl activeLink font-playfair font-bold w-fit">
                    Role Play Area
                  </span>
                  <span className="text-base w-3/5">
                    Our Role Play area provides a dynamic and immersive learning
                    experience for our students. By assuming different roles and
                    scenarios, our students develop important social and
                    emotional skills such as empathy, communication,
                    problem-solving and teamwork.
                  </span>
                </div>
                <div className="flex flex-col gap-8">
                  <span className="text-4xl activeLink font-playfair font-bold w-fit">
                    Dance & Drama Studio
                  </span>
                  <span className="text-base w-3/5">
                    Our Dance and Drama studio provides a vibrant and creative
                    space for our students to explore the world of performing
                    arts. Through dance and drama activities, our students
                    develop self-expression, confidence, teamwork and
                    creativity.
                  </span>
                </div>
              </div>
              <div className="w-2/3">
                <img src={allMix.src} alt="allmix" />
              </div>
            </div>
            <div className="w-screen flex items-center justify-center bg-lightBlue h-40 ">
              <button className="bg-purpleMain text-white px-4  py-2 h-fit rounded text-base font-bold flex items-center gap-4 ">
                <a href="/activities">Explore all activities</a>
                <FaArrowRight className="text-base" />
              </button>
            </div>
            <div className="bg-white w-full py-20 flex gap-12">
              <div className="w-2/6 flex flex-col items-baseline p-16 gap-8 bg-[#F6EFDD]">
                <div className="flex w-full justify-center">

                <span className="text-purpleMain text-xl font-bold">
                  Brookside Global School
                </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-xl text-orMain">
                  <FaLocationDot />
                  </span>
                  <span>
                    Plot No 9, Situated at Silpa Valley, Near My Home Mangala,
                    Kondapur, Telangana 500084
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-xl text-orMain">
                  <FaPhone />
                  </span>
                  <span className="flex flex-col">
                   <span className="text-base font-semibold">040 4917 1111</span>
                   <span className="text-sm font-light">9:00 AM to 5:00 PM IST</span>
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-xl text-orMain">
                  <FaEnvelope />
                  </span>
                  <span className="flex flex-col">
                   <span className="text-base font-semibold">info@brooksideschool.in</span>
                   <span className="text-sm font-light">For Admissions</span>
                  </span>
                </div>
              </div>
              <div className="w-4/6 flex items-center p-16 gap-6 bg-[#F6EFDD]">
                <div className="flex flex-col gap-8">
                  <span className="flex gap-2 items-center">
                    <span className="text-base"><FaInstagram/></span>
                    
                    <span className="text-base">instagram</span>
                    </span>
                    <span className="flex gap-2 items-center">
                      <span className="text-base"><FaFacebookSquare/></span>

                    <span className="text-base">facebook</span>
                    </span>
                    <span className="flex gap-2 items-center">
                      <span className="text-base"><FaTwitter/></span>

                    <span className="text-base">twitter</span>
                    </span>
                    <span className="flex gap-2 items-center">
                      <span className="text-base"><FaYoutube/></span>

                    <span className="text-base">youtube</span>
                    </span>

                  {/* <span>facebook</span>
                  <span>twitter</span>
                  <span>youtube</span> */}
                </div>
                <img className="w-44" src={k1.src} alt="k1"/>
                <img className="w-44"  src={k2.src} alt="k2"/>
                <img className="w-44"  src={k3.src} alt="k3"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
