import CourseCard from '@/components/CourseCard'
import MainHeader from '@/components/MainHeader'
import { courses } from '@/constents/constents'
import React from 'react'

const MyCart = () => {
    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-2 sm:p-12 mx-2 sm:mx-10 md:mx-16">
                    <MainHeader title="My Cart" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />

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

export default MyCart