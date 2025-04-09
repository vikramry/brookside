"use client"
import React, { useState } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import preschoolBannerDesk from "../../../public/assets/images/BS-Preschool-Banner.png";
import preSchoolBannerMobile from "../../../public/assets/images/preSchoolBannerMobile.png";
import AdmissionEnquiryForm from "@/components/admissionEnquiryForm";
import Accordion from "@/components/Accordian";
import ContactCards from "@/components/contactPaceCards";
import Hwtcok from "../../../public/assets/playgroup/2.png";
import Hwekil from "../../../public/assets/playgroup/1.png";
import Hpgmtjp from "../../../public/assets/playgroup/3.png";


export const metadata: Metadata = {
  title: "Best School for Playgroup in Kondapur | Admissions Open Now",
  description:
    "Looking for the best school for playgroup in Kondapur? We nurture little learners with engaging activities in a safe environment. Admissions open—enquire about fees, timings & more! ",
  keywords:
    "Best school for playgroup in Kondapur, playgroup admissions, early childhood education, best preschool in Kondapur, safe learning for kids, playgroup fees and timings ",
};

export default function BestPlaySchoool() {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleAccordion = (index:any) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  const accordianData = [
    {
      title: "What is the right age for Play Group?",
      content:
        "Play Group is ideal for children aged 1.5 to 3 years, helping them transition into a structured learning environment. ",
    },
    {
      title:
        " What are the school timings for Play Group?",
      content:
        " We offer flexible timings to suit different schedules. Contact us for details on session options. ",
    },
    {
      title:
        "Do you provide transportation?",
      content:
      "Yes! We have a safe and reliable transport facility with trained staff to ensure your child’s comfort."
    },
    {
      title:
        "What is the fee structure? ",
      content:
        "Our affordable fee structure varies based on the program and facilities opted. Contact us for detailed fee information.",
    },
    {
      title:
        "Can parents visit the school before admission? ",
      content:
        "Absolutely! We encourage parents to book a school tour to see our facilities and meet our teachers. ",
    },
  ];
  return (
    <main className=" flex container-fluid min-h-screen bg-white w-full max-w-full flex-col items-center lg:w-full ">
      {/* banner */}
      <div className="w-full flex items-center h-full sm:!h-auto  ">
        <Image
          src={preschoolBannerDesk}
          alt="preschool"
          className="h-full sm:hidden"
        />
        <Image
          src={preSchoolBannerMobile}
          alt="preschool"
          className="h-full md:hidden"
        />
      </div>
      {/* admission enquiry lightBlue*/}
      <div className=" bg-white w-full flex items-center py-4 justify-center">
        <div className="flex flex-col sm:flex-col-reverse items-center sm:w-full">
          <div className="container px-10 sm:px-5 flex sm:flex-col-reverse ">
            <div className="w-1/2 text-lg sm:text-md lg:text-justify sm:text-center font-normal sm:full flex flex-col  justify-center gap-4 sm:gap-6 sm:w-full ">
            <h1 className="text-purpleMain text-3xl font-playfair font-bold sm:text-xl">A Loving & Engaging Environment for Young Learners</h1>
              <span>
              At Brookside Global School, we understand that a child’s early years are crucial for their development. Our Play Group program is designed to provide a warm, safe, and stimulating environment where your little one begins their learning journey with joy. We believe that Play Group is not just about play—it’s about exploration, social skills, creativity, and early cognitive development. 
              </span>
            </div>
            <div className="w-1/2 flex justify-center items-center sm:w-full sm:p-8">
              <div className="w-2/3 shadow-xl sm:w-full sm:shadow-none ">
                <AdmissionEnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How We Take Care of Our Kids [#E5F6D4]*/}
      <div className="w-full py-20 flex items-center justify-center sm:py-20 bg-lightBlue ">
        <div className="container  lg:px-10 flex flex-col gap-12 items-center justify-center sm:gap-0">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-purpleMain text-3xl font-playfair font-bold sm:text-xl">
            How We Take Care of Our Kids
            </h2>
          </div>
          <div className=" flex gap-12 w-full font-roboto justify-center sm:gap-6 sm:flex-col sm:items-center">
          <div className="w-1/2 text-lg sm:text-md lg:text-justify sm:text-center font-normal sm:full flex flex-col  justify-center gap-4 sm:gap-6 sm:w-full ">
             <h3 className="text-purpleMain text-xl font-playfair font-bold sm:text-xl">We prioritize your child’s well-being by ensuring:</h3>
               <ul>
                <li className="mb-4"><span className="text-purpleMain text-md font-bold">Safe & Hygienic Classrooms</span> – Child-friendly furniture, clean play areas, and safety measures. 
                </li>
                <li className="mb-4"><span className="text-purpleMain text-md font-bold">Caring & Trained Educators </span>– Our teachers provide warmth, patience, and attention to every child. 
                </li>
                <li className="mb-4"><span className="text-purpleMain text-md font-bold">Nutritious Snacks & Meals </span>– Encouraging healthy eating habits for growing minds.  
                </li>
                <li className="mb-4"><span className="text-purpleMain text-md font-bold">Secure Campus & CCTV Surveillance </span>– Your child’s safety is our top priority.  
                </li>
               </ul>
            </div>
            <div className="w-1/2 flex justify-center items-center sm:w-full sm:p-8">
              <div className="w-2/3 shadow-xl sm:w-full sm:shadow-none ">
              <Image
          src={Hwtcok}
          alt="preschool"
          className="h-full sm:hidden"
        />
              </div>
            </div>
             
             
          </div>
        </div>
      </div>

       {/* How We Engage Kids in Learning & Growth  */}
       <div className="w-full py-20 flex items-center justify-center sm:py-20 bg-[#FFFFFF] ">
        <div className="container  lg:px-10 flex flex-col gap-12 items-center justify-center sm:gap-0">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-purpleMain text-3xl font-playfair font-bold sm:text-xl">
            How We Engage Kids in Learning & Growth 
            </h2>
          </div>
          <div className=" flex gap-12 w-full font-roboto justify-center sm:gap-6 sm:flex-col sm:items-center">
          <div className="w-1/2 flex justify-center items-center sm:w-full sm:p-8">
              <div className="w-2/3 shadow-xl sm:w-full sm:shadow-none ">
              <Image
          src={Hpgmtjp}
          alt="preschool"
          className="h-full sm:hidden"
        />
              </div>
            </div>
          <div className="w-1/2 text-lg sm:text-md lg:text-justify sm:text-center font-normal sm:full flex flex-col  justify-center gap-4 sm:gap-6 sm:w-full ">
             <h3 className="text-purpleMain text-xl font-playfair font-bold sm:text-xl">We make learning fun through:</h3>
               <ul>
                <li className="mb-4"><span className="text-purpleMain text-md font-bold">Creative Play </span> – Art, music, and storytelling for self-expression. 
                </li>
                <li className="mb-4"><span className="text-purpleMain text-md font-bold">Early Learning Activities </span>– Alphabet, numbers, shapes, and colors.  
                </li>
                <li className="mb-4"><span className="text-purpleMain text-md font-bold">Sensory & Motor Skills Development </span>– Hands-on activities to enhance fine and gross motor skills.  
                </li>
                <li className="mb-4"><span className="text-purpleMain text-md font-bold">Social Interaction</span>– Encouraging teamwork, communication, and emotional growth. 
                </li>
                <li className="mb-4"><span className="text-purpleMain text-md font-bold">Outdoor & Physical Play</span>– Helping kids develop coordination, strength, and confidence.   
                </li>
               </ul>
            </div>
            
             
             
          </div>
        </div>
      </div>

       {/* Why Play Group is More Than Just Play   */}
       <div className="w-full py-20 flex items-center justify-center sm:py-20 bg-[#E5F6D4] ">
        <div className="container  lg:px-10 flex flex-col gap-12 items-center justify-center sm:gap-0">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-purpleMain text-3xl font-playfair font-bold sm:text-xl">
            Why Play Group is More Than Just Play 
            </h2>
          </div>
          <div className=" flex gap-12 w-full font-roboto justify-center sm:gap-6 sm:flex-col sm:items-center">
          <div className="w-1/2 text-lg sm:text-md lg:text-justify sm:text-center font-normal sm:full flex flex-col  justify-center gap-4 sm:gap-6 sm:w-full ">
             <h3 className="text-purpleMain text-xl font-playfair font-bold sm:text-xl">Many parents assume Play Group is only about fun, but it's the foundation for:</h3>
               <ul>
                <li className="mb-4"><span className="text-purpleMain text-md font-bold">Early Social & Emotional Development</span> – Kids learn to share, express emotions, and build friendships.
                </li>
                <li className="mb-4"><span className="text-purpleMain text-md font-bold">Cognitive Growth  </span>– Exposure to problem-solving, reasoning, and early academic concepts. 
                </li>
                <li className="mb-4"><span className="text-purpleMain text-md font-bold">Routine & Discipline  </span>– Developing structured daily habits that help in future schooling.  
                </li>
                <li className="mb-4"><span className="text-purpleMain text-md font-bold">Confidence & Independence</span>– Encouraging children to explore the world around   
                </li>
               </ul>
            </div>
            <div className="w-1/2 flex justify-center items-center sm:w-full sm:p-8">
              <div className="w-2/3 shadow-xl sm:w-full sm:shadow-none ">
              <Image
          src={Hwekil}
          alt="preschool"
          className="h-full sm:hidden"
        />
              </div>
            </div>
             
             
          </div>
        </div>
      </div>
   
 
      {/* Admission process for preschool */}
      <div className="w-full py-10 flex items-center justify-center sm:py-20 bg-[#FDF8EE] ">
        <div className="container  lg:px-10 flex gap-10 flex-col  items-center justify-center">
          <div className="flex flex-col w-full  items-center gap-6">
            <span className=" text-5xl font-bold">FAQS</span>
            <div className="flex flex-col gap-4 w-full container">
            {accordianData.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => toggleAccordion(index)}
        >
          {item.content}
        </Accordion>
      ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enquire with Us – Admissions Open!   */}
      <div className="w-full py-20 flex items-center justify-center sm:py-20 bg-[#FFFFFF] ">
        <div className="container  lg:px-10 flex flex-col gap-12 items-center justify-center sm:gap-0">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-purpleMain text-3xl font-playfair font-bold sm:text-xl">
            Enquire with Us – Admissions Open! 
            </h2>
          </div>
          <div className=" flex gap-12 w-full font-roboto justify-center sm:gap-6 sm:flex-col sm:items-center">
          <div className="flex flex-col justify-center items-center ">
             <h3 className="text-purpleMain text-xl font-playfair font-bold sm:text-xl">Looking for the best school for Play Group in Kondapur? Admissions are now open! </h3>
             <ContactCards/>
             <h3 className="text-purpleMain text-md font-playfair font-bold sm:text-xl">Give your child a strong start in a safe, loving, and engaging environment. Join Brookside Global School today! </h3>
            </div>
             
          </div>
        </div>
      </div>
    </main>
  );
}
