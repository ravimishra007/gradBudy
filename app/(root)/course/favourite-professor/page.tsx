"use client";

import MainHeader from '@/components/MainHeader'
import FavouriteProfessorsCard from '@/components/ui/FavouriteProfessorsCard';
import { useAppSelector } from '@/lib/hooks';
import React, { useEffect } from 'react';

const FavouriteProfessors = () => {
    const favProfs = useAppSelector((state) => state.favouriteProfessors.favouriteProfessors);

    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-2 sm:p-12 mx-2 sm:mx-10 md:mx-16">
                    <MainHeader title="Favourite Professors" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                    {favProfs.length === 0 && (
                        <div className="text-center flex justify-center items-center h-[50vh] w-full">
                            <span className="text-2xl font-semibold">There is nothing yet!</span>
                        </div>
                    )}
                    <div className="mt-20 flex flex-wrap justify-around gap-y-20">
                        {favProfs && favProfs.map((professor) => (
                            <FavouriteProfessorsCard
                                key={professor.id}
                                id={professor.id}
                                imgSrc={professor.profileImg}
                                name={professor.name}
                                college={professor.university}
                                bio={professor.bio}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FavouriteProfessors;
