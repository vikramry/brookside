import type { Metadata } from "next";
import Banner from '@/components/AcademicsComponents/Banner'
import ContactSection from '@/components/AcademicsComponents/ContactSection'
import Curriculum from '@/components/AcademicsComponents/Curriculum'
import MainContent from '@/components/AcademicsComponents/MainContent'
import ActivityCard from '@/components/activityCard'
import React from 'react'

export const metadata: Metadata = {
    title: "Academics at Brookside | Best Primary School in Kondapur, Hyderabad",
    description: "Discover our commitment to excellence in education at the Best Primary School in Hyderabad - Brookside Global School. Learn about our nurturing environment, dedicated faculty, and innovative programs designed to empower students for future.",
    keywords:"Best Primary School in Kondapur - Hyderabad, Best Primary School in Hyderabad, Best Pre Primary Schools in Hyderabad'",

  };

const data=[
    {
        content:'Confidence is an important factor in academic settings and can impact the student’s ability to learn and succeed. Students are engaged in classroom discussions where they are more likely to apply their skills and ask questions, which helps build confidence by providing them with constructive feedback. It builds positive reinforcement in students by developing a positive self-image and mindset necessary for success.',
        heading:'Confidence',
        imgURL:"/assets/images/confidence.png",
        isReverse:false

    },{
        content:'Communication plays a crucial role in academic settings, where students, educators, and researchers are constantly exchanging ideas and information. We believe that encouraging students to ask questions, share their opinions, and participate in discussions can improve communication and help students in peer learning.',
        heading:'Communication',
        imgURL:"/assets/images/communication.png",
        isReverse:true

    },
    {
        content:'Critical thinking is an essential skill for academic success, and integrating it with the curriculum helps students develop this ability. Students are encouraged to ask questions and identify information from various sources to develop a deeper understanding of a subject. Various opportunities to do research and inquiry-based project encourage students to gather, analyze and evaluate information.',
        heading:'Critical thinking',
        imgURL:"/assets/images/thinking.png",
        isReverse:false

    },
    {
        content:'Creativity encourages students to think critically, explore different perspectives, and express themselves in a creative way. Students use their creativity and imagination to explore different topics and work in a collaborative way. Integration of creativity in academics helps students become more successful in their academic pursuits.',
        heading:'Creativity',
        imgURL:"/assets/images/creativity.png",
        isReverse:true

    },
    {
        content:'Collaboration is an essential aspect of the school’s academic experience. Students work on group projects, where they collaborate with their classmates to complete a task or assignment. It not only develops teamwork but also enhances critical thinking and collaboration skills.',
        heading:'Collaboration',
        imgURL:"/assets/images/colaboration.png",
        isReverse:false

    },
]
const page = () => {
    return (
        <div>
            <Banner />
            <MainContent />
            <Curriculum />
            <div>
        {data?.map((item)=>{
            return(
                <ActivityCard content={item?.content} heading={item?.heading} imgURL={item?.imgURL} isReverse={item?.isReverse}/>
            )
        })}
        </div>
            <ContactSection />
        </div>
    )
}

export default page
