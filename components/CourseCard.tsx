'use client';

import { courseDetailDataProp } from '@/constents/types';
import Image from 'next/image';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppDispatch } from '@/lib/hooks';
import { AddToCart, RemoveFromCart } from '@/lib/features/cart/CartSlice';
import { ImCancelCircle } from "react-icons/im";
import { useToast } from './ui/use-toast';
import { addToFavourites, removeFromFavourites } from '@/lib/features/favourite-courses/FavouriteCourseSlice';


interface CourseCardProps extends courseDetailDataProp {
    removebtn?: boolean;
    removeFromFavBtn?: boolean;
}

const CourseCard = ({ ...course }: CourseCardProps) => {
    const { id, majorSkills, title, courseImg, mentor, price, duration, lessons, institute, removebtn, removeFromFavBtn } = course;
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { toast } = useToast();

    const handleClick = () => {
        dispatch(AddToCart({ ...course }));
        toast({
            title: "Success",
            description: "Course is successfully added in cart.",
        })
        // router.push(`/course/${title.toLowerCase().split(' ').join('-')}`);
    };

    const handleFavourite = () => {
        dispatch(addToFavourites({ ...course }));
        toast({
            title: "Success",
            description: "Course is successfully added in favourite course.",
        })
        // router.push(`/course/${title.toLowerCase().split(' ').join('-')}`);
    };

    const handleRemoveFromCart = (courseId: number, event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(RemoveFromCart(courseId));
        toast({
            title: "Success",
            description: "Course is successfully removed from cart.",
        })
    };
    const handleRemoveFromFavourite = (courseId: number, event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(removeFromFavourites(courseId));
        toast({
            title: "Success",
            description: "Course is successfully removed from favourite course.",
        })
    };


    return (
        <>
            <div className="flex flex-col w-full max-w-[340px] rounded-[12px] overflow-hidden [box-shadow:2px_2px_40px_4px_#6941C61A]">

                <article className={`flex flex-col gap-6`}>
                    <Link href={`/course/course-detail/${id}`}>
                        <figure className="flex-center w-full  relative">
                            <Image className="w-full h-[180px] object-cover" src={courseImg} alt={title} width={340} height={180} />

                            {removebtn && <button onClick={(event) => handleRemoveFromCart(id, event)} className="bg-black/10 text-black/50 hover:text-black/70 hover:scale-110 hover:bg-black/30 duration-150 w-4 h-4 rounded-full cursor-pointer absolute top-2 right-2"><ImCancelCircle /></button>}
                            {removeFromFavBtn && <button onClick={(event) => handleRemoveFromFavourite(id, event)} className="bg-black/10 text-black/50 hover:text-black/70 hover:scale-110 hover:bg-black/30 duration-150 w-4 h-4 rounded-full cursor-pointer absolute top-2 right-2"><ImCancelCircle /></button>}
                        </figure>
                    </Link>

                    <figcaption className="w-full lg:mt-0 px-4">

                        <h3 className="text-sm sm:text-base mb-4 font-medium text-[#344054]">{institute}</h3>

                        <div>
                            <div className='flex justify-between items-center'>
                                <h3 className="text-xl font-bold leading-6 capitalize w-[80%]" >{title}</h3>
                                <Image onClick={handleFavourite} className="object-cover cursor-pointer scale-95 hover:scale-110" src="/icons/heart.svg" alt="favourite" width={30} height={30} />
                            </div>
                            <h3 className="text-lg font-medium mb-3 mt-1 text-[#6941C6]">{mentor.name}</h3>

                            <div className="flex gap-6 pt-2">
                                {majorSkills.map((tag, index) => (
                                    <p key={index} className="bg-[#6941C6]/10 rounded-full p-2 px-4 text-sm text-[#2C1C5F]">{tag}</p>
                                ))}
                            </div>
                        </div>
                        <ul className="list-disc flex gap-x-12 my-4 mx-6">
                            {lessons && <li className="text-[#525866] text-sm font-normal">{`${lessons}`} Lessons</li>}
                            {duration && <li className="text-[#525866] text-sm font-normal">{duration}</li>}
                        </ul>

                        <div className="flex justify-between my-4 mt-8 mx-3">
                            <div className="text-[#344054]">
                                <p className="text-xs flex items-center gap-x-3">Total Amount </p>
                                <strong className="text-lg" >{price}</strong>
                            </div>
                            <Button onClick={handleClick} className="form-btn cursor-pointer bg-yellow-100 hover:bg-yellow-100/80 py-5 px-8 duration-150 mb-4">Enroll Now</Button>
                        </div>
                    </figcaption>
                </article>
            </div>
        </>
    );
};

export default CourseCard;
