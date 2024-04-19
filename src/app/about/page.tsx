import type { Metadata } from "next";
import AboutGlance from "@/components/AboutGlance";
import ContactSection from "@/components/AcademicsComponents/ContactSection";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Brookside Global School",
  description: "Discover our commitment to excellence in education at the Best Primary School in Hyderabad - Brookside Global School. Learn about our nurturing environment, dedicated faculty, and innovative programs designed to empower students for future.",
  keywords:"Best Primary School in Hyderabad, Best Pre Primary Schools in Hyderabad"
};

const page = () => {
  return (
    <div className="bg-white flex flex-col gap-10">
      <div className="">
        <img src="/assets/images/aboutbanner.png" alt="img-blur-shadow" />
      </div>
      <div className="flex justify-center items-center bg-white pb-10 md:px-5  lg:px-0">
        <div className="md:max-w-[900px] py-16 flex flex-col justify-center items-center gap-4 text-center px-6 md:px-0 text-base">
          <div className="flex flex-row gap-3">
            <h1 className="font-bold md:text-5xl text-xl ">The Brookside </h1>
            <h1 className="font-bold md:text-5xl text-xl text-[#F3A20C]">
              Global School
            </h1>
          </div>

          <p>
            Welcome to our School. We believe in creating a safe and nurturing
            environment where young children can learn, explore, and grow. We
            believe that children learn best through hands-on experiences and
            play, and our curriculum is designed to promote early learning in a
            fun and engaging way. We focus on building foundational skills in
            language, literacy, math, science, social skills, and physical
            development, and we value a student-centered approach that
            celebrates the unique talents of each child.
          </p>
          <p>
            Our school offers a range of extracurricular activities and clubs,
            including sports, music, drama, robotics, and community service, to
            provide opportunities for students to pursue their interests. Our
            small class sizes ensure that every child receives individual
            attention and maintain inclusive school culture that promotes
            diversity and respect for all.
          </p>
          <p>
            Our experienced and qualified teachers are passionate about working
            with young children and use a variety of teaching methodology,
            including storytelling, music, art, and sensory play, to engage and
            inspire students. We also believe in the importance of parental
            involvement in a child’s education and encourage regular
            communication and feedback on each child’s progress.
          </p>
          <p>
            At our school, we prioritize the health and safety of our students
            and maintain a clean and hygienic environment. Our staffs are
            trained in first aid and emergency response procedures to ensure the
            well-being of every child. We believe in developing a strong
            pedagogical environment to make our students future ready.
          </p>
          <img
            src="/assets/images/school.png"
            alt="img-blur-shadow"
            className=" rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 md:px-14 px-7">
      <div className="flex justify-center items-center   md:px-5 lg:px-0">
        <div className="flex flex-row flex-wrap gap-11  bg-[#E5F6D4] md:p-10 justify-center py-4 rounded-3xl">
          <img
            src="/assets/images/profile4.png"
            alt="img-blur-shadow"
            className="  w-[410] h-[350px]"
          />
          <div className="flex flex-col justify-between w-[70%] ">
            <div className="flex flex-col gap-3">
              
            <p className="item-center">
            Mr. Jagadish, a seasoned IT professional with 20 years of experience and a Master’s degree in IT. However, his true passion lies in education and he aims to bring some of the innovative practices in the Education field.
            </p>
            <p className="item-center">
            His vision is to establish multiple international schools, where high-quality teaching and research will be prioritized, and a responsible, agile, and future-oriented mindset will be nurtured among students. He strongly believes in the power of higher education to make a positive impact on society and is dedicated to inspiring both students and faculty to question, experiment, and innovate. His mission is to overcome the challenges of higher education and create a better future for all.            </p>
            </div>
            <div className="flex flex-row justify-end">
              <div className="flex flex-col">
                <h6 className="font-bold">Mr. Jagadish</h6>
                <h6 className="font-light">Director, Kondapur</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center   md:px-5 lg:px-0">
        <div className="flex flex-row flex-wrap gap-11  bg-[#D2EAF1] md:p-10 justify-center py-4 rounded-3xl">
          <img
            src="/assets/images/profile3.png"
            alt="img-blur-shadow"
            className="  w-[410] h-[350px]"
          />
          <div className="flex flex-col justify-between w-[70%]">
            <div className="flex flex-col gap-3">
            <p className="item-center">
            Mrs. Madhuri Nagavarapu is a dedicated advocate for child development and education. She actively participated in various school volunteering activities. Her passion for education is evident in her academic achievements, having received the prestigious Pratibha award from the Honorable Chief Minister during her intermediate studies
            </p>
            <p className="item-center">
            She holds a commerce degree from an Indian university and an affiliated degree from a Californian university, demonstrating her commitment to higher education. She firmly believes in the inspiring words of Nelson Mandela, who said, “Education is the most powerful weapon which you can use to change the world.” Her dedication to education and child development is truly admirable and can inspire others to make a difference in the world.            </p>
              </div>
            <div className="flex flex-row justify-end">
              <div className="flex flex-col">
                <h6 className="font-bold">Madhuri Nagavarapu</h6>
                <h6 className="font-light">Academic Director, Kondapur</h6>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="flex justify-center items-center   md:px-5 lg:px-0">
        <div className="flex flex-row flex-wrap gap-11  bg-[#F6EAD4] md:p-10 justify-center py-4 rounded-3xl">
          <img
            src="/assets/images/pic3.jpg"
            alt="img-blur-shadow"
            className="  w-[410] h-[350px]"
          />
          <div className="flex flex-col justify-between w-[70%]">
          <div className="flex flex-col gap-3">
            <p className="items-center">
            Mrs. Bhargavi Vetsa is an educational leader, highly passionate about exploring innovations in the educational system and bringing a supportive learning experience for student success. She is a strong believer that traditional education is not sufficient for our current generation of students to create their own exciting future.
            </p>
            <p className="items-center">
            She encourages co-curricular activities, including arts and sports; the best international programs and standards should be part of their daily learning. She has graduated with a commerce degree. She was part of several educational programs where the focus was on creative thinking, self-learning, and academic excellence
              </p>
              <p className="items-center">
              She has strong understanding in Leadership and Management, Parent and Community Relations. Her vision is to enhance the quality of education through innovative methodologies.
              </p>
              </div>
            <div className="flex flex-row justify-end ">
              <div className="flex flex-col">
                <h6 className="font-bold">Bhargavi</h6>
                <h6 className="font-light">Director, Kondapur</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div>
      <div className={`bg-[#E5F6D4] py-11 md:px-36 px-5`}>
        <div className={`flex justify-center text-start md:flex-row flex-col items-center gap-9`}>
            <div className='md:w-[50%]'>
                <div className={`flex-col flex  gap-2`}>
                <h1 className='md:text-[30px] lg:text-[52px] text-[20px] font-bold'>Vision</h1>
                </div>
                <p className='text-[16px] font-normal'>To empower young minds through a new age education system and create a nurturing environment for imagining, innovating and creating a sustainable future.</p>
            </div>
            <div className='w-[192px] h-[192px]'>
                <img src='/assets/images/bulb.png' alt='img'/>
            </div>
        </div>
    </div>
    <div className={`bg-[#D2EAF1] py-11 md:px-36 px-5`}>
        <div className={`flex justify-center md:flex-row-reverse flex-col-reverse text-start  items-center gap-9`}>
            <div className='md:w-[50%]'>
                <div className={`flex-col flex  gap-2`}>
                <h1 className='md:text-[30px] lg:text-[52px] text-[20px] font-bold'>Mission</h1>
                </div>
                <p className='text-[16px] font-normal'>To foster creative learners, prepare them for academic excellence and to become responsible, ethical, and compassionate members of society.</p>
            </div>
            <div className='w-[192px] h-[192px]'>
                <img src='/assets/images/target.png' alt='img'/>
            </div>
        </div>
    </div>
        </div>
        <AboutGlance />
        <ContactSection />

    </div>
  );
};

