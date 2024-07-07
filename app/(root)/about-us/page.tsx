import Review from '@/components/Review'
import SectionCard from '@/components/SectionCard'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { teamMembers } from '@/constents/constents';
import { TeamCardProps } from '@/constents/types';


const AboutUs = () => {
    return (
        <>
            <section className="flex-center bg-white mx-auto">
                <div className="max-w-[1440px] sm:mb-10 w-full p-4 sm:px-12 sm:mx-10 md:mx-16 sm:space-y-10">
                    <SectionCard
                        imgSrc="/images/image1.png"
                        customClasses="flex-center flex-col-reverse lg:flex-row"
                        title="About the Project"
                        paragraph="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “ ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean . “Lorem ipsum dolor sit , consectetur adipiscing elit. Turpis donec amet proin  nec in diam  viverra. “Lorem ipsum dolor sit amet,  adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “ ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectet"
                    />

                    <Review />

                    <SectionCard
                        imgSrc="/images/image1.png"
                        customClasses="flex-center flex-col-reverse lg:flex-row-reverse"
                        title="Our Mission"
                        paragraph="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “ ipsum dolor sit amet, consectetur adipiscing elit."
                    />

                    <SectionCard
                        imgSrc="/images/image1.png"
                        customClasses="flex-center flex-col-reverse lg:flex-row"
                        title="Our Vision"
                        paragraph="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “ ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean . “Lorem ipsum dolor sit , consectetur adipiscing elit. Turpis donec amet proin  nec in diam  viverra."
                    />
                    <div className="py-10 md:py-0">
                        <h3 className="text-2xl font-bold leading-6 border-b border-yellow-100 py-3 sm:py-5 max-w-[375px] capitalize" >Our Team</h3>

                        <div className="hidden lg:flex mt-10 sm:mt-16 justify-around items-center flex-wrap gap-y-8">
                            {teamMembers.map((member, index) => (
                                <TeamCard
                                    key={index}
                                    imgSrc={member.imgSrc}
                                    name={member.name}
                                    position={member.position}
                                    overview={member.overview}
                                    socialMedia={member.socialMedia}
                                />
                            ))}
                        </div>

                        <Carousel className="w-full lg:hidden relative mt-10 sm:mt-16">
                            <CarouselContent>
                                {teamMembers.map((member, index) => (
                                    <CarouselItem className="md:basis-1/2 scale-95 md:scale-100" key={index}>
                                        <TeamCard
                                            imgSrc={member.imgSrc}
                                            name={member.name}
                                            position={member.position}
                                            overview={member.overview}
                                            socialMedia={member.socialMedia}
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>

                </div>
            </section >
        </>
    )
}

const TeamCard = ({ imgSrc, name, position, overview, socialMedia }: TeamCardProps) => {
    return (
        <div className="flex-center flex-col gap-3 sm:gap-4 text-center px-3 py-10 bg-white lg:bg-[#6941C6]/5 rounded-[12px] max-w-[360px] h-96 [box-shadow:8px_8px_12px_0px_rgba(105,_65,_198,_0.05),_-2px_0px_4px_0px_#E9E9FE]">
            <Image src={imgSrc} alt={name} width={100} height={100} />

            <h3 className="font-bold text-xl capitalize">{name}</h3>

            <h4 className="text-lg font-semibold text-[#2C1C5F]">{position}</h4>

            <p className=" text-base font-normal text-black/50" >{overview}</p>

            <div className="flex-center gap-8 mt-3">
                {socialMedia.map((account, index) => (
                    <Link key={index} href={account.url} target="_blank" >
                        <Image
                            src={account.icon}
                            alt={account.platform}
                            className="object-cover hover:scale-90 duration-150"
                            width={25}
                            height={25}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};



export default AboutUs