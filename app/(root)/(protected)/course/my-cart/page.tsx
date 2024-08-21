'use client';

import React, { useEffect, useState } from 'react';
import CourseCard from '@/components/CourseCard';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { fetchCartData, selectCart } from '@/lib/features/cart/CartSlice';
import { fetchAllCourses, selectCourses, Course } from '@/lib/features/courses/coursesSlice';
import { selectLoggedInUser } from '@/lib/features/auth/authSlice';

const MyCart = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(selectCart) || [];
    // const courses = useAppSelector(selectCourses) || [];
    // const user = useAppSelector(selectLoggedInUser);

    const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

    // useEffect(() => {
    //     dispatch(fetchAllCourses());
    // }, [dispatch]);

    // useEffect(() => {
    //     if (user?.token && user?.user?.id) {
    //         dispatch(fetchCartData({ userId: user?.user?.id, token: user.token }));
    //     }
    // }, [dispatch, user?.token, user?.user?.id]);


    // useEffect(() => {
    //     console.log("Cart data: ", cart);
    //     console.log("Courses data: ", courses);

    //     if (Array.isArray(cart) && cart.length > 0 && courses.length > 0) {
    //         const courseIds: string[] = [];
    //         cart.forEach((item: any) => {
    //             item.cartItems.forEach((cartItem: any) => {
    //                 if (cartItem.priceId?.CourseId) {
    //                     courseIds.push(cartItem.priceId.CourseId);
    //                 }
    //             });
    //         });

    //         console.log("Extracted course IDs: ", courseIds);

    //         const filtered = courses.filter(course => courseIds.includes(course._id));
    //         setFilteredCourses(filtered);

    //         console.log("Filtered courses: ", filtered);
    //     }
    // }, [cart, courses]);

    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-2 sm:p-12 mx-2 sm:mx-10 md:mx-16">
                    <h1 className="text-3xl font-semibold">My Cart</h1>
                    {(filteredCourses.length > 0) && (
                        <div className="text-center flex justify-center items-center h-[50vh] w-full">
                            <span className="text-2xl font-semibold">There is nothing yet!</span>
                        </div>
                    )}
                    <div className="mt-10 gap-6 sm:gap-10 justify-around grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-16 lg:mx-10 justify-items-center lg:justify-items-around">
                        {filteredCourses.map((course: Course) => (
                            <CourseCard key={course._id} {...course} removebtn={true} />
                        ))}
                    </div>
                    {filteredCourses.length > 0 && (
                        <div className="md:mx-12 mt-8 sm:mt-12 lg:mt-16">
                            <button type="submit" className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-10 sm:px-16 duration-150 w-full">Checkout</button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default MyCart;
