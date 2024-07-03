import CourseCard from "@/components/CourseCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { courseDetailData } from "@/constents/constents"


const MyLearnings = () => {
    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-2 sm:p-12 mx-2 sm:mx-10 md:mx-16">

                    <Tabs defaultValue="registered" className="w-full">
                        <TabsList className="w-full justify-around">
                            <TabsTrigger value="registered">Registered</TabsTrigger>
                            <TabsTrigger value="favourite">Favourite</TabsTrigger>
                        </TabsList>
                        <div className="mt-10">
                            <TabsContent value="registered">
                                <h1>Registered Tab</h1>
                                <RegisteredTab />
                            </TabsContent>
                            <TabsContent value="favourite">
                                <h1>Favourite Tab</h1>
                                <FavouriteTab />
                            </TabsContent>
                        </div>
                    </Tabs>

                </div>
            </section>
        </>
    )
}


const RegisteredTab = () => {
    return (
        <div className="mt-10 sm:mt-14 lg:mt-20 gap-6 sm:gap-10 justify-around grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-16 lg:mx-10 justify-items-center lg:justify-items-around">
            {courseDetailData.map((course) => (
                <CourseCard key={course.id} {...course} />
            ))}
        </div>
    )
}

const FavouriteTab = () => {
    return (
        <div className="mt-10 sm:mt-14 lg:mt-20 gap-6 sm:gap-10 justify-around grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-16 lg:mx-10 justify-items-center lg:justify-items-around">
            {courseDetailData.map((course) => (
                <CourseCard key={course.id} {...course} />
            ))}
        </div>
    )
}

export default MyLearnings