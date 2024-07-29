"use client"

import { fetchAllUniversitiesAsync, selectUniversities, selectUniversityError } from '@/lib/features/university/universitySlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const colleges = [
    {
        name: 'Indian Institute of Technology BHU',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec',
        logo: '/images/hero_img.png',
        url: '/university-details'
    },
    {
        name: 'Stanford University',
        bio: 'Stanford University is known for its academic strength, wealth, proximity to Silicon Valley, and ranking as one of the world\'s top universities.',
        logo: '/images/hero_img.png',
        url: '/university-details'
    },
    {
        name: 'Massachusetts Institute of Technology',
        bio: 'MIT is a world leader in research and education, and is home to one of the best engineering schools globally.',
        logo: '/images/hero_img.png',
        url: '/university-details'
    },
    {
        name: 'Harvard University',
        bio: 'Harvard University is devoted to excellence in teaching, learning, and research, and to developing leaders in many disciplines who make a difference globally.',
        logo: '/images/hero_img.png',
        url: '/university-details'
    }
];

const FeaturedUniversities = () => {
    const dispatch = useAppDispatch();
    const universities = useAppSelector((state: RootState) => selectUniversities(state));
    const error = useAppSelector((state: RootState) => selectUniversityError(state));

    useEffect(() => {
        dispatch(fetchAllUniversitiesAsync());
    }, [dispatch]);

    if (!universities.length) {
        return <div>Loading...</div>;
    }
    return (
        <section id='Featured_Universities' className="px-5 sm:px-16 pt-10 md:pt-24 lg:px-0 max-w-7xl w-full mx-auto pb-5">
            <div className='flex flex-col gap-y-10 lg:flex-row'>
                <div className='lg:max-w-lg w-full md:p-5'>
                    <h1 className='heading'>Featured Universities</h1>
                    <p className='paragraph !text-black/70 mt-3 !lg:max-w-sm'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “ ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center mx-auto w-full gap-5 md:gap-10 lg:gap-8 xl:gap-10 lg:mr-5'>
                    {universities && universities.slice(0, 4).map((uni) => (
                        <FeaturedUniversityCard
                            key={uni._id}
                            name={uni.overview.name}
                            bio={uni.overview.overview}
                            logo={uni.gallery.logo}
                            id={`${uni._id}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

interface FeaturedUniversityCardProp {
    name: string;
    bio: string;
    logo: string;
    id: string;
}

const FeaturedUniversityCard = ({ name, bio, logo, id }: FeaturedUniversityCardProp) => {
    return (
        <div className=" bg-white rounded-[12px] [box-shadow:2.594px_2.594px_27.625px_2.594px_rgba(105,_65,_198,_0.20)] max-w-[360px]">
            <div className="py-8 px-7">
                <Image className='bg-black rounded-[2.594px] object-cover w-7 h-7' src={logo} alt={`${name} logo`} height={28} width={28} />

                <div className="mt-3 mb-4">
                    <h4 className="text-xs text-[#212D45] font-semibold">{name}</h4>
                    <p className="pt-3 text-[12px] font-normal">{bio.slice(0, 200)}...</p>
                </div>

                <Link href={`/university-details/${id}`} className="text-[#6941C6] text-sm font-semibold" >Learn More →</Link>
            </div>
        </div>
    )
}


export default FeaturedUniversities