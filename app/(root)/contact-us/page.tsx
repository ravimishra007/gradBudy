import HeaderAuth from '@/components/HeaderAuth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const ContactUs = () => {
    return (
        <>
            <section className="flex-center bg-white mx-auto">
                <div className="max-w-[1440px] sm:my-10 w-full p-4 sm:p-12 sm:mx-10 md:mx-16 space-y-6 sm:space-y-10 md:space-y-16 lg:space-y-24 xl:space-y-32">
                    <div className="flex gap-10 sm:gap-16 flex-col lg:flex-row">
                        {/* Let's Get in Touch Form  */}
                        <div className="max-w-xl py-10 bg-white rounded-[8px] [box-shadow:2px_2px_40px_4px_rgba(105,_65,_198,_0.15)] lg:w-1/2">

                            <HeaderAuth
                                title="Let's Get in Touch"
                                subTitle="Connect with your friend today!"
                            />

                            <form className="w-full min-w-[66.66%] max-w-sm items-center gap-2 text-[#344054] p-4 sm:px-0 sm:pb-0 pt-5 mx-auto">
                                <Label htmlFor="name" className="mb-2">Enter Name</Label>
                                <Input className="input-form mb-4 sm:mb-6" type="text" id="name" placeholder="Name" />

                                <Label htmlFor="email" className="mb-2">Email Address</Label>
                                <Input className="input-form mb-4 sm:mb-6" type="email" id="email" placeholder="Email Address" />

                                <Label htmlFor="number" className="mb-2">Phone Number</Label>
                                <Input className="input-form mb-4 sm:mb-6" type="tel" id="number" placeholder="Phone Number" />

                                <Label htmlFor="message-2" className="mb-2">Message</Label>
                                <Textarea className="input-form mb-4 sm:mb-6" placeholder="Type your message here." id="message-2" />

                                <div className="mt-8 -mb-4 sm:mb-0">
                                    <Button className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6  duration-150 w-full">Save Details</Button>
                                </div>
                            </form>
                        </div>


                        <div className="text-[#344054] flex-center flex-col lg:w-1/2 lg:p-5">
                            <div className="text-center lg:mb-8">
                                <h2 className="subHeading text-black">Contact Us</h2>
                                <p className="text-lg font-medium mt-6 mx-8">“Lorem ipsum dolor sit , consectetur adipiscing elit. Turpis donec amet proin nec in diam viverra. “Lorem ipsum</p>
                            </div>
                            <div className="my-10 space-y-6 md:space-y-10 lg:space-y-20">
                                <AddressCard title="Address" address="Lorem ipsum dolor sit , consectetur adipiscing elit. Turpis donec amet proin nec in diam viverra. “Lorem ipsum" />
                                <AddressCard title="Address" address="Lorem ipsum dolor sit , consectetur adipiscing elit. Turpis donec amet proin nec in diam viverra. “Lorem ipsum" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const AddressCard = ({ title, address }: { title: string; address: string }) => {
    return (
        <div className="flex gap-x-4 w-full max-w-[324px] [box-shadow:2px_2px_40px_4px_rgba(105,_65,_198,_0.15)] px-10 rounded-[8px] border border-[rgba(208,213,221,0.40)]">
            <div className="w-7 h-12 bg-[#2C1C5F]" />
            <div className="py-4 pb-5 pl-5 ">
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <p className="text-sm font-medium">{address}</p>
            </div>
        </div>
    )
};

export default ContactUs