import React from 'react'
import SignIn from './(auth)/login/page'
import Link from 'next/link'
import SectionCard from '@/components/SectionCard'
import Image from 'next/image'
import Hero from '@/components/Hero'
import FeaturedCourses from '@/components/FeaturedCourses'
import FeaturedUniversities from '@/components/FeaturedUniversities'

const page = () => {
    return (
        <>
            <div >
                {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-blue-800 font-semibold text-xl mt-20 justify-items-center'> */}

                {/* <Link href='/login'>
                    Login
                </Link>

                <Link href='/signup'>
                    SignUp
                </Link>

                <Link href='/faq'>
                    FaQF
                </Link>

                <Link href='/about-us'>
                    AboutUs
                </Link>

                <Link href='/contact-us'>
                    Contact-Us
                </Link>

                <Link href='/terms-of-use'>
                    Terms And Conditions
                </Link>

                <Link href='/privacy-policy'>
                    Privacy Policy
                </Link>

                <Link href='/course/favourite-professor'>
                    favourite-professor
                </Link>

                <Link href='/course/my-cart'>
                    My Cart
                </Link>

                <Link href='/course/my-learnings'>
                    My Learnings
                </Link>

                <Link href='/course/my-purchase'>
                    My Purchase
                </Link>

                <Link href='/course/video'>
                    Video
                </Link>

                <Link href='/about-us'>
                    AboutUs
                </Link>

                <Link href='/user/manage-profile'>
                    Manage Profile
                </Link>

                <Link href='/course/all-courses'>
                    All Courses
                </Link>

                <Link href='/university-details'>
                    University Details
                </Link>

                <Link href='/college-details'>
                    College Details
                </Link> */}

                {/* <Link href='/home'>
                    Home
                </Link> */}
                <section className="px-5 sm:px-16 lg:px-16 py-10 md:py-16 lg:py-24 max-w-7xl w-full mx-auto overflow-hidden">
                    <Hero />
                    <FeaturedCourses />
                    <FeaturedUniversities />
                </section>

                {/* <Link href='/settings'>
                    Settings
                </Link> */}
                {/* <div className="pb-20" /> */}
            </div>
        </>
    )
}

export default page