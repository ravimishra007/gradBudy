"use client";

import AboutMentor from '@/components/AboutMentor';
import CourseCard from '@/components/CourseCard';
import CourseOutline from '@/components/CourseOutline';
import { Button } from '@/components/ui/button'
import { courseDetailData } from '@/constents/constents';
import { LableCardProps } from '@/constents/types';
import { fetchAllCourses, fetchCourseById, selectCourses, selectFetchedCourse } from '@/lib/features/courses/coursesSlice';
import { getProfessorById } from '@/lib/features/professor/professorAPI';
import { Professor } from '@/lib/features/professor/professorSlice';
import { University } from '@/lib/features/university/universityAPI';
import { selectUniversities } from '@/lib/features/university/universitySlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
    const dispatch = useAppDispatch()

    const universities = useAppSelector((state: RootState) => selectUniversities(state));

    const [professor, setProfessor] = useState<Professor | null>(null);
    const [course, setCourse] = useState<any | null>(null);
    const [university, setUniversity] = useState<University | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (params.id) {
                const resultAction = await dispatch(fetchCourseById(params.id));
                if (fetchCourseById.fulfilled.match(resultAction)) {
                    setCourse(resultAction.payload);
                } else {
                    console.error("Failed to fetch course data");
                }
            }
        };
        fetchData();
    }, [dispatch, params.id]);

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i}>⭐</span>);
            } else {
                stars.push(<span className='text-lg font-bold' key={i}>✰</span>);
            }
        }
        return stars;
    };

    if (!course) {
        return <div>Loading...</div>
    } else {
        console.log("course: ", course)
    }

    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-4 sm:overflow-hidden sm:p-12 sm:mx-10 md:mx-16">
                    <div>
                        {/* Hero  */}
                        <div className="flex flex-col gap-10 sm:gap-16">
                            <article className={`flex flex-col lg:flex-row gap-6`}>
                                <figure className="lg:max-w-[33.33%] flex-center w-full relative">
                                    <Image className="h-[199px] object-cover sm:h-[291px]" src={course?.thumbnailImage ? course.thumbnailImage : '/images/course-img.png'} alt={course?.courseName} width={340} height={291} priority />
                                </figure>

                                <figcaption className="lg:max-w-[66.66%] w-full lg:mt-0">

                                    <div>
                                        <h3 className="subHeading">{course?.courseName}</h3>

                                        <div className="flex items-center gap-4 my-4 rounded-sm">
                                            <Image
                                                className='w-[30px] h-[30px] object-cover rounded-full'
                                                src={professor?.info?.profilePhoto ? professor.info.profilePhoto : "/icons/profile.svg"}
                                                alt={`${professor?.info?.name.first ? professor?.info?.name.first : "Profile Pic"}`}
                                                width={30}
                                                height={30}
                                                priority
                                            />
                                            {course.professorId?.info?.name?.first && course.professorId?.info?.name?.last ? (
                                                <h3 className="text-lg font-medium mb-3 mt-1 text-[#6941C6]">
                                                    {`${course.professorId.info.name.first} ${course.professorId.info.name.middle ? course.professorId.info.name.middle + ' ' : ''}${course.professorId.info.name.last}`}
                                                </h3>
                                            ) : <h3 className='text-lg font-medium mb-3 mt-1 text-[#6941C6]'>Not Found!</h3>}
                                        </div>
                                        <div className="flex gap-6 pt-2">
                                            {course?.streams && course.streams.map((skill: string, idx: number) => (
                                                <p key={idx} className="bg-[#6941C6]/10 rounded-full p-2 px-4 text-sm text-[#2C1C5F]">{skill}</p>
                                            ))}
                                        </div>
                                    </div>


                                    <p className="py-4 sm:py-6 text-justify" >{course?.description}</p>

                                    <div className="-mt-3 text-[#344054] space-y-1">
                                        <p className="text-xs flex items-center gap-x-3">Total Amount <strong className="text-lg">
                                            {course?.priceId?.price !== undefined ? `$${course.priceId.price.toFixed(2)}` : "Not Available"}
                                        </strong>
                                        </p>
                                        {/* <p className='text-sm md:hidden'>{courseData.reviews.alreadyRegistered} Already Registered</p>
                                        <p className='text-sm'>
                                            {renderStars(courseData.reviews.rating)} {courseData.reviews.count} reviews
                                        </p> */}
                                    </div>
                                </figcaption>

                                <Button className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-6 px-16 duration-150 mb-4"> Register</Button>
                            </article>
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-10 xl:gap-[7vw] mx-auto">
                                {/* {courseData.labels.map((data, idx) => (
                                    <LableCard key={idx} iconSrc={data.iconSrc} lable={data.label} name={`${data.name}`} />
                                ))} */}
                            </div>
                        </div>

                        {/* What you will Learn */}
                        <div className="my-10 sm:my-16">
                            <h3 className="subHeading my-4 sm:my-8" >What you will Learn</h3>
                            <p className="text-base sm:text-lg font-medium text-justify text-black/60" >
                                {course?.description}
                            </p>

                            {/* <div className="my-8 lg:my-16 px-2 md:mx-6 lg:mx-16 space-y-5 lg:space-y-10 ">
                                <CourseOutline course={courseData.courseOutlineData} />
                            </div> */}
                        </div>

                        {/* Requirements */}
                        {/* <div className="my-10 sm:my-16">
                            <h3 className="subHeading my-4 sm:my-8" >Requirements</h3>
                            <ul className="text-base text-justify sm:text-lg list-disc pl-5 sm:pl-10 font-medium text-black/60">
                                {courseData.requirements.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div> */}

                        {/* About the Mentor */}
                        <AboutMentor professorId={course.professorId._id} />
                    </div>

                    {/* Other Relevant Courses */}
                    {/* <div className="my-10 mt-16 lg:my-20 lg:mt-28">
                        <h3 className="subHeading mb-1">Other Relevant Courses</h3>

                        <div className="flex mt-10 sm:mt-14 lg:mt-20 flex-wrap gap-6 sm:gap-10 justify-around">
                            {courseDetailData.slice(0, 3).map((course) => (
                                <CourseCard key={course.id} {...course} />
                            ))}
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    )
}

const LableCard = ({ iconSrc, name, lable }: LableCardProps) => {
    return (
        <div className="flex flex-col gap-2 p-3 sm:p-6 sm:px-10 bg-[#6941C6]/5 rounded-[12px] sm:min-w-[220px] min-h-[88px]">
            <h4 className="text-sm sm:text-base font-normal text-black/50">{lable}</h4>
            <div className="flex items-center gap-x-2 sm:gap-x-4" >
                <Image className='sm:w-6 w-5 sm:h-5 h-4' src={iconSrc} alt={lable} width={30} height={30} />
                <h3 className="font-bold text-base sm:text-xl text-[#0A0D14] opacity-90 capitalize">{name}</h3>
            </div>
        </div>
    );
};