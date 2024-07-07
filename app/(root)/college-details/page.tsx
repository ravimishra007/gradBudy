import Badge from '@/components/Badge';
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { affiliatedColleges, courseDetailData, coursesTableData, facilities, images, recruiterCompanies } from '@/constents/constents';
import Link from 'next/link';
import { FaQ } from '../faq/page';
import CourseCard from '@/components/CourseCard';


const CollegeDetails = () => {
    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white lg:rounded-tl-[50px] max-w-[1440px] my-10 w-full overflow-hidden sm:mx-10 lg:mx-10">
                    <div className="relative mb-10 md:mb-16">
                        <Image
                            className="w-full h-[384px] object-cover"
                            src="/images/image1.png"
                            alt="Image"
                            width={1440}
                            height={384}
                        />
                        <div className="absolute bg-black/70 inset-0 flex flex-col items-center justify-center text-center text-white px-3">
                            <div className="flex flex-col lg:flex-row w-full lg:max-w-[85%]">
                                <div className="lg:w-[15%] !mb-3 lg:mb-0 flex gap-x-4">
                                    <Image
                                        className="w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] object-cover"
                                        src="/images/image1.png"
                                        alt="Image"
                                        width={120}
                                        height={120}
                                    />
                                    <h3 className='subHeading text-start block lg:hidden'>Indian Institute of Technology Kanpur</h3>
                                </div>
                                <div className="text-[#F0F0F0] text-start w-full lg:w-[70%] text-xs sm:text-sm lg:text-lg font-normal">
                                    <h3 className='hidden lg:block subHeading'>College Name</h3>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.</p>
                                </div>
                                <div className="hidden lg:flex justify-center items-center gap-4 lg:w-[15%]">
                                    <h3 className="text-3xl font-semibold">
                                        4.5
                                    </h3>
                                    <div className='text-sm space-y-1' >
                                        <p>⭐⭐⭐⭐⭐</p>
                                        <p>5.6K reviews</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 lg:mt-8 flex flex-wrap lg:flex-nowrap justify-between items-center lg:gap-x-6 w-full lg:max-w-[85%]">
                                <div className="flex flex-col items-start lg:flex-row gap-x-10 gap-y-4 mt-3 lg:mt-0">
                                    <div className="flex justify-center items-center gap-x-3">
                                        <Image
                                            className="object-cover"
                                            src="/icons/location-icon.svg"
                                            alt="Image"
                                            width={20}
                                            height={20}
                                        />
                                        <p className="text-xs sm:text-sm lg:text-lg text-[#F0F0F0] font-medium max-w-[350px]">City, District, State</p>
                                    </div>
                                    <div className="flex justify-center items-center gap-x-3">
                                        <Image
                                            className="object-cover"
                                            src="/icons/location-icon.svg"
                                            alt="Image"
                                            width={20}
                                            height={20}
                                        />
                                        <p className="text-xs sm:text-sm lg:text-lg text-[#F0F0F0] font-medium max-w-[350px]">Affiliated to XYZ University</p>
                                    </div>
                                </div>
                                <div className="flex gap-x-10 mt-3 lg:mt-0">
                                    <div className="flex justify-center items-center gap-x-3">
                                        <Image
                                            className="object-cover"
                                            src="/icons/location-icon.svg"
                                            alt="Image"
                                            width={20}
                                            height={20}
                                        />
                                        <p className="text-xs sm:text-sm lg:text-lg text-[#F0F0F0] font-medium max-w-[350px]">NIRF Ranking 52</p>
                                    </div>

                                    <div className="flex justify-center items-center gap-x-3">
                                        <Image
                                            className="object-cover"
                                            src="/icons/location-icon.svg"
                                            alt="Image"
                                            width={20}
                                            height={20}
                                        />
                                        <p className="text-xs sm:text-sm lg:text-lg text-[#F0F0F0] font-medium max-w-[350px]">Founded in 1958</p>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center gap-x-6 sm:gap-x-10 mt-4 lg:mt-0'>
                                    <div className="flex lg:hidden justify-center items-center gap-4">
                                        <h3 className="text-2xl font-semibold">4.5</h3>
                                        <div className='text-sm space-y-1' >
                                            <p>⭐⭐⭐⭐⭐</p>
                                            <p className='text-xs sm:text-sm'>5.6K reviews</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Button className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-6 sm:px-16 duration-150 border-none">Update</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main  */}
                    <div className="p-4 sm:px-12">
                        <div className="w-full max-w-6xl mx-auto text-justify">

                            {/* Campus Details */}
                            <div className="space-y-10 mb-10">

                                <h1 className="subHeading">Campus Details</h1>

                                <p className="text-base lg:text-lg text-black/70 my-5">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.</p>

                                <Badge title='Spread over 60 Acres' />
                            </div>

                            {/* Other Facilities */}
                            <div>
                                <h1 className="subHeading">Other Facilities</h1>

                                <div className='flex gap-x-7 mt-5 gap-5 flex-wrap'>
                                    {facilities.map((facility, index) => (
                                        <Badge key={index} title={facility} />
                                    ))}
                                </div>
                            </div>

                            {/* Hostel Life */}
                            <div className="space-y-6 my-10">
                                <h1 className="subHeading">Hostel Life</h1>

                                <p className="text-base lg:text-lg text-black/70 my-5">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.</p>
                            </div>

                            {/* Gallery */}
                            <div className="space-y-6 my-10">
                                <h1 className="subHeading">Gallery</h1>

                                <div className="overflow-x-auto scroll-hide p-4">
                                    <div className="flex flex-nowrap space-x-10">
                                        {images.map((image, index) => (
                                            <div key={index} className="min-w-[100px] min-h-[100px] md:min-w-[250px] md:min-h-[250px]">
                                                <Image
                                                    src={image}
                                                    alt={`Image ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                    height={250}
                                                    width={250}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Course Details */}
                            <div className="space-y-6 my-10">
                                <h1 className="subHeading">Course Details</h1>

                                <p className="text-base lg:text-lg text-black/70 my-5">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.</p>

                                <div className='text-start'>
                                    <CourseDataTable />
                                </div>
                            </div>

                            {/* Placements Details */}
                            <div className="space-y-10 mb-10">

                                <h1 className="subHeading">Placements Details</h1>

                                <p className="text-base lg:text-lg text-black/70 my-5">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.</p>

                                <div className="flex gap-x-7">
                                    <Badge title='Highest Package: 30 LPA' />
                                    <Badge title='Average Package: 15 LPA' />
                                </div>
                            </div>

                            {/* Top Recruiters  */}
                            <div className="space-y-6 my-10">
                                <h3 className='text-lg font-semibold'>
                                    Top Recruiters
                                </h3>
                                <div className="flex flex-wrap gap-4 gap-x-7">
                                    {recruiterCompanies.map((imgSrc, index) => (
                                        <Badge key={index} imgSrc={imgSrc} />
                                    ))}
                                </div>
                            </div>

                            {/* Frequently Asked Questions */}
                            <div className="space-y-10 my-10 lg:my-16 text-start">
                                <h1 className="subHeading">Frequently Asked Questions</h1>
                                <FaQ />
                            </div>

                            {/* Other Courses by College 1 */}
                            <div className="my-10 lg:my-16">
                                <h3 className="subHeading mb-1">Other Courses by College 1</h3>

                                <div className="flex mt-6 sm:mt-10 lg:mt-16 flex-wrap gap-6 sm:gap-10 justify-around">
                                    {courseDetailData.slice(0, 3).map((course) => (
                                        <CourseCard key={course.id} {...course} />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}




const CourseDataTable = () => {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow className="text-[#280847] text-base font-semibold">
                        <TableHead className="min-w-[140px]">Course Name</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead className="min-w-[220px]">Specialisation</TableHead>
                        <TableHead className="min-w-[140px]">Criteria</TableHead>
                        <TableHead className="min-w-[150px]">Accepted Exams</TableHead>
                        <TableHead className="min-w-[100px]">Fees</TableHead>
                        <TableHead className="min-w-[180px]">Details</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {coursesTableData.map((course, index) => (
                        <TableRow key={index}>
                            <TableCell className='text-[#280847] font-medium'>{course.courseName}</TableCell>
                            <TableCell>{course.duration}</TableCell>
                            <TableCell>
                                <ul>
                                    {course.specialisation.map((spec, idx) => (
                                        <li key={idx}>{spec}</li>
                                    ))}
                                </ul>
                            </TableCell>
                            <TableCell>{course.criteria}</TableCell>
                            <TableCell>{course.acceptedExams}</TableCell>
                            <TableCell>{course.fees}</TableCell>
                            <TableCell>{course.details}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}





export default CollegeDetails