"use client"

import CourseCard from '@/components/CourseCard'
import MainHeader from '@/components/MainHeader'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { courseDetailData } from '@/constents/constents'
import { selectLoggedInUser } from '@/lib/features/auth/authSlice'
import { deleteFavProfById, fetchFavProfs, fetchFavProfsByUserId, selectFavProfs } from '@/lib/features/favourite-professors/FavouriteProfessorsSlice'
import { createFavProf, deleteFavProf } from '@/lib/features/favourite-professors/favProfessorAPI'
import { getProfessorById } from '@/lib/features/professor/professorAPI'
import { Professor } from '@/lib/features/professor/professorSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface ProfessorDetailProps {
    professor: Professor | null;
}


export default function FavouriteProfDetails({ params }: { params: { prof: string } }) {
    const dispatch = useAppDispatch()
    const id = params.prof;
    const user = useAppSelector(selectLoggedInUser)
    const router = useRouter()
    const { toast } = useToast()

    const [professor, setProfessor] = useState<Professor | null>(null);
    const [error, setError] = useState<string | null>(null);

    // const [favProfessor, setFavProfessor] = useState<Professor | null>(null);

    const favProfs = useAppSelector(selectFavProfs);

    useEffect(() => {
        if (user?.user?.id) {
            dispatch(fetchFavProfs());
            dispatch(fetchFavProfsByUserId(user?.user.id));
        }
    }, [dispatch, user?.user.id]);

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

    if (error) {
        return <div>{error}</div>;
    }

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

    const calculateDurationInYears = (startDate: any, endDate: any): any => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const differenceInMs = end.getTime() - start.getTime();
        const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

        const years = differenceInMs / millisecondsInYear;
        return Math.floor(years);
    };

    const extractYear = (dateString: string): string => {
        return new Date(dateString).getFullYear().toString(); // Extract and return the year part of the date
    };

    const isFavorite = favProfs.some((fav: any) => fav.profId === id);
    const favProfId = favProfs.find((fav: any) => fav.profId === id)?._id;

    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-4 sm:overflow-hidden sm:p-12 sm:mx-10 md:mx-16">
                    <div className='flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-2/3 relative'>
                            <div className="hidden lg:flex flex-col">
                                <MainHeader title={`${professor?.info.name?.first} ${professor?.info.name?.middle} ${professor?.info.name?.last}`} subTitle="Select your desired courses to expand your knowledge" />
                                <p className="text-base text-[#6941C6] font-medium md:-mt-8 -mt-4">{professor?.education[0]?.name}</p>
                            </div>

                            <div className='flex justify-between lg:hidden'>
                                <div className='flex flex-col gap-y-1 mt-3 text-sm font-medium text-[#6941C6]'>
                                    <h2 className='font-bold text-xl text-black'>{`${professor?.info.name?.first} ${professor?.info.name?.middle} ${professor?.info.name?.last}`}</h2>
                                    <p className='text-sm font-semibold'>{professor?.education[0].name}</p>
                                    <div className="mt-2 flex flex-col">
                                        {professor?.info.linkedin && <Link className="underline" href={`${professor?.info.linkedin}`} >LinkedIn</Link>}
                                        <Link className='text-black/60 underline' href={`mailto:${professor?.info.email}`} >{professor?.info.email}</Link>
                                    </div>
                                </div>
                                <Image className="object-cover sm:h-16 sm:w-16 h-24 w-24 rounded-full mr-3" src={professor?.info.profilePhoto ? professor?.info.profilePhoto : "/icons/profile.svg"} alt='profile' width={100} height={100} />

                            </div>

                            <div className="flex gap-7 mt-7">
                                <div className={`uppercase text-[#2C1C5F] flex flex-col`}>
                                    <p className="font-semibold text-3xl md:text-4xl leading-tight">{'Not in DB'}</p>
                                    <span className="text-sm md:text-lg font-medium leading-5">Total Students</span>
                                </div>
                                <div className={`uppercase text-[#2C1C5F] flex flex-col`}>
                                    <p className="font-semibold text-3xl md:text-4xl leading-tight">{'Not in DB'}</p>
                                    <span className="text-sm md:text-lg font-medium leading-5">Total Courses</span>
                                </div>
                            </div>

                            <div className='block lg:hidden'>
                                {isFavorite ? (
                                    <Button
                                        onClick={() => handleRemoveFromFavourites(favProfId)}
                                        className="form-btn w-full bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-10 sm:px-16 duration-150 !mt-6"
                                    >
                                        Remove from Favourites
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() => handlefavProf(user?.user?.id, id)}
                                        className="form-btn w-full bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-10 sm:px-16 duration-150 !mt-6"
                                    >
                                        Add to Favourites
                                    </Button>
                                )}
                            </div>

                            <p className="my-8 text-justify">{professor?.info.desc}</p>

                            {/* Educational Background  */}
                            <div className="text-[#344054] mb-7 space-y-7">
                                <h3 className="text-[22px] font-semibold text-black">Educational Background</h3>

                                {professor?.education?.map((edu: any, idx: any) => (
                                    <div key={idx} className="my-7 space-y-3">
                                        <h4 className="text-xl font-semibold">{edu.name}</h4>
                                        <div className="flex justify-between items-center text-base font-medium mt-2">
                                            <p>{edu.degree}</p>
                                            <p>{extractYear(edu.gradYear)}</p>
                                        </div>
                                        {edu.profileDesc && <p className="text-justify">{edu.profileDesc}</p>}
                                    </div>
                                ))}
                            </div>

                            {/* Experience  */}
                            <div className="text-[#344054]">
                                <h3 className="text-[22px] font-semibold text-black">Experience</h3>

                                {professor?.experience?.map((exp, idx) => {
                                    const duration = calculateDurationInYears(exp.startDate, exp.endDate);
                                    return (
                                        <div key={idx} className="my-7 space-y-3">
                                            <h4 className="text-xl font-semibold">{exp.org}</h4>
                                            <div className="flex justify-between items-center text-base font-medium mt-2">
                                                <p>{exp.designation}</p>
                                                <p>{duration} Years</p>
                                            </div>
                                            {exp.desc && <p className="text-justify">{exp.desc}</p>}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='lg:w-1/3 hidden lg:flex flex-col items-center'>
                            <Image className="object-cover w-[192px] h-[192px] rounded-full" src={professor?.info.profilePhoto ? professor?.info.profilePhoto : "/icons/profile.svg"} alt='profile' width={192} height={192} />
                            <div className='flex flex-col items-center gap-y-2 mt-3 text-lg font-medium text-[#6941C6]'>
                                {professor?.info.linkedin && <Link href={`${professor?.info.linkedin}`} >LinkedIn</Link>}
                                <Link href={`mailto:${professor?.info.email}`} >{professor?.info.email}</Link>
                                {isFavorite ? (
                                    <Button
                                        onClick={() => handleRemoveFromFavourites(favProfId)}
                                        className="form-btn w-full bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-10 sm:px-16 duration-150 !mt-6"
                                    >
                                        Remove from Favourites
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() => handlefavProf(user?.user?.id, id)}
                                        className="form-btn w-full bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-10 sm:px-16 duration-150 !mt-6"
                                    >
                                        Add to Favourites
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Other Relevant Courses */}
                    <div className="my-10 mt-16">
                        <h3 className="subHeading mb-1">Other Courses by Professor {`${professor?.info.name?.first} ${professor?.info.name?.last}`}</h3>

                        <div className="flex mt-10 sm:mt-14 lg:mt-20 flex-wrap gap-6 sm:gap-10 justify-around">
                            {/* {courseDetailData.slice(0, 3).map((course) => (
                                <CourseCard key={course.id} {...course} />
                            ))} */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}