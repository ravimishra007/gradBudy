import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const colleges = [
    {
        name: 'Indian Institute of Technology BHU',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec',
        logo: '/images/hero_img.png',
        url: '/'
    },
    {
        name: 'Stanford University',
        bio: 'Stanford University is known for its academic strength, wealth, proximity to Silicon Valley, and ranking as one of the world\'s top universities.',
        logo: '/images/hero_img.png',
        url: '/'
    },
    {
        name: 'Massachusetts Institute of Technology',
        bio: 'MIT is a world leader in research and education, and is home to one of the best engineering schools globally.',
        logo: '/images/hero_img.png',
        url: '/'
    },
    {
        name: 'Harvard University',
        bio: 'Harvard University is devoted to excellence in teaching, learning, and research, and to developing leaders in many disciplines who make a difference globally.',
        logo: '/images/hero_img.png',
        url: '/'
    }
];

const FeaturedUniversities = () => {
    return (
        <section id='Featured_Universities' className="px-5 sm:px-16 pt-10 md:pt-24 lg:px-0 max-w-7xl w-full mx-auto pb-5">
            <div className='flex flex-col gap-y-10 lg:flex-row'>
                <div className='lg:max-w-lg w-full md:p-5'>
                    <h1 className='heading'>Featured Universities</h1>
                    <p className='paragraph !text-black/70 mt-3 !lg:max-w-sm'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “ ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center mx-auto w-full gap-5 md:gap-10 lg:gap-8 xl:gap-10 lg:mr-5'>
                    {colleges.map((college, index) => (
                        <FeaturedUniversityCard
                            key={index}
                            name={college.name}
                            bio={college.bio}
                            logo={college.logo}
                            url={college.url}
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
    url: string;
}

const FeaturedUniversityCard = ({ name, bio, logo, url }: FeaturedUniversityCardProp) => {
    return (
        <div className=" bg-white rounded-[12px] [box-shadow:2.594px_2.594px_27.625px_2.594px_rgba(105,_65,_198,_0.20)] max-w-[360px]">
            <div className="py-8 px-7">
                <Image className='bg-black rounded-[2.594px] object-cover' src={logo} alt={`${name} logo`} height={28} width={28} />

                <div className="mt-3 mb-4">
                    <h4 className="text-xs text-[#212D45] font-semibold">{name}</h4>
                    <p className="pt-3 text-[12px] font-normal">{bio.slice(0, 200)}...</p>
                </div>

                <Link href={`${url}`} className="text-[#6941C6] text-sm font-semibold" >Learn More →</Link>
            </div>
        </div>
    )
}


export default FeaturedUniversities