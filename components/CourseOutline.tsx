"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Course } from '@/constents/types';

const CourseOutline: React.FC<{ course: Course }> = ({ course }) => {
    const [openModules, setOpenModules] = useState<number[]>([]);
    const [openLessons, setOpenLessons] = useState<{ [key: number]: number[] }>({});

    const toggleModule = (index: number) => {
        setOpenModules((prevOpenModules) => {
            if (prevOpenModules.includes(index)) {
                return prevOpenModules.filter((i) => i !== index);
            } else {
                return [...prevOpenModules, index];
            }
        });
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
            <h2 className="text-xl sm:text-2xl font-bold mb-4">{course.title}</h2>
            {course.modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className="module mb-4 border-2 p-4 lg:p-6 lg:px-10 rounded-xl">
                    <div className={`${openModules.includes(moduleIndex) ? 'border-b-2 pb-2 mb-3 w-full lg:w-1/2' : ''}`}
                        onClick={() => toggleModule(moduleIndex)}
                    >
                        <h3 className="text-sm sm:text-lg md:text-xl font-semibold cursor-pointer">{module.title}
                        </h3>
                        <ul className="list-disc pl-1 sm:pl-5 flex gap-x-5 md:gap-x-8 sm:gap-x-12 text-xs sm:text-base text-[#344054] font-normal my-2 cursor-pointer">
                            {[
                                `Topics ${module.lessons.length}`,
                                `${module.lessons.reduce((acc, lesson) => acc + lesson.topics.length, 0)} SubTopics`,
                                `${module.lessons.reduce((acc, lesson) => acc + parseInt(lesson.duration, 10), 0)} Minites`
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
                                            <h4 className="text-[11px] sm:text-base md:text-lg font-medium">
                                                {lesson.title}
                                            </h4>
                                        </div>
                                        <div className="flex items-center space-x-4 sm:w-1/3 justify-end">
                                            <span className="text-[10px] sm:text-sm text-gray-500">{lesson.duration.slice(0,6)}</span>
                                            <Link href={lesson.link} target="_blank" rel="noopener noreferrer">
                                                <p className="text-[10px] sm:text-sm text-blue-500 underline">Watch</p>
                                            </Link>
                                        </div>
                                    </div>
                                    {openLessons[moduleIndex]?.includes(lessonIndex) && (
                                        <ul className="list-disc pl-6 mt-2">
                                            {lesson.topics.map((topic, topicIndex) => (
                                                <li key={topicIndex} className="mb-2">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-[#525866] text-[10px] sm:text-sm font-normal">
                                                            {topic.title} - {topic.duration}
                                                        </span>
                                                    </div>
                                                    {topic.materials && (
                                                        <ul className="list-none pl-1 sm:pl-4 mt-1">
                                                            {topic.materials.map((material, materialIndex) => (
                                                                <li key={materialIndex} className="text-[10px] sm:text-sm text-[#001F3F] font-semibold">
                                                                    <Link href={material.url} target="_blank" rel="noopener noreferrer">
                                                                        <div className="flex-center relative max-w-[250px] gap-x-3 mt-2 border p-1 rounded-[12px]">
                                                                            <div className="relative">
                                                                                <Image className="object-cover h-4 w-4 sm:h-5 sm:w-5" src="/icons/pdf.svg" alt="PDF Icon" width={20} height={20} />
                                                                            </div>
                                                                            <p className="text-[8px] sm:text-sm font-normal">
                                                                                {material.title}
                                                                            </p>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
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

export default CourseOutline;
