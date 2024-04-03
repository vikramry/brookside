import ContactSection from '@/components/AcademicsComponents/ContactSection'
import Gallery from '@/components/Gallery'
import React from 'react'

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