import React from 'react'
import CourseCard from './CourseCard'
import { courseDetailData } from '@/constents/constents'

const FeaturedCourses = () => {
    return (
        <section id='Featured_Courses'>
            <div className='relative'>
                <div className="absolute w-full -z-10">
                    <div className="bg-[#2C1C5F] flex-center flex-col text-white text-center py-16 pb-40">
                        <h1 className="heading">
                            Featured Courses
                        </h1>
                        <p className="paragraph">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec</p>
                    </div>
                </div>
                <div className="gap-6 gap-x-4 sm:gap-x-0 sm:gap-y-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center px-5 sm:px-16 lg:px-0 pt-56 w-full max-w-7xl mx-auto">
                    {courseDetailData.map((course) => (
                        <CourseCard key={course.id} {...course} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedCourses