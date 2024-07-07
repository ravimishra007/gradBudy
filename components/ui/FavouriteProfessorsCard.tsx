"use client";

import { RemoveFromFavProf } from "@/lib/features/favourite-professors/FavouriteProfessorsSlice";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image"
import Link from "next/link";
import { ImCancelCircle } from "react-icons/im";
import { useToast } from "./use-toast";

interface FavouriteProfessorsCardProps {
    id: number;
    imgSrc: string;
    name: string;
    college: string;
    bio: string;
    showbtn?: boolean;
}

const FavouriteProfessorsCard = ({ id, imgSrc, name, college, bio, showbtn = true }: FavouriteProfessorsCardProps) => {
    const dispatch = useAppDispatch();
    const { toast } = useToast()

    const handleRemoveFromFavourites = (id: number) => {
        dispatch(RemoveFromFavProf(id));
        toast({
            title: "Success",
            description: `${name} is successfully removed from favourites.`,
        })
    };

    return (
        <div className='relative rounded-[12px] border border-[#6941c60d] bg-[#6941c60d] [box-shadow:2px_2px_40px_4px_rgba(105,_65,_198,_0.10)] max-w-[380px] p-3 sm:p-5 pt-10'>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image className="object-cover rounded-full" src={imgSrc} alt={`${name}'s profile picture`} width={70} height={70} />
            </div>

            {showbtn && <button onClick={() => handleRemoveFromFavourites(id)} className="bg-black/10 text-black/50 hover:text-black/70 hover:scale-110 hover:bg-black/30 duration-150 w-4 h-4 rounded-full cursor-pointer absolute top-2 right-2"><ImCancelCircle /></button>}

            <div className="text-center mt-3 space-y-5">
                <div>
                    <h3 className="text-[#6941C6] text-lg font-semibold">{name}</h3>
                    <p className="text-sm font-medium text-[#344054]">{college}</p>
                </div>
                <p className="text-base font-medium text-[#344054]">
                    {bio.slice(0, 180)}<Link className="text-blue-700" href={`/course/favourite-professor/detail/${id}`}>...More</Link>
                </p>
            </div>
        </div>
    )
}

export default FavouriteProfessorsCard;
