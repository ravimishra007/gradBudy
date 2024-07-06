import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { testimonials } from "@/constents/constents";

const Testimonials = () => {
    return (
        <section id='Featured_Courses'>
            <div className='relative'>
                <div className="absolute w-full -z-10">
                    <div className="bg-[#2C1C5F] flex-center flex-col text-white text-center py-16 pb-52 px-5 lg:px-0">
                        <h1 className="heading">
                            Testimonials
                        </h1>
                        <p className="paragraph">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec</p>
                    </div>
                </div>
                <div className="flex-center px-5 sm:px-16 lg:px-0 pt-44 lg:pt-56 w-full max-w-7xl mx-auto">
                    <Carousel
                        className="w-full max-w-7xl lg:mx-8"
                    >
                        <CarouselContent className="-ml-1">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="pl-1 p-8 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card
                                            className={`border-b-[2.5px] border-[#2C1C5F] bg-white rounded-t-[12px] [box-shadow:4px_4px_42.6px_4px_rgba(105,_65,_198,_0.20)]`}
                                        >
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <TestimonialsCard
                                                    name={testimonial.name}
                                                    role={testimonial.role}
                                                    says={testimonial.says}
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}


interface TestimonialsCardProp {
    name: string;
    role: string;
    says: string;
}

const TestimonialsCard = ({ name, role, says }: TestimonialsCardProp) => {
    return (
        <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-xs font-normal text-[#6941C6] pt-1">{role}</p>

            <p className="text-sm font-normal text-[#344054] pt-10">{says}</p>
        </div>
    )
}


export default Testimonials