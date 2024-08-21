"use client"


import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import { cities, districts, states } from '@/constents/constents';
import { Info, selectStudent, updateStudentPersonalInfo } from "@/lib/features/user/studentProfileSlice";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

interface PersonalInfoHandle {
    handleSubmit: () => void;
}

const PersonalInfo = forwardRef<PersonalInfoHandle>((props, ref) => {
    const dispatch = useAppDispatch();
    const studentProfileData = useAppSelector(selectStudent) || null
    const studentInfo = useAppSelector((state: any) => state.studentProfile.student.info);
    const [localData, setLocalData] = useState(studentInfo);
    const sectionRef = useRef(studentInfo);

    const [showDistrictOptions, setShowDistrictOptions] = useState(false);
    const [showStateOptions, setShowStateOptions] = useState(false);
    const [languages, setLanguages] = useState(studentInfo.languages || []);

    useEffect(() => {
        if (studentProfileData.info) {
            setLocalData(studentProfileData.info);
        } else {
            setLocalData(studentInfo);
        }
    }, [studentInfo, studentProfileData.info]);

    useEffect(() => {
        dispatch(updateStudentPersonalInfo(sectionRef.current));
    }, [dispatch]);

    const handleData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const keys = name.split('.');

        if (keys.length > 1) {
            // Handling nested properties
            const [key, subKey] = keys;
            setLocalData((prevState: typeof localData) => ({
                ...prevState,
                [key]: {
                    ...prevState[key],
                    [subKey]: value
                }
            }));
        } else {
            // Handling flat properties
            setLocalData((prevState: typeof localData) => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleMobileNumbersChange = (index: number, value: string) => {
        const updatedMobileNumbers = [...localData.mobile];
        updatedMobileNumbers[index] = value;
        setLocalData({ ...localData, mobile: updatedMobileNumbers });
    };

    const addMobileNumber = () => {
        const updatedMobileNumbers = [...localData.mobile, ''];
        setLocalData({ ...localData, mobile: updatedMobileNumbers });
    };

    const handleDistrictChange = (district: string) => {
        setLocalData({ ...localData, district });
        setShowDistrictOptions(false);
    };

    const handleStateChange = (state: string) => {
        setLocalData({ ...localData, state });
        setShowStateOptions(false);
    };

    const handleLanguageChange = (index: number, value: string) => {
        const updatedLanguages = [...languages];
        updatedLanguages[index] = value;
        setLanguages(updatedLanguages);
        setLocalData({ ...localData, languages: updatedLanguages });
    };

    const addLanguage = () => {
        const updatedLanguages = [...languages, ''];
        setLanguages(updatedLanguages);
        setLocalData({ ...localData, languages: updatedLanguages });
    };

    const handleSubmit = () => {
        sectionRef.current = localData;
        dispatch(updateStudentPersonalInfo(localData));
    };

    useImperativeHandle(ref, () => ({
        handleSubmit,
    }));

    return (
        <div className="flex flex-col space-y-6 text-[#344054]">
            <h2 className="text-lg font-semibold">Personal Info</h2>

            {/* First Name Input */}
            <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                <div className="w-full items-center md:col-span-2 lg:col-span-1 gap-1.5 text-[#344054]">
                    <Label htmlFor="name.first">First Name<span className="text-red-500">*</span></Label>
                    <Input
                        className="input-form placeholder:text-[#66708580]"
                        type="text"
                        name="name.first"
                        id="name.first"
                        placeholder="First Name"
                        value={localData.name?.first}
                        onChange={handleData}
                    />
                </div>
                {/* Middle Name Input */}
                <div className="w-full items-center gap-1.5 text-[#344054]">
                    <Label htmlFor="name.middle">Middle Name</Label>
                    <Input
                        className="input-form placeholder:text-[#66708580]"
                        type="text"
                        id="name.middle"
                        name="name.middle"
                        placeholder="Middle Name"
                        value={localData.name?.middle}
                        onChange={handleData}
                    />
                </div>
                {/* Last Name Input */}
                <div className="w-full items-center gap-1.5 text-[#344054]">
                    <Label htmlFor="name.last">Last Name</Label>
                    <Input
                        className="input-form placeholder:text-[#66708580]"
                        type="text"
                        id="name.last"
                        name="name.last"
                        placeholder="Last Name"
                        value={localData.name?.last}
                        onChange={handleData}
                    />
                </div>
            </div>

            {/* Profile Description Textarea */}
            <div className="grid w-full gap-1.5">
                <Label htmlFor="description">Profile Description</Label>
                <Textarea
                    className="input-form placeholder:text-[#66708580]"
                    placeholder="Description"
                    id="description"
                    name="desc"
                    value={localData?.desc}
                    onChange={handleData}
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
                        name="email"
                        placeholder="Email"
                        value={localData?.email}
                        onChange={handleData}
                    />
                </div>
                <div className="w-full col-auto">
                    <Label htmlFor="linkedin">LinkedIn Address<span className="text-red-500">*</span></Label>
                    <Input
                        className="input-form placeholder:text-[#66708580]"
                        type="url"
                        name="linkedin"
                        id="linkedin"
                        placeholder="linkedin.com/name"
                        value={localData?.linkedin}
                        onChange={handleData}
                    />
                </div>
            </div>

            {/* Gender and Date of Birth Select Fields */}
            {/* <div className="flex flex-col gap-4 w-full mb-8 md:grid md:grid-cols-1 lg:grid-cols-3 lg:gap-4">
                <div className="w-full">
                    <Label htmlFor="gender">Gender<span className="text-red-500">*</span></Label>
                    <Select name="gender" value={localData?.gender} onValueChange={(value: string) => setLocalData((prevState: typeof localData) => ({ ...prevState, gender: value }))}>
                        <SelectTrigger className="input-form text-[#66708580] text-start flex justify-start">
                            <SelectValue className="text-start placeholder:text-[#66708580]" placeholder="Gender" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-start">
                            <SelectGroup>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
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
                                    !localData.dob && "text-muted-foreground"
                                )}
                            >
                                <div className="flex justify-between items-center w-full">
                                    <p>
                                        {localData?.dob ? format(new Date(localData.dob), "PPP") : <span className='text-[#66708580]'>DD/MM/YYYY</span>}
                                    </p>
                                    <CalendarIcon className="mr-2 h-4 w-4 text-[#2C1C5F]" />
                                </div>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                className="bg-white outline-none"
                                mode="single"
                                selected={localData.dob ? new Date(localData.dob) : undefined}
                                onSelect={(selectedDate: Date | undefined) => setLocalData((prevState: any) => ({ ...prevState, dob: selectedDate?.toISOString() || '' }))}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div> */}

            {/* Mobile Numbers */}
            <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                {localData.mobile?.map((number: any, index: any) => (
                    <div key={index} className="w-full items-center gap-1.5 text-[#344054]">
                        <Label htmlFor={`mobile${index + 1}`}>Mobile Number {index + 1}</Label>
                        <Input
                            className="input-form placeholder:text-[#66708580]"
                            type="tel"
                            id={`mobile${index + 1}`}
                            name={`mobile${index + 1}`}
                            placeholder="Mobile Number"
                            value={number}
                            onChange={(e) => handleMobileNumbersChange(index, e.target.value)}
                        />
                    </div>
                ))}
                <div className="flex items-center">
                    <Button onClick={addMobileNumber} className="mt-4">Add Mobile Number</Button>
                </div>
            </div>

            {/* Address Details */}
            <div className="flex flex-col space-y-6">
                <h2 className="text-lg font-semibold">Address Details</h2>

                {/* Address Line 1 and Address Line 2 Inputs */}
                <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-3 lg:gap-4">
                    <div className="w-full col-span-2">
                        <Label htmlFor="address">Area/ Locality/ Building<span className="text-red-500">*</span></Label>
                        <Input
                            className="input-form placeholder:text-[#66708580]"
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Address"
                            value={localData?.address}
                            onChange={handleData}
                        />
                    </div>
                    <div className="w-full col-auto">
                        <Label htmlFor="pincode">Pincode</Label>
                        <Input
                            className="input-form placeholder:text-[#66708580]"
                            type="text"
                            name="pincode"
                            id="pincode"
                            placeholder="Pincode"
                            value={localData?.pincode}
                            onChange={handleData}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full text-[#344054] mb-8 md:grid md:grid-cols-3 lg:gap-4">
                    <div className="w-full col-auto">
                        <Label htmlFor="City">City<span className="text-red-500">*</span></Label>
                        <Input
                            className="input-form placeholder:text-[#66708580]"
                            type="text"
                            name="city"
                            id="City"
                            placeholder="City"
                            value={localData?.city}
                            onChange={handleData}
                        />
                    </div>
                    <div className="w-full col-auto">
                        <Label htmlFor="District">District<span className="text-red-500">*</span></Label>
                        <Input
                            className="input-form placeholder:text-[#66708580]"
                            type="text"
                            name="district"
                            id="District"
                            placeholder="District"
                            value={localData?.district}
                            onChange={handleData}
                        />
                    </div>
                    <div className="w-full col-auto">
                        <Label htmlFor="State">State<span className="text-red-500">*</span></Label>
                        <Input
                            className="input-form placeholder:text-[#66708580]"
                            type="text"
                            name="state"
                            id="State"
                            placeholder="State"
                            value={localData?.state}
                            onChange={handleData}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});

PersonalInfo.displayName = 'PersonalInfo';
export default PersonalInfo;
