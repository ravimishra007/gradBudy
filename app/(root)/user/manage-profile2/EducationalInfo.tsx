"use client"


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle, ChangeEvent } from "react";
import { initialData } from '@/constents/constents';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectStudent, updateEducation } from '@/lib/features/user/studentProfileSlice';

interface SecondaryEducation {
    name: string;
    board: string;
    stream: string;
    passingYear: string;
}

interface SeniorSecondaryEducation {
    name: string;
    board: string;
    stream: string;
    marks: number;
    passingYear: string;
}

interface DiplomaEducation {
    name: string;
    stream: string;
    passingYear: string;
}

interface CollegeEducation {
    name: string;
    stream: string;
    branch: string;
    startingYear: string;
    passingYear: string;
}

interface Education {
    secondary: SecondaryEducation;
    seniorSec: SeniorSecondaryEducation;
    diploma: DiplomaEducation;
    college: CollegeEducation;
}

const initialState: Education = {
    secondary: {
        name: '',
        board: '',
        stream: '',
        passingYear: ''
    },
    seniorSec: {
        name: '',
        board: '',
        stream: '',
        marks: 0,
        passingYear: ''
    },
    diploma: {
        name: '',
        stream: '',
        passingYear: ''
    },
    college: {
        name: '',
        stream: '',
        branch: '',
        startingYear: '',
        passingYear: ''
    }
};

interface EducationalInfoHandle {
    handleSubmit: () => void;
    handlePrev?: () => void;
}

