"use client"

import CourseCard from '@/components/CourseCard'
import MainHeader from '@/components/MainHeader'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { courseDetailData } from '@/constents/constents'
import { RemoveFromFavProf } from '@/lib/features/favourite-professors/FavouriteProfessorsSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function FavouriteProfDetails({ params }: { params: { prof: string } }) {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const { toast } = useToast()

    const professorId = parseInt(params.prof, 10);

    // Find the course that has the professor with the matching ID
    const course = courseDetailData.find((course) => course.mentor.id === professorId);

    if (!course) {
        return <div>Professor not found</div>;
    }

    const { mentor } = course;

    const handleRemoveFromFavourites = (id: number) => {
        dispatch(RemoveFromFavProf(id));
        toast({
            title: "Success",
            description: `${mentor.name} is successfully removed from favourites.`,
        })
        router.push("/course/favourite-professor")
    };

    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-4 sm:overflow-hidden sm:p-12 sm:mx-10 md:mx-16">
                    <div className='flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-2/3 relative'>
                            <div className="hidden lg:flex flex-col">
                                <MainHeader title={`${mentor.name}`} subTitle="Select your desired courses to expand your knowledge" />
                                <p className="text-base text-[#6941C6] font-medium md:-mt-8 -mt-4">University of Texas</p>
                            </div>

                            <div className='flex justify-between lg:hidden'>
                                <div className='flex flex-col gap-y-1 mt-3 text-sm font-medium text-[#6941C6]'>
                                    <h2 className='font-bold text-xl text-black'>{mentor.name}</h2>
                                    <p className='text-sm font-semibold'>{mentor.university}</p>
                                    <div className="mt-2 flex flex-col">
                                        <Link className="underline" href={`${mentor.linkedin}`} >LinkedIn</Link>
                                        <Link className='text-black/60 underline' href={`mailto:${mentor.email}`} >{mentor.email}</Link>
                                    </div>
                                </div>
                                <Image className="object-cover sm:h-16 sm:w-16 h-24 w-24 rounded-full mr-3" src="/icons/profile.svg" alt='profile' width={100} height={100} />

                            </div>

                            <div className="flex gap-7 mt-7">
                                <div className={`uppercase text-[#2C1C5F] flex flex-col`}>
                                    <p className="font-semibold text-3xl md:text-4xl leading-tight">{mentor.totalStudents}</p>
                                    <span className="text-sm md:text-lg font-medium leading-5">Total Students</span>
                                </div>
                                <div className={`uppercase text-[#2C1C5F] flex flex-col`}>
                                    <p className="font-semibold text-3xl md:text-4xl leading-tight">{mentor.totalCourses}</p>
                                    <span className="text-sm md:text-lg font-medium leading-5">Total Courses</span>
                                </div>
                            </div>

                            <div className='block lg:hidden'>
                                <Button onClick={() => handleRemoveFromFavourites(mentor.id)} className="form-btn w-full bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-10 sm:px-16 duration-150 !mt-6">Remove from Favourites</Button>
                            </div>

                            <p className="my-8 text-justify">{mentor.bio}</p>

                            {/* Educational Background  */}
                            <div className="text-[#344054] mb-7 space-y-7">
                                <h3 className="text-[22px] font-semibold text-black">Educational Background</h3>

                                {mentor.education?.map((edu, idx) => (
                                    <div key={idx} className="my-7 space-y-3">
                                        <h4 className="text-xl font-semibold">{edu.university}</h4>
                                        <div className="flex justify-between items-center text-base font-medium mt-2">
                                            <p>{edu.degree}</p>
                                            <p>{edu.year}</p>
                                        </div>
                                        {edu.description && <p className="text-justify">{edu.description}</p>}
                                    </div>
                                ))}
                            </div>

                            {/* Experience  */}
                            <div className="text-[#344054]">
                                <h3 className="text-[22px] font-semibold text-black">Experience</h3>

                                {mentor.experience?.map((exp, idx) => (
                                    <div key={idx} className="my-7 space-y-3">
                                        <h4 className="text-xl font-semibold">{exp.university}</h4>
                                        <div className="flex justify-between items-center text-base font-medium mt-2">
                                            <p>{exp.position}</p>
                                            <p>{exp.duration}</p>
                                        </div>
                                        {exp.description && <p className="text-justify">{exp.description}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='lg:w-1/3 hidden lg:flex flex-col items-center'>
                            <Image className="object-cover" src="/icons/profile.svg" alt='profile' width={192} height={192} />
                            <div className='flex flex-col items-center gap-y-2 mt-3 text-lg font-medium text-[#6941C6]'>
                                <Link href={`${mentor.linkedin}`} >LinkedIn</Link>
                                <Link href={`mailto:${mentor.email}`} >{mentor.email}</Link>

                                <Button onClick={() => handleRemoveFromFavourites(mentor.id)} className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-10 xl:px-16 duration-150 !mt-6">Remove from Favourites</Button>
                            </div>
                        </div>
                    </div>

                    {/* Other Relevant Courses */}
                    <div className="my-10 mt-16">
                        <h3 className="subHeading mb-1">Other Courses by Professor {mentor.name}</h3>

                        <div className="flex mt-10 sm:mt-14 lg:mt-20 flex-wrap gap-6 sm:gap-10 justify-around">
                            {courseDetailData.slice(0, 3).map((course) => (
                                <CourseCard key={course.id} {...course} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}