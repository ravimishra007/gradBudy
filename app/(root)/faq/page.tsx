import React from 'react'
import { faqs } from '@/constents/constents'
import MainHeader from '@/components/MainHeader'
import FaQ from '@/components/FaQ';

const FaQPage = () => {
    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full sm:p-12 mx-4 sm:mx-10 md:mx-16">
                    <MainHeader title="Frequently Asked Questions" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                    <FaQ faqs={faqs} />
                </div>
            </section>
        </>
    )
}

export default FaQPage;
