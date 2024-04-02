import Image from 'next/image'
import React from 'react'

const Curriculum = () => {
    return (
        <div className='flex justify-center items-center py-6 bg-[#F6EAD4] pb-16'>
            <div className='w-[70%] flex justify-center flex-col items-center gap-5'>
                <h2 className='font-bold text-[#2E2B4F] md:text-5xl text-2xl mb-5'>The <span className='text-[#F3A20C]'>5C</span> Curriculum</h2>
                <div className='flex lg:justify-between justify-center items-center lg:flex-row flex-col-reverse' >
                    <div className='w-full flex flex-col gap-5 text-base'>
                        <p>
                            Brookfield has designed the 5C curriculum, a comprehensive educational approach that aims to create a social learning environment promoting curiosity and knowledge development. This curriculum is inspired by teachings from professional educators and various learning practices, offering a holistic approach to student development.
                        </p>
                        <p>
                            The primary goal of this curriculum is to cultivate leadership skills in children by providing guidance and mentorship at every stage of their academic journey. The curriculum also seeks to establish a participatory environment that encourages self-esteem, independence, leadership, innovation, problem-solving, and responsibility. These are vital skills for building a bright future, and the curriculum caters to individual learning styles while engaging and stimulating curious minds.
                        </p>
                        <p>
                            At the core of this philosophy are the 5C’s – Confidence, Communication, Critical Thinking, Creativity, and Collaboration. The curriculum emphasizes interactive and integrated learning that simulates real-life experiences for students, promoting inquiry, experimentation, research, and discovery to develop a deep understanding of the subject matter. This approach inspires academic excellence and motivates every child to reimagine the future.
                        </p>
                    </div>
                    <div className='w-full h-full flex lg:justify-end justify-center'>
                        <Image src="/assets/images/5C.png" alt='5c curriculum' width={500} height={1000} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curriculum