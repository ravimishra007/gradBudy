"use client"

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import CourseCard from './CourseCard'
import { RootState } from '@/lib/store';
import { fetchFavCourses, selectFavCourses } from '@/lib/features/favourite-courses/favCourseSlice';
import { fetchAllCourses, selectCourses } from '@/lib/features/courses/coursesSlice'; // Importing all courses
import { useEffect } from 'react';

const FavouriteTab = () => {
    const dispatch = useAppDispatch();
    const favCourses = useAppSelector(selectFavCourses);
    const allCourses = useAppSelector(selectCourses);

    useEffect(() => {
        dispatch(fetchFavCourses());
        dispatch(fetchAllCourses());
    }, [dispatch]);

    const courseIds = favCourses.map((course: any) => course.courseId);

    const favoriteCoursesData = courseIds.map((id: string) =>
        allCourses.find((course: any) => course._id === id)
    );

    return (
        <>
            <div className="mt-10 sm:mt-14 lg:mt-20 gap-6 sm:gap-10 justify-around grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-16 lg:mx-10 justify-items-center lg:justify-items-around">
                {favoriteCoursesData.map((course: any) => course && (
                    <CourseCard key={course._id} {...course} removeFromFavBtn={true} />
                ))}
            </div>

            {favoriteCoursesData.length === 0 && (
                <div className="text-center flex justify-center items-center h-[50vh] w-full">
                    <span className="text-2xl text-center font-semibold">There is nothing yet!</span>
                </div>
            )}
        </>
    )
}

export default FavouriteTab;
