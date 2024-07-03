"use client";

import { courseDetailDataProp } from '@/constents/types'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { useAppDispatch } from '@/lib/hooks';
import { AddToFavProf } from '@/lib/features/favourite-professors/FavouriteProfessorsSlice';
import { useRouter } from 'next/navigation';
import { useToast } from './ui/use-toast';

const AboutMentor = ({ mentor }: courseDetailDataProp) => {

    const dispatch = useAppDispatch();
    const router = useRouter()
    const { toast } = useToast()

    const handleAddToFavourites = () => {
        dispatch(AddToFavProf({ ...mentor }));
        toast({
            title: "Success",
            description: `${mentor.name} is successfully added to favourites.`,
        })
        router.push('/course/favourite-professor')
    };

    return (
        <div className="my-10 sm:my-16">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div className="flex flex-row items-center gap-x-6 sm:gap-x-8 my-4 sm:my-8">
                    <h3 className="subHeading mb-1" >About the Mentor</h3>
                    <h4 className="text-lg sm:text-xl font-medium capitalize text-[#6941C6]" >{mentor.name}</h4>
                </div>
                <Button onClick={handleAddToFavourites} className="hidden lg:flex form-btn bg-yellow-100 hover:bg-yellow-100/80 py-6 px-16 duration-150 mb-4">Add to Favourites</Button>
            </div>

            <div>
                <div className="flex flex-col sm:mt-10 md:mt-5 lg:flex-row md:items-center gap-4 my-5 mb-10 rounded-sm">
                    <div className='flex gap-x-8 items-center'>
                        <Image
                            className="h-24 w-24 object-cover"
                            src={mentor.profileImg}
                            alt={mentor.name}
                            width={100}
                            height={100}
                        />
                        <div className="md:text-base font-normal">
                            <p>{mentor.university}</p>
                            <Link className="text-blue-800 underline cursor-pointer" href="www.linkedin.com/in/" target="_blank">{mentor.linkedin}</Link>
                            <p className='text-blue-800 cursor-pointer'>
                                <Link className="text-blue-800 underline cursor-pointer"
                                    href={`mailto:${mentor.email}`}>
                                    {mentor.email}
                                </Link>
                            </p>
                        </div>
                    </div>
                    <Button onClick={handleAddToFavourites} className="mt-5 flex lg:hidden form-btn bg-yellow-100 hover:bg-yellow-100/80 py-6 px-16 duration-150 mb-4">Add to Favourites</Button>
                </div>
                <p className="text-lg font-medium text-black/60">{mentor.bio.slice(0, 450)}....<Link className="text-[#6941C6]" href={`/course/favourite-professor/detail/${mentor.id}`} >see more</Link></p>
            </div>
        </div>
    )
}

export default AboutMentor