"use client";

import FavouriteTab from "@/components/FavouriteTab";
import RegisteredTab from "@/components/RegisteredTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const MyLearnings = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const tab = searchParams.get("tab");

    useEffect(() => {
        if (!tab) {
            router.push("/course/my-learnings?tab=registered"); // Redirect to the default tab if no tab is specified
        }
    }, [tab, router]);

    const handleTabChange = (value: string) => {
        router.push(`/course/my-learnings?tab=${value}`);
    };

    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-2 sm:p-12 mx-2 sm:mx-10 md:mx-16">
                    <Tabs defaultValue={tab || "registered"} className="w-full">
                        <TabsList className="w-full justify-around">
                            <TabsTrigger value="registered" onClick={() => handleTabChange("registered")}>Registered</TabsTrigger>
                            <TabsTrigger value="favourite" onClick={() => handleTabChange("favourite")}>Favourite</TabsTrigger>
                        </TabsList>
                        <div className="mt-10">
                            <TabsContent value="registered">
                                <RegisteredTab />
                            </TabsContent>
                            <TabsContent value="favourite">
                                <FavouriteTab />
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </section>
        </>
    );
};

export default MyLearnings;
