"use client";

import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchProfessors, selectAllProfessors, selectProfessorError, selectProfessorStatus } from '@/lib/features/professor/professorSlice';
import Image from 'next/image';
import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from '@/components/ui/label';
import MainHeader from '@/components/MainHeader';


const specificBreadcrumbs = [
  { id: 'university', label: 'By University' },
  { id: 'course', label: 'By Course' },
];

const filters = [
  { id: 'university', label: 'By University' },
  { id: 'course', label: 'By Course' },
];
const AllProfessors = () => {
  const dispatch = useAppDispatch();

  const professors = useAppSelector(selectAllProfessors);
  const status = useAppSelector(selectProfessorStatus);
  const error = useAppSelector(selectProfessorError);

  const [selectedBreadcrumb, setSelectedBreadcrumb] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');


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

  const handleBreadcrumbClick = (breadcrumbId: string) => {
    setSelectedBreadcrumb(breadcrumbId);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProfessors = professors.filter((professor) => {
    if (selectedBreadcrumb === 'university' && professor.education[0]?.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    } else if (selectedBreadcrumb === 'course' && professor.specializations.specialization.some((course) => course.name.toLowerCase().includes(searchTerm.toLowerCase()))) {
      return true;
    } else if (!selectedBreadcrumb) {
      return professor.info.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
        professor.info.name.last.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  return (
    <section className="flex-center md:bg-white-100 h-full mx-auto">
      <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full sm:p-12 mx-4 sm:mx-10 md:mx-16">
        <div className='flex flex-col sm:gap-y-4 md:gap-y-7 lg:gap-y-10'>
          <div>
            <MainHeader title="List of Professors" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />

            <Breadcrumb className='pb-5'>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/professors-list">
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

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {filteredProfessors && filteredProfessors.map((professor) => (
              <ProfessorCard
                key={professor._id}
                id={professor._id}
                name={professor.info.name}
                university={professor.education[0]?.name || 'Unknown University'}
                description={professor.info.desc}
                profilePhoto={professor.info.profilePhoto}
                totalStudents={10}
                totalCourses={10}
                detailsUrl={'/professor/detail/'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProfessorCardProps {
  id: string;
  name: {
    first: string;
    last?: string;
    middle?: string;
  }
  university: string;
  description: string;
  profilePhoto: string;
  totalStudents: number;
  totalCourses: number;
  detailsUrl: string;
}

const ProfessorCard: React.FC<ProfessorCardProps> = ({
  id,
  name,
  university,
  description,
  profilePhoto,
  totalStudents,
  totalCourses,
  detailsUrl,
}) => {
  return (
    <div className="p-6 flex flex-col justify-between rounded-[8px] bg-white [box-shadow:2px_2px_40px_4px_rgba(105,_65,_198,_0.10)] max-w-xl mx-auto w-full">
      <div className="flex items-start gap-x-4 w-full">
        <div className="flex-1">
          <h3 className="text-sm sm:text-lg font-semibold mb-0.5 sm:mb-1">{`${name.first} ${name.middle && name.middle} ${name.last && name.last}`}</h3>
          <p className="text-purple-600 text-sm sm:text-base mb-1 sm:mb-2">{university}</p>
          <p className="text-[#344054] text-xs sm:text-base mb-1 sm:mb-2">{description}</p>
        </div>
        <div className="hidden sm:block">
          <Image
            src={profilePhoto}
            alt={`${name.first} ${name.last && name.last} profile`}
            height={100}
            width={100}
            className="object-cover rounded-[4.453px]"
          />
        </div>
        <div className="block sm:hidden">
          <Image
            src={profilePhoto}
            alt={`${name.first} ${name.last && name.last} profile`}
            height={64}
            width={64}
            className="object-cover rounded-[4.453px]"
          />
        </div>
      </div>

      <div className="flex justify-between text-xs sm:text-base items-center pt-1 gap-x-1 sm:gap-x-2">
        <div className="">
          <span className="block text-xs sm:text-sm text-gray-500"><span className='hidden sm:inline'>Total</span> <span className='inline sm:hidden'>Tot.</span> Students</span>
          <span className="sm:text-lg text-base font-semibold">{totalStudents}</span>
        </div>
        <div className="">
          <span className="block text-xs sm:text-sm text-gray-500"><span className='hidden sm:inline'>Total</span> <span className='inline sm:hidden'>Tot.</span> Courses</span>
          <span className="sm:text-lg text-base font-semibold">{totalCourses}</span>
        </div>

        <Link href={`${detailsUrl}/${id}`} className="text-white text-xs sm:text-base bg-orange-500 hover:bg-orange-600 py-2 px-4 rounded">
          View Details
        </Link>
      </div>
    </div>
  );
};


export default AllProfessors;
