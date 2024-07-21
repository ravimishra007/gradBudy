'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import CustomInput from '@/components/CustomInput';
import HeaderAuth from '@/components/HeaderAuth';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { createUserAsync, selectLoggedInUser } from '@/lib/features/auth/authSlice';
import { signUpSchema } from '@/constents/schemas';
import { useRouter } from 'next/navigation';

const SignUp = () => {
    const user = useAppSelector(selectLoggedInUser);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            role: "student",
        },
    });

    const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
        setIsLoading(true);

        try {
            await dispatch(createUserAsync({ role: data.role, name: data.name, email: data.email, password: data.password })).unwrap();
            // On success, redirect to home page
            router.push('/');
        } catch (error) {
            console.error('Failed to sign up: ', error);
            // Handle error accordingly
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="main-background">
            <div className="max-w-xl w-full mt-16 lg:mt-0 mx-4 bg-white p-5 sm:px-16 sm:py-10 rounded-[8px]">
                <HeaderAuth
                    title="Create Account"
                    subTitle="Connect with your friend today!"
                />
                <Form {...form}>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            form.handleSubmit(onSubmit)();
                        }}
                        className="space-y-8"
                    >
                        <>
                            <CustomInput control={form.control} name='name' label="Full Name" placeholder='Enter your Name' />
                            <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email' />
                            <CustomInput control={form.control} name='password' label="Password" placeholder='Enter your password' />
                            <div className="flex items-center space-x-2 text-yellow-100">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms">I agree to the terms and conditions</Label>
                            </div>
                        </>
                        <div className="flex flex-col gap-4 pt-5">
                            <Button type="submit" disabled={isLoading} className="form-btn bg-yellow-100 hover:bg-yellow-100/80 duration-150 mb-4">
                                {isLoading ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" /> &nbsp;
                                        Loading...
                                    </>
                                ) : 'Sign Up'}
                            </Button>
                        </div>
                    </form>
                </Form>
                <footer className="flex justify-center gap-1">
                    <p className="text-14 font-normal text-[#6941C6]/40">
                        {"Already have an account?"}
                    </p>
                    <Link href={'/login'} className="form-link">
                        {'Sign in'}
                    </Link>
                </footer>
            </div>
        </section>
    );
};

export default SignUp;
