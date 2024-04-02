import Banner from '@/components/AcademicsComponents/Banner'
import ContactSection from '@/components/AcademicsComponents/ContactSection'
import Curriculum from '@/components/AcademicsComponents/Curriculum'
import MainContent from '@/components/AcademicsComponents/MainContent'
import React from 'react'

const page = () => {
    return (
        <div>
            <Banner />
            <MainContent />
            <Curriculum />
            <ContactSection />
        </div>
    )
}

export default page
