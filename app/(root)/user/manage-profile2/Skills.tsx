"use client"

import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { selectStudent, updateStudentSkillsData } from "@/lib/features/user/studentProfileSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

interface Skill {
    name: string;
    desc: string;
}

interface Skills {
    intro: string;
    skill: Skill[];
}

interface SkillsProps {
    onSubmit?: () => void;
}

interface SkillsHandle {
    handleSubmit: () => void;
    handlePrev?: () => void;
}

const initialSkillsData: Skills = {
    intro: "",
    skill: [
        {
            name: "",
            desc: ""
        }
    ]
};


const Skills = forwardRef<SkillsHandle, SkillsProps>((props, ref) => {
    const dispatch = useAppDispatch();
    const studentProfileData = useAppSelector(selectStudent) || null
    const skills = useAppSelector((state: any) => state.studentProfile.student.skills) || initialSkillsData;
    const [localData, setLocalData] = useState<Skills>(skills);
    const sectionRef = useRef<Skills>(localData);

    useEffect(() => {
        if (studentProfileData.skills) {
            setLocalData(studentProfileData.skills);
        } else {
            setLocalData(skills);
        }
    }, [skills, studentProfileData.skills]);

    useEffect(() => {
        sectionRef.current = localData;
    }, [localData]);

    // This effect will run when the component unmounts or when the dependencies change
    useEffect(() => {
        return () => {
            dispatch(updateStudentSkillsData(sectionRef.current));
        };
    }, [dispatch]);

    const handleIntroTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newIntroText = e.target.value;
        setLocalData({ ...localData, intro: newIntroText });
    };

    const handleSkillChange = (index: number, key: keyof Skill, value: string) => {
        const updatedSkills = [...localData.skill];
        updatedSkills[index] = { ...updatedSkills[index], [key]: value };
        setLocalData({ ...localData, skill: updatedSkills });
    };

    const addNewSkill = () => {
        const newSkill: Skill = { name: '', desc: '' };
        const updatedSkills = [...localData.skill, newSkill];
        setLocalData({ ...localData, skill: updatedSkills });
    };

    const handleSubmit = () => {
        sectionRef.current = localData;
        if (props.onSubmit) props.onSubmit();
    };

    const handlePrev = () => {
        sectionRef.current = localData;
    };

    useImperativeHandle(ref, () => ({
        handleSubmit,
        handlePrev,
    }));

    return (
        <div className="flex flex-col space-y-6 text-[#344054]">
            <h2 className="text-lg font-semibold">Skills</h2>

            <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Intro Text</Label>
                <Textarea
                    className="input-form placeholder:text-[#66708580]"
                    placeholder="I have experience in......"
                    id="message"
                    name="intro"
                    value={localData?.intro}
                    onChange={handleIntroTextChange}
                />
            </div>

            {localData?.skill?.length > 0 ? localData.skill.map((skill, index) => (
                <div key={index} className="bg-white-100 p-4 sm:p-7 space-y-5 sm:space-y-9 rounded-[8px]">
                    <div className="w-full items-center gap-1.5 text-[#344054]">
                        <Label htmlFor={`skills-${index}`}>Skills</Label>
                        <Input
                            className="input-form bg-white placeholder:text-[#66708580]"
                            type="text"
                            id={`skills-${index}`}
                            name="name"
                            placeholder="Skills"
                            value={skill.name}
                            onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                        />
                    </div>

                    <div className="grid w-full gap-1.5">
                        <Label htmlFor={`desc-${index}`}>Skill Description</Label>
                        <Textarea
                            className="input-form bg-white placeholder:text-[#66708580]"
                            placeholder="I have experience in......"
                            id={`desc-${index}`}
                            name="desc"
                            value={skill.desc}
                            onChange={(e) => handleSkillChange(index, 'desc', e.target.value)}
                        />
                    </div>
                </div>
            )) : (
                <p>No skills available. Add a new skill.</p>
            )}

            <button onClick={addNewSkill} className="text-[#6941C6] hover:bg-[#6941C6]/10 hover:scale-95 duration-150 text-base sm:text-lg font-bold py-2 w-32 rounded-[8px]">+ Add Skill</button>
        </div>
    );
});

Skills.displayName = 'Skills';
export default Skills;
