import Image from 'next/image'
import Link from 'next/link'

import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface SheetTitleProps {
    children: string;
}

const headings: string[] = [
    'Manage Profile',
    'My Purchases',
    'Favourite Professors',
    'Favourite Courses',
    'My Learning',
    'Learning Coins',
    'Settings',
    'Help',
];


const Navbar = () => {
    return (
        <nav className="w-full h-20 flex items-center justify-between px-6 sm:px-12 md:px-20 bg-white">
            {/* Logo */}
            <div className="text-xl font-bold">
                <Link href="/">
                    <Image
                        src="/next.svg"
                        alt="Logo"
                        width={100}
                        height={100}
                        priority
                    />
                </Link>
            </div>

            {/* Search */}
            <div className='hidden xl:flex-center gap-12 '>
                <h3 className="nav-heading">
                    Course 1
                </h3>

                <div className="max-w-md relative">
                    <Image
                        className="absolute top-3 left-3 opacity-80"
                        src="/icons/search.svg"
                        alt="Search"
                        width={20}
                        height={20}
                        priority
                    />

                    <input type="text" className="rounded-[8px] max-w-[467px] w-full outline-none py-2 bg-white border border-[#D0D5DD] text-[#344054] pl-10 px-6" placeholder="Search" />
                </div>

                <Select>
                    <SelectTrigger className="w-[150px] rounded-[8px] bg-white border-[#D0D5DD] font-semibold text-[#344054] gap-x-4">

                        <Image src="/icons/filter-lines.svg" width={20} height={20} alt="Filter" />
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                        <SelectGroup>
                            <SelectItem className='border-b cursor-pointer' value="stream">By Stream</SelectItem>
                            <SelectItem className='border-b cursor-pointer' value="subject">By Subject/Topic</SelectItem>
                            <SelectItem className='cursor-pointer' value="collage">By Collages</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* User Profile */}
            <div className='flex-center gap-12 relative'>
                <Image
                    src="/icons/cart.svg"
                    alt="Profile"
                    width={25}
                    height={25}
                    priority
                />

                <div className="flex-center gap-4 relative">
                    <h2 className="nav-heading hidden md:inline-block" >Account Name</h2>
                    <Sheet>
                        <SheetTrigger>
                            <Image
                            className="object-cover"
                                src="/icons/profile.svg"
                                alt="Profile"
                                width={30}
                                height={30}
                                priority
                            />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                {headings.map((heading, index) => (
                                    <SheetTitle key={index}>{heading}</SheetTitle>
                                ))}
                                <SheetTitle>
                                    <AlertDialog>
                                        <AlertDialogTrigger>Logout</AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you sure you want to discontinue your learning journey?</AlertDialogTitle>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter >
                                                <AlertDialogCancel>Stay Login</AlertDialogCancel>
                                                <AlertDialogAction>Log Out</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </SheetTitle>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

export default Navbar