const EducationalInfo = forwardRef<EducationalInfoHandle>((props, ref) => {
    const dispatch = useAppDispatch();
    const studentProfileData = useAppSelector(selectStudent) || null
    const educationalInfo = useAppSelector((state: any) => state.studentProfile.student.education) || initialState;

    const [localData, setLocalData] = useState<Education>(educationalInfo);
    const sectionRef = useRef<Education>(educationalInfo);

    useEffect(() => {
        if (studentProfileData.education) {
            setLocalData(studentProfileData.education);
        } else {
            setLocalData(educationalInfo);
        }
    }, [educationalInfo, studentProfileData.education]);

    useEffect(() => {
        dispatch(updateEducation(sectionRef.current));
    }, [dispatch]);

    const handleEducationalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const keys = name.split('.');

        const updatedData: Education = { ...localData };

        if (keys.length > 1) {
            const [key, subKey] = keys;

            if (key in updatedData) {
                (updatedData as any)[key] = {
                    ...(updatedData as any)[key],
                    [subKey]: value
                };
            }
        } else {
            (updatedData as any)[name] = value;
        }

        setLocalData(updatedData);
    };

    const handleBoardChange = (value: string) => {
        const newData = { ...localData, secondary: { ...localData.secondary, board: value } };
        setLocalData(newData);
    };

    const handleSeniorBoardChange = (value: string) => {
        const newData = { ...localData, seniorSec: { ...localData.seniorSec, board: value } };
        setLocalData(newData);
    };

    const handleStreamChange = (value: string) => {
        const newData = { ...localData, college: { ...localData.college, stream: value } };
        setLocalData(newData);
    };

    const handleDateChange = (selectedDate: Date | undefined, field: string) => {
        const updatedData = { ...localData };
        const dateValue = selectedDate ? selectedDate.toISOString() : '';

        switch (field) {
            case 'college.passingYear':
                updatedData.college = { ...updatedData.college, passingYear: dateValue };
                break;
            case 'college.startingYear':
                updatedData.college = { ...updatedData.college, startingYear: dateValue };
                break;
            case 'diploma.passingYear':
                updatedData.diploma = { ...updatedData.diploma, passingYear: dateValue };
                break;
            case 'secondary.passingYear':
                updatedData.secondary = { ...updatedData.secondary, passingYear: dateValue };
                break;
            case 'seniorSec.passingYear':
                updatedData.seniorSec = { ...updatedData.seniorSec, passingYear: dateValue };
                break;
            default:
                return;
        }

        setLocalData(updatedData);
        sectionRef.current = updatedData;
    };



    const handleSubmit = () => {
        sectionRef.current = localData;
        dispatch(updateEducation(localData));
    };

    const handlePrev = () => {
        sectionRef.current = localData;
        dispatch(updateEducation(localData));
    };

    useImperativeHandle(ref, () => ({
        handleSubmit,
        handlePrev,
    }));

    return (
        <div className="flex flex-col space-y-6 text-[#344054]">
            <h2 className="text-lg font-semibold">Educational Info</h2>

            {/* Secondary School Name  */}
            <div className="w-full items-center gap-1.5 text-[#344054]">
                <Label htmlFor="secondary-school">Secondary School Name</Label>
                <Input
                    className="input-form placeholder:text-[#66708580]"
                    type="text"
                    id="secondary-school"
                    name='secondary.name'
                    placeholder="Secondary School Name"
                    value={localData?.secondary?.name}
                    onChange={handleEducationalChange}
                />
            </div>
            <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-1 lg:grid-cols-4 lg:gap-4">
                <div className="w-full">
                    <Label htmlFor="Board">Board</Label>
                    <Input
                        className="input-form placeholder:text-[#66708580]"
                        type="text"
                        id="Board"
                        name='secondary.board'
                        placeholder="Board"
                        value={localData?.secondary?.board}
                        onChange={handleEducationalChange}
                    />
                </div>

                <div className="w-full lg:col-span-2">
                    <Label htmlFor="stream">Stream</Label>
                    <Input
                        className="input-form placeholder:text-[#66708580]"
                        type="text"
                        name='secondary.stream'
                        id="stream"
                        placeholder="Stream"
                        value={localData?.secondary?.stream || ""}
                        onChange={handleEducationalChange}
                    />
                </div>

                <div className="w-full">
                    <Label htmlFor="passing-year">Passing Year</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "justify-start text-left font-normal rounded-[12px] input-form",
                                    !localData?.secondary?.passingYear && "text-muted-foreground"
                                )}
                            >
                                <div className="flex justify-between items-center w-full">
                                    <p>
                                        {localData?.secondary?.passingYear && !isNaN(new Date(localData?.secondary?.passingYear).getTime()) ? format(new Date(localData.secondary?.passingYear), "PPP") : <span className='text-[#66708580]'>DD/MM/YYYY</span>}
                                    </p>
                                    <CalendarIcon className="mr-2 h-4 w-4 text-[#2C1C5F]" />
                                </div>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                className="bg-white outline-none"
                                mode="single"
                                selected={localData?.secondary?.passingYear ? new Date(localData.secondary.passingYear) : undefined}
                                onSelect={(selectedDate: Date | undefined) => handleDateChange(selectedDate, "secondary.passingYear")}
                                initialFocus
                            />

                        </PopoverContent>
                    </Popover>
                </div>

            </div>

            {/* Senior Secondary School Name  */}
            <div className="w-full items-center gap-1.5 text-[#344054]">
                <Label htmlFor="senior-secondary-school">Senior Secondary School Name</Label>
                <Input
                    className="input-form placeholder:text-[#66708580]"
                    type="text"
                    id="senior-secondary-school"
                    name='seniorSec.name'
                    placeholder="Senior Secondary School Name"
                    value={localData?.seniorSec?.name}
                    onChange={handleEducationalChange}
                />
            </div>

            <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-1 lg:grid-cols-4 lg:gap-4">
                <div className="w-full">
                    <Label htmlFor="Board">Board</Label>
                    <Input
                        className="input-form placeholder:text-[#66708580]"
                        type="text"
                        id="Board"
                        name='seniorSec.board'
                        placeholder="Board"
                        value={localData?.seniorSec?.board}
                        onChange={handleEducationalChange}
                    />
                </div>

                <div className="w-full">
                    <Label htmlFor="seniorSec.stream">Stream</Label>
                    <Input
                        className="input-form placeholder:text-[#66708580]"
                        type="text"
                        id="stream"
                        name='seniorSec.stream'
                        placeholder="Stream"
                        value={localData?.seniorSec?.stream}
                        onChange={handleEducationalChange}
                    />
                </div>

                <div className="w-full">
                    <Label htmlFor="marks">Marks Scored</Label>
                    <Input
                        className="input-form placeholder:text-[#66708580]"
                        type="text"
                        id="marks"
                        name='seniorSec.marks'
                        placeholder="E.g 95"
                        value={localData?.seniorSec?.marks || ""}
                        onChange={handleEducationalChange}
                    />
                </div>

                <div className="w-full">
                    <Label htmlFor="passing-year">Passing Year</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "justify-start text-left font-normal rounded-[12px] input-form",
                                    !localData?.seniorSec?.passingYear && "text-muted-foreground"
                                )}
                            >
                                <div className="flex justify-between items-center w-full">
                                    <p>
                                        {localData?.seniorSec?.passingYear && !isNaN(new Date(localData?.seniorSec?.passingYear).getTime()) ? format(new Date(localData.seniorSec.passingYear), "PPP") : <span className='text-[#66708580]'>DD/MM/YYYY</span>}
                                    </p>
                                    <CalendarIcon className="mr-2 h-4 w-4 text-[#2C1C5F]" />
                                </div>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                className="bg-white outline-none"
                                mode="single"
                                selected={localData?.seniorSec?.passingYear ? new Date(localData?.seniorSec.passingYear) : undefined}
                                onSelect={(selectedDate: Date | undefined) => handleDateChange(selectedDate, "seniorSec.passingYear")}
                                initialFocus
                            />

                        </PopoverContent>
                    </Popover>
                </div>

            </div>

            {/* Diploma Details */}
            <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-1 lg:grid-cols-4 lg:gap-4">
                <div className="w-full col-span-2">
                    <Label htmlFor="diploma">Diploma</Label>
                    <Input
                        className="input-form placeholder:text-[#66708580]"
                        type="text"
                        id="diploma"
                        name='diploma.name'
                        placeholder="Diploma"
                        value={localData?.diploma?.name}
                        onChange={handleEducationalChange}
                    />
                </div>

                <div className="w-full">
                    <Label htmlFor="Stream">Stream</Label>
                    <Input
                        className="input-form placeholder:text-[#66708580]"
                        type="text"
                        id="Stream"
                        name='diploma.stream'
                        placeholder="Stream"
                        value={localData?.diploma?.stream}
                        onChange={handleEducationalChange}
                    />
                </div>

                <div className="w-full">
                    <Label htmlFor="passing-year">Passing Year</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "justify-start text-left font-normal rounded-[12px] input-form",
                                    !localData?.diploma?.passingYear && "text-muted-foreground"
                                )}
                            >
                                <div className="flex justify-between items-center w-full">
                                    <p>
                                        {localData?.diploma?.passingYear && !isNaN(new Date(localData?.diploma?.passingYear).getTime()) ? format(new Date(localData.diploma.passingYear), "PPP") : <span className='text-[#66708580]'>DD/MM/YYYY</span>}
                                    </p>
                                    <CalendarIcon className="mr-2 h-4 w-4 text-[#2C1C5F]" />
                                </div>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                className="bg-white outline-none"
                                mode="single"
                                selected={localData?.diploma?.passingYear ? new Date(localData.diploma.passingYear) : undefined}
                                onSelect={(selectedDate: Date | undefined) => handleDateChange(selectedDate, "diploma.passingYear")}
                                initialFocus
                            />

                        </PopoverContent>
                    </Popover>
                </div>

            </div>

            {/* College */}
            <div className="w-full items-center gap-1.5 text-[#344054]">
                <Label htmlFor="college">College Name</Label>
                <Input
                    className="input-form placeholder:text-[#66708580]"
                    type="text"
                    id="college"
                    name='college.name'
                    placeholder="College Name"
                    value={localData?.college?.name}
                    onChange={handleEducationalChange}
                />
            </div>

            <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-1 lg:grid-cols-4 lg:gap-4">
                <div className="w-full">
                    <Label htmlFor="seniorSec.stream">Stream</Label>
                    <Input
                        className="input-form placeholder:text-[#66708580]"
                        type="text"
                        id="stream"
                        name='college.stream'
                        placeholder="Stream"
                        value={localData?.college?.stream}
                        onChange={handleEducationalChange}
                    />
                </div>

                <div className="w-full">
                    <Label htmlFor="collegeBranch">Branch</Label>
                    <Input
                        className="input-form placeholder:text-[#66708580]"
                        type="text"
                        id="collegeBranch"
                        name='college.branch'
                        placeholder="Branch"
                        value={localData?.college?.branch}
                        onChange={handleEducationalChange}
                    />
                </div>

                <div className="w-full">
                    <Label htmlFor="starting-year">Starting Year</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "justify-start text-left font-normal rounded-[12px] input-form",
                                    !localData?.college?.startingYear && "text-muted-foreground"
                                )}
                            >
                                <div className="flex justify-between items-center w-full">
                                    <p>
                                        {localData?.college?.startingYear && !isNaN(new Date(localData?.college?.startingYear).getTime()) ? format(new Date(localData.college.startingYear), "PPP") : <span className='text-[#66708580]'>DD/MM/YYYY</span>}
                                    </p>
                                    <CalendarIcon className="mr-2 h-4 w-4 text-[#2C1C5F]" />
                                </div>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                className="bg-white outline-none"
                                mode="single"
                                selected={localData?.college?.startingYear ? new Date(localData?.college.startingYear) : undefined}
                                onSelect={(selectedDate: Date | undefined) => handleDateChange(selectedDate, "college.startingYear")}
                                initialFocus
                            />

                        </PopoverContent>
                    </Popover>
                </div>


                <div className="w-full">
                    <Label htmlFor="passing-year">Passing Year</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "justify-start text-left font-normal rounded-[12px] input-form",
                                    !localData?.college?.passingYear && "text-muted-foreground"
                                )}
                            >
                                <div className="flex justify-between items-center w-full">
                                    <p>
                                        {localData?.college?.passingYear && !isNaN(new Date(localData?.college?.passingYear).getTime()) ? format(new Date(localData.college.passingYear), "PPP") : <span className='text-[#66708580]'>DD/MM/YYYY</span>}
                                    </p>
                                    <CalendarIcon className="mr-2 h-4 w-4 text-[#2C1C5F]" />
                                </div>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                className="bg-white outline-none"
                                mode="single"
                                selected={localData?.college?.passingYear ? new Date(localData.college.passingYear) : undefined}
                                onSelect={(date) => handleDateChange(date, "college.passingYear")}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    )
})

EducationalInfo.displayName = 'EducationalInfo';
export default EducationalInfo