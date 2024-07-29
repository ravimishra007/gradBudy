"use client"

import Image from 'next/image'
import Link from 'next/link'

import * as React from "react"

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
import { selectLoggedInUser, signOut } from '@/lib/features/auth/authSlice'
import { Button } from './ui/button'

import { FiChevronDown } from 'react-icons/fi';
import { fetchCartData, selectCart } from '@/lib/features/cart/CartSlice'

const Navbar = () => {
    const dispatch = useAppDispatch()
    const cart = useAppSelector(selectCart);
    const user = useAppSelector(selectLoggedInUser)
    const [user1, setUser1] = React.useState<any>(null);
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (user && user.token) {
            dispatch(fetchCartData({ userId: user?.user?.id, token: user.token }));
        }
    }, [dispatch, user]);

    const headings = [
        { id: 'manage-profile', label: 'Manage Profile', url: `/user/manage-profile2/${user?.user?.id}` },
        { id: 'all-courses', label: 'All Courses', url: '/course/all-courses' },
        { id: 'my-purchases', label: 'My Purchases', url: '/course/my-purchase' },
        { id: 'favourite-professors', label: 'Favourite Professors', url: '/course/favourite-professor' },
        { id: 'favourite-courses', label: 'Favourite Courses', url: '/course/my-learnings?tab=favourite' },
        { id: 'my-learning', label: 'My Learning', url: '/course/my-learnings?tab=registered' },
        { id: 'settings', label: 'Settings', url: '/settings' },
        { id: 'help', label: 'Help', url: '/faq' },
    ];

    React.useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser1(JSON.parse(storedUser));
        }
    }, []);

    // console.log("local Data: ", user1)


    const handleLogout = () => {
        if (user) {
            dispatch(signOut());
            console.log("Logout Success")
        }
    };

    const [openItems, setOpenItems] = React.useState<{ [key: string]: boolean }>({});

    const toggleItem = (id: string) => {
        setOpenItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const navItems = [
        {
            id: 'stream', label: 'Stream', subItems: [
                { id: 'stream1', label: 'Stream 1', url: '/stream1' },
                { id: 'stream2', label: 'Stream 2', url: '/stream2' },
                { id: 'stream3', label: 'Stream 3', url: '/stream3' }
            ]
        },
        {
            id: 'courses', label: 'Courses', subItems: [
                { id: 'course1', label: 'Advanced Management Skills', url: '/course/course-detail/1' },
                { id: 'course2', label: 'Advanced Project Management', url: '/course/course-detail/2' },
                { id: 'course3', label: 'Advanced Data Analysis', url: '/course/course-detail/3' }
            ]
        },
        { id: 'contact-us', label: 'Contact Us', url: '/contact-us' },
    ];
    if (!user) {
        const aboutUsItem = { id: 'about-us', label: 'About Us', url: '/about-us' };
        const insertIndex = 2;
        navItems.splice(insertIndex, 0, aboutUsItem);
    }
    if (user) {
        const aboutUsItem = {
            id: `${user?.user?.id}`, label: `${user?.user?.name}`, subItems: [
                { id: 'manage-profile', label: 'Manage Profile', url: '/user/manage-profile' },
                { id: 'my-purchases', label: 'My Purchases', url: '/course/my-purchase' },
                { id: 'favourite-professors', label: 'Favourite Professors', url: '/favourite-professor' },
                { id: 'favourite-courses', label: 'Favourite Courses', url: '/course/my-learnings' },
                { id: 'my-learnings', label: 'My Learnings', url: '/course/my-learnings' },
                { id: 'settings', label: 'Settings', url: '/settings' }
            ]
        };
        const insertIndex = 0;
        navItems.splice(insertIndex, 0, aboutUsItem);
    }

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest(".navigation-menu") && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <>
            {/* for Desktop  */}
            <nav className="w-full h-20 hidden lg:flex items-center justify-between px-6 sm:px-12 md:px-20 bg-white">
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

                {/* User Profile */}
                <div className='flex-center gap-12 relative'>
                    <div className='flex-center gap-8'>
                        <div className=''>
                            <NavigationMenuDemo />
                        </div>

                        {user && <Link href="/course/my-cart">
                            <div className='relative'>
                                <Image
                                    src="/icons/cart.svg"
                                    alt="Profile"
                                    width={25}
                                    height={25}
                                    priority
                                />
                                {cart && cart.length > 0 && (
                                    <span className="font-semibold text-base absolute -top-4 -right-1 animate-bounce bg-yellow-100/50 text-white rounded-full px-2">
                                        {cart.length}
                                    </span>
                                )}
                            </div>
                        </Link>}
                    </div>

                    {user ? (
                        <div className="flex-center gap-4 relative bg-white-100 p-2 px-3 rounded-full">
                            <h2 className="nav-heading hidden md:inline-block" >{user?.user?.name}</h2>
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
                                        {headings.map((heading) => (
                                            <SheetTitle className='border-b hover:bg-white-100' key={heading.id}>
                                                <Link href={heading.url}>{heading.label}</Link>
                                            </SheetTitle>
                                        ))}
                                        <SheetTitle className='border-b before:hover:bg-white-100'>
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
                    ) : (
                        <div>
                            <Button className="text-white text-base font-semibold rounded-full cursor-pointer bg-[#2C1C5F] hover:bg-[#2C1C5F]/90 duration-150 hover:scale-95 py-2 px-7"><Link href="login">Sign In</Link></Button>
                        </div>
                    )}
                </div>
            </nav>

            {/* for Mobile  */}
            <nav className='w-full h-20 px-4 lg:hidden flex justify-between items-center'>

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
                <div className='flex-center flex-row-reverse gap-x-8'>
                    <div>
                        <Sheet>
                            <SheetTrigger>
                                <Image
                                    src="/icons/menu.svg"
                                    alt="Profile"
                                    width={30}
                                    height={15}
                                    priority
                                />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle className='flex-center text-[#2C1C5F] text-base font-semibold border-b border-[#2C1C5F] text-center'>
                                        <Image
                                            src="/next.svg"
                                            alt="Logo"
                                            width={100}
                                            height={100}
                                            priority
                                        />
                                    </SheetTitle>
                                    <SheetTitle>
                                        <nav className="w-full">
                                            <ul className='flex flex-col'>
                                                {navItems.map((item) => (
                                                    <li key={item.id} className='border-b text-sm sm:text-base my-2 pb-4'>
                                                        <div onClick={() => toggleItem(item.id)} className='flex justify-between items-center'>
                                                            {item.subItems ? (
                                                                <div className='flex items-center gap-x-2'>
                                                                    {user && (navItems[0].label === item.label) && <Image
                                                                        className='h-[30px] w-[30px] object-cover rounded-full'
                                                                        src="/icons/profile.svg"
                                                                        alt="Logo"
                                                                        width={30}
                                                                        height={30}
                                                                        priority
                                                                    />}
                                                                    <span className='font-semibold'>{item.label}</span>
                                                                </div>
                                                            ) : (
                                                                <Link
                                                                    href={item.url} className='font-semibold'>{item.label}</Link>
                                                            )}
                                                            {item.subItems && (
                                                                <button
                                                                    className='text-xl'

                                                                >
                                                                    <FiChevronDown />
                                                                </button>
                                                            )}
                                                        </div>
                                                        {item.subItems && openItems[item.id] && (
                                                            <ul className='pl-4 pt-2'>
                                                                {item.subItems.map((subItem) => (
                                                                    <li className="text-xs sm:text-sm pb-3 font-medium text-black/80" key={subItem.id}>
                                                                        <Link href={subItem.url}>{subItem.label}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </SheetTitle>

                                    {user ? (<SheetTitle className='border-b text-sm sm:text-base'>
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
                                    </SheetTitle>) : (
                                        <SheetTitle className='border-b text-sm sm:text-base' >
                                            <Link href="/login">Login</Link>
                                        </SheetTitle>
                                    )}
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                    {user && <Link href="/course/my-cart">
                        <div className='relative'>
                            <Image
                                src="/icons/cart.svg"
                                alt="Profile"
                                width={25}
                                height={25}
                                priority
                            />
                            {cart && cart.length > 0 && (
                                <span className="font-semibold text-base absolute -top-4 -right-1 animate-bounce bg-yellow-100/50 text-white rounded-full px-2">
                                    {cart.length}
                                </span>
                            )}
                        </div>
                    </Link>}
                </div>
            </nav>
        </>
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

    const user = useAppSelector(selectLoggedInUser)

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Course</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <ListItem href="/course/course-detail/1" title="Advanced Management Skills">
                                By John Doe from Indian Institute of Technology Madras
                            </ListItem>
                            <ListItem href="/course/course-detail/2" title="Advanced Project Management">
                                By Jane Smith from Indian Institute of Technology Delhi
                            </ListItem>
                            <ListItem href="/course/course-detail/3" title="Advanced Data Analysis">
                                By Alice Johnson from Indian Institute of Technology Bombay
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

                {user ? (
                    <NavigationMenuItem>
                        <Link href="/course/my-learnings" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                My Learnings
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ) : (
                    <NavigationMenuItem>
                        <Link href="/about-us" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About Us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                )}

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