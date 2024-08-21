"use client";

import MainHeader from '@/components/MainHeader';
import { fetchAllUniversitiesAsync, selectUniversities } from '@/lib/features/university/universitySlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import React, { useEffect, useState } from 'react';
import InstitutionCard from '@/components/InstitutionCard';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
import { Label } from '@/components/ui/label';

const specificBreadcrumbs = [
    { id: 'state', label: 'By State' },
    { id: 'city', label: 'By City' },
];

const filters = [
    { id: 'professors', label: 'By Professors' },
    { id: 'stream', label: 'By Stream' },
    { id: 'university', label: 'By University' }
];


const UniversityList = () => {
    const dispatch = useAppDispatch();
    const universities = useAppSelector((state: RootState) => selectUniversities(state));

    const [selectedBreadcrumb, setSelectedBreadcrumb] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');


    useEffect(() => {
        dispatch(fetchAllUniversitiesAsync());
    }, [dispatch]);

    const handleBreadcrumbClick = (breadcrumbId: string) => {
        setSelectedBreadcrumb(breadcrumbId);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredUniversities = universities.filter((university) => {
        if (selectedBreadcrumb === 'state' && university.overview.state.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true;
        } else if (selectedBreadcrumb === 'city' && university.overview.city.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true;
        } else if (!selectedBreadcrumb) {
            return university.overview.name.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
    });



    return (
        <section className="flex-center md:bg-white-100 h-full mx-auto">
            <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full sm:p-12 mx-4 sm:mx-10 md:mx-16">
                <div>
                    <MainHeader title="List of Universities" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                    <Breadcrumb className='pb-5'>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/university-list">
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
                            className="placeholder:opacity-80 border lg:w-full w-4/5 rounded-[8px] border-[#D0D5DD] [box-shadow:0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]"
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
                                            <Label className="text-left">{section.label}</Label>
                                            <div className="space-y-2 pl-4 mt-2">
                                                <label className="flex items-center space-x-2 text-sm text-[#344054]">
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox"
                                                    />
                                                    <span>{section.label}</span>
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </form>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
                    {filteredUniversities && filteredUniversities.map((university) => (
                        <InstitutionCard
                            key={university._id}
                            id={university._id}
                            name={university.overview.name}
                            overview={university.overview.overview}
                            city={university.overview.city}
                            district={university.overview.district}
                            state={university.overview.state}
                            logo={university.gallery.logo}
                            reviews={4500} // You can replace this with dynamic data if available
                            rating={4.7}   // You can replace this with dynamic data if available
                            detailsUrl="/university-details"
                            NIRFRanking={university.overview.ranking[0].value}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UniversityList;
