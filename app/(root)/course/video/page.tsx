"use client"

import { courseData } from '@/constents/constents';
import { Course } from '@/constents/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface Material {
    title: string;
    url: string;
    type: string;
}

interface Topic {
    title: string;
    duration: string;
    materials?: Material[];
}

interface Lesson {
    title: string;
    duration: string;
    link: string;
    topics: Topic[];
}

interface Module {
    title: string;
    lessons: Lesson[];
}

interface CourseComponentProps {
    course: Course;
}

const Video = () => {
    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-2 sm:p-12 mx-2 sm:mx-10 md:mx-16">
                    <CourseComponent course={courseData} />
                </div>
            </section>
        </>
    );
};

const CourseComponent: React.FC<CourseComponentProps> = ({ course }) => {
    const [currentModuleIndex, setCurrentModuleIndex] = useState<number>(0);
    const [expandedModules, setExpandedModules] = useState<{ [key: number]: boolean }>({});
    const [expandedLessons, setExpandedLessons] = useState<{ [key: string]: boolean }>({});

    const toggleModule = (moduleIndex: number) => {
        setExpandedModules((prev) => ({ ...prev, [moduleIndex]: !prev[moduleIndex] }));
        setCurrentModuleIndex(moduleIndex);
    };

    const toggleLesson = (moduleIndex: number, lessonIndex: number) => {
        const key = `${moduleIndex}-${lessonIndex}`;
        setExpandedLessons((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex gap-8">
                <div className="w-2/3">
                    <div className="mb-8">
                        <video
                            controls
                            className="w-full rounded-md shadow-md"
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            onPlay={() => setCurrentModuleIndex(0)}
                        />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold">{course.title}</h2>
                        <div className='flex-center'>
                            <Image className="w-[30px] h-[30px] rounded-full mr-4" src="/icons/profile.svg" alt="Teacher Profile" width={30} height={30} />
                            <p className="text-[#6941C6] text-lg font-medium">Teacher Name</p>
                        </div>
                    </div>
                    <div className="flex mt-10 items-center">
                        {course.modules[currentModuleIndex].lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="ml-4 w-full max-w-[340px]">
                                {lesson.topics.map((topic, topicIndex) => (
                                    <div key={topicIndex} className="ml-4">
                                        {topic.materials && (
                                            <ul className="ml-4">
                                                {topic.materials.map((material, materialIndex) => (
                                                    <li key={materialIndex}>
                                                        <Link
                                                            href={material.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <div className="flex relative w-full p-5 gap-x-3 mt-2 border rounded-[12px]">
                                                                <div className="relative">
                                                                    <Image src="/icons/pdf.svg" alt="PDF Icon" width={20} height={20} />
                                                                </div>
                                                                <p className="text-xs sm:text-sm text-[#001F3F] font-semibold">
                                                                    {material.title} ({material.type.toUpperCase()})
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/3 pl-4 bg-[rgba(105,_65,_198,_0.05)] rounded-[12px] px-8 py-5">
                    <div className="my-4">
                        <CourseVideoOutline course={course} setCurrentModuleIndex={setCurrentModuleIndex} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const CourseVideoOutline: React.FC<{ course: Course; setCurrentModuleIndex: React.Dispatch<React.SetStateAction<number>> }> = ({
    course,
    setCurrentModuleIndex,
}) => {
    const [openModules, setOpenModules] = useState<number[]>([]);
    const [openLessons, setOpenLessons] = useState<{ [key: number]: number[] }>({});

    const toggleModule = (moduleIndex: number) => {
        setOpenModules((prevOpenModules) => {
            if (prevOpenModules.includes(moduleIndex)) {
                return prevOpenModules.filter((i) => i !== moduleIndex);
            } else {
                return [...prevOpenModules, moduleIndex];
            }
        });
        setCurrentModuleIndex(moduleIndex);
    };

    const toggleLesson = (moduleIndex: number, lessonIndex: number) => {
        setOpenLessons((prevOpenLessons) => {
            const moduleLessons = prevOpenLessons[moduleIndex] || [];
            if (moduleLessons.includes(lessonIndex)) {
                return {
                    ...prevOpenLessons,
                    [moduleIndex]: moduleLessons.filter((i) => i !== lessonIndex),
                };
            } else {
                return {
                    ...prevOpenLessons,
                    [moduleIndex]: [...moduleLessons, lessonIndex],
                };
            }
        });
    };

    return (
        <div>
            <h2 className="text-xl font-semibold">{course.title}</h2>
            {course.modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className={`${moduleIndex !== course.modules.length - 1 ? 'border-b-2' : ''} p-4`}>
                    <div
                        className={`${openModules.includes(moduleIndex)}`}
                        onClick={() => toggleModule(moduleIndex)}
                    >
                        <h3 className="text-base font-semibold cursor-pointer">{module.title}</h3>
                        <ul className="list-disc pl-5 flex gap-x-7 md:gap-x-8 sm:gap-x-12 text-xm sm:text-sm text-[#344054] font-normal my-2 cursor-pointer">
                            {[
                                `Topics ${module.lessons.length}`,
                                `${module.lessons.reduce(
                                    (acc, lesson) => acc + lesson.topics.length,
                                    0
                                )} SubTopics`,
                                `${module.lessons.reduce(
                                    (acc, lesson) => acc + parseInt(lesson.duration, 10),
                                    0
                                )} Minites`,
                            ].map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    {openModules.includes(moduleIndex) && (
                        <div className="ml-4">
                            {module.lessons.map((lesson, lessonIndex) => (
                                <div key={lessonIndex} className="lesson mb-2">
                                    <div
                                        className="flex justify-between items-center cursor-pointer"
                                        onClick={() => toggleLesson(moduleIndex, lessonIndex)}
                                    >
                                        <div className="w-2/3">
                                            <h4 className="text-sm font-normal">{lesson.title}</h4>
                                        </div>
                                        <div className="flex items-center space-x-4 sm:w-1/3 justify-end">
                                            <span className="text-xs text-gray-500">
                                                {lesson.duration.slice(0, 6)}
                                            </span>
                                            <Link href={lesson.link} target="_blank" rel="noopener noreferrer">
                                                <p className="text-xs text-blue-500 underline">Watch</p>
                                            </Link>
                                        </div>
                                    </div>
                                    {openLessons[moduleIndex]?.includes(lessonIndex) && (
                                        <ul className="list-disc pl-6 mt-2">
                                            {lesson.topics.map((topic, topicIndex) => (
                                                <li key={topicIndex} className="mb-2">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-[#525866] text-xs font-normal">
                                                            {topic.title} - {topic.duration.slice(0, 6)}
                                                        </span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Video;
