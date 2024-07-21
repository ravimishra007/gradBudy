"use client"

import CustomInput from '@/components/CustomInput'
import HeaderAuth from '@/components/HeaderAuth'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { selectLoggedInUser, setEmail, updateUserAsync } from '@/lib/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod';


const authFormSchema = z.object({
    email: z.string().email('Invalid email address'),
});

const ForgotPassword = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const user = useAppSelector(selectLoggedInUser);
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            email: '',
        },
    });

    const onSubmit = (data: z.infer<typeof authFormSchema>) => {
        setIsLoading(true);
        dispatch(setEmail(data.email))
        dispatch(updateUserAsync(data.email))
        setIsLoading(false);
        router.push("/reset-password")
    };

    return (
        <section className="main-background">
            <div className="max-w-xl w-full mt-16 md:mt-0 bg-white mx-4 p-5 sm:px-16 sm:py-10 rounded-[8px]">
                <HeaderAuth
                    title="Forgot Password"
                    subTitle="Please enter the email you registered with"
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

                        </>
                        <div className="flex flex-col gap-4 pt-5">
                            <Button type="submit" disabled={isLoading} className="form-btn bg-yellow-100 hover:bg-yellow-100/80 duration-150 mb-4">
                                {isLoading ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" /> &nbsp;
                                        Loading...
                                    </>
                                ) : 'Forgot'}
                            </Button>
                        </div>
                    </form>


                </Form>
            </div>
        </section>
    )
}

export default ForgotPassword