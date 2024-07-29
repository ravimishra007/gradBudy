"use client";

import { courseDetailDataProp } from '@/constents/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
// import { AddToFavProf } from '@/lib/features/favourite-professors/FavouriteProfessorsSlice';
import { useRouter } from 'next/navigation';
import { useToast } from './ui/use-toast';
import { Course } from '@/lib/features/courses/coursesSlice';
import { selectLoggedInUser } from '@/lib/features/auth/authSlice';
import { Professor } from '@/lib/features/professor/professorSlice';
import { deleteFavProfById, fetchFavProfs, fetchFavProfsByUserId, selectFavProfs } from '@/lib/features/favourite-professors/FavouriteProfessorsSlice';
import { getProfessorById } from '@/lib/features/professor/professorAPI';
import { createFavProf } from '@/lib/features/favourite-professors/favProfessorAPI';

const AboutMentor = ({ professorId }: { professorId: string }) => {
    const id = professorId;

    const dispatch = useAppDispatch();
    const router = useRouter();
    const { toast } = useToast();
    const user = useAppSelector(selectLoggedInUser);

    const [professor, setProfessor] = useState<Professor | null>(null);
    const [error, setError] = useState<string | null>(null);

    const favProfs = useAppSelector(selectFavProfs);

    useEffect(() => {
        if (user?.user?.id) {
            dispatch(fetchFavProfs());
            dispatch(fetchFavProfsByUserId(user.user.id));
        }
    }, [dispatch, user?.user?.id]);

    useEffect(() => {
        const fetchProfessor = async () => {
            try {
                const data = await getProfessorById(id);
                setProfessor(data);
            } catch (err) {
                setError("Failed to fetch professor details");
            }
        };

        fetchProfessor();
    }, [id]);
    
    if (!id) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>;
    }

    const handlefavProf = async (userId: any, profId: string) => {
        try {
            const isAlreadyFavorite = favProfs.some((fav: any) => fav.profId === profId);

            if (isAlreadyFavorite) {
                // Show already added toast
                toast({
                    title: "Already Added",
                    description: `${professor?.info.name.first} ${professor?.info.name.last} is already in your favorites.`,
                });
            } else {
                // Add favorite professor
                const response = await createFavProf(userId, profId);
                console.log("Favorite professor added successfully:", response);

                // Show success toast
                toast({
                    title: "Success",
                    description: `${professor?.info.name.first} ${professor?.info.name.last} is successfully added to favourites.`,
                });

                // Refetch favorite professors
                dispatch(fetchFavProfsByUserId(userId));
            }
        } catch (error) {
            console.error("Error adding favorite professor:", error);
        }
    };

    const handleRemoveFromFavourites = async (favProfId: string) => {
        try {
            // Remove favorite professor
            await dispatch(deleteFavProfById(favProfId));

            // Show success toast
            toast({
                title: "Success",
                description: `${professor?.info.name.first} ${professor?.info.name.last} is successfully removed from favourites.`,
            });
        } catch (error) {
            console.error("Error removing favorite professor:", error);
        }
    };

    const isFavorite = favProfs.some((fav: any) => fav.profId === id);
    const favProfId = favProfs.find((fav: any) => fav.profId === id)?._id;

    return (
        <div className="my-10 sm:my-16">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div className="flex flex-row items-center gap-x-6 sm:gap-x-8 my-4 sm:my-8">
                    <h3 className="subHeading mb-1" >About the Mentor</h3>
                    <h4 className="text-sm sm:text-lg md:text-xl font-medium capitalize text-[#6941C6]" >{`${professor?.info.name?.first} ${professor?.info.name?.middle} ${professor?.info.name?.last}`}</h4>
                </div>
                {isFavorite ? (
                    <Button onClick={() => handleRemoveFromFavourites(favProfId)} className="hidden lg:flex form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-16 duration-150 mb-4">Remove From Favourites</Button>
                ) : (
                    <Button onClick={() => handlefavProf(user?.user.id, `${id}`)} className="hidden lg:flex form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-16 duration-150 mb-4">Add to Favourites</Button>
                )}
            </div>

            <div>
                <div className="flex flex-col sm:mt-10 md:mt-5 lg:flex-row md:items-center gap-4 my-5 mb-10 rounded-sm">
                    <div className='flex gap-x-4 sm:gap-x-8 items-center'>
                        <Image
                            className="sm:h-24 h-14 w-14 sm:w-24 object-cover rounded-full"
                            src={professor?.info.profilePhoto ? professor?.info.profilePhoto : "/icons/profile.svg"} alt='profile Pic'
                            width={100}
                            height={100}
                        />
                        <div className="text-xs sm:text-sm md:text-base font-normal">
                            <p>{professor?.education[0].name}</p>
                            {professor?.info.linkedin && <Link href={`${professor?.info.linkedin}`} >LinkedIn</Link>}
                            <p className='text-blue-800 cursor-pointer'>
                                <Link href={`mailto:${professor?.info.email}`} >{professor?.info.email}</Link>
                            </p>
                        </div>
                    </div>
                    <div>

                        {isFavorite ? (
                            <Button onClick={() => handleRemoveFromFavourites(favProfId)} className="mt-5 flex lg:hidden form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-16 duration-150 sm:mb-4">Remove From Favourites</Button>
                        ) : (
                            <Button onClick={() => handlefavProf(user?.user.id, `${id}`)} className="mt-5 flex lg:hidden form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-16 duration-150 sm:mb-4">Add to Favourites</Button>
                        )}
                    </div>
                </div>
                <p className="text-base text-justify sm:text-lg font-medium text-black/60">{professor?.info.desc.slice(0, 450)}....<Link className="text-[#6941C6]" href={`/course/favourite-professor/detail/${id}`} >see more</Link></p>
            </div>
        </div>
    )
}

export default AboutMentor;
