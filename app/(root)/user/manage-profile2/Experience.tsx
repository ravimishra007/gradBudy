"use client"


import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { createStudent, resetStudentProfile, selectStudent, updateStudent, updateStudentExperience } from "@/lib/features/user/studentProfileSlice";
import { selectLoggedInUser } from "@/lib/features/auth/authSlice";

interface ExperienceData {
    designation: string;
    org: string;
    startDate: string;
    endDate: string;
    desc: string;
}

interface ExperienceHandle {
    handleSubmit: () => void;
    handlePrev?: () => void;
}

const Experience = forwardRef<ExperienceHandle>((props, ref) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const user = useAppSelector(selectLoggedInUser)
    const studentProfileData = useAppSelector(selectStudent) || null
    const studentData = useAppSelector((state: any) => state.studentProfile.student);
    const experiences = useAppSelector((state: any) => state.studentProfile.student.experience);
    const [localData, setLocalData] = useState<ExperienceData[]>(experiences);
    const sectionRef = useRef(experiences);
    const [experienceStartingYears, setExperienceStartingYears] = useState<Array<Date | null>>(new Array(experiences.length).fill(null));
    const [experienceEndingYears, setExperienceEndingYears] = useState<Array<Date | null>>(new Array(experiences.length).fill(null));

    useEffect(() => {
        if (studentProfileData.experience) {
            setLocalData(studentProfileData.experience);
        } else {
            setLocalData(experiences);
        }
    }, [experiences, studentProfileData.experience]);

    useEffect(() => {
        dispatch(updateStudentExperience(sectionRef.current));
    }, [dispatch]);

    const handleExperienceChange = (index: number, key: string, value: string) => {
        const updatedExperiences = [...localData];
        updatedExperiences[index] = { ...updatedExperiences[index], [key]: value };
        setLocalData(updatedExperiences);
    };

    const handleExperienceDateChange = (date: Date | null, index: number, key: string) => {
        const updatedExperiences = [...localData];
        updatedExperiences[index] = { ...updatedExperiences[index], [key]: date ? date.toISOString() : '' };

        if (key === 'startDate') {
            const updatedStartingYears = [...experienceStartingYears];
            updatedStartingYears[index] = date;
            setExperienceStartingYears(updatedStartingYears);
        } else if (key === 'endDate') {
            const updatedEndingYears = [...experienceEndingYears];
            updatedEndingYears[index] = date;
            setExperienceEndingYears(updatedEndingYears);
        }

        setLocalData(updatedExperiences);
    };

    const addNewExperience = () => {
        const newExperience: ExperienceData = { designation: '', org: '', startDate: '', endDate: '', desc: '' };
        setLocalData([...localData, newExperience]);
        setExperienceStartingYears([...experienceStartingYears, null]);
        setExperienceEndingYears([...experienceEndingYears, null]);
    };

    const validateData = () => {
        for (const experience of localData) {
            if (!experience.designation || !experience.org || !experience.startDate || !experience.endDate) {
                return false;
            }
        }
        return true;
    };

    const handlePrev = () => {
        sectionRef.current = localData;
        dispatch(updateStudentExperience(localData));
    };

    const handleSubmit = async () => {
        if (!validateData()) {
            alert("Please fill all required fields.");
            return;
        }

        sectionRef.current = localData;
        dispatch(updateStudentExperience(localData));

        const updatedStudent = {
            ...studentData,
            experience: localData,
        };

        try {
            if (user?.token) {
                if (!studentData._id) {
                    await dispatch(createStudent({ userId: user?.user.id, student: updatedStudent, token: user.token })).unwrap();
                    alert('Student added successfully.');
                    router.push("/")
                    dispatch(resetStudentProfile());

                } else {
                    await dispatch(updateStudent({ id: studentData._id, student: updatedStudent, token: user.token })).unwrap();
                    alert('Student updated successfully.');
                    router.push("/")
                    dispatch(resetStudentProfile());
                }
            } else {
                throw new Error('User token is required.');
            }
        } catch (error: any) {
            console.error("Error submitting data:", error);
            if (error.response && error.response.data) {
                console.error("Server response:", error.response.data.error);
                alert(`Error: ${error.response.data.message || 'An error occurred while submitting the data.'}`);
            } else {
                alert('An error occurred while submitting the data.');
            }
        }
    };



    useImperativeHandle(ref, () => ({
        handleSubmit,
        handlePrev,
    }));

    return (
        <div className="flex flex-col space-y-6 text-[#344054]">
            <h2 className="text-lg font-semibold">Experience</h2>

            {localData.map((exp, index) => (
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
                                onChange={(e) => handleExperienceChange(index, 'designation', e.target.value)}
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
                                value={exp.org}
                                onChange={(e) => handleExperienceChange(index, 'org', e.target.value)}
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
                                            !exp.startDate && "text-muted-foreground"
                                        )}
                                    >
                                        <div className="flex justify-between items-center w-full">
                                            <p>
                                                {exp.startDate ? format(new Date(exp.startDate), "PPP") : <span className='text-[#66708580]'>DD/MM/YYYY</span>}
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
                                        onSelect={(date) => handleExperienceDateChange(date ?? null, index, 'startDate')}
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
                                            !exp.endDate && "text-muted-foreground"
                                        )}
                                    >
                                        <div className="flex justify-between items-center w-full">
                                            <p>
                                                {exp.endDate ? format(new Date(exp.endDate), "PPP") : <span className='text-[#66708580]'>DD/MM/YYYY</span>}
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
                                        onSelect={(date) => handleExperienceDateChange(date ?? null, index, 'endDate')}
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
                            value={exp.desc}
                            onChange={(e) => handleExperienceChange(index, 'desc', e.target.value)}
                        />
                    </div>
                </div>
            ))}

            <button onClick={addNewExperience} className="text-[#6941C6] hover:bg-[#6941C6]/10 hover:scale-95 duration-150 text-base sm:text-lg font-bold py-2 w-48 rounded-[8px]">+ Add Experience</button>
        </div>
    );
});
Experience.displayName = 'Experience';
export default Experience;
