import MainHeader from '@/components/MainHeader'
import Image from 'next/image'
import React from 'react'

interface FavouriteProfessorsCardProps {
    imgSrc: string;
    name: string;
    college: string;
    bio: string;
}

interface Professor {
    imgSrc: string;
    name: string;
    college: string;
    bio: string;
}

const professors: Professor[] = [
    {
        imgSrc: "/icons/profile.svg",
        name: "Professor-1",
        college: "University of Texas",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam."
    },
    {
        imgSrc: "/icons/profile.svg",
        name: "Professor-2",
        college: "Harvard University",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam."
    },
    {
        imgSrc: "/icons/profile.svg",
        name: "Professor-3",
        college: "Stanford University",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam."
    },
    {
        imgSrc: "/icons/profile.svg",
        name: "Professor-4",
        college: "MIT",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam."
    },
    {
        imgSrc: "/icons/profile.svg",
        name: "Professor-5",
        college: "University of California, Berkeley",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam."
    },
    {
        imgSrc: "/icons/profile.svg",
        name: "Professor-6",
        college: "University of Chicago",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam."
    },
    {
        imgSrc: "/icons/profile.svg",
        name: "Professor-7",
        college: "Columbia University",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam."
    },
    {
        imgSrc: "/icons/profile.svg",
        name: "Professor-8",
        college: "Princeton University",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam."
    },
    {
        imgSrc: "/icons/profile.svg",
        name: "Professor-9",
        college: "Yale University",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam."
    },
    {
        imgSrc: "/icons/profile.svg",
        name: "Professor-10",
        college: "California Institute of Technology",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam."
    }
];

const FavouriteProfessors = () => {
    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-2 sm:p-12 mx-2 sm:mx-10 md:mx-16">
                    <MainHeader title="Favourite Professors" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                    <div className="mt-20 flex flex-wrap justify-around gap-y-20">
                        {professors.map((professor, index) => (
                            <FavouriteProfessorsCard
                                key={index}
                                imgSrc={professor.imgSrc}
                                name={professor.name}
                                college={professor.college}
                                bio={professor.bio}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}


const FavouriteProfessorsCard = ({ imgSrc, name, college, bio }: FavouriteProfessorsCardProps) => {
    return (
        <div className='relative rounded-[12px] border border-[#6941c60d] bg-[#6941c60d] [box-shadow:2px_2px_40px_4px_rgba(105,_65,_198,_0.10)] max-w-[380px] p-5 pt-10'>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image className="object-cover rounded-full" src={imgSrc} alt={`${name}'s profile picture`} width={70} height={70} />
            </div>
            <div className="text-center space-y-5">
                <div>
                    <h3 className="text-[#6941C6] text-lg font-semibold">{name}</h3>
                    <p className="text-sm font-medium text-[#344054]">{college}</p>
                </div>
                <p className="text-base font-medium text-[#344054]">{bio}</p>
            </div>
        </div>
    )
}


export default FavouriteProfessors