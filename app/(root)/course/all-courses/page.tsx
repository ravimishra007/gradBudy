import CourseCard from '@/components/CourseCard'
import MainHeader from '@/components/MainHeader'
import { courses } from '@/constents/constents'
import React from 'react'

const AllCourses = () => {
    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-6 sm:p-12 sm:mx-10 md:mx-16">
                    <MainHeader title="All Courses" subTitle="Select your desired courses to expand your knowledge" />

                    <div className="flex mt-10 sm:mt-14 lg:mt-20 flex-wrap gap-6 sm:gap-10 justify-around">
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