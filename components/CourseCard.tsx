'use client';

import { courseDetailDataProp } from '@/constents/types';
import Image from 'next/image';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { ImCancelCircle } from "react-icons/im";
import { useToast } from './ui/use-toast';
import { addFavCourse, deleteFavCourseById, fetchFavCourses, fetchFavCoursesByUserId, selectFavCourses } from '@/lib/features/favourite-courses/favCourseSlice';
import { selectLoggedInUser } from '@/lib/features/auth/authSlice';
import { useEffect, useState } from 'react';
import { getFavCoursesByUserId } from '@/lib/features/favourite-courses/favCourseAPI';
import { getCourseById } from '@/lib/features/courses/coursesAPI';
import { Course, fetchAllCourses, fetchCourseById, selectCourses } from '@/lib/features/courses/coursesSlice';
import { addToCart, deleteFromCart, fetchCartData } from '@/lib/features/cart/CartSlice';
import { getProfessorById } from '@/lib/features/professor/professorAPI';
import { Professor } from '@/lib/features/professor/professorSlice';
import { fetchAllUniversitiesAsync, selectUniversities } from '@/lib/features/university/universitySlice';
import { University } from '@/lib/features/university/universityAPI';
import { RootState } from '@/lib/store';

interface CourseCardProps extends Course {
    courseId?: string;
    removebtn?: boolean;
    removeFromFavBtn?: boolean;
}

