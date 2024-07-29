"use client";

// import { RemoveFromFavProf } from "@/lib/features/favourite-professors/FavouriteProfessorsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image"
import Link from "next/link";
import { ImCancelCircle } from "react-icons/im";
import { useToast } from "./use-toast";
import { selectLoggedInUser } from "@/lib/features/auth/authSlice";
import { useEffect, useState } from "react";
import { Professor } from "@/lib/features/professor/professorSlice";
import { getProfessorById } from "@/lib/features/professor/professorAPI";
import { deleteFavProfById } from "@/lib/features/favourite-professors/FavouriteProfessorsSlice";

interface FavouriteProfessorsCardProps {
    id: string;
    profId: string;
    showbtn?: boolean;
}

const FavouriteProfessorsCard = ({ id,profId, showbtn = true }: FavouriteProfessorsCardProps) => {
    const dispatch = useAppDispatch();
    const { toast } = useToast()
    const user = useAppSelector(selectLoggedInUser)

    const [professor, setProfessor] = useState<Professor | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProfessor = async () => {
            try {
                const data = await getProfessorById(profId);
                setProfessor(data);
            } catch (err) {
                setError("Failed to fetch professor details");
            }
        };

        fetchProfessor();
    }, [id, profId]);

    if (error) {
        return <div>{error}</div>;
    }

    const handleRemoveFromFavourites = (id: string) => {
        dispatch(deleteFavProfById(id));
        toast({
            title: "Success",
            description: `${professor?.info.name.first} ${professor?.info.name.last} is successfully removed from favourites.`,
        })
    };

    return (
        <div className='relative rounded-[12px] border border-[#6941c60d] bg-[#6941c60d] [box-shadow:2px_2px_40px_4px_rgba(105,_65,_198,_0.10)] max-w-[380px] p-3 sm:p-5 pt-10'>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image className="object-cover rounded-full w-[70px] h-[70px]" src={professor?.info.profilePhoto ? professor.info.profilePhoto : '/icons/profile.svg'} alt={`${name}'s profile picture`} width={70} height={70} />
            </div>

            {showbtn && <button onClick={() => handleRemoveFromFavourites(id)} className="bg-black/10 text-black/50 hover:text-black/70 hover:scale-110 hover:bg-black/30 duration-150 w-4 h-4 rounded-full cursor-pointer absolute top-2 right-2"><ImCancelCircle /></button>}

            <div className="text-center mt-3 space-y-5">
                <div>
                    <h3 className="text-[#6941C6] text-lg font-semibold">{professor?.info.name.first && <span>{professor.info.name.first}</span>} {professor?.info.name.middle && <span>{professor?.info.name.middle}</span>} {professor?.info.name.last && <span>{professor?.info.name.last}</span>}</h3>
                    <p className="text-sm font-medium text-[#344054]">{professor?.education[0].name}</p>
                </div>
                <p className="text-base font-medium text-[#344054]">
                    {professor?.info.desc.slice(0, 180)}<Link className="text-blue-700" href={`/course/favourite-professor/detail/${profId}`}>...More</Link>
                </p>
            </div>
        </div>
    )
}

export default FavouriteProfessorsCard;
