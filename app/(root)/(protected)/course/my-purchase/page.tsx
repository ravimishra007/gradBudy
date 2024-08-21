import MainHeader from '@/components/MainHeader'
import { Button } from '@/components/ui/button'
import React, { FC } from 'react'

const topics = [
    {
        topicName: 'Name Of Topic 1: Lorem Ipsum',
        teacherName: 'Teacher Name 1',
        duration: '5 Hours',
        date: '2 May 2024',
        amount: 485.50,
    },
    {
        topicName: 'Name Of Topic 2: Lorem Ipsum',
        teacherName: 'Teacher Name 2',
        duration: '3 Hours',
        date: '3 May 2024',
        amount: 300.00,
    },
    {
        topicName: 'Name Of Topic 1: Lorem Ipsum',
        teacherName: 'Teacher Name 1',
        duration: '5 Hours',
        date: '2 May 2024',
        amount: 485.50,
    },
    {
        topicName: 'Name Of Topic 2: Lorem Ipsum',
        teacherName: 'Teacher Name 2',
        duration: '3 Hours',
        date: '3 May 2024',
        amount: 300.00,
    },
    {
        topicName: 'Name Of Topic 1: Lorem Ipsum',
        teacherName: 'Teacher Name 1',
        duration: '5 Hours',
        date: '2 May 2024',
        amount: 485.50,
    },
    {
        topicName: 'Name Of Topic 2: Lorem Ipsum',
        teacherName: 'Teacher Name 2',
        duration: '3 Hours',
        date: '3 May 2024',
        amount: 300.00,
    },
    {
        topicName: 'Name Of Topic 1: Lorem Ipsum',
        teacherName: 'Teacher Name 1',
        duration: '5 Hours',
        date: '2 May 2024',
        amount: 485.50,
    },
    {
        topicName: 'Name Of Topic 2: Lorem Ipsum',
        teacherName: 'Teacher Name 2',
        duration: '3 Hours',
        date: '3 May 2024',
        amount: 300.00,
    },
];

const MyPurchase = () => {
    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-2 sm:p-12 mx-2 sm:mx-10 md:mx-16">
                    <MainHeader title="My Purchase" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />

                    <div className="mt-10 sm:mt-14 lg:mt-20 grid grid-cols-1 xl:grid-cols-2 gap-10 justify-items-center">
                        {topics.map((topic, index) => (
                            <MyPurchaseCard
                                key={index}
                                topicName={topic.topicName}
                                teacherName={topic.teacherName}
                                duration={topic.duration}
                                date={topic.date}
                                amount={topic.amount}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}


interface MyPurchaseCardProp {
    topicName: string;
    teacherName: string;
    duration: string;
    date: string;
    amount: number;
}

const MyPurchaseCard = ({ topicName, teacherName, duration, date, amount }: MyPurchaseCardProp) => {
    return (
        <div className="max-w-[540px] w-full text-[#344054] bg-white rounded-[8px] [box-shadow:2px_2px_40px_4px_rgba(105,_65,_198,_0.10)] px-3 sm:px-6 pt-8 pb-6">
            <div className="flex justify-between items-center border-b-2 pb-2">
                <div className="flex flex-col">
                    <div className='flex'>
                        <h2 className="text-[#0A0D14] font-semibold text-xs sm:text-base md:text-lg">{topicName}</h2>
                        <p className="block md:hidden text-[10px] mt-0.5 ml-3 sm:ml-8 sm:text-sm md:text-base font-normal">{date}</p>
                    </div>
                    <div className="flex gap-x-4 my-2 mb-3">
                        <h3 className="text-[#6941C6] text-xs sm:text-base font-medium">{teacherName}</h3>
                        <li className="text-xs sm:text-base font-normal list-disc pl-4">{duration}</li>
                    </div>
                </div>
                <p className="hidden md:block text-[10px] mt-0.5 ml-3 sm:ml-8 sm:text-sm md:text-base font-normal">{date}</p>

            </div>
            <div className="pt-3 flex justify-between">
                <div>
                    <p className="text-xs sm:text-sm font-normal">Total Amount</p>
                    <h2 className="text-sm sm:text-lg font-semibold">${amount.toFixed(2)}</h2>
                </div>
                <Button className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 px-10 sm:px-16 duration-150 mb-4 text-sm sm:text-base max-w-[46px]">
                    Receipt
                </Button>
            </div>
        </div>
    )
}


export default MyPurchase