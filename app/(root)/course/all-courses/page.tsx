"use client";

import CourseCard from '@/components/CourseCard';
import MainHeader from '@/components/MainHeader';
import { courseDetailData } from '@/constents/constents';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Badge from '@/components/Badge';
import { FilterOption } from '@/constents/types';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { Course, fetchAllCourses, selectCourses } from '@/lib/features/courses/coursesSlice';
import { selectUniversities } from '@/lib/features/university/universitySlice';
import { fetchProfessors, selectAllProfessors } from '@/lib/features/professor/professorSlice';
import { fetchAllCollegesAsync } from '@/lib/features/college/collegeSlice';

interface Option {
    id: number;
    value: string;
    label: string;
    checked: boolean;
}

interface Section {
    id: string;
    name: string;
    options: Option[];
}

const AllCourses = () => {
    const dispatch = useAppDispatch();

    // Get courses and status from the Redux store
    const courses = useAppSelector(selectCourses);
    const universities = useAppSelector((state: RootState) => selectUniversities(state));
    const professors = useAppSelector(selectAllProfessors);

    const [selectedFilters, setSelectedFilters] = useState<FilterOption[]>([]);
    const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredCourses, setFilteredCourses] = useState<any[]>(courses);
    const [filters, setFilters] = useState<Section[]>([]);

    useEffect(() => {
        dispatch(fetchProfessors());
        dispatch(fetchAllCourses());
        dispatch(fetchAllCollegesAsync());
    }, [dispatch]);

    useEffect(() => {
        setFilteredCourses(courses);
    }, [courses]);

    const [selectedBreadcrumb, setSelectedBreadcrumb] = useState<string>('');

    const specificBreadcrumbs = [
        { id: 'professors', label: 'By Professors' },
        { id: 'stream', label: 'By Stream' },
        { id: 'university', label: 'By University' },
    ];

    const handleFilterChange = (section: Section, option: FilterOption) => {
        const isFilterSelected = selectedFilters.some((filter) => filter.value === option.value);

        if (isFilterSelected) {
            setSelectedFilters(selectedFilters.filter((filter) => filter.value !== option.value));
        } else {
            setSelectedFilters([...selectedFilters, option]);
        }
    };

    const removeFilter = (filter: FilterOption) => {
        setSelectedFilters(selectedFilters.filter((selectedFilter) => selectedFilter.value !== filter.value));
    };

    const removeAllFilters = () => {
        setSelectedFilters([]);
    };

    const toggleFilter = (filterId: any) => {
        setExpandedFilter(expandedFilter === filterId ? null : filterId);
    };

    const handleBreadcrumbClick = (filter: any) => {
        setSelectedBreadcrumb(filter)
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };


    useEffect(() => {
        let courses = [...courseDetailData];

        if (searchTerm) {
            courses = courses.filter((course) =>
                course.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedFilters.length > 0) {
            courses = courses.filter((course) => {
                const reviewFilters = selectedFilters.filter(filter => filter.id === 1 || filter.id === 2 || filter.id === 3);
                const mentorFilters = selectedFilters.filter(filter => filter.id === 4 || filter.id === 5 || filter.id === 6);
                const instituteFilters = selectedFilters.filter(filter => filter.id === 7 || filter.id === 8 || filter.id === 9);
                const courseTitleFilters = selectedFilters.filter(filter => filter.id === 10);

                const matchesReview = reviewFilters.length === 0 || reviewFilters.some(filter => course.reviews.rating.toString().slice(0, 1) === filter.value);
                const matchesMentor = mentorFilters.length === 0 || mentorFilters.some(filter => course.mentor.name === filter.value);
                const matchesInstitute = instituteFilters.length === 0 || instituteFilters.some(filter => course.institute === filter.value);
                const matchesCourseTitle = courseTitleFilters.length === 0 || courseTitleFilters.some(filter => course.title === filter.value);

                return matchesReview && matchesMentor && matchesInstitute && matchesCourseTitle;
            });
        }

        setFilteredCourses(courses);
    }, [searchTerm, selectedFilters]);

    const extractFilters = (courses: Course[], universities: { [key: string]: string }, professors: { [key: string]: string }): Section[] => {
        const filters = {
            reviews: { id: 'reviews', name: 'Review', options: [] as Option[] },
            professors: { id: 'mentor.name', name: 'Professor', options: [] as Option[] },
            colleges: { id: 'institute', name: 'Colleges', options: [] as Option[] },
            courses: { id: 'title', name: 'Courses', options: [] as Option[] }
        };

        const professorSet = new Set<string>();
        const collegeSet = new Set<string>();
        const courseSet = new Set<string>();
        const reviewSet = new Set<number>();

        courses.forEach((course: Course) => {
            if (course.professorId) {
                professorSet.add(course.professorId._id);
            }

            if (Array.isArray(course.UniversityIds)) { // Check if UniversityIds is an array
                course.UniversityIds.forEach((university) => {
                    if (university && university._id) {
                        collegeSet.add(university._id);
                    }
                });
            }

            if (course.courseName) {
                courseSet.add(course.courseName);
            }

            if (typeof course.averageRating === 'number') {
                reviewSet.add(course.averageRating);
            }
        });


        filters.professors.options = Array.from(professorSet).map((professor, index) => ({
            id: index + 1,
            value: professors[professor] || professor,
            label: professors[professor] || professor, // Replace ID with professor name
            checked: false
        }));

        filters.colleges.options = Array.from(collegeSet).map((college, index) => ({
            id: index + 1 + professorSet.size,
            value: universities[college] || college,
            label: universities[college] || college, // Replace ID with university name
            checked: false
        }));

        filters.courses.options = Array.from(courseSet).map((course, index) => ({
            id: index + 1 + professorSet.size + collegeSet.size,
            value: course,
            label: course,
            checked: false
        }));

        filters.reviews.options = Array.from(reviewSet).map((review, index) => ({
            id: index + 1 + professorSet.size + collegeSet.size + courseSet.size,
            value: review.toString(),
            label: `${review} Star`,
            checked: false
        }));

        return Object.values(filters);
    };

    useEffect(() => {
        if (courses.length > 0 && universities.length > 0 && professors.length > 0) {
            // Create a mapping of university IDs to names
            const universityMap = universities.reduce((map: { [key: string]: string }, university: any) => {
                map[university._id] = university.overview.name;
                return map;
            }, {});

            // Create a mapping of professor IDs to names
            const professorMap = professors.reduce((map: { [key: string]: string }, professor: any) => {
                map[professor._id] = `${professor.info.name.first} ${professor.info.name.middle} ${professor.info.name.last}`;
                return map;
            }, {});

            const extractedFilters = extractFilters(courses, universityMap, professorMap);
            setFilters(extractedFilters);
        }
    }, [courses, universities, professors]);
    // console.log("filters : ", filters);


    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-3 sm:p-12 sm:mx-10 lg:mx-10">
                    <MainHeader title="All Courses" subTitle="Select your desired courses to expand your knowledge" />
                    <Breadcrumb className='pb-5'>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    href="/course/all-courses"
                                >
                                    All
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            {specificBreadcrumbs && specificBreadcrumbs.map((breadcrumb) => (
                                <BreadcrumbItem
                                    className={`cursor-pointer ${selectedBreadcrumb === breadcrumb.id ? 'text-[#6941C6] font-medium' : ''}`}
                                    onClick={() => handleBreadcrumbClick(breadcrumb.id)}
                                    key={breadcrumb.id}
                                >
                                    <BreadcrumbPage>
                                        {breadcrumb.label}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>

                    <form className='flex gap-x-2 flex-1 w-full mb-4' onSubmit={(e) => e.preventDefault()}>
                        <Input
                            className="rounded-[12px] placeholder:opacity-80 border border-[#D0D5DD] [box-shadow:0px_1px_2px_0px_#1018280D] lg:w-full w-4/5"
                            type="text"
                            name='search'
                            id="search"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <Sheet>
                            <SheetTrigger className='flex lg:hidden justify-center items-center rounded-[12px] placeholder:opacity-80 border border-[#D0D5DD] [box-shadow:0px_1px_2px_0px_#1018280D] py-2 w-1/5'>
                                <Image className='flex justify-center items-center object-cover' src="/icons/filter-lines.svg" width={20} height={20} alt="Filter" />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Filters</SheetTitle>
                                </SheetHeader>
                            </SheetContent>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle className='font-semibold text-base text-[#2C1C5F] border-b-2 border-black'>Filters</SheetTitle>
                                </SheetHeader>
                                <div className="grid gap-4 py-4">
                                    {filters.map((section) => (
                                        <div key={section.id}>
                                            <SheetTitle onClick={() => toggleFilter(section.id)} className="cursor-pointer text-sm font-normal">
                                                {section.name}
                                            </SheetTitle>
                                            {expandedFilter === section.id && (
                                                <div className="space-y-2">
                                                    {section.options.map((option) => (
                                                        <label key={option.value} className="flex items-center space-x-2 text-sm text-[#344054]">
                                                            <input
                                                                type="checkbox"
                                                                className="form-checkbox"
                                                                checked={selectedFilters.some((filter) => filter.value === option.value)}
                                                                onChange={() => handleFilterChange(section, option)}
                                                            />
                                                            <span>{option.label}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </SheetContent>


                        </Sheet>
                    </form>

                    <div className="flex justify-between mb-4">
                        <div className="flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row flex-wrap sm:gap-x-6">
                            {selectedFilters.map((filter, index) => (
                                <div key={index} className="rounded-[20px] bg-[#ECE9FE] w-fit flex-center px-3">
                                    <Badge title={`${filter.label}`} />
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => removeFilter(filter)}
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div>
                            {selectedFilters.length > 0 && (
                                <button type="button" className='input-form text-xs text-white bg-yellow-100 rounded-full px-8 py-2' onClick={removeAllFilters}>Remove <span className='hidden sm:inline'>All</span></button>
                            )}
                        </div>
                    </div>

                    <div className="mt-10 sm:mt-12 gap-6 gap-x-4 sm:gap-x-0 sm:gap-y-10 grid lg:hidden grid-cols-1 md:grid-cols-2 justify-items-center">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course._id} {...course} />
                        ))}
                        <>
                            {filteredCourses.length === 0 && (
                                <div className="text-center flex justify-center items-center h-[50vh] w-full">
                                    <span className="text-2xl font-semibold">There is nothing yet!</span>
                                </div>
                            )}
                        </>
                    </div>

                    <div className="hidden mt-16 lg:grid grid-cols-2 lg:grid-cols-4 gap-x-4">
                        <form className="hidden lg:block col-span-1">
                            <h2 className="text-[#2C1C5F] text-lg font-semibold border-b-2 border-black pb-2 mb-2">Filters</h2>
                            {filters.map((section) => (
                                <Disclosure key={section.id}>
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="flex w-full items-center justify-between px-2 py-3 text-base font-semibold">
                                                <span>{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    {open ? (
                                                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                    ) : (
                                                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </DisclosureButton>
                                            <DisclosurePanel className="pt-6 text-[#525866] text-sm font-medium">
                                                <div className="space-y-6 ml-3">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div key={option.value} className="flex items-center">
                                                            <input
                                                                id={`filter-${section.id}-${optionIdx}`}
                                                                name={`${section.id}[]`}
                                                                value={option.value}
                                                                type="checkbox"
                                                                checked={selectedFilters.some((filter) => filter.value === option.value)}
                                                                onChange={() => handleFilterChange(section, option)}
                                                                className="h-4 w-4 rounded text-yellow-100 accent-white border border-black/30"
                                                            />
                                                            <label
                                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                className="ml-3 min-w-0 flex-1"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </form>

                        <div className="lg:ml-24 lg:col-span-3 gap-6 gap-x-4 sm:gap-x-0 sm:gap-y-10 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 justify-items-center">
                            {filteredCourses.map((course) => (
                                <CourseCard key={course.id} {...course} />
                            ))}

                            <>
                                {filteredCourses.length === 0 && (
                                    <div className="text-center flex justify-center items-center h-[50vh] w-full">
                                        <span className="text-2xl font-semibold">There is nothing yet!</span>
                                    </div>
                                )}
                            </>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};


export default AllCourses;
