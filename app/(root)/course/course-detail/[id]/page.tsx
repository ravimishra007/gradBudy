import AboutMentor from '@/components/AboutMentor';
import CourseCard from '@/components/CourseCard';
import CourseOutline from '@/components/CourseOutline';
import { Button } from '@/components/ui/button'
import { courseDetailData } from '@/constents/constents';
import { LableCardProps } from '@/constents/types';
import Image from 'next/image'
import Link from 'next/link';

export default function Page({ params }: { params: { id: string } }) {
    // Find the course data by ID
    const courseData = courseDetailData.find(course => course.id === parseInt(params.id as string));
    if (!courseData) {
        return console.error("Course does not exist.");
    }

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

    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-4 sm:overflow-hidden sm:p-12 sm:mx-10 md:mx-16">
                    <div>
                        {/* Hero  */}
                        <div className="flex flex-col gap-10 sm:gap-16">
                            <article className={`flex flex-col lg:flex-row gap-6`}>
                                <figure className="lg:max-w-[33.33%] flex-center w-full relative">
                                    <Image className="h-[199px] object-cover sm:h-[291px]" src={courseData.courseImg} alt={courseData.title} width={340} height={291} />
                                </figure>

                                <figcaption className="lg:max-w-[66.66%] w-full lg:mt-0">

                                    <div>
                                        <h3 className="subHeading">{courseData.title}</h3>

                                        <div className="flex items-center gap-4 my-4 rounded-sm">
                                            <Image
                                                src={courseData.mentor.profileImg}
                                                alt={courseData.mentor.name}
                                                width={30}
                                                height={30}
                                                priority
                                            />
                                            <h3 className="text-lg font-medium text-[#6941C6]">{courseData.mentor.name}</h3>
                                        </div>
                                        <div className="flex gap-6 pt-2">
                                            {courseData.majorSkills && courseData.majorSkills.map((skill, idx) => (
                                                <p key={idx} className="bg-[#6941C6]/10 rounded-full p-2 px-4 text-sm text-[#2C1C5F]">{skill}</p>
                                            ))}
                                        </div>
                                    </div>


                                    <p className="py-4 sm:py-6 text-justify" >{courseData.description}</p>

                                    <div className="-mt-3 text-[#344054] space-y-1">
                                        <p className="text-xs flex items-center gap-x-3">Total Amount <strong className="text-lg" >{courseData.price}</strong></p>
                                        <p className='text-sm md:hidden'>{courseData.reviews.alreadyRegistered} Already Registered</p>
                                        <p className='text-sm'>
                                            {renderStars(courseData.reviews.rating)} {courseData.reviews.count} reviews
                                        </p>
                                    </div>
                                </figcaption>

                                <Button className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-6 px-16 duration-150 mb-4"> Register</Button>
                            </article>
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-10 xl:gap-[7vw] mx-auto">
                                {courseData.labels.map((data, idx) => (
                                    <LableCard key={idx} iconSrc={data.iconSrc} lable={data.label} name={`${data.name}`} />
                                ))}
                            </div>
                        </div>

                        {/* What you will Learn */}
                        <div className="my-10 sm:my-16">
                            <h3 className="subHeading my-4 sm:my-8" >What you will Learn</h3>
                            <p className="text-base sm:text-lg font-medium text-justify text-black/60" >
                                {courseData.detailedDescription}
                            </p>

                            <div className="my-8 lg:my-16 px-2 md:mx-6 lg:mx-16 space-y-5 lg:space-y-10 ">
                                <CourseOutline course={courseData.courseOutlineData} />
                            </div>
                        </div>

                        {/* Requirements */}
                        <div className="my-10 sm:my-16">
                            <h3 className="subHeading my-4 sm:my-8" >Requirements</h3>
                            <ul className="text-base text-justify sm:text-lg list-disc pl-5 sm:pl-10 font-medium text-black/60">
                                {courseData.requirements.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* About the Mentor */}
                        <AboutMentor {...courseData} />
                    </div>

                    {/* Other Relevant Courses */}
                    <div className="my-10 mt-16 lg:my-20 lg:mt-28">
                        <h3 className="subHeading mb-1">Other Relevant Courses</h3>

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