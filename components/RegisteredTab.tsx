"use client"

import { courseDetailData } from "@/constents/constents"
import CourseCard from "./CourseCard"

const RegisteredTab = () => {

    return (
        <div className="mt-10 sm:mt-14 lg:mt-20 gap-6 sm:gap-10 justify-around grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-16 lg:mx-10 justify-items-center lg:justify-items-around">
            {/* {courseDetailData.map((course) => (
                <CourseCard key={course.id} {...course} />
            ))} */}

            <div className="text-center flex justify-center items-center h-[50vh] w-full">
                <span className="text-2xl text-center font-semibold">There is nothing yet!</span>
            </div>
        </div>
    )
}

export default RegisteredTab