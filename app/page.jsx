import React from 'react'
import SignIn from './(auth)/login/page'
import Link from 'next/link'
import SectionCard from '@/components/SectionCard'

const page = () => {
    return (
        <div className='flex-center gap-10 text-blue-800 font-semibold text-xl mt-20 flex-col'>

            {/* <Link href='/login'>
                Login
            </Link>

            <Link href='/signup'>
                SignUp
            </Link> */}

            <Link href='/faq'>
                FaQ
            </Link>

            <Link href='/about-us'>
                AboutUs
            </Link>

            <Link href='/contact-us'>
                Contact-Us
            </Link>

            {/* <Link href='/terms-of-use'>
                Terms And Conditions
            </Link>

            <Link href='/privacy-policy'>
                Privacy Policy
            </Link> */}


            <Link href='/about-us'>
                AboutUs
            </Link>


            {/* <Link href='/course/course-detail'>
                Course-Detail
            </Link>

            <Link href='/course/all-courses'>
                All Courses
            </Link>

            <Link href='/settings'>
                Settings
            </Link> */}
        </div>
    )
}

export default page