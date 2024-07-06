"use client"

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
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/store'

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { selectLoggedInUser, signOutAsync } from '@/lib/features/auth/authSlice'

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
    const dispatch = useAppDispatch()
    const cart = useAppSelector((state: RootState) => state.cart.cart);
    const user = useAppSelector(selectLoggedInUser)

    const handleLogout = () => {
        if (user && user.id) {
            dispatch(signOutAsync(user.id));
        }
    };

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
            {/* <div className='hidden xl:flex-center gap-12 '>
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
            </div> */}

            <div className='hidden lg:block'>
                <NavigationMenuDemo />
            </div>

            {/* User Profile */}
            <div className='flex-center gap-12 relative'>
                <Link href="/course/my-cart">
                    <div className='relative'>
                        <Image
                            src="/icons/cart.svg"
                            alt="Profile"
                            width={25}
                            height={25}
                            priority
                        />
                        <span className="font-semibold text-base absolute -top-4 -right-1 animate-bounce bg-yellow-100/50 text-white rounded-full px-2">{cart.length}</span>
                    </div>
                </Link>

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
                                                <AlertDialogAction onClick={handleLogout}>Log Out</AlertDialogAction>
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

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Course</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <ListItem href="/docs" title="Introduction">
                                Re-usable components built using Radix UI and Tailwind CSS.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Installation">
                                How to install dependencies and structure your app.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Typography">
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Stream</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/contact-us" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Contact Us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/course/my-learnings" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            My Learnings
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"


export default Navbar