export default page;
{
  /* <div className="flex flex-row justify-center mt-[50px] mb-[30px]">
<p className="text-blue-950 text-5xl">
  The Brookside <span className="text-orange-500">Global School</span>
</p>
</div>
<div className="flex flex-row flex-wrap justify-center px-[258px] gap-2 md:">
<p>
  Welcome to our School. We believe in creating a safe and nurturing
  environment where young children can learn, explore, and grow. We
  believe that children learn best through hands-on experiences and
  play, and our curriculum is designed to promote early learning in a
  fun and engaging way. We focus on building foundational skills in
  language, literacy, math, science, social skills, and physical
  development, and we value a student-centered approach that celebrates
  the unique talents of each child.
</p>
<p>
  Our school offers a range of extracurricular activities and clubs,
  including sports, music, drama, robotics, and community service, to
  provide opportunities for students to pursue their interests. Our
  small class sizes ensure that every child receives individual
  attention and maintain inclusive school culture that promotes
  diversity and respect for all.
</p>
<p>
  Our experienced and qualified teachers are passionate about working
  with young children and use a variety of teaching methodology,
  including storytelling, music, art, and sensory play, to engage and
  inspire students. We also believe in the importance of parental
  involvement in a child’s education and encourage regular communication
  and feedback on each child’s progress.
</p>
<p>
  At our school, we prioritize the health and safety of our students and
  maintain a clean and hygienic environment. Our staff are trained in
  first aid and emergency response procedures to ensure the well-being
  of every child. We believe in developing a strong pedagogical
  environment to make our students future-ready.
</p>
</div>
<div className="flex flex-row flex-wrap justify-center px-[258px] pt-[90px] pb-[90px]">
<img
  src="/assets/images/school.png"
  alt="img-blur-shadow"
  className=" rounded-md"
/>
</div>
<div className="flex flex-col directors justify-center px-[80px] py-[60px] gap-[50px]">
<div className="w-[1145px]  h-[451px] rounded-xl bg-[#E5F6D4] flex flex-row justify-between px-[47px] py-[49px]">
  <div className=" ">
    <img
      src="/assets/images/profile1.png"
      alt="img-blur-shadow"
      className="  w-[410] h-[350px]"
    />
  </div>
  <div className="flex flex-wrap w-[600px]">
    <p>
      Mr. Jagadish, a seasoned IT professional with 20 years of
      experience and a Master’s degree in IT. However, his true passion
      lies in education and he aims to bring some of the innovative
      practices in the Education field.His vision is to establish
      multiple international schools, where high-quality teaching and
      research will be prioritized, and a responsible, agile, and
      future-oriented mindset will be nurtured among students. He
      strongly believes in the power of higher education to make a
      positive impact on society and is dedicated to inspiring both
      students and faculty to question, experiment, and innovate. His
      mission is to overcome the challenges of higher education and
      create a better future for all.
    </p>
    <div>
      <div className="flex flex-col gap-[5px] ml-[450px]">
    <text className="font-bold">
    Mr. Jagadish
    </text>
    <text className="font-light">
    Director, Kondapur
    </text>
    </div>
    </div>
  </div>
</div>
<div className="w-[1145px] h-[451px] rounded-xl bg-[#D2EAF1] flex flex-row justify-between px-[47px] py-[49px]">
  <div className=" ">
    <img
      src="/assets/images/profile2.png"
      alt="img-blur-shadow"
      className="  w-[410] h-[350px] "
    />
  </div>
  <div className="flex flex-wrap w-[600px]">
    <p>
    Mrs. Madhuri Nagavarapu is a dedicated advocate for child development and education. She actively participated in various school volunteering activities. Her passion for education is evident in her academic achievements, having received the prestigious Pratibha award from the Honorable Chief Minister during her intermediate studies.She holds a commerce degree from an Indian university and an affiliated degree from a Californian university, demonstrating her commitment to higher education. She firmly believes in the inspiring words of Nelson Mandela, who said, “Education is the most powerful weapon which you can use to change the world.” Her dedication to education and child development is truly admirable and can inspire others to make a difference in the world.
    </p>
    <div>
      <div className="flex flex-col gap-[5px] ml-[350px]">
    <text className="font-bold">
    Mrs. Madhuri Nagavarapu.
    </text>
    <text className="font-light">
    Academic Director, Kondapur
    </text>
    </div>
    </div>
  </div>
</div>
</div>
<div className="w-full h-[485px] bg-[#F6EAD4]  flex flex-row">
<div className="px-[190px] py-[147px] ">
<img
      src="/assets/images/bulb.png"
      alt="img-blur-shadow"
      className="  w-[422px] h-[192px]"
    />
  </div>  
  <div className="px-[208px] py-[147px] flex flex-col gap-5">
  <div className="">
    <text className="font-bold text-[44px]">Vision</text>
    </div>
    <div className="">
    <p>
    To empower young minds through a new age education system and create a nurturing environment for imagining, innovating and creating a sustainable future.
    </p>
    </div>
    </div>
             
</div>
<div className="w-full h-[485px] bg-[#D2EAF1]  flex flex-row">
<div className="px-[190px] py-[147px]">
<img
      src="/assets/images/target.png"
      alt="img-blur-shadow"
      className="  w-[422px] h-[192px] "
    />
  </div>  
  <div className="px-[208px] py-[147px] flex flex-col gap-5">
  <div className="">
    <text className="font-bold text-[44px]">Mission</text>
    </div>
    <div className="">
    <p>
    To foster creative learners, prepare them for academic excellence and to become responsible, ethical, and compassionate members of society.
    </p>
    </div>
    </div>
             
</div>
<AboutGlance /> */
}
