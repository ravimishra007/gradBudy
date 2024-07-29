"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import MainHeader from "@/components/MainHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Imagekit from "@/components/Imagekit";

interface FormData {
    name: string;
    language: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
    profilePhoto: string;
}

const Settings: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        language: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        profilePhoto: ""
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSelectChange = (value: string) => {
        setFormData((prevState) => ({
            ...prevState,
            language: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <section className="flex-center md:bg-white-100 h-full mx-auto">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full sm:p-12 sm:mx-10 px-4 md:mx-16"
            >
                <MainHeader
                    title="Settings"
                    subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                />
                <div className="flex-center flex-col lg:justify-between lg:flex-row gap-y-8">
                    <div className="flex-center gap-x-4 sm:gap-8">
                        <div className="h-16 w-16 sm:h-24 sm:w-24">
                            <label
                                htmlFor="profilePic"
                                className="flex-col justify-start items-start gap-4 inline-flex cursor-pointer"
                            >
                                <div className="self-stretch rounded-xl flex-col justify-start items-center gap-1 flex">
                                    <div className="self-stretch h-full justify-center items-center gap-10 flex">
                                        <Imagekit
                                            id="profilePic"
                                            onSuccess={(res) => {
                                                setFormData(prevState => ({
                                                    ...prevState,
                                                    profilePhoto: res.url
                                                }));
                                            }}
                                        />
                                        <Image
                                            className="h-16 w-16 sm:h-24 sm:w-24 object-cover rounded-full"
                                            src={formData.profilePhoto || "/icons/profile.svg"}
                                            alt="Profile"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="text-[#344054] capitalize">
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                                Your Name
                            </h3>
                            <p className="text-xs sm:text-base md:text-lg font-medium">
                                This will be displayed on the profile
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-x-4 sm:gap-x-8 items-center justify-around">
                        <Button
                            type="button"
                            className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-8 sm:px-16 duration-150 mb-4"
                        >
                            Delete
                        </Button>
                        <Button
                            type="button"
                            className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-8 sm:px-16 duration-150 mb-4"
                        >
                            Update
                        </Button>
                    </div>
                </div>
                {/* Change Name And Language */}
                <div className="flex flex-col md:flex-row gap-8 my-8 sm:my-16 xl:mx-10">
                    <div className="w-full min-w-[66.66%] items-center gap-1.5 text-[#344054]">
                        <Label htmlFor="name">Change Name</Label>
                        <Input
                            className="input-form w-full"
                            type="text"
                            id="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full md:w-1/3 text-[#344054]">
                        <Label className="mb-1" htmlFor="language">
                            Language<span className="text-red-500">*</span>
                        </Label>
                        <Select onValueChange={handleSelectChange}>
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
                <div className="flex-center w-full mx-auto flex-col md:flex-row gap-8 my-8 sm:my-16">
                    <div className="w-full md:w-2/3 max-w-sm items-center gap-1.5 text-[#344054]">
                        <Label htmlFor="currentPassword">
                            Current Password<span className="text-red-500">*</span>
                        </Label>
                        <Input
                            className="input-form"
                            type="password"
                            id="currentPassword"
                            name="currentPassword"
                            placeholder="Current Password"
                            value={formData.currentPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full md:w-2/3 max-w-sm items-center gap-1.5 text-[#344054]">
                        <Label htmlFor="newPassword">
                            New Password<span className="text-red-500">*</span>
                        </Label>
                        <Input
                            className="input-form"
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            placeholder="New Password"
                            value={formData.newPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full md:w-2/3 max-w-sm items-center gap-1.5 text-[#344054]">
                        <Label htmlFor="confirmPassword">
                            Confirm New Password<span className="text-red-500">*</span>
                        </Label>
                        <Input
                            className="input-form"
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm New Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="xl:mx-9 mt-4">
                    <Button
                        type="submit"
                        className="form-btn bg-yellow-100 hover:bg-yellow-100/80 py-4 sm:py-6 px-10 sm:px-16 duration-150 w-full"
                    >
                        Save Details
                    </Button>
                </div>
            </form>
        </section>
    );
};

export default Settings;
