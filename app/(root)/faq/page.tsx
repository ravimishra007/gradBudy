import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from '@/constents/constents'
import MainHeader from '@/components/MainHeader'

const FaQPage = () => {
    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full sm:p-12 mx-4 sm:mx-10 md:mx-16">
                    <MainHeader title="Frequently Asked Questions" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />

                    <FaQ />
                </div>
            </section>
        </>
    )
}


export const FaQ = () => {
    return (
        <>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger>
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default FaQPage