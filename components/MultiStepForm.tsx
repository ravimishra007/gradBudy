'use client';

import React, { useRef, useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from "@/components/ui/button";
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

import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { cities, districts, initialData, states } from '@/constents/constents';
import { ReusableComboboxProps, Experience, Option, FormData } from '@/constents/types';

const MultiStepForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const [date, setDate] = useState<Date>();
    const [schoolPassingYear, setSchoolPassingYear] = useState<Date>();
    const [seniorSchoolPassingYear, setSeniorSchoolPassingYear] = useState<Date>();
    const [diplomaPassingYear, setDiplomaPassingYear] = useState<Date>();
    const [collegeStartingYear, setCollegeStartingYear] = useState<Date>();
    const [collegeEndingYear, setCollegeEndingYear] = useState<Date>();
    const [experienceStartingYears, setExperienceStartingYears] = useState<(Date | null)[]>([]);
    const [experienceEndingYears, setExperienceEndingYears] = useState<(Date | null)[]>([]);

    const [selectedCity, setSelectedCity] = useState<string | null>(null);
    const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
    const [selectedState, setSelectedState] = useState<string | null>(null);

    const [gender, setGender] = useState<string>('');
    const [board, setBoard] = useState<string>('');
    const [seniorBoard, setSeniorBoard] = useState<string>('');
    const [stream, setStream] = useState<string>('');

    // Using useRef to store form data
    const formDataRef = useRef<FormData>(initialData);
    const formData = formDataRef.current;
    console.log("Form Data :", formData)

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index?: number,
        field?: string
    ) => {
        const { name, value } = e.target;
        const newData = { ...formDataRef.current };

        if (index !== undefined) {
            if (field === 'experience') {
                const newExperienceList = newData.experience.map((exp, i) =>
                    i === index ? { ...exp, [name]: value } : exp
                );
                newData.experience = newExperienceList;
            } else {
                const newSkillList = newData.skillsInfo.skillList.map((skill, i) =>
                    i === index ? { ...skill, [name]: value } : skill
                );
                newData.skillsInfo.skillList = newSkillList;
            }
        } else {
            if (step === 1) {
                newData.personalInfo = { ...newData.personalInfo, [name]: value };
            } else if (step === 2) {
                newData.educationalInfo = { ...newData.educationalInfo, [name]: value };
            } else if (step === 3) {
                newData.skillsInfo = { ...newData.skillsInfo, [name]: value };
            }
        }

        // Update the ref with the new data
        formDataRef.current = newData;
    };

    const handleExperienceDateChange = (date: Date | null, index: number, type: 'startingYear' | 'endingYear') => {
        if (type === 'startingYear') {
            const newStartingYears = [...experienceStartingYears];
            newStartingYears[index] = date;
            setExperienceStartingYears(newStartingYears);
        } else {
            const newEndingYears = [...experienceEndingYears];
            newEndingYears[index] = date;
            setExperienceEndingYears(newEndingYears);
        }

        const updatedExperience = formDataRef.current.experience.map((exp, i) =>
            i === index ? { ...exp, [type]: date } : exp
        );
        formDataRef.current.experience = updatedExperience;
    };

    const handleAddExperience = () => {
        formDataRef.current.experience.push({
            designation: '',
            organization: '',
            startingYear: null,
            endingYear: null,
            description: '',
        });
        setExperienceStartingYears([...experienceStartingYears, null]);
        setExperienceEndingYears([...experienceEndingYears, null]);
    };

    const handleDateChange = (selectedDate: Date | undefined) => {
        formDataRef.current.personalInfo.dob = selectedDate ?? null;
        setDate(selectedDate);
    };

    const handleAddSkill = () => {
        formDataRef.current.skillsInfo.skillList.push({ skill: '', description: '' });
    };

    const stepClasses = (currentStep: number) => {
        if (step === currentStep) return 'bg-[rgba(105,_65,_198,_0.50)]';
        if (step > currentStep) return 'bg-[#2C1C5F]';
        return 'bg-[rgba(208,_213,_221,_0.40)]';
    };

    return (
        <div className="max-w-6xl mx-auto sm:p-5">
            <div className="flex justify-between mb-8">
                {[1, 2, 3, 4].map((stepNumber) => (
                    <div key={stepNumber} className={`w-[17vw] h-4 flex items-center justify-center rounded-full ${stepClasses(stepNumber)}`} />
                ))}
            </div>

            {step === 1 && (
                <>
                    <div className="flex flex-col space-y-6 text-[#344054]">
                        <h2 className="text-lg font-semibold">Personal Info</h2>

                        {/* First Name Input */}
                        <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                            <div className="w-full items-center md:col-span-2 lg:col-span-1 gap-1.5 text-[#344054]">
                                <Label htmlFor="fname">First Name<span className="text-red-500">*</span></Label>
                                <Input
                                    className="input-form placeholder:text-[#66708580]"
                                    type="text"
                                    name='fname'
                                    id="fname"
                                    placeholder="First Name"
                                    value={formData.personalInfo.fname}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* Middle Name Input */}
                            <div className="w-full items-center gap-1.5 text-[#344054]">
                                <Label htmlFor="mname">Middle Name</Label>
                                <Input
                                    className="input-form placeholder:text-[#66708580]"
                                    type="text"
                                    id="mname"
                                    name='mname'
                                    placeholder="Middle Name"
                                    value={formData.personalInfo.mname}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* Last Name Input */}
                            <div className="w-full items-center gap-1.5 text-[#344054]">
                                <Label htmlFor="lname">Last Name</Label>
                                <Input
                                    className="input-form placeholder:text-[#66708580]"
                                    type="text"
                                    id="lname"
                                    name='lname'
                                    placeholder="Last Name"
                                    value={formData.personalInfo.lname}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Profile Description Textarea */}
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="message">Profile Description</Label>
                            <Textarea
                                className="input-form placeholder:text-[#66708580]"
                                placeholder="Description"
                                id="message"
                                name='description'
                                value={formData.personalInfo.description}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email and LinkedIn Input Fields */}
                        <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-2 lg:gap-4">
                            <div className="w-full">
                                <Label htmlFor="email">Registered Email<span className="text-red-500">*</span></Label>
                                <Input
                                    className="input-form placeholder:text-[#66708580]"
                                    type="email"
                                    id="email"
                                    name='email'
                                    placeholder="Email"
                                    value={formData.personalInfo.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full col-auto">
                                <Label htmlFor="linkedin">LinkedIn Address<span className="text-red-500">*</span></Label>
                                <Input
                                    className="input-form placeholder:text-[#66708580]"
                                    type="url"
                                    name='url'
                                    id="linkedin"
                                    placeholder="linkedin.com/name"
                                    value={formData.personalInfo.url}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Gender and Date of Birth Select Fields */}
                        <div className="flex flex-col gap-4 w-full mb-8 md:grid md:grid-cols-1 lg:grid-cols-3 lg:gap-4">
                            <div className="w-full">
                                <Label htmlFor="gender">Gender<span className="text-red-500">*</span></Label>
                                <Select name='gender' value={gender} onValueChange={(value: string) => setGender(value)}>
                                    <SelectTrigger className="input-form text-[#66708580] text-start flex justify-start">
                                        <SelectValue className="text-start placeholder:text-[#66708580]" placeholder="Gender" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white text-start">
                                        <SelectGroup>
                                            <SelectItem value="male">
                                                Male
                                            </SelectItem>
                                            <SelectItem value="female">
                                                Female
                                            </SelectItem>
                                            <SelectItem value="other">
                                                Other
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="w-full">
                                <Label htmlFor="dob">Date of Birth<span className="text-red-500">*</span></Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "justify-start text-left font-normal rounded-[12px] input-form",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <div className="flex justify-between items-center w-full">
                                                <p>
                                                    {date ? format(date, "PPP") : <span className='text-[#66708580]'>DD/MM/YYYY</span>}
                                                </p>
                                                <CalendarIcon className="mr-2 h-4 w-4 text-[#2C1C5F]" />
                                            </div>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            className="bg-white outline-none"
                                            mode="single"
                                            selected={date}
                                            onSelect={(selectedDate: Date | undefined) => handleDateChange(selectedDate)}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>

                        {/* Mobile Numbers */}
                        <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                            <div className="w-full items-center md:col-span-2 lg:col-span-1 gap-1.5 text-[#344054]">
                                <Label htmlFor="number1">Mobile Number 1</Label>
                                <Input
                                    className="input-form placeholder:text-[#66708580]"
                                    type="tel"
                                    name='number1'
                                    id="number1"
                                    placeholder="Mobile Number"
                                    value={formData.personalInfo.number1}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="w-full items-center gap-1.5 text-[#344054]">
                                <Label htmlFor="number2">Mobile Number 2</Label>
                                <Input
                                    className="input-form placeholder:text-[#66708580]"
                                    type="tel"
                                    id="number2"
                                    name='number2'
                                    placeholder="Mobile Number"
                                    value={formData.personalInfo.number2}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="w-full items-center gap-1.5 text-[#344054]">
                                <Label htmlFor="number3">Mobile Number 3</Label>
                                <Input
                                    className="input-form placeholder:text-[#66708580]"
                                    type="tel"
                                    id="number3"
                                    name='number3'
                                    placeholder="Mobile Number"
                                    value={formData.personalInfo.number3}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Address Details */}
                        <div className="flex flex-col space-y-6">
                            <h2 className="text-lg font-semibold">Address Details</h2>

                            {/* Address Line 1 and Address Line 2 Inputs */}
                            <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-3 lg:gap-4">
                                <div className="w-full col-span-2">
                                    <Label htmlFor="addressLine1">Area/ Locality/ Building<span className="text-red-500">*</span></Label>
                                    <Input
                                        className="input-form placeholder:text-[#66708580]"
                                        type="text"
                                        name='address'
                                        id="address"
                                        placeholder="Address"
                                        value={formData.personalInfo.address}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="w-full col-auto">
                                    <Label htmlFor="addressLine2">Pincode</Label>
                                    <Input
                                        className="input-form placeholder:text-[#66708580]"
                                        type="text"
                                        name='pincode'
                                        id="pincode"
                                        placeholder="Pincode"
                                        value={formData.personalInfo.pincode}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-3 lg:gap-4">
                                <ReusableCombobox
                                    options={cities}
                                    initialValue={selectedCity}
                                    onChange={(value) => setSelectedCity(value)}
                                    placeholder="City"
                                    label="City"
                                />

                                <ReusableCombobox
                                    options={districts}
                                    initialValue={selectedDistrict}
                                    onChange={(value) => setSelectedDistrict(value)}
                                    placeholder="District"
                                    label="District"
                                />

                                <ReusableCombobox
                                    options={states}
                                    initialValue={selectedState}
                                    onChange={(value) => setSelectedState(value)}
                                    placeholder="State"
                                    label="State"
                                />
                            </div>

                            {/* Navigation Buttons */}
                            <div className="pt-8">
                                <Button onClick={handleNext} className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-10 sm:px-16 duration-150 w-full">Save Details and Next</Button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {step === 2 && (
                <>
                    <div className="flex flex-col space-y-6 text-[#344054]">
                        <h2 className="text-lg font-semibold">Educational Info</h2>

                        {/* Secondary School Name  */}
                        <div className="w-full items-center gap-1.5 text-[#344054]">
                            <Label htmlFor="secondary-school">Secondary School Name</Label>
                            <Input
                                className="input-form placeholder:text-[#66708580]"
                                type="text"
                                id="secondary-school"
                                name='school'
                                placeholder="Secondary School Name"
                                value={formData.educationalInfo.school}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-1 lg:grid-cols-4 lg:gap-4">
                            <div className="w-full">
                                <Label className="mb-1" htmlFor="board">Board</Label>
                                <Select name='board' value={board} onValueChange={(value: string) => setBoard(value)}>
                                    <SelectTrigger className="input-form text-[#66708580] text-start flex justify-start">
                                        <SelectValue className="text-start placeholder:text-[#66708580]" placeholder="Board" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white text-start">
                                        <SelectGroup>
                                            <SelectItem value="mp-board">MP Board</SelectItem>
                                            <SelectItem value="bihar-board">Bihar Board</SelectItem>
                                            <SelectItem value="up-board">UP Board</SelectItem>
                                            <SelectItem value="cbse-board">CBSE Board</SelectItem>
                                            <SelectItem value="icse-board">ICSE Board</SelectItem>
                                            <SelectItem value="state-board">State Board</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="w-full lg:col-span-2">
                                <Label htmlFor="stream">Stream</Label>
                                <Input
                                    className="input-form placeholder:text-[#66708580]"
                                    type="text"
                                    name='stream'
                                    id="stream"
                                    placeholder="Stream"
                                    value={formData.educationalInfo.stream}
                                    onChange={handleChange}
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
                                                !schoolPassingYear && "text-muted-foreground"
                                            )}
                                        >
                                            <div className="flex justify-between items-center w-full">
                                                <p>
                                                    {schoolPassingYear ? format(schoolPassingYear, "PPP") : <span className='text-[#66708580]'>DD/MM/YYYY</span>}
                                                </p>
                                                <CalendarIcon className="mr-2 h-4 w-4 text-[#2C1C5F]" />
                                            </div>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            className="bg-white outline-none"
                                            mode="single"
                                            selected={schoolPassingYear}
                                            onSelect={setSchoolPassingYear}
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
                                name='seniorSchool'
                                placeholder="Senior Secondary School Name"
                                value={formData.educationalInfo.seniorSchool}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-1 lg:grid-cols-4 lg:gap-4">
                            <div className="w-full">
                                <Label className="mb-1" htmlFor="board">Board</Label>
                                <Select name='seniorBoard' value={seniorBoard} onValueChange={(value: string) => setSeniorBoard(value)}>
                                    <SelectTrigger className="input-form text-[#66708580] text-start flex justify-start">
                                        <SelectValue className="text-start placeholder:text-[#66708580]" placeholder="Board" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white text-start">
                                        <SelectGroup>
                                            <SelectItem value="mp-board">MP Board</SelectItem>
                                            <SelectItem value="bihar-board">Bihar Board</SelectItem>
                                            <SelectItem value="up-board">UP Board</SelectItem>
                                            <SelectItem value="cbse-board">CBSE Board</SelectItem>
                                            <SelectItem value="icse-board">ICSE Board</SelectItem>
                                            <SelectItem value="state-board">State Board</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="w-full">
                                <Label htmlFor="stream">Stream</Label>
                                <Input
                                    className="input-form placeholder:text-[#66708580]"
                                    type="text"
                                    id="stream"
                                    name='seniorStream'
                                    placeholder="Stream"
                                    value={formData.educationalInfo.seniorStream}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="w-full">
                                <Label htmlFor="stream">Marks Scored</Label>
                                <Input
                                    className="input-form placeholder:text-[#66708580]"
                                    type="text"
                                    id="stream"
                                    name='marks'
                                    placeholder="95%"
                                    value={formData.educationalInfo.marks}
                                    onChange={handleChange}
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
                                                !seniorSchoolPassingYear && "text-muted-foreground"
                                            )}
                                        >
                                            <div className="flex justify-between items-center w-full">
                                                <p>
                                                    {seniorSchoolPassingYear ? format(seniorSchoolPassingYear, "PPP") : <span className='text-[#66708580]'>DD/MM/YYYY</span>}
                                                </p>
                                                <CalendarIcon className="mr-2 h-4 w-4 text-[#2C1C5F]" />
                                            </div>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            className="bg-white outline-none"
                                            mode="single"
                                            selected={seniorSchoolPassingYear}
                                            onSelect={setSeniorSchoolPassingYear}
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
                                    name='diploma'
                                    placeholder="Diploma"
                                    value={formData.educationalInfo.diploma}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="w-full">
                                <Label htmlFor="marks">Marks Scored</Label>
                                <Input
                                    className="input-form placeholder:text-[#66708580]"
                                    type="text"
                                    id="marks"
                                    name='diplomaMarks'
                                    placeholder="95%"
                                    value={formData.educationalInfo.diplomaMarks}
                                    onChange={handleChange}
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
                                                !diplomaPassingYear && "text-muted-foreground"
                                            )}
                                        >
                                            <div className="flex justify-between items-center w-full">
                                                <p>
                                                    {diplomaPassingYear ? format(diplomaPassingYear, "PPP") : <span className='text-[#66708580]'>DD/MM/YYYY</span>}
                                                </p>
                                                <CalendarIcon className="mr-2 h-4 w-4 text-[#2C1C5F]" />
                                            </div>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            className="bg-white outline-none"
                                            mode="single"
                                            selected={diplomaPassingYear}
                                            onSelect={setDiplomaPassingYear}
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
                                name='college'
                                placeholder="College Name"
                                value={formData.educationalInfo.college}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-1 lg:grid-cols-4 lg:gap-4">
                            <div className="w-full">
                                <Label htmlFor="stream">Stream</Label>
                                <Select name='stream' value={stream} onValueChange={(value: string) => setStream(value)}>
                                    <SelectTrigger className="input-form text-[#66708580] text-start flex justify-start">
                                        <SelectValue className="text-start placeholder:text-[#66708580]" placeholder="Stream" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white text-start">
                                        <SelectGroup>
                                            <SelectItem value="mp-board">MP Board</SelectItem>
                                            <SelectItem value="bihar-board">Bihar Board</SelectItem>
                                            <SelectItem value="up-board">UP Board</SelectItem>
                                            <SelectItem value="cbse-board">CBSE Board</SelectItem>
                                            <SelectItem value="icse-board">ICSE Board</SelectItem>
                                            <SelectItem value="state-board">State Board</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="w-full">
                                <Label htmlFor="branch">Branch</Label>
                                <Input
                                    className="input-form placeholder:text-[#66708580]"
                                    type="text"
                                    id="branch"
                                    name='branch'
                                    placeholder="Branch"
                                    value={formData.educationalInfo.branch}
                                    onChange={handleChange}
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
                                                !collegeStartingYear && "text-muted-foreground"
                                            )}
                                        >
                                            <div className="flex justify-between items-center w-full">
                                                <p>
                                                    {collegeStartingYear ? format(collegeStartingYear, "PPP") : <span className='text-[#66708580]'>DD/MM/YYYY</span>}
                                                </p>
                                                <CalendarIcon className="mr-2 h-4 w-4 text-[#2C1C5F]" />
                                            </div>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            className="bg-white outline-none"
                                            mode="single"
                                            selected={collegeStartingYear}
                                            onSelect={setCollegeStartingYear}
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
                                                !collegeEndingYear && "text-muted-foreground"
                                            )}
                                        >
                                            <div className="flex justify-between items-center w-full">
                                                <p>
                                                    {collegeEndingYear ? format(collegeEndingYear, "PPP") : <span className='text-[#66708580]'>DD/MM/YYYY</span>}
                                                </p>
                                                <CalendarIcon className="mr-2 h-4 w-4 text-[#2C1C5F]" />
                                            </div>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            className="bg-white outline-none"
                                            mode="single"
                                            selected={collegeEndingYear}
                                            onSelect={setCollegeEndingYear}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>

                        <div className="pt-8 flex gap-8">
                            <Button onClick={handlePrevious} className="form-btn border border-[#F79009] !text-yellow-100 bg-yellow-100/40 hover:bg-yellow-100/30 py-4 sm:py-6 px-10 sm:px-16 duration-150 w-full">Back</Button>
                            <Button onClick={handleNext} className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-10 sm:px-16 duration-150 w-full"><span className='hidden sm:inline'>Save Details and</span> Next</Button>
                        </div>
                    </div>
                </>
            )}

            {step === 3 && (
                <div className="flex flex-col space-y-6 text-[#344054]">
                    <h2 className="text-lg font-semibold">Skills</h2>

                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="message">Intro Text</Label>
                        <Textarea
                            className="input-form placeholder:text-[#66708580]"
                            placeholder="I have experience in......"
                            id="message"
                            name="intro"
                            value={formData.skillsInfo.intro}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    {formData.skillsInfo.skillList.map((skill, index) => (
                        <div key={index} className="bg-white-100 p-4 sm:p-7 space-y-5 sm:space-y-9 rounded-[8px]">
                            <div className="w-full items-center gap-1.5 text-[#344054]">
                                <Label htmlFor={`skills-${index}`}>Skills</Label>
                                <Input
                                    className="input-form bg-white placeholder:text-[#66708580]"
                                    type="text"
                                    id={`skills-${index}`}
                                    name="skill"
                                    placeholder="Skills"
                                    value={skill.skill}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>

                            <div className="grid w-full gap-1.5">
                                <Label htmlFor={`description-${index}`}>Skill Description</Label>
                                <Textarea
                                    className="input-form bg-white placeholder:text-[#66708580]"
                                    placeholder="I have experience in......"
                                    id={`description-${index}`}
                                    name="description"
                                    value={skill.description}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                        </div>
                    ))}

                    <button onClick={handleAddSkill} className="text-[#6941C6] hover:bg-[#6941C6]/10 hover:scale-95 duration-150 text-base sm:text-lg font-bold py-2 w-32 rounded-[8px]">+ Add Skill</button>

                    <div className="pt-8 flex gap-8">
                        <Button
                            onClick={handlePrevious}
                            className="form-btn border border-[#F79009] !text-yellow-100 bg-yellow-100/40 hover:bg-yellow-100/30 py-4 sm:py-6 px-10 sm:px-16 duration-150 w-full"
                        >
                            Back
                        </Button>
                        <Button
                            onClick={handleNext}
                            className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-10 sm:px-16 duration-150 w-full"
                        >
                            <span className='hidden sm:inline'>Save Details and</span> Next
                        </Button>
                    </div>
                </div>
            )}

            {step === 4 && (
                <>
                    <div className="flex flex-col space-y-6 text-[#344054]">
                        <h2 className="text-lg font-semibold">Experience</h2>

                        {formData.experience.map((exp, index) => (
                            <div key={index} className="bg-white-100 p-4 sm:p-7 space-y-5 sm:space-y-9 rounded-[8px]">
                                <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-2 lg:gap-4">
                                    <div className="w-full">
                                        <Label htmlFor={`designation-${index}`}>Experience Designation</Label>
                                        <Input
                                            className="input-form bg-white placeholder:text-[#66708580]"
                                            type="text"
                                            id={`designation-${index}`}
                                            name="designation"
                                            placeholder="Designation"
                                            value={exp.designation}
                                            onChange={(e) => handleChange(e, index, 'experience')}
                                        />
                                    </div>
                                    <div className="w-full col-auto">
                                        <Label htmlFor={`organization-${index}`}>Organisation</Label>
                                        <Input
                                            className="input-form bg-white placeholder:text-[#66708580]"
                                            type="text"
                                            name="organization"
                                            id={`organization-${index}`}
                                            placeholder="Organization"
                                            value={exp.organization}
                                            onChange={(e) => handleChange(e, index, 'experience')}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-2 lg:gap-4">
                                    <div className="w-full">
                                        <Label htmlFor={`startingYear-${index}`}>Starting Year</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "justify-start text-left font-normal rounded-[12px] input-form bg-white hover:bg-white",
                                                        !exp.startingYear && "text-muted-foreground"
                                                    )}
                                                >
                                                    <div className="flex justify-between items-center w-full">
                                                        <p>
                                                            {exp.startingYear ? format(exp.startingYear, "PPP") : <span className='text-[#66708580]'>DD/MM/YYYY</span>}
                                                        </p>
                                                        <CalendarIcon className="mr-2 h-4 w-4 text-[#2C1C5F]" />
                                                    </div>
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    className="bg-white outline-none"
                                                    mode="single"
                                                    selected={experienceStartingYears[index] ?? undefined}
                                                    onSelect={(date) => handleExperienceDateChange(date ?? null, index, 'startingYear')}
                                                    initialFocus
                                                />

                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                    <div className="w-full">
                                        <Label htmlFor={`endingYear-${index}`}>Ending Year</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "justify-start text-left font-normal rounded-[12px] input-form bg-white hover:bg-white",
                                                        !exp.endingYear && "text-muted-foreground"
                                                    )}
                                                >
                                                    <div className="flex justify-between items-center w-full">
                                                        <p>
                                                            {exp.endingYear ? format(exp.endingYear, "PPP") : <span className='text-[#66708580]'>DD/MM/YYYY</span>}
                                                        </p>
                                                        <CalendarIcon className="mr-2 h-4 w-4 text-[#2C1C5F]" />
                                                    </div>
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    className="bg-white outline-none"
                                                    mode="single"
                                                    selected={experienceEndingYears[index] ?? undefined}
                                                    onSelect={(date) => handleExperienceDateChange(date ?? null, index, 'endingYear')}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                </div>

                                <div className="grid w-full gap-1.5">
                                    <Label htmlFor={`description-${index}`}>Experience Description</Label>
                                    <Textarea
                                        className="input-form bg-white placeholder:text-[#66708580]"
                                        placeholder="I have experience in......"
                                        id={`description-${index}`}
                                        name="description"
                                        value={exp.description}
                                        onChange={(e) => handleChange(e, index, 'experience')}
                                    />
                                </div>
                            </div>
                        ))}

                        <button onClick={handleAddExperience} className="text-[#6941C6] hover:bg-[#6941C6]/10 hover:scale-95 duration-150 text-base sm:text-lg font-bold py-2 w-48 rounded-[8px]">+ Add Experience</button>

                        <div className="pt-8 flex gap-x-6 sm:gap-8">
                            <Button onClick={handlePrevious} className="form-btn border border-[#F79009] !text-yellow-100 bg-yellow-100/40 hover:bg-yellow-100/30 py-4 sm:py-6 px-8 sm:px-16 duration-150 w-full">Previous</Button>
                            <Button type="submit" className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-8 sm:px-16 duration-150 w-full" onClick={(e) => {
                                e.preventDefault()
                            }}>Submit</Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};



