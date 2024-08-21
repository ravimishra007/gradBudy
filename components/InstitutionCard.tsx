import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface InstitutionCardProps {
    id: string;
    name: string;
    overview: string;
    city: string;
    district: string;
    state: string;
    affiliatedUniversity?: string;
    logo: string;
    reviews: number;
    rating: number;
    detailsUrl: string;
    NIRFRanking?: number;
}

const InstitutionCard: React.FC<InstitutionCardProps> = ({
    id,
    name,
    overview,
    city,
    district,
    state,
    affiliatedUniversity,
    logo,
    reviews,
    rating,
    detailsUrl,
    NIRFRanking,
}) => {
    return (
        <div key={id} className="p-6 flex flex-col justify-between rounded-[8px] bg-white [box-shadow:2px_2px_40px_4px_rgba(105,_65,_198,_0.10)] max-w-xl mx-auto w-full">
            <div className='flex items-start gap-x-4 w-full'>
                <div className="flex-1">
                    <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">{name}</h3>
                    <p className="text-[#344054] text-xs sm:text-base mb-2 sm:mb-4">{overview}</p>
                </div>
                <div className="hidden sm:block">
                    <Image
                        src={logo}
                        alt={`${name} logo`}
                        height={100}
                        width={100}
                        className="object-cover rounded-[4.453px]"
                    />
                </div>
                <div className="block sm:hidden">
                    <Image
                        src={logo}
                        alt={`${name} logo`}
                        height={64}
                        width={64}
                        className="object-cover rounded-[4.453px]"
                    />
                </div>
            </div>

            <div className='flex justify-between text-xs sm:text-base mb-2'>
                <div className={`flex items-center text-[#344054] ${affiliatedUniversity ? "w-1/2" : 'w-full'}`}>
                    <span className="mr-1">📍</span>
                    <span>{`${city}, ${district}, ${state}`}</span>
                </div>
                {affiliatedUniversity && <div className="flex items-center text-[#344054] mb-4 w-1/2">
                    <span className="mr-2">🏫</span>
                    <span>{`Affiliated to ${affiliatedUniversity}`}</span>
                </div>}
            </div>

            <div className='flex justify-between items-center border-t border-black/20 pt-3'>
                <div className="flex flex-col text-[#344054] text-xs sm:text-sm">
                    <span className="">NIRF Ranking</span>
                    <span className='text-black font-semibold text-sm sm:text-lg'>{NIRFRanking}</span>
                </div>


                <Link href={`${detailsUrl}/${id}`} className="text-white text-xs sm:text-base bg-orange-500 hover:bg-orange-600 py-2 px-4 rounded">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default InstitutionCard;