const CourseCard = ({ ...course }: CourseCardProps | any) => {
    const {
        _id: id,
        courseId,
        streams: majorSkills,
        courseName: title,
        thumbnailImage: courseImg,
        professorId: mentor,
        priceId: price,
        lengthOfVideoInMinutes: duration,
        numberOfTopics: lessons,
        UniversityIds: institute,
        removebtn,
        removeFromFavBtn,
    } = course;
    // console.log("institute :", institute[0]._id)
    const router = useRouter();
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectLoggedInUser)
    const favCourses = useAppSelector(selectFavCourses);
    const universities = useAppSelector((state: RootState) => selectUniversities(state));
    const { toast } = useToast();

    const [professor, setProfessor] = useState<Professor | null>(null);
    const [university, setUniversity] = useState<University | null>(null);
    const [error, setError] = useState<string | null>(null);

    const favCourse = favCourses.find((favCourse: any) => favCourse.courseId === id);
    const isFav = Boolean(favCourse);
    const favCourseId = favCourse ? favCourse._id : null;


    useEffect(() => {
        dispatch(fetchFavCourses());
        dispatch(fetchAllUniversitiesAsync());
    }, [dispatch]);

    useEffect(() => {
        if (user?.token && user?.user?.id) {
            dispatch(fetchCartData({ userId: user?.user?.id, token: user.token }));
        }
    }, [dispatch, user?.token, user?.user.id]);

    // console.log("institute : ", institute)
    // if (!institute) {
    //     return <div>Loading...</div>
    // }

    useEffect(() => {
        if (universities.length > 0 && institute) {
            const foundUniversity = universities.find((uni) => uni._id === (institute[0]._id));
            setUniversity(foundUniversity || null);
        }
    }, [universities, institute]);

    useEffect(() => {
        const fetchProfessor = async () => {
            try {
                const data = await getProfessorById(mentor._id);
                setProfessor(data);
            } catch (err) {
                console.error("Failed to fetch professor details");
            }
        };

        fetchProfessor();
    }, [mentor]);

    const handleFavourite = () => {
        if (user && user?.user?.id) {
            if (isFav) {
                dispatch(deleteFavCourseById(favCourseId));
                toast({
                    title: "Success",
                    description: "Course is successfully removed from favourite course.",
                });
            } else {
                dispatch(addFavCourse({ userId: user.user.id, courseId: id }));
                toast({
                    title: "Success",
                    description: "Course is successfully added to favourite course.",
                });
            }
        } else {
            toast({
                title: "Error",
                description: "Please log in to add or remove from favourites.",
            });
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    const handleAddToCart = (priceId: string, count: number) => {
        if (user?.token && user?.user?.id) {
            dispatch(addToCart({ token: user.token, userId: user?.user?.id, cartItems: { priceId, count } }));
            toast({
                title: "Success",
                description: "Course is successfully added in cart.",
            });
        }
    };

    const handleDeleteFromCart = (priceId: string) => {
        if (user?.token) {
            dispatch(deleteFromCart({ token: user.token, id: priceId }));
            toast({
                title: "Success",
                description: "Course is successfully removed from cart.",
            });
        }
    };

    return (
        <>
            <div className="flex flex-col w-full max-w-[340px] rounded-[12px] overflow-hidden [box-shadow:2px_2px_40px_4px_#6941C61A]">
                <article className={`flex flex-col gap-6`}>
                    <Link href={`/course/course-detail/${id}`}>
                        <figure className="flex-center w-full relative">
                            <Image className="w-full h-[180px] object-cover" src={courseImg ? courseImg : '/images/course-img.png'} alt={title} width={340} height={180} />

                            {removebtn && <button onClick={(event) => handleDeleteFromCart(price)} className="bg-black/10 text-black/50 hover:text-black/70 hover:scale-110 hover:bg-black/30 duration-150 w-4 h-4 rounded-full cursor-pointer absolute top-2 right-2"><ImCancelCircle /></button>}
                        </figure>
                    </Link>

                    <figcaption className="w-full lg:mt-0 px-4">
                        <h3 className="text-sm sm:text-base mb-4 font-medium text-[#344054]">{university ? university?.overview.name : "Not Found!"}</h3>

                        <div>
                            <div className='flex justify-between items-center'>
                                <h3 className="text-lg sm:text-xl font-bold leading-6 capitalize w-[80%]" >{title}</h3>
                                <Image onClick={handleFavourite} className="object-cover cursor-pointer scale-95 hover:scale-110" src={isFav ? "/icons/heart-filled.svg" : "/icons/heart.svg"} alt="favourite" width={30} height={30} />
                            </div>
                            {professor?.info?.name?.first && professor?.info?.name?.last ? (
                                <h3 className="text-lg font-medium mb-3 mt-1 text-[#6941C6]">
                                    {`${professor.info.name.first} ${professor.info.name.middle ? professor.info.name.middle + ' ' : ''}${professor.info.name.last}`}
                                </h3>
                            ) : <h3 className='text-lg font-medium mb-3 mt-1 text-[#6941C6]'>Not Found!</h3>}


                            <div className="flex flex-wrap gap-3 sm:gap-6 pt-2">
                                {majorSkills?.map((tag: string, index: number) => (
                                    <p key={index} className="bg-[#6941C6]/10 rounded-full p-2 sm:px-4 text-xs sm:text-sm text-[#2C1C5F]">{tag}</p>
                                ))}
                            </div>
                        </div>
                        <ul className="list-disc flex gap-x-12 my-4 mx-6">
                            {lessons && <li className="text-[#525866] text-sm font-normal">{`${lessons}`} Lessons</li>}
                            {duration && <li className="text-[#525866] text-sm font-normal">{duration} Hours</li>}
                        </ul>

                        <div className="flex justify-between my-4 mt-8 mx-3">
                            <div className="text-[#344054]">
                                <p className="text-xs flex items-center gap-x-3">Total Amount </p>
                                <strong className="text-lg">
                                    {price?.price ? `$${parseFloat(price.price).toFixed(2)}` : "Not Available"}
                                </strong>
                            </div>
                            <Button onClick={() => handleAddToCart(price._id, 1)} className="form-btn cursor-pointer bg-yellow-100 hover:bg-yellow-100/80 py-5 sm:px-8 duration-150 mb-4">Enroll Now</Button>
                        </div>
                    </figcaption>
                </article>
            </div>
        </>
    );
};

export default CourseCard;