const ReusableCombobox: React.FC<ReusableComboboxProps> = ({
    options,
    initialValue = null,
    onChange,
    placeholder = 'Select option...',
    label,
}) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(initialValue);
    const [query, setQuery] = useState<string>('');

    const handleSelectValue = (value: string | null) => {
        setSelectedValue(value);
        onChange(value);
    };

    const filteredOptions =
        query === ''
            ? options
            : options.filter((option) => {
                return option.label.toLowerCase().includes(query.toLowerCase());
            });

    return (
        <div>
            {label && <Label htmlFor="combobox">{label}<span className="text-red-500">*</span></Label>}
            <Combobox value={selectedValue} onChange={handleSelectValue}>
                <ComboboxInput
                    as="input"
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={placeholder}
                    className="w-full px-3 py-2 input-form placeholder:text-[#66708580] outline-none"
                />
                <ComboboxOptions className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-md max-h-48 overflow-y-auto">
                    {filteredOptions.length === 0 && (
                        <ComboboxOption disabled value="not-found">
                            Not found. Contact support.
                        </ComboboxOption>
                    )}
                    {filteredOptions.map((option) => (
                        <ComboboxOption className="cursor-pointer" key={option.value} value={option.value}>
                            {option.label}
                        </ComboboxOption>
                    ))}
                </ComboboxOptions>
            </Combobox>
        </div>
    );
};

export default MultiStepForm;