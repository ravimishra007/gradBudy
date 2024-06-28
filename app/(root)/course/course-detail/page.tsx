import CourseCard from '@/components/CourseCard';
import CourseOutline from '@/components/CourseOutline';
import { Button } from '@/components/ui/button'
import { courseData, courses } from '@/constents/constents';
import { LableCardProps, CourseCardProps } from '@/constents/types';
import Image from 'next/image'
import Link from 'next/link';

const listItems: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam"
];

const teacherStats: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam",
];


const CourseDetail = () => {
    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-4 sm:overflow-hidden sm:p-12 sm:mx-10 md:mx-16">

                    {/* Hero  */}
                    <div className="flex flex-col gap-10 sm:gap-16">
                        <article className={`flex flex-col lg:flex-row gap-6`}>
                            <figure className="lg:max-w-[33.33%] flex-center w-full relative">
                                <Image className="h-[199px] object-cover sm:h-[291px]" src="/images/course-img.png" alt="Image" width={340} height={291} />
                            </figure>

                            <figcaption className="lg:max-w-[66.66%] w-full lg:mt-0">

                                <div>
                                    <h3 className="subHeading" >Management Skills</h3>

                                    <div className="flex items-center gap-4 my-4 rounded-sm">
                                        <Image
                                            src="/icons/profile.svg"
                                            alt="Profile"
                                            width={30}
                                            height={30}
                                            priority
                                        />
                                        <h3 className="text-lg font-medium text-[#6941C6]">Teacher name</h3>
                                    </div>
                                    <div className="flex gap-6 pt-2">
                                        <p className="bg-[#6941C6]/10 rounded-full p-2 px-4 text-sm text-[#2C1C5F]">Leadership</p>
                                        <p className="bg-[#6941C6]/10 rounded-full p-2 px-4 text-sm text-[#2C1C5F]">Management</p>
                                    </div>
                                </div>


                                <p className="py-4 sm:py-6 text-justify" >“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in</p>

                                <div className="-mt-3 text-[#344054] space-y-1">
                                    <p className="text-xs flex items-center gap-x-3">Total Amount <strong className="text-lg" >$499.99</strong></p>
                                    <p className='text-sm md:hidden'>5.6K Already Registered</p>

                                    <p className='text-sm'>5.0 ⭐⭐⭐⭐⭐ 5.6K reviews</p>
                                </div>
                            </figcaption>

                            <Button className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-6 px-16 duration-150 mb-4"> Register</Button>
                        </article>
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 xl:gap-[7vw] mx-auto">
                            <LableCard iconSrc="/icons/stats.svg" lable="Skill Level" name={'Beginner'} />
                            <LableCard iconSrc="/icons/eye.svg" lable="Views" name={14526} />
                            <LableCard iconSrc="/icons/video.svg" lable="Lessons" name={4} />
                            <LableCard iconSrc="/icons/timer.svg" lable="Duration" name={"20 Hours"} />
                        </div>
                    </div>

                    {/* What you will Learn */}
                    <div className="my-10 sm:my-16">
                        <h3 className="subHeading my-4 sm:my-8" >What you will Learn</h3>
                        <p className="text-lg font-medium text-black/60" >
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam <span className="hidden md:inline">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam</span>
                        </p>

                        <div className="my-8 lg:my-16 px-2 md:mx-6 lg:mx-16 space-y-5 lg:space-y-10 ">
                            <CourseOutline course={courseData} />
                        </div>
                    </div>

                    {/* Requirements */}
                    <div className="my-10 sm:my-16">
                        <h3 className="subHeading my-4 sm:my-8" >Requirements</h3>
                        <ul className="text-lg list-disc pl-5 sm:pl-10 font-medium text-black/60">
                            {listItems.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About the Mentor */}
                    <div className="my-10 sm:my-16">
                        <div className="flex flex-col md:flex-row justify-between md:items-center">
                            <div className="flex flex-row items-center gap-x-6 sm:gap-x-8 my-4 sm:my-8">
                                <h3 className="subHeading mb-1" >About the Mentor</h3>
                                <h4 className="text-lg sm:text-xl font-medium capitalize text-[#6941C6]" >Teacher Name</h4>
                            </div>
                            <Button className="hidden lg:flex form-btn bg-yellow-100 hover:bg-yellow-100/80 py-6 px-16 duration-150 mb-4">Add to Favourites</Button>
                        </div>

                        <div>
                            <div className="flex flex-col sm:mt-10 md:mt-5 lg:flex-row md:items-center gap-4 my-5 mb-10 rounded-sm">
                                <div className='flex gap-x-8 items-center'>
                                    <Image
                                        className="h-24 w-24 object-cover"
                                        src="/icons/profile.svg"
                                        alt="Profile"
                                        width={100}
                                        height={100}
                                    />
                                    <div className="block lg:hidden">
                                        <p>university of Texas</p>
                                        <Link className="text-blue-800 underline cursor-pointer" href="www.linkedin.com/in/" target="_blank">Linkedin Link</Link>
                                        <p className='text-blue-800 cursor-pointer'>Email@gmail.com</p>
                                    </div>
                                </div>
                                <Button className="mt-5 flex lg:hidden form-btn bg-yellow-100 hover:bg-yellow-100/80 py-6 px-16 duration-150 mb-4">Add to Favourites</Button>
                                <ul className="hidden lg:inline-block text-lg md:pl-5 lg:pl-10 font-medium text-black/60">
                                    {teacherStats.map((item, index) => (
                                        <li className="my-1" key={index}>
                                            Stat {index + 1} : {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-lg font-medium text-black/60">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam <span className='hidden md:inline'> “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam </span> “Lorem ipsum dolor sit amet, consectetur adipiscing elit....<Link className="text-[#6941C6]" href="/" >see more</Link></p>
                        </div>
                    </div>


                    {/* Other Relevant Courses */}
                    <div className="my-10 mt-16 lg:my-20 lg:mt-28">
                        <h3 className="subHeading mb-1">Other Relevant Courses</h3>

                        <div className="flex mt-10 sm:mt-14 lg:mt-20 flex-wrap gap-6 sm:gap-10 justify-around">
                            {courses.slice(0, 3).map((course) => (
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
            <h4 className=" text-base font-normal text-black/50">{lable}</h4>
            <div className="flex items-center gap-x-2 sm:gap-x-4" >
                <Image className='w-6 h-5' src={iconSrc} alt={lable} width={30} height={30} />
                <h3 className="font-bold text-lg sm:text-xl text-[#0A0D14] opacity-90 capitalize">{name}</h3>
            </div>
        </div>
    );
};

export default CourseDetail