"use client"

import CourseCard from '@/components/CourseCard'
import MainHeader from '@/components/MainHeader'
import { Button } from '@/components/ui/button'
import { useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/store'
import React from 'react'

const MyCart = () => {
    const cart = useAppSelector((state: RootState) => state.cart.cart);
    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-2 sm:p-12 mx-2 sm:mx-10 md:mx-16">
                    <MainHeader title="My Cart" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                    {cart.length === 0 && (
                        <div className="text-center flex justify-center items-center h-[50vh] w-full">
                            <span className="text-2xl font-semibold">There is nothing yet!</span>
                        </div>
                    )}
                    <div className="mt-10 gap-6 sm:gap-10 justify-around grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-16 lg:mx-10 justify-items-center lg:justify-items-around">
                        {cart.map((course) => (
                            <CourseCard key={course.id} {...course} removebtn={true} />
                        ))}
                    </div>
                    <div className="md:mx-12 mt-8 sm:mt-12 lg:mt-16">
                        <Button type="submit" className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-10 sm:px-16 duration-150 w-full">Checkout</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyCart