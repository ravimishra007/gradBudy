"use client"

import React, { useEffect } from 'react'
import CourseCard from './CourseCard'
import { courseDetailData } from '@/constents/constents'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { Course, fetchAllCourses, selectCourses } from '@/lib/features/courses/coursesSlice'
import { selectLoggedInUser } from '@/lib/features/auth/authSlice'
import { fetchCartData } from '@/lib/features/cart/CartSlice'

const FeaturedCourses = () => {
    const dispatch = useAppDispatch()
    const courses = useAppSelector(selectCourses);
    const user = useAppSelector(selectLoggedInUser)

    useEffect(() => {
        dispatch(fetchAllCourses());
    }, [dispatch]);

    // useEffect(() => {
    //     if (user?.token && user?.user?.id) {
    //         dispatch(fetchCartData({ userId: user?.user?.id, token: user.token }));
    //     }
    // }, [dispatch, user?.token, user?.user.id]);

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
                <div className="gap-6 gap-x-4 sm:gap-x-0 sm:gap-y-10 flex flex-wrap items-center justify-center lg:justify-around px-3 sm:px-16 lg:px-0 pt-56 w-full max-w-7xl mx-auto">
                    {courses.slice(0, 3).map((course: Course) => (
                        <CourseCard key={course._id} {...course} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedCourses