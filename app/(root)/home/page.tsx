import ExpertView from '@/components/ExpertView'
import FavouriteProf from '@/components/FavouriteProf'
import FeaturedCourses from '@/components/FeaturedCourses'
import FeaturedUniversities from '@/components/FeaturedUniversities'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'
import React from 'react'

const Home = () => {
    return (
        <>
            <main className="py-10 md:py-16 lg:py-24 w-full mx-auto overflow-hidden">
                <Hero />
                <FeaturedCourses />
                <FeaturedUniversities />
                <ExpertView />
                <FavouriteProf />
                <Testimonials />
            </main>
        </>
    )
}

export default Home