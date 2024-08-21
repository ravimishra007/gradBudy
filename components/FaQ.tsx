import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"

interface Faq {
    _id: string;
    question: string;
    answer: string;
}

interface FaqListProps {
    faqs: Faq[];
}

const FaQ = ({ faqs }: FaqListProps) => {
    return (
        <>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                    <AccordionItem key={faq._id} value={faq._id}>
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

export default FaQ