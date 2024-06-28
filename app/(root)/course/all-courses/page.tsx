import CourseCard from '@/components/CourseCard'
import MainHeader from '@/components/MainHeader'
import { courses } from '@/constents/constents'
import React from 'react'

const AllCourses = () => {
    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-6 sm:p-12 sm:mx-10 lg:mx-10">
                    <MainHeader title="All Courses" subTitle="Select your desired courses to expand your knowledge" />

                    <div className="mt-10 sm:mt-14 lg:mt-20 gap-6 sm:gap-10 justify-around grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-16 lg:mx-10 justify-items-center lg:justify-items-around">
                        {courses.map((course) => (
                            <CourseCard key={course.id} {...course} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllCourses