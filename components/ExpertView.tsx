import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link';

const featuresData = [
    {
        imgSrc: "/images/image1.png",
        name: "Feature 1",
        bio: "Lorem ipsum dolor sit amet."
    },
    {
        imgSrc: "/images/image1.png",
        name: "Feature 2",
        bio: "Lorem ipsum dolor sit amet."
    },
    {
        imgSrc: "/images/image1.png",
        name: "Feature 3",
        bio: "Lorem ipsum dolor sit amet."
    },
    {
        imgSrc: "/images/image1.png",
        name: "Feature 4",
        bio: "Lorem ipsum dolor sit amet."
    }
];

const ExpertView = () => {
    return (
        <section id='Expert_View' className="my-10 md:my-20 lg:px-0 w-full bg-[#A48AFB1A]">
            <div className="px-5 sm:px-16 lg:px-0 max-w-7xl mx-auto w-full py-16 flex flex-col lg:flex-row">
                <div className="lg:max-w-[50%] flex-center w-full mb-10 lg:mb-0">
                    <Image className="lg:h-[436px] lg:w-[530px] object-cover" src="/images/image1.png" alt="Image" width={530} height={436} />
                </div>

                <div className="lg:max-w-[50%] flex w-full justify-center flex-col space-y-5 sm:space-y-7">
                    <h1 className='heading'>Learn from approved Experts at your own Pace</h1>
                    <p className='!text-black/70 text-base sm:text-xl font-medium'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec</p>

                    <div className='flex flex-wrap gap-5 sm:gap-7 md:gap-10 pl-8 md:pl-0'>
                        {featuresData.map((feature, index) => (
                            <Features
                                key={index}
                                imgSrc={feature.imgSrc}
                                name={feature.name}
                                bio={feature.bio}
                            />
                        ))}
                    </div>
                    <Link href="/course/all-courses">
                        <Button type="button" className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-10 !mt-14 duration-150 md:max-w-[200px]">Start Learning</Button></Link>
                </div>
            </div>
        </section>
    )
}


interface FeaturesProp {
    imgSrc: string;
    name: string;
    bio: string;
}

const Features = ({ imgSrc, name, bio }: FeaturesProp) => {
    return (
        <div className="flex-center gap-x-4">
            <div>
                <Image className="h-10 w-10 rounded-full object-cover" src={imgSrc} alt="Image" width={40} height={40} />
            </div>
            <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#6941C6]">{name}</h3>
                <p className="text-sm sm:text-base font-medium text-[#344054]">{bio}</p>
            </div>
        </div>
    )
}


export default ExpertView