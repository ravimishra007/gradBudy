import React from 'react'
import FavouriteProfessorsCard from './ui/FavouriteProfessorsCard';

const FavouriteProf = () => {

    const professorsData = [
        {
            id: 1234,
            name: "John Doe",
            profileImg: "/icons/profile.svg",
            university: "University of Texas",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra."
        },
        {
            id: 5678,
            name: "Jane Smith",
            profileImg: "/icons/profile.svg",
            university: "University of California",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra."
        }
    ];

    return (
        <section id='Featured_Universities' className="px-5 sm:px-16 lg:px-0 max-w-7xl w-full mx-auto pb-20 pt-8">
            <div className='flex flex-col gap-y-10 lg:flex-row'>
                <div className='lg:max-w-lg w-full md:p-5 mb-10 lg:mb-0'>
                    <h1 className='heading'>Favourite Professors</h1>
                    <p className='paragraph !text-black/70 mt-3 !lg:max-w-sm'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “ ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='flex flex-col items-center md:flex-row gap-10 gap-y-16'>
                    {professorsData && professorsData.map((professor) => (
                        <FavouriteProfessorsCard
                            key={professor.id}
                            id={professor.id}
                            imgSrc={professor.profileImg}
                            name={professor.name}
                            college={professor.university}
                            bio={professor.bio}
                            showbtn={false}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FavouriteProf