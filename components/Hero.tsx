'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { DynamicStat } from './Review';

const stats = [
    { count: 49, label: 'Total Courses', suffix: 'K+', duration: 2.54 },
    { count: 49, label: 'Total Courses', suffix: 'K+', duration: 2.76 },
    { count: 49, label: 'Total Courses', suffix: 'K+', duration: 1.94 },
    { count: 49, label: 'Total Courses', suffix: 'K+', duration: 2.00 }
];

const Hero = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleStats, setVisibleStats] = useState(4);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Implement your search logic here, e.g., navigate to search results page or update state with search term
        console.log('Search term:', searchTerm);
    };

    const updateVisibleStats = () => {
        if (window.innerWidth >= 1024) {
            setVisibleStats(4);
        } else if (window.innerWidth >= 768) {
            setVisibleStats(3);
        } else {
            setVisibleStats(2);
        }
    };

    useEffect(() => {
        updateVisibleStats();
        window.addEventListener('resize', updateVisibleStats);
        return () => window.removeEventListener('resize', updateVisibleStats);
    }, []);

    return (
        <section id='Hero_Section' className="px-3 sm:px-16 lg:px-0 max-w-7xl w-full mx-auto pb-5" >
            <div className='flex flex-col gap-y-10 lg:flex-row mx-auto'>
                <div className="w-full lg:w-1/2 space-y-5">
                    <header>
                        <h1 className=" text-[28px] md:text-[42px] font-bold md:leading-[60px]">The Best Way For Your Learning</h1>
                        <p className="text-black/70 text-lg md:text-xl font-medium mt-3 lg:mt-2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec</p>
                    </header>
                    <form className="flex gap-x-4 py-8 md:py-0 lg:mr-16" onSubmit={handleSubmit}>
                        <div className='relative w-[80%]'>
                            <Input
                                className="rounded-[12px] placeholder:opacity-80 border border-[#D0D5DD] [box-shadow:0px_1px_2px_0px_#1018280D] w-full pl-9"
                                type="text"
                                name='search'
                                id="search"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            <div className="absolute top-[9px] left-2">
                                <Image className="object-cover" src="/icons/search.svg" alt='Hero_Img' height={20} width={20} />
                            </div>
                        </div>
                        <Button type="submit" className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 px-10 duration-150 max-w-[150px] w-[20%]">Search</Button>
                    </form>
                </div>
                <div className='relative w-full lg:w-1/2 flex-center'>
                    <div className="shrink-0 w-[304px] h-[304px] rounded-[304px] bg-[rgba(105,_65,_198,_0.70)] filter blur-[150px] absolute -z-10 right-28" />
                    <Image className="object-cover" src="/images/hero_img.png" alt='Hero_Img' height={392} width={392} />
                </div>
            </div>
            <div className="w-full lg:-top-12 [filter:drop-shadow(1.595px_1.595px_31.894px_rgba(105,_65,_198,_0.15))] relative">
                <Image className="min-h-[113px]" src="/images/hero_stat.svg" alt='Hero Stat' width={1280} height={225} />
                <div className="flex justify-around absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
                    {stats.slice(0, visibleStats).map((stat, index) => (
                        <React.Fragment key={index}>
                            <DynamicStat className='text-lg font-bold sm:text-3xl' subClassName="text-[10px] sm:text-sm md:text-lg font-medium" {...stat} />
                            {index < visibleStats - 1 && (
                                <span className='flex justify-center items-center bg-[#344054]/50 w-[1px] sm:w-[3px] h-[1]' />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;
