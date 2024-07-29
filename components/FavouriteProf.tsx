"use client"

import React, { useEffect } from 'react'
import FavouriteProfessorsCard from './ui/FavouriteProfessorsCard';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchProfessors, selectAllProfessors, selectProfessorError, selectProfessorStatus } from '@/lib/features/professor/professorSlice';

const FavouriteProf = () => {
    const dispatch = useAppDispatch()

    const professors = useAppSelector(selectAllProfessors);
    const status = useAppSelector(selectProfessorStatus);
    const error = useAppSelector(selectProfessorError);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProfessors());
        }
    }, [dispatch, status]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "failed") {
        return <div>Error: {error}</div>;
    }

    return (
        <section id='Featured_Universities' className="px-5 sm:px-16 lg:px-0 max-w-7xl w-full mx-auto pb-20 pt-8">
            <div className='flex flex-col gap-y-10 lg:flex-row'>
                <div className='lg:max-w-lg w-full md:p-5 mb-10 lg:mb-0'>
                    <h1 className='heading'>Favourite Professors</h1>
                    <p className='paragraph !text-black/70 mt-3 !lg:max-w-sm'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “ ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='flex flex-col items-center md:flex-row gap-10 gap-y-16'>
                    {professors && professors.slice(0, 2).map((professor) => (
                        <FavouriteProfessorsCard
                            key={professor._id}
                            id={professor._id}
                            profId={professor._id}
                            showbtn={false}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FavouriteProf