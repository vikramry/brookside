import Header from "@/components/header";
import React from 'react';
import Image from "next/image";
import Bgimage from "../../public/assets/images/mainbg1.jpg";
import curve from "../../public/assets/images/curve.png";
import { FaCirclePlay } from "react-icons/fa6";
import goldShield from '../../public/assets/images/goldShield.png'
import greyShield from '../../public/assets/images/greyShield.png'
import AdmissionEnquiryForm from "@/components/admissionEnquiryForm";

export default function Home() {

  const data = [
    {
      image: goldShield,
      title: "Equips students for evolving global challenges.",
      color:"grey"
    },
    {
      image: greyShield,
      title: "Instills confidence for independent decision-making.",
      color:"gold"
    },
    {
      image: goldShield,
      title: "Cultivates innate potential in students.",
      color:"grey"
    },
    {
      image:greyShield,
      title:"Enables excellence in chosen paths.",
      color:"gold"
    },
    {
      image:goldShield,
      title:"Embraces a holistic approach to education.",
      color:"grey"
    },
    {
      image:greyShield,
      title:"Fosters values in thoughtful individuals.",
      color:"gold"
    }
  ]
  return (
    <main className="flex container-fluid min-h-screen flex-col items-center justify-between pt-20">
      <div className="container-fluid">
        {/* /assets/images/mainbg1.jpg */}
        <div
          className="w-full container-fluid"
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
                <Image className="w-fit" src={curve} alt="curve" />
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
        <div className="bg-lightBlue  w-screen flex items-center justify-center">
          <div className="container flex">
            <div className="w-1/2 flex flex-col gap-4 py-12">
              <span className="text-5xl font-playfair w-1/2">
                Learning Begins With Us
              </span>
              <span className="text-base text-purpleMain">
                Our objective is to equip  students with the necessary skills to
                confront the continuously evolving global challenges, instilling
                them the confidence to take risks and make independent
                decisions, and above all, fostering values that contribute to
                the development of thoughtful and engaged individuals. We are
                the best schools in hyderabad with low fees to  cultivate the
                innate potential of our students and enable them to excel in
                their chosen paths. The school is knows for its academic
                excellence and holistic approach in education focuses to be on
                top 10 best schools in hyderabad.
              </span>
             {data.map((item,index)=>(
              <div key={index} className="flex gap-4 items-center">
                <Image className="w-auto" src={item.image} alt="goldshield" />
                <span className={`text-base ${item.color=="gold"?"text-orMain":"text-purpleMain"}`}>{item.title}</span>
              </div>
             ))}
            </div>
            <div className="w-1/2 ">
            <AdmissionEnquiryForm/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
