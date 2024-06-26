import MainHeader from '@/components/MainHeader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import React from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Settings = () => {
    return (
        <>
            <section className="flex-center bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-6 sm:p-12 mx-4 sm:mx-10 md:mx-16">
                    <MainHeader title="Settings" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />

                    <div className="flex-center flex-col lg:justify-between lg:flex-row gap-y-8">
                        <div className="flex-center gap-x-4 sm:gap-8">
                            <Image
                                className="h-20 w-20 sm:h-24 sm:w-24 object-cover"
                                src="/icons/profile.svg"
                                alt="Profile"
                                width={100}
                                height={100}
                            />
                            <div className="text-[#344054] capitalize">
                                <h3 className="text-lg sm:text-xl font-semibold">Your Name</h3>
                                <p className="text-base sm:text-lg font-medium">This will be displayed on the profile</p>
                            </div>
                        </div>
                        <div className="flex gap-x-8 items-center justify-around">
                            <Button className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-10 sm:px-16 duration-150 mb-4">Delete</Button>
                            <Button className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-10 sm:px-16 duration-150 mb-4">Update</Button>
                        </div>

                    </div>

                    {/* Change Name And Language */}
                    <div className="flex flex-col md:flex-row gap-8 my-8 sm:my-16 xl:mx-10">
                        <div className="w-full min-w-[66.66%] max-w-sm items-center gap-1.5 text-[#344054]">
                            <Label htmlFor="name">Change Name</Label>
                            <Input className="input-form" type="text" id="name" placeholder="Name" />
                        </div>

                        <div className="w-full md:w-1/3 text-[#344054]">
                            <Label className="mb-1" htmlFor="language">Language<span className="text-red-500">*</span></Label>
                            <Select>
                                <SelectTrigger className="input-form">
                                    <SelectValue placeholder="Select Language" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectGroup>
                                        <SelectItem value="english">English</SelectItem>
                                        <SelectItem value="hindi">Hindi</SelectItem>
                                        <SelectItem value="spanish">Spanish</SelectItem>
                                        <SelectItem value="french">French</SelectItem>
                                        <SelectItem value="german">German</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Change New Password */}
                    <div className="flex-center mx-auto flex-col md:flex-row gap-8 my-8 sm:my-16">
                        <div className="w-full md:w-2/3 max-w-sm items-center gap-1.5 text-[#344054]">
                            <Label htmlFor="current-password">Current Password<span className="text-red-500">*</span></Label>
                            <Input className="input-form" type="text" id="current-password" placeholder="Current Password" />
                        </div>
                        <div className="w-full md:w-2/3 max-w-sm items-center gap-1.5 text-[#344054]">
                            <Label htmlFor="new-password">New Password<span className="text-red-500">*</span></Label>
                            <Input className="input-form" type="text" id="new-password" placeholder="New Password" />
                        </div>
                        <div className="w-full md:w-2/3 max-w-sm items-center gap-1.5 text-[#344054]">
                            <Label htmlFor="confirm-password">Confirm New Password<span className="text-red-500">*</span></Label>
                            <Input className="input-form" type="text" id="confirm-password" placeholder="Confirm New Password" />
                        </div>
                    </div>

                    <div className="xl:mx-9 mt-4">
                        <Button className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-10 sm:px-16 duration-150 w-full">Save Details</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Settings