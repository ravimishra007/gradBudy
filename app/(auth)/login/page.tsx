'use client';

import React, { useEffect, useState } from 'react';
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
import { checkUserAsync, selectError, selectLoggedInUser } from '@/lib/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { loginSchema } from '@/constents/schemas';
import { useRouter } from 'next/navigation';

const SignIn = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const globalError = useAppSelector(selectError);
    // const user = useAppSelector(selectLoggedInUser);
    const [isLoading, setIsLoading] = useState(false);
    const [localError, setLocalError] = useState<String | null>('');

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        setIsLoading(true);
        console.log(data);

        try {
            await dispatch(checkUserAsync({ email: data.email, password: data.password })).unwrap();
            // On success, redirect to home page
            router.push('/');
        } catch (error) {
            if (error instanceof Error) {
                setLocalError(error.message);
                console.error('Failed to log in: ', error);
            } else {
                setLocalError('wrong email and password');
                console.error('An unknown error occurred', error);
            }

            setTimeout(() => {
                setLocalError(null);
            }, 2000);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="main-background">
            <div className="max-w-xl w-full mt-16 lg:mt-0 bg-white p-5 mx-4 sm:px-16 sm:py-10 rounded-[8px]">
                <HeaderAuth
                    title="Hi, Welcome Back!"
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
                            <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email' />
                            <CustomInput control={form.control} name='password' label="Password" placeholder='Enter your password' />
                            {localError && <span className='text-[#FF0808] ml-4 text-xs font-normal text-start'>{localError}</span>}
                            <div className='flex justify-between'>
                                <div className="flex items-center space-x-2 text-yellow-100">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms">Remember Me</Label>
                                </div>
                                <Link href='/forget-password'>
                                    <Label className='text-[#FF0808] cursor-pointer' htmlFor="terms">Forget Password</Label>
                                </Link>
                            </div>
                        </>
                        <div className="flex flex-col gap-4 pt-5">
                            <Button type="submit" disabled={isLoading} className="form-btn bg-yellow-100 hover:bg-yellow-100/80 duration-150 mb-4">
                                {isLoading ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" /> &nbsp;
                                        Loading...
                                    </>
                                ) : 'Sign In'}
                            </Button>
                        </div>
                    </form>
                </Form>
                <footer className="flex justify-center gap-1">
                    <p className="text-14 font-normal text-[#6941C6]/40">
                        {"Don't have an account?"}
                    </p>
                    <Link href={'/signup'} className="form-link">
                        {'Sign Up'}
                    </Link>
                </footer>
            </div>
        </section>
    );
}

export default SignIn;
