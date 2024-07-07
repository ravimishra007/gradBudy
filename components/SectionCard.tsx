import Image from 'next/image';
import React from 'react'

interface SectionCardProps {
    imgSrc: string;
    title: string;
    paragraph: string;
    customClasses: string;
}

const SectionCard = ({ imgSrc, title, paragraph, customClasses }: SectionCardProps) => {
    return (
        <article className={`${customClasses}`}>
            <figure className="lg:max-w-[50%] flex-center mt-4 mb-6 sm:my-8 lg:my-12 w-full relative">
                <Image src={imgSrc} alt="Image" width={630} height={355} />
            </figure>
            <figcaption className="lg:max-w-[50%] w-full mt-5 lg:mt-0 lg:px-16">
                <h3 className="text-2xl font-bold leading-6 border-b border-yellow-100 py-3 sm:py-5 max-w-[375px] capitalize" >{title}</h3>
                <p className="py-4 sm:py-6 text-justify" >{paragraph}</p>
            </figcaption>
        </article>
    )
}

export default SectionCard