import ContactSection from '@/components/AcademicsComponents/ContactSection'
import Gallery from '@/components/Gallery'
import React from 'react'
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "View Our Gallery | Brookside Global School",
    description: "Our gallery is the replica of our hard work we put in to give your child the best at our Best Primary School in Hyderabad. Enroll today!",
  };

const page = () => {
    return (
        <div>
            <div>
                <img src="/assets/images/galleryBanner.png" />
            </div>
            <Gallery />
            <ContactSection />
        </div>
    )
}

export default page