"use client"

import React from 'react'
import CountUp from 'react-countup';

interface DynamicStatProps {
    count: number;
    duration: number;
    label: string;
    suffix: string;
    className?: string;
    subClassName?: string;
}

export const DynamicStat = ({ count, label, suffix, duration, className, subClassName }: DynamicStatProps) => {
    return (
        <div className={`uppercase text-[#2C1C5F] flex flex-col`}>
            <CountUp end={count} suffix={`${suffix} `} duration={duration} className={`font-semibold ${className ? className : 'text-3xl'} md:text-4xl leading-tight`} />
            <span className={`${subClassName ? subClassName : "text-sm md:text-lg font-medium leading-5"}`}>{label}</span>
        </div>
    );
};


const Review = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-x-16 grid-rows-2 md:grid-rows-1 md:grid-cols-4 items-center gap-6 sm:gap-x-[15vw] sm:gap-y-8">
                    <DynamicStat count={49} label='Total Courses' suffix="K+" duration={1.54} />
                    <DynamicStat count={49} label='Total Users' suffix="K+" duration={2.75} />
                    <DynamicStat count={59} label='Stats' suffix="M" duration={2} />
                    <DynamicStat count={59} label='Stats' suffix="M" duration={2.75} />
                </div>
            </div>
        </>
    )
}

export default Review