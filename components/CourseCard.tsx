'use client';

import { CourseCardProps } from '@/constents/types';
import Image from 'next/image';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const CourseCard = ({ id, imgSrc, courseTitle, teacherName, tags, details, amount, buttonText, institute, instituteLogo }: CourseCardProps) => {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/course/${courseTitle.toLowerCase().split(' ').join('-')}`);
    };

    return (
        <>
            <div className="flex flex-col gap-10 sm:gap-16 w-full max-w-[340px] rounded-[12px] overflow-hidden [box-shadow:2px_2px_40px_4px_#6941C61A]">

                <article className={`flex flex-col gap-6`}>
                    <Link href="/course/course-detail">
                        <figure className="flex-center w-full  relative">
                            <Image className="w-full h-[180px] object-cover" src={imgSrc} alt="Image" width={340} height={180} />
                        </figure>
                    </Link>

                    <figcaption className="w-full lg:mt-0 px-4">

                        <h3 className="text-sm sm:text-base mb-4 font-medium text-[#344054]">{institute}</h3>

                        <div>
                            <h3 className="text-xl font-bold leading-6 capitalize" >{courseTitle}</h3>
                            <h3 className="text-lg font-medium mb-3 mt-1 text-[#6941C6]">{teacherName}</h3>

                            <div className="flex gap-6 pt-2">
                                {tags.map((tag, index) => (
                                    <p key={index} className="bg-[#6941C6]/10 rounded-full p-2 px-4 text-sm text-[#2C1C5F]">{tag}</p>
                                ))}
                            </div>
                        </div>
                        <ul className="list-disc flex gap-x-12 my-4 mx-6">
                            {details.map((item, index) => (
                                <li className="text-[#525866] text-sm font-normal" key={index}>{item}</li>
                            ))}
                        </ul>

                        <div className="flex justify-between my-4 mt-8 mx-3">
                            <div className="text-[#344054]">
                                <p className="text-xs flex items-center gap-x-3">Total Amount </p>
                                <strong className="text-lg" >{amount}</strong>
                            </div>
                            <Button onClick={handleClick} className="form-btn cursor-pointer bg-yellow-100 hover:bg-yellow-100/80 py-5 px-8 duration-150 mb-4">{buttonText}</Button>
                        </div>
                    </figcaption>
                </article>
            </div>
        </>
    );
};

export default CourseCard;
