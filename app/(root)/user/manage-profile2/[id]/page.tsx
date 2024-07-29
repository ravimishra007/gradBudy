"use client";

import React, { useState, useRef, useEffect } from "react";
import PersonalInfo from "../PersonalInfo";
import EducationalInfo from "../EducationalInfo";
import Experience from "../Experience";
import Skills from "../Skills";
import MainHeader from "@/components/MainHeader";
import { Button } from "@/components/ui/button";
import { getStudentById } from "@/lib/features/user/studentAPI";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchStudentById, updateStudentData } from "@/lib/features/user/studentProfileSlice";
import { selectLoggedInUser } from "@/lib/features/auth/authSlice";

interface ManageProfileProps {
    params: {
        id: string;
    };
}

type FormHandle = any;

const ManageProfile: React.FC<ManageProfileProps> = ({ params }: { params: { id: string } }) => {
    const id = params.id;
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectLoggedInUser)
    const [page, setPage] = useState<number>(1);
    const formRefs = useRef<{ [key: number]: FormHandle | null }>({});

    useEffect(() => {
        const fetchStudentData = async () => {
            if (id && user?.token) {
                try {
                    const data = await dispatch(fetchStudentById({ id, token: user.token })).unwrap();
                    console.log("data : ", data)
                    dispatch(updateStudentData(data));
                } catch (error) {
                    console.error('Failed to fetch student data:', error);
                }
            }
        };

        fetchStudentData();
    }, [id, user?.token, dispatch]);


    // console.log("Collected Data: ", studentData);

    const nextPage = () => {
        if (page < 4) {
            formRefs.current[page]?.handleSubmit();
            setPage(page + 1);
        } else {
            formRefs.current[page]?.handleSubmit();
        }
    };

    const previousPage = () => {
        setPage((prevPage) => Math.max(1, prevPage - 1));
        if (page === 4) formRefs.current[page]?.handlePrev?.();
    };

    const stepClasses = (currentStep: number) => {
        if (page === currentStep) return 'bg-[rgba(105,_65,_198,_0.50)]';
        if (page > currentStep) return 'bg-[#2C1C5F]';
        return 'bg-[rgba(208,_213,_221,_0.40)]';
    };

    const renderPage = () => {
        switch (page) {
            case 1:
                return <PersonalInfo ref={(el: any) => (formRefs.current[1] = el)} />;
            case 2:
                return <EducationalInfo ref={(el: any) => (formRefs.current[2] = el)} />;
            case 3:
                return <Skills ref={(el: any) => (formRefs.current[3] = el)} />;
            case 4:
                return <Experience ref={(el: any) => (formRefs.current[4] = el)} />;
            default:
                return null;
        }
    };


    return (
        <section className="flex-center md:bg-white-100 h-full mx-auto">
            <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-2 mx-2 sm:p-12 sm:mx-10 md:mx-16">
                <MainHeader title="Manage Profile" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />

                <div className="flex justify-between mb-8">
                    {[1, 2, 3, 4].map((stepNumber) => (
                        <div key={stepNumber} className={`w-[20vw] h-4 flex items-center justify-center rounded-full ${stepClasses(stepNumber)}`} />
                    ))}
                </div>

                {renderPage()}
                <div className="pt-8 flex gap-x-6 sm:gap-8">
                    {page > 1 && (
                        <Button onClick={previousPage} className="form-btn border border-[#F79009] !text-yellow-100 bg-yellow-100/40 hover:bg-yellow-100/30 py-4 sm:py-6 px-8 sm:px-16 duration-150 w-full">
                            Previous
                        </Button>
                    )}
                    {page < 4 ? (
                        <Button onClick={nextPage} className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-8 sm:px-16 duration-150 w-full">
                            <span className='hidden sm:inline'>Save Details and</span> Next
                        </Button>
                    ) : (
                        <Button type="submit" className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-8 sm:px-16 duration-150 w-full" onClick={(e) => {
                            e.preventDefault();
                            nextPage();
                        }}>
                            Submit
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ManageProfile;
