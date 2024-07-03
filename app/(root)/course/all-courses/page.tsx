"use client";

import CourseCard from '@/components/CourseCard'
import MainHeader from '@/components/MainHeader'
import { courseDetailData } from '@/constents/constents'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import React from 'react'

interface Option {
    value: string;
    label: string;
    checked: boolean;
}

interface Section {
    id: string;
    name: string;
    options: Option[];
}

const filters: Section[] = [
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'electronics', label: 'Electronics', checked: false },
            { value: 'clothing', label: 'Clothing', checked: true },
            { value: 'books', label: 'Books', checked: false },
        ],
    },
    {
        id: 'brand',
        name: 'Brand',
        options: [
            { value: 'apple', label: 'Apple', checked: true },
            { value: 'samsung', label: 'Samsung', checked: false },
            { value: 'sony', label: 'Sony', checked: false },
        ],
    },
];

const handleFilter = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: Section,
    option: Option
) => {
    // Add your filter handling logic here
    console.log(e.target.checked, section, option);
};

const AllCourses = () => {
    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-6 sm:p-12 sm:mx-10 lg:mx-10">
                    <MainHeader title="All Courses" subTitle="Select your desired courses to expand your knowledge" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4">
                        <form className="col-span-1">
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
                                                <div className="space-y-6">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div key={option.value} className="flex items-center">
                                                            <input
                                                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                name={`${section.id}[]`}
                                                                defaultValue={option.value}
                                                                type="checkbox"
                                                                defaultChecked={option.checked}
                                                                onChange={(e) => handleFilter(e, section, option)}
                                                                className="h-4 w-4 rounded text-yellow-100 accent-white border border-black/30"
                                                            />
                                                            <label
                                                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
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

                        <div className="lg:ml-24 lg:col-span-3 gap-6 sm:gap-x-0 sm:gap-y-10 grid grid-cols-1 xl:grid-cols-2 justify-items-center">
                            {courseDetailData.map((course) => (
                                <CourseCard key={course.id} {...course} />
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AllCourses