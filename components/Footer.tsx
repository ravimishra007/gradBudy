import { quickLinks, socialMedia } from '@/constents/constents';
import Image from 'next/image'
import Link from 'next/link'



const contactInfo = [
    {
        type: "email",
        value: "contact@company.com",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 sm:w-5 h-4 sm:h-5"
            >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
        ),
    },
    {
        type: "phone",
        value: "+91 7418529635",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 sm:w-5 h-4 sm:h-5"
            >
                <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        type: "address",
        value: "794 Mcallister St, San Francisco, 94102",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.75C18.075 15.375 21.75 11.25 21.75 7.5a9.75 9.75 0 00-19.5 0c0 3.75 3.675 7.875 9.75 14.25zm0-12.75a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
                />
            </svg>
        ),
    },
];


const Footer = () => {

    return (
        <>
            <footer className="flex flex-col px-3 pt-6 lg:pt-28 lg:px-24 overflow-hidden border-t-2 border-[#EFF0F6]">
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className="text-xl font-bold lg:w-1/2 space-y-6 w-full max-w-xs">
                        <Link href="/">
                            <Image
                                src="/next.svg"
                                alt="Logo"
                                width={100}
                                height={100}
                                priority
                            />
                        </Link>
                        <p className="text-[#6941C6] text-base sm:text-lg font-normal">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
                        <div className="flex items-center gap-x-6 mt-3">
                            {socialMedia.map((account, index) => (
                                <Link key={index} href={account.url} target="_blank" >
                                    <Image
                                        src={account.icon}
                                        alt={account.platform}
                                        className="object-cover hover:scale-125 duration-150"
                                        width={19}
                                        height={19}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <hr className="border my-8 opacity-80 block lg:hidden" />

                    <div className='lg:w-1/2 text-base sm:text-xl font-bold text-[#2C1C5F] flex sm:gap-x-14 lg:gap-x-4 xl:gap-x-14'>
                        <div className='space-y-4 hidden md:block'>
                            <p>
                                <Link href="/course/all-courses"> Courses</Link>
                            </p>
                            <p>
                                <Link href="/course/all-courses"> Stream</Link>
                            </p>
                        </div>
                        <div className='sm:min-w-[165px] min-w-[130px]'>
                            <h3 className="pointer-events-none">Quick Links</h3>
                            <ul className=''>
                                {quickLinks.map((item, idx) => (
                                    <Link key={idx} href={`${item.url}`}><li className='text-[#2C1C5F] text-xs sm:text-lg font-normal mt-2 sm:mt-4 hover:scale-105 duration-200'>{item.title}</li></Link>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div>
                                <h4 className="pointer-events-none">Contact Us</h4>
                                <ul className='text-[#2C1C5F] text-xs sm:text-lg font-normal'>
                                    {contactInfo.map((info, index) => (
                                        <li key={index} className="flex items-center space-x-2 mt-2 sm:mt-4 hover:scale-105 duration-200">
                                            {info.icon}
                                            {info.type === "email" ? (
                                                <Link href={`mailto:${info.value}`}>{info.value}</Link>
                                            ) : info.type === "phone" ? (
                                                <Link href={`tel:${info.value}`}>{info.value}</Link>
                                            ) : (
                                                <span>{info.value}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='space-y-4 md:hidden flex'>
                                <div className='flex items-center mt-6 sm:mt-10 gap-x-5 sm:gap-x-10'>
                                    <p>
                                        <Link href="/course/all-courses"> Courses</Link>
                                    </p>
                                    <p>
                                        <Link href="/course/all-courses"> Stream</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-2 md:flex-row justify-between py-6 border-t border-[#D9DBE9] mt-10 text-xs sm:text-base md:text-lg text-[#2C1C5F]'>
                    <p>Copyright © 2022 BRIX Templates</p>
                    <p>All Rights Reserved |
                        <span className="underline underline-offset-4"> Terms and Conditions </span> |
                        <span className="underline underline-offset-4"> Privacy Policy</span>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer